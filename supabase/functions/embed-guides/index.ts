// ─────────────────────────────────────────────────────────────────────────────
// Supabase Edge Function: embed-guides
//
// Ingestion half of TekBrain v2. Takes a single TekSure Guide object, chunks it
// into bite-sized pieces, generates embeddings with OpenAI, and upserts the
// result into `guide_chunks` so the `tekbrain-chat` function can retrieve them.
//
// Flow per request:
//   1. Parse + validate the incoming Guide payload.
//   2. Chunk the guide:
//        • If `steps[]` is present → one chunk per step
//          (formatted as "Step N: <title> — <content>" + tip/warning).
//        • Else if `body` is present → split on H2-style headings ("## ...").
//          If there are no headings, fall back to paragraph-sized groups.
//   3. SHA-256 hash each chunk's text and compare to the stored content_hash
//      for the same (guide_id, chunk_index). Unchanged chunks are skipped,
//      which keeps re-embedding cheap (no OpenAI call, no write).
//        • `force_refresh: true` bypasses the hash check and re-embeds everything.
//   4. Call OpenAI text-embedding-3-small (1536 dims) for the chunks that
//      actually changed — with 429 retries and Retry-After respect.
//   5. Upsert the new/changed chunks into guide_chunks on (guide_id, chunk_index).
//   6. Delete any "orphan" rows — i.e. rows for this guide with a chunk_index
//      higher than the new chunk count — so shrinking a guide doesn't leave
//      stale chunks behind.
//
// Request body:
//   {
//     guide: Guide,              // required — full guide object (see src/data/guides.ts)
//     force_refresh?: boolean,   // default false — re-embed even unchanged chunks
//   }
//
// Response (JSON):
//   {
//     guide_id: string,
//     guide_title: string,
//     total_chunks: number,
//     embedded: number,          // chunks that hit the OpenAI API this run
//     skipped_unchanged: number, // chunks whose hash matched the DB
//     orphans_deleted: number,   // chunks removed because the guide shrank
//     duration_ms: number,
//   }
//
// Required Supabase secrets:
//   SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY
//   OPENAI_API_KEY
// Optional:
//   OPENAI_EMBED_MODEL   (default: text-embedding-3-small)
// ─────────────────────────────────────────────────────────────────────────────

import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ── CORS ─────────────────────────────────────────────────────────────────────
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// ── Models & tuning knobs ────────────────────────────────────────────────────
const EMBED_MODEL   = Deno.env.get('OPENAI_EMBED_MODEL') ?? 'text-embedding-3-small';
const MAX_RETRIES   = 5;
const BASE_BACKOFF_MS = 500;   // doubled each attempt: 500, 1000, 2000, 4000, 8000
const MAX_BACKOFF_MS  = 30_000;
// Rough safety cap — text-embedding-3-small's hard limit is 8192 tokens. We cut
// well before that with a character cap so we never need a tokenizer at runtime.
const MAX_CHUNK_CHARS = 6000;

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

// Loose mirror of src/data/guides.ts — we only need the fields we actually read
// here, so anything else is allowed through as unknown.
interface GuideStepInput {
  title: string;
  content: string;
  tip?: string;
  warning?: string;
}

interface GuideInput {
  slug: string;
  title: string;
  excerpt?: string;
  category: string;
  tags?: string[];
  difficulty?: string;
  readTime?: string;
  steps?: GuideStepInput[];
  body?: string;
  publishedAt?: string;
  lastVerifiedAt?: string;
}

interface EmbedRequestBody {
  guide: GuideInput;
  force_refresh?: boolean;
}

// Shape we hand OpenAI + write to the DB.
interface PreparedChunk {
  chunk_index: number;
  heading: string | null;
  content: string;
  content_hash: string;
  metadata: Record<string, unknown>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main handler
// ─────────────────────────────────────────────────────────────────────────────

Deno.serve(async (req) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return jsonError('Method not allowed. Use POST.', 405);
  }

  const startedAt = Date.now();

  // ── Env / secret wiring ──────────────────────────────────────────────────
  const supabaseUrl    = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  const openaiKey      = Deno.env.get('OPENAI_API_KEY');

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonError('Supabase credentials are not configured on the server.', 500);
  }
  if (!openaiKey) {
    return jsonError('OPENAI_API_KEY is not configured on the server.', 500);
  }

  // ── Parse + validate body ────────────────────────────────────────────────
  let body: EmbedRequestBody;
  try {
    body = (await req.json()) as EmbedRequestBody;
  } catch {
    return jsonError('Request body must be valid JSON.', 400);
  }

  const guide = body?.guide;
  const forceRefresh = Boolean(body?.force_refresh);

  if (!guide || typeof guide !== 'object') {
    return jsonError('`guide` object is required.', 400);
  }
  if (!guide.slug || typeof guide.slug !== 'string') {
    return jsonError('`guide.slug` is required.', 400);
  }
  if (!guide.title || typeof guide.title !== 'string') {
    return jsonError('`guide.title` is required.', 400);
  }
  if (!guide.category || typeof guide.category !== 'string') {
    return jsonError('`guide.category` is required.', 400);
  }

  // Service-role client — we bypass RLS because only trusted callers (our
  // scripts / cron) should be hitting this endpoint with a full guide payload.
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    // ── 1. Build chunks from the guide ───────────────────────────────────
    const chunks = await buildChunks(guide);

    if (chunks.length === 0) {
      // Nothing to embed — but still delete any stale rows for this guide so
      // the DB matches reality.
      const orphansDeleted = await deleteOrphanChunks(supabase, guide.slug, 0);
      return jsonOk({
        guide_id: guide.slug,
        guide_title: guide.title,
        total_chunks: 0,
        embedded: 0,
        skipped_unchanged: 0,
        orphans_deleted: orphansDeleted,
        duration_ms: Date.now() - startedAt,
        note: 'Guide had no steps or body content to embed.',
      });
    }

    // ── 2. Fetch existing hashes so we know what to re-embed ─────────────
    const existingHashes = await loadExistingHashes(supabase, guide.slug);

    // Split chunks into "needs embedding" vs "unchanged".
    const toEmbed: PreparedChunk[] = [];
    const unchanged: PreparedChunk[] = [];
    for (const chunk of chunks) {
      const prev = existingHashes.get(chunk.chunk_index);
      if (!forceRefresh && prev && prev === chunk.content_hash) {
        unchanged.push(chunk);
      } else {
        toEmbed.push(chunk);
      }
    }

    // ── 3. Embed the chunks that changed ─────────────────────────────────
    // We call OpenAI with a single batched request rather than one-per-chunk
    // to keep rate-limit pressure and latency low. OpenAI accepts an array of
    // inputs and returns embeddings in the same order.
    let embedded = 0;
    if (toEmbed.length > 0) {
      const embeddings = await embedTexts(
        openaiKey,
        toEmbed.map((c) => c.content),
      );

      // ── 4. Upsert the changed chunks ────────────────────────────────────
      const rows = toEmbed.map((c, i) => ({
        guide_id:     guide.slug,
        guide_title:  guide.title,
        category:     guide.category,
        chunk_index:  c.chunk_index,
        heading:      c.heading,
        content:      c.content,
        content_hash: c.content_hash,
        metadata:     c.metadata,
        embedding:    embeddings[i],
      }));

      const { error: upsertErr } = await supabase
        .from('guide_chunks')
        .upsert(rows, { onConflict: 'guide_id,chunk_index' });

      if (upsertErr) {
        console.error('guide_chunks upsert error:', upsertErr);
        throw new Error(`Failed to save embeddings: ${upsertErr.message}`);
      }
      embedded = rows.length;
    }

    // ── 5. Delete orphan rows (guide shrank since last embed) ────────────
    const orphansDeleted = await deleteOrphanChunks(
      supabase,
      guide.slug,
      chunks.length,
    );

    return jsonOk({
      guide_id: guide.slug,
      guide_title: guide.title,
      total_chunks: chunks.length,
      embedded,
      skipped_unchanged: unchanged.length,
      orphans_deleted: orphansDeleted,
      duration_ms: Date.now() - startedAt,
    });
  } catch (err) {
    console.error('embed-guides error:', err);
    const msg = err instanceof Error ? err.message : 'Unknown server error.';
    return jsonError(msg, 500);
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// Chunking
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Turn a Guide into an ordered list of chunks ready for embedding.
 *
 * Preference order:
 *   1. steps[]  → one chunk per step: "Step N: <title>\n\n<content>"
 *                 plus any tip/warning callouts appended as labeled paragraphs.
 *   2. body     → split on H2 markdown headings ("## ...").
 *   3. body (no headings) → split into ~paragraph groups so we stay under the
 *      per-chunk character cap.
 *
 * Each chunk's content string is prefixed with the guide title so that — even
 * read in isolation — the retrieval context makes sense.
 */
async function buildChunks(guide: GuideInput): Promise<PreparedChunk[]> {
  const out: PreparedChunk[] = [];
  const titlePrefix = `Guide: ${guide.title}`;

  // ── Path 1: steps[] ──────────────────────────────────────────────────────
  if (Array.isArray(guide.steps) && guide.steps.length > 0) {
    for (let i = 0; i < guide.steps.length; i++) {
      const step = guide.steps[i];
      if (!step) continue;

      const stepNumber = i + 1;
      const heading    = step.title?.trim() || `Step ${stepNumber}`;
      const parts: string[] = [
        titlePrefix,
        `Step ${stepNumber}: ${heading}`,
      ];
      if (step.content?.trim()) parts.push(step.content.trim());
      if (step.tip?.trim())     parts.push(`Tip: ${step.tip.trim()}`);
      if (step.warning?.trim()) parts.push(`Warning: ${step.warning.trim()}`);

      const content = truncate(parts.join('\n\n'), MAX_CHUNK_CHARS);

      out.push({
        chunk_index: i,
        heading,
        content,
        content_hash: await sha256(content),
        metadata: {
          source: 'step',
          step_number: stepNumber,
          tags: guide.tags ?? [],
          difficulty: guide.difficulty ?? null,
          read_time: guide.readTime ?? null,
          published_at: guide.publishedAt ?? null,
          last_verified_at: guide.lastVerifiedAt ?? null,
        },
      });
    }
    return out;
  }

  // ── Path 2 & 3: body ─────────────────────────────────────────────────────
  const body = guide.body?.trim();
  if (!body) return out;

  // Try H2 split first. We keep the heading text alongside each chunk.
  const h2Sections = splitOnH2(body);

  const sections = h2Sections.length > 0
    ? h2Sections
    : splitIntoParagraphGroups(body, MAX_CHUNK_CHARS).map((text, i) => ({
        heading: i === 0 ? 'Overview' : `Part ${i + 1}`,
        text,
      }));

  for (let i = 0; i < sections.length; i++) {
    const { heading, text } = sections[i];

    const parts: string[] = [titlePrefix];
    if (heading) parts.push(heading);
    parts.push(text);

    const content = truncate(parts.join('\n\n'), MAX_CHUNK_CHARS);

    out.push({
      chunk_index: i,
      heading: heading || null,
      content,
      content_hash: await sha256(content),
      metadata: {
        source: h2Sections.length > 0 ? 'body-h2' : 'body-paragraphs',
        tags: guide.tags ?? [],
        difficulty: guide.difficulty ?? null,
        read_time: guide.readTime ?? null,
        published_at: guide.publishedAt ?? null,
        last_verified_at: guide.lastVerifiedAt ?? null,
      },
    });
  }

  return out;
}

/**
 * Split a markdown body on H2 headings ("## Section Title"). Returns an empty
 * array if there are no H2 headings in the body, letting the caller fall back
 * to paragraph-based chunking.
 *
 * Any preamble before the first H2 is bundled as an "Overview" section so no
 * content is dropped on the floor.
 */
function splitOnH2(body: string): Array<{ heading: string; text: string }> {
  const lines = body.split('\n');
  const hasH2 = lines.some((l) => /^##\s+/.test(l));
  if (!hasH2) return [];

  const sections: Array<{ heading: string; text: string }> = [];
  let currentHeading = 'Overview';
  let currentLines: string[] = [];

  const flush = () => {
    const text = currentLines.join('\n').trim();
    if (text) sections.push({ heading: currentHeading, text });
  };

  for (const line of lines) {
    const match = /^##\s+(.*)$/.exec(line);
    if (match) {
      flush();
      currentHeading = match[1].trim() || 'Section';
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }
  flush();

  return sections;
}

/**
 * Greedy paragraph-packer — groups paragraphs (split on blank lines) into
 * chunks no larger than maxChars. Paragraphs larger than maxChars on their
 * own are hard-split to avoid a chunk that blows past the embedding limit.
 */
function splitIntoParagraphGroups(body: string, maxChars: number): string[] {
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  const groups: string[] = [];
  let current = '';

  for (const p of paragraphs) {
    if (p.length > maxChars) {
      // Paragraph itself is too big — flush current, then hard-split this one.
      if (current) {
        groups.push(current);
        current = '';
      }
      for (let i = 0; i < p.length; i += maxChars) {
        groups.push(p.slice(i, i + maxChars));
      }
      continue;
    }

    const separator = current ? '\n\n' : '';
    if ((current + separator + p).length > maxChars) {
      groups.push(current);
      current = p;
    } else {
      current = current + separator + p;
    }
  }
  if (current) groups.push(current);

  return groups;
}

// ─────────────────────────────────────────────────────────────────────────────
// DB helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Load `content_hash` for every existing chunk of this guide, keyed by
 * chunk_index. Used to decide which chunks actually need re-embedding.
 */
async function loadExistingHashes(
  supabase: SupabaseClient,
  guideId: string,
): Promise<Map<number, string>> {
  const { data, error } = await supabase
    .from('guide_chunks')
    .select('chunk_index, content_hash')
    .eq('guide_id', guideId);

  if (error) {
    console.warn('loadExistingHashes warning (will re-embed all):', error.message);
    return new Map();
  }

  const map = new Map<number, string>();
  for (const row of data ?? []) {
    const idx  = (row as { chunk_index: number }).chunk_index;
    const hash = (row as { content_hash: string | null }).content_hash;
    if (typeof idx === 'number' && typeof hash === 'string') {
      map.set(idx, hash);
    }
  }
  return map;
}

/**
 * Delete any chunk rows for this guide with chunk_index >= newChunkCount.
 * Called after every embed so the DB never keeps stale chunks from a longer
 * prior version of the guide.
 */
async function deleteOrphanChunks(
  supabase: SupabaseClient,
  guideId: string,
  newChunkCount: number,
): Promise<number> {
  const { data, error } = await supabase
    .from('guide_chunks')
    .delete()
    .eq('guide_id', guideId)
    .gte('chunk_index', newChunkCount)
    .select('chunk_index');

  if (error) {
    console.error('deleteOrphanChunks error:', error);
    throw new Error(`Failed to clean up orphan chunks: ${error.message}`);
  }
  return data?.length ?? 0;
}

// ─────────────────────────────────────────────────────────────────────────────
// OpenAI
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Embed a batch of texts with OpenAI. Returns embeddings in the same order as
 * the inputs. Retries up to MAX_RETRIES on 429 (rate limit) and 5xx with
 * exponential backoff, respecting any Retry-After header the API sends back.
 */
async function embedTexts(apiKey: string, texts: string[]): Promise<number[][]> {
  if (texts.length === 0) return [];

  let attempt = 0;
  while (true) {
    const resp = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: EMBED_MODEL,
        input: texts,
      }),
    });

    if (resp.ok) {
      const data = await resp.json();
      const embeddings: number[][] | undefined = data?.data?.map(
        (d: { embedding: number[] }) => d.embedding,
      );
      if (!embeddings || embeddings.length !== texts.length) {
        throw new Error('OpenAI returned a malformed embeddings response.');
      }
      return embeddings;
    }

    // Retryable?
    const retryable = resp.status === 429 || (resp.status >= 500 && resp.status < 600);
    if (!retryable || attempt >= MAX_RETRIES) {
      const errText = await resp.text().catch(() => '');
      console.error('OpenAI embeddings error:', resp.status, errText);
      throw new Error(
        `OpenAI embeddings failed after ${attempt} retries (${resp.status}): ${errText.slice(0, 300)}`,
      );
    }

    // Honor Retry-After if present; otherwise use exponential backoff.
    const retryAfterHeader = resp.headers.get('retry-after');
    const retryAfterMs = parseRetryAfter(retryAfterHeader);
    const backoff = retryAfterMs ?? Math.min(
      BASE_BACKOFF_MS * Math.pow(2, attempt),
      MAX_BACKOFF_MS,
    );

    console.warn(
      `OpenAI ${resp.status} — retrying in ${backoff}ms ` +
      `(attempt ${attempt + 1}/${MAX_RETRIES})`,
    );
    await sleep(backoff);
    attempt++;
  }
}

/**
 * Retry-After can be either a delay in seconds or an HTTP date. We handle
 * the numeric-seconds case (by far the most common for OpenAI) and fall
 * back to null if we can't parse it cleanly.
 */
function parseRetryAfter(header: string | null): number | null {
  if (!header) return null;
  const asNumber = Number(header);
  if (Number.isFinite(asNumber) && asNumber >= 0) {
    return Math.min(asNumber * 1000, MAX_BACKOFF_MS);
  }
  const asDate = Date.parse(header);
  if (!Number.isNaN(asDate)) {
    const delta = asDate - Date.now();
    return delta > 0 ? Math.min(delta, MAX_BACKOFF_MS) : 0;
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Tiny utils
// ─────────────────────────────────────────────────────────────────────────────

/** SHA-256 hex digest via Web Crypto (available in Deno runtime by default). */
async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const buf  = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function truncate(text: string, maxChars: number): string {
  return text.length > maxChars ? text.slice(0, maxChars) : text;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function jsonOk(payload: unknown): Response {
  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function jsonError(message: string, status: number): Response {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}
