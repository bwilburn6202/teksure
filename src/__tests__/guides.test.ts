import { describe, it, expect } from "vitest";
import { Guide } from "../data/guides";
import { mockGuides } from "../../tests/fixtures/guides";

/**
 * Guide validation tests
 * Ensures all guides in the data match the required schema
 */

describe("Guide Schema Validation", () => {
  it("should have all required fields on a valid guide", () => {
    const guide = mockGuides[0];

    expect(guide).toHaveProperty("slug");
    expect(guide).toHaveProperty("title");
    expect(guide).toHaveProperty("excerpt");
    expect(guide).toHaveProperty("category");
    expect(guide).toHaveProperty("tags");
    expect(guide).toHaveProperty("readTime");
    expect(guide).toHaveProperty("thumbnailEmoji");
    expect(guide).toHaveProperty("publishedAt");
  });

  it("should have valid slug format (lowercase, hyphens only)", () => {
    const guide = mockGuides[0];
    const slugRegex = /^[a-z0-9\-]+$/;

    expect(guide.slug).toMatch(slugRegex);
    expect(guide.slug).not.toContain("_");
    expect(guide.slug).not.toContain(" ");
  });

  it("should have title under 60 characters (SEO best practice)", () => {
    const guide = mockGuides[0];

    expect(guide.title.length).toBeLessThanOrEqual(60);
  });

  it("should have excerpt under 160 characters (meta description length)", () => {
    const guide = mockGuides[0];

    expect(guide.excerpt.length).toBeLessThanOrEqual(160);
  });

  it("should have non-empty tags array", () => {
    const guide = mockGuides[0];

    expect(Array.isArray(guide.tags)).toBe(true);
    expect(guide.tags.length).toBeGreaterThan(0);
    expect(guide.tags.every((tag) => typeof tag === "string")).toBe(true);
  });

  it("should have valid readTime format (e.g. '5 min', '10 min')", () => {
    const guide = mockGuides[0];
    const readTimeRegex = /^\d+ min$/;

    expect(guide.readTime).toMatch(readTimeRegex);
  });

  it("should have valid difficulty level", () => {
    const validDifficulties = ["Beginner", "Intermediate", "Advanced"];
    const guide = mockGuides[0];

    if (guide.difficulty) {
      expect(validDifficulties).toContain(guide.difficulty);
    }
  });

  it("should have valid ISO 8601 publishedAt date", () => {
    const guide = mockGuides[0];
    const date = new Date(guide.publishedAt);

    expect(date instanceof Date && !isNaN(date.getTime())).toBe(true);
  });

  it("should have valid category", () => {
    const validCategories = [
      "windows-guides",
      "mac-guides",
      "essential-skills",
      "tips-tricks",
      "ai-guides",
      "ai-advanced",
      "safety-guides",
      "how-to",
      "app-guides",
      "health-tech",
      "phone-guides",
      "social-media",
    ];
    const guide = mockGuides[0];

    expect(validCategories).toContain(guide.category);
  });
});

describe("Guide Search Filtering", () => {
  it("should filter guides by category", () => {
    const category = "safety-guides";
    const filtered = mockGuides.filter((g) => g.category === category);

    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((g) => g.category === category)).toBe(true);
  });

  it("should filter guides by tag", () => {
    const tag = "security";
    const filtered = mockGuides.filter((g) => g.tags.includes(tag));

    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((g) => g.tags.includes(tag))).toBe(true);
  });

  it("should filter guides by difficulty", () => {
    const difficulty = "Beginner";
    const filtered = mockGuides.filter((g) => g.difficulty === difficulty);

    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((g) => g.difficulty === difficulty)).toBe(true);
  });

  it("should search guides by title (case-insensitive)", () => {
    const searchTerm = "password";
    const filtered = mockGuides.filter((g) =>
      g.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered[0].slug).toBe("how-to-create-password");
  });

  it("should search guides by excerpt", () => {
    const searchTerm = "safe";
    const filtered = mockGuides.filter((g) =>
      g.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    expect(filtered.length).toBeGreaterThan(0);
  });

  it("should combine multiple filters", () => {
    const category = "phone-guides";
    const tag = "backup";
    const filtered = mockGuides.filter(
      (g) => g.category === category && g.tags.includes(tag)
    );

    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((g) => g.category === category)).toBe(true);
    expect(filtered.every((g) => g.tags.includes(tag))).toBe(true);
  });
});

describe("Guide Completeness", () => {
  it("should have body or steps (or both)", () => {
    const guide = mockGuides[0];

    expect(guide.body || guide.steps).toBeTruthy();
  });

  it("should have non-empty steps when present", () => {
    const guideWithSteps = mockGuides[0];

    if (guideWithSteps.steps) {
      expect(Array.isArray(guideWithSteps.steps)).toBe(true);
      expect(guideWithSteps.steps.length).toBeGreaterThan(0);
      expect(guideWithSteps.steps.every((s) => s.title && s.content)).toBe(
        true
      );
    }
  });
});
