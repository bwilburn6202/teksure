/**
 * Guide Thumbnail Image System
 *
 * Topic-aware resolver that maps each guide to a relevant stock photo based on
 * its slug, tags, and category. Images are served from Unsplash's CDN (permanent
 * URLs) so they load reliably without an API key.
 *
 * Resolution order:
 *   1. guide.thumbnailUrl (explicit override)
 *   2. Topic match — scans slug + tags for known keywords
 *   3. Category default
 *   4. Seeded Picsum (always returns something)
 */

type GuideLike = { slug: string; category: string; tags?: string[]; thumbnailUrl?: string };

/**
 * Topic → Unsplash photo ID mapping.
 * Each entry is matched against the guide's slug + tags as keywords.
 * Order matters — first match wins.
 */
const TOPIC_PHOTOS: Array<{ keywords: string[]; photoId: string }> = [
  // --- Brands & platforms ---
  { keywords: ['iphone', 'ios', 'apple-id', 'imessage', 'facetime'], photoId: '1556656793-08538906a9f8' },
  { keywords: ['ipad', 'ipados'], photoId: '1556656793-08538906a9f8' },
  { keywords: ['macbook', 'mac-guides', 'macos', 'apple-silicon', 'm1-chip'], photoId: '1517336714731-489689fd1ca8' },
  { keywords: ['apple-watch', 'watchos'], photoId: '1579586337278-3befd40fd17a' },
  { keywords: ['airpods'], photoId: '1505740420928-5e560c06d30e' },
  { keywords: ['android', 'pixel', 'samsung-galaxy'], photoId: '1511707171634-5f897ff02aa9' },
  { keywords: ['windows', 'microsoft-365', 'bitlocker', 'powershell'], photoId: '1629654297299-c8506221ca97' },
  { keywords: ['chromebook', 'chrome-os'], photoId: '1611174743420-3d7df880ce32' },
  { keywords: ['google-photos', 'google-drive', 'google-docs', 'google-sheets', 'gmail'], photoId: '1573804633927-bfcbcd909acd' },
  { keywords: ['chatgpt', 'openai'], photoId: '1677442136019-21780ecad995' },
  { keywords: ['claude-ai', 'anthropic'], photoId: '1620712943543-bcc4688e7485' },
  { keywords: ['gemini', 'google-ai', 'bard'], photoId: '1676299081847-824916de030a' },
  { keywords: ['copilot', 'microsoft-ai'], photoId: '1620712943543-bcc4688e7485' },
  { keywords: ['perplexity'], photoId: '1620712943543-bcc4688e7485' },
  { keywords: ['netflix', 'streaming-service', 'streaming-guide'], photoId: '1522869635100-9f4c5e86aa37' },
  { keywords: ['spotify', 'apple-music', 'amazon-music', 'pandora', 'music-streaming'], photoId: '1611339555312-e607c8352fd7' },
  { keywords: ['youtube', 'youtube-tv'], photoId: '1611162617213-7d7a39e9b1d7' },
  { keywords: ['instagram'], photoId: '1611605698335-8b1569810432' },
  { keywords: ['facebook', 'messenger'], photoId: '1611262588024-d12430b98920' },
  { keywords: ['tiktok'], photoId: '1596558450268-9c27524ba856' },
  { keywords: ['whatsapp'], photoId: '1611746872915-64382b5c76da' },
  { keywords: ['linkedin'], photoId: '1611944212129-29977ae1398c' },
  { keywords: ['twitter', 'x-app', 'bluesky', 'mastodon', 'threads'], photoId: '1611605698323-b1e99cfd37ea' },
  { keywords: ['zoom', 'video-call', 'video-meeting', 'video-conference', 'teams', 'google-meet'], photoId: '1609921212029-bb5a28e60960' },
  { keywords: ['amazon', 'prime-video', 'amazon-prime'], photoId: '1605810230434-7631ac76ec81' },

  // --- Topic clusters ---
  { keywords: ['password', 'password-manager', '1password', 'bitwarden', 'lastpass', 'dashlane'], photoId: '1555421689-491a97ff2040' },
  { keywords: ['2fa', 'two-factor', 'authenticator', 'authy', 'yubikey'], photoId: '1614064641938-3bbee52942c7' },
  { keywords: ['phishing', 'scam', 'fraud', 'identity-theft', 'spoofing', 'fake-email', 'dark-web'], photoId: '1562813733-b31f71025d54' },
  { keywords: ['vpn', 'privacy', 'online-privacy', 'incognito', 'private-browsing', 'tor'], photoId: '1563013544-824ae1b704d3' },
  { keywords: ['firewall', 'antivirus', 'malware', 'security', 'cyber'], photoId: '1550751827-4bd374c3f58b' },
  { keywords: ['backup', '3-2-1', 'data-protection', 'cloud-storage', 'storage-management'], photoId: '1558494949-ef010cbdcc31' },
  { keywords: ['credit-card', 'credit-score', 'credit-freeze', 'credit-report', 'fraud-alert'], photoId: '1556742502-ec7c0e9f34b1' },
  { keywords: ['bank', 'banking', 'atm', 'deposit', 'wire-transfer', 'routing-number', 'fdic'], photoId: '1601597111158-2fceff292cdc' },
  { keywords: ['paypal', 'venmo', 'zelle', 'cash-app', 'apple-pay', 'google-pay', 'samsung-pay', 'contactless'], photoId: '1556742111-a301076d9d18' },
  { keywords: ['investment', 'robinhood', 'fidelity', 'stocks', 'trading', 'retirement-account', '401k', 'ira'], photoId: '1611974789855-9c2a0a7236a3' },
  { keywords: ['medicare', 'medicaid', 'social-security', 'irs', 'government'], photoId: '1529007196863-d07650a3f0ea' },
  { keywords: ['tax', 'turbotax', 'taxact', 'hr-block', 'irs-free-file'], photoId: '1554224155-6726b3ff858f' },
  { keywords: ['camera', 'photo-editing', 'photoshop', 'lightroom', 'procreate'], photoId: '1502920917128-1aa500764cbd' },
  { keywords: ['video-editing', 'clipchamp', 'imovie', 'premiere', 'lumafusion'], photoId: '1611162617213-7d7a39e9b1d7' },
  { keywords: ['fitness', 'workout', 'strava', 'peloton', 'health-tracker', 'fitbit', 'garmin'], photoId: '1571019614242-c5c5dee9f50b' },
  { keywords: ['meditation', 'mental-health', 'calm', 'headspace', 'sleep', 'wellness'], photoId: '1506126613408-eca07ce68773' },
  { keywords: ['telehealth', 'telemedicine', 'patient-portal', 'myChart', 'mychart', 'prescription'], photoId: '1576091160399-112ba8d25d1d' },
  { keywords: ['travel', 'tripit', 'kayak', 'expedia', 'booking', 'airbnb', 'vrbo'], photoId: '1488646953014-85cb44e25828' },
  { keywords: ['car', 'uber', 'lyft', 'rideshare', 'gas', 'ev-charging', 'tesla'], photoId: '1553440569-bcc63803a83d' },
  { keywords: ['smart-home', 'alexa', 'google-home', 'nest', 'ecobee', 'thermostat'], photoId: '1558000143-a78f8299c40b' },
  { keywords: ['smart-speaker', 'echo-show', 'home-mini', 'voice-assistant'], photoId: '1558000143-a78f8299c40b' },
  { keywords: ['ring-doorbell', 'security-camera', 'home-security', 'simplisafe', 'arlo', 'blink'], photoId: '1550751827-4bd374c3f58b' },
  { keywords: ['robot-vacuum', 'roomba', 'shark-robot'], photoId: '1558000143-a78f8299c40b' },
  { keywords: ['smart-bulb', 'smart-light', 'hue', 'lifx', 'kasa', 'govee'], photoId: '1558000143-a78f8299c40b' },
  { keywords: ['ev', 'electric-vehicle', 'charging', 'chargepoint', 'electrify-america', 'evgo'], photoId: '1553440569-bcc63803a83d' },
  { keywords: ['wifi', 'router', 'internet-connectivity', 'mesh-wifi', 'eero', 'orbi'], photoId: '1544197150-b99a580bb7a8' },
  { keywords: ['bluetooth', 'wireless', 'pairing'], photoId: '1606220588913-b3aacb4d2f46' },
  { keywords: ['laptop', 'notebook', 'pc', 'computer-buying'], photoId: '1541807084-5c52b6b3adef' },
  { keywords: ['printer', 'printing', 'scanning', 'scan-documents'], photoId: '1587829741301-dc798b83add3' },
  { keywords: ['keyboard', 'mouse', 'trackpad', 'shortcuts'], photoId: '1541807084-5c52b6b3adef' },
  { keywords: ['headphones', 'earbuds', 'noise-canceling', 'sony-wh'], photoId: '1505740420928-5e560c06d30e' },
  { keywords: ['monitor', 'display', 'screen-resolution', '4k'], photoId: '1527443224154-c4a3942d3acf' },
  { keywords: ['cable', 'usb-c', 'thunderbolt', 'hdmi', 'displayport'], photoId: '1523966211575-eb4a01e7dd51' },
  { keywords: ['battery', 'power-bank', 'fast-charging', 'charging'], photoId: '1518770660439-4636190af475' },
  { keywords: ['ai-image-gen', 'dalle', 'dall-e', 'midjourney', 'stable-diffusion'], photoId: '1620712943543-bcc4688e7485' },
  { keywords: ['ai-guides', 'artificial-intelligence', 'llm', 'chatbot'], photoId: '1620712943543-bcc4688e7485' },
  { keywords: ['book', 'kindle', 'audiobook', 'audible', 'libby', 'hoopla', 'scribd'], photoId: '1524178232363-1fb2b075b655' },
  { keywords: ['gaming', 'xbox', 'playstation', 'nintendo', 'game-pass'], photoId: '1493711662062-fa541adb3fc8' },
  { keywords: ['pet', 'dog', 'cat', 'petcube', 'whistle', 'barkbox', 'rover'], photoId: '1552053831-71594a27632d' },
  { keywords: ['shopping', 'amazon-shopping', 'ebay', 'etsy', 'poshmark', 'depop'], photoId: '1607083206869-4c7672e72a8a' },
  { keywords: ['delivery', 'instacart', 'doordash', 'grubhub', 'ubereats'], photoId: '1513104890138-7c749659a591' },
  { keywords: ['accessibility', 'voice-over', 'talkback', 'magnifier', 'live-captions'], photoId: '1535378620166-273708d44e4c' },
  { keywords: ['work-from-home', 'remote-work', 'home-office'], photoId: '1593642702821-c8da6771f0c6' },
  { keywords: ['cloud', 'cloud-computing', 'server', 'data-center'], photoId: '1518770660439-4636190af475' },
  { keywords: ['cpu', 'processor', 'ram', 'ssd', 'hdd', 'motherboard'], photoId: '1518770660439-4636190af475' },
  { keywords: ['qr-code', 'barcode', 'scan-code'], photoId: '1611605698335-8b1569810432' },
  { keywords: ['5g', 'cellular', 'carrier', 'phone-plan', 'sim-card'], photoId: '1556656793-08538906a9f8' },
  { keywords: ['meal-plan', 'grocery', 'recipe', 'cooking'], photoId: '1495521821757-a1efb6729352' },
  { keywords: ['resume', 'cover-letter', 'job-search'], photoId: '1521791136064-7986c2920216' },
  { keywords: ['greeting-card', 'birthday-card'], photoId: '1511895426328-dc8714191300' },
  { keywords: ['parental-control', 'kids', 'family-link', 'guided-access'], photoId: '1545987796-200677ee1011' },
  { keywords: ['national-park', 'camping', 'hiking', 'alltrails', 'recreation-gov'], photoId: '1464822759023-fed622ff2c3b' },
  { keywords: ['weather', 'storm', 'hurricane', 'tornado'], photoId: '1464822759023-fed622ff2c3b' },
];

/**
 * Category → default photo fallback. Used when no topic keyword matches.
 */
const CATEGORY_DEFAULTS: Record<string, string> = {
  'windows-guides': '1629654297299-c8506221ca97',
  'mac-guides': '1517336714731-489689fd1ca8',
  'essential-skills': '1519389950473-47ba0277781c',
  'tips-tricks': '1553484771-11998c592b9c',
  'ai-guides': '1620712943543-bcc4688e7485',
  'ai-advanced': '1677442136019-21780ecad995',
  'safety-guides': '1550751827-4bd374c3f58b',
  'how-to': '1522202176988-66273c2fd55f',
  'app-guides': '1574944985070-8f3ebc6b79d2',
  'health-tech': '1576091160399-112ba8d25d1d',
  'phone-guides': '1511707171634-5f897ff02aa9',
  'social-media': '1611605698335-8b1569810432',
  'government-civic': '1529007196863-d07650a3f0ea',
  'financial-tech': '1556742502-ec7c0e9f34b1',
  'smart-home': '1558000143-a78f8299c40b',
  'entertainment': '1522869635100-9f4c5e86aa37',
  'communication': '1609921212029-bb5a28e60960',
  'life-transitions': '1522202176988-66273c2fd55f',
  'internet-connectivity': '1544197150-b99a580bb7a8',
  'online-privacy': '1563013544-824ae1b704d3',
  'online-banking': '1601597111158-2fceff292cdc',
  'buying-guides': '1607083206869-4c7672e72a8a',
  'tech-explained': '1518770660439-4636190af475',
  'troubleshooting': '1581092160607-ee22621dd758',
  'work-from-home': '1593642702821-c8da6771f0c6',
};

const UNSPLASH_BASE = 'https://images.unsplash.com/photo-';

function buildUnsplashUrl(photoId: string, width: number, height: number): string {
  return `${UNSPLASH_BASE}${photoId}?w=${width}&h=${height}&auto=format&fit=crop&q=80`;
}

/**
 * Match the guide's slug + tags against the topic library.
 */
function findTopicPhotoId(guide: GuideLike): string | null {
  const haystack = [guide.slug, ...(guide.tags ?? [])]
    .join(' ')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-');

  for (const entry of TOPIC_PHOTOS) {
    for (const keyword of entry.keywords) {
      if (haystack.includes(keyword)) return entry.photoId;
    }
  }
  return null;
}

function resolvePhotoId(guide: GuideLike): string {
  const topicId = findTopicPhotoId(guide);
  if (topicId) return topicId;
  const categoryId = CATEGORY_DEFAULTS[guide.category];
  if (categoryId) return categoryId;
  return '';
}

/**
 * Returns a hero thumbnail URL for a guide (600×400).
 * Order: explicit thumbnailUrl → topic match → category default → seeded Picsum.
 */
export function getGuideThumbnailUrl(guide: GuideLike): string {
  if (guide.thumbnailUrl) return guide.thumbnailUrl;
  const photoId = resolvePhotoId(guide);
  if (photoId) return buildUnsplashUrl(photoId, 600, 400);
  return `https://picsum.photos/seed/${guide.slug}/600/400`;
}

/**
 * Returns a small thumbnail for list/card views (80×80).
 */
export function getGuideThumbnailSmall(guide: GuideLike): string {
  if (guide.thumbnailUrl) return guide.thumbnailUrl;
  const photoId = resolvePhotoId(guide);
  if (photoId) return buildUnsplashUrl(photoId, 80, 80);
  return `https://picsum.photos/seed/${guide.slug}/80/80`;
}

/**
 * Returns a wide hero image for the guide detail page (1200×600).
 */
export function getGuideHeroUrl(guide: GuideLike): string {
  if (guide.thumbnailUrl) return guide.thumbnailUrl;
  const photoId = resolvePhotoId(guide);
  if (photoId) return buildUnsplashUrl(photoId, 1200, 600);
  return `https://picsum.photos/seed/${guide.slug}/1200/600`;
}
