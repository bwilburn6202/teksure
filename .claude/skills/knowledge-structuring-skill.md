---
name: knowledge-structuring-skill
description: Organizes unstructured tech help into TekSure guide format with steps, tips, warnings, and categories
---

# Knowledge Structuring — TekSure

## Purpose
Transforms messy, unstructured tech help content into TekSure's structured guide format.

## When to Use
- Converting body-format guides to steps format
- Organizing research findings into guide entries
- Structuring user questions into guide topics

## TekSure Guide Structure
```
{
  slug: 'kebab-case-unique',
  title: 'How to [Action]',
  excerpt: 'Under 160 chars — benefit-focused',
  category: 'Category Name',
  tags: ['tag1', 'tag2'],
  emoji: '📱',
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced',
  readTime: '5 min',
  publishedAt: 'YYYY-MM-DD',
  steps: [
    { title: 'Action verb start', description: 'Clear instruction', tip: 'optional', warning: 'optional' }
  ]
}
```

## Rules
- Each step = one clear action
- Step titles start with action verbs (Tap, Open, Click, Go to, Look for)
- Tips: helpful context, shortcuts, or source links
- Warnings: safety concerns, data loss risks, scam alerts
- Difficulty: Beginner (no prior knowledge), Intermediate (basic familiarity), Advanced (comfortable with tech)
- Category: match existing categories in guides.ts

## Constraints
- No steps that combine multiple actions
- No assumptions about prior knowledge for Beginner guides
- Always include at least one tip or warning per guide
