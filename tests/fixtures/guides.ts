import { Guide } from "../../src/data/guides";

export const mockGuides: Guide[] = [
  {
    slug: "how-to-create-password",
    title: "How to Create a Strong Password",
    excerpt: "Learn how to create passwords that keep your accounts safe from hackers.",
    category: "safety-guides",
    tags: ["password", "security", "beginner"],
    readTime: "5 min",
    thumbnailEmoji: "🔒",
    publishedAt: "2026-01-15",
    difficulty: "Beginner",
    body: "A strong password is your first defense against hackers. Here's how to create one that actually keeps you safe...",
    steps: [
      {
        title: "Make it long",
        content: "Use at least 12 characters. The longer, the better.",
      },
      {
        title: "Mix it up",
        content: "Use uppercase, lowercase, numbers, and symbols.",
      },
      {
        title: "Avoid common words",
        content: "Don't use your name, birthdate, or dictionary words.",
      },
    ],
  },
  {
    slug: "backup-iphone-photos",
    title: "How to Back Up Your iPhone Photos",
    excerpt: "Protect your precious memories by backing up your iPhone photos to iCloud.",
    category: "phone-guides",
    tags: ["backup", "iphone", "photos"],
    readTime: "8 min",
    thumbnailEmoji: "📱",
    publishedAt: "2026-02-01",
    difficulty: "Beginner",
    body: "Your iPhone photos are precious memories. Here are three ways to make sure they're always safe...",
  },
  {
    slug: "chatgpt-beginners-guide",
    title: "ChatGPT: A Beginner's Guide",
    excerpt: "An easy introduction to ChatGPT and how to use it for everyday tasks.",
    category: "ai-guides",
    tags: ["chatgpt", "ai", "beginner"],
    readTime: "10 min",
    thumbnailEmoji: "🤖",
    publishedAt: "2026-01-20",
    difficulty: "Beginner",
    body: "ChatGPT is an AI assistant that can help you write, brainstorm, and learn...",
  },
];

export const invalidGuide: Partial<Guide> = {
  // Missing required fields: slug, title, excerpt, category, tags, readTime, thumbnailEmoji
};

export const guideWithBadExcerpt: Guide = {
  ...mockGuides[0],
  excerpt: "A".repeat(200), // Over 160 char limit
};

export const guideWithBadTitle: Guide = {
  ...mockGuides[0],
  title: "A".repeat(100), // Over typical 60 char limit
};
