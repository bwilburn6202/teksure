# TekSure improvement prompts

A small library of prompts for improving the site on purpose rather than at random.

Each file is a self-contained brief: what to do, what "good" looks like, and how to
prove it worked. They assume the repo's own tooling does the measuring — opinions are
cheap, `node scripts/...` is not.

## How to use one

Open a session in the TekSure project and say, for example:

> Run `.claude/prompts/improve-readability.md` for 20 guides.

Or point a scheduled task at one (see `.claude/scheduled/`).

## The prompts

| File | Use it when |
|---|---|
| `weekly-site-review.md` | Recurring. Decides what is worth doing next, then does it. Start here. |
| `improve-readability.md` | Guides read above grade 8 — currently the biggest measured gap. |
| `write-new-guide.md` | Adding content. Enforces schema, voice, sourcing, and internal linking. |
| `seo-opportunity-scan.md` | Deciding what to write next based on real search demand. |
| `ux-cohesion-review.md` | A page or flow feels inconsistent or hard for the audience. |
| `refresh-cadence-pages.md` | Weekly. `/tech-problem-of-week` and `/whats-new` advertise a schedule and go stale on their own. |
| `fix-from-dev-loop.md` | The dev-loop backlog has warnings nobody has acted on. |

## Ground rules that apply to all of them

1. **Measure before and after.** `node scripts/dev-loop.mjs --once --dry-run` and
   `node scripts/audit-senior-ux.mjs` give you the numbers. Quote them.
2. **Never break the invariants** in `CLAUDE.md`. They exist because each one was
   already broken once.
3. **Verify before claiming done:** `npx tsc --noEmit -p tsconfig.app.json`,
   `npm test`, `npm run build`.
4. **Commit and push.** Work that is not pushed does not exist — the live site once
   sat 12 weeks behind because of exactly this.
5. **The reader is 72 and frustrated.** If a sentence would not help that person,
   it is not done, however technically correct it is.
