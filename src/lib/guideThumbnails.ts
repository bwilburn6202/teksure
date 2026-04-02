/**
 * Guide Thumbnail Image System
 *
 * Provides relevant, professional images for each guide based on
 * category, tags, and slug keywords. Uses Unsplash Source API for
 * royalty-free images at consistent sizes.
 *
 * Image format: https://images.unsplash.com/photo-{ID}?w=600&h=400&fit=crop&q=80
 */

// ── Curated image pools by topic ──────────────────────────────────────────────
// Each key maps to an array of Unsplash photo IDs that match the topic.

const imagePool: Record<string, string[]> = {
  // Windows / PC
  'windows': [
    '1624571050572-bf45e5c7c6e0', // Windows laptop
    '1587831990711-23ca6441447b', // Desktop computer setup
    '1593642632559-0c6d3fc62b89', // Coding on PC
    '1629654297299-c8506221ca97', // Windows desktop
    '1498050108023-c5249f4df085', // Modern PC workspace
    '1518770660439-4636190af475', // Laptop computer
  ],
  // Mac / Apple
  'mac': [
    '1517336714731-489689fd1ca8', // MacBook
    '1611532736597-de2d4265fba3', // MacBook Pro workspace
    '1541807084-5c52b6b3adef', // iMac
    '1510557880182-3d4d3cba35a5', // Apple workspace
    '1484788984921-03950022c9ef', // MacBook on desk
    '1486312338219-ce68d2c6f44d', // Macbook top view
  ],
  // Phone / Mobile
  'phone': [
    '1511707171634-5f897ff02aa6', // Smartphone in hand
    '1512941937-1c1daa29-bda6', // iPhone
    '1556656793-08538906a9f8', // Phone usage
    '1601784551446-20c9e07cdbdb', // Mobile phone
    '1580910051074-3eb694886f2b', // Phone close-up
    '1523206489230-c012c64b2b48', // Smartphone
  ],
  // Security / Safety
  'security': [
    '1563013544-824ae1b704d3', // Lock and security
    '1555949963-ff9fe0c870eb', // Cybersecurity
    '1614064641938-3bbee52942c7', // Security padlock
    '1526374965328-7f61d4dc18c5', // Digital lock
    '1550751827-4bd374c3f58b', // Shield concept
    '1558494949-ef010cbdcc31', // Privacy security
  ],
  // AI / Technology
  'ai': [
    '1677442136019-21780ecad995', // AI concept
    '1620712943543-bcc4688e7485', // Robot AI
    '1655720828018-edd2daec9349', // AI brain
    '1535378917042-10a22c95931a', // Technology abstract
    '1485827404703-89b55fcc595e', // Neural network
    '1531746790095-e5cb90634acc', // Smart technology
  ],
  // Social Media
  'social-media': [
    '1611162617474-5b21e879e113', // Social media icons
    '1562577309-4932fdd64cd1', // Social networking
    '1432888622747-e3e13291b95b', // Social apps
    '1563986768609-322da13575f2', // Smartphone social media
    '1611162616305-c69b3fa7fbe0', // Social engagement
    '1516251193007-45ef944ab0c6', // Instagram style
  ],
  // Health / Medical
  'health': [
    '1576091160399-112ba8d25d1d', // Health technology
    '1559757175-0eb30cd8c063', // Medical tech
    '1631217868264-e5b90bb7e133', // Smartwatch health
    '1505751172876-fa1923c5c528', // Healthcare
    '1532938911079-1b06ac7ceec7', // Wellness
    '1571019613454-1cb2f99b2d8b', // Fitness tracker
  ],
  // Productivity / Office
  'productivity': [
    '1497032628192-86f99bee8dd0', // Office desk setup
    '1531403009284-440f080d1e12', // Workspace
    '1484480974693-6ca0a78fb36b', // Organized desk
    '1461749280684-dccba630e2f6', // Calendar planning
    '1517245386175-8ad1c6a05736', // Desktop workspace
    '1460925895917-afdab827c52f', // Typing on laptop
  ],
  // Finance / Money
  'finance': [
    '1554224155-6726b3ff858f', // Finance concept
    '1579621970563-9ae2e01248d6', // Banking online
    '1553729459-afe8f2e2d3b5', // Credit card
    '1611974789855-9c2a0a7236a3', // Mobile banking
    '1526304640581-d334cdbbf45e', // Financial planning
    '1450101499163-c8848e968838', // Money management
  ],
  // Entertainment / Streaming
  'entertainment': [
    '1522869635100-9f4c5e86aa37', // TV streaming
    '1593078166889-a56a8e2dcf7f', // Streaming content
    '1585504198199-20277593b94f', // Smart TV
    '1611162618071-b39a2ec055fb', // Media entertainment
    '1470225620780-dba8ba36b745', // Music listening
    '1486401899868-0e435ed85128', // Gaming
  ],
  // Education / Learning
  'education': [
    '1503676260728-1c00da094a0b', // Education
    '1501504905252-473c47e087f8', // Online learning
    '1434030216411-0b793f4b4173', // Study
    '1456513080510-7bf3a84b82f8', // Books and learning
    '1488190211105-8b0e65b80b4e', // Digital education
    '1513258496099-48168024aec0', // Student learning
  ],
  // Email / Communication
  'email': [
    '1596526131083-e8c633c948d2', // Email on screen
    '1526628953301-3e589a6a8b74', // Communication
    '1577563908411-5077b6dc7624', // Messaging
    '1516321318423-f06f85e504b3', // Email inbox
    '1534536281715-e28d76689b4d', // Chat communication
    '1557200134-90327ee9fafa', // Keyboard typing
  ],
  // Home / Smart Home
  'smart-home': [
    '1558618666-fcd25c85f82e', // Smart home
    '1556909114-44e3e70034e2', // Home automation
    '1585814240844-f1f53c7f44a1', // Smart speaker
    '1570129477492-45c003edd2be', // Modern home tech
    '1513694203232-719a280e022f', // Living room tech
    '1560448204-e02f11c3d0e2', // Smart devices
  ],
  // Travel
  'travel': [
    '1488646953014-85cb44e25828', // Travel technology
    '1469854523086-cc02fe5d8800', // Airplane travel
    '1530521954074-e64f6810b32d', // GPS navigation
    '1476514525535-07fb3b4ae5f1', // Journey
    '1436491865332-7a61a109db05', // Exploration
    '1501785888108-6c0f16e93ef0', // Map and planning
  ],
  // Shopping / E-commerce
  'shopping': [
    '1563013544-824ae1b704d3', // Online shopping
    '1472851294608-062f824d29cc', // E-commerce
    '1556742049-0cfed4f6a45d', // Shopping cart
    '1607082349566-187342175e2f', // Package delivery
    '1556742111-a301076d9d18', // Online purchase
    '1483985988355-763728e1935b', // Retail
  ],
  // Photography / Camera
  'photography': [
    '1516035069371-29a1b244cc32', // Camera
    '1452587925148-ce544e77e70d', // Photography
    '1554048612-b6a482bc67e5', // Phone photography
    '1495745966610-2a67f2297e5e', // Camera lens
    '1471341971476-ae15ff5dd4ea', // Photo editing
    '1542038784456-1ea8e935640e', // Taking photos
  ],
  // Networking / Internet
  'networking': [
    '1544197150-b99a580bb7a8', // Network cables
    '1558494949-ef010cbdcc31', // Wi-Fi router
    '1451187580459-43490279c0fa', // Global network
    '1573164713714-d95e436ab8d6', // Internet connectivity
    '1519389950473-47ba0277781c', // Data center
    '1562813733-b31f71025d54', // Wireless
  ],
  // Printing / Documents
  'printing': [
    '1612815154858-60aa4c59eaa6', // Printer
    '1568702846914-96b305d2aaeb', // Document
    '1586953208270-767889fa9b55', // Office printer
    '1554224154-26032ffc0d07', // Papers
    '1568219656418-15c329312bf1', // Scanning
    '1456513080510-7bf3a84b82f8', // Paperwork
  ],
  // Gaming
  'gaming': [
    '1538481199705-c710c4e965fc', // Gaming controller
    '1493711662062-fa541adb3fc8', // Gaming setup
    '1612287230202-1ff1d85d1bdf', // Game controller
    '1511512578047-dfb367046420', // Gaming display
    '1550745165-9bc0b252726f', // Video game
    '1542751371-adc38448a05e', // Console gaming
  ],
  // Generic / Technology
  'generic': [
    '1518770660439-4636190af475', // Technology
    '1519389950473-47ba0277781c', // Tech abstract
    '1488590528505-98d2b5aba04b', // Laptop code
    '1550751827-4bd374c3f58b', // Modern tech
    '1526374965328-7f61d4dc18c5', // Digital world
    '1504639725590-34d0984f5c62', // Innovation
  ],
};

/**
 * Maps a guide's tags and category to the best-matching image pool key.
 */
function getImagePoolKey(guide: { category: string; tags: string[]; slug: string }): string {
  const { category, tags, slug } = guide;
  const allTerms = [...tags, slug, category].join(' ').toLowerCase();

  // Priority matching: specific topics first, then fall back to category
  if (allTerms.includes('gaming') || allTerms.includes('console') || allTerms.includes('cloud-gaming')) return 'gaming';
  if (allTerms.includes('photograph') || allTerms.includes('camera') && !allTerms.includes('security')) return 'photography';
  if (allTerms.includes('travel') || allTerms.includes('flight') || allTerms.includes('hotel') || allTerms.includes('tsa') || allTerms.includes('uber') || allTerms.includes('lyft')) return 'travel';
  if (allTerms.includes('shop') || allTerms.includes('amazon') || allTerms.includes('delivery')) return 'shopping';
  if (allTerms.includes('smart-home') || allTerms.includes('alexa') || allTerms.includes('google-home') || allTerms.includes('doorbell') || allTerms.includes('automation') || allTerms.includes('ifttt')) return 'smart-home';
  if (allTerms.includes('email') || allTerms.includes('gmail') || allTerms.includes('outlook') || allTerms.includes('messaging') || allTerms.includes('whatsapp') || allTerms.includes('facetime') || allTerms.includes('zoom') || allTerms.includes('slack') || allTerms.includes('communication')) return 'email';
  if (allTerms.includes('stream') || allTerms.includes('netflix') || allTerms.includes('spotify') || allTerms.includes('music') || allTerms.includes('podcast') || allTerms.includes('audiobook') || allTerms.includes('ebook') || allTerms.includes('tv')) return 'entertainment';
  if (allTerms.includes('budget') || allTerms.includes('bank') || allTerms.includes('financ') || allTerms.includes('tax') || allTerms.includes('credit') || allTerms.includes('venmo') || allTerms.includes('zelle') || allTerms.includes('payment') || allTerms.includes('invest') || allTerms.includes('money')) return 'finance';
  if (allTerms.includes('wifi') || allTerms.includes('router') || allTerms.includes('dns') || allTerms.includes('vpn') || allTerms.includes('network') || allTerms.includes('internet') || allTerms.includes('broadband') || allTerms.includes('isp')) return 'networking';
  if (allTerms.includes('print') || allTerms.includes('scan') || allTerms.includes('document') || allTerms.includes('pdf') || allTerms.includes('signature')) return 'printing';
  if (allTerms.includes('learn') || allTerms.includes('course') || allTerms.includes('typing') || allTerms.includes('literacy') || allTerms.includes('education') || allTerms.includes('language')) return 'education';
  if (allTerms.includes('notion') || allTerms.includes('note') || allTerms.includes('canva') || allTerms.includes('presentation') || allTerms.includes('office') || allTerms.includes('workspace') || allTerms.includes('excel') || allTerms.includes('google-doc') || allTerms.includes('google-sheet') || allTerms.includes('microsoft')) return 'productivity';
  if (allTerms.includes('health') || allTerms.includes('medic') || allTerms.includes('telehealth') || allTerms.includes('fitness') || allTerms.includes('hearing') || allTerms.includes('wellness')) return 'health';
  if (allTerms.includes('social-media') || allTerms.includes('facebook') || allTerms.includes('instagram') || allTerms.includes('tiktok') || allTerms.includes('twitter') || allTerms.includes('linkedin') || allTerms.includes('pinterest') || allTerms.includes('nextdoor') || allTerms.includes('youtube')) return 'social-media';
  if (allTerms.includes('scam') || allTerms.includes('phish') || allTerms.includes('fraud') || allTerms.includes('identity-theft') || allTerms.includes('privacy') || allTerms.includes('security') || allTerms.includes('password') || allTerms.includes('2fa') || allTerms.includes('firewall') || allTerms.includes('safe') || allTerms.includes('breach')) return 'security';
  if (allTerms.includes('ai') || allTerms.includes('chatgpt') || allTerms.includes('claude') || allTerms.includes('gemini') || allTerms.includes('robot') || allTerms.includes('machine-learning')) return 'ai';
  if (allTerms.includes('iphone') || allTerms.includes('android') || allTerms.includes('phone') || allTerms.includes('tablet') || allTerms.includes('ipad') || allTerms.includes('mobile') || allTerms.includes('text') || allTerms.includes('nfc')) return 'phone';
  if (category === 'windows-guides') return 'windows';
  if (category === 'mac-guides') return 'mac';
  if (category === 'phone-guides') return 'phone';
  if (category === 'safety-guides') return 'security';
  if (category === 'ai-guides' || category === 'ai-advanced') return 'ai';
  if (category === 'social-media') return 'social-media';
  if (category === 'health-tech') return 'health';
  if (category === 'app-guides') return 'productivity';
  if (category === 'how-to') return 'generic';
  if (category === 'essential-skills') return 'generic';
  if (category === 'tips-tricks') return 'generic';

  return 'generic';
}

/**
 * Returns a deterministic Unsplash image URL for a guide.
 * Uses the slug hash to pick a consistent image from the pool.
 */
export function getGuideThumbnailUrl(guide: { slug: string; category: string; tags: string[]; thumbnailUrl?: string }): string {
  // If the guide already has a custom thumbnail, use it
  if (guide.thumbnailUrl) return guide.thumbnailUrl;

  const poolKey = getImagePoolKey(guide);
  const pool = imagePool[poolKey] || imagePool['generic'];

  // Deterministic selection based on slug hash
  let hash = 0;
  for (let i = 0; i < guide.slug.length; i++) {
    hash = ((hash << 5) - hash + guide.slug.charCodeAt(i)) | 0;
  }
  const idx = Math.abs(hash) % pool.length;

  return `https://images.unsplash.com/photo-${pool[idx]}?w=600&h=400&fit=crop&q=80&auto=format`;
}

/**
 * Returns a smaller thumbnail for list views.
 */
export function getGuideThumbnailSmall(guide: { slug: string; category: string; tags: string[]; thumbnailUrl?: string }): string {
  if (guide.thumbnailUrl) return guide.thumbnailUrl;

  const poolKey = getImagePoolKey(guide);
  const pool = imagePool[poolKey] || imagePool['generic'];

  let hash = 0;
  for (let i = 0; i < guide.slug.length; i++) {
    hash = ((hash << 5) - hash + guide.slug.charCodeAt(i)) | 0;
  }
  const idx = Math.abs(hash) % pool.length;

  return `https://images.unsplash.com/photo-${pool[idx]}?w=80&h=80&fit=crop&q=80&auto=format`;
}
