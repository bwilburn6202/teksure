/**
 * simplify-article
 *
 * Takes a scraped article that has been categorized (scrape_status = 'scraped')
 * and rewrites it in plain, senior-friendly English using Claude Haiku.
 *
 * Steps:
 *   1. Reads scraped_articles row by ID
 *   2. Sends content to Claude with a plain-language prompt
 *   3. Parses Claude's structured JSON response
 *   4. Saves a new row in simplified_articles (is_published = false)
 *   5. Updates scraped_articles.scrape_status to 'simplified'
 *
 * Request body: { "scraped_article_id": "<uuid>" }
 * Auth: service_role JWT (called from admin UI or a queue processor)
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

// ─── Types ───────────────────────────────────────────────────────────────────

interface ScrapedArticle {
  id: string;
  original_url: string;
  original_title: string;
  original_content: string;
  category: string | null;
  tags: string[] | null;
  scrape_status: string;
  content_sources: { name: string; domain: string } | null;
}

interface ClaudeSimplified {
  simplified_title: string;
  summary: string;
  simplified_content: string;
  simplified_steps: Array<{ step_number: number; instruction: string; detail?: string }>;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  estimated_read_minutes: number;
  target_os: string[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Convert a title into a URL-safe slug */
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 80);
}

/** Ensure a slug is unique in simplified_articles; appends timestamp if needed */
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

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

// ─── Claude prompt ────────────────────────────────────────────────────────────

function buildPrompt(article: ScrapedArticle): string {
  const source = article.content_sources?.name ?? 'Unknown';
  const content = article.original_content.substring(0, MAX_CONTENT_CHARS);

  return `You help seniors and non-technical people understand technology. Rewrite the article below in plain, friendly English.

RULES:
- Short sentences — maximum 15 words each
- No jargon. If you must use a technical term, explain it immediately in plain language.
  Example: "your router (the small box that connects your home to the internet)"
- Write ALL steps as a numbered list. Each step = one clear action starting with a verb.
  Example: "1. Click the Start button in the bottom-left corner of your screen."
- Speak directly to the reader using "you"
- Tone: warm, encouraging, never condescending
- Maximum 600 words in simplified_content
- difficulty_level: "beginner" unless the topic genuinely requires prior knowledge
- target_os: list only what applies — choose from: ["windows", "mac", "iphone", "android", "all"]
- estimated_read_minutes: realistic reading time (1–5 minutes)

Return ONLY valid JSON matching this exact shape (no markdown, no extra text):
{
  "simplified_title": "Clear, friendly title",
  "summary": "One sentence — what will the reader be able to do after reading this?",
  "simplified_content": "Full rewritten article with numbered steps",
  "simplified_steps": [
    { "step_number": 1, "instruction": "Short action verb phrase", "detail": "Optional extra explanation" }
  ],
  "difficulty_level": "beginner",
  "estimated_read_minutes": 3,
  "target_os": ["windows"]
}

Original article
Title:  ${article.original_title}
Source: ${source}

${content}`;
}

// ─── Claude API call ─────────────────────────────────────────────────────────

async function callClaude(prompt: string): Promise<ClaudeSimplified> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key':         ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type':      'application/json',
    },
    body: JSON.stringify({
      model:      CLAUDE_MODEL,
      max_tokens: 1800,
      messages:   [{ role: 'user', content: prompt }],
    }),
    signal: AbortSignal.timeout(60_000),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Claude API error ${res.status}: ${body}`);
  }

  const data = await res.json();
  const text: string = data.content?.[0]?.text ?? '';

  // Extract the JSON object from Claude's response (handles any wrapper text)
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error(`Claude response did not contain valid JSON.\nRaw response:\n${text.substring(0, 500)}`);
  }

  return JSON.parse(jsonMatch[0]) as ClaudeSimplified;
}

// ─── Main handler ─────────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });

  if (!ANTHROPIC_API_KEY) {
    return json({ error: 'ANTHROPIC_API_KEY secret is not set on this Supabase project.' }, 500);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SVC_KEY);

  try {
    // ── Parse request ─────────────────────────────────────────────────────────
    const body = await req.json().catch(() => ({}));
    const { scraped_article_id } = body;

    if (!scraped_article_id) {
      return json({ error: 'Request body must include "scraped_article_id".' }, 400);
    }

    // ── 1. Fetch the scraped article ──────────────────────────────────────────
    const { data: article, error: fetchErr } = await supabase
      .from('scraped_articles')
      .select('id, original_url, original_title, original_content, category, tags, scrape_status, content_sources(name, domain)')
      .eq('id', scraped_article_id)
      .maybeSingle();

    if (fetchErr) throw fetchErr;
    if (!article) {
      return json({ error: `No article found with id ${scraped_article_id}` }, 404);
    }

    const art = article as unknown as ScrapedArticle;

    // Guard: only simplify articles that have been categorized
    if (!['scraped', 'pending'].includes(art.scrape_status)) {
      return json({
        error: `Article status is "${art.scrape_status}" — expected "scraped" or "pending".`,
      }, 422);
    }

    console.log(`[simplify-article] Simplifying: "${art.original_title}"`);

    // ── 2. Call Claude ────────────────────────────────────────────────────────
    const prompt     = buildPrompt(art);
    const simplified = await callClaude(prompt);

    console.log(`[simplify-article] Claude returned title: "${simplified.simplified_title}"`);

    // ── 3. Resolve a unique slug ──────────────────────────────────────────────
    const baseSlug = slugify(simplified.simplified_title);
    const slug     = await uniqueSlug(supabase as any, baseSlug);

    // ── 4. Validate + normalise Claude's response ─────────────────────────────
    const validDifficulty = ['beginner', 'intermediate', 'advanced'];
    const difficulty: 'beginner' | 'intermediate' | 'advanced' = validDifficulty.includes(
      simplified.difficulty_level,
    )
      ? simplified.difficulty_level
      : 'beginner';

    const readMins = Math.min(
      10,
      Math.max(1, Math.round(simplified.estimated_read_minutes ?? 3)),
    );

    const targetOs: string[] = Array.isArray(simplified.target_os)
      ? simplified.target_os.filter((v) =>
          ['windows', 'mac', 'iphone', 'android', 'all'].includes(v),
        )
      : ['all'];

    const steps = Array.isArray(simplified.simplified_steps)
      ? simplified.simplified_steps
      : [];

    // ── 5. Save to simplified_articles ───────────────────────────────────────
    const { data: saved, error: saveErr } = await supabase
      .from('simplified_articles')
      .insert({
        scraped_article_id:     (article as ScrapedArticle).id,
        simplified_title:       simplified.simplified_title,
        simplified_content:     simplified.simplified_content,
        simplified_steps:       steps,
        difficulty_level:       difficulty,
        estimated_read_minutes: readMins,
        target_os:              targetOs,
        slug,
        is_published:           false,
      })
      .select()
      .single();

    if (saveErr) throw saveErr;

    // ── 6. Mark the source article as simplified ──────────────────────────────
    await supabase
      .from('scraped_articles')
      .update({ scrape_status: 'simplified' })
      .eq('id', (article as ScrapedArticle).id);

    console.log(`[simplify-article] Saved simplified article slug="${slug}"`);

    return json({
      success:            true,
      simplified_article: saved,
    });

  } catch (err) {
    console.error('[simplify-article] Error:', err);
    return json({ error: String(err) }, 500);
  }
});
