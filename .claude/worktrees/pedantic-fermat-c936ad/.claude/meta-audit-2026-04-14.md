# TekSure Meta Audit — 2026-04-14

**Audit type:** Automated monthly audit (teksure-monthly-audit scheduled task)
**Run by:** Claude Sonnet 4.6
**Run time:** 2026-04-14
**Guides analyzed:** 829 (789 in guides.ts + 20 in guides-batch-2.ts + 20 in guides-batch-4.ts)
**Pages reviewed for UX:** GuideDetail.tsx, Index.tsx, Guides.tsx
**Files reviewed for code quality:** Navbar.tsx, TekBot.tsx, GuideDetail.tsx, Guides.tsx, Index.tsx

---

## Phase 1 — Data Quality

### Guide Count by Category

| Category | Count |
|----------|------:|
| how-to | 136 |
| app-guides | 127 |
| ai-guides | 86 |
| windows-guides | 81 |
| essential-skills | 79 |
| safety-guides | 69 |
| phone-guides | 63 |
| mac-guides | 60 |
| social-media | 41 |
| tips-tricks | 40 |
| health-tech | 28 |
| ai-advanced | 19 |
| **Total** | **829** |

**All categories have ≥5 guides. No thin categories.**

### ✅ Missing required fields
**Result: PASS** — All 829 guides have slug, title, excerpt, category, difficulty, and at least steps or body.

### ✅ Excerpts over 160 characters
**Result: PASS** — No guide excerpt exceeds 160 characters.

### ✅ Exact duplicate slugs
**Result: PASS** — No slug appears more than once across all three files.

### ⚠️ Versioned near-duplicate slug pairs (27 pairs)
Guides with both a base slug and a `-v2` / `-v3` variant are both live and discoverable. Review whether both should remain or the older version should be removed/redirected.

Notable: `facebook-privacy-settings` has three live versions (base, -v2, -v3).

Full list: `ai-chatbot-comparison`, `browser-extensions-guide`, `dark-mode-guide`, `data-breach-response`, `digital-estate-planning`, `email-encryption-basics`, `facebook-privacy-settings` (×3), `grocery-delivery-apps`, `home-network-security`, `how-to-use-qr-codes`, `how-to-use-uber-lyft`, `iphone-hidden-features`, `keyboard-shortcuts-everyone`, `mac-keyboard-shortcuts`, `mac-safari-tips`, `nextdoor-guide`, `online-shopping-safety`, `package-delivery-scams`, `parental-controls-guide`, `password-manager-setup`, `speed-up-slow-computer`, `telehealth-guide`, `understanding-cloud-storage`, `windows-keyboard-shortcuts`, `windows-task-manager-guide`, `zoom-complete-guide`.

> **Recommendation:** For each pair, keep the richer v2 and add a `redirect` or canonical tag from the base slug, or remove the base slug from the guides array.

### ⚠️ Guides with no tips or warnings in any step (502 guides — 63%)
Step-based guides where no single step contains a `tip:` or `warning:` field. Body-format guides (35) excluded.

By category: ai-guides (83), how-to (75), essential-skills (60), app-guides (60), windows-guides (49), mac-guides (39), phone-guides (37), safety-guides (28), tips-tricks (23), social-media (22), ai-advanced (19), health-tech (9).

> **Recommendation:** Prioritize safety-guides (28) and health-tech (9) first — highest user-safety impact. Add to `weekly-guide-enrichment` backlog, 10–15 guides per run.

### ⚠️ Body-format guides (35 guides — not using steps array)
35 guides use a prose `body` string instead of a `steps` array. If GuideDetail renders step-based styling (numbered steps, tip/warning callouts, screenshots), these guides display differently.

Slugs: `what-is-ai`, `anker-warranty-expired-future-date-power-bank-dead`, `random-sounds-chinese-voices-from-laptop-what-to-do`, `how-to-turn-off-google-ai-overviews-in-search`, `free-file-converter-websites-track-you-with-hundreds-of-cookies`, `your-phone-number-is-listed-on-data-broker-websites`, `your-phone-tracks-location-even-when-location-services-are-off`, `reset-your-smartphone-ad-tracking-id-for-privacy`, `android-battery-drain-background-apps-how-to-fix`, `how-to-stop-app-downloads-on-android-for-dementia-caregiver`, `facebook-messenger-video-call`, `create-instagram-account`, `post-photo-on-instagram`, `understand-instagram-stories`, `watch-youtube-videos`, `subscribe-youtube-channels`, `youtube-on-smart-tv`, `organize-email-folders`, `unsubscribe-from-emails`, `set-up-gmail-on-phone`, `set-up-netflix-on-tv`, `set-up-roku`, `use-amazon-fire-stick`, `cast-phone-to-tv`, `turn-on-subtitles-netflix`, `check-for-viruses-windows`, `clear-browser-cache-windows`, `screenshot-windows-quick`, `zip-files-windows`, `windows-update-check`, `screenshot-mac-quick`, `force-quit-mac`, `find-files-spotlight-mac`, `check-mac-storage`, `time-machine-backup-mac`.

> **Recommendation:** Add to `weekly-guide-enrichment` backlog for conversion to steps format.

### ⚠️ Guides with no external source links (353 guides — 43%)
Step-based guides where no step content contains any URL. CLAUDE.md spec requires official source links (Apple/Google/Microsoft Support, AARP, FTC, How-To Geek) in every guide. All 24 guides in guides-batch-4 and 329 in guides.ts lack any URL.

> **Recommendation:** Highest-volume gap. Add to `weekly-guide-enrichment` backlog; batch 30–40 per run. Prioritize safety-guides and health-tech.

### 🔴 Content bug (fixed)
**File:** `src/data/guides.ts`, slug `update-windows`, step "Download and install"
**Issue:** Warning text said "Make sure your **Mac** is plugged into power" inside a Windows guide.
**Fix applied:** Changed "Mac" → "PC".

---

## Phase 2 — Code Quality

### `src/components/Navbar.tsx`

| Severity | Line | Type | Issue |
|----------|------|------|-------|
| Medium | 128 | Accessibility | `Shield` icon not `aria-hidden="true"` — may be announced redundantly by screen readers alongside "TekSure" link text. |
| Medium | 136–142 | Accessibility | Desktop search button has no `aria-label` (shows `⌘K` text only, meaningless on Windows). Also `minHeight: 32px` — below 44px touch target. |
| Low | 136–142 | Accessibility | Synthetic `KeyboardEvent` dispatch for ⌘K shortcut — commonly blocked by browsers; prefer a shared React context/event. |
| Low | 53–107 | Performance | `PublicLinks` and `AuthLinks` defined as inner function components inside `Navbar` — recreated on every parent render. Move outside or use `React.memo`. |

### `src/components/TekBot.tsx`

| Severity | Line | Type | Issue |
|----------|------|------|-------|
| **High** | 869–903 | Accessibility | Device-picker `role="listbox"` has no focus trap and no `Escape` key handler. Keyboard users can open but not close it without mouse click. Add `onKeyDown` Escape handler + focus management. |
| Medium | 984–994 | Accessibility | Quick-prompt buttons `minHeight: 40` — below 44px WCAG minimum. Change to 44. |
| Low | 719–744 | Accessibility | Message count `<span>` has its own `aria-label` nested inside the button's `aria-label` — duplicate announcement. Move count into parent button's `aria-label` dynamically. |
| Low | 566–570 | Performance | `useEffect` excludes `messages` from deps with a suppressed lint comment — fragile pattern. Use a `useRef` guard for one-time initialization. |
| Medium | 647–703 | Performance | `send()` duplicates ~25 lines of `setTimeout` logic in both success and `.catch()` paths. Extract shared `deliverResponse()` helper. |

### `src/pages/GuideDetail.tsx`

| Severity | Line | Type | Issue |
|----------|------|------|-------|
| **High** | 19 | Performance | Synchronous `import { guides }` from `@/data/guides` (1.4MB file) bundled into this chunk — loads entire dataset for every guide page visit. |
| Medium | 389 | Accessibility | Thumbnail `<img alt="">` — if image conveys meaning, use `alt={guide.title}` instead of empty alt. |
| Medium | 204 | Accessibility | Arrow `→` in link text announced verbatim by screen readers. Wrap in `<span aria-hidden="true">`. |
| Low | 633 | Accessibility | Related guides thumbnail `alt=""` — same concern as line 389. |
| Low | 29–37 | Performance | `calcReadTime()` runs on every render. Wrap in `useMemo`. |

### `src/pages/Guides.tsx`

| Severity | Line | Type | Issue |
|----------|------|------|-------|
| **High** | 10 | Performance | Synchronous `import { guides }` — same issue as GuideDetail.tsx. Highest-traffic browse page. |
| Medium | 155–171 | **Security** | `Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')` hack to fire synthetic React events — brittle React internals workaround. Call `setSearch(term)` directly instead. |
| Medium | 230–231 | Performance | `getProgressCount(allSlugs)` called bare in render body — likely a localStorage read on every render. Wrap in `useMemo`. |
| Medium | 35–43 | Accessibility | `GuideCard` hides image on error (`style.display = 'none'`) leaving a blank card area. Render the guide emoji as a fallback instead. |
| Low | 341–354 | Accessibility | List/Grid toggle buttons missing `aria-pressed` attribute. |

### `src/pages/Index.tsx`

| Severity | Line | Type | Issue |
|----------|------|------|-------|
| **High** | 15 | Performance | Synchronous `import { guides }` — same issue as GuideDetail and Guides. Homepage is the highest-traffic page. |
| Low | 7 | Unused import | `Wifi` imported from `lucide-react` but never used. **Fixed in this run.** |
| Medium | 76 | Accessibility | Newsletter `<Input>` has no `id` and no `<label>` — WCAG Level A failure. |
| Medium | 178–184 | Accessibility | Quick-topic pill buttons include raw emoji in text — screen readers announce emoji names verbatim. Wrap emoji in `<span aria-hidden="true">`. |
| Medium | 72–73 | Accessibility | Newsletter success/error state changes have no `aria-live` region — keyboard users get no announcement on submit. |

---

## Phase 3 — UX Review

### `src/pages/GuideDetail.tsx` — Rating: **Needs Work**

The core reading experience is strong (good breadcrumbs, sticky progress bar, logical heading hierarchy, screenshot lightbox with `aria-label`, listen/print features). Issues are concentrated in secondary text and icon sizing.

| Severity | Line | Issue |
|----------|------|-------|
| **High** | 140 | `text-[9px]` on screenshot annotation callout labels — 9px is completely unreadable for seniors. Minimum 12px. |
| **High** | 241 | `BookmarkButton` uses shadcn `size="icon"` at 36×36px — below 44px minimum. |
| Medium | 166, 176 | `text-xs` (12px) for "Quick Tip" and "Warning" heading labels — 14px minimum recommended. |
| Medium | 204 | `text-xs text-muted-foreground` on completion banner — 12px muted text at WCAG contrast floor. |
| Medium | 590–591 | Prev/Next nav cards: link has no `min-h`, card content uses `text-xs` — can collapse to small tap target on mobile. |
| Medium | 613 | `text-muted-foreground` on `bg-muted/50` — muted-on-muted contrast may fail AA. |
| Medium | 634–636 | Related guide excerpt at `text-xs text-muted-foreground` — 12px muted across many cards. |
| Medium | 130 | "Click to enlarge" hint is hover-only (`opacity-0 group-hover:opacity-100`) — invisible to touch users. |
| Low | 363 | "Step X of Y" progress label at `text-xs` — functional wayfinding at 12px. |
| Low | 446–447 | ToC links at `text-sm text-muted-foreground` — borderline contrast. Step numbers at `text-xs font-mono`. |

### `src/pages/Index.tsx` — Rating: **Needs Work**

Strong layout, excellent heading scale. Main issues: contrast failures in the dark hero sections and non-functional `h-13` Tailwind class on CTAs.

| Severity | Line | Issue |
|----------|------|-------|
| **High** | 155 | `text-white/60` hero subheading on dark background — ~4.0:1 contrast, fails WCAG AA at normal text size. |
| **High** | 189, 192, 333, 403, 406 | `h-13` is not a valid Tailwind class (scale jumps 12→14). Buttons fall back to `size="lg"` (h-11/44px), but intended 52px height is not applied. Use `h-[52px]` instead. |
| Medium | 198 | `text-white/50` trust bar copy — ~3.5:1, fails WCAG AA. |
| Medium | 171 | Hero search submit `<Button size="sm">` sets `h-10` (40px), overriding the global `min-height: 44px` CSS rule. |
| Medium | 181 | Quick-topic pill buttons at ~30px height — `py-2` padding + text height, below 44px minimum. |
| Medium | 72–73 | Newsletter form: success/error state has no `aria-live` region. |
| Low | 142 | `<h1>` is `sr-only`; first visible heading is `<h2>`. Visual heading order starts at h2 — confusing for seniors using heading navigation. |
| Low | 417 | `text-white/50` newsletter panel subtext — same contrast concern as line 198. |

### `src/pages/Guides.tsx` — Rating: **Needs Work**

Good structural bones (proper h1, aria-labels on search/toggles, progress banner). Problems concentrated in GuideCard text sizes and tab touch targets.

| Severity | Line | Issue |
|----------|------|-------|
| **High** | 48 | `text-[10px]` difficulty badge on GuideCard — 10px is illegible. Minimum 12px, preferably 14px. |
| **High** | 71–74 | GuideCard excerpt at `text-xs text-muted-foreground` (12px muted) — primary browsing surface for seniors. Should be 14–16px in `text-foreground`. |
| Medium | 67–69 | Card meta row `text-xs text-muted-foreground` — 12px muted for read time. |
| Medium | 96 | GuideListItem `px-3 py-2.5` row height ~36px — below 44px touch target. |
| Medium | 101–106 | Difficulty dots (●, ●●, ●●●) are icon-only with no `aria-label` or text alternative in list view. |
| Medium | 312–328 | Category `TabsTrigger` height ~24px (`py-1.5` + 12px text) — well below 44px. These are primary navigation. |
| Medium | 341–354 | List/Grid toggle buttons at ~36px — below 44px. |
| Low | 379 | "Get Help" CTA defaults to `h-10` (40px) — same `h-10` vs global `min-height` conflict as Index.tsx. |

---

## Phase 4 — Sitemap

**Script:** `scripts/generate-sitemap.mjs`
**Result:** ✅ All three checks passed.

| Check | Result |
|-------|--------|
| Last line is `</urlset>` | ✅ Pass |
| More than 100 `<url>` entries | ✅ Pass — **803 entries** |
| Today's date in `<lastmod>` | ✅ Pass — `2026-04-14` present |

---

## Phase 6 — Auto-fixes Applied

| Issue | Fix | File |
|-------|-----|------|
| Content bug: "Mac" in Windows guide warning | Changed to "PC" | `src/data/guides.ts` (slug: `update-windows`, step "Download and install") |
| Unused import: `Wifi` from lucide-react | Removed from import list | `src/pages/Index.tsx` line 7 |

**No auto-fix applied (out of scope):** missing difficulty fields (none found), oversized excerpts (none found), exact duplicate slugs (none found).

---

## Priority Action Items

### 🔴 High — Fix in next session

1. **Add external source links** to 353 guides with no URLs — highest CLAUDE.md spec violation. Batch 30–40 per `weekly-guide-enrichment` run.
2. **TekBot device picker focus trap** (`TekBot.tsx:869`) — keyboard users get stuck; critical a11y issue for a senior-facing product.
3. **GuideCard font sizes** — `text-[10px]` difficulty badge and `text-xs` excerpt in `Guides.tsx` affect every card on the browse page.
4. **Index.tsx contrast** — `text-white/60` and `text-white/50` fail WCAG AA on the homepage hero.
5. **Newsletter `<Input>` missing label** — WCAG Level A failure (`Index.tsx:76`).

### 🟡 Medium — Next code review cycle

6. **Replace `h-13` with `h-[52px]`** in Index.tsx (non-standard Tailwind class, silently ignored).
7. **Category tab touch targets** — `TabsTrigger` at 24px in Guides.tsx; add `min-h-[44px]`.
8. **`getProgressCount` outside useMemo** — likely localStorage read on every render (`Guides.tsx:231`).
9. **GuideDetail `text-[9px]` annotation labels** — completely unreadable; use minimum `text-xs`.
10. **Versioned slug pairs (27)** — audit each pair and either redirect or retire the base slug.
11. **Body-format guides (35)** — convert to steps format for consistent rendering.
12. **Add tips/warnings to 502 step-based guides** — enrich safety-guides and health-tech first.

### 🟢 Low — Backlog

13. **`Guides.tsx` difficulty dots** — add `aria-label` to color-coded dot indicators.
14. **TekBot quick-prompt height** — `minHeight: 40` → 44 (one-line fix).
15. **`Index.tsx` sr-only h1** — evaluate making h1 visually present or redesigning hero text hierarchy.
16. **Navbar inner component definitions** — move `PublicLinks`/`AuthLinks` outside `Navbar` function.

---

## Summary Scorecard

| Area | Score | Notes |
|------|-------|-------|
| Excerpt length | 🟢 Pass | All under 160 chars |
| Exact duplicate slugs | 🟢 Pass | None found |
| Category distribution | 🟢 Pass | All 12 healthy (min 19, max 136) |
| Difficulty fields | 🟢 Pass | All 829 guides have difficulty |
| External source links | 🔴 Gap | 353 guides (43%) have no URLs — CLAUDE.md spec violation |
| Tips & warnings | 🟡 Gap | 502 guides (63%) lack any tip or warning |
| Body-format guides | 🟡 Info | 35 guides use `body` string, not `steps` array |
| Versioned slug pairs | 🟡 Review | 27 pairs — both versions live and crawlable |
| Content accuracy | 🟢 Fixed | 1 bug found and fixed (update-windows Mac→PC) |
| Code: security | 🟡 Flag | React internals hack in Guides.tsx; verify WikiPage `dangerouslySetInnerHTML` |
| Code: performance | 🟡 Flag | Synchronous 1.4MB `guides` import in 3 high-traffic pages |
| Code: accessibility | 🟡 Flag | TekBot focus trap (High), newsletter label (High), multiple medium issues |
| UX: font sizes | 🔴 Issues | `text-[9px]` and `text-[10px]` in GuideDetail and Guides — unacceptable for 60+ audience |
| UX: touch targets | 🟡 Issues | Category tabs (24px), pill buttons (30px), icon buttons (36px) — multiple under-44px |
| UX: color contrast | 🟡 Issues | `text-white/50` and `text-white/60` fail WCAG AA in homepage hero |
| UX: heading hierarchy | 🟢 Good | Proper h1→h2→h3 maintained in all three reviewed pages |
| Sitemap | 🟢 Pass | 803 URLs, valid structure, today's date |
