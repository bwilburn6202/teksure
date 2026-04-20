# TekSure Design Critique — April 2, 2026

**Overall Score: 7.5/10**

---

## Scores by Category

| Category | Score | Summary |
|----------|-------|---------|
| Accessibility & Senior UX | 9/10 | Font size toggle, senior mode, high contrast — excellent |
| Mobile Responsiveness | 8/10 | Proper breakpoints, touch targets; tablet gap |
| Plain Language | 8.5/10 | Strong for target audience; some tech jargon remains |
| Visual Consistency | 6.5/10 | Good foundation, execution gaps in spacing/colors |
| Design System Maturity | 5/10 | CSS vars defined but incomplete token system |
| Code Quality (UI) | 7/10 | Some oversized files, mostly clean |

---

## Critical Issues (Fix First)

### 1. Two Navbar Components
- `src/components/Navbar.tsx` AND `src/components/layout/Navbar.tsx`
- Different feature sets (one has all accessibility toggles, other has only font size)
- **Action:** Consolidate into single component in `layout/`

### 2. Hardcoded Colors Breaking Design System
- `News.tsx`, `Blog.tsx`, `ContentBadge.tsx` use inline Tailwind colors (`bg-red-100 text-red-700`) instead of CSS variable tokens
- **Action:** Replace with semantic tokens (`--teksure-success`, `--teksure-warning`, etc.)

### 3. Button Height Inconsistency
- Buttons range from h-8 (32px) to h-12 (48px) within same pages
- Seniors need consistent 44px+ touch targets
- **Action:** Standardize on h-11 (44px) minimum for all interactive elements

### 4. Signup.tsx is a Stub
- Only 1 line of code (redirect to login)
- **Action:** Either implement full signup or remove route

---

## High Priority

### 5. Arbitrary Tailwind Values
- 45+ instances of `text-[...]` custom sizes bypass the type scale
- Mixed border-radius: `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`
- **Action:** Define and enforce a typography + radius token scale

### 6. Long Pages Missing Navigation
- Tools.tsx: 30+ tools with no pagination or section anchors
- Glossary.tsx: 100+ terms with no A-Z jump links
- **Action:** Add pagination, alphabetical index, and "back to top" buttons

### 7. Spacing Rhythm Is Ad-Hoc
- Card padding varies: p-4, p-5, p-6 used inconsistently
- Section padding: py-12, py-14, py-16 with no clear scale
- Gap values: gap-2 through gap-14 with no defined steps
- **Action:** Document and enforce a spacing scale

### 8. Missing Progress Indicators
- Multi-step forms (booking, onboarding) have inconsistent step indicators
- Button labels vary: "Next", "Continue", "Submit", "Go"
- **Action:** Standardize step indicators and CTA language

---

## Medium Priority

### 9. Template-Like Visual Feel
- Heavy reliance on default shadcn/ui without customization
- No custom illustrations, icons, or animations
- Hero section uses common patterns (large heading + search + pills)
- **Action:** Add distinctive visual elements — custom illustrations, micro-interactions

### 10. Tablet Breakpoint Gap
- Jumps from mobile (sm: 640px) to desktop (lg: 1024px)
- No tablet-specific (768-1024px) optimizations
- **Action:** Add md: breakpoint treatments for iPad-class devices

### 11. Console.tsx Is 43KB
- Single file handling multiple admin tabs
- **Action:** Split into sub-components per tab

### 12. Missing Breadcrumbs
- Only GuideDetail has breadcrumb navigation
- Other detail pages (blog posts, tool pages) lack context
- **Action:** Add breadcrumbs to all detail/nested pages

---

## Strengths Worth Preserving

1. **Accessibility features are best-in-class** — Senior Mode, Font Size Toggle (4 levels), High Contrast, Dark Mode, Reduced Motion all work well
2. **Lazy-loaded routes** — 100+ routes with code-splitting and Suspense
3. **Proper semantic HTML** — header, nav, section, footer used correctly
4. **Skip-to-content link** and proper ARIA attributes throughout
5. **Offline support** with service worker and offline banner (`role="alert"`)
6. **SEO** — Helmet meta tags and JSON-LD structured data
7. **Glass morphism navbar** — Modern, polished header aesthetic

---

## Quick Wins (< 1 hour each)

- [ ] Delete `src/components/Navbar.tsx` (keep layout version)
- [ ] Replace hardcoded colors in News.tsx with design tokens
- [ ] Add `min-h-[44px]` to all Button variants in shadcn config
- [ ] Add "Back to top" button component for long pages
- [ ] Standardize CTA button text ("Continue" everywhere)

---

*Generated automatically by scheduled design critique task.*
