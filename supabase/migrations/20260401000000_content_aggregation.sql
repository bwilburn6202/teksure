-- Content Aggregation System
-- Tables: content_sources, scraped_articles, simplified_articles,
--         content_categories, article_duplicates

-- ─────────────────────────────────────────
-- 1. content_categories (referenced by others, so create first)
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS content_categories (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text NOT NULL UNIQUE,
  slug       text NOT NULL UNIQUE,
  icon       text,
  parent_id  uuid REFERENCES content_categories (id) ON DELETE SET NULL,
  sort_order int  NOT NULL DEFAULT 0
);

-- ─────────────────────────────────────────
-- 2. content_sources
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS content_sources (
  id                      uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name                    text        NOT NULL,
  domain                  text        NOT NULL UNIQUE,
  logo_url                text,
  scrape_enabled          boolean     NOT NULL DEFAULT true,
  scrape_frequency_hours  int         NOT NULL DEFAULT 24,
  last_scraped_at         timestamptz,
  created_at              timestamptz NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────
-- 3. scraped_articles
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS scraped_articles (
  id                    uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id             uuid        NOT NULL REFERENCES content_sources (id) ON DELETE CASCADE,
  original_url          text        NOT NULL UNIQUE,
  original_title        text        NOT NULL,
  original_content      text        NOT NULL,
  original_author       text,
  original_published_at timestamptz,
  category              text,
  tags                  text[],
  scrape_status         text        NOT NULL DEFAULT 'pending'
                          CHECK (scrape_status IN ('pending','scraped','simplified','published','rejected')),
  scraped_at            timestamptz NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────
-- 4. simplified_articles
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS simplified_articles (
  id                    uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  scraped_article_id    uuid        NOT NULL UNIQUE REFERENCES scraped_articles (id) ON DELETE CASCADE,
  simplified_title      text        NOT NULL,
  simplified_content    text        NOT NULL,
  simplified_steps      jsonb,
  difficulty_level      text        NOT NULL DEFAULT 'beginner'
                          CHECK (difficulty_level IN ('beginner','intermediate','advanced')),
  estimated_read_minutes int        NOT NULL DEFAULT 3,
  target_os             text[],
  is_published          boolean     NOT NULL DEFAULT false,
  published_at          timestamptz,
  slug                  text        NOT NULL UNIQUE,
  created_at            timestamptz NOT NULL DEFAULT now(),
  updated_at            timestamptz NOT NULL DEFAULT now()
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_simplified_articles_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_simplified_articles_updated_at
  BEFORE UPDATE ON simplified_articles
  FOR EACH ROW EXECUTE FUNCTION update_simplified_articles_updated_at();

-- ─────────────────────────────────────────
-- 5. article_duplicates
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS article_duplicates (
  id                   uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  primary_article_id   uuid        NOT NULL REFERENCES scraped_articles (id) ON DELETE CASCADE,
  duplicate_article_id uuid        NOT NULL REFERENCES scraped_articles (id) ON DELETE CASCADE,
  similarity_score     float       NOT NULL,
  detected_at          timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT chk_not_self_duplicate CHECK (primary_article_id <> duplicate_article_id),
  CONSTRAINT uq_duplicate_pair UNIQUE (primary_article_id, duplicate_article_id)
);

-- ─────────────────────────────────────────
-- Indexes
-- ─────────────────────────────────────────
-- content_sources
CREATE INDEX IF NOT EXISTS idx_content_sources_domain          ON content_sources (domain);
CREATE INDEX IF NOT EXISTS idx_content_sources_scrape_enabled  ON content_sources (scrape_enabled);

-- scraped_articles
CREATE INDEX IF NOT EXISTS idx_scraped_articles_source_id      ON scraped_articles (source_id);
CREATE INDEX IF NOT EXISTS idx_scraped_articles_scrape_status  ON scraped_articles (scrape_status);
CREATE INDEX IF NOT EXISTS idx_scraped_articles_scraped_at     ON scraped_articles (scraped_at DESC);
CREATE INDEX IF NOT EXISTS idx_scraped_articles_category       ON scraped_articles (category);
CREATE INDEX IF NOT EXISTS idx_scraped_articles_tags           ON scraped_articles USING GIN (tags);

-- simplified_articles
CREATE INDEX IF NOT EXISTS idx_simplified_articles_is_published    ON simplified_articles (is_published);
CREATE INDEX IF NOT EXISTS idx_simplified_articles_published_at    ON simplified_articles (published_at DESC);
CREATE INDEX IF NOT EXISTS idx_simplified_articles_difficulty      ON simplified_articles (difficulty_level);
CREATE INDEX IF NOT EXISTS idx_simplified_articles_target_os       ON simplified_articles USING GIN (target_os);

-- content_categories
CREATE INDEX IF NOT EXISTS idx_content_categories_parent_id   ON content_categories (parent_id);
CREATE INDEX IF NOT EXISTS idx_content_categories_sort_order  ON content_categories (sort_order);

-- article_duplicates
CREATE INDEX IF NOT EXISTS idx_article_duplicates_primary     ON article_duplicates (primary_article_id);
CREATE INDEX IF NOT EXISTS idx_article_duplicates_duplicate   ON article_duplicates (duplicate_article_id);

-- ─────────────────────────────────────────
-- Row Level Security
-- ─────────────────────────────────────────
ALTER TABLE content_sources        ENABLE ROW LEVEL SECURITY;
ALTER TABLE scraped_articles       ENABLE ROW LEVEL SECURITY;
ALTER TABLE simplified_articles    ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_categories     ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_duplicates     ENABLE ROW LEVEL SECURITY;

-- Public can read active content sources
CREATE POLICY "public_read_content_sources"
  ON content_sources FOR SELECT
  TO anon, authenticated
  USING (true);

-- Public can read published simplified articles
CREATE POLICY "public_read_published_simplified_articles"
  ON simplified_articles FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Public can read all content categories
CREATE POLICY "public_read_content_categories"
  ON content_categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- Authenticated users (admin) can read scraped articles and duplicates
CREATE POLICY "authenticated_read_scraped_articles"
  ON scraped_articles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "authenticated_read_article_duplicates"
  ON article_duplicates FOR SELECT
  TO authenticated
  USING (true);

-- Service role has full access (for scraper / edge functions)
CREATE POLICY "service_role_all_content_sources"
  ON content_sources FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

CREATE POLICY "service_role_all_scraped_articles"
  ON scraped_articles FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

CREATE POLICY "service_role_all_simplified_articles"
  ON simplified_articles FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

CREATE POLICY "service_role_all_content_categories"
  ON content_categories FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

CREATE POLICY "service_role_all_article_duplicates"
  ON article_duplicates FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

-- ─────────────────────────────────────────
-- Seed: trusted content sources
-- ─────────────────────────────────────────
INSERT INTO content_sources (name, domain, scrape_frequency_hours) VALUES
  ('How-To Geek',        'howtogeek.com',       24),
  ('Microsoft Support',  'support.microsoft.com', 48),
  ('Apple Support',      'support.apple.com',    48),
  ('Google Support',     'support.google.com',   48),
  ('AARP Technology',    'aarp.org',             72),
  ('FTC Consumer Info',  'consumer.ftc.gov',     72)
ON CONFLICT (domain) DO NOTHING;

-- Seed: top-level categories
INSERT INTO content_categories (name, slug, icon, sort_order) VALUES
  ('Internet & Wi-Fi',    'internet-wifi',    '📶', 1),
  ('Email & Messaging',   'email-messaging',  '✉️',  2),
  ('Security & Privacy',  'security-privacy', '🔒', 3),
  ('Devices & Setup',     'devices-setup',    '💻', 4),
  ('Apps & Software',     'apps-software',    '📱', 5),
  ('Photos & Videos',     'photos-videos',    '🖼️',  6),
  ('Scams & Fraud',       'scams-fraud',      '⚠️',  7),
  ('General Tips',        'general-tips',     '💡', 8)
ON CONFLICT (slug) DO NOTHING;
