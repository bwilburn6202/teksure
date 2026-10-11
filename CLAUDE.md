# TekSure — Claude Instructions

**This file is the single source of truth for TekSure.** If Cowork project instructions, a scheduled task prompt, or a memory file disagrees with this file, this file wins and the other one should be corrected.

---

## Project
Tech support and digital literacy for non-technical users and seniors (60+). Free, no paywalls on educational content.

- **Stack:** React 18 · TypeScript · Tailwind · shadcn/ui · Supabase · React Query · React Router · Vite
- **Supabase ref:** `vrhxitxzqtbphzsbdqih` — verified 2026-08-27 against `supabase/config.toml`, `supabase/.temp/project-ref`, and the `dns-prefetch` host in the live HTML. The old ref `zrgtoefkqafndhxhbuag` was wrong and has been purged from `docs/`, where it sat inside copy-pasteable `functions deploy --project-ref` commands. If it reappears anywhere, it is stale — do not deploy against it.
- **Repo:** github.com/bwilburn6202/teksure · **Live:** https://www.teksure.com (canonical host is `www`; apex currently **307s**, not 301 — see blockers)
- **Local:** `~/Documents/Claude/Projects/TekSure` · dev on :5173

## Current state (2026-10-11) — complete revamp
500 guides · 24 tools · 539 sitemap URLs · 541/541 prerendered · TypeScript clean · 108/108 tests · avg reading grade 7.1

Check `curl -s https://www.teksure.com/build-info.json` before trusting counts.

**Complete revamp, 2026-10-11 ("minimal, delete, reshape").** Bailey asked for the deepest
cut and a plain visual reset. What changed:
- **Guides 3,939 → 500**, chosen by `score` = length (capped), steps, official source,
  video, core-library membership and core-topic title (iPhone, email, scam, Medicare…), with
  off-topic titles (casino, hospice, dating, estate…) penalised and near-duplicate titles
  removed. 26 categories became 10 (`safety`, `phones`, `computers`, `internet`, `apps`,
  `money`, `health`, `life`, `ai`, `basics`). The 328 batch files became one file per
  category, `src/data/guides-<category>.ts`. 405 retired slugs with a genuine equivalent
  are 308s (`src/data/guide-redirects.ts`); the other ~3,000 404 on purpose.
- **Tools 385 → 24**, listed by hand in `src/data/tools-list.ts` (grouped; a test checks it
  matches the registry). Doc Browser (an AI chat) was removed with the rest.
- **Pages:** every topic hub, printable, calculator, quiz, practice sim, course, toolkit,
  `/how-it-works`, `/guias`, `/quick-fixes`, `/safety/scam-alerts`, `/site-index`,
  `/start`, `/tech-problem-of-week` and `/whats-new` deleted; each redirects to its closest
  live page. Real pages left: home, guides, tools, scam-defense, get-help, search, glossary,
  emergency-help, about, faq, pricing, terms, privacy, refund-policy, plus account,
  booking, payment and admin routes.
- **Look:** white page, near-black text, one blue (`--primary`, 7:1 on white), visible
  borders, 18px base text, no gradients, glass, mesh wallpaper or stock photos. The Cmd+K
  search modal is gone; the navbar links to `/search`.
- **Cadence pages are gone**, so there is no weekly/monthly page to keep fresh. Do not add a
  page that promises a schedule unless something real keeps it updated.
- Edge functions now unused by the site: `scrape-articles`, `brain-query`,
  `tekbrain-ollama-chat`, and — since Doc Browser was removed — `doc-chat`. Deleting them
  is a Supabase-dashboard job.

"Ask a real person" (`/get-help`) is the single help path. **Do not reintroduce an AI-chat
CTA until the function behind it is deployed and answering.**

**Guide pages load one guide, not the library.** `/guides/:slug` gets its data from
`src/lib/guide-data.ts`: the server renderer reads the full library through
`GuideSourceContext`, the prerendered HTML embeds that guide as `<script id="guide-data">`
(captured in `main.tsx` before React mounts), and client-side navigation fetches
`public/guide-data/<slug>.json`. List and search pages use `src/lib/guide-index.ts`
(`src/data/guide-index.json`, committed). Both are written by
`scripts/generate-guide-data.mjs` in `predev`/`prebuild`; `guide-index.test.ts` fails if the
index is stale — rerun `node --import tsx scripts/generate-guide-data.mjs` after editing
guides. No client page imports `@/data/guides` any more; keep it that way.

**Earlier cuts.** 2026-08-30: `/tools` 2,970 → 387 and 110 duplicate guides merged
(`docs/REDUNDANCY-AUDIT-2026-08-30.md`). 2026-10-09: 57 low-use routes removed (forum,
community Q&A, TekBrain chat, learning paths). 2026-10-11: the revamp above. The rule from
all three: **do not add guides or `/tools` pages to move a number.** The guide-count target
was retired on 2026-08-04.

**Open blockers (raise, don't work around):** analytics wiring unverified · monetization needs AdSense/affiliate credentials · hosted Ollama needs the Hetzner CX22 · ~~`npm run build` OOMs in sandbox~~ — fixed by the 2026-08-30 cut (tool registry + sharded prerender) · ~~readability above grade 8~~ — resolved by the 2026-10-11 revamp: the 500 kept guides average grade 7.1, 24.9% above grade 8 · **apex `teksure.com` redirects to `www` with a 307 (temporary), not a 308/301** — path is preserved so users are fine, but a 307 does not consolidate link equity onto the canonical host. This is a Vercel *domain* setting, not `vercel.json`, so it cannot be fixed from the repo: Vercel dashboard → Project → Settings → Domains → `teksure.com` → set the redirect to permanent.

---

## Hard invariants — breaking these breaks production

**Build pipeline**
- `npm run build` = `vite build` → `prerender:safe` → `write-build-info`. **Never remove the prerender step.** Without it every URL serves the same generic title and the site is invisible to Bing, social crawlers, and AI answer engines. `build:spa` exists if you need a fast client-only build.
- **Prerendering is sharded and must stay that way.** `scripts/prerender-sharded.mjs` runs `prerender.mjs` in slices of 1,000 routes, one child process each. A single process grows RSS past the container ceiling and is killed at ~4,500 of 7,128 routes with `failed: 0` — the memory is external to the V8 heap, so neither `--max-old-space-size` nor `global.gc()` touches it. Do not collapse this back into one process. The driver exits non-zero on a short run; check `https://www.teksure.com/prerender-report.json` — `status` must be `complete` and `written` must equal `routesAttempted`.
- `scripts/prerender.mjs` must end with `process.exit(0)`. The SSR bundle holds the event loop open; without it the build hangs and Vercel times out while continuing to serve the previous deploy.
- `vercel.json` must contain **only schema-valid keys**. An unknown property (a `"comment"` key, once) rejects the entire deployment. Put explanations in the generator scripts.
- `vercel.json` is read at the edge from the **committed** file, before the build runs. Regenerating it in `prebuild` does not affect the deploy in progress — commit the regenerated file.
- Verify what's actually live: `curl -s https://www.teksure.com/build-info.json`

**Redirects**
- Redirects come from three places, all read by `scripts/generate-redirects.mjs`:
  `<Navigate>` routes in `App.tsx`, `src/data/tool-redirects.ts` (removed tools) and
  `src/data/guide-redirects.ts` (retired guides). Add them there, never by hand in `vercel.json`.
- `vercel.json` redirects are **rebuilt from those sources on every build** (since
  2026-10-11). The generator used to keep entries it no longer found, which let a stale 308
  shadow a restored page (`/pricing`, 2026-07-26) and left 414 of 620 redirects pointing at
  deleted pages. To turn a redirect back into a page, remove the `<Navigate>` and rebuild.
- Every redirect target must be a live page. When you delete a page, point its redirects at
  the new target directly — no chains. Vercel caps routes at 2,048; we use ~610.

**Data shape — this is the one that caused 440 type errors**
```ts
{
  slug, title,
  excerpt,            // ≤160 chars
  body,               // ≥300 words
  category,           // MUST come from GUIDE_CATEGORIES
  tags: [],
  thumbnailEmoji,     // NOT `emoji`
  difficulty,         // "Beginner" | "Intermediate" | "Advanced" — PascalCase
  readTime, publishedAt,
  steps: [{ title, content }]   // `content`, NOT `description`
}
```
- `GuideCategory` derives from `GUIDE_CATEGORIES` in `src/data/guide-categories.ts` (10 categories). Add categories to that array only — the type, tests, and `Record<GuideCategory, …>` maps follow.
- Guides live in `src/data/guides-<category>.ts`, one file per category. Keys stay **unquoted** (`slug: "…"`): the sitemap, prerender, slug validator and stats scripts find guides by matching `slug:`. A new file must be imported AND spread in `guides.ts`, or its guides silently do not exist.

**Tool pages are a registry, not a route table**
- `/tools/<slug>` resolves through `src/data/tools-registry.ts` via a single dynamic
  `/tools/:slug` route and `src/components/ToolRoute.tsx`. A tool that is not in that map
  does not exist. `App.tsx` used to carry one `lazy()` and one `<Route>` per tool, which is
  how it reached 7,445 lines and accumulated 37 duplicate route declarations that were
  silently unreachable — React Router matched the first and ignored the second.
- `scripts/generate-sitemap.mjs` and `scripts/prerender.mjs` read the slug list through
  `scripts/tool-slugs.mjs`. To add a tool, add it to the registry **and** to
  `src/data/tools-list.ts` (the `/tools` page); `tools-list.test.ts` fails if they disagree.

**Generated files — never hand-edit**
`public/sitemap.xml` · `public/llms.txt` · `src/data/site-stats.ts` · `src/data/guide-index.json` · `vercel.json`. All produced in `prebuild`. Do NOT add a second sitemap generator to `vite.config.ts` — one used to overwrite the good sitemap with guides only.

`site-stats.ts` must stay **codegen, not a runtime import**. It feeds the guide count in Landing and Guides copy. It previously did `import { guides } from './guides'` to read `guides.length`, which pulled the whole library into the homepage chunk to render one number. Never reintroduce that import — count at build time instead.

**Git on this mount**
`rm -f` fails on `.git/*.lock` files ("Operation not permitted") but `mv` works:
```bash
mv .git/index.lock .git/index.lock.stale-$(date +%s)
```
The 70+ accumulated `.stale*`/`.bak*` files are from past sessions hitting this — ignore them. If `git push` or `git reset --hard` still fails: fresh clone in `/tmp` using the token from the local repo's `remote.origin.url`, copy changed files in, commit, push, copy back.

**Payments** — Stripe is LIVE, $15 deposit model. Never touch the Stripe edge functions without explicit instruction.

---

## Brand constraints (npm test enforces most of these)
- Plain English. No jargon without an immediate explanation.
- **Banned:** "It's easy" · "simply" · "just" · "obviously" · "leverage" · "utilize" · "seamless" · "cutting-edge"
- "Quick Tip", not "Pro Tip"
- US audience — USD, US carriers, US services
- Every guide: step-by-step instructions, an official source link (Apple/Google/Microsoft/Samsung/AARP/FTC/CISA/Medicare.gov), and a real YouTube reference
- Every new page needs `<SEOHead title="..." description="..." />`
- Commit format: `feat: [description]` / `fix: [description]`

## Verify before claiming done
```bash
npx tsc --noEmit -p tsconfig.app.json
npm test                        # 108 tests — brand voice + schema
node scripts/validate-slugs.mjs
npm run build                   # ~1 min; verify dist/prerender-report.json says complete
# No .env in a cloud sandbox: prefix the build with
# VITE_SUPABASE_URL=https://placeholder.supabase.co VITE_SUPABASE_PUBLISHABLE_KEY=placeholder
# or prerender dies on "supabaseUrl is required" and ships 0 pages. Vercel has the real values.
```

## Key locations
| Path | Purpose |
|---|---|
| `src/data/guides-<category>.ts` · `guides.ts` | Guide content (one file per category) |
| `src/data/guide-categories.ts` | The 10 categories, labels, descriptions |
| `src/data/tools-registry.ts` · `tools-list.ts` | Tool routes · the `/tools` page list |
| `src/App.tsx` | All routes + `<Navigate>` redirects |
| `src/components/layout/Navbar.tsx` · `Footer.tsx` · `MobileBottomNav.tsx` | Navigation |
| `supabase/migrations/` | Migrations |
| `.claude/dev-loop-backlog.md` | Work queue — newest cycles at top |
| `.claude/prompts/` | Reusable run briefs |

## Supabase
Tables: `auth.users`, `profiles`, `bookings`, `forum_threads`, `forum_replies`, `guide_ratings`, `guide_progress`, `testimonials`, `community_questions`, `community_question_votes`
Edge functions the site uses: `send-help-confirmation`, `send-booking-confirmation`, `create-checkout-session`, `stripe-webhook`. Unused since 2026-10-11 and safe to delete from the dashboard: `scrape-articles`, `brain-query`, `tekbrain-ollama-chat`, `doc-chat`.
Open: enable leaked-password protection in Auth; Supabase performance pass.

---

## Automation — ONE content producer, not four

| System | Cadence | Role |
|---|---|---|
| `dev-loop.yml` (GitHub) | every 6h | **Read-only checks.** Writes findings to `.claude/dev-loop-backlog.md`. No source edits, no API calls. |
| `teksure-loop` (scheduled task) | daily 6:30am | Health + ONE improvement from the backlog |
| `teksure-weekly` (scheduled task) | Tue 8:00am | Discoverability verification + one high-value fix |
| `auto-merge-claude.yml` | on PR | Merges `claude/`, `codex/`, `vercel/` branches |

**Deleted on purpose (2026-10-11):** `creative-loop.yml`, `continuous-content-loop.yml` and their scripts. Together they once ran ~25 automated content cycles a day against the quality-over-count policy. Do not rebuild them without an explicit decision to resume volume.

**dev-loop checks per cycle:** site metrics · duplicate slugs · internal link audit · `tsc --noEmit` · stale OS mentions (iOS ≤16, Android ≤13, Win 7/8, macOS pre-Ventura) · guides older than 18 months.

```bash
npm run loop:dev:dry    # one cycle, no writes
npm run loop:dev:once   # one cycle, writes state + backlog
npm run loop:dev:ci     # exits 1 on hard failures (used by the workflow)
```
Flags: `--once`, `--dry-run`, `--ci`, `--interval=N`, `--only=health,links`, `--skip=stale-os`

**Backlog hygiene:** keep `.claude/dev-loop-backlog.md` under 64KB (last ~20 cycles). It is read at the start of every run; at 264KB it burns context for no benefit.

## Cadence pages — none
`/tech-problem-of-week` and `/whats-new` were deleted on 2026-10-11 because they kept going
stale in public. If a scheduled task still asks you to refresh them, that task is out of
date — correct it. Do not add a page that promises a schedule unless something real keeps
it updated. **Never invent a scam or a release.**

## Work priority order
`broken in production` > `blocking discovery` > `improving an existing guide` > `genuine content gaps` > `new features`

The sentence-splitting and vocabulary scripts were deleted with the revamp: they moved the readability metric while degrading prose. Improve a guide by rewriting it, not by running a bulk script over it.
