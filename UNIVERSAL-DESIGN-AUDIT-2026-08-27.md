# TekSure Universal Design Audit
**Date:** August 27, 2026
**Scope:** Accessibility (WCAG 2.1 AA) · Design-system consistency · Responsiveness · Internationalization
**Codebase:** 3,118 page components (2,958 of them under `src/pages/tools/`), 73 shared components

---

## Headline finding

**The brand palette itself fails WCAG AA.** Every primary button, every accent CTA, and every violet/ocean link on the site is below the 4.5:1 threshold. This is one file (`src/index.css`) and it fixes thousands of pages at once — it is by far the highest-leverage change available.

Measured contrast ratios against current tokens:

| Pair | Ratio | AA (4.5:1) |
|---|---|---|
| White text on `--primary` `#847dff` (default button) | **3.30** | ❌ fail |
| White text on `--accent` `#00b3dd` | **2.47** | ❌ fail |
| `#847dff` text on light canvas `#f5f5f7` | **3.03** | ❌ fail |
| `#00b3dd` text on light canvas | **2.27** | ❌ fail |
| Sky `#90b8f0` on light canvas | **1.87** | ❌ fail |
| Lavender `#d1c9ff` on white | **1.55** | ❌ fail |
| `--muted-foreground` `#6a6b6b` on canvas | 4.91 | ✅ pass (thin margin) |
| `#847dff` on dark card `#2e2e2e` | 4.11 | ❌ fail |
| `#00b3dd` on dark card | 5.49 | ✅ pass |
| Dark `--muted-foreground` `#cacaca` on `#0f1011` | 11.62 | ✅ pass |

**Fix:** darken the light-mode variants of violet and ocean while keeping the brand hue. Targets that pass at 4.5:1 on white: violet ≈ `#5a4fd6`, ocean ≈ `#00728f`. Keep the current bright values for dark mode, where they already work. This is a token-level change — no page edits required.

---

## 1. Accessibility

**Already in good shape** — worth saying, because the foundations are better than most sites this size:

- Skip-to-main-content link exists (`App.tsx`)
- 2,966 of 3,118 pages use a `<main>` landmark
- 423 `aria-label` usages; only 1 `onClick` on a non-interactive `div`/`span`
- `focus-visible:ring-2` is baked into the shared `Button` component
- Senior Mode context + toggle, root font size raised to 17px
- `prefers-reduced-motion` is respected in `index.css`

**Gaps, ranked:**

| # | Issue | Evidence | Effort |
|---|---|---|---|
| A1 | Brand tokens fail contrast (above) | 6 of 11 measured pairs fail | **1 file** |
| A2 | Body copy is `text-sm` / `text-xs` almost everywhere — ~13px–14px for an audience of seniors | 15,879 `text-sm` + 2,463 `text-xs` in `pages/tools` alone; 580 more `text-xs` elsewhere | scripted find/replace |
| A3 | `size="sm"` buttons are `h-9` with `text-xs` — 36px tall, under the 44px touch-target minimum | 81 `size="icon"` (h-11, OK) but `sm` used widely | 1 file (`ui/button.tsx`) |
| ~~A4~~ | ~~24 of 37 `<img>` tags have no `alt`~~ — **false positive, corrected.** All 37 have `alt`; the original grep missed multi-line tags. | re-checked with a tag parser | none |
| A5 | 152 pages have no `<main>` landmark | 3,118 − 2,966 | scripted |
| A6 | 107 files use light-only raw palette (`bg-amber-50`, `bg-gray-50`…) with **no** `dark:` variant — these become unreadable in dark mode | grep | scripted |

---

## 2. Design-system consistency

The token system in `src/index.css` is genuinely well built — a full Origin palette, light/dark parity, zone tints, sidebar tokens. The problem is that **17,626 class usages bypass it** and hardcode Tailwind palette colors, plus 68 hardcoded hex values in `className`.

Distribution: 13,292 of those are inside `pages/tools/` (the generated pages), 4,334 in everything else.

Most common offenders: `text-gray-500` (453), `bg-amber-50` (407), `text-gray-900` (400), `bg-amber-950` (358), `text-amber-700` (355), `text-gray-400` (352).

**Recommended mapping:**

| Raw class | Token replacement |
|---|---|
| `text-gray-900` / `text-gray-700` | `text-foreground` |
| `text-gray-500` / `text-gray-400` | `text-muted-foreground` |
| `bg-gray-50` | `bg-muted` |
| `border-gray-200` | `border-border` |
| `bg-amber-50` + `bg-amber-950` pair | new `--warn-surface` token |
| `bg-green-50` / `bg-emerald-50` | new `--success-surface` token |
| `bg-red-50` / `bg-red-950` | `bg-destructive/10` |
| `text-red-600/700` | `text-destructive` |

Three new semantic surface tokens (`--warn-surface`, `--success-surface`, `--info-surface`, each with a light and dark value) would absorb roughly 60% of the raw usages and make dark mode correct by construction.

---

## 3. Responsiveness

Best condition of the four. Mobile-first Tailwind is used consistently, `MobileBottomNav` exists, `overflow-x: hidden` is set on `body`.

Remaining issues:

- **44 instances** of `grid-cols-3` / `grid-cols-4` with no `sm:`/`md:`/`lg:` prefix — these stay 3–4 columns at 375px and squash content
- ~~53 fixed pixel widths~~ — **false positive, corrected.** Every one on a routed page is <=260px (safe at 375px) or already `max-w-`/`w-full`. The only large fixed widths (900-1280px) live in unrouted Mockup pages and one decorative blur already inside an `overflow-hidden` section.
- 25 `whitespace-nowrap` usages, only 22 of which sit inside an `overflow-x-auto` container — the rest can push the page sideways
- Wide tables/code blocks should each be wrapped in their own `overflow-x-auto`

---

## 4. Internationalization

**Currently: none.** No `i18next`, no `react-intl`, no `src/i18n` directory. `index.html` is hard-coded `lang="en"`. The only localized content is a single hand-written page, `GuidesEspanol.tsx`. No RTL support anywhere.

Full i18n across 3,118 pages with inline JSX strings is not a realistic project — the strings are the content, and machine-translating 3,000 senior-facing tech guides would produce unreliable instructions, which is the one thing this site can't afford.

**Recommended instead — a scoped path:**

1. **Chrome/UI layer only:** extract strings from Navbar, Footer, MobileBottomNav, Button labels, form errors, and the ~40 hand-written top-level pages into `react-i18next`. That's a few hundred strings, not 100,000.
2. **Content layer:** treat translations as editorial. Pick the 50 highest-traffic guides, translate those properly (human-reviewed), and expose them under `/es/...` routes with `hreflang` tags.
3. **Infrastructure now, content later:** set `<html lang>` dynamically, add `dir` support to the root layout, add `hreflang` to `SEOHead`. Cheap now, avoids a rewrite later.
4. Spanish first — it matches the existing `GuidesEspanol` page and the US senior demographic.

---

## Recommended order of work

**Phase 1 — token fixes (highest leverage, lowest risk)**
1. Fix `--primary` / `--accent` / sky / lavender light-mode contrast in `src/index.css`
2. Add `--warn-surface`, `--success-surface`, `--info-surface` tokens
3. Raise `Button` `size="sm"` from `h-9`/`text-xs` to `h-11`/`text-sm`

**Phase 2 — scripted sweeps across the 2,958 generated tool pages**
4. `text-sm` → `text-base`, `text-xs` → `text-sm` in body copy
5. Raw gray/amber/green/red palette → semantic tokens (mapping table above)
6. Add `dark:` variants (or replace) in the 107 light-only files

**Phase 3 — targeted manual fixes**
7. `alt` text on the 24 bare `<img>` tags
8. `<main>` landmark on the 152 pages missing it
9. 44 unprefixed `grid-cols-3/4` → responsive
10. 53 fixed pixel widths → `max-w-full` / responsive equivalents

**Phase 4 — i18n foundation**
11. `react-i18next` on the chrome layer, dynamic `lang`, `hreflang` in `SEOHead`, RTL-safe root layout

Phases 1 and 3 are a single session's work. Phase 2 needs codemod scripts plus a visual spot-check on a sample of pages before committing 2,958 file changes.

---

## Verification plan (before any commit)

- Re-run the contrast calculator on the new token values — every pair ≥ 4.5:1 (≥ 3:1 for large text)
- Build (`bun run build`) and diff-count changed files against expected
- Spot-check 10 random tool pages at 375px, 768px, and 1440px, in both light and dark
- Confirm no regressions in Navbar/Footer, which every page depends on


---

# Implementation log — Phases 1 & 3 (August 27, 2026)

## What changed

**Phase 1 — token fixes (`src/index.css`, `tailwind.config.ts`, `src/components/ui/button.tsx`)**

Light mode:
- `--primary` `243 100% 75%` -> `243 66% 62%` (#655ede). White label now 4.99:1.
- `--accent` `192 100% 43%` -> `192 99% 29%` (#017693). White label 5.24:1, as text on canvas 4.73:1.
- `--ring`, `--zone-cta`, `--sidebar-primary`, `--sidebar-ring` follow primary.

Dark mode (kept the bright Origin look, flipped the label instead of dulling the brand):
- `--primary` -> `246 100% 81%` (#a99fff) — 5.83:1 as text on a card, 8.23:1 on the page background.
- `--primary-foreground` and `--accent-foreground` -> `220 8% 6%` (ink). A bright violet/cyan button now carries a dark label at 8.23:1 and 7.49:1 instead of white at 3.30:1 and 2.47:1.

New tokens (light + dark, wired into Tailwind as `bg-warn` / `text-warn-foreground` etc.):
- `--warn-surface`, `--success-surface`, `--info-surface`, `--danger-surface`, each with a `-foreground`. These replace the raw `bg-amber-50` / `bg-green-50` / `bg-blue-50` / `bg-red-50` washes and are correct in dark mode without a hand-written `dark:` variant. All eight pairs measure 7.4:1 or better.
- `--origin-sky-text` and `--origin-lavender-text` — AA-safe text versions of two decorative accents. The raw `--origin-sky` / `--origin-lavender` values are unchanged, so background washes still look the same.

Button:
- `size="sm"` `h-9 ... text-xs` -> `h-11 ... text-sm`. Every button size is now at or above the 44px touch target.

**Phase 3 — landmarks and layout**

- `<main>` added to **146 of 152** pages that lacked one: 109 by promoting the page's outermost wrapper, 23 inside fragment-rooted pages, 14 by wrapping the content between `<Navbar />` and `<Footer />`. The remaining 6 are correct as-is — `Book.tsx` and `Signup.tsx` are redirect-only components that render no markup, and the four `Mockup*` pages are not routed.
- Two genuinely squashed 4-column grids made responsive (`grid-cols-2 sm:grid-cols-4`): `ChessGameLog` stat cards and `CataractRecoveryEyeDrops` dose checkboxes.

Total: **150 files changed, 402 insertions, 299 deletions.**

## Verification

| Check | Result |
|---|---|
| Contrast recalculation, 20 token pairs | **20/20 pass at 4.5:1** (lowest 4.51, most above 7) |
| `npm test` (brand voice + schema) | **104/104 pass, 10/10 files** |
| TSX parse check on all 150 changed files (esbuild) | **0 failures** — no unbalanced JSX from the `div` -> `main` rewrites |
| `npx tsc --noEmit -p tsconfig.app.json` | **Not completed here** — the sandbox caps a shell call at 45s and tsc on 3,118 files needs longer. Run it locally before committing. |
| Visual spot-check at 375/768/1440px, light + dark | **Not done** — needs a browser. See below. |

One incident worth recording: the first pass of the scripted edits silently converted CRLF to LF in 10 files, which turned a 402-line diff into a 5,033-line one. Caught it in review and restored the original line endings. If you script bulk edits on this repo again, read and write in binary mode — some files here are CRLF.

## Before you commit

```bash
cd ~/Documents/Claude/Projects/TekSure
npx tsc --noEmit -p tsconfig.app.json    # the one check that could not run in the sandbox
npm run dev                              # eyeball the homepage, a guide, and a tool page in both themes
```

Then:

```bash
git add -A
git commit -m "fix: WCAG AA contrast tokens, 44px touch targets, main landmarks on 146 pages"
git pull --rebase origin main
git push
```

Note: `_to_delete/` in the repo root holds two temporary verification files I could not remove from the sandbox. Delete that folder before committing.

## What is deliberately still open

- **Phase 4 (i18n) is untouched.**
- 3-column stat-card rows on ~18 tool pages sit at roughly 105px per column on a 375px phone. They are readable now, but they get better for free once Phase 2 raises `text-xs` labels to `text-sm`.
- Worth adding to `npm test`: a guard that fails on new raw-palette classes, so Phase 2's cleanup does not quietly regress.


---

# Implementation log — Phase 2 (August 27, 2026)

Two codemods now live in `scripts/codemods/`. Both default to a **dry run** and print a sample diff; `--apply` is what writes. Both support `--only <path>` and `--limit <n>` for working a slice at a time.

```bash
node scripts/codemods/semantic-colors.mjs                    # dry run over src
node scripts/codemods/semantic-colors.mjs --unmapped         # what the table doesn't cover
node scripts/codemods/semantic-colors.mjs --only src/pages/tools --apply
node scripts/codemods/body-type-scale.mjs --apply
```

## 1. `semantic-colors.mjs` — raw palette to tokens

Maps raw Tailwind palette classes onto the semantic tokens, and drops the now-redundant `dark:` partner. Applied result: **624 files, 6,850 class strings.**

| Raw | Token |
|---|---|
| `text-gray-700/800/900/950` | `text-foreground` |
| `text-gray-300/400/500/600` | `text-muted-foreground` |
| `bg-gray-50/100` | `bg-muted` |
| `border-gray-100/200/300` | `border-border` |
| `bg-white` | `bg-card` |
| `bg-amber-50/100` (+ yellow, orange) | `bg-warn` |
| `text-amber-400..900` | `text-warn-foreground` |
| `bg-green-50/100` (+ emerald, teal) | `bg-success` |
| `bg-red-50/100` (+ rose) | `bg-danger` |
| `bg-blue-50/100` (+ sky, cyan) | `bg-info` |
| `text-purple/violet/indigo-400..900` | `text-primary` |

The one subtle rule: a `dark:` raw-palette class is dropped **only** when a sibling class for the same property (bg / text / border) actually mapped to a token. `bg-white dark:bg-gray-800` is safe to collapse because `bg-white` becomes `bg-card`, which already carries a dark value. But if the light class had stayed unmapped, dropping its dark partner alone would silently break dark mode — so in that case both are left in place. This is why the script does two passes over each class string.

## 2. `body-type-scale.mjs` — body copy up one step

`text-xs` -> `text-sm`, `text-sm` -> `text-base`. Applied result: **2,800 files, 17,435 class strings, 706 skipped by the guard.**

This is the risky one, so it is deliberately narrow:

- Only fires on a `className` attached to a text-bearing element (`p`, `li`, `ul`, `ol`, `span`, `td`, `th`, `dd`, `dt`, `blockquote`, `label`). A `div` wrapper is not assumed to be prose.
- Skips any class string that reads as chrome rather than prose: fixed `h-`/`w-`, `rounded-full` (pills and badges), `absolute`, `fixed`, `uppercase`, `tracking-wide`, `truncate`, `line-clamp-*`, `whitespace-nowrap`, `sr-only`. Those elements are sized to fit a container and bumping their type breaks layout.
- Skips `src/components/ui/` entirely — shadcn primitive sizes are contractual.
- Never touches headings. They are already above body size, and raising them compresses the gap that signals hierarchy.

## Results

| Metric | Before | After |
|---|---|---|
| Raw palette class usages | 17,626 | **6,305** (-64%) |
| `text-xs` usages | 3,043 | **1,350** (-56%) |
| Files with a light-only palette and no `dark:` | 107 | **81** |
| Total diff | — | 2,819 files, 23,367 insertions, 23,284 deletions |

## Verification

| Check | Result |
|---|---|
| `npm test` | **106/106 pass, 11/11 files** (two new token tests included) |
| TSX parse check, all 3,202 files in `src` (esbuild) | **0 failures** |
| Line-ending drift across all 2,819 changed files | **0** — the CRLF trap from Phase 1 did not recur |
| Semantic foreground landing on an unmapped strong background | **2 instances**, both `-200` tints with correct `dark:` partners — reviewed, no action needed |
| `npx tsc --noEmit` | **Still not run** — exceeds the sandbox's 45s call cap. Run locally. |
| Visual spot-check | **Not done** — needs a browser |

## New regression guard

`src/__tests__/design-tokens.test.ts` runs with the normal suite and does two things: caps raw-palette usage at 6,400 (a ratchet — lower it as you clean up, never raise it), and asserts every semantic surface token is defined in both light and dark. If someone reintroduces raw palette classes in bulk, the suite fails and names the codemod to run.

## The remaining 6,305

They fall outside the mapping table on purpose — mid-shade solid backgrounds (`bg-emerald-600`, `bg-indigo-600`), gradient stops (`from-`/`via-`/`to-`), and one-off decorative colors. `--unmapped` ranks what is left. Most are genuine brand-ish accents rather than mistakes, so they want a design decision per group rather than another blanket sweep.
