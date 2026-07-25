# Fix what the dev-loop found

**Goal:** turn the automated warnings into actual fixes, so the backlog stays a work
queue instead of becoming wallpaper.

A check that warns for months and is never acted on is worse than no check — it teaches
everyone, human and agent, to scroll past warnings.

## Read the queue

```bash
node scripts/dev-loop.mjs --once --dry-run
head -80 .claude/dev-loop-backlog.md
```

## What each warning means and how to fix it

**`typescript` — compile errors**
Stop everything else. This usually means guide data was written in a shape the `Guide`
type does not allow (`emoji` instead of `thumbnailEmoji`, `steps[].description` instead
of `content`, a category not in `GUIDE_CATEGORIES`). Fix the data, not the type — the
type is what stops broken pages shipping.

**`slugs` — duplicate slugs**
Two guides claim one URL; one is unreachable. Usually an automation regenerated an
existing batch. Delete the true duplicate, or rename if the content genuinely differs.

**`links` — broken targets / orphaned routes**
Broken targets are dead links: fix or remove them. Orphans are pages nothing links to;
`/tools/all` covers tool pages automatically, so a new orphan usually means a page that
needs a home in the navigation. Six orphans (admin + payment callbacks) is the expected
floor.

**`duplicate-titles`**
Two guides competing for one query. Run `node scripts/fix-duplicate-titles.mjs --dry-run`,
check the pairing is sane, then apply. It sets `canonicalSlug` on the weaker page.

**`stale-os` — outdated OS versions**
Only real currency claims count. "Introduced in iOS 14" is a historical fact and the
check is written to skip it. If you see false positives, tighten the check rather than
editing correct sentences.

**`senior-ux` — reading level**
Hand to `improve-readability.md`.

**`old-guides` — aged content**
Re-verify the steps against the official source, update anything that changed, and bump
`lastVerifiedAt`. Do not just change the date — that is lying to the reader.

## Rules

- Fix the cause, not the symptom. If a check is wrong, change the check **and say so in
  the commit message** so the next person knows it was deliberate.
- One theme per commit; a 300-file commit cannot be reviewed or reverted cleanly.
- Re-run the loop afterwards and quote the before/after in the commit.

## Verify

```bash
npx tsc --noEmit -p tsconfig.app.json
npm test
npm run build
node scripts/dev-loop.mjs --once --dry-run
git add -A && git commit -m "fix: ..." && git push
```
