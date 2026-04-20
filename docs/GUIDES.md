# TekSure Guide Authoring Guide

How to create, edit, and maintain TekSure's educational guides.

---

## Audience

- **Primary**: Adults 55+ with limited tech experience
- **Secondary**: Anyone overwhelmed by technology
- **Reading level**: 6th grade

---

## Writing Rules

| Do | Don't |
|----|-------|
| "Click the blue **Send** button" | "Submit the form" |
| "This is your Wi-Fi password" | "Enter the WPA2 pre-shared key" |
| "If something goes wrong, close the window" | "Terminate the process" |

1. Use **"you" and "your"** (second person)
2. **One action per step** -- never combine actions
3. **Name what to click exactly** -- "Click the green **Start** button"
4. **No jargon** without parenthetical explanation
5. **Short sentences** -- under 20 words
6. **Active voice** -- "Click the button" not "The button should be clicked"
7. **Reassure** -- "This is normal" or "Don't worry"
8. **Warn about consequences** -- use the `warning` field

---

## Guide Structure

```typescript
interface Guide {
  slug: string;              // URL: /guides/your-slug
  title: string;             // Page heading
  excerpt: string;           // 1-2 sentence summary
  category: GuideCategory;   // One of 12 categories
  tags: string[];            // Search keywords
  readTime: string;          // "5 min"
  thumbnailEmoji: string;    // Card emoji
  publishedAt: string;       // "2026-04-02"
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  videoUrl?: string;         // YouTube embed URL
  steps?: GuideStep[];       // Step-by-step instructions
}

interface GuideStep {
  title: string;             // "Step 1: Open Settings"
  content: string;           // Plain text instructions
  tip?: string;              // Green callout
  warning?: string;          // Red callout
  screenshotUrl?: string;    // /screenshots/platform/slug-step-N.png
  screenshotAlt?: string;    // Accessibility alt text
  annotations?: ScreenshotAnnotation[];
}
```

---

## Categories

| Category | Slug |
|----------|------|
| Windows Guides | `windows-guides` |
| Mac Guides | `mac-guides` |
| Essential Skills | `essential-skills` |
| Tips & Tricks | `tips-tricks` |
| AI Guides | `ai-guides` |
| AI Deep Dives | `ai-advanced` |
| Safety & Privacy | `safety-guides` |
| How-To Guides | `how-to` |
| Apps & Services | `app-guides` |
| Health & Wellness Tech | `health-tech` |
| Phone & Tablet | `phone-guides` |
| Social Media | `social-media` |

---

## Example Guide

```typescript
{
  slug: 'connect-bluetooth-speaker',
  title: 'How to Connect a Bluetooth Speaker to Your Phone',
  excerpt: 'Pair a wireless speaker with your phone to play music.',
  category: 'phone-guides',
  tags: ['bluetooth', 'speaker', 'music', 'wireless'],
  readTime: '4 min',
  thumbnailEmoji: '🔊',
  publishedAt: '2026-04-02',
  difficulty: 'Beginner',
  steps: [
    {
      title: 'Turn on the speaker',
      content: 'Press and hold the power button until you see a flashing light.',
      tip: 'If the light is solid, the speaker may be connected to another device.',
    },
    {
      title: 'Open Bluetooth settings',
      content: 'On iPhone: Settings > Bluetooth. On Android: Settings > Connected devices.',
      screenshotUrl: '/screenshots/phone/bluetooth-settings.png',
      screenshotAlt: 'Phone Bluetooth settings with toggle ON',
    },
    {
      title: 'Tap your speaker name',
      content: 'When your speaker appears in the list, tap it to connect.',
      warning: 'If you do not see it, make sure it is in pairing mode and within 30 feet.',
    },
  ],
}
```

---

## Screenshots

**Path**: `/public/screenshots/{platform}/{guide-slug}-step-{n}.png`

**Requirements**: 1280x800+, PNG, no personal data, highlight the target area.

### Annotations

```typescript
annotations: [
  { type: 'callout', x: 50, y: 30, label: '1' },           // Numbered circle
  { type: 'arrow', x: 50, y: 40, direction: 'down' },       // Pointer
  { type: 'highlight', x: 20, y: 50, width: 60, height: 15 }, // Box
]
```

Coordinates are percentages (0-100) from top-left.

---

## Approved Sources

- Apple Support (support.apple.com)
- Google Support (support.google.com)
- Microsoft Support (support.microsoft.com)
- AARP Technology (aarp.org/technology)
- How-To Geek (howtogeek.com)
- FTC Consumer Advice (consumer.ftc.gov)

Always adapt to TekSure's plain-English style. Never copy text directly.

---

## Quality Checklist

- [ ] Title starts with "How to"
- [ ] Excerpt under 160 characters
- [ ] Correct category
- [ ] Relevant tags
- [ ] Realistic read time
- [ ] Each step = ONE action
- [ ] No jargon without explanation
- [ ] Warnings for destructive actions
- [ ] Screenshots have alt text
- [ ] Slug is URL-friendly
- [ ] Renders at `/guides/{slug}`
