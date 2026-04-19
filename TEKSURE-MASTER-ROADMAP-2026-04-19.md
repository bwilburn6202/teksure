# TekSure Master Roadmap — Single Source of Truth

> **This file supersedes all previous plan/roadmap files as of 2026-04-19.**
> Old files archived to `archive/plans/`. See history there.
>
> **Vision:** TekSure is America's free, plain-English technology resource — the single destination where any person can find an answer to any tech question, learn at their own pace, stay safe online, and get human help when they need it. Always free. No jargon. No walls.

**Last updated:** 2026-04-19
**Current state:** ~1,353 guides · 68+ tools · 19 categories · 161 routes
**Guide target:** 2,500 by end of 2026

---

## CURRENT STATUS SNAPSHOT

| Area | Status |
|------|--------|
| Guide library | ~1,289 guides across 19 categories (batches 1–12 live) |
| Interactive tools | 68+ tools (security, setup wizards, calculators, health) |
| Spanish content | 50 guides + `/guias` landing page |
| TekSure Brain | `/brain` — semantic search + optional hosted Ollama |
| Printable Guide Packs | 12 themed packs |
| HackerNews feed | `/news` — live tech news |
| Sources & Credits | `/sources` — attributed official sources |
| Booking + Stripe | LIVE — $15 deposit model |
| Forum | Community Q&A at `/forum` |
| Tech Glossary | `/glossary` — 80+ definitions |
| Free Resources | `/free-resources` — government & nonprofit programs |
| Scam Defense | `/scam-defense` — scam identification and recovery hub |

---

## GUIDE CREATION LOOP — THE MAIN PRIORITY

### How it works (never-ending, no permission needed)
1. Search for trending senior/everyday-user tech topics (FTC, AARP, Google Trends, Reddit r/techsupport)
2. Identify gaps against existing slugs (`grep -r "slug:" src/data/`)
3. Create `src/data/guides-batch-N.ts` with 25-50 full Guide objects
4. Import in `src/data/guides.ts` `allGuides` array
5. Commit `feat: add N guides — batch-N [topic summary]`
6. Update this roadmap's guide count and batch log
7. Repeat immediately with next batch

### Batch numbering
- Last completed: **Batch 16** (106 guides added in batches 12-16, 2026-04-19) — total ~1,375 guides
- Next: **Batch 17** → **Batch 18** → ... (no upper limit)

### Guide format requirements
```typescript
{
  slug: 'unique-kebab-case',          // never duplicates an existing slug
  title: 'How to ...',               // plain English, no jargon
  excerpt: '...',                    // max 160 chars
  category: GuideCategory,           // see types in guides.ts
  tags: ['tag1', 'tag2'],
  readTime: '5 min',                 // no "read" suffix
  thumbnailEmoji: '🔒',
  publishedAt: 'YYYY-MM-DD',
  difficulty: 'Beginner',            // Beginner | Intermediate | Advanced (PascalCase)
  body: `...`,                       // 200+ word plain-English intro
  steps: [                           // 3-6 steps, each with title + content
    { title: '...', content: '...', tip?: '...', warning?: '...' }
  ],
}
```

### Banned phrases (brand voice)
Never use: "easy", "simply", "just", "obviously", "leverage", "utilize", "seamless", "cutting-edge", "Pro Tip"
Use instead: plain verbs, "Quick Tip" not "Pro Tip"

### Content source policy
- **Allowed:** Apple Support, Google Support, Microsoft Support, AARP, FTC.gov, How-To Geek, GCFGlobal, YouTube official channels
- **Rewrite standard:** Minimum 80% original language — no copy-paste
- **Link policy:** Every guide should reference 1-2 official sources in step tips

---

## GUIDE BATCH LOG

| Batch | Guides | Date | Topic Focus |
|-------|--------|------|-------------|
| Core (guides.ts) | 790 | Mar–Apr 2026 | Foundation library across all categories |
| Expansion | 209 | Apr 2026 | Gap fill across categories |
| Batch 4 | 24 | 2026-04-14 | Scam alerts, WhatsApp transfer, WiFi fixes |
| Batch 5 | 15 | 2026-04-15 | Health tech, phone essentials |
| Batch 6 | 12 | 2026-04-15 | Mac guides, productivity |
| Batch 7 | 35 | 2026-04-16 | Chromebook, tablet, email, digital legacy |
| Batch 8 | 40 | 2026-04-17 | Smart home, streaming, government civic |
| Batch 9 | 50 | 2026-04-17 | Safety deep dive, financial tech, communication |
| Batch 10 | 40 | 2026-04-18 | Life transitions, caregiver, accessibility |
| Batch 11 | 5 | 2026-04-18 | Battery, BitLocker, Google account, Chrome security |
| Spanish | 49 | 2026-04-18 | 50 Spanish-language guides |
| **Batch 12** | **20** | **2026-04-19** | Apple Intelligence, WhatsApp scams, iPhone battery, voice cloning, WiFi passwords, printer, photo transfer, fake pop-ups, subscriptions, Google Photos, spam texts, 2FA, Windows 11 upgrade, Roku, iPhone accessibility, Facebook recovery, password managers, FaceTime, browser speed, iCloud backup |
| **Batch 13** | **24** | **2026-04-19** | Telehealth, Zoom, smart TV, Alexa, Apple Maps, Google Maps, SSA account, investment scams, MyChart, Bluetooth headphones, phone photography, sharing photos, imposter scams, recovery scams, Google Meet, Siri, Google Assistant, iPhone→TV, Apple Pay, Zelle, delete apps, FaceTime on iPad, scan documents, update apps |
| **Batch 14** | **22** | **2026-04-19** | Venmo, caregiver tech help, dark mode, Ring doorbell, Nest thermostat, CarPlay, Android Auto, Alexa reminders, Chromecast, Windows/iPhone screenshots, GoodRx, Amazon Prime, Apple Watch+fall detection, Cash App, Google Home, iPhone Health app, Gmail, credit score, email attachments, Notes app, Magnifier |
| **Batch 15** | **18** | **2026-04-19** | Windows Defender, Task Manager, Mac storage, Mac Spotlight, Time Machine, AirPods, iPad WiFi, Fire TV Stick, Echo Show, widgets (Android+iPhone), deleted photo recovery, medical alert systems, senior tech discounts, library e-books, mental health telehealth, retirement account, Apple TV |
| **Batch 16** | **22** | **2026-04-19** | Pig-butchering scam, eBay safety, multi-place photo backup, device charging safety, Netflix parental controls, Skype video calls, home Wi-Fi security, cast YouTube to TV, wet phone emergency, switch carriers, backup contacts, read phone bill, Max/HBO, YouTube TV, family location sharing, smart door lock, Google Photos albums, Amazon Photos, AI voice call scam, senior phone plan savings, Windows 11 Start Menu, Mac accessibility |
| **Total** | **~1,375** | | |

---

## CONTENT GAPS TO FILL NEXT (Priority Order)

### Tier 1 — HIGH DEMAND, NOT YET COVERED
These are the highest-searched topics by seniors that TekSure doesn't yet have strong coverage on:

| Topic | Suggested slug | Category |
|-------|---------------|----------|
| How to do a video doctor appointment (telehealth) | `how-to-do-telehealth-appointment` | `health-tech` |
| How to use Zoom for video calls | `how-to-use-zoom-video-calls` | `essential-skills` |
| How to set up a new iPhone from scratch | `set-up-new-iphone` | `phone-guides` |
| How to set up a new Android phone | `set-up-new-android-phone` | `phone-guides` |
| How to take a screenshot on Mac | `how-to-screenshot-mac` | `mac-guides` |
| How to use Alexa (Amazon Echo) | `how-to-use-amazon-alexa` | `smart-home` |
| How to use Apple Maps for navigation | `how-to-use-apple-maps` | `app-guides` |
| How to use Google Maps for navigation | `how-to-use-google-maps` | `app-guides` |
| How to check Social Security account online | `how-to-use-my-social-security-account` | `government-civic` |
| Investment scams on social media | `investment-scams-social-media` | `safety-guides` |
| How to set up a smart TV (general) | `how-to-set-up-smart-tv` | `entertainment` |
| How to manage prescriptions with an app | `manage-prescriptions-app` | `health-tech` |
| How to use MyChart for health records | `how-to-use-mychart` | `health-tech` |
| How to connect Bluetooth headphones | `connect-bluetooth-headphones` | `essential-skills` |
| How to take better photos with your phone | `how-to-take-better-phone-photos` | `tips-tricks` |
| How to share photos by text or email | `how-to-share-photos-text-email` | `essential-skills` |
| Imposter scams — government impersonation | `government-imposter-scam-guide` | `safety-guides` |
| Recovery scams ("we'll get your money back") | `recovery-scam-what-to-know` | `safety-guides` |
| How to use Google Meet | `how-to-use-google-meet` | `essential-skills` |
| How to use Siri on iPhone | `how-to-use-siri-iphone` | `tips-tricks` |
| How to use Google Assistant on Android | `how-to-use-google-assistant` | `tips-tricks` |
| How to connect an iPhone to a TV | `connect-iphone-to-tv` | `tips-tricks` |
| How to use Apple Pay at stores | `how-to-use-apple-pay` | `financial-tech` |
| How to use Zelle to send money | `how-to-use-zelle-safely` | `financial-tech` |
| How to delete apps to free space | `how-to-delete-apps-iphone-android` | `tips-tricks` |

### Tier 2 — MEDIUM DEMAND
| Topic | Suggested slug | Category |
|-------|---------------|----------|
| How to use FaceTime on iPad | `facetime-on-ipad` | `essential-skills` |
| How to scan documents with iPhone | `scan-documents-iphone` | `essential-skills` |
| How to enable dark mode | `how-to-enable-dark-mode` | `tips-tricks` |
| Car tech — Apple CarPlay setup | `apple-carplay-setup` | `tips-tricks` |
| Car tech — Android Auto setup | `android-auto-setup` | `tips-tricks` |
| How to use Amazon Alexa for reminders | `alexa-reminders-setup` | `smart-home` |
| How to set up Ring doorbell | `ring-doorbell-setup` | `smart-home` |
| How to use Google Nest thermostat | `google-nest-thermostat-setup` | `smart-home` |
| How to use Venmo | `how-to-use-venmo-safely` | `financial-tech` |
| How to update apps on iPhone/Android | `how-to-update-apps` | `essential-skills` |

### Tier 3 — SPANISH GUIDES (50 → 200 target)
| Topic | Suggested slug | Category |
|-------|---------------|----------|
| Cómo hacer una cita de telesalud | `como-hacer-cita-telesalud` | `health-tech` |
| Cómo usar Zoom para videollamadas | `como-usar-zoom` | `essential-skills` |
| Cómo protegerse de estafas por teléfono | `estafas-telefono-proteccion` | `safety-guides` |
| Cómo configurar un iPhone nuevo | `configurar-iphone-nuevo` | `phone-guides` |

---

## IMMEDIATE BUILD PRIORITIES (Non-Content)

### 1. Hosted Ollama Server — TekSure Brain AI
**Status:** ⏳ Waiting for server setup by Bailey
- Create Hetzner CX22 droplet (~$6/month, Ubuntu 22.04, 4GB RAM)
- Install Ollama, pull `llama3.2:1b`
- Set `OLLAMA_BASE_URL` + `OLLAMA_MODEL` as Supabase secrets
- Brain page + edge functions already deployed

### 2. New Tools to Build
| Tool | Route | Status |
|------|-------|--------|
| Internet Plan Comparator | `/tools/internet-plan-comparator` | Pending |
| Phone Plan Comparator | `/tools/phone-plan-comparator` | Pending |
| Tech Budget Planner | `/tools/tech-budget-planner` | Pending |
| Robocall Blocker Wizard | `/tools/robocall-blocker` | Pending |
| Digital Footprint Scanner | `/tools/digital-footprint` | Pending |
| "What's This Error?" | `/tools/error-explainer` | Pending |
| "Should I Be Worried?" (scam checker) | `/tools/scam-checker` | Pending |
| Accessibility Feature Finder | `/tools/accessibility-finder` | Pending |

### 3. New Pages to Build
| Page | Route | Status |
|------|-------|--------|
| Structured Learning Paths | `/learn` | Pending |
| Caregiver Hub | `/caregiver` | Pending |
| Chromebook Section | `/chromebook` | Pending |
| Accessibility Hub | `/accessibility` | Pending |
| Free Software Directory | `/free-software` | Pending |
| Tech Help Near Me | `/tech-help-near-me` | Pending |

---

## PLATFORM ROADMAP

### Phase 2 — June–August 2026
- [ ] Mobile app (React Native / Expo, iOS first)
- [ ] Chrome extension — TekBot on any page, scam detection overlay
- [ ] TekSure Plus ($4.99/month) — Priority chat, ad-free, exclusive videos
- [ ] Live chat MVP
- [ ] Weekly newsletter (email service integration)
- [ ] Family Dashboard

### Phase 3 — September–December 2026
- [ ] TekSure Family ($9.99/month) — Up to 10 members
- [ ] Enterprise plans — Libraries, senior living, AARP chapters
- [ ] Android app
- [ ] Voice-guided tutorials on every guide
- [ ] Advanced TekBot — Screenshot analysis, voice mode
- [ ] YouTube channel — 100 original video guides
- [ ] Programmatic SEO — `/how-to/[device]/[task]` pages

### Phase 4 — 2027+
- [ ] Full Spanish-language site (500+ guides)
- [ ] Additional languages (Mandarin, Vietnamese, Korean)
- [ ] AI-powered personalized learning paths
- [ ] Digital Literacy Certificate program
- [ ] White-label for institutions
- [ ] 3,000+ guides

---

## SUCCESS METRICS

| Metric | Current (Apr 2026) | 6-Month Target | 12-Month Target |
|--------|-------------------|----------------|-----------------|
| Total guides | ~1,289 | 1,800 | **2,500** |
| Interactive tools | 68 | 85 | 100 |
| Monthly visitors | TBD | 50,000 | 250,000 |
| Registered users | TBD | 5,000 | 25,000 |
| Newsletter subscribers | 0 | 2,000 | 15,000 |
| App downloads | 0 | 1,000 | 10,000 |
| Revenue (MRR) | ~$0 | $2,000 | $15,000 |
| Spanish guides | 50 | 200 | 500 |

---

## CONTENT SOURCES (Approved)

| Source | Type | URL |
|--------|------|-----|
| Apple Support | Official | support.apple.com |
| Google Support | Official | support.google.com |
| Microsoft Support | Official | support.microsoft.com |
| Samsung Support | Official | samsung.com/us/support |
| FTC Consumer Advice | Safety | consumer.ftc.gov |
| AARP Technology | Senior-focused | aarp.org/home-family/personal-technology |
| How-To Geek | Educational | howtogeek.com |
| GCFGlobal | Educational | edu.gcfglobal.org |
| Senior Planet / OATS | Senior-focused | seniorplanet.org |
| YouTube: Apple Support | Video | youtube.com/@AppleSupport |
| YouTube: Google | Video | youtube.com/@Google |
| YouTube: Microsoft | Video | youtube.com/@Microsoft |
| IC3.gov | Safety/Scams | ic3.gov |
| CISA.gov | Safety | cisa.gov |

---

## ARCHIVED FILES

The following files were superseded by this document and moved to `archive/plans/`:
- `TEKSURE-MASTER-PLAN.md` (last updated 2026-04-16) — superseded
- `teksure-roadmap-strategy.md` (last updated March 2026) — superseded
- `TekSure Content Strategy/April-2026/teksure-content-strategy-april-2026.md` — superseded

Dev log (running history of all autonomous changes) continues at: `.claude/dev_log.md`

---

*Every guide, tool, and feature serves one purpose: helping people who feel left behind by technology feel confident, safe, and capable — for free.*
