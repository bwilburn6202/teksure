-- Add quality_score to scraped_articles
-- Score range: 0.0 (low quality / auto-reject) → 1.0 (high quality)
-- Articles below 0.3 are auto-rejected by the categorize-and-dedup edge function

ALTER TABLE scraped_articles
  ADD COLUMN IF NOT EXISTS quality_score float DEFAULT NULL;

CREATE INDEX IF NOT EXISTS idx_scraped_articles_quality_score
  ON scraped_articles (quality_score);

-- Allow authenticated users (admin) to update scraped_articles
-- (approve / reject from the content pipeline dashboard)
CREATE POLICY IF NOT EXISTS "authenticated_update_scraped_articles"
  ON scraped_articles FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
