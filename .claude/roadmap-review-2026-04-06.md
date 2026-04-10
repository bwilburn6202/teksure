# TekSure Roadmap Review — Q2 2026
*Generated: 2026-04-06 | Automated quarterly review*

---

## Overview

The roadmap currently has **12 planned** items, **4 exploring** items, and **~130 live** items.
The live section is extremely robust and shows strong autonomous development momentum. This review focuses on the 16 non-live items and identifies gaps the current roadmap doesn't address.

---

## Ready to Start
*Items that should move from `planned` or `exploring` → `in-progress`*

### 1. Printer Troubleshooter Tool (planned → in-progress)
**Why now:** Printers are consistently the #1 frustration point for seniors. TekSure already has:
- A static "Printer Troubleshooting Guide" (live)
- A working pattern to clone: the WiFi Troubleshooter (live, interactive wizard)

This is a direct port of an existing pattern to a proven pain point. The content is largely written; the interface pattern already exists. Low effort, high impact.

### 2. Fake Scam Simulator (exploring → in-progress)
**Why now:** Scam targeting of seniors is the highest-urgency gap in the current offering. TekSure has the Scam Alert Center, the Phishing URL Scanner, and the Internet Safety Course — all passive/reference tools. An *interactive* simulator (realistic fake phishing email, fake "your account was hacked" text, fake tech support call) gives users practice under safe conditions, which research shows is far more effective than reading alone. FTC data shows adults 60+ lose more to scams than any other age group. This is a differentiator no competitor offers in the senior-focused space.

### 3. Spanish Language Content (planned → in-progress)
**Why now:** 42M+ US Spanish speakers, with a large overlap in the 60+ demographic. The infrastructure for multi-language is already live. Starting with the top 10–15 most-visited guides (scam awareness, password safety, video calling, banking app) is achievable in one sprint. This is the single highest-leverage audience expansion available.

### 4. Gift a Session Flow (planned → in-progress)
**Why now:** Gift Subscriptions are already live and working. This is an extension of the same commerce flow, targeting the common use case of adult children buying help for a parent. Booking, Stripe, and confirmation emails are all already wired up — this is primarily UI/UX work with a personalized gifting message layer. High commercial value, low technical risk.

---

## Possible to Retire
*Items that may no longer be relevant or have been superseded*

### 1. Live Webinar Series (exploring)
**Rationale:** "Monthly Webinars" is already marked **live** in the roadmap. "Live Webinar Series" in the exploring section is either a duplicate or a vague expansion of something already delivered. Recommend removing the exploring entry and instead treating webinar *expansion* as a content cadence decision rather than a product feature.

### 2. Logo Usage Spec (planned)
**Rationale:** TekSure is a solo-builder product at this stage. A formal logo spec document has no current consumer — there are no design contractors, no brand partnerships requiring it, and no co-marketing agreements. CLAUDE.md already covers tone and content constraints. If B2B partnerships materialize, revisit. **Not wrong to keep, but not worth prioritizing.**

### 3. Audience Persona Documents (planned)
**Rationale:** The audience is well-established: seniors 60+, beginners new to a device. CLAUDE.md, the design principles, and the content guidelines already encode this deeply. A separate persona doc has limited value unless brought on are content contractors or a marketing team who need onboarding. Low priority for a single-builder operation.

### 4. TekSure Chrome Extension (planned)
**Rationale:** The core TekSure audience (seniors, beginners) is unlikely to install browser extensions — this is a moderately technical action that assumes comfort with the browser's extension store. The audience who would benefit most from "right-click any error message" is actually power users, not TekSure's target. TekBot already handles contextual help within the site. Recommend retiring or reframing as a future B2B embed tool.

---

## Gaps Identified
*Missing features given TekSure's current audience and content — not currently on the roadmap*

### 1. Emergency Tech Help Page
A "What to do RIGHT NOW if..." page covering: phone lost/stolen, account hacked, accidentally clicked a suspicious link, computer showing a warning screen. Seniors frequently panic in these moments and need a calm, step-by-step response guide they can reach in one click. Should be permanently linked in the navbar.

### 2. Guide Freshness Indicators
With 1,000+ guides and autonomous weekly enrichment, users have no way to know if a guide reflects current OS versions. A simple "Last verified: March 2026" timestamp on guide cards and detail pages would build trust and is especially important for safety-critical guides (banking, passwords).

### 3. "My Devices" Personalized Help
The Device Hub exists, but users must re-select their device every visit. A short onboarding quiz (What phone do you have? What laptop?) that personalizes the homepage, search results, and guide recommendations would dramatically improve relevance. TekBot already tries to do this conversationally — formalize it as a persistent profile setting.

### 4. Dark Mode
High Contrast Mode is live, but standard dark mode (dark gray backgrounds, not maximum contrast) is a separate accessibility need — particularly for users who read at night or have light sensitivity. It's a distinct feature from the current high-contrast option and should be added to the Accessibility category.

### 5. "Verified Helpful" Guide Badges
With the rating system live, surface the top-rated guides per category with a "Verified Helpful" badge. This helps seniors who are overwhelmed by guide volume know where to start. Builds on existing rating infrastructure.

### 6. Duplicate Entry in Roadmap Data
**Tech Confidence Score** appears twice in the live section (lines 120 and 134 in roadmapData.ts). This should be deduplicated to avoid a confusing duplicate display on the public roadmap page.

---

## Recommended Next Quarter Focus
*Top 3 priorities with rationale*

### Priority 1: Fake Scam Simulator
**Rationale:** This is TekSure's single highest-impact safety feature gap. Seniors are the primary target of digital fraud. Static guides exist; interactive practice doesn't — anywhere in the senior tech space. A well-built simulator (3–5 realistic scenarios: phishing email, tech support pop-up, fake bank text) would be shareable, media-worthy, and genuinely protective. This is the kind of feature that generates press coverage, AARP referrals, and word-of-mouth.

### Priority 2: Printer Troubleshooter Tool
**Rationale:** Printers are the most common offline support call for seniors. The WiFi Troubleshooter pattern is proven and reusable. This is a high-value, low-effort win that closes a gap every competitor in the space has failed to address interactively. It should take one focused sprint to build.

### Priority 3: Spanish Language Content (Top 15 Guides)
**Rationale:** No other investment doubles the addressable audience. Starting with 15 mission-critical guides (scam awareness, password safety, video calls, banking apps, emergency contacts) delivers immediate value to Spanish-speaking seniors who currently have almost no beginner-friendly tech help available in their language. The multi-language infrastructure is already live — this is a content execution task.

---

## Brand Items Note

The 5 planned Brand items (Brand Voice Guidelines, Logo Usage Spec, Newsletter Templates, Persona Documents, Competitive Positioning) are valuable long-term but are internal/operational in nature — they don't ship user-facing value. Given TekSure's autonomous single-builder model, these are best addressed opportunistically:
- **Brand Voice Guidelines** and **Newsletter Templates** are most immediately useful and could be produced as a one-day writing task.
- Others can stay planned until a business development or hiring trigger makes them necessary.

---

*Next review: 2026-07-06*
