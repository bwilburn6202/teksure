import { describe, it, expect } from 'vitest';
import { guides } from '../data/guides';

/**
 * Apple went from iOS 18 straight to iOS 26 in 2025 (the number now matches
 * the year after release), and iPadOS, macOS and watchOS were renumbered the
 * same way. Guides written before that change said "iOS 19", a version that
 * never shipped. Readers looking for it in Settings will not find it.
 */
const NEVER_RELEASED = /\b(iOS|iPadOS) (19|2[0-5])\b|\bios-(19|2[0-5])\b|\bmacOS 1[6-9]\b|\bmacOS 2[0-5]\b|\bwatchOS 1[2-9]\b/;

describe('OS versions in guides', () => {
  it('names no Apple version that was never released', () => {
    const hits = guides
      .filter((g) => NEVER_RELEASED.test(JSON.stringify(g)))
      .map((g) => `${g.slug}: ${JSON.stringify(g).match(NEVER_RELEASED)?.[0]}`);
    expect(hits).toEqual([]);
  });
});
