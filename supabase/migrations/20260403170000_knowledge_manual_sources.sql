-- Manual admin-uploaded sources for the knowledge base

CREATE TABLE IF NOT EXISTS public.knowledge_manual_sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  source_type text NOT NULL DEFAULT 'manual'
    CHECK (source_type IN ('manual', 'upload')),
  original_filename text,
  source_url text,
  content text NOT NULL,
  created_by uuid REFERENCES public.profiles (id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

DROP TRIGGER IF EXISTS trg_knowledge_manual_sources_updated_at ON public.knowledge_manual_sources;
CREATE TRIGGER trg_knowledge_manual_sources_updated_at
  BEFORE UPDATE ON public.knowledge_manual_sources
  FOR EACH ROW EXECUTE FUNCTION public.update_knowledge_updated_at();

CREATE INDEX IF NOT EXISTS idx_knowledge_manual_sources_created_at
  ON public.knowledge_manual_sources (created_at DESC);

ALTER TABLE public.knowledge_manual_sources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read manual knowledge sources"
  ON public.knowledge_manual_sources FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can manage manual knowledge sources"
  ON public.knowledge_manual_sources FOR ALL
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

CREATE POLICY "Service role all manual knowledge sources"
  ON public.knowledge_manual_sources FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);
