#!/usr/bin/env bash
# TekSure repo cleanup — dry-run by default.
#
#   bash 08_CLEANUP.sh            # show what would happen, change nothing
#   bash 08_CLEANUP.sh --apply    # actually do it
#
# Run from anywhere; it cd's to the repo itself.

set -uo pipefail

REPO="${TEKSURE_REPO:-$HOME/Documents/Claude/Projects/TekSure}"
APPLY=0
[[ "${1:-}" == "--apply" ]] && APPLY=1

cd "$REPO" || { echo "Repo not found at $REPO"; exit 1; }

say()  { printf '\n\033[1m%s\033[0m\n' "$*"; }
do_it() {
  if [[ $APPLY -eq 1 ]]; then
    eval "$1"
  else
    echo "  would run: $1"
  fi
}

if [[ $APPLY -eq 0 ]]; then
  echo "=== DRY RUN — nothing will be changed. Re-run with --apply to execute. ==="
fi

# Safety: refuse to run with uncommitted work in flight.
if [[ -n "$(git status --porcelain 2>/dev/null)" && $APPLY -eq 1 ]]; then
  echo "ERROR: working tree is dirty. Commit or stash first — this script deletes files."
  exit 1
fi

# ---------------------------------------------------------------------------
say "1. Duplicate scripts from a bad file copy"
# These are live footguns: editing the wrong copy produces a change that never
# takes effect, because package.json references the un-suffixed name.
for f in scripts/*" 2".mjs; do
  [[ -e "$f" ]] || continue
  base="${f/ 2.mjs/.mjs}"
  if [[ -e "$base" ]]; then
    echo "  duplicate: $f  (canonical: $base)"
    do_it "git rm -f -- \"$f\""
  else
    echo "  SKIP — no canonical twin for $f, review by hand"
  fi
done

# ---------------------------------------------------------------------------
say "2. Stale .old-* backups in .claude/ (~460KB)"
for f in .claude/*.old-*; do
  [[ -e "$f" ]] || continue
  echo "  $f ($(du -h "$f" | cut -f1))"
  do_it "rm -f -- \"$f\""
done

# ---------------------------------------------------------------------------
say "3. Trim dev-loop-backlog.md to the most recent cycles"
BACKLOG=".claude/dev-loop-backlog.md"
if [[ -f "$BACKLOG" ]]; then
  SIZE=$(du -h "$BACKLOG" | cut -f1)
  echo "  currently $SIZE — read at the start of every scheduled run"
  # Newest cycles are at the top, so head is the keep-set.
  do_it "head -c 65536 \"$BACKLOG\" > \"$BACKLOG.tmp\" && printf '\n\n_(older cycles trimmed %s)_\n' \"\$(date +%%Y-%%m-%%d)\" >> \"$BACKLOG.tmp\" && mv \"$BACKLOG.tmp\" \"$BACKLOG\""
fi

# dev-loop-state.json keeps a 50-cycle history; that's the sanctioned cap.
# If it's over ~200KB the cap isn't being enforced — flag, don't auto-edit.
STATE=".claude/dev-loop-state.json"
if [[ -f "$STATE" ]]; then
  BYTES=$(wc -c < "$STATE")
  if (( BYTES > 200000 )); then
    echo "  WARN: $STATE is $(du -h "$STATE" | cut -f1) — the 50-cycle cap may not be enforced."
    echo "        Check the history-trim logic in scripts/dev-loop.mjs. Not auto-editing state."
  fi
fi

# ---------------------------------------------------------------------------
say "4. Archive one-off audit reports from the repo root"
# Keep: README, CLAUDE, CONTRIBUTING, DESIGN, and the two current plans.
KEEP="README.md CLAUDE.md CONTRIBUTING.md DESIGN.md TEKSURE-MASTER-PLAN.md LAUNCH-PLAN-2-WEEKS-2026-08-06.md ANALYTICS-SETUP.md OLLAMA_SETUP.md TESTING_STRATEGY.md"
do_it "mkdir -p docs/archive"
for f in *.md; do
  [[ -e "$f" ]] || continue
  if [[ " $KEEP " == *" $f "* ]]; then continue; fi
  echo "  archive: $f"
  do_it "git mv -f -- \"$f\" docs/archive/ 2>/dev/null || mv -f -- \"$f\" docs/archive/"
done

# ---------------------------------------------------------------------------
say "5. Stale git lock files (mount quirk: rm fails, mv works)"
COUNT=$(ls .git/*.lock.* .git/*.lock 2>/dev/null | wc -l | tr -d ' ')
echo "  $COUNT lock/backup files in .git/ — harmless, documented in CLAUDE.md."
echo "  Leave them. 'rm' returns 'Operation not permitted' on this mount by design."
echo "  If a live lock ever blocks a commit:  mv .git/index.lock .git/index.lock.stale-\$(date +%s)"

# ---------------------------------------------------------------------------
say "6. Screenshot generators — review by hand, not automated"
ls scripts/gen-screenshots-*.mjs 2>/dev/null | sed 's/^/  /'
echo "  13 near-identical generators, one per platform. Consolidating them into a single"
echo "  parameterised script is worth doing, but it needs a human read — not scripted here."

# ---------------------------------------------------------------------------
say "Done."
if [[ $APPLY -eq 1 ]]; then
  echo "Now verify before committing:"
  echo "  npx tsc --noEmit -p tsconfig.app.json && npm test && node scripts/validate-slugs.mjs"
  echo "  git add -A && git commit -m 'chore: remove duplicate scripts, archive stale reports, trim backlog'"
else
  echo "Nothing changed. Re-run with --apply once you've read the plan above."
fi
