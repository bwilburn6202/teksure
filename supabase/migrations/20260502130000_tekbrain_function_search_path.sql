-- ─────────────────────────────────────────────────────────────────────────────
-- TekBrain v2 — pin search_path on RAG functions
--
-- Supabase's database linter flags every function without an explicit
-- `search_path` because a mutable search_path is a privilege-escalation vector:
-- a malicious schema in front of `public` can shadow built-in operators or
-- tables and run code under the function's privileges.
--
-- The four functions touched here all power TekBrain's RAG pipeline:
--   - match_guide_chunks                   — top-N retrieval over guide_chunks
--   - match_knowledge_document_chunks      — top-N retrieval over private docs
--   - update_tekbrain_updated_at           — updated_at trigger for guide_chunks
--   - update_knowledge_document_chunks_updated_at — updated_at trigger for KB chunks
--
-- We pin them to `public, pg_temp` (Supabase's recommended pattern) so:
--   * built-in objects under `public` resolve as expected
--   * `pg_temp` is allowed last so per-session temp objects still work
--   * no other schema can be slipped in front to shadow them
--
-- Functions are recreated with their original bodies + the SET clause; we keep
-- everything else (return shape, language, STABLE marker) byte-identical to
-- the current definitions.
-- ─────────────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.match_guide_chunks(
  query_embedding vector(1536),
  match_count     int DEFAULT 5,
  filter_category text DEFAULT NULL,
  filter_guide_id text DEFAULT NULL
)
RETURNS TABLE (
  id           uuid,
  guide_id     text,
  guide_title  text,
  category     text,
  chunk_index  integer,
  heading      text,
  content      text,
  metadata     jsonb,
  similarity   float
)
LANGUAGE plpgsql
STABLE
SET search_path = public, pg_temp
AS $$
BEGIN
  RETURN QUERY
  SELECT
    gc.id,
    gc.guide_id,
    gc.guide_title,
    gc.category,
    gc.chunk_index,
    gc.heading,
    gc.content,
    gc.metadata,
    1 - (gc.embedding <=> query_embedding) AS similarity
  FROM public.guide_chunks gc
  WHERE gc.embedding IS NOT NULL
    AND (filter_category IS NULL OR gc.category = filter_category)
    AND (filter_guide_id IS NULL OR gc.guide_id = filter_guide_id)
  ORDER BY gc.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

CREATE OR REPLACE FUNCTION public.match_knowledge_document_chunks(
  query_embedding vector(1536),
  match_count integer DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  document_id uuid,
  title text,
  source_url text,
  chunk_index integer,
  chunk_heading text,
  content text,
  metadata jsonb,
  similarity float
)
LANGUAGE sql
STABLE
SET search_path = public, pg_temp
AS $$
  SELECT
    c.id,
    c.document_id,
    d.title,
    d.source_url,
    c.chunk_index,
    c.chunk_heading,
    c.content,
    c.metadata,
    1 - (c.embedding <=> query_embedding) AS similarity
  FROM public.knowledge_document_chunks c
  JOIN public.knowledge_documents d ON d.id = c.document_id
  WHERE d.compile_status = 'ready'
  ORDER BY c.embedding <=> query_embedding
  LIMIT GREATEST(match_count, 1);
$$;

CREATE OR REPLACE FUNCTION public.update_tekbrain_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_knowledge_document_chunks_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
