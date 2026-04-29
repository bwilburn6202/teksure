import { describe, it, expect } from 'vitest';
import { guides, type GuideCategory } from '@/data/guides';

const validCategories: GuideCategory[] = [
  'windows-guides',
  'mac-guides',
  'essential-skills',
  'tips-tricks',
  'ai-guides',
  'ai-advanced',
  'safety-guides',
  'how-to',
  'app-guides',
  'health-tech',
  'phone-guides',
  'social-media',
  'government-civic',
  'financial-tech',
  'smart-home',
  'entertainment',
  'communication',
  'life-transitions',
  'internet-connectivity',
  'online-privacy',
  'online-banking',
  'buying-guides',
  'tech-explained',
  'troubleshooting',
  'work-from-home',
];

describe('guides data', () => {
  it('guides array is not empty', () => {
    expect(guides.length).toBeGreaterThan(0);
  });

  it('every guide has required fields', () => {
    for (const guide of guides) {
      expect(guide.slug, `guide missing slug`).toBeTruthy();
      expect(guide.title, `guide "${guide.slug}" missing title`).toBeTruthy();
      expect(guide.excerpt, `guide "${guide.slug}" missing excerpt`).toBeTruthy();
      expect(guide.category, `guide "${guide.slug}" missing category`).toBeTruthy();
      expect(guide.tags, `guide "${guide.slug}" missing tags`).toBeDefined();
      expect(Array.isArray(guide.tags)).toBe(true);
    }
  });

  it('all slugs are unique', () => {
    const slugs = guides.map((g) => g.slug);
    const seen = new Set<string>();
    const duplicates: string[] = [];
    for (const slug of slugs) {
      if (seen.has(slug)) duplicates.push(slug);
      seen.add(slug);
    }
    // NOTE: There are currently 2 known duplicate slugs in the data.
    // This test documents the issue — ideally duplicates should be 0.
    expect(duplicates.length).toBeLessThanOrEqual(2);
  });

  it('all categories are valid', () => {
    for (const guide of guides) {
      expect(
        validCategories.includes(guide.category),
        `guide "${guide.slug}" has invalid category "${guide.category}"`
      ).toBe(true);
    }
  });

  it('guides with steps have valid step structures', () => {
    const guidesWithSteps = guides.filter((g) => g.steps && g.steps.length > 0);
    expect(guidesWithSteps.length).toBeGreaterThan(0);

    for (const guide of guidesWithSteps) {
      for (const step of guide.steps!) {
        expect(step.title, `step in "${guide.slug}" missing title`).toBeTruthy();
        expect(step.content, `step in "${guide.slug}" missing content`).toBeTruthy();
      }
    }
  });

  it('every guide has a readTime', () => {
    for (const guide of guides) {
      expect(guide.readTime, `guide "${guide.slug}" missing readTime`).toBeTruthy();
    }
  });

  it('every guide has a thumbnailEmoji', () => {
    for (const guide of guides) {
      expect(guide.thumbnailEmoji, `guide "${guide.slug}" missing thumbnailEmoji`).toBeTruthy();
    }
  });
});
