# Accessibility Audit: TekSure — Site-wide Quick Scan

**Standard:** WCAG 2.1 AA
**Date:** 2026-04-20
**Scope:** Homepage (`/`), Guides index (`/guides`), Guide detail (`/guides/:slug`), Tools index (`/tools`), Explore sitemap (`/explore`), Navbar, Footer, TekBot, shared components. Plus a site-wide sweep for skip-link wiring and `target="_blank"` safety.
**Audience context:** TekSure is built for non-technical users and seniors 60+, so accessibility regressions affect the core audience disproportionately.

---

## Summary

**Issues found:** 10 · **Critical:** 2 · **Major:** 4 · **Minor:** 4

The codebase already has strong accessibility scaffolding — a senior mode (20px base, 52px targets), high-contrast mode, font-size toggle, reduced-motion support, dark mode, 44px min-height enforcement on buttons, and a skip-to-main-content link in `App.tsx`. The findings below are wiring gaps where good primitives aren't reaching the actual pages.

The single highest-impact issue is that the existing **skip-to-content link is non-functional on ~94 of 104 pages** because they don't expose a `#main-content` anchor. That alone fails WCAG 2.4.1 across nearly the entire site.

---

## Findings

### Perceivable

| # | Issue | WCAG Criterion | Severity | Recommendation |
|---|-------|---------------|----------|----------------|
| 1 | **GuideCard image `alt={guide.title}` duplicates adjacent `<h3>` title.** Screen readers announce the title twice (once for the image, once for the heading inside the same link). | 1.1.1 Non-text Content | 🟡 Major | Set `alt=""` on the thumbnail — it's decorative next to a linked title. Already done in `GuideDetail` hero; apply the same treatment to `GuideCard` and `GuideListItem` in `src/pages/Guides.tsx`. |
| 2 | **Landing hero uses `<h2>` for the visible primary heading** ("Tech help that speaks your language.") with an `sr-only` `<h1>`. Visible heading mismatches document outline. | 1.3.1 Info and Relationships | 🟢 Minor | Promote the visible heading to `<h1>` and either drop the sr-only heading or keep it as a longer accessible name on the same element. |

### Operable

| # | Issue | WCAG Criterion | Severity | Recommendation |
|---|-------|---------------|----------|----------------|
| 3 | **Skip-to-content link is broken on ~94 of 104 pages.** The `<a href="#main-content">` exists in `App.tsx`, but 75 pages render `<main>` without `id="main-content"` and 19 render no `<main>` at all (including Guides, GuideDetail, Explore). Keyboard users can't bypass the 20+ nav links on each page. | 2.4.1 Bypass Blocks | 🔴 Critical | Add `id="main-content"` to every `<main>`. For pages without `<main>`, wrap the primary content wrapper as `<main id="main-content">`. |
| 4 | **Guides, GuideDetail, and Explore lack a `<main>` landmark** entirely. Screen-reader users can't jump to the primary region; assistive-tech landmark navigation fails. | 1.3.1 / 4.1.2 | 🔴 Critical | Wrap top-level content in `<main id="main-content">` (GuideDetail already has `<article>` but it should be nested inside `<main>`). |
| 5 | **49 `target="_blank"` links missing `rel="noopener noreferrer"`.** 122 total, only 73 are protected. Beyond the well-known security risk, missing `rel` loses opener context in some screen readers. | 3.2.5 (AAA) + security best practice | 🟡 Major | Add `rel="noopener noreferrer"` to every external `target="_blank"` link. |
| 6 | **External links don't announce they open a new window.** Users relying on screen readers can be disoriented when focus unexpectedly lands in a new tab. | 2.4.4 / 3.2.5 | 🟡 Major | Add a visually-hidden "(opens in a new tab)" suffix or an `aria-label` that includes the phrase, on external links. Lowest-touch version: add the `ExternalLink` icon with `aria-label`. Partial fix: focus on the Sources, GuideDetail, and Footer external links first. |
| 7 | **Custom mobile menu in `Navbar.tsx` is `role="dialog"` + `aria-modal="true"` but has no focus trap.** Tab can escape to the underlying page content while the menu overlay is open. Escape-to-close also not wired. | 2.1.2 No Keyboard Trap (inverse) / 2.4.3 Focus Order | 🟡 Major | Either swap to Radix `Dialog` (which handles focus trap, Escape, and restore automatically) or add focus-trap logic + Escape handler. |

### Understandable

| # | Issue | WCAG Criterion | Severity | Recommendation |
|---|-------|---------------|----------|----------------|
| 8 | **Landing `<textarea>` submit button's inner `ArrowUp` icon isn't `aria-hidden`.** The button has an `aria-label="Search TekSure"` so name is present, but the duplicated icon name can leak. | 4.1.2 Name, Role, Value | 🟢 Minor | Add `aria-hidden="true"` to the `ArrowUp` icon inside the submit button in `src/pages/Index.tsx`. |

### Robust

| # | Issue | WCAG Criterion | Severity | Recommendation |
|---|-------|---------------|----------|----------------|
| 9 | **Guides list view difficulty indicator uses color + dot-count.** The container `<span>` has `aria-label={guide.difficulty ?? ''}` which gives an accessible name when difficulty exists, but the empty-string fallback yields a span labeled with nothing. Edge case only — difficulty is almost always present. | 1.4.1 Use of Color (backup provided) | 🟢 Minor | Conditionally render the `aria-label` only when `guide.difficulty` is set; otherwise omit the empty label. |
| 10 | **Some `<div onClick>` handlers without keyboard alternatives** (e.g. `TechEmergencyKit.tsx:117`). Only affects a tool page, not in the core scope. | 2.1.1 Keyboard | 🟢 Minor | Convert to `<button>` or add `role="button" tabIndex={0}` + key handler. Out of scope for this sweep; tracked for follow-up. |

---

## Color Contrast Check

Tokenized colors in `src/index.css`, spot-checked against the Landing v2 palette.

| Element | Foreground | Background | Ratio | Required | Pass? |
|---------|-----------|------------|-------|----------|-------|
| Body text (light) | `hsl(220 20% 14%)` ≈ #1c2430 | `hsl(40 20% 99%)` ≈ #fcfbf9 | ~14.6:1 | 4.5:1 | ✅ |
| Muted text (light) | `hsl(220 8% 46%)` ≈ #6c7380 | `hsl(40 20% 99%)` | ~4.78:1 | 4.5:1 | ✅ (tight) |
| Primary on primary-fg | `hsl(210 70% 46%)` ≈ #2473c7 | `#ffffff` | ~5.1:1 | 4.5:1 | ✅ |
| Body text (dark) | `#ffffff` | `hsl(220 72% 7%)` ≈ #050d1f | ~18.6:1 | 4.5:1 | ✅ |
| Muted text (dark) | `hsl(220 12% 68%)` ≈ #a2a9b5 | `hsl(220 72% 7%)` | ~8.7:1 | 4.5:1 | ✅ |
| Primary on dark bg | `hsl(219 83% 51%)` ≈ #1d5fe8 | `hsl(220 72% 7%)` | ~3.35:1 | 3:1 (UI comp) / 4.5:1 (text) | ✅ for UI, ⚠️ for body text |
| `text-muted-foreground/60` uppercase labels | `rgba(108,115,128,0.6)` on light bg | — | ~2.9:1 | 4.5:1 (small) / 3:1 (large) | ⚠️ These are 10-11px uppercase labels in the nav popover and footer column headers. Below AA for small text. |
| `text-muted-foreground/40` keyboard hint "⌘K" | `rgba(108,115,128,0.4)` | — | ~2.0:1 | — | ⚠️ Decorative-ish (aria-hidden), but still visually weak. |

**Action:** The `/60` and `/40` opacity variants are used for de-emphasized metadata, but at 10-11px uppercase they fall below AA. Raise them to `/70` at minimum, or flip to semantic `text-muted-foreground` without opacity for the column headers that screen readers announce as navigation labels.

---

## Keyboard Navigation

| Element | Tab Order | Enter/Space | Escape | Issue |
|---------|-----------|-------------|--------|-------|
| Skip link (`App.tsx`) | First | ✅ Activates | — | ⚠️ Target missing on ~94 pages → link visible on focus but jump goes nowhere |
| Navbar "Resources" popover | ✅ | ✅ (Radix) | ✅ (Radix) | OK |
| Display settings popover | ✅ | ✅ (Radix) | ✅ (Radix) | OK |
| Mobile menu (custom dialog) | ✅ | ✅ | ❌ **No Escape handler, no focus trap** | Must fix |
| TekBot chat | ✅ | ✅ | ✅ | OK — `role="dialog"`, `aria-haspopup`, labeled input |
| Search modal | Not inspected | — | — | Likely OK (Radix) — worth a spot-check |

---

## Screen Reader

| Element | Announced As | Issue |
|---------|-------------|-------|
| GuideCard image | "[guide title], image, link, [guide title], [excerpt]" | Title spoken twice |
| Landing hero | "heading 2" | No h1 in reading order (h1 is sr-only but later in DOM — actually before, but visually suppressed) |
| External link in Sources | "[link text], link" | No hint it opens in a new window |
| Mobile menu overlay | "Navigation menu, dialog" | Good, but focus can escape the dialog |
| Navbar logo | "TekSure home, link" | ✅ |
| Difficulty dots (Guides list view) | "[difficulty], •" | ✅ — label applied |

---

## Priority Fixes

1. **🔴 Wire the skip link to every page.** Add `id="main-content"` to every `<main>` and wrap the 19 page bodies that don't have a `<main>`. Single biggest accessibility win. (2.4.1)
2. **🔴 Add `<main>` to Guides, GuideDetail, Explore.** Restores landmark navigation on the highest-traffic surfaces. (1.3.1 / 4.1.2)
3. **🟡 `rel="noopener noreferrer"` on all `target="_blank"` links.** Security + screen-reader context. Scriptable site-wide. (3.2.5)
4. **🟡 Fix the custom mobile menu's focus trap + Escape handler.** Or swap to Radix Dialog. (2.4.3)
5. **🟡 Fix GuideCard `alt` duplication.** Two-character change, immediate SR improvement. (1.1.1)
6. **🟡 Announce external links as "(opens in a new tab)"** at least on Sources, GuideDetail, and Footer. (2.4.4)
7. **🟢 Raise `/60` opacity on 10-11px uppercase labels** to `/70` or full `text-muted-foreground`. (1.4.3)
8. **🟢 Landing page: promote visible heading to `<h1>`.** (1.3.1)
9. **🟢 Landing submit-button icon `aria-hidden`.** (4.1.2)
10. **🟢 `TechEmergencyKit.tsx` div-onClick** — follow-up, not in this sweep. (2.1.1)

---

## Out-of-scope / Deferred

- `TechEmergencyKit.tsx` and similar tool pages using `<div onClick>` without keyboard handlers — a separate pass across `src/pages/tools/*`.
- Manual VoiceOver / NVDA testing — this scan is primarily static analysis; a live SR pass would find more.
- Image alt review of the 1,200+ guide thumbnails — assumed decorative because the linked `<h3>` title always accompanies them, but worth a formal spot-check.
- Form validation messaging (`3.3.1` / `3.3.3`) on the booking / contact flows — not in the key-page sweep.
- Video captions / transcripts — not audited here.
