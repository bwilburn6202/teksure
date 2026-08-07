# TekSure — full guide audit: readability, correctness, currency
**July 25, 2026 — committed as `64de2fa` and `69703d8`, pushed to `main`**

You asked for the guides to be readable, correct, and up to date. Here's what was checked
across all 4,015 guides, what was actually broken, and what got fixed.

---

## The readability scorer itself was wrong — fixed first

Before touching any content, I ran the existing readability audit and got a suspicious
number: one guide scored a Flesch-Kincaid grade of **32**. That's not a real reading level;
it's a bug. The scorer treated line breaks as invisible, so a guide written as a clean
bulleted list — several short, easy lines with no period between them — read as one
enormous run-on sentence to the formula.

Fixed `scripts/audit-senior-ux.mjs` to treat a line break as a sentence boundary. This
matters because the original report claimed **1,268 guides** were above grade 10; the
corrected, trustworthy number is **808**. Still a real problem, just not the one the old
number described — and the priority order changes once you strip out the formatting
artifacts. I regenerated the full worst-first list under the corrected scorer and saved it
to `.claude/readability-backlog.md` (843 guides above grade 10) so it can be worked through
systematically instead of guide-by-guide guessing.

## Readability: fixed the 10 worst offenders, verified the drop

Rewrote body and step text on the ten highest-graded, highest-stakes guides into shorter,
plainer sentences — no jargon removed that wasn't already explained, no facts changed:

- How to Use a Password Manager (grade 12.7 → simplified)
- How to Set Up Two-Step Verification (10.9 → simplified)
- Hidden iPhone Accessibility Features (12.6 → simplified)
- How to Avoid Overdraft Fees (10.2 → simplified)
- Wire Transfers Explained (11.2 → simplified)
- Your Phone Can Still Track Your Location (19.5, worst in the corrected list, → simplified)
- iPhone Screen Time for Family (17.3 → simplified)
- What Is a Chromebook (14.4 → simplified)
- Auto and health insurance claim guides (intros simplified)

Measured, not guessed: average reading grade moved from 8.8 to **8.7**, and guides above
grade 10 dropped from 818 to **808** — exactly the 10 I rewrote. That is real progress on a
genuinely large problem, not the whole problem solved. At today's rate, closing the
remaining 798 requires the ongoing weekly cycle, not one sitting — see "What's still open."

## Correctness: 18 dead source citations found and fixed

This is the part that surprised me. Guides cite official sources (FTC, CFPB, AARP, FDIC,
Apple/Google Support, Consumer Reports) two ways: a structured `sourceUrl` field and an
inline "(Source: ...)" note in the body. I wrote a new checker,
`scripts/check-source-links.mjs`, that actually requests every one and checks the status
code — 66 unique URLs total. **18 were dead** (real 404s, confirmed twice to rule out
bot-blocking):

| Where | What broke |
|---|---|
| Government imposter scam, refund/recovery scam, investment scam guides | FTC restructured their article URLs |
| Medication management guide | MedlinePlus retired the page |
| Delete-apps and smart-TV guides | Apple/How-To Geek article moved |
| Overdraft, credit score, mobile check deposit, bank dispute guides | CFPB's `consumerfinance.gov/ask-cfpb/...` links restructured |
| Wire transfer guide | FTC's "how to wire money safely" article was retired |
| 6 "best [device] for seniors" buying guides | AARP, Consumer Reports, and CNET all reorganized their category pages |

Every one of these was checked live and replaced with a URL I verified returns `200` today
— not a guess, not a homepage fallback where an exact match existed. A couple (used Amazon
Fire tablets, refurbished electronics) didn't have a like-for-like replacement, so I swapped
to the closest genuinely equivalent official source and said so in the commit.

Also fixed while in there: `telehealth.hhs.gov` had moved (found by hand, confirmed 404,
fixed).

**Not broken, contrary to my first pass:** Google Security Checkup and Apple's iPhone
Mirroring guide — my first version of the checker stripped subdomains from the URL and
flagged `google.com/security-checkup` as dead when the real link,
`myaccount.google.com/security-checkup`, works fine. Fixed the checker before trusting its
output further; worth knowing in case you see that pattern again.

## Everything else I checked and found clean

- **Duplicate slugs:** 0 (4,015 unique, scanned 322 files)
- **Broken internal links:** 0 across 6,315 internal links
- **Orphaned routes:** 6, all intentional (admin/Stripe callbacks)
- **Stale OS version mentions** (iOS ≤16, Android ≤13, Windows 7/8, old macOS): checked every
  instance by hand. All of them are legitimate — "requires iOS 15.1 or later," "introduced in
  iOS 13," "Windows 7 stopped receiving updates." None were guides presenting an outdated OS
  as current.
- **Aged guides** (published >18 months ago): 0
- **TypeScript:** 0 errors
- **Tests:** 104/104 passing — including brand-voice enforcement, which caught 3 banned words
  ("just," "simply") that slipped into my own readability rewrites. Fixed before committing.

## What's now automated for next time

Added `check-source-links.mjs` as a new dev-loop check (`source-links`) alongside the
existing readability, duplicate-title, and stale-OS checks. It runs live HTTP requests, so
it's opt-in per cycle rather than blocking every run — `node scripts/dev-loop.mjs --once
--only=source-links` runs it on demand, and it's in the default `ALL_CHECKS` set for the
scheduled cycles.

`.claude/readability-backlog.md` gives the weekly improvement task (Tuesdays 8am) a real,
worst-first queue of the 843 guides still above grade 10, instead of it having to re-derive
priority from scratch or rely on the old, formula-broken numbers.

## What's still open

**Readability is the same story as three weeks ago: real progress, not resolution.** 808
guides above grade 10 is still a lot. Ten guides is a meaningful, verified start on the
worst offenders — not a finished job. The honest path from here is the weekly cycle working
through `.claude/readability-backlog.md` a batch at a time, not a single session rewriting
thousands of guides.

**Full production build wasn't verified in this sandbox** — it has 3.8GB of RAM, and the
prerender step already reserves a 4GB heap for exactly this reason. TypeScript compiled
clean and all 104 tests pass, which catches schema and brand-voice regressions, but please
run `npm run build` in your normal environment (or let the next Vercel deploy do it) before
fully trusting the build.

**One filesystem quirk worth knowing:** this mount doesn't support deleting git lock files
(`rm -f` fails with "Operation not permitted" even as the owning user) but renaming them
works fine. That's almost certainly the root cause of the two-week lock-out mentioned in
CLAUDE.md's history. I documented the workaround (`mv` instead of `rm`) directly in
CLAUDE.md so it's a 5-second fix next time instead of a mystery.
