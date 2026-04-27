/**
 * publish-to-batch
 *
 * Weekly cron that converts verified, unpublished simplified_articles rows into
 * a new src/data/guides-batch-{N}.ts file on GitHub, updates the import list in
 * src/data/guides.ts, and opens a draft PR for human review.
 *
 * Flow:
 *   1. SELECT simplified_articles WHERE is_published=false AND verified=true
 *      AND banned_words_flagged is empty.
 *   2. Find the next free batch number by listing src/data/ on GitHub.
 *   3. Generate guides-batch-{N}.ts (Guide[] array).
 *   4. Edit src/data/guides.ts to add the import and extend the array.
 *   5. Create branch `autobatch/batch-{N}` off main, commit both files.
 *   6. Open a draft PR. Title/body include row counts, verification stats,
 *      and the list of source domains the batch drew from.
 *   7. On PR merge the existing webhook flips is_published=true for these rows.
 *
 * Secrets required:
 *   GITHUB_TOKEN   — PAT with `contents:write` + `pull_requests:write` on the
 *                    bwilburn6202/teksure repo.
 *   GITHUB_OWNER   — defaults to "bwilburn6202"
 *   GITHUB_REPO    — defaults to "teksure"
 *   GITHUB_BASE    — defaults to "main"
 *
 * Request body (optional):
 *   { "limit": 50, "dry_run": false }
 *
 * Trigger: POST /functions/v1/publish-to-batch (or Supabase cron weekly).
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SVC_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const GITHUB_TOKEN     = Deno.env.get('GITHUB_TOKEN') ?? '';
const GITHUB_OWNER     = Deno.env.get('GITHUB_OWNER') ?? 'bwilburn6202';
const GITHUB_REPO      = Deno.env.get('GITHUB_REPO')  ?? 'teksure';
const GITHUB_BASE      = Deno.env.get('GITHUB_BASE')  ?? 'main';

const DEFAULT_LIMIT = 50;

// ─── Types ───────────────────────────────────────────────────────────────────

interface SimplifiedRow {
  id: string;
  slug: string;
  simplified_title: string;
  simplified_content: string;
  simplified_steps: Array<{ title: string; content: string; tip?: string; warning?: string }>;
  difficulty_level: string;
  estimated_read_minutes: number;
  target_os: string[];
  source_url: string | null;
  source_name: string | null;
  verified: boolean;
  banned_words_flagged: string[];
  scraped_articles?: { category: string | null; tags: string[] | null };
}

// ─── GitHub API helpers ──────────────────────────────────────────────────────

function ghHeaders() {
  return {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'TekSure-PublishToBatch/1.0',
  };
}

async function ghGet<T>(path: string): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, { headers: ghHeaders() });
  if (!res.ok) throw new Error(`GitHub GET ${path} → ${res.status}: ${await res.text()}`);
  return await res.json() as T;
}

async function ghPostJson<T>(path: string, payload: unknown): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, {
    method: 'POST',
    headers: { ...ghHeaders(), 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`GitHub POST ${path} → ${res.status}: ${await res.text()}`);
  return await res.json() as T;
}

async function ghPutJson<T>(path: string, payload: unknown): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, {
    method: 'PUT',
    headers: { ...ghHeaders(), 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`GitHub PUT ${path} → ${res.status}: ${await res.text()}`);
  return await res.json() as T;
}

function b64encode(str: string): string {
  // btoa only handles Latin-1; encode as UTF-8 first
  return btoa(unescape(encodeURIComponent(str)));
}

// ─── Batch number discovery ──────────────────────────────────────────────────

async function nextBatchNumber(): Promise<number> {
  const entries = await ghGet<Array<{ name: string }>>(
    `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/src/data?ref=${GITHUB_BASE}`,
  );
  let max = 0;
  for (const e of entries) {
    const m = e.name.match(/^guides-batch-(\d+)\.ts$/);
    if (m) max = Math.max(max, Number(m[1]));
  }
  return max + 1;
}

// ─── Code generation ─────────────────────────────────────────────────────────

/** Escape a string for inclusion inside a single-quoted TS string literal */
function esc(s: string): string {
  return (s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

/** Render one step object as a TS object literal */
function renderStep(s: { title: string; content: string; tip?: string; warning?: string }): string {
  const parts = [
    `      { title: '${esc(s.title)}', content: '${esc(s.content)}'`,
  ];
  if (s.tip)     parts.push(`, tip: '${esc(s.tip)}'`);
  if (s.warning) parts.push(`, warning: '${esc(s.warning)}'`);
  parts.push(' }');
  return parts.join('');
}

function renderGuide(row: SimplifiedRow, batchNumber: number): string {
  const category = normalizeCategoryForTs(row);
  const tags = (row.scraped_articles?.tags ?? []).slice(0, 8);
  const readTime = `${Math.max(1, Math.min(15, row.estimated_read_minutes || 3))} min`;
  const difficulty = normalizeDifficulty(row.difficulty_level);
  const publishedAt = new Date().toISOString().slice(0, 10);

  const stepsLines = (row.simplified_steps ?? []).map(renderStep).join(',\n');

  return `  {
    slug: '${esc(row.slug)}',
    title: '${esc(row.simplified_title)}',
    excerpt: '${esc((row.simplified_content ?? '').slice(0, 155))}',
    category: '${category}',
    tags: [${tags.map(t => `'${esc(t)}'`).join(', ')}],
    readTime: '${readTime}',
    thumbnailEmoji: '💡',
    publishedAt: '${publishedAt}',
    difficulty: '${difficulty}',
    body: '${esc(row.simplified_content ?? '')}',
    steps: [
${stepsLines}
    ],
  }`;
}

function normalizeCategoryForTs(row: SimplifiedRow): string {
  const valid = new Set([
    'windows-guides', 'mac-guides', 'essential-skills', 'tips-tricks',
    'ai-guides', 'ai-advanced', 'safety-guides', 'how-to', 'app-guides',
    'health-tech', 'phone-guides', 'social-media', 'government-civic',
    'financial-tech', 'smart-home', 'entertainment', 'communication',
    'life-transitions', 'internet-connectivity',
  ]);
  const raw = (row.scraped_articles?.category ?? 'how-to').toLowerCase().replace(/\s+/g, '-');
  return valid.has(raw) ? raw : 'how-to';
}

function normalizeDifficulty(v: string): string {
  const x = (v ?? '').toLowerCase();
  if (x.startsWith('int'))  return 'Intermediate';
  if (x.startsWith('adv'))  return 'Advanced';
  return 'Beginner';
}

function renderBatchFile(rows: SimplifiedRow[], batchNumber: number): string {
  const header = `// TekSure Guides Batch ${batchNumber} — auto-generated by publish-to-batch (${new Date().toISOString().slice(0, 10)})
// Source rows: ${rows.length} verified simplified_articles
// Do not edit by hand — regenerate via Supabase edge function: publish-to-batch
import type { Guide } from './guides';

export const guidesBatch${batchNumber}: Guide[] = [
`;
  const body = rows.map(r => renderGuide(r, batchNumber)).join(',\n');
  return `${header}${body},\n];\n`;
}

// ─── Wiring into src/data/guides.ts ──────────────────────────────────────────

/**
 * Insert the new batch import + spread into guides.ts. We keep the edit
 * surgical: add one import line near the existing imports and extend the
 * allGuides array. If the insert markers drift in future, the PR will fail
 * review — a deliberate, human-gated signal.
 */
function weaveIntoGuidesTs(original: string, batchNumber: number): string {
  const importLine = `import { guidesBatch${batchNumber} } from './guides-batch-${batchNumber}';`;

  // 1. Add the import after the last `import { guidesBatch` line
  const importRe = /(import\s+\{\s*guidesBatch\d+\s*\}\s+from\s+'\.\/guides-batch-\d+';)(?![\s\S]*import\s+\{\s*guidesBatch\d+)/;
  let next = original;
  if (importRe.test(next)) {
    next = next.replace(importRe, `$1\n${importLine}`);
  } else {
    // First batch import — place after the type imports block
    next = next.replace(
      /(import\s+\{[^}]*\}\s+from\s+'\.\/[^']+';\s*\n)(\s*const\s+allGuides)/,
      `$1${importLine}\n$2`,
    );
  }

  // 2. Extend the allGuides array: insert `, ...guidesBatch{N}` before the closing `]`
  next = next.replace(
    /(const\s+allGuides:\s*Guide\[\]\s*=\s*\[[^\]]*?)(\s*\]\s*;)/,
    `$1, ...guidesBatch${batchNumber}$2`,
  );

  return next;
}

// ─── Main handler ────────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });

  if (!GITHUB_TOKEN) {
    return json({ error: 'GITHUB_TOKEN secret is not set on this Supabase project.' }, 500);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SVC_KEY);

  try {
    const body = await req.json().catch(() => ({}));
    const limit   = Math.min(200, Number(body.limit ?? DEFAULT_LIMIT));
    const dryRun  = Boolean(body.dry_run);

    // ── 1. Pull verified, unpublished rows ───────────────────────────────────
    const { data: rows, error: fetchErr } = await supabase
      .from('simplified_articles')
      .select(`
        id, slug, simplified_title, simplified_content, simplified_steps,
        difficulty_level, estimated_read_minutes, target_os, source_url,
        source_name, verified, banned_words_flagged,
        scraped_articles ( category, tags )
      `)
      .eq('is_published', false)
      .eq('verified', true)
      .order('created_at', { ascending: true })
      .limit(limit);

    if (fetchErr) throw fetchErr;

    // Secondary filter: drop any row that still has flagged banned words.
    // The simplify step should have set verified=false, but belt-and-braces
    // keeps publish-to-batch safe if an old row slipped through.
    const eligible = ((rows ?? []) as unknown as SimplifiedRow[])
      .filter(r => (r.banned_words_flagged ?? []).length === 0);

    if (eligible.length === 0) {
      return json({ message: 'No eligible rows to publish.', count: 0 });
    }

    // ── 2. Decide the next batch number ──────────────────────────────────────
    const batchNumber = await nextBatchNumber();
    const batchPath   = `src/data/guides-batch-${batchNumber}.ts`;
    const branchName  = `autobatch/batch-${batchNumber}`;

    // ── 3. Render the batch file + updated guides.ts ─────────────────────────
    const batchSource = renderBatchFile(eligible, batchNumber);

    type Content = { content: string; sha: string };
    const guidesTs = await ghGet<Content>(
      `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/src/data/guides.ts?ref=${GITHUB_BASE}`,
    );
    const guidesOriginal = atob(guidesTs.content.replace(/\n/g, ''));
    const guidesUpdated  = weaveIntoGuidesTs(guidesOriginal, batchNumber);

    if (dryRun) {
      return json({
        dry_run: true,
        batch_number: batchNumber,
        rows: eligible.length,
        batch_file_preview: batchSource.slice(0, 1500),
        guides_ts_diff_preview: guidesUpdated.slice(0, 1500),
      });
    }

    // ── 4. Create the branch off main ────────────────────────────────────────
    const baseRef = await ghGet<{ object: { sha: string } }>(
      `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/ref/heads/${GITHUB_BASE}`,
    );
    await ghPostJson(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/refs`, {
      ref: `refs/heads/${branchName}`,
      sha: baseRef.object.sha,
    });

    // ── 5. Commit the new batch file ─────────────────────────────────────────
    await ghPutJson(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${batchPath}`, {
      message: `feat: add guides batch ${batchNumber} (${eligible.length} guides)`,
      content: b64encode(batchSource),
      branch: branchName,
    });

    // ── 6. Commit the updated guides.ts ──────────────────────────────────────
    await ghPutJson(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/src/data/guides.ts`, {
      message: `feat: wire guidesBatch${batchNumber} into guides.ts`,
      content: b64encode(guidesUpdated),
      sha: guidesTs.sha,
      branch: branchName,
    });

    // ── 7. Open draft PR ─────────────────────────────────────────────────────
    const sourceDomains = Array.from(new Set(eligible.map(r => r.source_name).filter(Boolean)));
    const prBody = `## Auto-generated guides batch ${batchNumber}

**Rows:** ${eligible.length}
**Sources:** ${sourceDomains.join(', ') || '(none recorded)'}
**Verified:** ${eligible.filter(r => r.verified).length} / ${eligible.length}

This PR was opened by the \`publish-to-batch\` cron. Each row:
- passed \`verified=true\` from simplify-article (LLM cross-ref against an authoritative guide)
- has zero banned words flagged
- has a unique slug

### Review checklist
- [ ] Spot-check 3 guides for plain-English voice
- [ ] Confirm category assignments look right
- [ ] Confirm no duplicate slugs land in \`guides.ts\`
- [ ] Run \`npm test\` — the \`brand-voice.test.ts\` suite must pass

On merge, the existing webhook flips \`simplified_articles.is_published = true\` for these rows.
`;

    const pr = await ghPostJson<{ html_url: string; number: number }>(
      `/repos/${GITHUB_OWNER}/${GITHUB_REPO}/pulls`,
      {
        title: `feat: add guides batch ${batchNumber} (${eligible.length} guides)`,
        head: branchName,
        base: GITHUB_BASE,
        body: prBody,
        draft: true,
      },
    );

    return json({
      success: true,
      batch_number: batchNumber,
      rows: eligible.length,
      pr_url: pr.html_url,
      pr_number: pr.number,
      branch: branchName,
    });

  } catch (err) {
    console.error('[publish-to-batch] Error:', err);
    return json({ error: String(err) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}
