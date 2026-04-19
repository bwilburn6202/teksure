/**
 * embed-knowledge
 *
 * Backfills vector embeddings on `knowledge_documents` rows where
 * `embedding IS NULL`. Calls Ollama's `/api/embeddings` endpoint with the
 * `nomic-embed-text` model (configurable via `OLLAMA_EMBED_MODEL`) and
 * writes the 768-dim vector back to the row.
 *
 * Modes
 *   Single: POST { "knowledge_document_id": "<uuid>" } — process one row.
 *   Bulk:   POST {} (or no body)                       — process up to
 *                                                        `BATCH_LIMIT` rows.
 *
 * Soft no-op: if `OLLAMA_BASE_URL` is not set, this function returns
 * `{ success: true, skipped: true, reason: "Ollama not configured" }`.
 * That way the rest of the pipeline keeps working on tsquery and flipping
 * embeddings on is a matter of setting the env var and running this once.
 *
 * Idempotent: skips rows that already have an embedding. Safe to cron.
 *
 * Auth: service_role JWT.
 */

import { serve }        from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─── Config ───────────────────────────────────────────────────────────────────

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SVC_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const OLLAMA_BASE_URL  = Deno.env.get('OLLAMA_BASE_URL');
const EMBED_MODEL      = Deno.env.get('OLLAMA_EMBED_MODEL') ?? 'nomic-embed-text';

/** Max rows processed per bulk invocation (keeps runtime < 120s). */
const BATCH_LIMIT = 25;

/** Max characters of markdown to embed per row (keeps embedding quality high) */
const MAX_EMBED_CHARS = 6_000;

// ─── Types ───────────────────────────────────────────────────────────────────

interface KnowledgeRow {
  id:       string;
  title:    string;
  summary:  string;
  markdown: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

/**
 * Compose the text we embed. Title + summary + body snippet gives the vector
 * context from the most-important fields without burning tokens on
 * attribution footers or metadata.
 */
function embedText(row: KnowledgeRow): string {
  const body = row.markdown.length > MAX_EMBED_CHARS
    ? row.markdown.slice(0, MAX_EMBED_CHARS)
    : row.markdown;
  return `${row.title}\n\n${row.summary}\n\n${body}`;
}

// ─── Ollama embedding call ───────────────────────────────────────────────────

async function embedOne(text: string): Promise<number[] | null> {
  if (!OLLAMA_BASE_URL) return null;
  try {
    const res = await fetch(`${OLLAMA_BASE_URL}/api/embeddings`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      signal:  AbortSignal.timeout(30_000),
      body:    JSON.stringify({ model: EMBED_MODEL, prompt: text }),
    });
    if (!res.ok) {
      console.warn(`[embed-knowledge] Ollama ${res.status}: ${await res.text()}`);
      return null;
    }
    const data = await res.json();
    const vec = data.embedding;
    if (!Array.isArray(vec) || vec.length === 0) return null;
    return vec as number[];
  } catch (err) {
    console.warn('[embed-knowledge] Ollama call failed:', err);
    return null;
  }
}

// ─── Row processing ──────────────────────────────────────────────────────────

async function embedRow(
  supabase: ReturnType<typeof createClient>,
  row: KnowledgeRow,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const vec = await embedOne(embedText(row));
  if (!vec) return { ok: false, reason: `embed failed for ${row.id}` };

  const { error } = await supabase
    .from('knowledge_documents')
    .update({
      embedding:       vec as unknown as string, // pgvector accepts JSON array literal
      embedding_model: EMBED_MODEL,
      embedded_at:     new Date().toISOString(),
    })
    .eq('id', row.id);

  if (error) return { ok: false, reason: `update: ${error.message}` };
  return { ok: true };
}

// ─── Handler ─────────────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });

  // ── Soft no-op when Ollama isn't wired up yet ──────────────────────────────
  if (!OLLAMA_BASE_URL) {
    return json({
      success: true,
      skipped: true,
      reason:  'Ollama not configured (OLLAMA_BASE_URL unset). No embeddings generated.',
    });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SVC_KEY);

  try {
    const body = await req.json().catch(() => ({}));
    const singleId: string | undefined = body?.knowledge_document_id;

    // ── Single-row mode ───────────────────────────────────────────────────────
    if (singleId) {
      const { data, error } = await supabase
        .from('knowledge_documents')
        .select('id, title, summary, markdown')
        .eq('id', singleId)
        .maybeSingle();
      if (error) throw error;
      if (!data) return json({ error: `No knowledge_documents row ${singleId}` }, 404);

      const result = await embedRow(supabase, data as KnowledgeRow);
      console.log(`[embed-knowledge] single ${singleId} → ${JSON.stringify(result)}`);
      return json(result);
    }

    // ── Bulk mode ─────────────────────────────────────────────────────────────
    const { data, error } = await supabase
      .from('knowledge_documents')
      .select('id, title, summary, markdown')
      .is('embedding', null)
      .limit(BATCH_LIMIT);
    if (error) throw error;

    const rows = (data ?? []) as KnowledgeRow[];
    console.log(`[embed-knowledge] bulk: ${rows.length} rows to embed with ${EMBED_MODEL}`);

    const stats = { embedded: 0, failed: 0, errors: [] as string[] };
    for (const row of rows) {
      const r = await embedRow(supabase, row);
      if (r.ok) stats.embedded++;
      else {
        stats.failed++;
        stats.errors.push(r.reason);
      }
    }

    return json({
      success:   true,
      processed: rows.length,
      model:     EMBED_MODEL,
      ...stats,
    });

  } catch (err) {
    console.error('[embed-knowledge] fatal:', err);
    return json({ error: String(err) }, 500);
  }
});
