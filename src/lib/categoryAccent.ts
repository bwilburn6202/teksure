import type { GuideCategory } from '@/data/guides';

/**
 * Maps each TekSure guide category to an Origin "Midnight Command Center"
 * accent color. Used to give every category page a unique tint while keeping
 * the overall site cohesive.
 *
 *   name        → human label for the accent
 *   hex         → raw hex string for inline styles
 *   tailwind    → Tailwind utility class (e.g. "bg-origin-violet")
 *   themedCard  → utility class for an Origin "Themed Content Card"
 *   cssVar      → CSS variable storing the HSL triple (works with hsl() and alpha)
 *   foreground  → recommended text color over a solid block of this accent
 */
export interface CategoryAccent {
  name: string;
  hex: string;
  tailwind: string;
  themedCard: string;
  cssVar: string;
  foreground: 'light' | 'dark';
}

const VIOLET: CategoryAccent = {
  name: 'Violet Haze',
  hex: '#847dff',
  tailwind: 'origin-violet',
  themedCard: 'themed-card-violet',
  cssVar: '--origin-violet',
  foreground: 'light',
};
const OCEAN: CategoryAccent = {
  name: 'Ocean Glimmer',
  hex: '#00b3dd',
  tailwind: 'origin-ocean',
  themedCard: 'themed-card-ocean',
  cssVar: '--origin-ocean',
  foreground: 'light',
};
const ROSE: CategoryAccent = {
  name: 'Soft Rose',
  hex: '#dd90d8',
  tailwind: 'origin-rose',
  themedCard: 'themed-card-rose',
  cssVar: '--origin-rose',
  foreground: 'dark',
};
const INDIGO: CategoryAccent = {
  name: 'Deep Indigo',
  hex: '#4b49aa',
  tailwind: 'origin-indigo',
  themedCard: 'themed-card-indigo',
  cssVar: '--origin-indigo',
  foreground: 'light',
};
const SKY: CategoryAccent = {
  name: 'Sky Tint',
  hex: '#90b8f0',
  tailwind: 'origin-sky',
  themedCard: 'themed-card-sky',
  cssVar: '--origin-sky',
  foreground: 'dark',
};
const LAVENDER: CategoryAccent = {
  name: 'Lavender Mist',
  hex: '#d1c9ff',
  tailwind: 'origin-lavender',
  themedCard: 'themed-card-lavender',
  cssVar: '--origin-lavender',
  foreground: 'dark',
};
const DEEP_SEA: CategoryAccent = {
  name: 'Deep Sea',
  hex: '#195f97',
  tailwind: 'origin-deep-sea',
  themedCard: 'themed-card-deep-sea',
  cssVar: '--origin-deep-sea',
  foreground: 'light',
};
const MIST: CategoryAccent = {
  name: 'Faded Mist',
  hex: '#f5f5f7',
  tailwind: 'origin-mist',
  themedCard: 'themed-card-mist',
  cssVar: '--origin-mist',
  foreground: 'dark',
};

export const categoryAccent: Record<GuideCategory, CategoryAccent> = {
  // Hardware / device
  'windows-guides': SKY,
  'mac-guides': LAVENDER,
  'phone-guides': OCEAN,

  // Foundational / how-to
  'essential-skills': MIST,
  'tips-tricks': LAVENDER,
  'how-to': SKY,

  // AI
  'ai-guides': VIOLET,
  'ai-advanced': INDIGO,

  // Safety / privacy
  'safety-guides': INDIGO,
  'online-privacy': DEEP_SEA,

  // Apps & social
  'app-guides': OCEAN,
  'social-media': ROSE,
  'entertainment': ROSE,
  'communication': SKY,

  // Health / money / life
  'health-tech': LAVENDER,
  'financial-tech': INDIGO,
  'online-banking': INDIGO,
  'government-civic': DEEP_SEA,
  'life-transitions': LAVENDER,

  // Connectivity / smart home / decisions
  'smart-home': OCEAN,
  'internet-connectivity': DEEP_SEA,
  'buying-guides': SKY,
  'tech-explained': MIST,
  'troubleshooting': ROSE,
  'work-from-home': OCEAN,
};

/** Default accent used when no category is in scope (Violet Haze — TekSure's primary accent). */
export const DEFAULT_ACCENT: CategoryAccent = VIOLET;

/** Look up the Origin accent for a guide category. Returns the default accent if the category is unknown. */
export function getCategoryAccent(category: GuideCategory | string | undefined | null): CategoryAccent {
  if (!category) return DEFAULT_ACCENT;
  return categoryAccent[category as GuideCategory] ?? DEFAULT_ACCENT;
}
