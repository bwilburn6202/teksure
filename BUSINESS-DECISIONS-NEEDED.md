# Business decisions only you can make

_Last updated: July 26, 2026_

While fixing the money path on the site I hit several points where I could tell
something was wrong or missing, but not what the right answer is — because the
answer depends on how you actually want to run TekSure. Each item below is
blocking something real. They're ordered by how much they cost you to leave alone.

---

## 1. Service area — RESOLVED (July 26): remote-only, nationwide

You confirmed there's no homebase and no technicians placed anywhere yet, so
in-home visits can't be fulfilled. The site now sells **remote support, anywhere
in the United States** — which you can deliver today, with no travel and no
service-area limits.

Nothing was deleted. There's a single flag, `ONSITE_AVAILABLE` in
`src/data/pricing.ts`, currently `false`. Flip it to `true` the day you have
technicians who can travel, and the in-home option, the address fields, and the
travel/mileage pricing all come back across the booking flow, pricing page, and
policy pages at once.

**Before you flip it, you'll need to decide:** the covered ZIPs or city + radius,
so out-of-area customers get told immediately instead of charged and disappointed.

---

## 2. Confirm the pricing model — I picked one for you, out of three

**Status:** resolved, but you should sanity-check my choice.

Three different prices were live on the site at the same time:

| Where | What it said |
|---|---|
| Booking flow (wired to Stripe) | $49 first hour, $29 each additional hour |
| `/pricing` page | Flat tiers: $49 remote / $99 on-site / $149 premium |
| FAQ | "Remote sessions start at $29 for a 20-minute fix" |

A customer could read $29 in the FAQ and be charged $49 at checkout.

I standardised on **$49 first hour + $29/additional hour**, because that's what
the live booking flow charges and what Stripe is actually wired to. Everything
now reads from one file (`src/data/pricing.ts`), so this can't silently drift
again.

**What I need from you:** confirm that's the model you want. If you'd rather
charge more for in-home visits than remote — which is reasonable, since travel
costs you time — tell me and I'll add it properly to both the page and checkout.

---

## 3. Two legal blanks in the Terms

**Status:** `/terms` and `/refund-policy` now exist (Stripe requires a posted
refund policy; you had neither). Both are written and live. Two gaps:

- **Governing law.** The Terms say disputes are governed by "the state in which
  TekSure is registered" without naming it, because I don't know your registered
  entity or home state. Tell me the legal entity name and state and I'll fill it in.
- **Refund turnaround.** I wrote "we process refunds within 2 business days."
  That's a promise you now have to keep. If that's too tight, say what's realistic.

Neither blocks you from operating today, but the first one weakens the terms if
you ever need to rely on them.

---

## 3b. Insurance and the audit — claims are held back until they're real

You said insured and audited are the plan but not yet in place, so **neither word
appears anywhere on the site.** That was deliberate.

Advertising them before they exist would be a false advertising claim. It matters
more than usual here because fake tech-support operations targeting seniors use
exactly those words to sound legitimate — if TekSure is ever caught overstating
on the same axis, it costs far more trust than the claims would have bought.

`TRUST_POINTS` in `src/data/pricing.ts` is the one place to add them. When the
policy is bound and the audit is done, **keep the certificate and the audit report
on file first**, then add them there and they appear across every page at once.

I also removed a badge the old pricing page carried: *"Vetted technicians —
ID-checked, background-verified."* If TekSure is currently one person, that badge
implies a screened team you don't have. It's replaced with three things that are
true today: based in America, no fix no charge, available nationwide.

**When you hire your first technician,** actually run the background check and put
the badge back — it's a strong claim precisely because most competitors can't make
it honestly.

---

## 4. The "no fix, no charge" promise needs an operational rule

The site promises customers pay nothing if you can't fix their problem. That's a
great promise and a real differentiator. But right now it's honour-system: there's
no field on a booking recording whether the job was actually resolved, so nothing
triggers the refund and nothing tracks how often it happens.

**Worth knowing:** if 30% of jobs end unresolved, that's a business problem you'd
want to see early rather than discover from your bank balance.

**Suggested fix (say the word and I'll build it):** add a "resolved / not
resolved" outcome field the technician sets when closing a job, auto-refund the
deposit on "not resolved," and surface the rate in the admin console.

---

## 5. Things I deliberately did *not* touch

- **Stripe edge functions.** `CLAUDE.md` says not to touch these without explicit
  instruction, so I didn't — even though the checkout only ever charges the $15
  deposit and never the remaining balance. Worth checking how you collect the rest.
- **Design.** You asked me to leave it alone, so every new page reuses the
  existing card/section patterns. Nothing visual changed.
- **Testimonials.** The `testimonials` table is empty and `/stories` exists.
  Real customer quotes would help conversion more than almost anything else on
  this list — but they have to be real, so that's on you to collect.

---

## Quick reference: what changed on the site

| Change | Where |
|---|---|
| Single source of truth for all prices | `src/data/pricing.ts` |
| Price shown at service selection, not just checkout | `/get-help` |
| "$15 now, $34 on the day" instead of vague "remainder" | `/get-help` |
| Remote vs in-home choice + address capture | `/get-help` |
| Terms of Service (new) | `/terms` |
| Refund & Cancellation Policy (new) | `/refund-policy` |
| Pricing page restored (was redirecting away) | `/pricing` |
| Footer "Terms" link fixed (pointed at `/privacy`) | site-wide |
| Booking address shown to admin, linked to Maps | `/admin/console` |
