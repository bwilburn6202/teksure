/**
 * Single source of truth for the "how much is on TekSure" numbers.
 *
 * These used to be hardcoded in three places (Landing, Tools, SiteIndex) and had
 * drifted badly — the homepage claimed "2,500+ free guides" while the site index
 * category totals summed past 4,000, and both /tools and /site-index claimed
 * "150+ tools" against a directory of nearly 3,000. Stale numbers read as
 * carelessness to a cautious audience, so derive them instead of typing them.
 *
 * Counts are rounded DOWN to a friendly boundary so the claim is always true
 * even if a batch lands between builds.
 */
import { guides } from './guides';
import { toolsDirectory } from './tools-directory';

/** Round down to the nearest 100 (or nearest 50 under 500). */
function friendlyFloor(n: number): number {
  const step = n < 500 ? 50 : 100;
  return Math.floor(n / step) * step;
}

/** Format as "3,900+" — the number people actually read. */
function plus(n: number): string {
  return `${friendlyFloor(n).toLocaleString('en-US')}+`;
}

export const GUIDE_COUNT = guides.length;
export const TOOL_COUNT = toolsDirectory.length;

/** Display strings. Use these in copy, never a literal. */
export const GUIDE_COUNT_LABEL = plus(GUIDE_COUNT);
export const TOOL_COUNT_LABEL = plus(TOOL_COUNT);
