# TekSure — Session Handoff · 2026-04-21

Everything I did this session, plus the exact commands for you to run in your **Mac terminal** to ship it. Sandbox couldn't commit (git index lock + sandbox unlink restriction), so this is the last-mile you need to do manually. None of it is risky — all file edits are already on disk.

---

## Part 1 — Clean up stale files (do this first)

These files exist on your disk but I couldn't remove them from the sandbox. They block git operations and bloat the repo.

```bash
cd ~/Documents/Claude/Projects/TekSure

# Stale git lock that prevented the sandbox from committing
rm -f .git/index.lock .git/HEAD.lock

# Vite HMR leftovers (already added to .gitignore)
rm -f vite.config.ts.timestamp-*.mjs
```

---

## Part 2 — Rotate the GitHub PAT (security — do this second)

Your GitHub Personal Access Token is visible in plain text inside `.git/config` as part of the remote URL. Rotate it before the next push.

**Step 1 — Revoke the old token.** Go to https://github.com/settings/tokens, find the token starting with `ghp_2l9QcyTgVKm2`, click **Delete**.

**Step 2 — Create a new token.** Same page → **Generate new token (classic)**. Scopes: `repo` (full), `workflow`. Copy the new token.

**Step 3 — Rewrite the remote without embedding the token.**

```bash
cd ~/Documents/Claude/Projects/TekSure
git remote set-url origin https://github.com/bwilburn6202/teksure.git
```

**Step 4 — Save the new token to macOS Keychain so git can use it.**

```bash
git config --global credential.helper osxkeychain
# Next push will prompt for username + token; keychain stores it.
```

When the first push asks for a password, paste your **new** PAT.

---

## Part 3 — Commit & push today's work

You're currently on branch `feat/guide-batch-11-apr18` with a pile of uncommitted changes (111 files that were staged before the index lock hit, plus the new work from this session). The plan is: commit the in-flight staged work as its own commit, then commit the 2026-04-21 additions, then push.

```bash
cd ~/Documents/Claude/Projects/TekSure

# --- Confirm we're on the right branch ---
git status
# Expected: "On branch feat/guide-batch-11-apr18" with modified + new files.

# --- Commit 1: the pre-session in-flight work (accessibility IDs, Courses/Practice, new safety tools) ---
git add -A
git commit -m "feat: accessibility main-content IDs, Courses/Practice, safety tools"

# --- Commit 2: new 2026-04-21 work (batch 99, UX fixes, roadmap refresh, plan archive) ---
# Nothing more to stage if the above commit captured everything — git add -A picks up
# src/data/guides-batch-99.ts, edits in src/data/guides.ts, src/index.css, src/pages/Index.tsx,
# src/pages/GuideDetail.tsx, src/App.tsx, TEKSURE-MASTER-ROADMAP-2026-04-19.md,
# TEKSURE-MASTER-PLAN.md (stub), archive/plans/TEKSURE-MASTER-PLAN-2026-04-16.md,
# UX-CRITIQUE-2026-04-21.md, SESSION-LOG-2026-04-21.md, and the updated .gitignore.
# If git status still shows untracked after commit 1, run:
git status
git add -A
git commit -m "feat: batch-99 guides + UX polish + roadmap consolidation"

# --- Push ---
git push origin feat/guide-batch-11-apr18
```

If you'd rather split work into a fresh batch branch (matches the `claude/guides-batch-N` pattern noted in your roadmap), do this instead after the first commit:

```bash
git checkout -b claude/guides-batch-99
git add -A
git commit -m "feat: batch-99 guides + UX polish + roadmap consolidation"
git push -u origin claude/guides-batch-99
```

---

## Part 4 — Verify locally

After pushing:

```bash
cd ~/Documents/Claude/Projects/TekSure

# Type check — should pass cleanly
npm run build

# Dev server — click around, confirm no crashes, visit a few batch-99 guides
npm run dev
# http://localhost:5173/guides/how-to-do-telehealth-appointment
# http://localhost:5173/guides/how-to-use-zoom-video-calls
# http://localhost:5173/guides/set-up-new-iphone
```

If the build fails, it's almost certainly a type issue in `src/data/guides-batch-99.ts` — open that file and match the exact shape of `guides-batch-98.ts`.

---

## Part 5 — What shipped this session

### New files
- `src/data/guides-batch-99.ts` — 25 Tier-1 senior-priority guides (telehealth, Zoom, iPhone/Android setup, Alexa, Maps, SSA, investment scams, MyChart, Bluetooth, photos, imposter scams, recovery, Siri/Google Assistant, Apple Pay, Zelle, delete apps, etc.). All with `sourceName` + `sourceUrl`, 4–7 steps, plain-language bodies.
- `UX-CRITIQUE-2026-04-21.md` — full design & UX audit with 10 prioritized fixes (file:line references).
- `SESSION-LOG-2026-04-21.md` — this file.
- `archive/plans/TEKSURE-MASTER-PLAN-2026-04-16.md` — archive of the 2026-04-16 plan.

### Modified files
- `src/data/guides.ts` — imports `guidesBatch99` and extends `allGuides`.
- `src/index.css` — 16px → 17px base font; global `:focus-visible` ring.
- `src/pages/Index.tsx` — CTA chips 40px → 48px, base text; value-prop copy promoted from muted to foreground.
- `src/pages/GuideDetail.tsx` — article container `max-w-4xl` → `max-w-3xl`; step descriptions promoted from muted to foreground.
- `src/App.tsx` — "Skip to content" link visibly focusable (shadow, ring, semibold).
- `TEKSURE-MASTER-ROADMAP-2026-04-19.md` — updated snapshot (1,289 → 2,696 guides, 19 → 25 categories); added batch-99 row; appended 2026-04-21 session log.
- `TEKSURE-MASTER-PLAN.md` — replaced with a 10-line redirect stub pointing at the master roadmap.
- `.gitignore` — ignores `vite.config.ts.timestamp-*.mjs`.

### Known follow-ups (queued for next session)
1. Collapse the mega-menu from 37 items to 3 pillars (Guides / Tools / Help). See UX critique §2.
2. Rewrite landing hero — stop mimicking AI-chat interfaces; lead with the benefit.
3. Consolidate `/guides` category pills from 25 → 6 groups + secondary filter.
4. Merge duplicate pages flagged in UX critique's redundancy table.
5. Resume the content pipeline at Wave 2 per `knowledge-base/source-plan.md` (seniors + privacy/security + health).
6. Install a lightweight brand layer on top of default shadcn — distinct warm color + serif display face for headings.

---

## Part 6 — To pick up next session

Next time you say "keep working on TekSure" I'll:
1. Check `git status` for drift.
2. Read the latest `UX-CRITIQUE-2026-04-21.md` items still pending.
3. Start a batch-100 branch.
4. Hit the follow-ups above in priority order.

No permission needed to add guides or implement the queued UX fixes. Anything that changes pricing, Stripe, or the `.env.local` model will ask first.
