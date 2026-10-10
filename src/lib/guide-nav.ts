import type { Guide } from '../data/guides';

/**
 * Pure helpers shared by the build-time generator (scripts/generate-guide-data.mjs),
 * the server renderer and the browser. Keep this file free of data imports.
 */

export type GuideSummary = Omit<Guide, 'body' | 'steps' | 'tip' | 'warning'>;

export function summarizeGuide(g: Guide): GuideSummary {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { body, steps, tip, warning, ...summary } = g;
  return summary;
}

export function calcReadTime(guide: Pick<Guide, 'title' | 'excerpt' | 'steps' | 'body'>): string {
  let words = `${guide.title} ${guide.excerpt}`.split(/\s+/).length;
  if (guide.steps) guide.steps.forEach(s => { words += (s.title + ' ' + s.content + ' ' + (s.tip || '') + ' ' + (s.warning || '')).split(/\s+/).length; });
  if (guide.body) words += guide.body.split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

export interface GuideNav {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
  related: (GuideSummary & { readTimeLabel: string })[];
}

export type GuideWithNav = Guide & { nav: GuideNav };

/** Previous/next in library order and three more from the same category. */
export function buildGuideNav(guides: Guide[], i: number): GuideNav {
  const g = guides[i];
  const link = (x: Guide | undefined) => (x ? { slug: x.slug, title: x.title } : null);
  const related = guides
    .filter(x => x.slug !== g.slug && x.category === g.category)
    .slice(0, 3)
    .map(x => ({ ...summarizeGuide(x), readTimeLabel: calcReadTime(x) }));
  return { prev: link(guides[i - 1]), next: link(guides[i + 1]), related };
}
