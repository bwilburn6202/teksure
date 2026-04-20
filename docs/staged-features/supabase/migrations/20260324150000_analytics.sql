-- Analytics enhancements migration
-- Adds a view for guide analytics and ensures guide_views is queryable by admins

-- ============================================================
-- Admin role helper (adds admin flag to profiles if not present)
-- ============================================================
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE;

-- ============================================================
-- Convenience view: guide rating summary per guide_id
-- ============================================================
CREATE OR REPLACE VIEW guide_rating_summary AS
SELECT
  guide_id,
  COUNT(*)                            AS total_ratings,
  ROUND(AVG(rating)::NUMERIC, 1)     AS average_rating,
  SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) AS five_star,
  SUM(CASE WHEN rating = 4 THEN 1 ELSE 0 END) AS four_star,
  SUM(CASE WHEN rating = 3 THEN 1 ELSE 0 END) AS three_star,
  SUM(CASE WHEN rating = 2 THEN 1 ELSE 0 END) AS two_star,
  SUM(CASE WHEN rating = 1 THEN 1 ELSE 0 END) AS one_star
FROM guide_ratings
GROUP BY guide_id;

-- ============================================================
-- Convenience view: guide view counts (last 30 days + all time)
-- ============================================================
CREATE OR REPLACE VIEW guide_view_summary AS
SELECT
  guide_id,
  COUNT(*)                                                               AS total_views,
  COUNT(*) FILTER (WHERE viewed_at >= NOW() - INTERVAL '30 days')       AS views_last_30_days,
  COUNT(*) FILTER (WHERE viewed_at >= NOW() - INTERVAL '7 days')        AS views_last_7_days
FROM guide_views
GROUP BY guide_id;

-- ============================================================
-- Ensure RLS on profiles still works with is_admin column
-- ============================================================
-- Existing policies remain in place; is_admin defaults to FALSE for all users.
-- To grant admin: UPDATE profiles SET is_admin = TRUE WHERE user_id = '<uuid>';
