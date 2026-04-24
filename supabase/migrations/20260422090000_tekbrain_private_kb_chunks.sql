-- TekBrain private knowledge base retrieval
-- Adds chunk-level vector index for admin-uploaded knowledge documents so
-- TekBrain can answer from private/internal docs in addition to public guides.

CREATE TABLE IF NOT EXISTS public.knowledge_document_chunks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id uuid NOT NULL REFERENCES public.knowledge_documents(id) ON DELETE CASCADE,
  chunk_index integer NOT NULL,
  chunk_heading text,
  content text NOT NULL,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  embedding vector(1536) NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT uq_knowledge_document_chunks_doc_chunk UNIQUE (document_id, chunk_index)
);

CREATE INDEX IF NOT EXISTS idx_knowledge_document_chunks_document_id
  ON public.knowledge_document_chunks (document_id);

CREATE INDEX IF NOT EXISTS idx_knowledge_document_chunks_embedding
  ON public.knowledge_document_chunks
  USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);

CREATE OR REPLACE FUNCTION public.update_knowledge_document_chunks_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_knowledge_document_chunks_updated_at ON public.knowledge_document_chunks;
CREATE TRIGGER trg_knowledge_document_chunks_updated_at
  BEFORE UPDATE ON public.knowledge_document_chunks
  FOR EACH ROW EXECUTE FUNCTION public.update_knowledge_document_chunks_updated_at();

ALTER TABLE public.knowledge_document_chunks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role all knowledge document chunks"
  ON public.knowledge_document_chunks FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

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
