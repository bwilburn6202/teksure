import { describe, it, expect, beforeEach } from 'vitest';
import {
  getCompletedGuides,
  markGuideCompleted,
  isGuideCompleted,
  clearProgress,
  getProgressCount,
} from '@/lib/progress';

describe('progress', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('getCompletedGuides', () => {
    it('returns empty Set when localStorage is empty', () => {
      const result = getCompletedGuides();
      expect(result).toBeInstanceOf(Set);
      expect(result.size).toBe(0);
    });

    it('returns correct Set from localStorage data', () => {
      localStorage.setItem(
        'teksure-guide-progress',
        JSON.stringify(['guide-a', 'guide-b'])
      );
      const result = getCompletedGuides();
      expect(result.size).toBe(2);
      expect(result.has('guide-a')).toBe(true);
      expect(result.has('guide-b')).toBe(true);
    });

    it('returns empty Set when localStorage contains invalid JSON', () => {
      localStorage.setItem('teksure-guide-progress', '{invalid');
      const result = getCompletedGuides();
      expect(result.size).toBe(0);
    });
  });

  describe('markGuideCompleted', () => {
    it('adds a slug to completed guides', () => {
      markGuideCompleted('new-guide');
      const result = getCompletedGuides();
      expect(result.has('new-guide')).toBe(true);
    });

    it('does not duplicate existing slugs', () => {
      markGuideCompleted('guide-a');
      markGuideCompleted('guide-a');
      const result = getCompletedGuides();
      expect(result.size).toBe(1);
    });

    it('preserves previously completed guides', () => {
      markGuideCompleted('guide-a');
      markGuideCompleted('guide-b');
      const result = getCompletedGuides();
      expect(result.has('guide-a')).toBe(true);
      expect(result.has('guide-b')).toBe(true);
    });
  });

  describe('isGuideCompleted', () => {
    it('returns true for a completed guide', () => {
      markGuideCompleted('completed-guide');
      expect(isGuideCompleted('completed-guide')).toBe(true);
    });

    it('returns false for an incomplete guide', () => {
      expect(isGuideCompleted('nonexistent')).toBe(false);
    });
  });

  describe('clearProgress', () => {
    it('removes all progress data', () => {
      markGuideCompleted('guide-a');
      markGuideCompleted('guide-b');
      clearProgress();
      expect(getCompletedGuides().size).toBe(0);
    });
  });

  describe('getProgressCount', () => {
    it('returns correct counts with totalSlugs', () => {
      markGuideCompleted('guide-a');
      markGuideCompleted('guide-b');
      const result = getProgressCount(['guide-a', 'guide-b', 'guide-c']);
      expect(result.completed).toBe(2);
      expect(result.total).toBe(3);
      expect(result.pct).toBe(67);
    });

    it('returns 100% when no totalSlugs provided', () => {
      markGuideCompleted('guide-a');
      const result = getProgressCount();
      expect(result.completed).toBe(1);
      expect(result.total).toBe(1);
      expect(result.pct).toBe(100);
    });

    it('returns zeros when nothing is completed and totalSlugs given', () => {
      const result = getProgressCount(['guide-a', 'guide-b']);
      expect(result.completed).toBe(0);
      expect(result.total).toBe(2);
      expect(result.pct).toBe(0);
    });
  });
});
