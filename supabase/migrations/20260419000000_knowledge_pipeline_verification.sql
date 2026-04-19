-- Knowledge Pipeline: verification + TekSure Guide schema support
--
-- Purpose
--   Support the tuned simplify-article prompt that produces a full TekSure Guide
--   object (category, tags, emoji, excerpt, attribution) and a verification
--   status per article. This lets us accept authoritative sources automatically
--   while rejecting unverifiable community content (Reddit, Stack Exchange,
--   YouTube transcripts) before it ever becomes a published guide.

-- ─────────────────────────────────────────
-- 1. content_sources: trust tier + source type + feed metadata
-- ─────────────────────────────────────────
ALTER TABLE content_sources
  ADD COLUMN IF NOT EXISTS trust_tier  text NOT NULL DEFAULT 'editorial'
    CHECK (trust_tier IN ('authoritative','editorial','community')),
  ADD COLUMN IF NOT EXISTS source_type text NOT NULL DEFAULT 'web'
    CHECK (source_type IN ('web','rss','reddit','stackexchange','youtube')),
  ADD COLUMN IF NOT EXISTS tier_label  text,
  ADD COLUMN IF NOT EXISTS topics      text[];

CREATE INDEX IF NOT EXISTS idx_content_sources_trust_tier  ON content_sources (trust_tier);
CREATE INDEX IF NOT EXISTS idx_content_sources_source_type ON content_sources (source_type);

-- ─────────────────────────────────────────
-- 2. scraped_articles: add rejection reason + unverified status
-- ─────────────────────────────────────────
ALTER TABLE scraped_articles
  ADD COLUMN IF NOT EXISTS rejection_reason text;

-- Expand status CHECK to include verification-based rejection
ALTER TABLE scraped_articles
  DROP CONSTRAINT IF EXISTS scraped_articles_scrape_status_check;

ALTER TABLE scraped_articles
  ADD CONSTRAINT scraped_articles_scrape_status_check
  CHECK (scrape_status IN (
    'pending',
    'scraped',
    'simplified',
    'published',
    'rejected',
    'rejected_verification',
    'rejected_quality',
    'rejected_duplicate'
  ));

-- ─────────────────────────────────────────
-- 3. simplified_articles: full Guide payload + verification
-- ─────────────────────────────────────────
ALTER TABLE simplified_articles
  ADD COLUMN IF NOT EXISTS guide_json          jsonb,
  ADD COLUMN IF NOT EXISTS verification_status text
    CHECK (verification_status IN ('verified','partial','rejected')),
  ADD COLUMN IF NOT EXISTS verification_notes  text,
  ADD COLUMN IF NOT EXISTS category            text,
  ADD COLUMN IF NOT EXISTS tags                text[],
  ADD COLUMN IF NOT EXISTS emoji               text,
  ADD COLUMN IF NOT EXISTS excerpt             text,
  ADD COLUMN IF NOT EXISTS attribution         jsonb;

-- Relax difficulty_level so the tuned prompt can return PascalCase
-- (Beginner/Intermediate/Advanced) that matches the public Guide type.
ALTER TABLE simplified_articles
  DROP CONSTRAINT IF EXISTS simplified_articles_difficulty_level_check;

ALTER TABLE simplified_articles
  ADD CONSTRAINT simplified_articles_difficulty_level_check
  CHECK (difficulty_level IN (
    'Beginner','Intermediate','Advanced',
    'beginner','intermediate','advanced'
  ));

CREATE INDEX IF NOT EXISTS idx_simplified_articles_verification  ON simplified_articles (verification_status);
CREATE INDEX IF NOT EXISTS idx_simplified_articles_category_col  ON simplified_articles (category);
CREATE INDEX IF NOT EXISTS idx_simplified_articles_tags          ON simplified_articles USING GIN (tags);
CREATE INDEX IF NOT EXISTS idx_simplified_articles_guide_json    ON simplified_articles USING GIN (guide_json jsonb_path_ops);
