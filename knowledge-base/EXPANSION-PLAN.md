# Knowledge-Base Expansion Plan: 125 Sources → 1,250 New Guides

**Status:** Approved — 2026-04-19
**Owner:** autonomous pipeline + admin review
**Companion doc:** `knowledge-base/source-plan.md` (125-source × 10-topic tracking table)

## Context

TekSure has 1,263 guides and targets 2,500 by EOY 2026. The existing scrape → categorize → simplify → DB pipeline is 80% built but has gaps:

1. `content_sources` only models RSS/HTML feeds — no way to represent Reddit, YouTube, or Stack Exchange.
2. `simplify-article` outputs a schema that doesn't match the live `Guide` type (lowercase difficulty, `simplified_title` vs `title`, missing `excerpt`/`thumbnailEmoji`/`category`/`publishedAt`/attribution).
3. No automated path from `simplified_articles` (DB) to `src/data/guides-batch-*.ts` (the files the site actually renders).
4. Brand-voice rules in CLAUDE.md are not enforced in code or tests.
5. Community content (Reddit/SE/YouTube) is higher-variance — needs verification against authoritative sources.

This plan wires in all five gaps, locks a 125-source × 10-topic schedule, and ships content in four legally-tiered waves. Target: +1,250 guides over 8 weeks.

## Decisions locked

- **Verification**: LLM cross-ref in one pass — authoritative doc injected into simplify prompt as ground truth; model emits `verified: bool`.
- **Publishing**: Auto-publish cron → opens a GitHub PR per batch for human review/merge.
- **Brand enforcement**: Banned-word list added to both the simplify prompt *and* a new test that fails CI.
- **Ceiling**: 125 sources × 10 topics = 1,250 guides (lands at ~2,513 total).
- **Tier 4 (mainstream tech media)**: reference-input only, full rewrite required.

## 125-source list (grouped in 13 tiers)

### Authoritative (100 sources — Tiers 1–10)

| Tier | Group | Count |
|------|-------|-------|
| 1 | Official Platform Support | 10 |
| 2 | Senior-Focused Educators | 10 |
| 3 | Government & Consumer Safety | 10 |
| 4 | Mainstream Tech Media *(reference-only)* | 10 |
| 5 | Privacy & Security | 10 |
| 6 | Health Tech | 10 |
| 7 | Banking & Money | 10 |
| 8 | Smart Home | 10 |
| 9 | Communication & Email | 10 |
| 10 | Connectivity & Accessibility | 10 |

*Full source names in `knowledge-base/source-plan.md`.*

### Community (25 new — require verification cross-ref)

**Tier 11 — Reddit (10)** — `reddit.com/r/{sub}/top.json?t=month&limit=25`, filter `score > 50`:
r/techsupport · r/AskTechnology · r/applehelp · r/iphonehelp · r/androidquestions · r/seniors · r/Scams · r/personalfinance · r/homeautomation · r/accessibility

**Tier 12 — Stack Exchange (5)** — `api.stackexchange.com/2.3/questions?sort=votes&filter=withbody`:
Super User · Ask Different (apple.SE) · Android Enthusiasts · Web Apps · Information Security

**Tier 13 — YouTube (10)** — YouTube Data API v3 + `youtube.com/api/timedtext?lang=en&v={id}`:
Apple Support · Android (Google) · Microsoft · Samsung Care US · AARP · Senior Planet · How-To Geek · TechBoomers · Ask Leo! · Cyber-Seniors

## 10-topic template per source

- **Platform support (T1)**: Setup, Sign-in, Updates, Privacy, Backup, Accessibility, Troubleshooting, Security, Family Sharing, Transfer/Migrate
- **Gov (T3)**: Scam types, Reporting, Recovery, Benefits enrollment, Identity protection, Official apps, Data requests, Accessibility options, Fraud alerts, Secure login
- **Reddit (T11)**: organic top monthly threads (no fixed topic list)
- **YouTube (T13)**: channel's top 10 videos published in the last 12 months

## Rollout waves (legal-risk ordered)

| Wave | Tiers | Sources | ~Guides | When |
|------|-------|---------|---------|------|
| 1 | T1 + T3 (platform + gov) | 20 | 200 | Weeks 1–2 |
| 2 | T2 + T5 + T6 | 30 | 300 | Weeks 3–4 |
| 3 | T7 + T8 + T9 | 30 | 300 | Weeks 5–6 |
| 4 | T4 + T10 + T11 + T12 + T13 | 45 | 450 | Weeks 7–8 |

Wave 4 runs last so the verification pipeline is proven on safer content first.

## Implementation

### A. Database migration
**New file:** `supabase/migrations/20260419_expand_content_sources.sql`
- Add enum `source_type` to `content_sources`: `'rss' | 'html' | 'reddit' | 'youtube' | 'stackexchange'`
- Add `fetch_config JSONB` to `content_sources` (subreddit, channel_id, SE site_key, min_score thresholds)
- Add to `simplified_articles`: `verified BOOLEAN DEFAULT true`, `verified_against_source_id UUID REFERENCES content_sources(id)`, `verification_notes TEXT`, `banned_words_flagged TEXT[]`, `source_url TEXT`, `source_name TEXT`
- Update `simplified_articles.difficulty_level` CHECK to accept PascalCase (`'Beginner'|'Intermediate'|'Advanced'`)
- Seed 125 source rows

### B. Extended fetchers
**Modify:** `supabase/functions/scrape-articles/index.ts`
- `fetchReddit(source)` — top.json, filter by score, pull self-text + top comment
- `fetchYouTube(source)` — channel videos via Data API (secret `YOUTUBE_API_KEY`) → transcript via timedtext
- `fetchStackExchange(source)` — /questions + /answers endpoints, threshold by score
- All three normalize into existing `scraped_articles` row shape

### C. Tuned simplify-article prompt
**Modify:** `supabase/functions/simplify-article/index.ts`
- Add authoritative-doc lookup: query `simplified_articles` for best-matching published guide in same `category` and inject as `<authoritative_reference>`
- Replace output schema to match Guide type exactly:
  ```
  { title, excerpt, body, category (one of 19 live IDs),
    tags[], thumbnailEmoji, difficulty ("Beginner"|"Intermediate"|"Advanced"),
    readTime ("N min" string), publishedAt (ISO date),
    steps[{title, content, tip?, warning?}],
    sourceUrl, sourceName,
    verified (bool), verification_notes }
  ```
- Add banned-words list to prompt rules (seamless, leverage, utilize, cutting-edge, simply, just, obviously, "It's easy", "Pro Tip")
- Add US-audience rule (USD, US carriers, FTC.gov)
- Add "no verbatim phrase > 8 words; always paraphrase" rule
- Add "if community post cannot be corroborated by the authoritative reference, set verified=false" rule

### D. Auto-publish cron
**New file:** `supabase/functions/publish-to-batch/index.ts`
- Weekly schedule (Sunday 11 PM via Supabase cron)
- SELECT simplified_articles WHERE is_published=false AND verified=true
- Find next free `N` for `src/data/guides-batch-{N}.ts` via GitHub contents API
- Generate TS file with full Guide[] array
- Append new export to `src/data/guides.ts`
- Create branch `autobatch/batch-{N}` via GitHub API (secret `GITHUB_TOKEN`), commit, open draft PR
- On PR merge webhook → mark rows `is_published=true`

### E. Brand-word lint
**New file:** `src/__tests__/brand-voice.test.ts`
- Load all guides via `src/data/guides.ts` exports
- Case-insensitive word-boundary regex for banned terms
- Exempt `sourceUrl` and attribution footers
- CI-blocking on hit

## Files to modify/create

| File | Action |
|------|--------|
| `supabase/migrations/20260419_expand_content_sources.sql` | new |
| `supabase/functions/scrape-articles/index.ts` | modify |
| `supabase/functions/simplify-article/index.ts` | modify |
| `supabase/functions/publish-to-batch/index.ts` | new |
| `src/__tests__/brand-voice.test.ts` | new |
| `knowledge-base/source-plan.md` | done |
| `knowledge-base/EXPANSION-PLAN.md` (this doc) | done |
| Supabase secrets | add `YOUTUBE_API_KEY`, `GITHUB_TOKEN` |

## Existing code to reuse

- `supabase/functions/categorize-and-dedup/index.ts` — Jaccard dedupe handles cross-source duplicates as-is
- `supabase/functions/scrape-articles/index.ts` `extractContent()` helper — reused for HTML paths
- `supabase/functions/simplify-article/index.ts` `slugify()` + `uniqueSlug()` — reused
- `src/pages/admin/ContentPipeline.tsx` — existing dashboard; small UI tweak to surface `verified` + `banned_words_flagged`

## Verification (dry-run before Wave 1)

1. Run migration locally: `supabase db push`
2. Seed 2 sources (1 Tier 1, 1 Tier 11): `bun run scripts/seed-sources.ts --tier=1,11 --limit=2`
3. Trigger `scrape-articles` → confirm `scraped_articles` rows appear with correct `source_type`
4. Trigger `categorize-and-dedup` → confirm categorization
5. Trigger `simplify-article` on one Reddit row → inspect JSON output in admin UI:
   - Schema matches Guide type
   - `verified` set correctly
   - No banned words in `body`
   - `sourceUrl` populated
6. Run `bun test src/__tests__/brand-voice.test.ts` → passes on existing guides
7. Trigger `publish-to-batch` manually → confirm PR opens against `main` with `guides-batch-12.ts`
8. Check out PR branch locally, run `bun dev`, visit `http://localhost:5173/guides/{slug}` — visual + content review
9. Merge PR; confirm rows flip to `is_published=true`

Only after all 9 steps pass, enable the weekly cron and begin Wave 1 seeding.

## Progress log

- **2026-04-19** — Plan approved. `knowledge-base/source-plan.md` + `knowledge-base/EXPANSION-PLAN.md` committed. Migration drafting in progress.
