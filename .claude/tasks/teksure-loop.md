---
name: teksure-loop
description: "[Goal 2] Daily TekSure health check, cadence pages, and one improvement from the backlog."
---

Run TekSure's daily maintenance loop at `/Users/baileywilburn/Documents/Claude/Projects/TekSure`.

**Read `CLAUDE.md` in that repo first.** It holds the invariants, data shape, brand constraints, git workarounds, and priority order. It overrides anything below.

*(Replaces `teksure-90day-push`. The 90-day sprint closed 2026-08-10 — guides finished at 4,049 against a 4,500 target and the count target was retired by decision. Tools met at 285. Traffic never measured. Do not re-litigate any of this daily.)*

---

## 1. Measure (always first)
```bash
head -40 .claude/dev-loop-backlog.md      # newest cycles at top
node scripts/dev-loop.mjs --once --dry-run
node scripts/audit-senior-ux.mjs
```
**Fix hard failures before anything else.** A broken site is worth less than new content.

## 2. Cadence pages (every run)
```bash
grep -m1 "dateISO" src/pages/TechProblemOfWeek.tsx   # within 7 days
grep -m1 "id: '"  src/pages/WhatsNew.tsx             # covers current month
```
If behind, follow `.claude/prompts/refresh-cadence-pages.md`. Refresh Tech Problem of the Week every run; refresh What's New on the first run of a new month. **Never invent a scam or a release** — every entry traces to a real FTC/CISA/vendor alert or a real commit. A month that shipped nothing gets left out.

## 3. Pick ONE piece of work
Priority order: **broken in production > blocking discovery > stale cadence pages > readability > genuine content gaps > new features.**

Take it from the backlog. One real fix beats four cosmetic ones.

**On content:** guides are no longer quota-driven. Add one only when there's a genuine, verified gap — check the candidate topic against the existing 4,049 slugs first, because at this corpus size most obvious topics are covered and a near-duplicate actively hurts the domain. If you write one, follow the `Guide` shape in CLAUDE.md exactly (`thumbnailEmoji`, `steps[].content`, a category from `GUIDE_CATEGORIES`, excerpt ≤160 chars), import AND spread the batch file in `guides.ts`, include an official source link and a real YouTube reference, and run `node scripts/fix-long-excerpts.mjs` before committing.

**On readability:** currently grade 8.3, ~58.5% above grade 8. Do **not** do a daily 5-guide hand pass — it moves the number ~0.1pp and is the appearance of progress. Either run a scripted bulk pass or state plainly that the number is being accepted. Don't run the splitter scripts blindly; they improve the metric while degrading some prose.

## 4. Verify
```bash
npx tsc --noEmit -p tsconfig.app.json
npm test                       # 104 tests
node scripts/validate-slugs.mjs
npm run build                  # OOMs in sandbox (~3.9GB avail, needs ~8GB)
```
**If the build dies, say so plainly.** Never imply it passed.

## 5. Commit and push
Work that isn't pushed doesn't reach the live site. Use the CLAUDE.md fallbacks for lock files (`mv`, not `rm`) and the `/tmp` fresh-clone route if push fails.

## 6. Report
Append to `.claude/dev-loop-backlog.md`: what changed, before/after numbers, what you deliberately skipped and why, blockers. Then keep the file under 64KB — trim the oldest cycles.

Report back concisely. Lead with anything alarming. No padding.

---

## Raise with Bailey rather than working around
Monetization credentials (AdSense/affiliate) · one full `npm run build` on a machine with ≥8GB · the readability decision · analytics verification · the Hetzner CX22 for hosted Ollama · whether this daily cadence still earns its slot now that the sprint has closed.
