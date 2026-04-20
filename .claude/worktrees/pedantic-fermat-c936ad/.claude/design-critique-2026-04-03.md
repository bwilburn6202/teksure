# TekSure Design Critique — 2026-04-03

## Overall Assessment: Strong (B+)

TekSure has a well-architected design system with genuine accessibility investment (Senior Mode, High Contrast, reduced motion, 44px+ touch targets). The component library is consistent, responsive design is solid, and the semantic HTML is above average. Below are the specific issues found, ranked by priority.

---

## HIGH Priority

### 1. Senior Mode animation override is broken
**File:** `src/index.css:214`
```css
transition-duration: 0.05ms !important;
```
This sets transitions to 0.05ms, which is effectively invisible — no animation plays at all. If the intent is to reduce motion for seniors, use `100ms` or `150ms` so transitions are still perceptible but calmer. If the intent is to fully disable, use `0ms` explicitly (and document that choice).

**Impact:** Senior users get no visual feedback on state transitions, which can be disorienting.

### 2. Homepage has zero `alt`, `aria-label`, or `role` attributes
**File:** `src/pages/Index.tsx`
The homepage — the most visited page — has no explicit accessibility attributes on interactive elements beyond what shadcn/ui provides by default. Guide card images rely on `getGuideThumbnailUrl()` but there's no `alt` text set on the `<img>` tags. Screen reader users get no context on card images.

**Impact:** WCAG 2.1 AA compliance gap on the most important page.

### 3. No breadcrumb structured data (JSON-LD) on guide pages
**Files:** `src/components/SEOHead.tsx`, `src/pages/GuideDetail.tsx`
The breadcrumb UI component exists and is used on GuideDetail, but there's no `BreadcrumbList` JSON-LD schema emitted in `<SEOHead>`. Google Search Console will not generate breadcrumb rich results.

**Impact:** Missed SEO opportunity for the site's primary content (700+ guides).

---

## MEDIUM Priority

### 4. Mobile nav menu width is fixed at `w-72` (288px)
**File:** `src/components/layout/Navbar.tsx:222`
On 375px-wide devices (iPhone SE, older Android), the menu takes up 77% of screen width. The remaining 87px sliver of the page is still visible but not interactive. Consider `w-[85vw] max-w-72` for adaptive sizing, or go full-width on very small screens.

### 5. TekBot uses raw Tailwind color (`text-green-500`) outside the design system
**File:** `src/components/TekBot.tsx:441`
The Android device icon uses `text-green-500` which bypasses the project's HSL-based color tokens. This will not respect dark mode or high-contrast mode overrides. Use `text-teksure-success` or a semantic class instead.

### 6. Homepage visual hierarchy could be stronger
The "Browse by Category" section uses `bg-muted/40` which is barely distinguishable from the white background above it. For a site targeting seniors, section boundaries should be more visually distinct. Consider `bg-muted/60` or a visible top border.

### 7. No `focus-visible` rings on homepage interactive cards
Guide cards and quick-fix cards on the homepage are wrapped in `<Link>` components but don't have explicit focus ring styling. Keyboard-only users may not see which card is focused. The shadcn Button component handles this, but raw Link wrappers do not.

---

## LOW Priority

### 8. Footer link contrast
**File:** `src/components/layout/Footer.tsx`
Footer links use `text-foreground/70` opacity. This creates a ~4.5:1 contrast ratio against the background in light mode (borderline AA), but may dip below in dark mode depending on the background. Verify with a contrast checker.

### 9. TekBot layout jump when related guides appear
The chat panel jumps from 390px to 620px wide when `pageRelatedGuides` becomes non-empty. This is a jarring layout shift. Consider either always reserving the sidebar space (collapsed) or animating the width transition.

### 10. Tailwind config has no custom font-size scale
The project relies on Tailwind's default type scale. For a site with distinct "senior mode" needs, a custom scale with documented hierarchy (hero, h1, h2, body, caption) would prevent inconsistent font sizing across 100+ pages.

### 11. `NewsletterSignup` success state uses `text-green-500`
**File:** `src/components/NewsletterSignup.tsx:106`
Same issue as #5 — raw Tailwind color bypassing the design system.

---

## What's Working Well

- **Accessibility infrastructure** is excellent — Senior Mode, High Contrast, reduced motion, and skip-to-content are all properly implemented with context providers and CSS-driven styling.
- **Component consistency** via shadcn/ui with proper variants (button sizes, states, focus management).
- **Responsive design** is mobile-first throughout with appropriate breakpoint usage.
- **Dark mode** has full color token coverage in both Tailwind config and CSS custom properties.
- **Print styles** exist for guides — a thoughtful touch for the target audience.
- **SEO** is solid with JSON-LD, OG tags, and canonical URLs on most pages.
- **Touch targets** meet WCAG guidelines (44px minimum, 52px in Senior Mode).

---

## Recommended Next Actions (by effort)

| Effort | Action |
|--------|--------|
| 5 min | Fix Senior Mode transition duration (0.05ms -> 100ms) |
| 10 min | Replace `text-green-500` with semantic color tokens (2 files) |
| 15 min | Add `alt` attributes to homepage guide card images |
| 15 min | Add `focus-visible:ring-2` to homepage Link card wrappers |
| 30 min | Add BreadcrumbList JSON-LD to SEOHead for guide pages |
| 30 min | Make mobile nav width responsive (`w-[85vw] max-w-72`) |

---

*Generated by automated design critique — 2026-04-03*
