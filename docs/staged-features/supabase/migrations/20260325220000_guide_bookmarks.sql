-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: 20260325220000_guide_bookmarks.sql
--
-- Adds "Save Guide" (bookmark) feature.
-- Users can bookmark any guide by its string ID from guides.ts.
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS guide_bookmarks (
  id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  guide_id   TEXT        NOT NULL,                        -- matches guides.ts id field
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, guide_id)                              -- one bookmark per guide per user
);

-- Index for fast "fetch all bookmarks for user" query
CREATE INDEX IF NOT EXISTS guide_bookmarks_user_idx
  ON guide_bookmarks (user_id, created_at DESC);

-- ── RLS ───────────────────────────────────────────────────────────────────────
ALTER TABLE guide_bookmarks ENABLE ROW LEVEL SECURITY;

-- Users can only see their own bookmarks
CREATE POLICY "Users can view own bookmarks"
  ON guide_bookmarks FOR SELECT
  USING (auth.uid() = user_id);

-- Users can create their own bookmarks
CREATE POLICY "Users can create own bookmarks"
  ON guide_bookmarks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can delete their own bookmarks
CREATE POLICY "Users can delete own bookmarks"
  ON guide_bookmarks FOR DELETE
  USING (auth.uid() = user_id);
