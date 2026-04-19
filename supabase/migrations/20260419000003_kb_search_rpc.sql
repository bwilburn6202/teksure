-- Ranked full-text search over knowledge_documents
--
-- Exposes a Postgres RPC that brain-query calls to retrieve the top-K most
-- relevant knowledge documents for a user question. Uses the tsvector column
-- added in 20260419000002 with ts_rank to order by relevance.
--
-- Security: SECURITY INVOKER (default). The caller (brain-query edge function)
-- uses a service_role JWT which bypasses RLS on knowledge_documents, so the
-- public Brain UI can get answers without each end-user needing admin role.

CREATE OR REPLACE FUNCTION public.search_knowledge_documents(
  q text,
  k int DEFAULT 5
)
RETURNS TABLE (
  id          uuid,
  title       text,
  source_url  text,
  summary     text,
  markdown    text,
  keywords    text[],
  rank        real
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
    ts_rank(kd.search_vector, websearch_to_tsquery('english', q))::real AS rank
  FROM public.knowledge_documents kd
  WHERE kd.search_vector @@ websearch_to_tsquery('english', q)
  ORDER BY rank DESC
  LIMIT GREATEST(k, 1);
$$;

-- Grant execute so authenticated users (with RLS) + service_role can call it.
-- RLS on the underlying table still applies for non-service_role callers.
GRANT EXECUTE ON FUNCTION public.search_knowledge_documents(text, int) TO authenticated, service_role;
