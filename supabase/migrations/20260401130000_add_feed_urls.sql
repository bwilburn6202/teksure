-- Add feed_url and feed_type to content_sources so the scraper knows where to pull
ALTER TABLE content_sources
  ADD COLUMN IF NOT EXISTS feed_url  text,
  ADD COLUMN IF NOT EXISTS feed_type text NOT NULL DEFAULT 'rss'
    CHECK (feed_type IN ('rss', 'atom'));

-- Update existing seeded sources with their RSS feed URLs
UPDATE content_sources SET feed_url = 'https://www.howtogeek.com/feed/'
  WHERE domain = 'howtogeek.com';

UPDATE content_sources SET feed_url = 'https://techcommunity.microsoft.com/gxcuf89792/rss/board?board.id=Windows11Blog'
  WHERE domain = 'support.microsoft.com';

UPDATE content_sources SET feed_url = 'https://www.apple.com/newsroom/rss-feed.xml'
  WHERE domain = 'support.apple.com';

UPDATE content_sources SET feed_url = 'https://blog.google/rss/'
  WHERE domain = 'support.google.com';

UPDATE content_sources SET feed_url = 'https://www.aarp.org/content/dam/aarp/rss/technology.xml'
  WHERE domain = 'aarp.org';

UPDATE content_sources SET feed_url = 'https://consumer.ftc.gov/consumer-alerts/rss'
  WHERE domain = 'consumer.ftc.gov';

-- Insert sources requested by the user that weren't in the original seed
INSERT INTO content_sources (name, domain, feed_url, feed_type, scrape_frequency_hours) VALUES
  ('Tom''s Guide',   'tomsguide.com',    'https://www.tomsguide.com/feeds/all',  'rss', 24),
  ('MakeUseOf',      'makeuseof.com',    'https://www.makeuseof.com/feed/',       'rss', 24),
  ('Digital Trends', 'digitaltrends.com','https://www.digitaltrends.com/feed/',   'rss', 24),
  ('Lifewire',       'lifewire.com',     'https://www.lifewire.com/rss.xml',      'rss', 24)
ON CONFLICT (domain) DO NOTHING;
