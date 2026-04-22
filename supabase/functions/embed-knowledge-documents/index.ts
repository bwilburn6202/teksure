// Supabase Edge Function: embed-knowledge-documents
// Chunks compiled private knowledge documents and stores embeddings so TekBrain
// can retrieve private/internal context at chat time.

import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const EMBED_MODEL = Deno.env.get('OPENAI_EMBED_MODEL') ?? 'text-embedding-3-small';
const MAX_CHUNK_CHARS = 2200;

interface EmbedBody {
  document_ids?: string[];
  limit?: number;
  force_refresh?: boolean;
}

interface KnowledgeDocument {
  id: string;
  title: string;
  source_url: string;
  markdown: string;
  summary: string;
  keywords: string[];
  updated_at: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return jsonError('Method not allowed. Use POST.', 405);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  const openaiKey = Deno.env.get('OPENAI_API_KEY');

  if (!supabaseUrl || !serviceRoleKey) return jsonError('Supabase credentials missing.', 500);
  if (!openaiKey) return jsonError('OPENAI_API_KEY is missing.', 500);

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  let body: EmbedBody = {};
  try {
    body = (await req.json()) as EmbedBody;
  } catch {
    // empty body is valid
  }

  const forceRefresh = Boolean(body.force_refresh);
  const limit = Math.min(Math.max(body.limit ?? 20, 1), 100);

  try {
    const docs = await loadDocuments(supabase, body.document_ids, limit);
    if (docs.length === 0) {
      return jsonOk({ embedded_documents: 0, embedded_chunks: 0, message: 'No matching documents to embed.' });
    }

    let embeddedDocs = 0;
    let embeddedChunks = 0;

    for (const doc of docs) {
      const chunks = chunkDocument(doc);
      if (chunks.length === 0) continue;

      if (forceRefresh) {
        await supabase.from('knowledge_document_chunks').delete().eq('document_id', doc.id);
      }

      const existing = await loadExistingChunkHashes(supabase, doc.id);
      const changed = chunks.filter((c) => forceRefresh || existing.get(c.chunk_index) !== c.content_hash);

      if (changed.length === 0) continue;

      const embeddings = await embedTexts(openaiKey, changed.map((c) => c.content));

      const rows = changed.map((chunk, i) => ({
        document_id: doc.id,
        chunk_index: chunk.chunk_index,
        chunk_heading: chunk.chunk_heading,
        content: chunk.content,
        content_hash: chunk.content_hash,
        metadata: chunk.metadata,
        embedding: embeddings[i],
      }));

      const { error } = await supabase
        .from('knowledge_document_chunks')
        .upsert(rows, { onConflict: 'document_id,chunk_index' });

      if (error) throw new Error(`Could not save chunks for ${doc.id}: ${error.message}`);

      embeddedDocs += 1;
      embeddedChunks += rows.length;

      await deleteOrphanChunks(supabase, doc.id, chunks.length);
    }

    return jsonOk({
      embedded_documents: embeddedDocs,
      embedded_chunks: embeddedChunks,
      scanned_documents: docs.length,
      force_refresh: forceRefresh,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown server error.';
    return jsonError(msg, 500);
  }
});

async function loadDocuments(
  supabase: SupabaseClient,
  documentIds: string[] | undefined,
  limit: number,
): Promise<KnowledgeDocument[]> {
  let query = supabase
    .from('knowledge_documents')
    .select('id, title, source_url, markdown, summary, keywords, updated_at')
    .eq('compile_status', 'ready')
    .order('updated_at', { ascending: false })
    .limit(limit);

  if (documentIds && documentIds.length > 0) {
    query = query.in('id', documentIds);
  }

  const { data, error } = await query;
  if (error) throw new Error(`Could not load documents: ${error.message}`);
  return (data ?? []) as KnowledgeDocument[];
}

function chunkDocument(doc: KnowledgeDocument) {
  const raw = (doc.markdown || doc.summary || '').trim();
  if (!raw) return [];

  const sections = raw
    .split(/\n(?=##\s+)/g)
    .map((s) => s.trim())
    .filter(Boolean);

  const candidates = sections.length > 0 ? sections : raw.split(/\n\n+/g).map((s) => s.trim()).filter(Boolean);
  const chunks: Array<{ chunk_index: number; chunk_heading: string | null; content: string; content_hash: string; metadata: Record<string, unknown> }> = [];

  let idx = 0;
  for (const section of candidates) {
    const headingMatch = section.match(/^##\s+(.+)/m);
    const heading = headingMatch ? headingMatch[1].trim() : null;

    for (const piece of splitByCharLimit(section, MAX_CHUNK_CHARS)) {
      const content = piece.trim();
      if (!content) continue;

      chunks.push({
        chunk_index: idx,
        chunk_heading: heading,
        content,
        content_hash: hashString(content),
        metadata: {
          title: doc.title,
          source_url: doc.source_url,
          keywords: doc.keywords,
          document_updated_at: doc.updated_at,
        },
      });
      idx += 1;
    }
  }

  return chunks;
}

function splitByCharLimit(text: string, maxChars: number): string[] {
  if (text.length <= maxChars) return [text];

  const parts: string[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    let end = Math.min(cursor + maxChars, text.length);
    if (end < text.length) {
      const newline = text.lastIndexOf('\n', end);
      const period = text.lastIndexOf('. ', end);
      const boundary = Math.max(newline, period);
      if (boundary > cursor + Math.floor(maxChars * 0.5)) {
        end = boundary + 1;
      }
    }
    parts.push(text.slice(cursor, end));
    cursor = end;
  }

  return parts;
}

async function loadExistingChunkHashes(supabase: SupabaseClient, documentId: string): Promise<Map<number, string>> {
  const { data, error } = await supabase
    .from('knowledge_document_chunks')
    .select('chunk_index, content_hash')
    .eq('document_id', documentId);

  if (error) throw new Error(`Could not load existing chunks: ${error.message}`);

  const map = new Map<number, string>();
  for (const row of data ?? []) {
    map.set(row.chunk_index, row.content_hash);
  }
  return map;
}

async function deleteOrphanChunks(supabase: SupabaseClient, documentId: string, keepCount: number) {
  const { data: staleRows, error: selectErr } = await supabase
    .from('knowledge_document_chunks')
    .select('id')
    .eq('document_id', documentId)
    .gte('chunk_index', keepCount);

  if (selectErr) throw new Error(`Could not inspect stale chunks: ${selectErr.message}`);
  if (!staleRows || staleRows.length === 0) return;

  const staleIds = staleRows.map((r) => r.id);
  const { error: deleteErr } = await supabase
    .from('knowledge_document_chunks')
    .delete()
    .in('id', staleIds);

  if (deleteErr) throw new Error(`Could not delete stale chunks: ${deleteErr.message}`);
}

async function embedTexts(apiKey: string, texts: string[]): Promise<number[][]> {
  const resp = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: EMBED_MODEL,
      input: texts,
    }),
  });

  if (!resp.ok) {
    const err = await resp.text().catch(() => '');
    throw new Error(`Embedding request failed (${resp.status}): ${err || 'unknown error'}`);
  }

  const data = await resp.json();
  const embeddings = data?.data?.map((d: { embedding: number[] }) => d.embedding) as number[][] | undefined;
  if (!embeddings || embeddings.length !== texts.length) {
    throw new Error('Embedding response did not match input chunk count.');
  }

  return embeddings;
}

function jsonOk(payload: unknown) {
  return new Response(JSON.stringify(payload), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function jsonError(message: string, status: number) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function hashString(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return String(hash);
}
