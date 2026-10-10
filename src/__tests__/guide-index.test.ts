import { describe, it, expect } from 'vitest';
import { guides } from '../data/guides';
import { guideIndex } from '../lib/guide-index';

/**
 * src/data/guide-index.json is generated from the guide sources and committed.
 * If a guide is added, renamed or retitled without regenerating it, lists and
 * links drift from the real guides and /guides/:slug treats new slugs as
 * missing. Regenerate with: node --import tsx scripts/generate-guide-data.mjs
 */
describe('guide index', () => {
  it('lists exactly the guides in the library, in order', () => {
    expect(guideIndex.map((g) => g.slug)).toEqual(guides.map((g) => g.slug));
  });

  it('matches each guide on everything but the heavy fields', () => {
    const stale = guides
      .filter((g, i) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { body, steps, tip, warning, ...summary } = g;
        return JSON.stringify(summary) !== JSON.stringify(guideIndex[i]);
      })
      .map((g) => g.slug);
    expect(stale).toEqual([]);
  });

  it('carries no step or body text', () => {
    expect(guideIndex.some((g) => 'steps' in g || 'body' in g)).toBe(false);
  });
});
