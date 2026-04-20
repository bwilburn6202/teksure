-- Forum enhancements migration
-- Adds category column to forum_threads and ensures RLS is in place

-- Add category column if it doesn't already exist
ALTER TABLE forum_threads
  ADD COLUMN IF NOT EXISTS category TEXT DEFAULT 'General';

-- Ensure RLS is enabled on both tables
ALTER TABLE forum_threads ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_replies ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- Forum Threads Policies
-- ============================================================

-- Drop existing policies first to avoid conflicts
DROP POLICY IF EXISTS "Anyone can read forum threads" ON forum_threads;
DROP POLICY IF EXISTS "Users can create forum threads" ON forum_threads;
DROP POLICY IF EXISTS "Users can delete own forum threads" ON forum_threads;

-- Allow everyone (including guests) to read threads
CREATE POLICY "Anyone can read forum threads"
  ON forum_threads
  FOR SELECT
  USING (TRUE);

-- Only authenticated users can create threads
CREATE POLICY "Users can create forum threads"
  ON forum_threads
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can only delete their own threads
CREATE POLICY "Users can delete own forum threads"
  ON forum_threads
  FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================================
-- Forum Replies Policies
-- ============================================================

-- Drop existing policies first
DROP POLICY IF EXISTS "Anyone can read forum replies" ON forum_replies;
DROP POLICY IF EXISTS "Users can create forum replies" ON forum_replies;
DROP POLICY IF EXISTS "Users can delete own forum replies" ON forum_replies;

-- Allow everyone (including guests) to read replies
CREATE POLICY "Anyone can read forum replies"
  ON forum_replies
  FOR SELECT
  USING (TRUE);

-- Only authenticated users can create replies
CREATE POLICY "Users can create forum replies"
  ON forum_replies
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can only delete their own replies
CREATE POLICY "Users can delete own forum replies"
  ON forum_replies
  FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================================
-- Create tables if they don't exist yet (safety fallback)
-- ============================================================

CREATE TABLE IF NOT EXISTS forum_threads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT DEFAULT 'General',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS forum_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  thread_id UUID NOT NULL REFERENCES forum_threads(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster reply lookups by thread
CREATE INDEX IF NOT EXISTS forum_replies_thread_id_idx ON forum_replies(thread_id);
CREATE INDEX IF NOT EXISTS forum_threads_created_at_idx ON forum_threads(created_at DESC);
