# TekSure Next-Gen Strategy
**A redesign and expansion plan for a tech-help platform that works for everyone — seniors, beginners, and lifelong learners.**

*Prepared April 19, 2026. Pairs with `teksure-next-gen-mockup.html` for visual reference.*

---

## 1. Executive Summary

TekSure today is ambitious: 1,200+ guides, 99 tools, 112 pages, a Brain search layer, and scheduled autonomous content ops. But the surface a first-time 70-year-old visitor sees — a single search box on a blank dark-mode screen — asks them to already know what to type. And the 99 tools / 16 categories / 4 navbar dropdowns behind the scenes assume they can self-navigate.

The opportunity: keep the depth, but **put a confident, tier-aware front door on top of it**. Every person who lands on TekSure should, within 10 seconds, see:

1. A human-feeling welcome that names their situation ("New to this? Getting more confident? Helping someone else?")
2. Three giant, icon-labeled doors that match the three most common jobs: *learn something*, *fix something*, *check if something is safe*
3. A voice-input option, a "read this to me" option, and a visible size-and-contrast control — not buried in a hamburger

This document proposes: (a) a visual UI redesign grounded in 2025–2026 senior UX research, (b) an experience-level segmentation system with four tiers from *Just Starting* to *Power User*, (c) 35 new tool ideas across OSINT, daily life, money, and learning, and (d) a gamified learning-path layer that treats TekSure as a genuine school rather than only a reference site.

The companion `teksure-next-gen-mockup.html` shows what the redesigned homepage and tier picker feel like in the browser.

---

## 2. Diagnosis — What the Current Site Does Well and Where It Hurts

### What's working
- **Depth of content.** 1,200+ guides, 99 tools, Spanish version, Brain semantic search, caregiver and veteran hubs — the library is genuinely impressive.
- **Accessibility hooks already exist.** `FontSizeToggle`, `DarkModeToggle`, `SeniorModeToggle`, `HighContrastToggle`, `LanguageToggle`, skip-to-main-content — the plumbing is present.
- **Guide difficulty labels.** The `Beginner / Intermediate / Advanced` tier on `Guide` is already enforced by the type system.
- **Brand discipline.** Banned-words list (no "simply", "just", "obviously", "leverage") is a strong start.
- **Free + American-owned positioning.** Clear, repeatable, and differentiated from paid services like Geek Squad and Best Buy's Total Tech Support.

### Where it hurts a 60+ first-time visitor
- **The landing page is a blank search box.** Minimalism that works for ChatGPT doesn't work for a user who came here *because they don't know what to ask*. Per NN/g, 65+ users are 43% slower than 21–55 users and struggle most when a site gives them no visual starting point.
- **Default dark mode on the public site.** The site flips to dark mode on first load for non-logged-in users. Older eyes with reduced contrast sensitivity read dark-on-light better than light-on-dark by a meaningful margin — and a site that teaches tech should model accessible defaults.
- **Navbar has four dropdowns** (Guides, Safety, Learn, Support) with 30+ links total. NN/g research: dropdowns with declining motor skills are a known hazard. The same research recommends flatter, visible navigation.
- **Difficulty labels without a difficulty path.** Every guide has `Beginner/Intermediate/Advanced` — but there is no place where a visitor declares "I'm a beginner" and has the whole site reorganize itself around that. The tier information is descriptive, not prescriptive.
- **Tool list is a wall of 99 cards.** With no onboarding to match person → right tool, most users will bounce.
- **No "what does this site do for me?" moment above the fold** on the landing. "Tech help that speaks your language" is a brand line, not a value demonstration.
- **Icons without always-visible labels.** Some nav items rely on icon recognition (`ShieldAlert`, `Wrench`) — seniors need icon *plus* text label, research shows ~15% icon-recognition penalty in 65+ cohort.

### The central design question
> *If you drop a 72-year-old grandmother on TekSure with a phone she doesn't understand, can she, on her own, get unstuck in under three minutes — without typing, without reading jargon, and without getting scared by options she doesn't recognize?*

Right now: not reliably. The rest of this document is how we get to "yes."

---

## 3. Visual UI Redesign

The guiding principle is **warm minimalism with visible scaffolding** — not cluttered, but never leaving a user alone on a blank page wondering what to do. Every screen should answer three questions for the user: *Where am I? What can I do from here? What happens if I click this?*

### 3.1 Landing page — the new homepage

Current: dark-mode, centered search box, five text chips, one line of stats.

Proposed: a **three-mode homepage** that adapts based on who's visiting.

**Mode 1 — First-time or logged-out visitor (default).**
- Light-mode by default, warm off-white (#FAF8F4) background, near-black (#1A1A1A) body text, ≥ 18px base body / 56px hero. WCAG AAA contrast (7:1+).
- Hero line: one sentence, conversational: **"Tell us how tech feels to you right now. We'll meet you there."**
- Below the hero, a **four-tile tier picker** (not a search box as the primary action):
  - 🌱 **Just Starting** — "I'm new to this and that's okay."
  - 🌤️ **Getting Comfortable** — "I use a phone/computer but get stuck."
  - ☀️ **Confident** — "I'm decent with tech. Show me more."
  - ⚡ **Power User** — "I want the advanced stuff."
- Each tile is a giant button — minimum 88×88px tap target (well above WCAG 2.5.5 enhanced 44×44), icon + large label + one line of plain-language description.
- Secondary row of **three "jobs to be done"** doors — also giant buttons:
  - 🧑‍🏫 **Teach me something** → learning paths
  - 🛠️ **Fix something** → quick fixes + troubleshooter
  - 🛡️ **Is this safe?** → scam/URL/number/email checks
- The old search box **becomes a "Try asking" affordance** below the fold, not the primary action. Text: *"Or, if you know what you're looking for, type it here."* With a mic button next to it (already have Speech API in the stack).
- A small sticky "Need a real person?" pill in the bottom-right corner — always visible, never obscured.

**Mode 2 — Returning visitor (has a tier selected in localStorage).**
- Hero shifts to **"Welcome back. Here's where you left off."**
- Shows their skill-tree (see §4), last guide in progress with a big **"Continue"** button, and 3 recommendations tuned to their tier.
- Streak indicator (gently — a "You visited 4 days this week 🌱" chip, not a Duolingo-style panic streak).

**Mode 3 — Logged-in dashboard.** Already exists; integrate the tier-based recommendations into `/customer`.

### 3.2 Navigation — flatten and label

Current: logo | Guides | Tools | Safety | Get Help + dropdowns. 30+ links across dropdowns.

Proposed:
- **Five top-level items only, all with text labels** (no icon-only links): **Learn · Tools · Safety · Ask · Help.**
- **No dropdowns on desktop.** Replace with a full-width **"Explore" mega-page** at `/explore` — flatter structure with section headings and big cards. Per NN/g, older users prefer a flat "all options visible at once" to dropdown disclosure.
- **Persistent accessibility tray** pinned to the top-right of every page, always visible (never behind a hamburger): one row with four buttons — text size A− A A+, high contrast toggle, read aloud 🔊, translate 🌐.
- **Bottom navigation bar on mobile** (5 icons with labels below each, minimum 64px height) — matches iOS/Android patterns seniors already know.
- **Breadcrumbs on every non-home page.** Visible, 16px, with "Home >" never hidden.

### 3.3 Typography, color, motion

| Property | Current | Proposed |
|---|---|---|
| Default body size | 14–16px | **20px body / 56px hero / 32px h2** |
| Default theme | Dark (public) | **Light by default**, dark is opt-in |
| Line height | ~1.5 | **1.65 for body paragraphs** |
| Tap targets | Mixed | **≥ 56px tall buttons, ≥ 44×44 minimum** |
| Button style | Pill, low-contrast border | **Solid fill, visible border, 3D hint via shadow** — affordance clarity matters more than trend |
| Font | Inter 400/500/600/700 | Keep Inter, **but bump weight floor to 500** for body — 400 reads thin on low-contrast displays |
| Animation | Tailwind defaults | **Respect `prefers-reduced-motion`, limit all transitions to ≤ 200ms, no parallax, no autoplay** |
| Focus ring | Default | **4px solid, high-contrast, on every interactive element** — keyboard users never lose their place |

### 3.4 Component patterns

- **Every icon carries a label.** No icon-only buttons anywhere on a public page.
- **Every action is confirmed.** "Your guide was saved" toast, 4-second minimum dwell, with an undo where destructive.
- **Every destructive action asks twice** in a readable modal, *not* a JavaScript confirm().
- **Every link to an external site** shows the destination domain next to the link text and opens in a new tab with `rel="noopener"` — "Read more at apple.com (opens a new window)".
- **Every tool has a "Why this matters" section up top** (2 sentences) and an "If this looks scary, here's a plain-English version" toggle.
- **Every page has a "Was this helpful?" thumbs at the bottom** wired to analytics.
- **Skip-to-main-content link** is already in the code — make it visible on focus, not `sr-only` by default (a visible skip-link helps sighted keyboard users too).

### 3.5 The "Senior Mode" upgrade

`SeniorModeToggle` already exists. Expand what it does into a complete environment shift:

- Base font size → 22px body
- Line height → 1.8
- Reduce tool density on every page (2-column → 1-column cards)
- Hide "Power User" category entirely unless user asks
- Auto-enables Read Aloud button on every long-form page
- Auto-enables "Big Buttons" style in forms (min 64px height)
- Auto-adds a persistent floating 📞 "Call a real person" button
- Auto-adds a "🧓 Mode is on" subtle banner (dismissible), so a caregiver setting it up can tell it's active

### 3.6 Dark mode

Keep it, but:
- **Default to light on the public site.** Current auto-dark on the marketing pages is surprising for users who opened a link from a text — dark web pages are still a minority default in the age group.
- **Night Shift mode** — warm-palette dark with elevated contrast (amber-leaning, not cool blue) for users reading at night.
- **OS sync option** — respect `prefers-color-scheme` as a third choice.

---

## 4. Experience-Level Segmentation System

This is the structural change that makes every other change work. Today TekSure has difficulty tags on guides. Tomorrow it should have a **tier-aware identity** that routes content, language, tools, and even the homepage.

### 4.1 The four tiers

| Tier | Codename | Plain description | Example skills |
|---|---|---|---|
| 1 | **Just Starting** 🌱 | "I'm new to this and that's okay." | Turn a phone on, get on Wi-Fi, send a text, take a photo, use the camera roll |
| 2 | **Getting Comfortable** 🌤️ | "I use tech but get stuck." | Install an app, use video call, save a photo to a folder, block spam, update OS |
| 3 | **Confident** ☀️ | "I'm decent — show me more." | Use a password manager, set up 2FA, spot a phishing email, use cloud backup, factory reset |
| 4 | **Power User** ⚡ | "Show me advanced stuff." | VPN, network diagnostics, scripting, dev tools, OSINT, self-hosting, CLI basics |

### 4.2 Placement test (optional, short, never shameful)

A **5-minute, 10-question placement quiz** — adapted from the Northstar Digital Literacy framework, but softer and friendlier. Users can:
- Skip it and pick their own tier
- Take it and get a recommended tier + 3 starter guides
- Retake it any time

Question style (plain language, multiple choice, one at a time, big buttons):
> *"When you get an email from someone you don't know with a link in it, what do you usually do?"*
> - I click to see what it is
> - I delete it without opening
> - I look at who it's from first, then decide
> - I check the link first with a tool before clicking

No "wrong" answers surfaced as wrong — every answer routes into a supportive recommendation.

### 4.3 What the tier changes across the site

When a user selects a tier (or takes the quiz), the following shifts:

1. **Homepage.** The recommendation cards, featured guides, and skill-tree all scope to that tier.
2. **Guide library.** Default sort is tier-first, with a clear "Show me guides above my level →" link so people can reach up.
3. **Tools page.** Tools are grouped by tier, with a big "These might be too much for right now" section that's **collapsed** for Tier 1 but visible for Tier 3+.
4. **Language.** Higher-tier pages can use a short glossary inline (with hover definitions); lower-tier pages expand every term the first time it appears.
5. **Search results.** Tier-scoped by default with a "Search all levels" toggle.
6. **TekBot / Brain.** Responses match the tier — Tier 1 gets 5-step explanations with emoji; Tier 4 gets CLI snippets.
7. **Email newsletter cadence and content.** Tier 1 gets one digest a week; Tier 4 opts in to deeper weekly technical content.

### 4.4 Skill trees and progress

Take Khan Academy's 5-level mastery model (Not Started → Attempted → Familiar → Proficient → Mastered) and apply it to a **visual skill tree at `/my-path`** that shows:

- A branching graph of clustered skills (Wi-Fi · Email · Safety · Phone · Computer · AI · Money · Smart Home)
- Each node is a guide or short course; mastery is proven by completing the guide + a 3-question mini-quiz at the end
- Filled-in nodes glow softly; unstarted nodes are ghosted
- Earning a node awards a named badge ("Scam Spotter 1", "Wi-Fi Whisperer", "Password Pro") — never numeric XP, never a "score"
- Streaks exist but are **gentle**: "You visited 4 days this week" not "🔥 11-day streak or you lose it". Research with adult learners: loss-aversion streaks can shame seniors into quitting; supportive streaks keep them coming back.
- **No leaderboards by default** — comparison demotivates adults, per the research. Opt-in only, friend-group only.

### 4.5 Certificates that mean something

Already have `Certificate.tsx`. Upgrade:
- Named certificate at the end of each course (e.g., "TekSure Scam Defense — Level 1")
- Downloadable, printable, PDF-exportable
- QR code links back to a public verification page
- Eventually: coordinate with local libraries and community colleges so TekSure certificates can be shown as proof of digital-literacy training for job-search purposes

---

## 5. New Tools — 35 Ideas

Organized into five categories. Each includes: what it does, who it's for, how it's ethically/legally viable, and rough tech approach.

### 5.1 OSINT & Online Safety (12 new tools)

These are the "scan the internet for me" tools. Key principle: **we scan, we explain, we never expose raw OSINT that could enable stalking.** Everything is oriented toward *self-protection*, not *investigation of others without consent*.

1. **MyDigitalFootprint Scan** — enter your email + name, we query HIBP, Mozilla Monitor, DeHashed-free-tier, and public breach archives; return a plain-English "here's where you've leaked" summary with a one-click remediation checklist. *Already partially built as `DataLeakDashboard`; expand.*

2. **Dark Web Exposure Check** — uses HIBP API v3 + Dehashed for email/phone; returns a tier-appropriate explanation. Tier 1 gets "your password from 2019 was found — here's how to change it"; Tier 4 gets the raw breach list.

3. **URL Safety Scanner** (consumer-grade) — paste a link, we run it through Google Safe Browsing API, PhishTank, URLhaus, and URLVoid; give a traffic-light verdict. *Already have `UrlSafetyChecker`; rebuild with multi-source aggregation.*

4. **Phone Number Safety Scanner** — aggregate RoboKiller public API + community reports + FTC robocall database + area-code red flags; explain who likely called and whether to call back. Never expose the owner's name or address.

5. **Email Address Reputation Checker** — is this sender address known for scams? Uses PhishTank + Spamhaus + crowdsourced reports; *does not* expose reverse-lookup personal data.

6. **Text Message (SMS) Scam Decoder** — paste the text of an SMS, we classify it (delivery scam / bank scam / gift card scam / romance / job / etc.), explain the playbook, and draft a reply to the carrier (reply "STOP" or forward to 7726).

7. **Invoice & Bill Deepfake Detector** — upload a PDF or photo of a bill/invoice you weren't expecting; we cross-check the sender domain, phone, and logo against known scam registries. *Pairs with `IsThisAScam`.*

8. **Photo Reverse-Lookup** — "Is this actually who they say they are?" For online-dating and romance-scam prevention. TinEye API + Google Lens approach; returns "this photo has been seen 42 times across these domains."

9. **QR Code Safety Preview** — scan a QR, we show you the destination URL and run it through the URL Safety Scanner *before* you open it. Huge for parking meters and restaurant tables.

10. **Wi-Fi Network Safety Scanner** — companion mobile/web tool: the user types the SSID they're about to join; we tell them if it matches a known evil-twin pattern or public-Wi-Fi red flags. Pairs with a "what to do on public Wi-Fi" guide.

11. **App Permission Auditor (browser-side)** — for Chrome/Edge extensions and web app permissions — scan and explain what each permission actually allows. Adjacent to the existing `AppPermissions` page but automated.

12. **Data-Broker Opt-Out Autopilot** — we already have `DataBrokerRemoval`; expand it into a guided, templated opt-out flow for the 50 biggest US brokers (WhitePages, Spokeo, BeenVerified, Intelius, etc.) with status tracking. This is the #1 most-requested consumer-privacy action, and no free service does it well.

### 5.2 Everyday Life & Comprehension (8)

13. **What Did That Error Mean?** — paste or photograph any error message or blue-screen; plain-English translation + 3-step fix. *Builds on `ErrorDecoder`; add image upload with OCR.*

14. **Jargon Decoder Inline** — a Chrome extension + site integration: hover any unfamiliar term on any site, get a TekSure-authored plain-English definition. Expands `JargonTranslator` from a single page into a browser-everywhere tool.

15. **Plain-English Rewriter** — paste a bank letter, insurance EOB, tax notice, IT-helpdesk reply — get a 3-sentence plain version + "here's what they're asking you to do." Uses local LLM (Ollama) via the Brain infra already deployed.

16. **Form Filler Helper** — photograph a paper form or upload a PDF; we explain every field in plain language and pre-fill what we can safely guess (from profile). Critical for Medicare/Social Security/DMV forms.

17. **Appointment & Reminder Wizard** — for folks who don't trust calendar apps: big-print appointment card with QR code + SMS reminder + "read this to me" audio version.

18. **Tech Receipt Vault** — photograph any tech receipt/warranty; we OCR, categorize, and remind you before the warranty expires. *Builds on `ReceiptScannerDemo`; make it the real thing.*

19. **Family Tech Passport** — a one-page printable with the household's router password, streaming logins (hashed/one-time-codes only for safety), emergency tech contacts, doctor portals. Printable, large-type. Solves the "I wrote it on a sticky note" problem safely.

20. **Gift-Recipient Tech Confidence Card** — when you buy tech for a grandparent, generate a printable "here's how to get started" card tailored to their confidence tier. Pairs with `TechGiftGuide`.

### 5.3 Money, Subscriptions & Tech Bills (6)

21. **Subscription Auditor** — *already exists* (`SubscriptionAuditor`). Deepen: plug into plaid-lite / email receipt scan (opt-in) to auto-find recurring charges.

22. **Internet Bill Decoder & Negotiator** — upload your ISP bill (PDF or photo); we flag fees, compare to market rate in your ZIP, generate a script for calling customer service to negotiate. High-value annual savings.

23. **Phone Plan Optimizer** — `PhonePlanComparator` today is static. Make it dynamic: use phone-bill upload + carrier API approximations, recommend a plan that matches actual usage.

24. **Streaming Service Picker** — "I want to watch [show]"; we tell you the cheapest legal way to see it this month (including free with ads).

25. **Senior Discount Finder (Tech-focused)** — aggregates every legitimate senior tech discount: carrier (Verizon 55+, T-Mobile 55+), streaming (Hulu AARP, Spotify Student for college-age relatives, Sirius senior rate), internet (AT&T Access, Xfinity Internet Essentials, ACP). Show eligibility plain-language.

26. **Free Tech Program Matcher** — `FreeResources` exists. Turn it into a quiz: 5 questions (age, income range, veteran status, disability, ZIP), then output the 3 programs the user qualifies for (Lifeline, ACP when funded, PCs for People, etc.) with step-by-step signup.

### 5.4 Learning & Practice (6)

27. **Practice Inbox** — a sandbox email inbox with curated realistic phishing/scam/legit messages. User drags each into "Legit / Scam / Not sure" and learns by doing. Scoreless; we celebrate correct identification. *Builds on `ScamSimulator`.*

28. **Practice Phone** — a mock smartphone UI on the web where a Tier-1 user can practice: receiving calls, blocking spam, installing an app, changing settings. No risk of breaking their real phone. Huge confidence-builder.

29. **Practice Browser** — a sandboxed browser view with fake scam popups, fake download prompts, fake OS update modals. Teach pattern recognition in an environment where nothing real can happen.

30. **Scam-of-the-Week Radio** — 3-minute audio explainer, published Friday, delivered to phone as a podcast + to inbox as a "read-to-me" transcript. Content pairs with existing `ScamAlerts`.

31. **Tech Vocab Quiz (Spaced Repetition)** — Duolingo-style daily 2-minute review of 10 terms from `Glossary`. Spaced-repetition backend (simple SM-2 algorithm). Streak-safe (missing a day doesn't nuke progress).

32. **Learning Buddy Match** — opt-in peer matching: pair a Tier-1 learner with a Tier-3 community volunteer for 30-min video calls on specific topics. Curated, background-checked on the volunteer side, free. Competes with Cyber-Seniors' model.

### 5.5 Home, Devices & Smart Home (3)

33. **Smart Home Safety Audit** — catalog the smart devices in the home, flag the ones on manufacturer end-of-support (Wyze v1 cams, old Echos, etc.), recommend either replace or isolate.

34. **Device Age & Support Lookup** — paste a model number or upload a photo of the back of the device; we tell you when it was released, when software support ends, and whether it's worth replacing. *Expands `DeviceAgeChecker`.*

35. **Router Health Dashboard (browser-side)** — runs a web-based diagnostic (no software install): speed test, DNS check, open-port scan against the home gateway using WebRTC tricks, gives a friendly letter grade A–F with fix-it steps. Much less scary than "run nmap".

---

## 6. New Learning System — TekSure as a School

The current `/learn` is a good courses page. Let's make it a genuine school.

### 6.1 Courses with real structure

Each course = 5–10 lessons. Each lesson = a short guide (≤ 5 min read) + 2-minute video + 3-question mini-quiz + optional sandbox practice + a peer-discussion prompt in the forum.

Launch with these six flagship courses, tier-scoped:

| Course | Tier | Lessons | Practice |
|---|---|---|---|
| **Your First Week With a Smartphone** | 1 | 10 | Practice Phone sandbox |
| **Staying Safe Online — The Essentials** | 1–2 | 12 | Practice Inbox + URL Scanner |
| **Becoming Confident With Video Calls** | 1 | 6 | Live test-call with TekBot |
| **Password & Account Mastery** | 2 | 8 | Live exercises in a password-manager sandbox |
| **AI for Everyday Life** | 2–3 | 10 | Use TekBot for real tasks |
| **Cybersecurity 101 for Regular People** | 3 | 15 | OSINT + URL + Footprint scanners combined |

### 6.2 Live classes and cohorts

Model Senior Planet's approach: **free live 45-minute classes** weekly, Zoom, tier-specific, with a TekSure-community host. Recorded after for async viewers. Replace or supplement the existing `Webinars.tsx`.

### 6.3 Practice rooms

See §5.4 tools 27–29. Practice rooms are sandboxes where learners can make mistakes safely. This is the biggest gap in the competitor landscape — AARP / GCFGlobal / Techboomers all tell, none of them let you *do*.

### 6.4 Community + mentor layer

- Expand `/forum` with tier tags (answers from power-users carry a visible "Expert" label).
- `Learning Buddy Match` (tool 32) — 1-on-1 pairing.
- Named community roles: "TekSure Mentor" (vetted, public), "TekSure Helper" (any verified member who answers questions), modest recognition badges.

---

## 7. Content Strategy — What Tier 1 vs Tier 4 See

The depth is already there; the curation isn't. Every surface should have **a default view per tier** and a visible "show me more" escape.

### Tier 1 — Just Starting
- Homepage shows 3 guides, 3 tools, 1 course — all beginner
- Sticky "Call a real person" button always visible
- Video-first (watch before you read)
- All jargon expanded inline on first use
- No dark mode offered in the header (still available in settings)
- Confirmation modals on everything that changes state

### Tier 2 — Getting Comfortable
- Homepage shows mixed beginner + intermediate with "Try stretching" callouts
- Introduces the skill-tree view
- Still always shows labels on icons
- Starts offering "Power Tools" section — collapsed by default

### Tier 3 — Confident
- Homepage shows intermediate + advanced, mixed with OSINT and privacy tools
- Skill tree prominent
- Community/mentor prompts surface ("Help a beginner this week?")
- Can toggle into a denser UI (3-column tools)

### Tier 4 — Power User
- Dense layouts available, dark-mode default if preferred
- Shows every tool including OSINT, CLI-adjacent helpers, self-hosting guides
- Surface changelog, roadmap, and GitHub contribution links
- Can opt into *Contributor* role — edit guides via PR, flag issues

---

## 8. Accessibility — What We Commit To

WCAG 2.2 AA as a floor, AAA where possible. Specific public commitments:

- Color contrast ≥ 4.5:1 body / 7:1 on large text / 3:1 non-text UI
- Text resize 200% without content loss
- Keyboard-complete (every action reachable without mouse)
- Screen-reader verified on NVDA + VoiceOver + TalkBack before each major release
- Captioned video, transcript available, audio-only alt for diagrams
- Error prevention on all forms, not only error identification
- No time limits on any interactive practice
- Respect `prefers-reduced-motion` on all animations
- Alt text on every image, generated and reviewed — not missing

Publish the statement at `/accessibility` (already exists) with a plain-language summary on top.

---

## 9. Technical Notes

### 9.1 Stack fit

Everything proposed fits the existing stack: React 18, Tailwind, shadcn/ui, Supabase, React Query, React Router. No framework swap needed.

- **Tier state** → Supabase `profiles` column + localStorage mirror for logged-out users. Single `UserTier` context.
- **Skill tree** → new Supabase table `user_progress` keyed on `(user_id, guide_slug)` with status + completed_at. Visualize with react-flow or a custom SVG.
- **OSINT tools** → Supabase edge functions calling third-party APIs. Abstract a `safety-lookup` edge function that fans out to HIBP, VirusTotal, Google Safe Browsing, URLVoid. Cache aggressively (24h).
- **Practice sandboxes** → isolated React components; no external calls. A fake-SMTP email simulator can be pure client-side JSON.
- **Voice input/output** → Web Speech API (already in the stack for `AskTekSure`) + ElevenLabs-cheap fallback for TTS.
- **Tier-aware TekBot** → pass the user tier into the Brain edge function as context; tune prompt templates per tier.

### 9.2 Performance budget

- Landing page ≤ 120 KB JS (currently acceptable; don't grow)
- Font loading: swap, subset Inter
- LCP ≤ 2.0s on a throttled 3G connection (tested monthly via Lighthouse)
- No third-party analytics on the public landing — move GA4 to delayed load
- Pre-render hero with SSR (already on Vite SSR)

### 9.3 What to ship first (even though ranking wasn't requested, this is a sane sequencing)

Two-week cycles, loosely:
1. **Fortnight 1–2:** Homepage redesign (tier picker + jobs-to-be-done doors) + default-light-mode switch
2. **Fortnight 3–4:** Tier system + skill tree scaffold + `/my-path`
3. **Fortnight 5–6:** Tool 1 (MyDigitalFootprint), Tool 3 (URL Safety v2), Tool 4 (Phone Safety)
4. **Fortnight 7–8:** Practice rooms (Practice Inbox, Practice Phone)
5. **Fortnight 9–10:** Course framework + first live class
6. **Fortnight 11–12:** AI tier-tuned TekBot + voice
7. **Ongoing:** 10 new guides/week from the existing autonomous pipeline, tier-tagged

---

## 10. Risks, Research Gaps, and What to Test

- **Tier picker friction.** Forcing a tier choice on the homepage can feel patronizing. Mitigate with a skippable "Just let me browse" option and research-test with 5 seniors before launch.
- **OSINT tools and privacy exposure.** Scanning others' phone/email could enable stalking. Every OSINT tool in §5.1 is designed around *self-lookup* and refuses to scan third-party PII without the user's attested relationship ("I'm scanning my own data").
- **Breach API rate limits.** HIBP API is paid ($3.50/mo per 100k lookups). Budget it and cache 24h.
- **Dark web scanning as a brand.** Don't over-promise ("dark web monitoring" can imply we crawl the dark web, which we don't). Name clearly: "Public breach database check."
- **Gamification backfire.** Streaks and badges can feel childish to adult learners. A/B test: opt-in streaks vs off-by-default.
- **Legal review of the URL scanner.** Ensure we're not caching third-party URLs in a way that creates a secondary liability. Talk to a tech lawyer before launch.

---

## 11. What This Looks Like

The companion file `teksure-next-gen-mockup.html` is a self-contained prototype you can open in any browser. It shows:

- The redesigned homepage with a tier picker and jobs-to-be-done doors
- A sample tier-scoped "My Path" skill tree view
- A new tool preview (URL Safety Scanner — consumer-grade)
- The accessibility tray always visible
- Before / After toggles so you can compare with the current state

---

## Sources

Research that informs this plan:

- [UX Design for Seniors, 3rd Edition — Nielsen Norman Group](https://www.nngroup.com/reports/senior-citizens-on-the-web/)
- [Usability for Older Adults: Challenges and Changes — NN/G](https://www.nngroup.com/articles/usability-for-senior-citizens/)
- [Developing Websites for Older People — W3C WAI](https://www.w3.org/WAI/older-users/developing/)
- [Preventing Ageism in Design: Digital Accessibility for Older Adults — TPGi / Vispero](https://www.tpgi.com/preventing-ageism-in-design-digital-accessibility-for-older-adults/)
- [Optimizing mobile app design for older adults (systematic review) — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12350549/)
- [Accessible Web Design for Older Adults: Challenges and Solutions — ACM TACCESS](https://dl.acm.org/doi/full/10.1145/3763243)
- [Senior Planet from AARP](https://seniorplanet.org/)
- [GCFGlobal — Free Online Learning](https://edu.gcfglobal.org/en/)
- [Gamification in EdTech — Duolingo, Khan Academy lessons](https://prodwrks.com/gamification-in-edtech-lessons-from-duolingo-khan-academy-ixl-and-kahoot/)
- [Top Dark Web Monitoring Tools 2026 — Deepstrike](https://deepstrike.io/blog/best-dark-web-monitoring-tools)
- [Top 12 Have I Been Pwned Alternatives 2026 — Digital Footprint Check](https://www.digitalfootprintcheck.com/have-i-been-pwned-alternative)
- [Top 15 Free OSINT Tools — Recorded Future](https://www.recordedfuture.com/threat-intelligence-101/tools-and-technologies/osint-tools)
- [Mozilla Monitor](https://monitor.mozilla.org/)
- [URLVoid](https://www.urlvoid.com/)
- [Cloudflare Radar URL Scanner](https://radar.cloudflare.com/scan)
- [Sucuri SiteCheck](https://sitecheck.sucuri.net/)
- [PhishTank](https://phishtank.org/)
- [Northstar Digital Literacy Assessment](https://www.digitalliteracyassessment.org/)
- [8 Best Free Scammer Phone Number Lookup Sites (2026) — Guru99](https://www.guru99.com/scammer-phone-number-lookup.html)
- [RoboKiller Scam Phone Lookup](https://lookup.robokiller.com/)
- [Senior-friendly app design patterns — Orangesoft](https://orangesoft.co/blog/guide-to-designing-healthcare-apps-for-seniors)
- [Apo by Carevocacy — first AI tech support for older adults](https://thegerontechnologist.com/the-first-ai-tech-support-for-older-adults-apo-by-carevocacy/)
- [4 Best AI Voice Assistants For Seniors In 2026 — TechFixAI](https://techfixai.com/best-ai-voice-assistants-for-seniors/)
- [Designing for Low Digital Literacy Users — UX Bulletin](https://www.ux-bulletin.com/designing-low-digital-literacy-users/)
