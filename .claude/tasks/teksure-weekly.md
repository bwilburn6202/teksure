---
name: teksure-weekly
description: "[Goal 2] Weekly discoverability verification and one high-value fix."
---

Run TekSure's weekly review at `/Users/baileywilburn/Documents/Claude/Projects/TekSure`.

**Read `CLAUDE.md` and `.claude/prompts/weekly-site-review.md` first.** They override anything below.

This task exists for the one thing the daily loop doesn't do: **verify from outside that the live site is actually discoverable.** The daily loop handles measurement, cadence pages, and incremental fixes; don't repeat that work here.

---

## 1. Discoverability check — highest priority, do this first
```bash
curl -s https://www.teksure.com/guides/qr-codes | grep -oE "<title>[^<]*</title>"
curl -s https://www.teksure.com/build-info.json
```
The title **must** be that guide's own title. If it returns the generic `TekSure — Free Tech Help for Beginners & Seniors`, prerendering has regressed and fixing it outranks everything else this week. See `scripts/prerender.mjs`, which runs inside `npm run build` via `prerender:safe`.

`build-info.json` tells you the deployed commit and prerendered page count — if it's behind your last push, the deploy failed silently. Check `vercel.json` for schema-invalid keys first; that's the usual cause.

## 2. Weekly-only checks
- Broken links: `node scripts/link-audit.mjs --json`
- Sitemap URL count vs. route count — a large gap means a generator regressed
- Any redirect that should now be a real page (remember: removing the `<Navigate>` route is **not** enough — delete the `vercel.json` entry by hand too)

## 3. Pick ONE high-value fix
Same priority order as the daily loop: **broken in production > blocking discovery > stale cadence pages > readability > content gaps > new features.** Take it from `.claude/dev-loop-backlog.md`.

## 4. Verify, commit, push, log
```bash
npx tsc --noEmit -p tsconfig.app.json && npm test && npm run build
```
Build OOMs in the sandbox — if it dies, say so explicitly. Push, then append a short note to the backlog: what you did, what you skipped, what's next.

Report concisely. Lead with anything alarming.
