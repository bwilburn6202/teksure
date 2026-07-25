# Weekly site review

**Goal:** decide what would most improve TekSure this week, do it, and prove it helped.

This is the entry-point prompt. It exists because the failure mode of an automated
content pipeline is not laziness — it is *busyness*: generating more guides while the
site quietly breaks, ranks for nothing, or drifts away from the people it serves.

## 1. Look before deciding

Run these and read the output properly:

```bash
node scripts/dev-loop.mjs --once --dry-run     # health, links, duplicates, readability
node scripts/audit-senior-ux.mjs               # reading level, type size, a11y
head -60 .claude/dev-loop-backlog.md           # what previous cycles found
git log --oneline -15                          # what changed recently
```

Then check what the outside world sees — the site is useless if it cannot be found:

```bash
curl -s https://www.teksure.com/sitemap.xml | grep -c "<loc>"
curl -s https://www.teksure.com/guides/qr-codes | grep -oE "<title>[^<]*</title>"
```

That last one must return the *guide's* title, not the generic site title. If it
returns the generic one, prerendering has regressed and **nothing else matters this
week** — fix it first (`scripts/prerender.mjs`, wired into `npm run build`).

## 2. Choose by impact, not by ease

Rank candidate work by how many real people it helps:

1. **Anything broken in production** — a crashing page, a dead link, a failed deploy.
2. **Anything blocking discovery** — missing/duplicate titles, prerender regressions,
   sitemap staleness, robots mistakes. Content nobody can find has zero value.
3. **Readability of existing guides** — currently ~78% sit above grade 8. Improving an
   existing guide that already gets traffic beats adding a 4,001st guide.
4. **Gaps in coverage** the audience actually searches for (`seo-opportunity-scan.md`).
5. **New features** — only when the four above are clean.

Write down the choice and the reason before starting. If the honest answer is
"nothing is broken and coverage is good", improving readability is always available.

## 3. Do the work

Use the matching prompt (`improve-readability.md`, `write-new-guide.md`, …). Keep the
change reviewable: one coherent theme per commit.

## 4. Prove it

Re-run the same measurements and state the delta plainly:

> Reading grade 9.5 → 9.2; guides above grade 8: 78.1% → 74.4%; 104/104 tests pass.

Then:

```bash
npx tsc --noEmit -p tsconfig.app.json
npm test
npm run build
git add -A && git commit -m "..." && git push
```

## 5. Leave a note for next time

Append a short entry to `.claude/dev-loop-backlog.md` describing what you did, what you
deliberately skipped, and what you would do next. The next run starts by reading it —
that continuity is what makes this compound instead of thrash.

## What not to do

- Do not add guides just to raise the count. 4,000 mediocre pages rank worse than 400
  excellent ones, and Google increasingly treats bulk thin content as a quality signal
  against the whole domain.
- Do not "fix" a warning by loosening the check. If a check is wrong, fix the check and
  say so in the commit.
- Do not rewrite content to hit a readability number at the cost of accuracy. A guide
  that is simple and wrong is worse than one that is correct and slightly hard.
