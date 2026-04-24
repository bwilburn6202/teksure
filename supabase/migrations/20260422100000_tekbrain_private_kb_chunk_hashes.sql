-- Add explicit content hashes for knowledge document chunks so re-embedding can
-- skip unchanged chunks without re-hashing entire DB content every run.

ALTER TABLE public.knowledge_document_chunks
  ADD COLUMN IF NOT EXISTS content_hash text;

UPDATE public.knowledge_document_chunks
SET content_hash = md5(content)
WHERE content_hash IS NULL;

ALTER TABLE public.knowledge_document_chunks
  ALTER COLUMN content_hash SET NOT NULL;

CREATE INDEX IF NOT EXISTS idx_knowledge_document_chunks_content_hash
  ON public.knowledge_document_chunks (document_id, content_hash);
