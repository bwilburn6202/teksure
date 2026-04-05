-- Admin-only knowledge base artifacts compiled from scraped content

CREATE TABLE IF NOT EXISTS public.knowledge_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_article_id uuid NOT NULL UNIQUE REFERENCES public.scraped_articles (id) ON DELETE CASCADE,
  title text NOT NULL,
  source_url text NOT NULL,
  summary text NOT NULL,
  keywords text[] NOT NULL DEFAULT '{}',
  markdown text NOT NULL,
  model_name text,
  compile_status text NOT NULL DEFAULT 'ready'
    CHECK (compile_status IN ('ready', 'error')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.knowledge_concepts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  summary text NOT NULL,
  markdown text NOT NULL,
  source_document_ids uuid[] NOT NULL DEFAULT '{}',
  model_name text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.knowledge_outputs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  output_type text NOT NULL
    CHECK (output_type IN ('answer', 'deck', 'report')),
  title text NOT NULL,
  prompt text,
  markdown text NOT NULL,
  source_document_ids uuid[] NOT NULL DEFAULT '{}',
  model_name text,
  status text NOT NULL DEFAULT 'ready'
    CHECK (status IN ('ready', 'error')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE OR REPLACE FUNCTION public.update_knowledge_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_knowledge_documents_updated_at ON public.knowledge_documents;
CREATE TRIGGER trg_knowledge_documents_updated_at
  BEFORE UPDATE ON public.knowledge_documents
  FOR EACH ROW EXECUTE FUNCTION public.update_knowledge_updated_at();

DROP TRIGGER IF EXISTS trg_knowledge_concepts_updated_at ON public.knowledge_concepts;
CREATE TRIGGER trg_knowledge_concepts_updated_at
  BEFORE UPDATE ON public.knowledge_concepts
  FOR EACH ROW EXECUTE FUNCTION public.update_knowledge_updated_at();

DROP TRIGGER IF EXISTS trg_knowledge_outputs_updated_at ON public.knowledge_outputs;
CREATE TRIGGER trg_knowledge_outputs_updated_at
  BEFORE UPDATE ON public.knowledge_outputs
  FOR EACH ROW EXECUTE FUNCTION public.update_knowledge_updated_at();

CREATE INDEX IF NOT EXISTS idx_knowledge_documents_updated_at
  ON public.knowledge_documents (updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_knowledge_documents_keywords
  ON public.knowledge_documents USING GIN (keywords);
CREATE INDEX IF NOT EXISTS idx_knowledge_concepts_updated_at
  ON public.knowledge_concepts (updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_knowledge_outputs_output_type
  ON public.knowledge_outputs (output_type);
CREATE INDEX IF NOT EXISTS idx_knowledge_outputs_updated_at
  ON public.knowledge_outputs (updated_at DESC);

ALTER TABLE public.knowledge_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.knowledge_concepts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.knowledge_outputs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read knowledge documents"
  ON public.knowledge_documents FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can manage knowledge documents"
  ON public.knowledge_documents FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can read knowledge concepts"
  ON public.knowledge_concepts FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can manage knowledge concepts"
  ON public.knowledge_concepts FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can read knowledge outputs"
  ON public.knowledge_outputs FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can manage knowledge outputs"
  ON public.knowledge_outputs FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Service role all knowledge documents"
  ON public.knowledge_documents FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

CREATE POLICY "Service role all knowledge concepts"
  ON public.knowledge_concepts FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

CREATE POLICY "Service role all knowledge outputs"
  ON public.knowledge_outputs FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);
