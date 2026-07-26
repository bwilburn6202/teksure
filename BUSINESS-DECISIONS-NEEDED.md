# Business decisions only you can make

_Last updated: July 26, 2026_

While fixing the money path on the site I hit several points where I could tell
something was wrong or missing, but not what the right answer is — because the
answer depends on how you actually want to run TekSure. Each item below is
blocking something real. They're ordered by how much they cost you to leave alone.

---

## 1. What is your service area? — blocks in-home bookings

**Status:** the booking flow now asks whether the customer wants remote or
in-home help and collects their address. Nothing validates that address.

**Why it matters:** someone in another state can book an in-home visit, pay a
$15 deposit, and nothing stops them. You'd have to refund it and apologize. The
site also says "travel within 10 miles" and "$0.45/mile beyond" without saying
10 miles *from where*.

**What I need from you:** the ZIP codes or the city + radius you actually cover.
Once you tell me, I'll add the check to the booking form so out-of-area
customers are told immediately and offered a remote session instead — rather
than being charged and disappointed.

**Interim option:** if you're only doing remote work right now, say so and I'll
hide the in-home option entirely. That's a 10-minute change and it's better than
promising something you can't deliver.

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
