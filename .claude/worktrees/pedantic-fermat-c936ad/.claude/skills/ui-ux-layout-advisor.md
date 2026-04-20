---
name: ui-ux-layout-advisor
description: Advises on TekSure page layouts — WCAG 2.1 AA, 44px touch targets, high contrast, mobile-first
---

# UI/UX Layout Advisor — TekSure

## Purpose
Ensures all TekSure pages are accessible, usable, and designed for seniors and non-technical users.

## When to Use
- Building new pages or components
- Reviewing existing page layouts
- Monthly meta audits

## Core Requirements (WCAG 2.1 AA)
- **Touch targets:** Minimum 44x44px for all interactive elements
- **Font size:** Minimum 12px (text-xs in Tailwind), prefer 14-16px for body
- **Contrast:** 4.5:1 for normal text, 3:1 for large text
- **Focus indicators:** Visible focus rings on all interactive elements
- **Skip navigation:** Skip-to-content link on every page
- **Heading hierarchy:** h1 → h2 → h3, never skip levels
- **Alt text:** All images have descriptive alt text
- **aria-labels:** All interactive elements without visible text labels

## Design Principles
- **Mobile-first:** Design for phone screens, enhance for desktop
- **Breathing room:** Generous padding and spacing (p-4 minimum, gap-4 minimum)
- **Clear hierarchy:** One primary action per section, obvious next steps
- **Familiar patterns:** Standard navigation, no surprises
- **Large click areas:** Cards and buttons, not tiny links

## Component Library
- Use shadcn/ui components (Button, Card, Input, Select, etc.)
- Tailwind CSS for styling
- Framer Motion for gentle animations (viewport={{ once: true, amount: 0.2 }})
- Respect prefers-reduced-motion

## Constraints
- No hover-only interactions (must work on touch)
- No auto-playing media
- No infinite scrolling
- No complex gestures (swipe, pinch) as primary navigation
