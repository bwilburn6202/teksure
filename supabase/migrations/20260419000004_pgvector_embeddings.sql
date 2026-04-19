-- Phase 3: pgvector embeddings for the knowledge base
--
-- Drafts the vector-search plumbing behind a soft feature flag. The column
-- and index are added now so that when Hetzner CX22 + Ollama (serving
-- nomic-embed-text) come online, running the embed-knowledge backfill
-- function is the only additional step needed — no schema change.
--
-- brain-query already probes for this path: if OLLAMA_BASE_URL is set AND
-- the embed call succeeds, it routes through `search_knowledge_documents_vector`.
-- Otherwise it falls back to the tsquery path added in 20260419000003.

-- ─────────────────────────────────────────
-- 1. Extension
-- ─────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS vector;

-- ─────────────────────────────────────────
-- 2. Embedding column — nullable, 768-dim (nomic-embed-text)
-- ─────────────────────────────────────────
ALTER TABLE public.knowledge_documents
  ADD COLUMN IF NOT EXISTS embedding vector(768);

ALTER TABLE public.knowledge_documents
  ADD COLUMN IF NOT EXISTS embedding_model text;

ALTER TABLE public.knowledge_documents
  ADD COLUMN IF NOT EXISTS embedded_at timestamptz;

-- ─────────────────────────────────────────
-- 3. HNSW index for cosine similarity
-- ─────────────────────────────────────────
-- HNSW outperforms IVFFlat on small-to-medium datasets (<100k rows) and
-- doesn't require re-indexing after data load.
CREATE INDEX IF NOT EXISTS idx_knowledge_documents_embedding_hnsw
  ON public.knowledge_documents
  USING hnsw (embedding vector_cosine_ops);

-- ─────────────────────────────────────────
-- 4. Ranked vector-similarity RPC
-- ─────────────────────────────────────────
-- brain-query passes a pre-computed query embedding in. This avoids the
-- RPC needing to call out to Ollama itself (Postgres functions have no
-- HTTP client by default).
CREATE OR REPLACE FUNCTION public.search_knowledge_documents_vector(
  query_embedding vector(768),
  k               int DEFAULT 5
)
RETURNS TABLE (
  id          uuid,
  title       text,
  source_url  text,
  summary     text,
  markdown    text,
  keywords    text[],
  similarity  real
)
LANGUAGE sql
STABLE
AS $$
  SELECT
    kd.id,
    kd.title,
    kd.source_url,
    kd.summary,
    kd.markdown,
    kd.keywords,
    (1 - (kd.embedding <=> query_embedding))::real AS similarity
  FROM public.knowledge_documents kd
  WHERE kd.embedding IS NOT NULL
  ORDER BY kd.embedding <=> query_embedding
  LIMIT GREATEST(k, 1);
$$;

GRANT EXECUTE ON FUNCTION public.search_knowledge_documents_vector(vector, int)
  TO authenticated, service_role;

-- ─────────────────────────────────────────
-- 5. Helper index for the backfill cron
-- ─────────────────────────────────────────
-- embed-knowledge looks for rows where embedding IS NULL to backfill.
CREATE INDEX IF NOT EXISTS idx_knowledge_documents_missing_embedding
  ON public.knowledge_documents (id)
  WHERE embedding IS NULL;
