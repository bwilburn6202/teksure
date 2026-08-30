# TekSure — Claude Instructions

**This file is the single source of truth for TekSure.** If Cowork project instructions, a scheduled task prompt, or a memory file disagrees with this file, this file wins and the other one should be corrected.

---

## Project
Tech support and digital literacy for non-technical users and seniors (60+). Free, no paywalls on educational content.

- **Stack:** React 18 · TypeScript · Tailwind · shadcn/ui · Supabase · React Query · React Router · Vite
- **Supabase ref:** `vrhxitxzqtbphzsbdqih` — verified 2026-08-27 against `supabase/config.toml`, `supabase/.temp/project-ref`, and the `dns-prefetch` host in the live HTML. The old ref `zrgtoefkqafndhxhbuag` was wrong and has been purged from `docs/`, where it sat inside copy-pasteable `functions deploy --project-ref` commands. If it reappears anywhere, it is stale — do not deploy against it.
- **Repo:** github.com/bwilburn6202/teksure · **Live:** https://www.teksure.com (canonical host is `www`; apex currently **307s**, not 301 — see blockers)
- **Local:** `~/Documents/Claude/Projects/TekSure` · dev on :5173

## Current state (2026-08-30)
4,032 guides · 387 tools · 4,542 sitemap URLs · TypeScript clean · 106/106 tests · prerendering live

**Thin-content cut, 2026-08-30.** `/tools` went from 2,970 pages to 387. 2,246 of the
removed pages were under 300 words, 2,480 had no editorial inbound link, and 207
near-duplicate topic clusters covered 443 of them. This was the guide-count problem
repeated at the route layer — the 2026-08-04 quality-over-count decision had been applied
to guides and never to tool pages. 474 removed slugs with a genuine equivalent redirect
(308 at the edge); the rest 404 on purpose, because pointing 2,000 unrelated thin pages at
a hub reads as a soft 404. Full reasoning: `docs/REDUNDANCY-AUDIT-2026-08-30.md`.
**Do not add `/tools` pages to move a number either.**

**Guide count target: retired.** Closed as MISSED at 4,049 by decision on 2026-08-04. 4,000 mediocre pages rank worse than 400 excellent ones. Do not add guides to move a number.

**Open blockers (raise, don't work around):** analytics wiring unverified · monetization needs AdSense/affiliate credentials · hosted Ollama needs the Hetzner CX22 · ~~`npm run build` OOMs in sandbox~~ — fixed by the 2026-08-30 cut: 4,542 routes prerender in 5 shards at ~420MB RSS, 0 failed · readability sits at grade 8.3 with ~58.5% above grade 8 and needs one scripted bulk pass or an explicit decision to accept it · **apex `teksure.com` redirects to `www` with a 307 (temporary), not a 308/301** — path is preserved so users are fine, but a 307 does not consolidate link equity onto the canonical host. This is a Vercel *domain* setting, not `vercel.json`, so it cannot be fixed from the repo: Vercel dashboard → Project → Settings → Domains → `teksure.com` → set the redirect to permanent.

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
- Redirects come from two places, both consumed by `scripts/generate-redirects.mjs`:
  `<Navigate>` routes in `App.tsx`, and `src/data/tool-redirects.ts` for tool pages removed
  in the 2026-08-30 cut. Add them there, never by hand in `vercel.json`.
- **Turning a redirect back into a real page takes TWO steps.** `generate-redirects.mjs` preserves any redirect it no longer finds in `App.tsx`, treating it as hand-added — so the stale 308 survives and shadows the new page forever while the source looks correct. Delete the `vercel.json` entry by hand as well. (Cost a full session on `/pricing`, 2026-07-26.)

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
- `GuideCategory` derives from `GUIDE_CATEGORIES` in `src/data/guides.ts`. Add categories to that array only — the type, tests, and `Record<GuideCategory, …>` maps follow.
- **Every new batch file must be imported AND spread** in `guides.ts`, or its guides silently do not exist.

**Tool pages are a registry, not a route table**
- `/tools/<slug>` resolves through `src/data/tools-registry.ts` via a single dynamic
  `/tools/:slug` route and `src/components/ToolRoute.tsx`. A tool that is not in that map
  does not exist. `App.tsx` used to carry one `lazy()` and one `<Route>` per tool, which is
  how it reached 7,445 lines and accumulated 37 duplicate route declarations that were
  silently unreachable — React Router matched the first and ignored the second.
- `scripts/generate-sitemap.mjs`, `scripts/generate-tools-directory.mjs` and
  `scripts/prerender.mjs` all read the slug list through `scripts/tool-slugs.mjs`. If you
  add a tool, add it to the registry — nothing scrapes `App.tsx` for tool routes any more.

**Generated files — never hand-edit**
`public/sitemap.xml` · `src/data/tools-directory.ts` · `src/data/site-stats.ts` · `vercel.json` (except redirect deletions above). All produced in `prebuild`. Do NOT add a second sitemap generator to `vite.config.ts` — one used to overwrite the good sitemap with guides only.

`site-stats.ts` must stay **codegen, not a runtime import**. It feeds the guide/tool counts in Landing, Tools and SiteIndex copy. It previously did `import { guides } from './guides'` to read `guides.length`, which pulled all 328 batch files (~20 MB of source) into the homepage chunk to render one number. Never reintroduce that import — count at build time instead.

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
npm test                        # 104 tests — brand voice + schema
node scripts/validate-slugs.mjs
npm run build                   # ~40s + 5 prerender shards; verify prerender-report.json says complete
```

## Key locations
| Path | Purpose |
|---|---|
| `src/data/guides.ts` | Guide content + `GUIDE_CATEGORIES` |
| `src/App.tsx` | All routes + `<Navigate>` redirects |
| `src/components/Navbar.tsx` · `TekBot.tsx` | Nav · AI assistant |
| `supabase/migrations/` | Migrations |
| `.claude/dev-loop-backlog.md` | Work queue — newest cycles at top |
| `.claude/prompts/` | Reusable run briefs |

## Supabase
Tables: `auth.users`, `profiles`, `bookings`, `forum_threads`, `forum_replies`, `guide_ratings`, `guide_progress`, `testimonials`, `community_questions`, `community_question_votes`
Edge functions: `send-help-confirmation`, `send-booking-confirmation`, `create-checkout-session`, `stripe-webhook`
Open: enable leaked-password protection in Auth; Supabase performance pass.

---

## Automation — ONE content producer, not four

| System | Cadence | Role |
|---|---|---|
| `dev-loop.yml` (GitHub) | every 6h | **Read-only checks.** Writes findings to `.claude/dev-loop-backlog.md`. No source edits, no API calls. |
| `teksure-loop` (scheduled task) | daily 6:30am | Health + cadence pages + ONE improvement from the backlog |
| `teksure-weekly` (scheduled task) | Tue 8:00am | Discoverability verification + one high-value fix |
| `auto-merge-claude.yml` | on PR | Merges `claude/`, `codex/`, `vercel/` branches |

**Disabled on purpose:** `creative-loop.yml` and `continuous-content-loop.yml`. Together they ran ~25 automated content cycles a day against a stated quality-over-count policy. Do not re-enable without an explicit decision to resume volume.

**dev-loop checks per cycle:** site metrics · duplicate slugs · internal link audit · `tsc --noEmit` · stale OS mentions (iOS ≤16, Android ≤13, Win 7/8, macOS pre-Ventura) · guides older than 18 months.

```bash
npm run loop:dev:dry    # one cycle, no writes
npm run loop:dev:once   # one cycle, writes state + backlog
npm run loop:dev:ci     # exits 1 on hard failures (used by the workflow)
```
Flags: `--once`, `--dry-run`, `--ci`, `--interval=N`, `--only=health,links`, `--skip=stale-os`

**Backlog hygiene:** keep `.claude/dev-loop-backlog.md` under 64KB (last ~20 cycles). It is read at the start of every run; at 264KB it burns context for no benefit.

## Cadence pages — check every run
Two pages advertise a schedule in their own copy and are footer-linked, so staleness is publicly visible:
- `grep -m1 "dateISO" src/pages/TechProblemOfWeek.tsx` → must be within 7 days
- `grep -m1 "id: '" src/pages/WhatsNew.tsx` → must cover the current month

If behind, follow `.claude/prompts/refresh-cadence-pages.md`. **Never invent a scam or a release.** A month that shipped nothing gets left out.

## Work priority order
`broken in production` > `blocking discovery` > `stale cadence pages` > `readability` > `genuine content gaps` > `new features`

On readability: hand-passes move the number ~0.1pp per session — that's the appearance of progress. Either do a scripted bulk pass or state plainly that the number is being accepted. The existing splitters (`split-comma-conjunctions`, `split-em-dash`, `split-semicolons`) improve the metric while degrading some prose — do not run them blindly.
