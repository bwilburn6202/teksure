import { describe, it, expect } from 'vitest';
import { guides } from '../data/guides';

/**
 * Brand-voice enforcement
 *
 * TekSure's voice rules ban a small set of words/phrases from all guide copy
 * (see CLAUDE.md). This test scans every Guide's writer-supplied text and
 * fails CI if any banned phrase lands in new content.
 *
 * Scope: we only enforce against guides published on or after the cutover
 * date below. Pre-cutover guides are pre-existing content; we report their
 * violation counts for visibility but don't block the suite on them. That
 * lets the rule bite on the publish-to-batch pipeline (which only emits
 * guides stamped with today's publishedAt) without requiring a retroactive
 * sweep of the 1,200+ existing guides.
 *
 * Update this file in lockstep with the BANNED_PHRASES list in
 * supabase/functions/simplify-article/index.ts.
 */

const BANNED_PHRASES = [
  "it's easy",
  'simply',
  'obviously',
  'leverage',
  'utilize',
  'seamless',
  'cutting-edge',
  'pro tip',
];

/**
 * "just" is banned for its *minimizing* sense — "just tap Settings" tells a
 * stuck reader the thing they cannot do is trivial. The ordinary English senses
 * ("just in case", "just like", "just one", "just below") carry real meaning
 * and are not a voice problem, so we only flag "just" when it directly precedes
 * an instruction verb. Keep this list in sync with
 * scripts/fix-minimizing-just.mjs.
 */
const MINIMIZING_JUST = new RegExp(
  '\\bjust (tap|taps|click|clicks|press|presses|open|opens|go|goes|type|types|' +
  'select|selects|choose|chooses|say|says|ask|asks|call|calls|visit|visits|' +
  'head|look|looks|turn|turns|plug|plugs|hold|holds|swipe|swipes|drag|drags|' +
  'scroll|scrolls|enter|enters|download|downloads|install|installs|follow|follows|' +
  'check|checks|use|uses|set|sets|add|adds|need|needs|want|wants|leave|leaves|' +
  'wait|waits|keep|keeps|make|makes|take|takes|sign|signs|answer|answers|' +
  'delete|deletes|restart|restarts|unplug|unplugs|repeat|repeats|copy|paste|save|saves)\\b'
);

/** Guides published on or after this date must pass the banned-word scan. */
const ENFORCEMENT_CUTOVER = '2026-04-19';

/** Fields whose copy is author-facing and must follow brand voice. */
const AUTHOR_FIELDS: Array<(g: typeof guides[0]) => string[]> = [
  g => [g.title ?? '', g.excerpt ?? '', g.body ?? ''],
  g => (g.tags ?? []),
  g => (g.steps ?? []).flatMap(s => [s.title ?? '', s.content ?? '', s.tip ?? '', s.warning ?? '']),
];

/**
 * Real product names that happen to contain a banned word. We cannot rename
 * Google Fi's "Simply Unlimited" plan or TaxSlayer's "Simply Free" tier, so
 * these are masked out before scanning.
 */
const PRODUCT_NAME_EXCEPTIONS = [
  'simply unlimited',
  'simply free',
  'simply piano',
  'simplygo',
  'simplythick',
  'simplisafe',
];

/**
 * "leverage" is banned as corporate jargon ("leverage our platform"). The
 * ordinary noun — bargaining power — is plain English and stays.
 */
const NOUN_SENSE_EXCEPTIONS = ['legal leverage', 'leverage with', 'leverage over', 'leverage against'];

function scan(text: string): string[] {
  const hits: string[] = [];
  let haystack = text.toLowerCase();
  for (const name of [...PRODUCT_NAME_EXCEPTIONS, ...NOUN_SENSE_EXCEPTIONS]) {
    // Mask both the spaced and hyphenated forms (URLs use "simply-piano").
    for (const variant of [name, name.replace(/ /g, '-')]) {
      haystack = haystack.split(variant).join('\u0000');
    }
  }
  for (const phrase of BANNED_PHRASES) {
    // Word-boundary match. Phrase may contain spaces so we anchor on boundaries
    // at the phrase edges rather than within.
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`\\b${escaped}\\b`);
    if (re.test(haystack)) hits.push(phrase);
  }
  if (MINIMIZING_JUST.test(haystack)) hits.push('just (minimizing)');
  return hits;
}

describe('Brand-voice: banned words', () => {
  const enforced = guides.filter(g => (g.publishedAt ?? '') >= ENFORCEMENT_CUTOVER);
  const grandfathered = guides.filter(g => (g.publishedAt ?? '') < ENFORCEMENT_CUTOVER);

  it(`enforcement cutover: ${ENFORCEMENT_CUTOVER}`, () => {
    expect(BANNED_PHRASES.length).toBeGreaterThan(0);
    // Guard so an accidental empty guides list never trivially passes
    expect(guides.length).toBeGreaterThan(0);
  });

  it('no banned phrases in post-cutover guides', () => {
    const violations: Array<{ slug: string; field: string; phrases: string[] }> = [];
    for (const g of enforced) {
      for (const [idx, getter] of AUTHOR_FIELDS.entries()) {
        const joined = getter(g).join('\n');
        const hits = scan(joined);
        if (hits.length > 0) {
          violations.push({ slug: g.slug, field: `field-group-${idx}`, phrases: hits });
        }
      }
    }
    if (violations.length > 0) {
      const detail = violations
        .slice(0, 10)
        .map(v => `  ${v.slug} [${v.field}]: ${v.phrases.join(', ')}`)
        .join('\n');
      throw new Error(
        `Brand-voice violations in ${violations.length} guide(s) published on/after ${ENFORCEMENT_CUTOVER}:\n${detail}`,
      );
    }
  });

  // Visibility-only: count pre-cutover violations so the team can track the
  // grandfathered debt. Never fails.
  it('reports pre-cutover violation count (non-failing)', () => {
    let total = 0;
    for (const g of grandfathered) {
      for (const getter of AUTHOR_FIELDS) {
        const hits = scan(getter(g).join('\n'));
        total += hits.length;
      }
    }
    expect(Number.isFinite(total)).toBe(true);
    console.log(`[brand-voice] pre-cutover violations across ${grandfathered.length} guides: ${total}`);
  });
});

describe('Brand-voice: Quick Tip vs Pro Tip', () => {
  it('no guide step uses "Pro Tip" in its tip field', () => {
    const offenders = guides.filter(g =>
      (g.steps ?? []).some(s => /\bpro\s*tip\b/i.test(s.tip ?? '')),
    ).filter(g => (g.publishedAt ?? '') >= ENFORCEMENT_CUTOVER);

    if (offenders.length > 0) {
      throw new Error(`Use "Quick Tip" not "Pro Tip" — offenders: ${offenders.map(g => g.slug).join(', ')}`);
    }
  });
});
