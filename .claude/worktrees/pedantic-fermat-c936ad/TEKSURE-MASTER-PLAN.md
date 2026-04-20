# TekSure Master Plan — The Free Tech Resource for Every American

> **Vision:** TekSure is America's free, plain-English technology resource — the single destination where any person can find an answer to any tech question, learn at their own pace, stay safe online, and get human help when they need it. Always free. No jargon. No walls.

**Last updated:** 2026-04-16
**Current state:** 1,167+ guides · 68+ tools · 19 categories · 161 routes · 16 edge functions

---

## WHAT'S LIVE TODAY

| Area | Status |
|------|--------|
| Guide library | 1,167+ guides across 19 categories |
| Interactive tools | 68+ tools (security, setup wizards, calculators, health) |
| Spanish content | 50 guides + `/guias` landing page |
| TekSure Brain | `/brain` — semantic search across all guides + optional Ollama AI |
| Printable Guide Packs | 12 themed packs, print-ready, all steps included |
| HackerNews feed | `/news` — live tech news |
| Sources & Credits | `/sources` — 31 attributed official sources |
| Mega-menu navigation | Safety / Learn / Support columns |
| Official resource links | Every guide page links to 3-4 authoritative sources |
| Hosted Ollama brain | Edge functions deployed — awaiting Hetzner server setup |
| Booking + Stripe | LIVE — £15 deposit model |
| Forum | Community Q&A at `/forum` |
| Tech Glossary | `/glossary` — 80+ plain-English definitions |

---

## IMMEDIATE PRIORITIES (Build Now)

### 1. Hosted Ollama Server — TekSure Brain AI
**Status:** ⏳ Waiting for server
- Create Hetzner CX22 droplet (~$6/month, Ubuntu 22.04, 4GB RAM)
- SSH in, install Ollama, pull `llama3.2:1b`
- Set `OLLAMA_BASE_URL` + `OLLAMA_MODEL` as Supabase secrets
- Brain page + edge functions already deployed and waiting
- Full instructions: ask Claude "set up the Ollama server"

### 2. Free Tech Resources Directory — `/free-resources`
**Status:** 🔨 Building now
- Curated directory of free government and nonprofit programs
- FCC Lifeline, Comcast Internet Essentials, PCs for People, Senior Planet, GCFGlobal, AARP TEK, EveryoneOn, etc.
- Organized by: Internet & Phone / Devices / Training / Senior Programs / Veterans

### 3. Scam Defense Center — `/scam-defense`
**Status:** 🔨 Building now
- Top 8 current scam types with how-to-spot tips
- "Is this a scam?" quick checklist
- Recovery guide: "I already got scammed — what now?"
- Reporting links (FTC, AARP Fraud Helpline, IC3)

### 4. Batch 7 Guides (35 new guides)
**Status:** 🔨 Building now
- Chromebook (4): What is a Chromebook, setup, Google Docs, printing
- Tablet guides (4): iPad setup, Android tablet, reading, split screen
- Email platforms (4): Gmail, Outlook, Yahoo, attachments
- Digital Legacy (4): estate planning, share passwords, Google inactive account, Facebook memorial
- Rideshare (3): Uber, Lyft, medical transport
- Digital payments (3): mobile check deposit, pay bills online, Apple Pay/Google Pay
- Secure messaging (3): Signal, Telegram, FaceTime
- Free software (4): Office alternatives, Libby, Kindle app, free video calling
- Internet basics (4): What is a browser, bookmarks, clear cache, zoom/large text
- Printing (2): wireless printer setup, print photos

### 5. New Tools
**Status:** 🔨 Building now
- **Streaming Cost Calculator** (`/tools/streaming-calculator`) — Add up your streaming subscriptions, see monthly + annual total, find cheaper tiers
- **Device Age & Security Checker** (`/tools/device-age-checker`) — Is your device still getting security updates? When should you replace it?

---

## CONTENT ROADMAP (2,500+ guides by EOY)

### A. Guide Library by Category (Target)

| Category | Current est. | Target | Priority |
|----------|-------------|--------|---------|
| How-To Guides | 200+ | 300 | High |
| Safety & Privacy | 150+ | 200 | High |
| App Guides | 120+ | 180 | High |
| AI Guides | 80+ | 120 | Medium |
| Essential Skills | 80+ | 150 | High |
| Health Tech | 60+ | 100 | High |
| Windows Guides | 60+ | 100 | Medium |
| Financial Tech | 50+ | 80 | High |
| Government & Civic | 50+ | 80 | High |
| Smart Home | 40+ | 80 | Medium |
| Communication | 40+ | 80 | Medium |
| Mac Guides | 40+ | 80 | Medium |
| Phone & Tablet | 40+ | 80 | High |
| Entertainment | 30+ | 60 | Medium |
| Social Media | 20+ | 50 | Medium |
| Life Transitions | 20+ | 50 | Medium |
| Internet & Connectivity | 20+ | 50 | Medium |
| Spanish Guides | 50 | 200 | High |
| Chromebook | 5 | 30 | High |

### B. Content Gaps Still to Fill
- **Chromebook** — hugely popular with seniors and schools, undertreated
- **Tablet-specific** — iPad and Android tablet users need their own guides
- **Digital Legacy** — estate planning, memorialization, what happens to accounts
- **Caregiver tech** — helping a parent or loved one with their devices
- **Free software** — Alternatives to paid tools (LibreOffice, GIMP, VLC, etc.)
- **Smart appliances** — Dishwashers, washers, fridges with apps
- **Car tech** — Apple CarPlay, Android Auto, EV apps
- **Accessibility deep dives** — Screen readers, hearing aid Bluetooth, voice control

### C. Content Format Expansion
- **Audio guides** — "Read aloud" already on every guide page ✅
- **Printable quick cards** — One-page PDF cheat sheets (large print, laminate-ready)
- **Video tutorials** — Original TekSure screen recordings (50 target)
- **Structured learning paths** — "Start here" beginner sequence, "Stay safe" sequence

---

## TOOLS ROADMAP (100+ tools)

### Built ✅
- Password Strength Checker
- Scam Shield / Email Checker
- WiFi Troubleshooter
- Internet Speed Advisor
- Setup Wizards (Phone, Router, Smart TV, etc.)
- Privacy Audit Tool
- Tech Glossary Quiz
- Streaming Cost Calculator (building)
- Device Age Checker (building)
- Digital Literacy Assessment
- Scam IQ Test
- Data Breach Checker
- Subscription Tracker
- 50+ more tools across all categories

### Next Tools to Build
1. **Internet Plan Comparator** — Compare ISP plans in your area by speed and price
2. **Phone Plan Comparator** — Compare carrier plans side-by-side
3. **Tech Budget Planner** — Annual tech spending planner
4. **Robocall Blocker Wizard** — Carrier-specific setup + app recommendations
5. **Digital Footprint Scanner** — What's publicly visible about you online
6. **Email Template Builder** — Common email situations with templates
7. **Meeting Setup Helper** — "I need to set up a video call" guided flow
8. **What's This Error?** — Paste an error message, get plain-English explanation
9. **Is My Password Leaked?** — Check if a password appears in known breaches
10. **Accessibility Feature Finder** — Which accessibility features would help you most?

---

## NEW PAGES & SECTIONS

### Building Now
- `/free-resources` — Free tech programs directory
- `/scam-defense` — Scam Defense Center hub

### Next to Build
- `/learn` — Structured digital literacy learning paths ("Start here" for beginners)
- `/caregiver` — Resources for people helping family members with tech
- `/chromebook` — Dedicated Chromebook section
- `/accessibility` — Comprehensive accessibility features hub
- `/free-software` — Directory of free alternatives to paid software
- `/tech-help-near-me` — Find local tech help (libraries, AARP chapters, senior centers)

---

## PLATFORM & FEATURES ROADMAP

### Phase 2 — June–August 2026
- [ ] **Mobile app** — React Native / Expo, iOS first
- [ ] **Chrome extension** — TekBot on any page, scam detection overlay, jargon explainer
- [ ] **TekSure Plus** ($4.99/month) — Priority chat, ad-free, exclusive videos, family dashboard
- [ ] **Live chat MVP** — Text-based technician chat
- [ ] **Forum evolution** — Q&A format with upvotes, solved indicator, expert badges
- [ ] **Family Dashboard** — Manage family members' devices from one place
- [ ] **Weekly newsletter** — Tips, scam alerts, new guides (email service integration)
- [ ] **Gift a Session** — Buy tech help for a family member

### Phase 3 — September–December 2026
- [ ] **TekSure Family** ($9.99/month) — Up to 10 members, caregiver dashboard
- [ ] **Enterprise plans** — Libraries, senior living, AARP chapters
- [ ] **Android app**
- [ ] **Voice-guided tutorials** — Audio walkthroughs on every guide
- [ ] **Advanced TekBot** — Screenshot analysis, voice mode, proactive alerts
- [ ] **Partner network** — Libraries, senior centers, AARP formal partnerships
- [ ] **YouTube channel** — 100 original video guides
- [ ] **Podcast** — Weekly 15-minute tech tips show
- [ ] **Programmatic SEO** — Auto-generate `/how-to/[device]/[task]` pages
- [ ] **Local SEO** — "Tech help in [city]" for top 50 US metros

### Phase 4 — 2027
- [ ] Full Spanish-language site (all UI translated, 500+ guides)
- [ ] Additional languages (Mandarin, Vietnamese, Korean)
- [ ] AI-powered personalized learning paths
- [ ] Certification program — Digital Literacy Certificate
- [ ] White-label for institutions
- [ ] API for partners
- [ ] 3,000+ guides

---

## AI & INTELLIGENCE

### TekSure Brain (live at `/brain`)
- ✅ Browser-based semantic search over 1,100+ guides
- ✅ Supabase edge functions (`brain-query`, `ollama-health`) deployed
- ⏳ Hosted Ollama server (Hetzner CX22 — pending setup)
- 🔜 AI-enhanced guide recommendations
- 🔜 Conversational troubleshooting ("My WiFi isn't working" → guided diagnosis)
- 🔜 Screenshot analysis ("What does this error mean?" → upload photo)

### TekBot Evolution
- Conversational troubleshooting flow
- Device-aware responses (remember user's devices)
- Screenshot/photo analysis
- Voice mode (speak + hear answers)
- Multi-turn session memory
- Seamless handoff to human technician

### Content Intelligence
- Auto-freshness detection (flag guides when OS versions change)
- Trending issues detector (Reddit/FTC → emerging problems)
- Broken link monitoring
- Auto-translation pipeline for Spanish

---

## SAFETY & TRUST

### Scam Defense (building `/scam-defense`)
- Top 8 scam types with identification tips
- "Is this a scam?" quick checklist
- Recovery guide for victims
- Real-time FTC/AARP reporting links
- Scam IQ test tool
- Weekly scam roundup (automated from FTC feed)

### Trust Infrastructure
- Last-verified date on every guide
- Source attribution (every guide links to official sources)
- Community verification badges
- Technician background checks + vetting
- Public changelog + roadmap

---

## NEW IDEAS — Added April 2026

1. **Tech Help Near Me** — Find libraries, AARP chapters, senior centers offering free tech help by ZIP code using the IMLS public library database
2. **Caregiver Hub** (`/caregiver`) — Resources specifically for people helping elderly or disabled family members with technology
3. **"What's This Error?"** tool — Paste any error message, get a plain-English explanation and fix
4. **Free Software Directory** — Comprehensive list of free alternatives to paid software, organized by use case
5. **Digital Literacy Course** — Structured 10-lesson "Start Here" course for complete beginners, with progress tracking
6. **Tech News in Plain English** — Simplified weekly roundup of important tech news (not developer-focused like HackerNews)
7. **Device Comparison Guides** — iPhone vs Android, iPad vs Android tablet, Mac vs PC, in plain English for real decisions
8. **"Should I Be Worried?" Tool** — Paste suspicious text/email/URL, get a verdict on whether it's a scam
9. **Senior Tech Path** — Curated guide sequence specifically for 60+ users starting from zero
10. **Accessibility Hub** — Comprehensive guide to every accessibility feature on iPhone, Android, Mac, Windows, with setup walkthroughs
11. **Internet Basics Mini-Course** — 5-lesson sequence: What is the internet / browsers / email / staying safe / getting help
12. **Community Spotlight** — Feature a real TekSure user story weekly (social proof + connection)

---

## MARKETING & GROWTH

### SEO Strategy
- Target 10,000+ long-tail keywords: "how to [task] on [device]"
- HowTo schema + FAQ schema on every guide
- Programmatic pages for device+task combos
- Local SEO: "tech help in [city]" for top 100 metros
- Featured snippet optimization

### Partnerships
- AARP — Co-branded content, member benefits
- Public libraries — Free access terminals, digital literacy workshops
- Senior centers — In-person workshops + digital access
- ISPs — Bundled with internet service
- Device manufacturers — Pre-installed bookmark

---

## SUCCESS METRICS

| Metric | Current | 6-Month Target | 12-Month Target |
|--------|---------|----------------|-----------------|
| Total guides | 1,167 | 1,800 | 2,500 |
| Interactive tools | 68 | 85 | 100 |
| Monthly visitors | TBD | 50,000 | 250,000 |
| Registered users | TBD | 5,000 | 25,000 |
| Newsletter subscribers | 0 | 2,000 | 15,000 |
| App downloads | 0 | 1,000 | 10,000 |
| Revenue (MRR) | ~$0 | $2,000 | $15,000 |
| Spanish guides | 50 | 200 | 500 |
| Guide completion rate | TBD | 40% | 55% |

---

*Every guide, tool, and feature serves one purpose: helping people who feel left behind by technology feel confident, safe, and capable — for free.*
