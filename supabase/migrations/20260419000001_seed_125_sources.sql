-- Seed 125 content sources across 13 tiers
--
-- Trust tiers drive the simplify-article prompt:
--   authoritative → treat as fact (official/.gov/.edu)
--   editorial     → reference only, full rewrite required
--   community     → fact-check every claim against authoritative sources;
--                   reject if unverifiable
--
-- Source types drive scraper selection:
--   rss           → existing scrape-articles feed parser
--   web           → direct page fetch (no feed)
--   reddit        → RSS works with scrape-articles today
--   stackexchange → disabled until SE-specific extractor lands
--   youtube       → disabled until transcript fetcher lands
--
-- Existing rows (6 from original seed + 4 from add_feed_urls) are updated in
-- place via ON CONFLICT (domain) DO UPDATE. New rows are inserted.

-- ─── Helper: all-in-one upsert ─────────────────────────────────────────────
-- We insert every row, then ON CONFLICT update trust_tier / source_type /
-- tier_label / scrape_enabled / feed_url so existing rows get backfilled.

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 1 — Official platform support (AUTHORITATIVE, 10 sources)
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('Apple Support',      'support.apple.com',      'https://www.apple.com/newsroom/rss-feed.xml',               'rss', 'authoritative', 'rss',    'tier-1-official',         true,  48),
  ('Microsoft Support',  'support.microsoft.com',  'https://support.microsoft.com/en-us/rss/feed',              'rss', 'authoritative', 'rss',    'tier-1-official',         true,  48),
  ('Google Support',     'support.google.com',     'https://blog.google/rss/',                                  'rss', 'authoritative', 'rss',    'tier-1-official',         true,  48),
  ('Samsung Support',    'samsung.com',            'https://www.samsung.com/us/support/rss/',                   'rss', 'authoritative', 'rss',    'tier-1-official',         true,  72),
  ('Amazon Help',        'amazon.com',             NULL,                                                        'rss', 'authoritative', 'web',    'tier-1-official',         false, 72),
  ('Meta Help (Facebook)','facebook.com',          NULL,                                                        'rss', 'authoritative', 'web',    'tier-1-official',         false, 72),
  ('Instagram Help',     'help.instagram.com',     NULL,                                                        'rss', 'authoritative', 'web',    'tier-1-official',         false, 72),
  ('Zoom Support',       'support.zoom.com',       'https://blog.zoom.us/feed/',                                'rss', 'authoritative', 'rss',    'tier-1-official',         true,  72),
  ('Roku Support',       'support.roku.com',       NULL,                                                        'rss', 'authoritative', 'web',    'tier-1-official',         false, 72),
  ('Chromebook Help',    'support.google.com-chromebook','https://chromereleases.googleblog.com/feeds/posts/default','atom','authoritative','rss', 'tier-1-official',         true,  72)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier,
  source_type = EXCLUDED.source_type,
  tier_label = EXCLUDED.tier_label,
  feed_url = COALESCE(content_sources.feed_url, EXCLUDED.feed_url);

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 2 — Senior-focused educators (EDITORIAL, 10 sources)
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('AARP Technology',       'aarp.org',                   'https://www.aarp.org/content/dam/aarp/rss/technology.xml', 'rss', 'editorial', 'rss', 'tier-2-seniors', true, 72),
  ('Senior Planet',         'seniorplanet.org',           'https://seniorplanet.org/feed/',                           'rss', 'editorial', 'rss', 'tier-2-seniors', true, 72),
  ('GCFGlobal',             'edu.gcfglobal.org',          NULL,                                                        'rss', 'editorial', 'web', 'tier-2-seniors', false, 168),
  ('TechBoomers',           'techboomers.com',            'https://techboomers.com/feed',                              'rss', 'editorial', 'rss', 'tier-2-seniors', true, 168),
  ('Cyber-Seniors',         'cyberseniors.org',           'https://cyberseniors.org/feed/',                            'rss', 'editorial', 'rss', 'tier-2-seniors', true, 168),
  ('OATS (Older Adults Tech Services)','oats.org',        NULL,                                                        'rss', 'editorial', 'web', 'tier-2-seniors', false, 168),
  ('Generations on Line',   'generationsonline.org',      NULL,                                                        'rss', 'editorial', 'web', 'tier-2-seniors', false, 168),
  ('DigitalLearn',          'digitallearn.org',           NULL,                                                        'rss', 'editorial', 'web', 'tier-2-seniors', false, 168),
  ('National Institute on Aging','nia.nih.gov',           'https://www.nia.nih.gov/news/feed',                         'rss', 'authoritative','rss','tier-2-seniors', true,  72),
  ('Goodwill Community Foundation','gcflearnfree.org',    NULL,                                                        'rss', 'editorial', 'web', 'tier-2-seniors', false, 168)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier, source_type = EXCLUDED.source_type, tier_label = EXCLUDED.tier_label, feed_url = COALESCE(content_sources.feed_url, EXCLUDED.feed_url);

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 3 — Government & consumer safety (AUTHORITATIVE, 10 sources)
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('FTC Consumer Alerts',  'consumer.ftc.gov',    'https://consumer.ftc.gov/consumer-alerts/rss',              'rss', 'authoritative', 'rss', 'tier-3-government', true, 48),
  ('FCC Consumer Help',    'fcc.gov',             'https://www.fcc.gov/news-events/headlines.xml',             'rss', 'authoritative', 'rss', 'tier-3-government', true, 72),
  ('CISA Alerts',          'cisa.gov',            'https://www.cisa.gov/news-events/cybersecurity-advisories/all.xml','rss','authoritative','rss','tier-3-government',true, 24),
  ('IC3 (FBI)',            'ic3.gov',             NULL,                                                        'rss', 'authoritative', 'web', 'tier-3-government', false, 72),
  ('USA.gov',              'usa.gov',             'https://www.usa.gov/explore/rss/all.xml',                   'rss', 'authoritative', 'rss', 'tier-3-government', true, 168),
  ('Social Security Admin','ssa.gov',             'https://blog.ssa.gov/feed/',                                'rss', 'authoritative', 'rss', 'tier-3-government', true, 168),
  ('Medicare.gov',         'medicare.gov',        'https://www.medicare.gov/blog/feed',                        'rss', 'authoritative', 'rss', 'tier-3-government', true, 168),
  ('IRS Identity Theft',   'irs.gov',             'https://www.irs.gov/newsroom/news-releases-for-current-month/feed','rss','authoritative','rss','tier-3-government',true, 168),
  ('StopBullying.gov',     'stopbullying.gov',    NULL,                                                        'rss', 'authoritative', 'web', 'tier-3-government', false, 168),
  ('NIST Cybersecurity',   'nist.gov',            'https://www.nist.gov/news-events/cybersecurity/rss.xml',    'rss', 'authoritative', 'rss', 'tier-3-government', true, 72)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier, source_type = EXCLUDED.source_type, tier_label = EXCLUDED.tier_label, feed_url = COALESCE(content_sources.feed_url, EXCLUDED.feed_url);

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 4 — Mainstream tech how-to (EDITORIAL — reference only, 10 sources)
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('How-To Geek',     'howtogeek.com',     'https://www.howtogeek.com/feed/',           'rss', 'editorial', 'rss', 'tier-4-tech-media', true, 24),
  ('Tom''s Guide',    'tomsguide.com',     'https://www.tomsguide.com/feeds/all',       'rss', 'editorial', 'rss', 'tier-4-tech-media', true, 24),
  ('CNET How-To',     'cnet.com',          'https://www.cnet.com/rss/how-to/',          'rss', 'editorial', 'rss', 'tier-4-tech-media', true, 24),
  ('PCMag How-To',    'pcmag.com',         'https://www.pcmag.com/feeds/rss/how-to',    'rss', 'editorial', 'rss', 'tier-4-tech-media', true, 24),
  ('Lifehacker',      'lifehacker.com',    'https://lifehacker.com/rss',                'rss', 'editorial', 'rss', 'tier-4-tech-media', true, 24),
  ('Digital Trends',  'digitaltrends.com', 'https://www.digitaltrends.com/feed/',       'rss', 'editorial', 'rss', 'tier-4-tech-media', true, 24),
  ('MakeUseOf',       'makeuseof.com',     'https://www.makeuseof.com/feed/',           'rss', 'editorial', 'rss', 'tier-4-tech-media', true, 24),
  ('The Verge',       'theverge.com',      'https://www.theverge.com/rss/index.xml',    'rss', 'editorial', 'rss', 'tier-4-tech-media', true, 24),
  ('Wired',           'wired.com',         'https://www.wired.com/feed/rss',            'rss', 'editorial', 'rss', 'tier-4-tech-media', true, 24),
  ('Engadget',        'engadget.com',      'https://www.engadget.com/rss.xml',          'rss', 'editorial', 'rss', 'tier-4-tech-media', true, 24)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier, source_type = EXCLUDED.source_type, tier_label = EXCLUDED.tier_label, feed_url = COALESCE(content_sources.feed_url, EXCLUDED.feed_url);

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 5 — Privacy & security (mixed AUTHORITATIVE/EDITORIAL, 10 sources)
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('EFF Surveillance Self-Defense','ssd.eff.org',       'https://www.eff.org/rss/updates.xml',               'rss', 'authoritative','rss','tier-5-privacy', true, 48),
  ('Privacy Rights Clearinghouse','privacyrights.org',  NULL,                                                 'rss', 'authoritative','web','tier-5-privacy', false, 168),
  ('Have I Been Pwned',           'haveibeenpwned.com', 'https://haveibeenpwned.com/feed/latestbreaches',     'rss', 'authoritative','rss','tier-5-privacy', true, 24),
  ('Krebs on Security',           'krebsonsecurity.com','https://krebsonsecurity.com/feed/',                  'rss', 'editorial',   'rss','tier-5-privacy', true, 24),
  ('Malwarebytes Labs',           'malwarebytes.com',   'https://www.malwarebytes.com/blog/feed/index.xml',   'rss', 'editorial',   'rss','tier-5-privacy', true, 48),
  ('Norton Blog',                 'norton.com',         'https://us.norton.com/blog/feed',                    'rss', 'editorial',   'rss','tier-5-privacy', true, 48),
  ('Mozilla Blog',                'mozilla.org',        'https://blog.mozilla.org/feed/',                     'rss', 'editorial',   'rss','tier-5-privacy', true, 48),
  ('DuckDuckGo Blog',             'spreadprivacy.com',  'https://spreadprivacy.com/rss/',                     'rss', 'editorial',   'rss','tier-5-privacy', true, 72),
  ('Consumer Reports Digital Lab','consumerreports.org','https://www.consumerreports.org/cro/news.xml',       'rss', 'authoritative','rss','tier-5-privacy', true, 72),
  ('StaySafeOnline (NCA)',        'staysafeonline.org', 'https://staysafeonline.org/feed/',                   'rss', 'authoritative','rss','tier-5-privacy', true, 72)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier, source_type = EXCLUDED.source_type, tier_label = EXCLUDED.tier_label, feed_url = COALESCE(content_sources.feed_url, EXCLUDED.feed_url);

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 6 — Health tech (mixed, 10 sources)
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('Mayo Clinic',                 'mayoclinic.org',    'https://newsnetwork.mayoclinic.org/feed/',               'rss', 'authoritative','rss','tier-6-health', true, 72),
  ('Cleveland Clinic Health Essentials','health.clevelandclinic.org','https://health.clevelandclinic.org/feed/', 'rss', 'authoritative','rss','tier-6-health', true, 72),
  ('NIA Health',                  'nia.nih.gov-health','https://www.nia.nih.gov/health/feed',                    'rss', 'authoritative','rss','tier-6-health', true, 72),
  ('Medicare Telehealth',         'telehealth.hhs.gov','https://telehealth.hhs.gov/rss.xml',                     'rss', 'authoritative','rss','tier-6-health', true, 168),
  ('AARP Health',                 'aarp.org-health',   'https://www.aarp.org/content/dam/aarp/rss/health.xml',   'rss', 'editorial',   'rss','tier-6-health', true, 72),
  ('Apple Health Newsroom',       'apple.com-health',  NULL,                                                     'rss', 'authoritative','web','tier-6-health', false, 72),
  ('Fitbit Help',                 'help.fitbit.com',   NULL,                                                     'rss', 'authoritative','web','tier-6-health', false, 72),
  ('Samsung Health',              'samsung.com-health',NULL,                                                     'rss', 'authoritative','web','tier-6-health', false, 72),
  ('MyChart Help',                'mychart.com',       NULL,                                                     'rss', 'authoritative','web','tier-6-health', false, 168),
  ('HealthIT.gov',                'healthit.gov',      'https://www.healthit.gov/buzz-blog/feed',                'rss', 'authoritative','rss','tier-6-health', true, 168)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier, source_type = EXCLUDED.source_type, tier_label = EXCLUDED.tier_label, feed_url = COALESCE(content_sources.feed_url, EXCLUDED.feed_url);

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 7 — Banking & money (mixed, 10 sources)
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('CFPB',                        'consumerfinance.gov','https://www.consumerfinance.gov/about-us/blog/feed/',   'rss', 'authoritative','rss','tier-7-money', true, 72),
  ('Bank of America Help',        'bankofamerica.com',  NULL,                                                    'rss', 'authoritative','web','tier-7-money', false, 168),
  ('Chase Help',                  'chase.com',          NULL,                                                    'rss', 'authoritative','web','tier-7-money', false, 168),
  ('Wells Fargo Online Help',     'wellsfargo.com',     NULL,                                                    'rss', 'authoritative','web','tier-7-money', false, 168),
  ('PayPal Help',                 'paypal.com',         NULL,                                                    'rss', 'authoritative','web','tier-7-money', false, 168),
  ('Venmo Help',                  'venmo.com',          NULL,                                                    'rss', 'authoritative','web','tier-7-money', false, 168),
  ('Zelle Help',                  'zellepay.com',       NULL,                                                    'rss', 'authoritative','web','tier-7-money', false, 168),
  ('SSA Online Services',         'ssa.gov-online',     'https://blog.ssa.gov/category/online-services/feed/',   'rss', 'authoritative','rss','tier-7-money', true, 168),
  ('AARP Money',                  'aarp.org-money',     'https://www.aarp.org/content/dam/aarp/rss/money.xml',   'rss', 'editorial',   'rss','tier-7-money', true, 72),
  ('NerdWallet Basics',           'nerdwallet.com',     'https://www.nerdwallet.com/blog/feed/',                 'rss', 'editorial',   'rss','tier-7-money', true, 72)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier, source_type = EXCLUDED.source_type, tier_label = EXCLUDED.tier_label, feed_url = COALESCE(content_sources.feed_url, EXCLUDED.feed_url);

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 8 — Smart home (AUTHORITATIVE, 10 sources)
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('Amazon Alexa Help', 'alexa.amazon.com',  NULL, 'rss', 'authoritative', 'web', 'tier-8-smart-home', false, 168),
  ('Google Nest Help',  'nest.com',          NULL, 'rss', 'authoritative', 'web', 'tier-8-smart-home', false, 168),
  ('Apple HomeKit',     'apple.com-homekit', NULL, 'rss', 'authoritative', 'web', 'tier-8-smart-home', false, 168),
  ('Ring Help',         'ring.com',          NULL, 'rss', 'authoritative', 'web', 'tier-8-smart-home', false, 168),
  ('Arlo Help',         'arlo.com',          NULL, 'rss', 'authoritative', 'web', 'tier-8-smart-home', false, 168),
  ('Philips Hue',       'philips-hue.com',   NULL, 'rss', 'authoritative', 'web', 'tier-8-smart-home', false, 168),
  ('Ecobee Help',       'ecobee.com',        NULL, 'rss', 'authoritative', 'web', 'tier-8-smart-home', false, 168),
  ('Wyze Help',         'wyze.com',          NULL, 'rss', 'authoritative', 'web', 'tier-8-smart-home', false, 168),
  ('iRobot',            'irobot.com',        NULL, 'rss', 'authoritative', 'web', 'tier-8-smart-home', false, 168),
  ('Eufy Help',         'eufy.com',          NULL, 'rss', 'authoritative', 'web', 'tier-8-smart-home', false, 168)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier, source_type = EXCLUDED.source_type, tier_label = EXCLUDED.tier_label;

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 9 — Communication & email (AUTHORITATIVE, 10 sources)
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('WhatsApp Help',        'whatsapp.com',       NULL, 'rss', 'authoritative', 'web', 'tier-9-comms', false, 168),
  ('FaceTime Help',        'apple.com-facetime', NULL, 'rss', 'authoritative', 'web', 'tier-9-comms', false, 168),
  ('Apple Messages Help',  'apple.com-messages', NULL, 'rss', 'authoritative', 'web', 'tier-9-comms', false, 168),
  ('Google Messages Help', 'messages.google.com',NULL, 'rss', 'authoritative', 'web', 'tier-9-comms', false, 168),
  ('Gmail Help',           'mail.google.com',    NULL, 'rss', 'authoritative', 'web', 'tier-9-comms', false, 168),
  ('Outlook Help',         'outlook.com',        NULL, 'rss', 'authoritative', 'web', 'tier-9-comms', false, 168),
  ('Yahoo Mail Help',      'help.yahoo.com',     NULL, 'rss', 'authoritative', 'web', 'tier-9-comms', false, 168),
  ('Zoom Help',            'zoom.us-help',       NULL, 'rss', 'authoritative', 'web', 'tier-9-comms', false, 168),
  ('Skype Help',           'support.skype.com',  NULL, 'rss', 'authoritative', 'web', 'tier-9-comms', false, 168),
  ('Signal Support',       'signal.org',         'https://signal.org/blog/rss.xml', 'rss','authoritative','rss','tier-9-comms', true, 168)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier, source_type = EXCLUDED.source_type, tier_label = EXCLUDED.tier_label, feed_url = COALESCE(content_sources.feed_url, EXCLUDED.feed_url);

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 10 — Connectivity & accessibility (mixed, 10 sources)
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('Xfinity Support',          'xfinity.com',       NULL, 'rss', 'authoritative','web','tier-10-connectivity', false, 168),
  ('Verizon Support',          'verizon.com',       NULL, 'rss', 'authoritative','web','tier-10-connectivity', false, 168),
  ('AT&T Support',             'att.com',           NULL, 'rss', 'authoritative','web','tier-10-connectivity', false, 168),
  ('T-Mobile Support',         't-mobile.com',      NULL, 'rss', 'authoritative','web','tier-10-connectivity', false, 168),
  ('Spectrum Support',         'spectrum.com',      NULL, 'rss', 'authoritative','web','tier-10-connectivity', false, 168),
  ('FCC Lifeline',             'lifelinesupport.org',NULL,'rss', 'authoritative','web','tier-10-connectivity', false, 168),
  ('Apple Accessibility',      'apple.com-access',  NULL, 'rss', 'authoritative','web','tier-10-connectivity', false, 168),
  ('Microsoft Accessibility',  'microsoft.com-access','https://blogs.microsoft.com/accessibility/feed/','rss','authoritative','rss','tier-10-connectivity', true, 168),
  ('Android Accessibility',    'accessibility.android.com',NULL,'rss','authoritative','web','tier-10-connectivity', false, 168),
  ('WebAIM',                   'webaim.org',        'https://webaim.org/blog/feed/',                         'rss', 'editorial','rss','tier-10-connectivity', true, 168)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier, source_type = EXCLUDED.source_type, tier_label = EXCLUDED.tier_label, feed_url = COALESCE(content_sources.feed_url, EXCLUDED.feed_url);

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 11 — Reddit communities (COMMUNITY — mandatory verification, 10 sources)
-- Reddit RSS + existing scrape-articles handles these today.
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('Reddit r/techsupport',      'reddit.com-techsupport',     'https://www.reddit.com/r/techsupport/top/.rss?t=week',     'rss', 'community','reddit','tier-11-reddit', true, 24),
  ('Reddit r/seniors',          'reddit.com-seniors',         'https://www.reddit.com/r/seniors/top/.rss?t=week',         'rss', 'community','reddit','tier-11-reddit', true, 48),
  ('Reddit r/AskTechnology',    'reddit.com-asktech',         'https://www.reddit.com/r/AskTechnology/top/.rss?t=week',   'rss', 'community','reddit','tier-11-reddit', true, 48),
  ('Reddit r/Scams',            'reddit.com-scams',           'https://www.reddit.com/r/Scams/top/.rss?t=week',           'rss', 'community','reddit','tier-11-reddit', true, 24),
  ('Reddit r/iphonehelp',       'reddit.com-iphonehelp',      'https://www.reddit.com/r/iphonehelp/top/.rss?t=week',      'rss', 'community','reddit','tier-11-reddit', true, 48),
  ('Reddit r/AndroidQuestions', 'reddit.com-androidq',        'https://www.reddit.com/r/AndroidQuestions/top/.rss?t=week','rss', 'community','reddit','tier-11-reddit', true, 48),
  ('Reddit r/Windows11',        'reddit.com-windows11',       'https://www.reddit.com/r/Windows11/top/.rss?t=week',       'rss', 'community','reddit','tier-11-reddit', true, 72),
  ('Reddit r/macOS',            'reddit.com-macos',           'https://www.reddit.com/r/macOS/top/.rss?t=week',           'rss', 'community','reddit','tier-11-reddit', true, 72),
  ('Reddit r/smarthome',        'reddit.com-smarthome',       'https://www.reddit.com/r/smarthome/top/.rss?t=week',       'rss', 'community','reddit','tier-11-reddit', true, 72),
  ('Reddit r/cordcutters',      'reddit.com-cordcutters',     'https://www.reddit.com/r/cordcutters/top/.rss?t=week',     'rss', 'community','reddit','tier-11-reddit', true, 72)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier, source_type = EXCLUDED.source_type, tier_label = EXCLUDED.tier_label, feed_url = COALESCE(content_sources.feed_url, EXCLUDED.feed_url);

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 12 — YouTube channels (COMMUNITY — disabled; needs transcript fetcher, 10 sources)
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('YouTube — Apple Support',    'youtube.com-apple',       'https://www.youtube.com/feeds/videos.xml?user=AppleSupport',      'atom','authoritative','youtube','tier-12-youtube', false, 168),
  ('YouTube — Google',           'youtube.com-google',      'https://www.youtube.com/feeds/videos.xml?user=Google',            'atom','authoritative','youtube','tier-12-youtube', false, 168),
  ('YouTube — Microsoft',        'youtube.com-microsoft',   'https://www.youtube.com/feeds/videos.xml?user=Microsoft',         'atom','authoritative','youtube','tier-12-youtube', false, 168),
  ('YouTube — Samsung',          'youtube.com-samsung',     'https://www.youtube.com/feeds/videos.xml?user=samsung',           'atom','authoritative','youtube','tier-12-youtube', false, 168),
  ('YouTube — AARP',             'youtube.com-aarp',        'https://www.youtube.com/feeds/videos.xml?user=aarp',              'atom','authoritative','youtube','tier-12-youtube', false, 168),
  ('YouTube — Senior Planet',    'youtube.com-seniorplanet','https://www.youtube.com/feeds/videos.xml?user=seniorplanet',      'atom','editorial',    'youtube','tier-12-youtube', false, 168),
  ('YouTube — CISA',             'youtube.com-cisa',        'https://www.youtube.com/feeds/videos.xml?user=cisagov',           'atom','authoritative','youtube','tier-12-youtube', false, 168),
  ('YouTube — FTC',              'youtube.com-ftc',         'https://www.youtube.com/feeds/videos.xml?user=FTCvideos',         'atom','authoritative','youtube','tier-12-youtube', false, 168),
  ('YouTube — Tech For Seniors', 'youtube.com-techforseniors','https://www.youtube.com/feeds/videos.xml?user=techforseniors',  'atom','community',   'youtube','tier-12-youtube', false, 168),
  ('YouTube — Cyber-Seniors',    'youtube.com-cyberseniors','https://www.youtube.com/feeds/videos.xml?user=cyberseniors',      'atom','community',   'youtube','tier-12-youtube', false, 168)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier, source_type = EXCLUDED.source_type, tier_label = EXCLUDED.tier_label, feed_url = COALESCE(content_sources.feed_url, EXCLUDED.feed_url);

-- ═══════════════════════════════════════════════════════════════════════════
-- TIER 13 — Stack Exchange (COMMUNITY — disabled; needs answer extractor, 5 sources)
-- Pushes total to 125 sources.
-- ═══════════════════════════════════════════════════════════════════════════
INSERT INTO content_sources (name, domain, feed_url, feed_type, trust_tier, source_type, tier_label, scrape_enabled, scrape_frequency_hours) VALUES
  ('Super User',                 'superuser.com',                 'https://superuser.com/feeds',                  'atom','community','stackexchange','tier-13-stackexchange', false, 48),
  ('Ask Different (Apple SE)',   'apple.stackexchange.com',       'https://apple.stackexchange.com/feeds',        'atom','community','stackexchange','tier-13-stackexchange', false, 48),
  ('Android Enthusiasts SE',     'android.stackexchange.com',     'https://android.stackexchange.com/feeds',      'atom','community','stackexchange','tier-13-stackexchange', false, 48),
  ('Information Security SE',    'security.stackexchange.com',    'https://security.stackexchange.com/feeds',     'atom','community','stackexchange','tier-13-stackexchange', false, 48),
  ('Web Applications SE',        'webapps.stackexchange.com',     'https://webapps.stackexchange.com/feeds',      'atom','community','stackexchange','tier-13-stackexchange', false, 72)
ON CONFLICT (domain) DO UPDATE SET
  trust_tier = EXCLUDED.trust_tier, source_type = EXCLUDED.source_type, tier_label = EXCLUDED.tier_label, feed_url = COALESCE(content_sources.feed_url, EXCLUDED.feed_url);

-- ─── Verification: total should now be 125 ────────────────────────────────
-- SELECT trust_tier, COUNT(*) FROM content_sources GROUP BY trust_tier;
-- SELECT tier_label, COUNT(*) FROM content_sources GROUP BY tier_label ORDER BY tier_label;
