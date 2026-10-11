import { GUIDE_CATEGORIES, categoryLabels, categoryDescriptions, type GuideCategory } from './guide-categories';
export { GUIDE_CATEGORIES, categoryLabels, categoryDescriptions, type GuideCategory };


/** A visual callout overlaid on a guide step's screenshot */
export interface ScreenshotAnnotation {
  /** 'callout' = numbered circle, 'arrow' = pointer arrow, 'highlight' = colored box */
  type: 'callout' | 'arrow' | 'highlight';
  /** Percentage from left edge (0-100) */
  x: number;
  /** Percentage from top edge (0-100) */
  y: number;
  /** For callouts: the number label; for arrows/highlights: optional text tooltip */
  label?: string;
  /** Arrow direction when type==='arrow' */
  direction?: 'up' | 'down' | 'left' | 'right';
  /** highlight width/height as % of screenshot */
  width?: number;
  height?: number;
}

export interface GuideStep {
  title: string;
  content: string;
  /** URL to a real screenshot image */
  screenshotUrl?: string;
  /** Alt text for the screenshot image (accessibility) */
  screenshotAlt?: string;
  tip?: string;
  warning?: string;
  /** Optional visual annotations drawn over the step's screenshot */
  annotations?: ScreenshotAnnotation[];
  /** Before/After comparison captions — shows a drag-slider widget when both are set */
  beforeCaption?: string;
  afterCaption?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: GuideCategory;
  tags: string[];
  readTime: string;
  videoUrl?: string;
  thumbnailEmoji: string;
  /** URL to a relevant thumbnail image — used instead of emoji when available */
  thumbnailUrl?: string;
  publishedAt: string;
  /** Date the guide content was last reviewed and confirmed accurate */
  lastVerifiedAt?: string;
  /** Marks guides that users have rated highly as especially helpful */
  verifiedHelpful?: boolean;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  steps?: GuideStep[];
  body?: string;
  /** Guide-level Quick Tip shown alongside the steps */
  tip?: string;
  /** Guide-level safety warning shown alongside the steps */
  warning?: string;
  /** Name of the official source this guide is based on (e.g. "Apple Support") */
  sourceName?: string;
  /** URL of the official source */
  sourceUrl?: string;
}

// The library: 500 guides, one file per category. Cut from 3,939 on 2026-10-11 —
// the rest were thin, duplicated or off-topic. Retired slugs that have a genuine
// equivalent are in guide-redirects.ts; the others 404 on purpose.
//
// Add a guide to the file for its category. A new file must be imported AND
// spread here, or its guides do not exist.
import { phonesGuides } from './guides-phones';
import { computersGuides } from './guides-computers';
import { internetGuides } from './guides-internet';
import { safetyGuides } from './guides-safety';
import { moneyGuides } from './guides-money';
import { healthGuides } from './guides-health';
import { appsGuides } from './guides-apps';
import { aiGuides } from './guides-ai';
import { basicsGuides } from './guides-basics';
import { lifeGuides } from './guides-life';

export const guides: Guide[] = [
  ...phonesGuides,
  ...computersGuides,
  ...internetGuides,
  ...safetyGuides,
  ...moneyGuides,
  ...healthGuides,
  ...appsGuides,
  ...aiGuides,
  ...basicsGuides,
  ...lifeGuides,
];
