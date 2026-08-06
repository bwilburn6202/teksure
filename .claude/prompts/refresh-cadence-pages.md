# Refresh the cadence pages

**Goal:** keep the two pages that promise a schedule from breaking that promise.

Most of TekSure is evergreen — a guide written last year still helps someone today.
Two pages are not evergreen, because they advertise a cadence in their own copy:

| Page | Promise it makes | Owner |
|---|---|---|
| `/tech-problem-of-week` (`src/pages/TechProblemOfWeek.tsx`) | "Updated weekly" | every weekly run |
| `/whats-new` (`src/pages/WhatsNew.tsx`) | "This Month" + monthly release list | first weekly run of each month |

On 2026-08-06 both were found badly stale: Tech Problem of the Week was showing an
April 14 phishing wave in its current-week slot, nearly four months on, and What's New
still had April content under "This Month". Neither was linked from anywhere, so
nobody noticed. They are linked from the footer now, which means staleness is visible
to visitors. **A page that says "updated weekly" and is four months old costs more
trust than the page earns.**

## Check first (takes a minute)

```bash
grep -m1 "dateISO" src/pages/TechProblemOfWeek.tsx     # current entry's date
grep -m1 "id: '" src/pages/WhatsNew.tsx                # newest release id
```

If the Tech Problem date is within the last 7 days and the What's New release covers
the current month, there is nothing to do here. Say so and move on to other work.

## Refreshing /tech-problem-of-week

1. Find a real, current problem. Acceptable sources only: FTC consumer alerts
   (`consumer.ftc.gov/consumer-alerts`), CISA, IC3, AARP fraud alerts, or an official
   Apple/Microsoft/Google/Samsung support notice. Search the web — do not write from
   memory, and do not recycle a scam that is already covered in a guide unless it has
   genuinely resurged.
2. Move the existing `CURRENT_PROBLEM` object to the top of `PAST_PROBLEMS`, drop its
   `isCurrent: true`, and **fix its tense** — lines like "reports have spiked this
   week" read as false once the entry is historical.
3. Write the new `CURRENT_PROBLEM` with `weekRange`, `dateISO` (the Monday of the
   current week), `description`, `howToCheck`, `whatToDo`, and a `source` that links
   the actual alert. Keep `whatToDo` concrete: what to press, who to call, where to
   report.

## Refreshing /whats-new

Run this on the first weekly run of a new month.

1. Get the facts from the repo, not from memory:
   ```bash
   git log --since="1 month ago" --pretty="%ad %s" --date=short --no-merges | grep -Ei "feat|fix"
   ```
2. Add one `MonthlyRelease` for the month that just ended, newest first, grouping items
   under `guide`, `tool`, `improvement`, and `fix`. Describe each in reader terms —
   "about 2,400 guides had stopped loading" beats "fixed SPA rewrite regression".
3. Update `FEATURED_THIS_MONTH` to the three things a visitor would most want to know.

**If a month shipped nothing, leave it out.** June 2026 is absent on purpose — that was
a dormant stretch, and inventing entries to fill the gap would turn a useful record
into marketing copy. An honest gap is fine. A fabricated release is not.

## Rules

- Never invent a scam, an outage, or a release. Every entry traces to a real source or
  a real commit.
- Plain language and the brand-voice bans still apply (`npm test` enforces them).
- Verify with `npx tsc --noEmit -p tsconfig.app.json && npm test`, then commit and push.
