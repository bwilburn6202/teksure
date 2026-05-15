# TekSure Roadmap Quarterly Review — 2026-04-27

**Source:** `src/data/roadmapData.ts` (180 items)
**Live:** 156 · **Planned:** 11 · **Exploring:** 4 · **In-progress:** 0

The headline finding: **the roadmap is significantly out of date with what's actually shipped.** Several items still tagged `planned` or `exploring` already have routes, supporting assets, or drafted spec docs in the repo. The roadmap page is reading as more conservative than reality — this should be fixed first, before anything else moves.

---

## Status correction needed (pre-work)

These should be retagged before any of the "ready to start" work below:

| Item | Current | Evidence | Should be |
|---|---|---|---|
| Spanish Language Content | `planned` | `/guias` route live in [App.tsx](src/App.tsx); 50 Spanish guides per memory + Batch 7 in progress | **`live`** (or `in-progress` if the original 30-guide goal hasn't been hit yet — confirm count) |
| Brand Voice Guidelines | `planned` | [.claude/brand-voice-guidelines.md](.claude/brand-voice-guidelines.md) exists | **`live`** if doc is complete, else `in-progress` |
| Audience Persona Documents | `planned` | [.claude/audience-personas.md](.claude/audience-personas.md) exists | **`live`** if doc is complete, else `in-progress` |
| Competitive Positioning Doc | `planned` | [.claude/competitive-positioning.md](.claude/competitive-positioning.md) exists | **`live`** if doc is complete, else `in-progress` |
| Newsletter & Email Template Library | `planned` | `.claude/email-templates/` directory exists | **`in-progress`** |
| Gift a Session Flow | `planned` | `/gift-session` route + [GiftSession.tsx](src/pages/GiftSession.tsx) exist | **`live`** (verify the flow end-to-end) |
| Fake Scam Simulator | `exploring` | `/tools/scam-simulator` route + tool live, linked from Emergency Help | **`live`** |

That's 7 items mistagged. Once retagged, only 4 truly planned items remain: Live Chat Support, TekSure Mobile App, Chrome Extension, Partner Integrations API, Logo Usage Spec — and 3 exploring items.

---

## Ready to start (planned → in-progress)

After the corrections above, these are the items that should formally move to `in-progress` this quarter:

1. **Logo Usage Spec** — All logo SVG variants already exist in `/public/` (horizontal, stacked, gray, wide, plus the favicon set). The asset library is done; only the *written spec* (clearspace, min size, prohibited uses) is missing. This is a 1–2 day deliverable. Pair it with the Brand Voice Guidelines so the brand stack is complete.

2. **TekSure Chrome Extension** — High audience fit (right-click an error message → plain-English explanation). The Error Message Decoder, TekBot, and Tech Jargon Translator are all live, so the extension is mostly a thin wrapper around existing endpoints. Achievable single-engineer scope.

3. **Newsletter & Email Template Library** — Already in motion in `.claude/email-templates/`. Should be promoted to a real branded template set wired into the Resend setup (per the Apr 3 backend migration memory).

---

## Possible to retire (or merge)

- **Live Webinar Series** (`exploring`, Community) — **Monthly Webinars** is already listed as `live`. Either retire the exploring item as duplicate, or rescope it to "Weekly Live Webinars" if there's a real cadence-upgrade plan. Currently it just looks like a stale duplicate.

- **Partner Integrations API** (`planned`, Community) — Overlaps heavily with **B2B / Senior Living Partnerships** (`exploring`). One is the technical capability, the other is the business motion. Recommend merging into a single roadmap line ("B2B partnerships + embeddable widget API") so they're not double-counted.

- **TekSure Mobile App** (`planned`, UX) — Worth a deprioritization conversation. The site already has a PWA manifest, service worker, offline guides, and push notifications — i.e. ~80% of what a native app would deliver for this audience. Native app investment for seniors-60+ is questionable given install friction. Consider retiring in favor of a "PWA polish" line item, or explicitly mark it long-horizon.

- **Peer Teaching Program** (`exploring`) — **Community Ambassadors** is already `live`. If those are different things, the description needs to make that obvious; if they're not, retire one.

---

## Gaps identified

These aren't on the roadmap at all but feel important given the audience and content base:

1. **Caregiver-facing onboarding** — Caregiver Dashboard is live, but there's no equivalent of the Guided Setup Wizard for the caregiver themselves. Adult children are a critical second audience (also the buyers for Gift Subscriptions).

2. **Account / login recovery flow guides** — Locked-out-of-account is the single most common senior tech crisis (Apple ID, Google, Microsoft, Facebook). There are scattered guides but no dedicated "I'm locked out" hub equivalent to the Emergency Tech Help Page.

3. **Hearing & vision profile presets** — Senior Tech Mode, Large Print Mode, High Contrast, and Font Size Adjuster are all live but live as separate switches. A single "Set up TekSure for my eyes / ears" wizard that bundles them would dramatically improve discoverability for the audience that needs them most.

4. **Proactive scam alert push** — Scam Alert Center is live (read), Scam Reporting Tool is live (write), and Push Notifications are live (channel) — but there's no roadmap line for "subscribe to scam alerts in your area" which would tie the three together.

5. **Technician quality / dispute flow** — Technician Profiles, Booking, and Review systems are live, but nothing addresses what happens when a session goes badly. For a paid £15 deposit model serving a vulnerable audience, this is a real trust gap.

6. **Family Tech Sharing follow-through** — Live, but no evidence of cross-account guide-completion sharing ("show your daughter you finished the 2FA guide"). The social proof loop would feed both retention and gifting.

---

## Recommended next-quarter focus (top 3)

1. **Retag the roadmap to match reality, then ship the brand stack.** The 7 mistagged items make the public roadmap underrepresent TekSure. Fix the data, then close out Logo Usage Spec so all 5 brand items move from `planned` → `live`. This is mostly cleanup but it's the highest-leverage task — the roadmap page itself is a trust signal for an audience that needs to see momentum.
   *Rationale: cheap, high-credibility, completes a category.*

2. **Build the Chrome Extension.** It composes existing live capabilities (TekBot, Error Decoder, Jargon Translator) into a new surface that meets users where the problem actually happens — *inside another app or website*. For a "tech help when you need it" brand, this is on-mission and unblocks distribution beyond direct site traffic.
   *Rationale: mission-aligned, leverages prior work, opens a new acquisition channel.*

3. **Caregiver onboarding + account-recovery hub (the two biggest gaps).** Together these address the two highest-stakes scenarios for the target audience and the most likely buyer (adult children). They also slot naturally into the existing Caregiver Dashboard and Emergency Tech Help Page rather than being net-new infrastructure.
   *Rationale: closes the largest mission-critical gaps without expanding surface area.*

Deferred deliberately: TekSure Mobile App (PWA covers it), Live Chat Support (booking + TekBot already meet the need; live chat adds operational cost without a clear gap), B2B / Partner API (worthy but needs a sales motion before engineering, not the other way around).

---

*Generated by scheduled task `teksure-roadmap-review`.*
