-- Knowledge base: full-text search support
--
-- Adds a GENERATED tsvector column over title + summary + markdown plus a GIN
-- index. This unlocks Postgres full-text search today (Phase 2 of the Brain
-- work) without needing pgvector or Ollama. When semantic embeddings land
-- later, the tsvector path can stay as a fallback.

-- ─────────────────────────────────────────
-- 1. Generated tsvector column
-- ─────────────────────────────────────────
-- English-language weighted vector:
--   A = title (most important)
--   B = summary
--   C = markdown body
ALTER TABLE public.knowledge_documents
  ADD COLUMN IF NOT EXISTS search_vector tsvector
    GENERATED ALWAYS AS (
      setweight(to_tsvector('english', coalesce(title, '')),    'A') ||
      setweight(to_tsvector('english', coalesce(summary, '')),  'B') ||
      setweight(to_tsvector('english', coalesce(markdown, '')), 'C')
    ) STORED;

CREATE INDEX IF NOT EXISTS idx_knowledge_documents_search_vector
  ON public.knowledge_documents
  USING GIN (search_vector);

-- ─────────────────────────────────────────
-- 2. Helpful composite index for the ingest query
-- ─────────────────────────────────────────
-- ingest-knowledge filters simplified_articles by verification_status and
-- joins back to scraped_articles via scraped_article_id. Add an index that
-- covers the most common lookup path.
CREATE INDEX IF NOT EXISTS idx_simplified_articles_verified_pending_ingest
  ON public.simplified_articles (scraped_article_id)
  WHERE verification_status IN ('verified', 'partial');
