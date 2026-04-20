import { describe, it, expect, beforeEach } from 'vitest';
import {
  getFavorites,
  addFavorite,
  removeFavorite,
  isFavorite,
} from '@/lib/favorites';

const guideA = { slug: 'guide-a', title: 'Guide A', excerpt: 'Excerpt A' };
const guideB = { slug: 'guide-b', title: 'Guide B', excerpt: 'Excerpt B' };

describe('favorites', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('getFavorites', () => {
    it('returns empty array when no favorites exist', () => {
      expect(getFavorites()).toEqual([]);
    });

    it('returns empty array when localStorage contains invalid JSON', () => {
      localStorage.setItem('teksure_favorites', '{bad');
      expect(getFavorites()).toEqual([]);
    });
  });

  describe('addFavorite and getFavorites round-trip', () => {
    it('adds a favorite and retrieves it', () => {
      addFavorite(guideA);
      const favs = getFavorites();
      expect(favs).toHaveLength(1);
      expect(favs[0].slug).toBe('guide-a');
      expect(favs[0].title).toBe('Guide A');
    });

    it('does not duplicate when adding the same guide twice', () => {
      addFavorite(guideA);
      addFavorite(guideA);
      expect(getFavorites()).toHaveLength(1);
    });

    it('stores multiple favorites', () => {
      addFavorite(guideA);
      addFavorite(guideB);
      expect(getFavorites()).toHaveLength(2);
    });
  });

  describe('removeFavorite', () => {
    it('removes the correct item', () => {
      addFavorite(guideA);
      addFavorite(guideB);
      removeFavorite('guide-a');
      const favs = getFavorites();
      expect(favs).toHaveLength(1);
      expect(favs[0].slug).toBe('guide-b');
    });

    it('does nothing when removing a non-existent favorite', () => {
      addFavorite(guideA);
      removeFavorite('nonexistent');
      expect(getFavorites()).toHaveLength(1);
    });
  });

  describe('isFavorite', () => {
    it('returns true for a favorited guide', () => {
      addFavorite(guideA);
      expect(isFavorite('guide-a')).toBe(true);
    });

    it('returns false for a non-favorited guide', () => {
      expect(isFavorite('guide-a')).toBe(false);
    });
  });
});
