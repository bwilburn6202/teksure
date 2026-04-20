-- ─────────────────────────────────────────────────────────────────────────────
-- Migration: 20260326120000_tech_reviews.sql
--
-- Adds post-job technician reviews:
--  • tech_reviews table: users rate techs after a completed booking
--  • One review per booking (unique constraint)
--  • Public SELECT so tech ratings can be aggregated
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS tech_reviews (
  id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id             UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  user_id                UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  technician_profile_id  UUID NOT NULL REFERENCES technician_profiles(id) ON DELETE CASCADE,
  rating                 INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment                TEXT,
  created_at             TIMESTAMPTZ DEFAULT NOW()
);

-- One review per booking
CREATE UNIQUE INDEX IF NOT EXISTS tech_reviews_booking_id_key
  ON tech_reviews (booking_id);

-- Fast lookup by technician (for dashboard aggregation)
CREATE INDEX IF NOT EXISTS tech_reviews_tech_idx
  ON tech_reviews (technician_profile_id);

-- ── RLS ───────────────────────────────────────────────────────────────────────

ALTER TABLE tech_reviews ENABLE ROW LEVEL SECURITY;

-- Anyone can read reviews (powers public tech ratings)
CREATE POLICY "Anyone can read tech reviews"
  ON tech_reviews FOR SELECT
  USING (TRUE);

-- Logged-in users can submit a review for their own bookings
CREATE POLICY "Users can submit their own reviews"
  ON tech_reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own reviews (change rating/comment)
CREATE POLICY "Users can update their own reviews"
  ON tech_reviews FOR UPDATE
  USING (auth.uid() = user_id);

-- Users can delete their own reviews
CREATE POLICY "Users can delete their own reviews"
  ON tech_reviews FOR DELETE
  USING (auth.uid() = user_id);

-- ── Helpful view: average rating per technician ───────────────────────────────

CREATE OR REPLACE VIEW technician_avg_ratings AS
SELECT
  technician_profile_id,
  ROUND(AVG(rating)::NUMERIC, 1) AS avg_rating,
  COUNT(*)                        AS review_count
FROM tech_reviews
GROUP BY technician_profile_id;
