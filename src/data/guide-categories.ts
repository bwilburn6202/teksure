/**
 * Guide categories, labels and descriptions — split out of guides.ts so pages
 * that only need a category name do not pull in the guide library itself.
 * (Anything importing `@/data/guides` lands in the ~17 MB guide-data chunk.)
 */

/**
 * Every valid guide category, as a runtime value.
 *
 * `GuideCategory` is derived from this array, so tests and UI maps can import
 * the list instead of re-declaring it. Add a new category here once and the
 * type, the tests, and any exhaustive Record<GuideCategory, …> map will all
 * tell you what still needs updating.
 */
export const GUIDE_CATEGORIES = [
  'windows-guides',
  'mac-guides',
  'essential-skills',
  'tips-tricks',
  'ai-guides',
  'ai-advanced',
  'safety-guides',
  'how-to',
  'app-guides',
  'health-tech',
  'phone-guides',
  'social-media',
  'government-civic',
  'financial-tech',
  'smart-home',
  'entertainment',
  'communication',
  'life-transitions',
  'internet-connectivity',
  'online-privacy',
  'online-banking',
  'buying-guides',
  'tech-explained',
  'troubleshooting',
  'work-from-home',
  'travel',
] as const;

export type GuideCategory = (typeof GUIDE_CATEGORIES)[number];

export const categoryLabels: Record<GuideCategory, string> = {
  'windows-guides': 'Windows Guides',
  'mac-guides': 'Mac Guides',
  'essential-skills': 'Essential Skills',
  'tips-tricks': 'Tips & Tricks',
  'ai-guides': 'AI Guides',
  'ai-advanced': 'AI In Depth',
  'safety-guides': 'Safety & Privacy',
  'how-to': 'How-To Guides',
  'app-guides': 'Apps & Services',
  'health-tech': 'Health & Wellness Tech',
  'phone-guides': 'Phone & Tablet',
  'social-media': 'Social Media',
  'government-civic': 'Government & Civic',
  'financial-tech': 'Money & Banking',
  'smart-home': 'Smart Home',
  'entertainment': 'Entertainment & Media',
  'communication': 'Communication',
  'life-transitions': 'Life Transitions',
  'internet-connectivity': 'Internet & WiFi',
  'online-privacy': 'Online Privacy & Dark Web',
  'online-banking': 'Online Banking',
  'buying-guides': 'Buying Guides',
  'tech-explained': 'Tech Terms Explained',
  'troubleshooting': 'Troubleshooting',
  'work-from-home': 'Working from Home',
  'travel': 'Travel & Abroad',
};

export const categoryDescriptions: Record<GuideCategory, string> = {
  'windows-guides': 'Beginner to advanced guides for navigating and mastering Windows',
  'mac-guides': 'Beginner to advanced guides for navigating and mastering macOS',
  'essential-skills': 'Universal digital literacy skills for any device or platform',
  'tips-tricks': 'Quick tips, shortcuts, and productivity hacks across all platforms',
  'ai-guides': 'Learn how to use AI tools, chatbots, and smart assistants to boost your productivity',
  'ai-advanced': 'Advanced AI concepts for those who want to go deeper',
  'safety-guides': 'Stay safe online — protect your accounts, privacy, and personal information',
  'how-to': 'Step-by-step guides for everyday tasks on any device',
  'app-guides': 'Step-by-step walkthroughs for popular apps and online services — from Instagram to Instacart',
  'health-tech': 'Use technology to manage your health — patient portals, fitness trackers, telehealth, and medication apps',
  'phone-guides': 'iPhone and Android guides — setup, storage, apps, calls, and everyday tasks',
  'social-media': 'Plain-English guides to Facebook, WhatsApp, Instagram, and YouTube',
  'government-civic': 'Navigate government websites and services — Medicare, Social Security, IRS, VA, and more',
  'financial-tech': 'Online banking, mobile payments, credit monitoring, and managing your money digitally',
  'smart-home': 'Set up and use smart speakers, smart TVs, doorbells, thermostats, and other connected devices',
  'entertainment': 'Streaming services, music apps, podcasts, audiobooks, and digital entertainment',
  'communication': 'Video calling, messaging apps, group chats, and staying connected with family and friends',
  'life-transitions': 'Setting up new devices, switching platforms, moving, and managing digital life changes',
  'internet-connectivity': 'Choosing internet plans, setting up routers, improving WiFi, and understanding your connection',
  'online-privacy': 'Protect your personal data — dark web monitoring, data broker removal, private browsing, and keeping your information off the internet',
  'online-banking': 'Online and mobile banking step by step — logging in safely, mobile check deposit, bill pay, transfers, and spotting bank scams',
  'buying-guides': 'Know what to look for before you buy — plain-English guides to choosing laptops, phones, tablets, TVs, printers, and more',
  'tech-explained': 'Confused by tech jargon? Plain-English explanations of RAM, CPU, storage, 4K, USB types, Bluetooth versions, and more',
  'troubleshooting': 'Fix common tech problems yourself — frozen apps, slow internet, error messages, battery drain, and devices that won\'t cooperate',
  'work-from-home': 'Set up a reliable home office — VPNs, remote desktop, video conferencing, cloud storage, and productivity tools for remote workers',
  'travel': 'Plan and stay connected while traveling, retiring abroad, or splitting time between countries — permits, banking, phone numbers, and overseas logistics',
};
