-- Forum: Admin moderation + Full-text search
-- Adds admin-override delete policies and a GIN index for search

-- ============================================================
-- Admin override: allow admins to delete any thread/reply
-- ============================================================

-- Admins can delete any forum thread (not just their own)
DROP POLICY IF EXISTS "Admins can delete any thread" ON forum_threads;
CREATE POLICY "Admins can delete any thread"
  ON forum_threads FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.user_id = auth.uid()
        AND profiles.is_admin = TRUE
    )
  );

-- Admins can delete any forum reply (not just their own)
DROP POLICY IF EXISTS "Admins can delete any reply" ON forum_replies;
CREATE POLICY "Admins can delete any reply"
  ON forum_replies FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.user_id = auth.uid()
        AND profiles.is_admin = TRUE
    )
  );

-- ============================================================
-- Full-text search: GIN index on forum_threads
-- ============================================================

-- Add a generated tsvector column for fast full-text search
ALTER TABLE forum_threads
  ADD COLUMN IF NOT EXISTS search_vector TSVECTOR
    GENERATED ALWAYS AS (
      to_tsvector('english',
        coalesce(title, '') || ' ' || coalesce(content, '')
      )
    ) STORED;

-- GIN index for fast tsvector queries
CREATE INDEX IF NOT EXISTS forum_threads_search_idx
  ON forum_threads USING GIN (search_vector);

-- ============================================================
-- Helper function for searching forum threads
-- ============================================================
-- Usage (from the client):
--   supabase.rpc('search_forum_threads', { query: 'wifi password' })
--
-- Returns threads ordered by relevance score, most relevant first.

CREATE OR REPLACE FUNCTION search_forum_threads(query TEXT)
RETURNS TABLE (
  id UUID,
  title TEXT,
  content TEXT,
  category TEXT,
  created_at TIMESTAMPTZ,
  user_id UUID,
  rank REAL
)
LANGUAGE sql
STABLE
AS $$
  SELECT
    t.id,
    t.title,
    t.content,
    t.category,
    t.created_at,
    t.user_id,
    ts_rank(t.search_vector, plainto_tsquery('english', query)) AS rank
  FROM forum_threads t
  WHERE t.search_vector @@ plainto_tsquery('english', query)
  ORDER BY rank DESC, t.created_at DESC
  LIMIT 50;
$$;
