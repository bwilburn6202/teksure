-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: Forum votes + thread pinning
-- Date: 2026-03-24
-- ─────────────────────────────────────────────────────────────────────────────

-- 1. Add is_pinned column to forum_threads
ALTER TABLE forum_threads
  ADD COLUMN IF NOT EXISTS is_pinned BOOLEAN NOT NULL DEFAULT FALSE;

-- ─────────────────────────────────────────────────────────────────────────────
-- 2. thread_votes table — one row per (user, thread) pair
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS thread_votes (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id  UUID NOT NULL REFERENCES forum_threads(id) ON DELETE CASCADE,
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE (thread_id, user_id)
);

ALTER TABLE thread_votes ENABLE ROW LEVEL SECURITY;

-- Anyone (including guests) can read vote counts
CREATE POLICY "Anyone can view thread votes"
  ON thread_votes FOR SELECT
  USING (TRUE);

-- Logged-in users can cast their own vote
CREATE POLICY "Users can add own vote"
  ON thread_votes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can remove their own vote (toggle)
CREATE POLICY "Users can remove own vote"
  ON thread_votes FOR DELETE
  USING (auth.uid() = user_id);

-- ─────────────────────────────────────────────────────────────────────────────
-- 3. View: vote count per thread (used by ForumIndex to avoid N+1 queries)
-- ─────────────────────────────────────────────────────────────────────────────
CREATE OR REPLACE VIEW thread_vote_counts AS
SELECT
  thread_id,
  COUNT(*) AS vote_count
FROM thread_votes
GROUP BY thread_id;

-- Grant read access to all roles
GRANT SELECT ON thread_vote_counts TO anon, authenticated;

-- ─────────────────────────────────────────────────────────────────────────────
-- 4. RPC: pin_thread — admin-only function to pin/unpin a thread
--    Uses SECURITY DEFINER so it can bypass RLS for the UPDATE.
--    The function itself enforces the admin check.
-- ─────────────────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION pin_thread(thread_id_param UUID, pin_value BOOLEAN)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Verify the caller is an admin
  IF NOT EXISTS (
    SELECT 1 FROM profiles
    WHERE user_id = auth.uid()
      AND is_admin = TRUE
  ) THEN
    RAISE EXCEPTION 'Unauthorized: only admins can pin threads';
  END IF;

  UPDATE forum_threads
  SET is_pinned = pin_value
  WHERE id = thread_id_param;
END;
$$;

-- Allow authenticated users to call this function (the body checks admin status)
GRANT EXECUTE ON FUNCTION pin_thread(UUID, BOOLEAN) TO authenticated;
