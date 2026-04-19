/**
 * ingest-knowledge
 *
 * Bridges the scrape → simplify pipeline to the TekSure Brain's knowledge
 * base. Finds `simplified_articles` rows with `verification_status` in
 * ('verified','partial') that have no matching `knowledge_documents` entry,
 * renders each as a readable markdown document (title + body + steps +
 * attribution footer), and upserts into `knowledge_documents`.
 *
 * Modes
 *   Single: POST { "simplified_article_id": "<uuid>" } — process one row.
 *   Bulk:   POST {} (or no body)                       — process up to
 *                                                        `BATCH_LIMIT` rows.
 *
 * Idempotent: `knowledge_documents.source_article_id` is UNIQUE, so repeat
 * runs over the same row upsert instead of duplicating. Safe to cron hourly
 * and to call fire-and-forget from `simplify-article` after each insert.
 *
 * Auth: service_role JWT. No public access.
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─── Config ───────────────────────────────────────────────────────────────────

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SVC_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

/** Max rows processed per bulk invocation (keeps runtime < 120s). */
const BATCH_LIMIT = 50;

// ─── Types ───────────────────────────────────────────────────────────────────

interface SimplifiedRow {
  id: string;
  scraped_article_id: string;
  simplified_title: string;
  simplified_content: string;
  simplified_steps: unknown;
  difficulty_level: string;
  estimated_read_minutes: number;
  slug: string;
  category: string | null;
  tags: string[] | null;
  emoji: string | null;
  excerpt: string | null;
  verification_status: 'verified' | 'partial' | 'rejected' | null;
  verification_notes: string | null;
  attribution: {
    source_name?: string;
    source_url?: string;
    author?: string | null;
  } | null;
  guide_json: unknown;
  scraped_articles: {
    original_url: string;
    original_published_at: string | null;
  } | null;
}

interface GuideStep {
  title: string;
  content: string;
  tip?: string;
  warning?: string;
}

// ─── Markdown rendering ──────────────────────────────────────────────────────

/**
 * Render a simplified article as a single markdown document suitable for
 * Brain RAG context. Includes attribution footer + verification metadata so
 * downstream LLM answers can cite the source.
 */
function renderMarkdown(row: SimplifiedRow): string {
  const sourceUrl  = row.attribution?.source_url  ?? row.scraped_articles?.original_url ?? '';
  const sourceName = row.attribution?.source_name ?? 'Unknown source';
  const author     = row.attribution?.author;

  const stepsArr: GuideStep[] = Array.isArray(row.simplified_steps)
    ? row.simplified_steps as GuideStep[]
    : [];

  const parts: string[] = [];

  // Header
  parts.push(`# ${row.simplified_title}`);
  if (row.excerpt) parts.push(`\n> ${row.excerpt}\n`);

  // Body
  parts.push(row.simplified_content.trim());

  // Steps
  if (stepsArr.length > 0) {
    parts.push('\n## Step-by-step\n');
    stepsArr.forEach((step, i) => {
      parts.push(`${i + 1}. **${step.title}**`);
      if (step.content) parts.push(`   ${step.content}`);
      if (step.tip)     parts.push(`   💡 Quick Tip: ${step.tip}`);
      if (step.warning) parts.push(`   ⚠️ Warning: ${step.warning}`);
    });
  }

  // Attribution footer
  parts.push('\n---');
  parts.push(`**Source:** [${sourceName}](${sourceUrl})${author ? ` · Author: ${author}` : ''}`);
  if (row.category) parts.push(`**Category:** ${row.category}`);
  if (row.tags && row.tags.length) parts.push(`**Tags:** ${row.tags.join(', ')}`);
  parts.push(`**Difficulty:** ${row.difficulty_level} · **Read time:** ${row.estimated_read_minutes} min`);
  parts.push(`**Verification:** ${row.verification_status ?? 'unverified'}`);
  if (row.verification_status === 'partial' && row.verification_notes) {
    parts.push(`**Unverified parts:** ${row.verification_notes}`);
  }

  return parts.join('\n');
}

// ─── Ingest a single row ──────────────────────────────────────────────────────

async function ingestRow(
  supabase: ReturnType<typeof createClient>,
  row: SimplifiedRow,
): Promise<{ ok: true; knowledge_document_id: string } | { ok: false; reason: string }> {

  if (!row.verification_status || row.verification_status === 'rejected') {
    return { ok: false, reason: `skipping ${row.id}: verification_status=${row.verification_status}` };
  }

  const sourceUrl = row.attribution?.source_url ?? row.scraped_articles?.original_url ?? '';
  if (!sourceUrl) {
    return { ok: false, reason: `skipping ${row.id}: no source URL` };
  }

  const markdown = renderMarkdown(row);

  // Keywords = tags, fall back to category as a single-keyword array
  const keywords: string[] = Array.isArray(row.tags) && row.tags.length
    ? row.tags
    : row.category ? [row.category] : [];

  const summary = row.excerpt?.trim() ?? row.simplified_content.slice(0, 200);

  // Upsert keyed on source_article_id (UNIQUE)
  const { data, error } = await supabase
    .from('knowledge_documents')
    .upsert(
      {
        source_article_id: row.scraped_article_id,
        title:             row.simplified_title,
        source_url:        sourceUrl,
        summary,
        keywords,
        markdown,
        compile_status:    'ready',
        model_name:        'claude-haiku-4-5-20251001',
      },
      { onConflict: 'source_article_id' },
    )
    .select('id')
    .single();

  if (error) return { ok: false, reason: `upsert: ${error.message}` };

  return { ok: true, knowledge_document_id: (data as { id: string }).id };
}

// ─── Row fetcher ──────────────────────────────────────────────────────────────

const SELECT_COLUMNS = `
  id,
  scraped_article_id,
  simplified_title,
  simplified_content,
  simplified_steps,
  difficulty_level,
  estimated_read_minutes,
  slug,
  category,
  tags,
  emoji,
  excerpt,
  verification_status,
  verification_notes,
  attribution,
  guide_json,
  scraped_articles (
    original_url,
    original_published_at
  )
`;

async function fetchOne(supabase: ReturnType<typeof createClient>, simplifiedId: string) {
  const { data, error } = await supabase
    .from('simplified_articles')
    .select(SELECT_COLUMNS)
    .eq('id', simplifiedId)
    .maybeSingle();
  if (error) throw error;
  return data as unknown as SimplifiedRow | null;
}

/**
 * Fetch up to BATCH_LIMIT simplified articles that are verified/partial AND
 * have no matching knowledge_documents row yet. Done client-side to avoid
 * complex cross-table joins in PostgREST: pull verified IDs, pull existing
 * knowledge document IDs, filter the difference.
 */
async function fetchBulkPending(
  supabase: ReturnType<typeof createClient>,
): Promise<SimplifiedRow[]> {
  const { data: verified, error: vErr } = await supabase
    .from('simplified_articles')
    .select(SELECT_COLUMNS)
    .in('verification_status', ['verified', 'partial'])
    .order('created_at', { ascending: true })
    .limit(BATCH_LIMIT * 4); // fetch extra; we'll slice after filtering

  if (vErr) throw vErr;
  const rows = (verified ?? []) as unknown as SimplifiedRow[];
  if (rows.length === 0) return [];

  const scrapedIds = rows.map(r => r.scraped_article_id);

  const { data: alreadyIngested, error: aErr } = await supabase
    .from('knowledge_documents')
    .select('source_article_id')
    .in('source_article_id', scrapedIds);

  if (aErr) throw aErr;
  const ingested = new Set(
    (alreadyIngested ?? []).map((r: { source_article_id: string }) => r.source_article_id),
  );

  return rows.filter(r => !ingested.has(r.scraped_article_id)).slice(0, BATCH_LIMIT);
}

// ─── HTTP handler ─────────────────────────────────────────────────────────────

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });

  const supabase = createClient(SUPABASE_URL, SUPABASE_SVC_KEY);

  try {
    const body = await req.json().catch(() => ({}));
    const simplifiedId: string | undefined = body?.simplified_article_id;

    // ── Single-row mode ───────────────────────────────────────────────────────
    if (simplifiedId) {
      const row = await fetchOne(supabase, simplifiedId);
      if (!row) return json({ error: `No simplified_articles row ${simplifiedId}` }, 404);

      const result = await ingestRow(supabase, row);
      console.log(`[ingest-knowledge] single ${simplifiedId} → ${JSON.stringify(result)}`);
      return json(result);
    }

    // ── Bulk mode ─────────────────────────────────────────────────────────────
    const rows = await fetchBulkPending(supabase);
    console.log(`[ingest-knowledge] bulk: ${rows.length} pending rows`);

    const results = { ingested: 0, skipped: 0, errors: [] as string[] };
    for (const row of rows) {
      const r = await ingestRow(supabase, row);
      if (r.ok) {
        results.ingested++;
      } else {
        results.skipped++;
        results.errors.push(r.reason);
      }
    }

    return json({ success: true, processed: rows.length, ...results });

  } catch (err) {
    console.error('[ingest-knowledge] fatal:', err);
    return json({ error: String(err) }, 500);
  }
});
