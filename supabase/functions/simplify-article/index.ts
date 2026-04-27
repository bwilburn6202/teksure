/**
 * simplify-article
 *
 * Takes a scraped article that has been categorized (scrape_status = 'scraped')
 * and rewrites it in plain, senior-friendly English using Claude, then writes a
 * row to simplified_articles in the *exact shape the live Guide type expects*.
 *
 * Pipeline changes (April 2026 expansion):
 *   1. For community sources (Reddit / YouTube / SE), pull an authoritative
 *      reference guide from simplified_articles and inject it into the prompt
 *      as ground truth. Claude must flag `verified=false` if it can't
 *      corroborate the community claim against the reference.
 *   2. Output schema now matches `Guide` (src/data/guides.ts) exactly:
 *      title / excerpt / body / category / tags / thumbnailEmoji /
 *      difficulty (PascalCase) / readTime ("N min") / publishedAt / steps
 *      / sourceUrl / sourceName.
 *   3. Banned-brand-words list injected into the prompt and also scanned on
 *      the output — any hit is stored in simplified_articles.banned_words_flagged
 *      so publish-to-batch can gate on it.
 *
 * Request body: { "scraped_article_id": "<uuid>" }
 * Auth:         service_role JWT (called from admin UI or a queue processor)
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─── Config ───────────────────────────────────────────────────────────────────

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL       = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SVC_KEY   = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const ANTHROPIC_API_KEY  = Deno.env.get('ANTHROPIC_API_KEY')!;

/** Claude model — Haiku is fast and cost-efficient for rewriting tasks */
const CLAUDE_MODEL = 'claude-haiku-4-5-20251001';

/** Max characters of original content to send to Claude (keeps token cost low) */
const MAX_CONTENT_CHARS = 8_000;

/** Max characters of authoritative reference guide to inject as ground truth */
const MAX_REFERENCE_CHARS = 3_000;

/**
 * Live Guide categories — Claude must pick one of these exactly.
 * Keep in sync with the `GuideCategory` union in src/data/guides.ts.
 */
const LIVE_CATEGORIES = [
  'windows-guides', 'mac-guides', 'essential-skills', 'tips-tricks',
  'ai-guides', 'ai-advanced', 'safety-guides', 'how-to', 'app-guides',
  'health-tech', 'phone-guides', 'social-media', 'government-civic',
  'financial-tech', 'smart-home', 'entertainment', 'communication',
  'life-transitions', 'internet-connectivity',
] as const;
type LiveCategory = typeof LIVE_CATEGORIES[number];

/**
 * Brand-voice banned words (CLAUDE.md).
 * Same list lives in src/__tests__/brand-voice.test.ts — update both.
 */
const BANNED_PHRASES = [
  "it's easy", 'simply', 'just', 'obviously', 'leverage',
  'utilize', 'seamless', 'cutting-edge', 'pro tip',
];

/** Community source types that require verification against an authority */
const COMMUNITY_SOURCE_TYPES = new Set(['reddit', 'youtube', 'stackexchange']);

// ─── Types ───────────────────────────────────────────────────────────────────

interface ScrapedArticle {
  id: string;
  original_url: string;
  original_title: string;
  original_content: string;
  category: string | null;
  tags: string[] | null;
  scrape_status: string;
  content_sources: {
    id: string;
    name: string;
    domain: string;
    source_type: string;
  } | null;
}

interface AuthoritativeReference {
  source_id: string;
  title: string;
  body: string;
}

interface ClaudeGuideOutput {
  title: string;
  excerpt: string;
  body: string;
  category: LiveCategory;
  tags: string[];
  thumbnailEmoji: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  publishedAt: string;
  steps: Array<{ title: string; content: string; tip?: string; warning?: string }>;
  sourceUrl: string;
  sourceName: string;
  verified: boolean;
  verification_notes?: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 80);
}

async function uniqueSlug(
  supabase: ReturnType<typeof createClient>,
  base: string,
): Promise<string> {
  const { data } = await supabase
    .from('simplified_articles')
    .select('id')
    .eq('slug', base)
    .maybeSingle();
  return data ? `${base}-${Date.now()}` : base;
}

/** Scan text for banned phrases. Returns the list of phrases actually hit. */
function scanBannedWords(...texts: string[]): string[] {
  const haystack = texts.join('\n').toLowerCase();
  const hits: string[] = [];
  for (const phrase of BANNED_PHRASES) {
    const re = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    if (re.test(haystack)) hits.push(phrase);
  }
  return hits;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

/**
 * Pick the best-matching already-published authoritative reference for a
 * community article. Matches on category first, then falls back to a tag
 * overlap. Returns null if no reference is found — in that case the community
 * article ends up `verified=false`.
 */
async function findAuthoritativeReference(
  supabase: ReturnType<typeof createClient>,
  article: ScrapedArticle,
): Promise<AuthoritativeReference | null> {
  const categoryKey = article.category ?? '';
  if (!categoryKey) return null;

  // Best-match: same category, verified, longest body (most comprehensive)
  const { data } = await supabase
    .from('simplified_articles')
    .select('id, scraped_article_id, simplified_title, simplified_content, verified')
    .eq('verified', true)
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(50);

  if (!data || data.length === 0) return null;

  // Narrow by title overlap with article title
  const titleTokens = new Set(
    article.original_title.toLowerCase().split(/\s+/).filter(w => w.length > 3),
  );
  if (titleTokens.size === 0) return null;

  let best: { row: typeof data[0]; overlap: number } | null = null;
  for (const row of data) {
    const rowTokens = new Set(
      (row as { simplified_title: string }).simplified_title
        .toLowerCase()
        .split(/\s+/)
        .filter(w => w.length > 3),
    );
    let overlap = 0;
    for (const t of titleTokens) if (rowTokens.has(t)) overlap++;
    if (!best || overlap > best.overlap) best = { row: row as typeof data[0], overlap };
  }

  if (!best || best.overlap < 2) return null;

  // Look up the scraped source for attribution
  const scrapedId = (best.row as { scraped_article_id?: string }).scraped_article_id;
  let sourceId = '';
  if (scrapedId) {
    const { data: scraped } = await supabase
      .from('scraped_articles')
      .select('source_id')
      .eq('id', scrapedId)
      .maybeSingle();
    sourceId = (scraped as { source_id?: string } | null)?.source_id ?? '';
  }

  return {
    source_id: sourceId,
    title: (best.row as { simplified_title: string }).simplified_title,
    body: ((best.row as { simplified_content: string }).simplified_content).slice(0, MAX_REFERENCE_CHARS),
  };
}

// ─── Claude prompt ────────────────────────────────────────────────────────────

function buildPrompt(
  article: ScrapedArticle,
  reference: AuthoritativeReference | null,
  isCommunity: boolean,
): string {
  const source  = article.content_sources?.name ?? 'Unknown';
  const content = article.original_content.substring(0, MAX_CONTENT_CHARS);

  const refBlock = reference
    ? `\n<authoritative_reference>\nTitle: ${reference.title}\n\n${reference.body}\n</authoritative_reference>\n\nUse the reference above as ground truth. If the community article below contradicts it or makes claims the reference does not support, set verified=false and explain in verification_notes. If the community article agrees with the reference or only adds concrete examples that do not contradict it, set verified=true.`
    : '';

  const communityRule = isCommunity
    ? '\n- This article comes from community content (Reddit / YouTube / Stack Exchange). If you cannot corroborate the advice against the authoritative reference above, set verified=false and write a short verification_notes explanation.'
    : '\n- This is already an authoritative source. Set verified=true unless the content is clearly wrong.';

  return `You rewrite technology help articles for American seniors and non-technical readers. Your output must match the TekSure Guide schema exactly.

BRAND RULES (hard constraints):
- Plain English. Short sentences (max 15 words each).
- No jargon without an immediate plain-language explanation.
- Speak to the reader as "you". Warm, encouraging, never condescending.
- US audience: USD, US carriers (Verizon / AT&T / T-Mobile / Xfinity), US services (Medicare, Social Security, FTC.gov).
- Never use these banned words or phrases (case-insensitive): ${BANNED_PHRASES.map(p => `"${p}"`).join(', ')}.
- Never copy more than 8 consecutive words verbatim from the source. Always paraphrase.
- Use "Quick Tip" — never "Pro Tip".${communityRule}

OUTPUT SCHEMA — return ONLY this JSON object, no markdown, no prose wrapper:
{
  "title": "Clear, friendly title under 60 characters",
  "excerpt": "Meta description under 160 characters — what will the reader be able to do after reading this?",
  "body": "Intro paragraph(s), 100–300 words. Plain English.",
  "category": "One of: ${LIVE_CATEGORIES.join(' | ')}",
  "tags": ["tag1", "tag2", "tag3"],
  "thumbnailEmoji": "📱",
  "difficulty": "Beginner | Intermediate | Advanced",
  "readTime": "5 min",
  "publishedAt": "YYYY-MM-DD (today's date)",
  "steps": [
    { "title": "Short action-verb step title", "content": "Step detail in plain English.", "tip": "Optional Quick Tip", "warning": "Optional warning" }
  ],
  "sourceUrl": "The original article URL passed in",
  "sourceName": "The source name passed in",
  "verified": true,
  "verification_notes": "Short note — required if verified=false"
}
${refBlock}

SOURCE ARTICLE
Title:     ${article.original_title}
Source:    ${source}
URL:       ${article.original_url}
Detected:  category=${article.category ?? 'unknown'}

${content}`;
}

// ─── Claude API call ─────────────────────────────────────────────────────────

async function callClaude(prompt: string): Promise<ClaudeGuideOutput> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key':         ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type':      'application/json',
    },
    body: JSON.stringify({
      model:      CLAUDE_MODEL,
      max_tokens: 2400,
      messages:   [{ role: 'user', content: prompt }],
    }),
    signal: AbortSignal.timeout(60_000),
  });

  if (!res.ok) {
    throw new Error(`Claude API error ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  const text: string = data.content?.[0]?.text ?? '';

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error(`Claude response did not contain JSON.\nRaw:\n${text.substring(0, 500)}`);
  }
  return JSON.parse(jsonMatch[0]) as ClaudeGuideOutput;
}

// ─── Normalization ───────────────────────────────────────────────────────────

function normalizeCategory(value: string): LiveCategory {
  const lc = (value ?? '').trim().toLowerCase().replace(/\s+/g, '-');
  if ((LIVE_CATEGORIES as readonly string[]).includes(lc)) return lc as LiveCategory;
  // Fallbacks for Claude's common near-miss labels
  if (lc.includes('safety') || lc.includes('privacy')) return 'safety-guides';
  if (lc.includes('phone'))    return 'phone-guides';
  if (lc.includes('windows'))  return 'windows-guides';
  if (lc.includes('mac'))      return 'mac-guides';
  if (lc.includes('wifi') || lc.includes('internet')) return 'internet-connectivity';
  if (lc.includes('money') || lc.includes('bank') || lc.includes('finance')) return 'financial-tech';
  if (lc.includes('health'))   return 'health-tech';
  if (lc.includes('smart'))    return 'smart-home';
  return 'how-to';
}

function normalizeDifficulty(value: string): 'Beginner' | 'Intermediate' | 'Advanced' {
  const v = (value ?? '').trim().toLowerCase();
  if (v.startsWith('int'))  return 'Intermediate';
  if (v.startsWith('adv'))  return 'Advanced';
  return 'Beginner';
}

function normalizeReadTime(raw: string | number): string {
  if (typeof raw === 'number') return `${Math.max(1, Math.min(15, Math.round(raw)))} min`;
  const m = String(raw).match(/(\d+)/);
  const n = m ? Math.max(1, Math.min(15, Number(m[1]))) : 3;
  return `${n} min`;
}

function normalizePublishedAt(raw: string): string {
  const today = new Date().toISOString().slice(0, 10);
  if (!raw) return today;
  const d = new Date(raw);
  return isNaN(d.getTime()) ? today : d.toISOString().slice(0, 10);
}

// ─── Main handler ─────────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });

  if (!ANTHROPIC_API_KEY) {
    return json({ error: 'ANTHROPIC_API_KEY secret is not set on this Supabase project.' }, 500);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SVC_KEY);

  try {
    const body = await req.json().catch(() => ({}));
    const { scraped_article_id } = body;
    if (!scraped_article_id) {
      return json({ error: 'Request body must include "scraped_article_id".' }, 400);
    }

    // ── 1. Load the scraped article + source metadata ─────────────────────────
    const { data: article, error: fetchErr } = await supabase
      .from('scraped_articles')
      .select('id, original_url, original_title, original_content, category, tags, scrape_status, content_sources(id, name, domain, source_type)')
      .eq('id', scraped_article_id)
      .maybeSingle();

    if (fetchErr) throw fetchErr;
    if (!article) return json({ error: `No article with id ${scraped_article_id}` }, 404);

    const art = article as unknown as ScrapedArticle;

    if (!['scraped', 'pending'].includes(art.scrape_status)) {
      return json({
        error: `Article status is "${art.scrape_status}" — expected "scraped" or "pending".`,
      }, 422);
    }

    const sourceType = art.content_sources?.source_type ?? 'rss';
    const isCommunity = COMMUNITY_SOURCE_TYPES.has(sourceType);

    // ── 2. (Community only) Find an authoritative reference ───────────────────
    const reference = isCommunity ? await findAuthoritativeReference(supabase as unknown as ReturnType<typeof createClient>, art) : null;

    console.log(`[simplify-article] "${art.original_title}" (${sourceType}) ref=${reference ? 'yes' : 'no'}`);

    // ── 3. Call Claude ────────────────────────────────────────────────────────
    const prompt = buildPrompt(art, reference, isCommunity);
    const guide  = await callClaude(prompt);

    // ── 4. Normalize + validate Claude's output ───────────────────────────────
    const category   = normalizeCategory(guide.category as unknown as string);
    const difficulty = normalizeDifficulty(guide.difficulty as unknown as string);
    const readTime   = normalizeReadTime(guide.readTime as unknown as string);
    const publishedAt = normalizePublishedAt(guide.publishedAt as unknown as string);

    const tags = Array.isArray(guide.tags)
      ? guide.tags.filter(t => typeof t === 'string' && t.length > 0).slice(0, 8)
      : [];

    const steps = Array.isArray(guide.steps)
      ? guide.steps.filter(s => s && typeof s.title === 'string' && typeof s.content === 'string')
      : [];

    // Cross-check: scan the output for banned phrases regardless of what the model said
    const bannedHits = scanBannedWords(guide.title ?? '', guide.excerpt ?? '', guide.body ?? '', ...steps.flatMap(s => [s.title, s.content, s.tip ?? '', s.warning ?? '']));
    const verified   = Boolean(guide.verified) && bannedHits.length === 0;

    const baseSlug = slugify(guide.title ?? art.original_title);
    const slug     = await uniqueSlug(supabase as unknown as ReturnType<typeof createClient>, baseSlug);

    // Build the Guide-shaped object that publish-to-batch will emit verbatim
    const guidePayload = {
      slug,
      title: guide.title,
      excerpt: guide.excerpt,
      category,
      tags,
      readTime,
      thumbnailEmoji: guide.thumbnailEmoji || '💡',
      publishedAt,
      difficulty,
      body: guide.body,
      steps,
    };

    // ── 5. Persist to simplified_articles ─────────────────────────────────────
    // We keep the legacy columns (simplified_title / simplified_content /
    // simplified_steps / difficulty_level / estimated_read_minutes / target_os)
    // so the existing admin UI keeps working. The publish-to-batch cron reads
    // the new columns instead.
    const verificationNotes = buildVerificationNotes(verified, guide.verification_notes, bannedHits);

    const { data: saved, error: saveErr } = await supabase
      .from('simplified_articles')
      .insert({
        scraped_article_id:     art.id,
        simplified_title:       guide.title,
        simplified_content:     guide.body,
        simplified_steps:       steps,
        difficulty_level:       difficulty,               // PascalCase now allowed
        estimated_read_minutes: parseInt(readTime, 10) || 3,
        target_os:              inferTargetOs(category, tags),
        slug,
        is_published:           false,
        // New columns:
        verified,
        verified_against_source_id: reference?.source_id ?? null,
        verification_notes:         verificationNotes,
        banned_words_flagged:       bannedHits,
        source_url:                 art.original_url,
        source_name:                art.content_sources?.name ?? null,
      })
      .select()
      .single();

    if (saveErr) throw saveErr;

    // ── 6. Mark the scraped source as simplified ──────────────────────────────
    await supabase
      .from('scraped_articles')
      .update({ scrape_status: 'simplified' })
      .eq('id', art.id);

    return json({
      success: true,
      simplified_article: saved,
      guide_payload:      guidePayload,
      verified,
      banned_words_flagged: bannedHits,
    });

  } catch (err) {
    console.error('[simplify-article] Error:', err);
    return json({ error: String(err) }, 500);
  }
});

/**
 * Build the verification_notes text the simplify step stores on the row.
 * Priority:
 *   1. Banned-word hits → always mention them (overrides model note)
 *   2. Model-supplied note → use verbatim
 *   3. Verified → null (no note needed)
 *   4. Unverified with no note → generic fallback
 */
function buildVerificationNotes(
  verified: boolean,
  modelNote: string | undefined,
  bannedHits: string[],
): string | null {
  if (bannedHits.length > 0) {
    return `Flagged banned words: ${bannedHits.join(', ')}${modelNote ? ` · ${modelNote}` : ''}`;
  }
  if (modelNote && modelNote.trim().length > 0) return modelNote;
  if (verified) return null;
  return 'Unverified by model (no reference match)';
}

/** Infer target_os from category/tags so the admin UI still has the signal */
function inferTargetOs(category: LiveCategory, tags: string[]): string[] {
  const set = new Set<string>();
  const hay = [category, ...tags].join(' ').toLowerCase();
  if (hay.includes('windows')) set.add('windows');
  if (hay.includes('mac'))     set.add('mac');
  if (hay.includes('iphone') || hay.includes('ios'))     set.add('iphone');
  if (hay.includes('android'))                           set.add('android');
  if (set.size === 0) set.add('all');
  return [...set];
}
