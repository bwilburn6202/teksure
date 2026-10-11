/**
 * Guide categories, labels and descriptions — split out of guides.ts so pages
 * that only need a category name do not pull in the guide library itself.
 * (Anything importing `@/data/guides` lands in the guide-data chunk.)
 */

/**
 * Every valid guide category, as a runtime value, in display order.
 *
 * `GuideCategory` is derived from this array, so tests and UI maps can import
 * the list instead of re-declaring it. Add a new category here once and the
 * type, the tests, and any exhaustive Record<GuideCategory, …> map will all
 * tell you what still needs updating.
 */
export const GUIDE_CATEGORIES = [
  'safety',
  'phones',
  'computers',
  'internet',
  'apps',
  'money',
  'health',
  'life',
  'ai',
  'basics',
] as const;

export type GuideCategory = (typeof GUIDE_CATEGORIES)[number];

export const categoryLabels: Record<GuideCategory, string> = {
  safety: 'Scams & Safety',
  phones: 'Phones & Tablets',
  computers: 'Computers',
  internet: 'Internet, Email & Video Calls',
  apps: 'Apps, TV & Smart Home',
  money: 'Money & Banking',
  health: 'Health & Hearing',
  life: 'Medicare, Social Security & Life Changes',
  ai: 'AI Tools',
  basics: 'Everyday Basics',
};

export const categoryDescriptions: Record<GuideCategory, string> = {
  safety: 'Spot scams, lock down your accounts, and know what to do if something goes wrong.',
  phones: 'iPhone, Android and tablet help: setup, storage, battery, photos and accessibility.',
  computers: 'Windows and Mac help: updates, backups, printing and making the screen easier to read.',
  internet: 'Wi-Fi, email, texting, social media and video calls with family.',
  apps: 'Streaming, smart TVs, smart speakers and the everyday apps people ask about most.',
  money: 'Online banking, payment apps, bills and buying tech without overpaying.',
  health: 'Patient portals, telehealth, pharmacy apps, hearing aids and health settings.',
  life: 'Medicare, Social Security, government services and handling a loved one’s accounts.',
  ai: 'What AI is, and how to use ChatGPT, Gemini and Copilot safely.',
  basics: 'Skills that work on any device: backups, updates, storage and fixing common problems.',
};
