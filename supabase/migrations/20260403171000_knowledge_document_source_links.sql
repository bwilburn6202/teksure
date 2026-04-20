-- Allow compiled knowledge documents to originate from either scraped articles or manual sources

ALTER TABLE public.knowledge_documents
  ALTER COLUMN source_article_id DROP NOT NULL;

ALTER TABLE public.knowledge_documents
  ADD COLUMN IF NOT EXISTS manual_source_id uuid REFERENCES public.knowledge_manual_sources (id) ON DELETE CASCADE;

CREATE UNIQUE INDEX IF NOT EXISTS uq_knowledge_documents_manual_source_id
  ON public.knowledge_documents (manual_source_id)
  WHERE manual_source_id IS NOT NULL;
