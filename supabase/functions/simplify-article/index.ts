/**
 * simplify-article
 *
 * Takes a scraped + categorized article (scrape_status = 'scraped' or 'pending')
 * and rewrites it into a full TekSure Guide using Claude Haiku 4.5.
 *
 * Tuned pipeline (2026-04-19):
 *   - Source-trust aware: authoritative / editorial / community tiers
 *   - Community sources (Reddit, Stack Exchange, YouTube) are fact-checked
 *     against Claude's training knowledge of official documentation. If a
 *     claim cannot be corroborated, the rewrite is rejected — no unverified
 *     content ever reaches simplified_articles.
 *   - Output conforms to the public Guide type in src/data/guides.ts
 *     (category, tags, emoji, excerpt, PascalCase difficulty, attribution)
 *   - Banned-words filter enforces TekSure brand voice
 *   - US-audience constraint enforced (USD, US carriers, US services)
 *
 * Request body: { "scraped_article_id": "<uuid>" }
 * Auth: service_role JWT (called from admin UI or queue processor)
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─── Config ───────────────────────────────────────────────────────────────────

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL      = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SVC_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY')!;

/** Claude model — Haiku 4.5 is fast and accurate for structured rewriting */
const CLAUDE_MODEL = 'claude-haiku-4-5-20251001';

/** Max characters of original content to send to Claude (keeps token cost low) */
const MAX_CONTENT_CHARS = 10_000;

/** Words banned by the TekSure brand guide (CLAUDE.md) */
const BANNED_WORDS = [
  'simply', 'just', 'obviously', 'seamless', 'seamlessly',
  'cutting-edge', 'cutting edge',
  'leverage', 'leveraging', 'utilize', 'utilizing',
  'Pro Tip', 'pro tip',
  "it's easy", 'its easy',
];

/** Allowed TekSure Guide categories (match src/data/guides.ts) */
const VALID_CATEGORIES = [
  'Safety', 'Essential Skills', 'Tips & Tricks', 'AI', 'Apps',
  'Health Tech', 'How-To', 'Money', 'Smart Home',
  'Internet & WiFi', 'Accessibility', 'Life Transitions',
] as const;

const VALID_TARGET_OS = [
  'windows', 'mac', 'iphone', 'android',
  'chromebook', 'web', 'smart-tv', 'smart-speaker', 'all',
] as const;

// ─── Types ───────────────────────────────────────────────────────────────────

interface ScrapedArticle {
  id: string;
  original_url: string;
  original_title: string;
  original_content: string;
  original_author: string | null;
  category: string | null;
  tags: string[] | null;
  scrape_status: string;
  content_sources: {
    name: string;
    domain: string;
    trust_tier: 'authoritative' | 'editorial' | 'community' | null;
    source_type: string | null;
  } | null;
}

type VerificationStatus = 'verified' | 'partial' | 'rejected';
type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

interface ClaudeGuide {
  verification_status: VerificationStatus;
  verification_notes: string;
  slug: string;
  title: string;
  excerpt: string;
  emoji: string;
  category: string;
  tags: string[];
  difficulty: Difficulty;
  readTime: string;                 // e.g. "3 min"
  target_os: string[];
  body: string;
  steps: Array<{ title: string; description: string }>;
  attribution: {
    source_name: string;
    source_url: string;
    author?: string | null;
  };
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

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

function containsBannedWord(text: string): string | null {
  const lower = text.toLowerCase();
  for (const word of BANNED_WORDS) {
    const re = new RegExp(`\\b${word.toLowerCase().replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`);
    if (re.test(lower)) return word;
  }
  return null;
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// ─── Claude prompt ────────────────────────────────────────────────────────────

function buildPrompt(article: ScrapedArticle): string {
  const source     = article.content_sources?.name   ?? 'Unknown';
  const domain     = article.content_sources?.domain ?? '';
  const trust      = article.content_sources?.trust_tier   ?? 'editorial';
  const sourceType = article.content_sources?.source_type  ?? 'web';
  const content    = article.original_content.substring(0, MAX_CONTENT_CHARS);

  const trustRules = {
    authoritative: `AUTHORITATIVE source. Treat content as factually correct. Still rewrite entirely in plain English. Do NOT copy sentences verbatim.`,
    editorial:     `EDITORIAL source. Reference-only input. You MUST rewrite completely — no verbatim paragraphs. Attribute the source.`,
    community:     `COMMUNITY source (${sourceType}). This content is user-submitted and may be inaccurate, outdated, or opinion. You MUST fact-check every claim against your knowledge of official documentation (Apple, Google, Microsoft, Samsung, FTC, CISA, etc.).
  - If the core claim cannot be corroborated, set verification_status = "rejected" and explain which claim you could not verify. DO NOT invent a guide.
  - If most claims check out but a minority cannot, set verification_status = "partial" and rewrite only the verified parts. List the unverified claims in verification_notes.
  - If everything checks out, set verification_status = "verified".`,
  }[trust];

  return `You are a technical writer for TekSure.com, a US-based plain-English tech guide site for seniors (60+) and non-technical adults.

════════════════════ SOURCE ════════════════════
Name:   ${source}
Domain: ${domain}
Trust:  ${trust}
Type:   ${sourceType}
URL:    ${article.original_url}
Author: ${article.original_author ?? 'not specified'}

${trustRules}

════════════════════ FACT CHECKS ════════════════════
- Flag as OUTDATED and rewrite to current version: any reference to iOS ≤ 17,
  iPadOS ≤ 17, Android ≤ 13, macOS ≤ 14, Windows ≤ 10, or app versions older
  than 2 years. If you cannot confidently update the reference, set
  verification_status = "partial" and note it.
- REJECT (verification_status = "rejected") if the article:
  • Contains security/scam advice that contradicts FTC, CISA, or FBI guidance
  • Recommends third-party "registry cleaners", "PC optimizers", or paid
    support scams
  • Gives specific prices not confirmed by an official vendor pricing page
  • Recommends disabling Windows Defender, 2FA, or OS auto-updates
  • Recommends sharing passwords, account recovery codes, or SSN over phone/email

════════════════════ AUDIENCE & VOICE ════════════════════
- US audience. USD only. US carriers (Verizon, AT&T, T-Mobile, Spectrum,
  Xfinity, Cox). No £, €, or UK/EU services. If the source references foreign
  carriers or currencies, rewrite with US equivalents.
- Speak directly to the reader using "you". Warm, encouraging, never
  condescending. Assume zero prior technical knowledge.
- Every sentence ≤ 15 words. No exceptions.
- Explain any jargon inline in parentheses the first time it appears. Example:
  "your router (the small box that connects your home to the internet)"
- Numbered steps only for procedures. Each step starts with an action verb.

════════════════════ BANNED WORDS (DO NOT USE) ════════════════════
simply · just · obviously · seamless · cutting-edge · leverage · utilize
"Pro Tip" — use "Quick Tip" instead
"it's easy" — readers are learning; don't minimize their effort

════════════════════ OUTPUT — valid JSON ONLY ════════════════════
Return exactly this shape. No markdown fences, no commentary, no trailing text.

{
  "verification_status": "verified" | "partial" | "rejected",
  "verification_notes":  "1-3 sentences. If rejected: which claim failed and against what source. If partial: list unverified parts.",
  "slug":                "kebab-case-slug-max-80-chars",
  "title":               "How to ... (max 70 chars, starts with a verb)",
  "excerpt":             "Max 160 chars. Plain summary for cards and meta tags.",
  "emoji":               "single relevant emoji",
  "category":            "one of: ${VALID_CATEGORIES.join(' | ')}",
  "tags":                ["3-6 kebab-case tags"],
  "difficulty":          "Beginner" | "Intermediate" | "Advanced",
  "readTime":            "N min (1-10)",
  "target_os":           ["one or more of: ${VALID_TARGET_OS.join(', ')}"],
  "body":                "The full guide. 300-600 words. Plain English. Numbered steps where applicable. Include a 'Quick Tip:' callout if relevant. Do NOT repeat the title.",
  "steps":               [ { "title": "Verb phrase (<=10 words)", "description": "Plain-language detail for the step." } ],
  "attribution": {
    "source_name": "${source}",
    "source_url":  "${article.original_url}",
    "author":      "author name or null"
  }
}

If verification_status is "rejected", all other fields may be empty strings/arrays but the JSON shape MUST still be complete so the caller can parse it.

════════════════════ ORIGINAL ARTICLE ════════════════════
Title: ${article.original_title}

${content}`;
}

// ─── Claude API call ─────────────────────────────────────────────────────────

async function callClaude(prompt: string): Promise<ClaudeGuide> {
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
    const body = await res.text();
    throw new Error(`Claude API error ${res.status}: ${body}`);
  }

  const data = await res.json();
  const text: string = data.content?.[0]?.text ?? '';

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error(`Claude response did not contain valid JSON.\nRaw response:\n${text.substring(0, 500)}`);
  }

  return JSON.parse(jsonMatch[0]) as ClaudeGuide;
}

// ─── Validation ──────────────────────────────────────────────────────────────

function validateGuide(g: ClaudeGuide): { ok: true } | { ok: false; reason: string } {
  if (!g.verification_status) return { ok: false, reason: 'missing verification_status' };

  if (g.verification_status === 'rejected') return { ok: true }; // rejection doesn't need full validation

  const required = ['slug','title','excerpt','emoji','category','body'] as const;
  for (const f of required) {
    if (!g[f] || (typeof g[f] === 'string' && (g[f] as string).trim() === '')) {
      return { ok: false, reason: `missing field: ${f}` };
    }
  }

  if (g.excerpt.length > 180) return { ok: false, reason: `excerpt too long: ${g.excerpt.length} chars` };

  if (!VALID_CATEGORIES.includes(g.category as typeof VALID_CATEGORIES[number])) {
    return { ok: false, reason: `invalid category: ${g.category}` };
  }

  if (!['Beginner','Intermediate','Advanced'].includes(g.difficulty)) {
    return { ok: false, reason: `invalid difficulty: ${g.difficulty}` };
  }

  const words = wordCount(g.body);
  if (words < 250) return { ok: false, reason: `body too short (${words} words, need ≥ 250)` };
  if (words > 800) return { ok: false, reason: `body too long (${words} words, max 800)` };

  // Banned-word check across title, excerpt, body, and steps
  const combined = [g.title, g.excerpt, g.body, ...(g.steps ?? []).flatMap(s => [s.title, s.description])].join(' ');
  const banned = containsBannedWord(combined);
  if (banned) return { ok: false, reason: `contains banned word: "${banned}"` };

  return { ok: true };
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

    // ── 1. Fetch the scraped article ──────────────────────────────────────────
    const { data: article, error: fetchErr } = await supabase
      .from('scraped_articles')
      .select('id, original_url, original_title, original_content, original_author, category, tags, scrape_status, content_sources(name, domain, trust_tier, source_type)')
      .eq('id', scraped_article_id)
      .maybeSingle();

    if (fetchErr) throw fetchErr;
    if (!article) {
      return json({ error: `No article found with id ${scraped_article_id}` }, 404);
    }

    const art = article as unknown as ScrapedArticle;

    if (!['scraped', 'pending'].includes(art.scrape_status)) {
      return json({
        error: `Article status is "${art.scrape_status}" — expected "scraped" or "pending".`,
      }, 422);
    }

    console.log(`[simplify-article] Simplifying: "${art.original_title}" (trust=${art.content_sources?.trust_tier})`);

    // ── 2. Call Claude ────────────────────────────────────────────────────────
    const prompt = buildPrompt(art);
    const guide  = await callClaude(prompt);

    console.log(`[simplify-article] verification_status=${guide.verification_status}`);

    // ── 3. Rejection path: don't save a simplified row ────────────────────────
    if (guide.verification_status === 'rejected') {
      await supabase
        .from('scraped_articles')
        .update({
          scrape_status:    'rejected_verification',
          rejection_reason: guide.verification_notes?.substring(0, 500) ?? 'Verification failed',
        })
        .eq('id', art.id);

      return json({
        success:  true,
        rejected: true,
        reason:   guide.verification_notes,
      });
    }

    // ── 4. Validate the guide ─────────────────────────────────────────────────
    const validation = validateGuide(guide);
    if (!validation.ok) {
      await supabase
        .from('scraped_articles')
        .update({
          scrape_status:    'rejected_quality',
          rejection_reason: `validation: ${validation.reason}`,
        })
        .eq('id', art.id);

      return json({
        success:  true,
        rejected: true,
        reason:   `validation failed: ${validation.reason}`,
      });
    }

    // ── 5. Normalize + unique slug ────────────────────────────────────────────
    const baseSlug = guide.slug?.trim() || slugify(guide.title);
    const slug     = await uniqueSlug(supabase as any, slugify(baseSlug));

    const targetOs = Array.isArray(guide.target_os)
      ? guide.target_os.filter((v) => (VALID_TARGET_OS as readonly string[]).includes(v))
      : ['all'];

    const readMinsMatch = /(\d+)/.exec(guide.readTime ?? '');
    const readMins = readMinsMatch
      ? Math.min(10, Math.max(1, parseInt(readMinsMatch[1], 10)))
      : 3;

    // ── 6. Save the simplified guide ──────────────────────────────────────────
    const { data: saved, error: saveErr } = await supabase
      .from('simplified_articles')
      .insert({
        scraped_article_id:     art.id,
        simplified_title:       guide.title,
        simplified_content:     guide.body,
        simplified_steps:       guide.steps ?? [],
        difficulty_level:       guide.difficulty,
        estimated_read_minutes: readMins,
        target_os:              targetOs,
        slug,
        is_published:           false,
        guide_json:             guide,
        verification_status:    guide.verification_status,
        verification_notes:     guide.verification_notes,
        category:               guide.category,
        tags:                   guide.tags ?? [],
        emoji:                  guide.emoji,
        excerpt:                guide.excerpt,
        attribution:            guide.attribution,
      })
      .select()
      .single();

    if (saveErr) throw saveErr;

    await supabase
      .from('scraped_articles')
      .update({ scrape_status: 'simplified' })
      .eq('id', art.id);

    console.log(`[simplify-article] Saved slug="${slug}" verification=${guide.verification_status}`);

    return json({
      success:            true,
      simplified_article: saved,
      verification:       guide.verification_status,
    });

  } catch (err) {
    console.error('[simplify-article] Error:', err);
    return json({ error: String(err) }, 500);
  }
});
