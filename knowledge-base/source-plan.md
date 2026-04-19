# TekSure Knowledge Base — 125-Source Plan

**Created:** 2026-04-19
**Target:** 1,000+ new guides (125 sources × 8–10 topics each) via scrape → verify → simplify pipeline.
**Pipeline:** `scrape-articles` → `categorize-and-dedup` → `simplify-article` (verification-gated) → `simplified_articles` → human spot-check → `guides-batch-12.ts`+

---

## Trust tiers

| Tier | Treatment | Examples |
|------|-----------|----------|
| **authoritative** | Treat as fact. Still rewrite in plain English. | Apple/Google/MS support, FTC, CISA, Mayo Clinic |
| **editorial** | Reference only — full rewrite required, attribute. | How-To Geek, Tom's Guide, CNET, AARP |
| **community** | **Mandatory verification** against authoritative sources. Reject anything unverifiable. | Reddit, YouTube community channels, Stack Exchange |

Enforced in `supabase/functions/simplify-article/index.ts` via the tuned prompt. Community content that cannot be corroborated is flagged `verification_status = "rejected"` and never enters `simplified_articles`.

---

## Topic templates (per source type)

Each source is scraped against a topic template matching its expertise. The scraper pulls recent RSS items; the simplify step maps them onto these topics.

### Vendor support (Tier 1, 8, 9, 10 vendor rows)
1. Setup & first-time use
2. Sign-in & account recovery
3. Software/firmware updates
4. Privacy & data settings
5. Backup & restore
6. Accessibility features
7. Troubleshooting common issues
8. Security & 2FA
9. Family sharing / multi-user
10. Data transfer / migration

### Government & consumer safety (Tier 3)
1. Latest scams and alerts
2. How to report fraud
3. Identity-theft recovery steps
4. Benefits enrollment (SSA/Medicare/IRS)
5. Consumer rights
6. Phone/text/email scam types
7. Romance + grandparent scams
8. Data-breach response
9. Safe online shopping
10. Safe banking online

### Senior educators (Tier 2)
1. Smartphone basics
2. Tablet basics
3. Computer basics
4. Video calling (Zoom, FaceTime)
5. Email essentials
6. Social media safety
7. Online shopping & deliveries
8. Banking & payments
9. Telehealth visits
10. Entertainment (streaming, music)

### Tech media / reference (Tier 4)
1. How-tos for most-used apps
2. Device comparisons & buying advice
3. New-feature walkthroughs
4. Fix-it guides (phones, PCs)
5. Privacy setting roundups
6. Free tool & app recommendations
7. Battery / storage / performance tips
8. Streaming & smart-home setups
9. Accessibility feature roundups
10. Scam & safety explainers

### Privacy & security (Tier 5)
1. Password-manager setup
2. 2FA and passkeys
3. Browser privacy settings
4. VPN basics
5. Phishing identification
6. Credit-freeze / fraud alert steps
7. Social media lockdown
8. Family device security
9. Data-breach response
10. Malware removal basics

### Health tech (Tier 6)
1. Telehealth app setup (MyChart, etc.)
2. Patient portals
3. Medication-reminder apps
4. Fitness tracker setup
5. Apple Watch / Samsung Galaxy Watch basics
6. Health records and sharing
7. Hearing aid & AirPods hearing features
8. Fall-detection / emergency SOS
9. Vision/reading accommodations
10. Caregiver-sharing features

### Banking & money (Tier 7)
1. Online banking enrollment
2. Mobile deposit
3. Bill-pay setup
4. Peer-to-peer payments (Zelle/Venmo/PayPal)
5. Card controls & freezing
6. Fraud monitoring
7. Statements & tax documents
8. Retirement / SSA online services
9. Budgeting app basics
10. Avoiding money-transfer scams

### Smart home (Tier 8)
1. Hub setup (Alexa / Google / HomeKit)
2. Smart plug basics
3. Smart bulb basics
4. Doorbell camera setup (Ring / Nest)
5. Smart thermostat (Nest / Ecobee)
6. Security cameras (Arlo / Wyze / Eufy)
7. Robot vacuum setup (iRobot / Eufy)
8. Routines & automations
9. Guest access & sharing
10. Privacy & data handling

### Reddit communities (Tier 11 — community, verify)
1. Most-upvoted weekly troubleshooting questions
2. Recurring scam warnings
3. Device-specific fix-it posts
4. Carrier billing issues
5. Account-recovery walkthroughs
6. App bug workarounds
7. Accessibility tips shared by users
8. Senior-specific tech questions
9. Cord-cutting setup tips
10. Smart-home integration issues

### YouTube channels (Tier 12 — community, verify)
Topic template mirrors the originating channel's focus (Apple Support → Apple topics; FTC → scam alerts). Each video's transcript is fact-checked against official docs before rewrite. Disabled until `fetch-youtube-transcript` edge function ships.

### Stack Exchange (Tier 13 — community, verify)
1. Highest-scored weekly questions per site
2. Accepted answers with ≥ 10 upvotes only
3. Cross-reference against official vendor docs
4. Reject anything involving third-party registry edits
5. Reject anything involving unsigned scripts / homebrew fixes

Disabled until `fetch-stackexchange-answer` edge function ships.

---

## 125-Source Master List

Full rows live in `supabase/migrations/20260419000001_seed_125_sources.sql`. Summary below.

### Tier 1 — Official platform support (authoritative, 10)
Apple Support · Microsoft Support · Google Support · Samsung Support · Amazon Help · Meta/Facebook · Instagram Help · Zoom Support · Roku Support · Chromebook Help

### Tier 2 — Senior educators (editorial, 10; NIA authoritative)
AARP Technology · Senior Planet · GCFGlobal · TechBoomers · Cyber-Seniors · OATS · Generations on Line · DigitalLearn · National Institute on Aging · Goodwill Community Foundation

### Tier 3 — Government & consumer safety (authoritative, 10)
FTC Consumer Alerts · FCC · CISA · IC3 (FBI) · USA.gov · SSA · Medicare.gov · IRS · StopBullying.gov · NIST Cybersecurity

### Tier 4 — Tech media (editorial — reference only, 10)
How-To Geek · Tom's Guide · CNET · PCMag · Lifehacker · Digital Trends · MakeUseOf · The Verge · Wired · Engadget

### Tier 5 — Privacy & security (mixed, 10)
EFF SSD · Privacy Rights Clearinghouse · Have I Been Pwned · Krebs on Security · Malwarebytes Labs · Norton · Mozilla · DuckDuckGo · Consumer Reports Digital Lab · StaySafeOnline

### Tier 6 — Health tech (mixed, 10)
Mayo Clinic · Cleveland Clinic · NIA Health · Medicare Telehealth · AARP Health · Apple Health · Fitbit · Samsung Health · MyChart · HealthIT.gov

### Tier 7 — Banking & money (mixed, 10)
CFPB · Bank of America · Chase · Wells Fargo · PayPal · Venmo · Zelle · SSA Online Services · AARP Money · NerdWallet

### Tier 8 — Smart home (authoritative, 10)
Amazon Alexa · Google Nest · Apple HomeKit · Ring · Arlo · Philips Hue · Ecobee · Wyze · iRobot · Eufy

### Tier 9 — Communication & email (authoritative, 10)
WhatsApp · FaceTime · Apple Messages · Google Messages · Gmail · Outlook · Yahoo Mail · Zoom · Skype · Signal

### Tier 10 — Connectivity & accessibility (mixed, 10)
Xfinity · Verizon · AT&T · T-Mobile · Spectrum · FCC Lifeline · Apple Accessibility · Microsoft Accessibility · Android Accessibility · WebAIM

### Tier 11 — Reddit (community, verify, 10)
r/techsupport · r/seniors · r/AskTechnology · r/Scams · r/iphonehelp · r/AndroidQuestions · r/Windows11 · r/macOS · r/smarthome · r/cordcutters

### Tier 12 — YouTube (community, verify, 10 — disabled until transcript fetcher)
Apple Support · Google · Microsoft · Samsung · AARP · Senior Planet · CISA · FTC · Tech For Seniors · Cyber-Seniors

### Tier 13 — Stack Exchange (community, verify, 5 — disabled until answer extractor)
Super User · Apple SE · Android SE · Security SE · Web Applications SE

**Total: 125 sources.**

---

## Rollout waves

| Wave | Tiers | Sources | Sources enabled now | Target |
|------|-------|---------|---------------------|--------|
| 1 | 1 + 3 + 5 authoritative subset | 20 | 15 (feeds available) | +250 guides, ~2 weeks |
| 2 | 2 + 5 + 10 | 30 | 18 | +250 guides, ~4 weeks |
| 3 | 6 + 7 authoritative subset | 20 | 10 | +200 guides, ~6 weeks |
| 4 | 4 (tech media reference) | 10 | 10 | +200 guides, ~8 weeks |
| 5 | 11 (Reddit, verified) | 10 | 10 | +150 guides, ~10 weeks |
| 6 | 8 + 9 (vendor help centers once web fetchers land) | 20 | 1 (Signal) | +150 guides, ~12 weeks |
| 7 | 12 + 13 (YouTube + SE once extractors land) | 15 | 0 | +200 guides, ~16 weeks |

Running total after all waves: **~1,400 guides** → takes TekSure from 1,263 to ~2,663 — past the 2,500 target.

---

## Safety rails (all already enforced)

1. **Prompt-level**
   - Community sources: fact-check every claim, reject if unverifiable
   - Banned words blocked at validation time (simply, just, obviously, seamless, Pro Tip, etc.)
   - US-audience constraint (USD, US carriers, US services)
   - Outdated-OS detection (iOS ≤17, Windows ≤10, etc.)
   - Scam/security claims must not contradict FTC/CISA/FBI guidance

2. **Schema-level**
   - `scraped_articles.scrape_status` now includes `rejected_verification` and `rejected_quality`
   - `simplified_articles.verification_status` persisted on every row
   - Rejected articles skip `simplified_articles` insert entirely
   - `attribution` jsonb captures source URL + author on every accepted guide

3. **Legal**
   - Verbatim scraping forbidden for Meta/Instagram/Amazon/carriers (scrape_enabled = false)
   - Tier 4 editorial sources treated as reference only — prompt requires full rewrite
   - All guides include attribution footer linking to original
   - Gov + CC-licensed sources (EFF, Mozilla) can be quoted with attribution

4. **Operational**
   - `scrape-articles` caps at 3 new articles per source per invocation (runtime safety)
   - 1.5s delay between article fetches, 2s between sources (politeness)
   - `categorize-and-dedup` runs before simplify so duplicates are killed early

---

## Follow-up work (not in this PR)

1. **`fetch-youtube-transcript` edge function** — needed to enable Tier 12.
   YouTube Atom feed gives titles/links only; transcripts require a separate API.
2. **`fetch-stackexchange-answer` edge function** — needed to enable Tier 13.
   Must extract the accepted/top answer only, not the question.
3. **Vendor help-center scrapers** — Tier 8 + most of Tier 9 currently disabled
   because vendor help sites don't publish RSS. A JSON-LD sitemap crawler would
   unlock ~25 sources.
4. **`publish-guide` edge function** — promote `simplified_articles.is_published`
   rows to a `guides-batch-N.ts` file automatically, subject to a human
   spot-check gate (5% sample).
