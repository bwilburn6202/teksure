# Creative Loop — Autonomous Content Pipeline

The **creative-loop** is TekSure's autonomous content generator. It complements
the read-only **dev-loop** by actually shipping new guides each run.

## What it does

Each cycle:

1. Picks the next un-used topic(s) from `topics.mjs` (skipping any whose slug
   already exists in the repo).
2. Renders a complete `guides-batch-{N}.ts` file with full guides (body, steps,
   tips, warnings — all in plain language).
3. Wires the new batch into `src/data/guides.ts` (import + spread into
   `allGuides`).
4. Runs `validate-slugs.mjs` to guarantee no duplicates.
5. Commits with `feat(content): batch {N} — {titles}`.
6. Pushes to `origin/main` with retry/back-off.
7. Persists state in `.claude/creative-loop-state.json` and appends to
   `.claude/creative-loop-log.md`.

If anything fails mid-cycle, it rolls back the batch file and `guides.ts`
edit before exiting.

## Where the content comes from

`scripts/creative-loop/topics.mjs` is a curated library of plain-language
guides — each entry is the full content of one guide (title, excerpt, body,
steps, tips, warnings). The loop is intentionally **deterministic**: no
external API calls, no LLM at runtime. To add new content, append to the
array and the loop will pick it up on the next cycle.

## Brand-safety guards built in

The loop scans every topic for the project's banned filler words before
writing it (`just`, `simply`, `obviously`, `leverage`, `utilize`,
`seamless`, `cutting-edge`, etc.) and skips any that contain them. It also
runs `validate-slugs.mjs` after writing to ensure no duplicate routes ship.

## Running it

```bash
# Single cycle (1 topic), commit + push
npm run loop:creative

# Plan only — see what would happen
npm run loop:creative:dry

# Local — write + commit, but skip push (useful for review)
npm run loop:creative:local

# Burst mode — 5 cycles, 2 topics each (10 new guides)
npm run loop:creative:burst

# Custom
node scripts/creative-loop.mjs --cycles=3 --topics=1
```

## Automation

A GitHub Action at `.github/workflows/creative-loop.yml` runs the loop daily
at 14:23 UTC and on demand from the Actions tab. The bot user is
`teksure-creative-loop[bot]`.

## Adding more topics

Open `scripts/creative-loop/topics.mjs` and append entries to the
`CREATIVE_TOPICS` array. Each entry needs:

```js
{
  slug: 'unique-slug',
  title: 'Plain-language title',
  excerpt: 'One sentence under 160 chars.',
  category: 'safety-guides', // see GuideCategory in src/data/guides.ts
  tags: ['tag1', 'tag2'],
  emoji: 'shield',           // shorthand mapped to a real emoji in the loop
  difficulty: 'Beginner',
  readTime: '5 min',
  body: `Multi-paragraph body...

(Sources: ...)`,
  steps: [
    {
      title: 'Step title',
      content: 'Step body in plain language.',
      tip: 'Optional Quick Tip',
      warning: 'Optional warning',
    },
  ],
}
```

Topics are picked in array order, and any whose slug is already in the repo
is skipped automatically — so you can re-add similar topics without worry
about collisions.
