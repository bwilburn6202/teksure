-- Knowledge-Base Expansion: 125 Sources → 1,250 New Guides
--
-- Adds support for community content (Reddit, YouTube, Stack Exchange) to the
-- existing scrape → categorize → simplify → publish pipeline, and wires in
-- LLM verification + brand-voice enforcement for the simplified output.
--
-- Changes:
--   1. content_sources.source_type    — distinguishes RSS/HTML/Reddit/YT/SE
--   2. content_sources.fetch_config   — per-source config (subreddit, channel ID, min score, …)
--   3. content_sources.tier           — 1–13 (for rollout-wave sequencing and reporting)
--   4. content_sources.rollout_wave   — 1–4 legal-risk-ordered wave
--   5. simplified_articles: verified / verified_against_source_id / verification_notes
--                           / banned_words_flagged / source_url / source_name
--   6. simplified_articles.difficulty_level — accept PascalCase (matches the Guide type)
--   7. Seed: 125 sources (100 authoritative + 25 community)

BEGIN;

-- ─────────────────────────────────────────────────────────────────────────────
-- 1. content_sources — add source_type, fetch_config, tier, rollout_wave
-- ─────────────────────────────────────────────────────────────────────────────

ALTER TABLE content_sources
  ADD COLUMN IF NOT EXISTS source_type  text NOT NULL DEFAULT 'rss',
  ADD COLUMN IF NOT EXISTS fetch_config jsonb NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS tier         int,
  ADD COLUMN IF NOT EXISTS rollout_wave int;

-- Replace the old feed_type CHECK with a superset that covers community types.
-- We do it on source_type (feed_type stays for backwards-compat with existing rows).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'content_sources_source_type_check'
  ) THEN
    ALTER TABLE content_sources
      ADD CONSTRAINT content_sources_source_type_check
      CHECK (source_type IN ('rss', 'atom', 'html', 'reddit', 'youtube', 'stackexchange'));
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_content_sources_source_type  ON content_sources (source_type);
CREATE INDEX IF NOT EXISTS idx_content_sources_tier         ON content_sources (tier);
CREATE INDEX IF NOT EXISTS idx_content_sources_rollout_wave ON content_sources (rollout_wave);

-- ─────────────────────────────────────────────────────────────────────────────
-- 2. simplified_articles — verification + provenance columns
-- ─────────────────────────────────────────────────────────────────────────────

ALTER TABLE simplified_articles
  ADD COLUMN IF NOT EXISTS verified                   boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS verified_against_source_id uuid REFERENCES content_sources (id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS verification_notes         text,
  ADD COLUMN IF NOT EXISTS banned_words_flagged       text[] NOT NULL DEFAULT ARRAY[]::text[],
  ADD COLUMN IF NOT EXISTS source_url                 text,
  ADD COLUMN IF NOT EXISTS source_name                text;

CREATE INDEX IF NOT EXISTS idx_simplified_articles_verified             ON simplified_articles (verified);
CREATE INDEX IF NOT EXISTS idx_simplified_articles_banned_words_flagged ON simplified_articles USING GIN (banned_words_flagged);

-- ─────────────────────────────────────────────────────────────────────────────
-- 3. Difficulty CHECK: accept both legacy lowercase and the PascalCase used by
--    the live Guide type. publish-to-batch relies on reading PascalCase values
--    without a runtime conversion.
-- ─────────────────────────────────────────────────────────────────────────────

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'simplified_articles_difficulty_level_check'
  ) THEN
    ALTER TABLE simplified_articles
      DROP CONSTRAINT simplified_articles_difficulty_level_check;
  END IF;

  ALTER TABLE simplified_articles
    ADD CONSTRAINT simplified_articles_difficulty_level_check
    CHECK (difficulty_level IN (
      'beginner', 'intermediate', 'advanced',
      'Beginner', 'Intermediate', 'Advanced'
    ));
END $$;

-- ─────────────────────────────────────────────────────────────────────────────
-- 4. Seed: 125 sources (Tiers 1–13)
--    feed_url is set where an RSS/Atom feed exists; fetch_config carries the
--    per-source lookup key (subreddit, YouTube channel_id, StackExchange site).
--
--    Safe to re-run: ON CONFLICT (domain) DO UPDATE only refreshes the new
--    metadata columns and leaves timestamps / stats untouched.
-- ─────────────────────────────────────────────────────────────────────────────

-- helper macro expressed as a VALUES list: (name, domain, source_type, feed_url, tier, wave, config_json)
WITH seed(name, domain, source_type, feed_url, tier, rollout_wave, fetch_config) AS (
  VALUES
  -- ── Tier 1: Platform (10) ────────────────────────────────────────────────
  ('Apple Support',              'support.apple.com',              'rss',   'https://developer.apple.com/news/rss/news.rss',        1, 1, '{}'::jsonb),
  ('Microsoft Support',          'support.microsoft.com',          'rss',   'https://techcommunity.microsoft.com/gxcuf89792/rss/board?board.id=Windows11Blog', 1, 1, '{}'::jsonb),
  ('Google Support',             'support.google.com',             'rss',   'https://blog.google/rss/',                             1, 1, '{}'::jsonb),
  ('Samsung Support',            'samsung.com',                    'html',  NULL,                                                   1, 1, '{"scrape_paths":["/us/support/"]}'::jsonb),
  ('Amazon Help',                'amazon.com',                     'html',  NULL,                                                   1, 1, '{"scrape_paths":["/gp/help/customer/display.html"]}'::jsonb),
  ('Meta Help Center',           'facebook.com',                   'html',  NULL,                                                   1, 1, '{"scrape_paths":["/help/"]}'::jsonb),
  ('WhatsApp FAQ',               'faq.whatsapp.com',               'html',  NULL,                                                   1, 1, '{}'::jsonb),
  ('Netflix Help Center',        'help.netflix.com',               'html',  NULL,                                                   1, 1, '{}'::jsonb),
  ('Spotify Support',            'support.spotify.com',            'html',  NULL,                                                   1, 1, '{}'::jsonb),
  ('Zoom Support',               'support.zoom.us',                'html',  NULL,                                                   1, 1, '{}'::jsonb),

  -- ── Tier 2: Seniors (10) ─────────────────────────────────────────────────
  ('AARP Technology',            'aarp.org',                       'rss',   'https://www.aarp.org/content/dam/aarp/rss/technology.xml', 2, 2, '{}'::jsonb),
  ('Senior Planet',              'seniorplanet.org',               'rss',   'https://seniorplanet.org/feed/',                        2, 2, '{}'::jsonb),
  ('TechBoomers',                'techboomers.com',                'html',  NULL,                                                    2, 2, '{}'::jsonb),
  ('GreatCall (Lively)',         'lively.com',                     'html',  NULL,                                                    2, 2, '{}'::jsonb),
  ('GetSetUp',                   'getsetup.io',                    'html',  NULL,                                                    2, 2, '{}'::jsonb),
  ('Cyber-Seniors',              'cyberseniors.org',               'html',  NULL,                                                    2, 2, '{}'::jsonb),
  ('SeniorNet',                  'seniornet.org',                  'html',  NULL,                                                    2, 2, '{}'::jsonb),
  ('Little Tech Girl (AARP)',    'littletechgirl.com',             'html',  NULL,                                                    2, 2, '{}'::jsonb),
  ('Elder Tech Help',            'theseniorslist.com',             'html',  NULL,                                                    2, 2, '{}'::jsonb),
  ('Connected Living',           'connectedliving.com',            'html',  NULL,                                                    2, 2, '{}'::jsonb),

  -- ── Tier 3: Government (10) ──────────────────────────────────────────────
  ('FTC Consumer Info',          'consumer.ftc.gov',               'rss',   'https://consumer.ftc.gov/consumer-alerts/rss',          3, 1, '{}'::jsonb),
  ('CISA Alerts',                'cisa.gov',                       'rss',   'https://www.cisa.gov/news-events/alerts.xml',           3, 1, '{}'::jsonb),
  ('IC3 (FBI)',                  'ic3.gov',                        'html',  NULL,                                                    3, 1, '{}'::jsonb),
  ('Medicare.gov',               'medicare.gov',                   'html',  NULL,                                                    3, 1, '{}'::jsonb),
  ('Social Security Admin',      'ssa.gov',                        'rss',   'https://blog.ssa.gov/feed/',                            3, 1, '{}'::jsonb),
  ('IRS News',                   'irs.gov',                        'rss',   'https://www.irs.gov/newsroom/feed',                     3, 1, '{}'::jsonb),
  ('USA.gov',                    'usa.gov',                        'html',  NULL,                                                    3, 1, '{}'::jsonb),
  ('VA (Veterans Affairs)',      'va.gov',                         'html',  NULL,                                                    3, 1, '{}'::jsonb),
  ('Ready.gov',                  'ready.gov',                      'html',  NULL,                                                    3, 1, '{}'::jsonb),
  ('OnGuardOnline',              'onguardonline.gov',              'html',  NULL,                                                    3, 1, '{}'::jsonb),

  -- ── Tier 4: Tech Media (reference-only — full rewrite required) (10) ─────
  ('How-To Geek',                'howtogeek.com',                  'rss',   'https://www.howtogeek.com/feed/',                       4, 4, '{"reference_only":true}'::jsonb),
  ('Lifewire',                   'lifewire.com',                   'rss',   'https://www.lifewire.com/rss.xml',                      4, 4, '{"reference_only":true}'::jsonb),
  ('Tom''s Guide',               'tomsguide.com',                  'rss',   'https://www.tomsguide.com/feeds/all',                   4, 4, '{"reference_only":true}'::jsonb),
  ('MakeUseOf',                  'makeuseof.com',                  'rss',   'https://www.makeuseof.com/feed/',                       4, 4, '{"reference_only":true}'::jsonb),
  ('Digital Trends',             'digitaltrends.com',              'rss',   'https://www.digitaltrends.com/feed/',                   4, 4, '{"reference_only":true}'::jsonb),
  ('GCFGlobal',                  'gcfglobal.org',                  'html',  NULL,                                                    4, 4, '{"reference_only":true}'::jsonb),
  ('The Verge (how-to)',         'theverge.com',                   'rss',   'https://www.theverge.com/rss/index.xml',                4, 4, '{"reference_only":true}'::jsonb),
  ('Engadget',                   'engadget.com',                   'rss',   'https://www.engadget.com/rss.xml',                      4, 4, '{"reference_only":true}'::jsonb),
  ('CNET How-To',                'cnet.com',                       'rss',   'https://www.cnet.com/rss/all/',                         4, 4, '{"reference_only":true}'::jsonb),
  ('PCMag How-To',               'pcmag.com',                      'rss',   'https://www.pcmag.com/feeds/rss/latest',                4, 4, '{"reference_only":true}'::jsonb),

  -- ── Tier 5: Privacy & Security (10) ──────────────────────────────────────
  ('EFF Deeplinks',              'eff.org',                        'rss',   'https://www.eff.org/rss/updates.xml',                   5, 2, '{}'::jsonb),
  ('Krebs on Security',          'krebsonsecurity.com',            'rss',   'https://krebsonsecurity.com/feed/',                     5, 2, '{}'::jsonb),
  ('NIST Cybersecurity',         'nist.gov',                       'html',  NULL,                                                    5, 2, '{}'::jsonb),
  ('StaySafeOnline (NCA)',       'staysafeonline.org',             'html',  NULL,                                                    5, 2, '{}'::jsonb),
  ('Have I Been Pwned',          'haveibeenpwned.com',             'html',  NULL,                                                    5, 2, '{}'::jsonb),
  ('Privacy Rights Clearinghouse','privacyrights.org',             'html',  NULL,                                                    5, 2, '{}'::jsonb),
  ('Malwarebytes Labs',          'malwarebytes.com',               'rss',   'https://blog.malwarebytes.com/feed/',                   5, 2, '{}'::jsonb),
  ('Bleeping Computer',          'bleepingcomputer.com',           'rss',   'https://www.bleepingcomputer.com/feed/',                5, 2, '{}'::jsonb),
  ('CISA StopRansomware',        'stopransomware.gov',             'html',  NULL,                                                    5, 2, '{}'::jsonb),
  ('FTC IdentityTheft.gov',      'identitytheft.gov',              'html',  NULL,                                                    5, 2, '{}'::jsonb),

  -- ── Tier 6: Health Tech (10) ─────────────────────────────────────────────
  ('MyChart (Epic)',             'mychart.com',                    'html',  NULL,                                                    6, 2, '{}'::jsonb),
  ('NIH MedlinePlus',            'medlineplus.gov',                'rss',   'https://medlineplus.gov/feeds/whatsnew_en.xml',         6, 2, '{}'::jsonb),
  ('CDC Health Topics',          'cdc.gov',                        'rss',   'https://tools.cdc.gov/podcasts/feed.asp?feedid=183',    6, 2, '{}'::jsonb),
  ('Apple Health (Support)',     'support.apple.com/health',       'html',  NULL,                                                    6, 2, '{}'::jsonb),
  ('Fitbit Help',                'help.fitbit.com',                'html',  NULL,                                                    6, 2, '{}'::jsonb),
  ('MyFitnessPal Support',       'support.myfitnesspal.com',       'html',  NULL,                                                    6, 2, '{}'::jsonb),
  ('GoodRx',                     'goodrx.com',                     'html',  NULL,                                                    6, 2, '{}'::jsonb),
  ('Teladoc Help',               'teladoc.com',                    'html',  NULL,                                                    6, 2, '{}'::jsonb),
  ('AHRQ Digital Health',        'ahrq.gov',                       'html',  NULL,                                                    6, 2, '{}'::jsonb),
  ('Senior Health (NIH)',        'nia.nih.gov',                    'rss',   'https://www.nia.nih.gov/news/feed',                     6, 2, '{}'::jsonb),

  -- ── Tier 7: Money & Banking (10) ─────────────────────────────────────────
  ('CFPB Consumer',              'consumerfinance.gov',            'rss',   'https://www.consumerfinance.gov/about-us/blog/feed/',   7, 3, '{}'::jsonb),
  ('IRS Taxpayer Advocate',      'taxpayeradvocate.irs.gov',       'html',  NULL,                                                    7, 3, '{}'::jsonb),
  ('SSA Benefits',               'ssa.gov/benefits',               'html',  NULL,                                                    7, 3, '{}'::jsonb),
  ('Zelle Support',              'zellepay.com',                   'html',  NULL,                                                    7, 3, '{}'::jsonb),
  ('Venmo Help',                 'help.venmo.com',                 'html',  NULL,                                                    7, 3, '{}'::jsonb),
  ('PayPal Help',                'paypal.com',                     'html',  NULL,                                                    7, 3, '{}'::jsonb),
  ('Chase Help',                 'chase.com',                      'html',  NULL,                                                    7, 3, '{}'::jsonb),
  ('Bank of America Help',       'bankofamerica.com',              'html',  NULL,                                                    7, 3, '{}'::jsonb),
  ('Credit Karma Help',          'creditkarma.com',                'html',  NULL,                                                    7, 3, '{}'::jsonb),
  ('AnnualCreditReport',         'annualcreditreport.com',         'html',  NULL,                                                    7, 3, '{}'::jsonb),

  -- ── Tier 8: Smart Home (10) ──────────────────────────────────────────────
  ('Amazon Alexa Help',          'alexa.amazon.com',               'html',  NULL,                                                    8, 3, '{}'::jsonb),
  ('Google Nest Help',           'nest.com',                       'html',  NULL,                                                    8, 3, '{}'::jsonb),
  ('Ring Support',               'ring.com',                       'html',  NULL,                                                    8, 3, '{}'::jsonb),
  ('Roku Support',               'support.roku.com',               'html',  NULL,                                                    8, 3, '{}'::jsonb),
  ('Amazon Fire TV',             'amazon.com/firetv',              'html',  NULL,                                                    8, 3, '{}'::jsonb),
  ('Apple TV Support',           'support.apple.com/apple-tv',     'html',  NULL,                                                    8, 3, '{}'::jsonb),
  ('Philips Hue Support',        'philips-hue.com',                'html',  NULL,                                                    8, 3, '{}'::jsonb),
  ('Ecobee Support',             'ecobee.com',                     'html',  NULL,                                                    8, 3, '{}'::jsonb),
  ('Chromecast Help',            'support.google.com/chromecast',  'html',  NULL,                                                    8, 3, '{}'::jsonb),
  ('SmartThings Support',        'smartthings.com',                'html',  NULL,                                                    8, 3, '{}'::jsonb),

  -- ── Tier 9: Communication (10) ───────────────────────────────────────────
  ('Zoom Help',                  'support.zoom.com',               'html',  NULL,                                                    9, 3, '{}'::jsonb),
  ('FaceTime (Apple)',           'support.apple.com/facetime',     'html',  NULL,                                                    9, 3, '{}'::jsonb),
  ('Google Meet Help',           'support.google.com/meet',        'html',  NULL,                                                    9, 3, '{}'::jsonb),
  ('Microsoft Teams',            'support.microsoft.com/teams',    'html',  NULL,                                                    9, 3, '{}'::jsonb),
  ('Signal Support',             'support.signal.org',             'html',  NULL,                                                    9, 3, '{}'::jsonb),
  ('Messenger Help',             'facebook.com/help/messenger',    'html',  NULL,                                                    9, 3, '{}'::jsonb),
  ('iMessage (Apple)',           'support.apple.com/imessage',     'html',  NULL,                                                    9, 3, '{}'::jsonb),
  ('Telegram FAQ',               'telegram.org',                   'html',  NULL,                                                    9, 3, '{}'::jsonb),
  ('Duo (Google)',                'support.google.com/duo',        'html',  NULL,                                                    9, 3, '{}'::jsonb),
  ('Skype Support',              'support.skype.com',              'html',  NULL,                                                    9, 3, '{}'::jsonb),

  -- ── Tier 10: Connectivity & Accessibility (10) ───────────────────────────
  ('Verizon Support',            'verizon.com',                    'html',  NULL,                                                   10, 4, '{}'::jsonb),
  ('AT&T Support',               'att.com',                        'html',  NULL,                                                   10, 4, '{}'::jsonb),
  ('T-Mobile Support',           't-mobile.com',                   'html',  NULL,                                                   10, 4, '{}'::jsonb),
  ('Xfinity Support',            'xfinity.com',                    'html',  NULL,                                                   10, 4, '{}'::jsonb),
  ('Spectrum Support',           'spectrum.net',                   'html',  NULL,                                                   10, 4, '{}'::jsonb),
  ('Apple Accessibility',        'apple.com/accessibility',        'html',  NULL,                                                   10, 4, '{}'::jsonb),
  ('Android Accessibility',      'support.google.com/accessibility','html', NULL,                                                   10, 4, '{}'::jsonb),
  ('Microsoft Accessibility',    'microsoft.com/accessibility',    'html',  NULL,                                                   10, 4, '{}'::jsonb),
  ('FCC Consumer',               'fcc.gov',                        'rss',   'https://www.fcc.gov/news-events/rss.xml',              10, 4, '{}'::jsonb),
  ('Lifeline (USAC)',            'lifelinesupport.org',            'html',  NULL,                                                   10, 4, '{}'::jsonb),

  -- ── Tier 11: Reddit (10 subs — require verification) ─────────────────────
  ('r/techsupport',              'reddit.com/r/techsupport',       'reddit', NULL,                                                  11, 4, '{"subreddit":"techsupport","min_score":50,"time_range":"month","limit":25}'::jsonb),
  ('r/AskTechnology',            'reddit.com/r/AskTechnology',     'reddit', NULL,                                                  11, 4, '{"subreddit":"AskTechnology","min_score":25,"time_range":"month","limit":25}'::jsonb),
  ('r/applehelp',                'reddit.com/r/applehelp',         'reddit', NULL,                                                  11, 4, '{"subreddit":"applehelp","min_score":25,"time_range":"month","limit":25}'::jsonb),
  ('r/iphonehelp',               'reddit.com/r/iphonehelp',        'reddit', NULL,                                                  11, 4, '{"subreddit":"iphonehelp","min_score":25,"time_range":"month","limit":25}'::jsonb),
  ('r/androidquestions',         'reddit.com/r/androidquestions',  'reddit', NULL,                                                  11, 4, '{"subreddit":"androidquestions","min_score":25,"time_range":"month","limit":25}'::jsonb),
  ('r/seniors',                  'reddit.com/r/seniors',           'reddit', NULL,                                                  11, 4, '{"subreddit":"seniors","min_score":25,"time_range":"month","limit":25}'::jsonb),
  ('r/Scams',                    'reddit.com/r/Scams',             'reddit', NULL,                                                  11, 4, '{"subreddit":"Scams","min_score":50,"time_range":"month","limit":25}'::jsonb),
  ('r/personalfinance',          'reddit.com/r/personalfinance',   'reddit', NULL,                                                  11, 4, '{"subreddit":"personalfinance","min_score":100,"time_range":"month","limit":25}'::jsonb),
  ('r/homeautomation',           'reddit.com/r/homeautomation',    'reddit', NULL,                                                  11, 4, '{"subreddit":"homeautomation","min_score":25,"time_range":"month","limit":25}'::jsonb),
  ('r/accessibility',            'reddit.com/r/accessibility',     'reddit', NULL,                                                  11, 4, '{"subreddit":"accessibility","min_score":15,"time_range":"month","limit":25}'::jsonb),

  -- ── Tier 12: Stack Exchange (5 sites — require verification) ─────────────
  ('Super User',                 'superuser.com',                  'stackexchange', NULL,                                           12, 4, '{"site":"superuser","min_score":10,"limit":25}'::jsonb),
  ('Ask Different',              'apple.stackexchange.com',        'stackexchange', NULL,                                           12, 4, '{"site":"apple","min_score":10,"limit":25}'::jsonb),
  ('Android Enthusiasts',        'android.stackexchange.com',      'stackexchange', NULL,                                           12, 4, '{"site":"android","min_score":10,"limit":25}'::jsonb),
  ('Web Apps SE',                'webapps.stackexchange.com',      'stackexchange', NULL,                                           12, 4, '{"site":"webapps","min_score":10,"limit":25}'::jsonb),
  ('Information Security SE',    'security.stackexchange.com',     'stackexchange', NULL,                                           12, 4, '{"site":"security","min_score":20,"limit":25}'::jsonb),

  -- ── Tier 13: YouTube (10 channels — require verification) ────────────────
  ('YouTube — Apple Support',    'youtube.com/@AppleSupport',      'youtube', NULL,                                                 13, 4, '{"channel_id":"UCVxauFUpwZftMsH8sMeDJ1A","max_age_months":12,"limit":10}'::jsonb),
  ('YouTube — Android (Google)', 'youtube.com/@Android',           'youtube', NULL,                                                 13, 4, '{"channel_id":"UCVHFbqXqoYvEWM1Ddxl0QDg","max_age_months":12,"limit":10}'::jsonb),
  ('YouTube — Microsoft',        'youtube.com/@Microsoft',         'youtube', NULL,                                                 13, 4, '{"channel_id":"UCRm96I5WkkJRFEvXW4E2RDw","max_age_months":12,"limit":10}'::jsonb),
  ('YouTube — Samsung Care US',  'youtube.com/@SamsungCareUS',     'youtube', NULL,                                                 13, 4, '{"channel_id":"UCG2Jx4xMLumJy-2Yzjap_Og","max_age_months":12,"limit":10}'::jsonb),
  ('YouTube — AARP',             'youtube.com/@aarp',              'youtube', NULL,                                                 13, 4, '{"channel_id":"UCeiYXex_fwgYDonaTcSIk6w","max_age_months":12,"limit":10}'::jsonb),
  ('YouTube — Senior Planet',    'youtube.com/@SeniorPlanetOATS',  'youtube', NULL,                                                 13, 4, '{"channel_id":"UC7X-wJz0qQomj6S_qdyj48w","max_age_months":12,"limit":10}'::jsonb),
  ('YouTube — How-To Geek',      'youtube.com/@HowToGeek',         'youtube', NULL,                                                 13, 4, '{"channel_id":"UCK-ejTdE-EUOQhyA-Evg2TA","max_age_months":12,"limit":10}'::jsonb),
  ('YouTube — TechBoomers',      'youtube.com/@techboomers',       'youtube', NULL,                                                 13, 4, '{"channel_id":"UClyKk0Bqr2rYmc5OoT5gGbA","max_age_months":12,"limit":10}'::jsonb),
  ('YouTube — Ask Leo!',         'youtube.com/@askleonotenboom',   'youtube', NULL,                                                 13, 4, '{"channel_id":"UCbyomumVeF5i5_Su8qYb9AA","max_age_months":12,"limit":10}'::jsonb),
  ('YouTube — Cyber-Seniors',    'youtube.com/@cyberseniorsorg',   'youtube', NULL,                                                 13, 4, '{"channel_id":"UCgG6Q57UO-WoQmkB7Jsj_fA","max_age_months":12,"limit":10}'::jsonb)
)
INSERT INTO content_sources (name, domain, source_type, feed_url, tier, rollout_wave, fetch_config, scrape_frequency_hours, scrape_enabled)
SELECT name, domain, source_type, feed_url, tier, rollout_wave, fetch_config, 72, false
FROM seed
ON CONFLICT (domain) DO UPDATE
SET source_type   = EXCLUDED.source_type,
    tier          = EXCLUDED.tier,
    rollout_wave  = EXCLUDED.rollout_wave,
    fetch_config  = EXCLUDED.fetch_config,
    feed_url      = COALESCE(EXCLUDED.feed_url, content_sources.feed_url);

COMMIT;
