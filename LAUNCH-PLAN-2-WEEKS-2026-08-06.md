# TekSure — 2-Week Plan

**Window:** Thursday Aug 6 → Wednesday Aug 20, 2026
**Organizing principle:** nobody who needs help fails to get it.
**Second:** the service sustains itself, so the help doesn't stop.

---

## The honest read

Most of the people TekSure helps will never pay you a cent, and that's the point.
`/tools/is-this-a-scam` — paste a message, get an answer — is free, and it's the
single most valuable thing on the site. So the question isn't "how do we sell more
sessions." It's: **who needs this right now and isn't getting it?**

Three answers, and none of them are content problems. You have 4,013 guides. That
is not the gap.

1. **They can't find you.** ~2,400 guides ship without real title/meta tags because
   the prerender run is cut short. Someone types "is this text from my bank real"
   into Google at 11pm and lands nowhere. That's the biggest failure on this list.
2. **They find you and get lost.** 106 tools, six of which free up storage. Two
   navigation bars where "Learn" and "Guides" mean different things. A nervous
   70-year-old doesn't ask for clarification, they close the tab.
3. **The ones you do help aren't held properly.** A person pays a deposit and gets
   no confirmation email. "No fix, no charge" has no field, no trigger, no record.
   Four grief pages may or may not have real content behind them.

**Freeze new guide generation for 14 days.** The scheduled tasks keep running; you
stop spending attention on volume and spend it on whether the existing help lands.

---

## Week 1 (Aug 6–13) — Make the free help findable and trustworthy

### Day 1–2: Fix discoverability (highest impact, nothing else compares)

- **Diagnose the prerender truncation.** Open the latest Vercel deployment, find
  the `[prerender]` lines in the build log, read the last 30. They print progress
  (`done/total`) and failures — one look tells you whether it's a timeout, an OOM,
  or a crash on specific routes. Then fix it. Until this is fixed, roughly a third
  of everything you've written is invisible to search engines and AI answer engines.
- **Verify the fix against real URLs.** `/guides/how-to-use-my-social-security-account`
  and `/guides/telehealth-appointments-see-your-doctor-from-home` were both 404ing.
  Long slugs are the tell.
- **Fix the `/site-index` broken link** — "Terms of Use" points at `/privacy`.

### Day 2–4: Make the site navigable by a scared person

This is the audit's core finding and it's a care issue, not a cleanup chore.
Someone who feels lost feels stupid, and someone who feels stupid leaves.

- **Collapse two nav bars into one.** Learn / Tools / Safety / Ask / Help, or
  Guides / Tools / More — pick one. Never make the user decide what the difference is.
- **Delete the 10 wrong-audience tools.** `google-dork-generator`, `osint-framework`,
  `security-osint`, `cyber-toolkit`, `doc-browser`, `receipt-scanner-demo`,
  `accessibility-check`, the duplicated `llm-knowledge-base` (and "LLM" is jargon you
  promised not to use), `/roadmap`, `/changelog`. Each one tells the target user
  "this site isn't for you."
- **Merge the duplicate clusters — 106 tools → ~55.** Speed 4→2, cleanup 6→2,
  quizzes 6→2, passwords 3→1, reference cards 4→1, device health 3→1, AI front door
  5→1. Nothing of value is lost; the sense of being overwhelmed is.
- **Move the 34 audience hubs behind one "Life situations" page,** out of nav.
  Nobody arrives thinking "I need the Empty Nest Tech Hub."

### Day 4–5: The grief pages — verify or unpublish

`bereavement-tech`, `widowhood-tech-hub`, `dementia-care-tech`, `divorce-tech-hub`.

Read all four in full. If the content is thin, unpublish it today. Someone arrives
at one of these in the worst week of their life; a stub is materially worse than no
page at all. If they're real, they need a gentler tone than a hub grid — plain prose,
no cards, no emoji, no "explore more."

This is the one item on the list where getting it wrong actively harms someone.

### Day 5–7: Hold the people you do serve

- **Deposit confirmation email.** In `stripe-webhook`, after the booking row updates
  on `checkout.session.completed`, read the booking back and invoke
  `send-booking-confirmation` with `paymentOption: 'deposit'`. try/catch, log
  failures, always return 200. ~10 minutes. Right now the person who trusted you
  with a card number is the only one who gets nothing back.
- **Make "no fix, no charge" real.** Add a `resolved / unresolved / no-show` outcome
  field on `bookings`, auto-refund on unresolved, surface the rate in `/admin/console`.
  A promise with no mechanism is a promise you'll eventually break by accident.
- **Fill the two legal blanks** in `/terms` — entity name and governing-law state.

---

## Week 2 (Aug 13–20) — Get it in front of the people who need it

### Reach them where they already are

The people who most need TekSure are the least likely to find it by searching.
Ranked by how many people you actually help per hour spent:

1. **Public libraries.** Librarians field "is this email a scam" every single day
   and have nowhere to send people. One afternoon, three branches, a printed card
   with `/tools/is-this-a-scam` on it. This is the highest-leverage thing you can do
   in two weeks and it costs a tank of gas.
2. **Senior centers and independent living communities.** Same card. Offer to run a
   free 45-minute scam-awareness session — you'll help thirty people at once and
   learn more about what they actually struggle with than a year of analytics.
3. **Nextdoor and local Facebook groups.** Not as advertising — answer the tech
   questions people are already posting, and link the relevant free tool. The adult
   children asking on behalf of a parent are the ones who'll remember you.
4. **Paid search, small and targeted.** $20–30/day on genuinely urgent queries only:
   `locked out of my email`, `is this text a scam`, `computer help for seniors`.
   Point them at the free tool that solves it, not at `/get-help`. If someone's
   problem is solved for free, that's a success, not a lost sale.

### Learn from the first people you serve

- **Run the sessions yourself and log everything.** Actual minutes per job, what
  broke, what they didn't understand. You've never delivered one — you don't yet
  know if a job is 25 minutes or 90, and that determines whether $49/hour is
  sustainable or quietly losing you money.
- **A session script,** ending with: show them how to do it themselves, confirm it's
  fully resolved, mark the outcome. Teaching them to not need you next time is the
  whole business.
- **A remote support tool** where the customer joins from a six-digit code with no
  install and no account. The join flow matters more than the feature list. ~$30–60/mo.
- **A phone number.** This audience calls. Decide whether you answer it or route to
  voicemail with a callback promise you keep.
- **Ask every person for a written review.** The `testimonials` table is empty and
  `/stories` exists. A real quote from someone their age does more to get the next
  nervous person to ask for help than anything you could build.

### On money — the minimum that keeps this alive

Not the priority, but not optional either. Decide once, this week, and stop thinking
about it:

- **Take the full $49 upfront**, with the refund policy as the safety net. Simplest
  path — you currently have no mechanism to collect the remaining $34 at all, and
  building one is a week you'd rather spend elsewhere.
- **Don't add "insured" or "vetted"** until the certificate is on file. Fake tech
  support operations targeting seniors lie on exactly that axis. Being the one who
  doesn't is worth more than the claim.
- Watch one number: unresolved rate. If it's high, people aren't being helped, and
  that's the metric you actually care about anyway.

---

## What "working" looks like on Aug 20

- Every guide you've written is findable by someone typing their problem into Google.
- A frightened person lands on the site and knows what to click within five seconds.
- Nothing published takes advantage of someone in a bad week.
- Everyone who asks for help gets it — and the ones who pay are held properly
  from booking through resolution.
- Librarians in your area know your name.

---

## Decisions I need from you

1. Full $49 upfront, or keep the $15 deposit and build a way to collect the rest?
2. Registered entity name and home state, for `/terms`.
3. Do you answer a phone number, or web-booking only?
4. Which remote support tool — and can I buy it today?
5. The four grief pages: do you want me to read them and recommend keep/unpublish,
   or will you read them yourself?

---

## Explicitly not doing in these 14 days

Adding guides. Hiring technicians. Flipping `ONSITE_AVAILABLE`. The Ollama/Hetzner
server. Tiered pricing. Anything touching Stripe beyond the webhook email and the
refund trigger.
