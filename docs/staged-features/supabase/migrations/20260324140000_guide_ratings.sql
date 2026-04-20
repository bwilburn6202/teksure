-- Guide ratings & views migration
-- Adds user feedback (star ratings + comments) and page view tracking for guides

-- ============================================================
-- Guide Ratings Table
-- ============================================================
CREATE TABLE IF NOT EXISTS guide_ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  guide_id TEXT NOT NULL,           -- matches the id field in guides.ts
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, guide_id)        -- one rating per user per guide
);

-- Indexes for fast lookups
CREATE INDEX IF NOT EXISTS guide_ratings_guide_id_idx ON guide_ratings(guide_id);
CREATE INDEX IF NOT EXISTS guide_ratings_user_id_idx  ON guide_ratings(user_id);

-- Enable RLS
ALTER TABLE guide_ratings ENABLE ROW LEVEL SECURITY;

-- Everyone can read ratings (to show averages/counts on guide pages)
DROP POLICY IF EXISTS "Anyone can read guide ratings" ON guide_ratings;
CREATE POLICY "Anyone can read guide ratings"
  ON guide_ratings FOR SELECT
  USING (TRUE);

-- Authenticated users can add their own rating
DROP POLICY IF EXISTS "Users can create guide ratings" ON guide_ratings;
CREATE POLICY "Users can create guide ratings"
  ON guide_ratings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own rating (change their mind)
DROP POLICY IF EXISTS "Users can update own guide ratings" ON guide_ratings;
CREATE POLICY "Users can update own guide ratings"
  ON guide_ratings FOR UPDATE
  USING (auth.uid() = user_id);

-- Users can delete their own rating
DROP POLICY IF EXISTS "Users can delete own guide ratings" ON guide_ratings;
CREATE POLICY "Users can delete own guide ratings"
  ON guide_ratings FOR DELETE
  USING (auth.uid() = user_id);


-- ============================================================
-- Guide Views Table  (lightweight page-view tracking)
-- ============================================================
CREATE TABLE IF NOT EXISTS guide_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  guide_id TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,  -- NULL for anonymous
  viewed_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS guide_views_guide_id_idx  ON guide_views(guide_id);
CREATE INDEX IF NOT EXISTS guide_views_viewed_at_idx ON guide_views(viewed_at DESC);

-- Enable RLS
ALTER TABLE guide_views ENABLE ROW LEVEL SECURITY;

-- Only admins need to read view data (analytics), but we INSERT publicly
-- Use a service-role call from the edge function OR rely on anon INSERT only
DROP POLICY IF EXISTS "Anyone can log guide views" ON guide_views;
CREATE POLICY "Anyone can log guide views"
  ON guide_views FOR INSERT
  WITH CHECK (TRUE);

-- Admins can read all view data (we'll use service role from the dashboard edge fn)
-- For simplicity, allow authenticated reads so an admin dashboard can query directly
DROP POLICY IF EXISTS "Authenticated users can read guide views" ON guide_views;
CREATE POLICY "Authenticated users can read guide views"
  ON guide_views FOR SELECT
  USING (auth.role() = 'authenticated');
