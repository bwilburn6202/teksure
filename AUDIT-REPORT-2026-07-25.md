# TekSure Full Audit & Remediation — July 25, 2026

**Status: complete.** Every P0–P2 item found in the audit was fixed, verified, and shipped
(`5878277` on `main`). Scope: repo state, code health, runtime crashes, content quality,
SEO plumbing, Supabase security.

## Final verification

| Check | Before | After |
|---|---|---|
| TypeScript (`tsc --noEmit`) | 440 errors | **0** |
| Test suite | 17 failing / 104 | **104 passing** |
| Production build | failed | **passes** |
| Duplicate slugs | 7 | **0** (4,013 unique) |
| Broken internal links | 0 | **0** |
| Orphaned routes | 2,602 | **6** (admin + payment callbacks, intentional) |
| Sitemap URLs | 2,970 (3 months stale) | **7,110**, regenerated every build |
| Stale OS mentions | 64 flagged (mostly false) | **4 real** |
| Live site content | May 4 | **current** |

---

## P0 — Deployment was dead. Fixed.

The single biggest finding: **the live site had been serving May 4 content for 12 weeks.**
Local was 547 commits behind / 10 ahead of GitHub, so ~2,000 guides built between May and
July had never reached Vercel.

Root cause: a stale `.git/index.lock` **left behind on July 10** silently killed every
automated commit after that date.

Fixed: removed the lock, committed the 373-file backlog, merged the remote dev-loop
history, pushed. Live site now current — verified `sitemap.xml` returns 7,110 URLs and
`/tools/all` returns 200.

Also wired batches 323–326 (never imported, so their guides were invisible) and deleted
batch-325, a byte-identical duplicate of 322 that was causing 7 duplicate slugs.

---

## Crashing pages — found and fixed

These were **hard runtime crashes**, invisible to a type check alone:

- **`/tools/printer-troubleshooter`** — the worst of them. Two node schemas existed in one
  decision tree; the UI only rendered the newer one, so **all four entry paths rendered
  blank**, and `START_OPTIONS` pointed at `ink_q1`, a node that never existed → white
  screen. Migrated every legacy node, wired **12 previously unreachable flows** (WiFi
  setup, wrong colors, error lights, two-sided printing, scanner), replaced 6 dangling
  `next:` targets, removed a duplicate ink node, and added a fallback so an unknown id can
  never blank the page again. Now 52 nodes, 0 dead ends, 0 unreachable.
- **`/tools/privacy-audit`** — UI mapped `service.checks`, data supplied `settings` →
  `undefined.map` crash on load.
- **`/accessibility`** — `cat.conditions.join()` on undefined → crash.
- **`/tech-help-near-me`** — cards rendered blank "What they offer" sections.

Common cause: content automation writing data in a shape the types and UI never agreed on.

---

## Features that shipped in code but were never migrated

Each failed silently in production:

- `profiles.tier` — the experience-level picker never persisted.
- `testimonials` — homepage social proof always fell back to placeholders.
- `community_questions` + votes + `community_question_upvote` RPC — the Ask TekSure board
  could not load or accept a question.
- **`syncProgress` wrote a `completed_guides` column that does not exist**, wrapped in a
  silent `try/catch` — so signed-in users' guide progress never saved, on any device.
  Rewritten against the real per-row schema.

Migrations: `20260725150000_add_missing_feature_tables.sql`.

---

## Security (Supabase `vrhxitxzqtbphzsbdqih`)

Fixed in `20260725143500_security_hardening_audit.sql`:

- **`scraped_articles` UPDATE was open to any signed-in user** — any account could rewrite
  article content. Now admin-only.
- Pinned `search_path` on 7 functions.
- Revoked public EXECUTE on `handle_new_user` and `rls_auto_enable`.
- **`.env` was tracked in git** (publishable keys only, but `.gitignore` had no env entry
  at all). Untracked and ignored.

Remaining advisor items are intentional or need your action:

- Public-form INSERT policies (`bookings`, `help_requests`, `scam_reports`,
  `newsletter_subscribers`, `guide_reports`) — by design; consider app-layer rate limiting.
- `community_question_upvote` / `is_admin` callable by anon — by design.
- `vector` extension in `public` — cosmetic, migration-heavy.
- **Leaked-password protection is disabled — one toggle in Auth settings. Needs you.**

---

## SEO & cohesion

- **Two sitemap generators were fighting.** A Vite plugin regenerated `sitemap.xml` at
  `buildStart` with guides only — no tools — at the non-canonical apex host, overwriting
  the good one. That is why 2,969 tools were missing from search. Plugin removed; the
  comprehensive script now owns it and runs in `prebuild` so it cannot go stale.
- Canonical host unified on **www** across sitemap, robots.txt, `SEOHead`, and JSON-LD
  (the apex 301s to www, so every canonical pointed at a redirect).
- **New `/tools/all`** — an A–Z directory generated from the actual route table, linked
  from `/tools`. Orphaned routes 2,602 → 6. Regenerated every build, so no tool page can
  ever be orphaned again.

---

## Content quality

- Brand-voice sweep across all guide copy. `just` and `it's easy` are now handled **by
  meaning**: minimizing uses removed ("just tap Settings" → "Tap Settings"), while
  empathetic and idiomatic uses stay ("it is common to forget", "just in case"). Real
  product names — Google Fi *Simply Unlimited*, TaxSlayer *Simply Free*, *Simply Piano* —
  are allowlisted so the test stops flagging facts it cannot change.
- Tightened the dev-loop stale-OS check to skip historical statements ("introduced in
  iOS 14") and back-compat notes ("macOS Monterey or earlier"): 64 flagged → 4 real.

---

## Guardrails added (so this does not recur)

1. `GuideCategory` now derives from a runtime `GUIDE_CATEGORIES` array — the type, the
   tests, and every `Record<GuideCategory, …>` map share one source and cannot drift.
2. Sitemap + tools directory regenerate in `prebuild`.
3. Brand-voice and category rules are enforced by the test suite, which now actually runs
   (the `jsxDEV` crash meant 14 component tests had never executed).
4. `NODE_ENV` pinned in the test config so tests stop inheriting a stray `production` from
   the shell — that was loading React's production build and breaking every render.

## Still worth doing

- Enable leaked-password protection (Auth settings — needs you).
- Add a commit+push step to the content scheduled tasks; they generate content but nothing
  ships it, which is what caused the 12-week gap.
- Decide one writer for `.claude/dev-loop-state.json` — local tasks and GitHub Actions both
  write it and will keep conflicting.
- Supabase performance pass: 7 unindexed foreign keys, ~30 `auth_rls_initplan` warnings,
  ~35 unused indexes.
