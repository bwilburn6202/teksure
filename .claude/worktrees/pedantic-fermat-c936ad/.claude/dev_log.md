# TekSure Dev Log

---

## 2026-04-14 — Weekly Content Engine Run

**Task:** teksure-weekly-content scheduled task  
**Model:** Claude Sonnet 4.6

### Scam Alerts (ScamAlerts.tsx)
- Added: **Fake Traffic Violation Text Scam (April 2026)** — sourced from FTC consumer alert dated April 14, 2026 (consumer.ftc.gov). Brand new scam targeting millions of Americans with fake DMV/toll payment texts.

### New Guides (guides-batch-4.ts — 4 new guides)
1. `traffic-violation-text-scam` — 5-step guide on spotting and reporting the FTC-flagged traffic text scam
2. `what-to-do-after-being-scammed` — 8-step recovery guide: bank contacts, password changes, credit freeze, FTC reporting
3. `whatsapp-transfer-new-phone` — 6-step guide for transferring WhatsApp to a new iPhone or Android
4. `fix-wifi-keeps-dropping` — 6-step guide for diagnosing and fixing unstable Wi-Fi connections

### Tips.tsx
- Rotated featured tip: moved "Google Security Checkup" to pastTips
- New featured tip: **"Got a Text About a Traffic Ticket? Delete It — It's a Scam"** — directly tied to FTC April 14 alert

### News.tsx  
- Added id:20 — FTC Alert: Fake Traffic Violation Texts (2026-04-14)
- Added id:19 — AARP Research: 7 in 10 Americans Over 50 Say Fraud Is Top Concern (2026-04-08)

### Guide Freshness Updates (10 guides updated in guides.ts)
1. `random-sounds-chinese-voices-from-laptop-what-to-do` — body → steps (5 steps)
2. `how-to-turn-off-google-ai-overviews-in-search` — body → steps (3 steps)
3. `free-file-converter-websites-track-you-with-hundreds-of-cookies` — body → steps (4 steps)
4. `your-phone-number-is-listed-on-data-broker-websites` — body → steps (4 steps)
5. `your-phone-tracks-location-even-when-location-services-are-off` — body → steps (4 steps)
6. `reset-your-smartphone-ad-tracking-id-for-privacy` — body → steps (3 steps)
7. `android-battery-drain-background-apps-how-to-fix` — body → steps (4 steps)
8. `how-to-stop-app-downloads-on-android-for-dementia-caregiver` — body → steps (4 steps)
9. `recognizing-avoiding-scams` — added new step for traffic violation text scam
10. `update-windows` — added June 2026 certificate expiry warning step

### iOS version freshness (guides-batch-4.ts)
- `how-to-update-your-iphone-to-ios-18` — updated body to reference iOS 18.7.7 as current version (April 2026)

### Tone Fixes
- Removed "simply" from unsubscribe guide body
- Removed/replaced 4 instances of "just" in new guide content

### Video Scripts Created
- `.claude/video-scripts/traffic-violation-text-scam-2026-04-14.md` — 60-75 sec script
- `.claude/video-scripts/what-to-do-after-being-scammed-2026-04-14.md` — 75-90 sec script

### Build
- ✅ `npm run build` — success (4.75s, no errors, chunk size warnings are pre-existing)

---

## 2026-04-13 — Scam Alerts Update

- Added 4 new scam alerts (Fake Mortgage Relief Call, Fake Expiring Reward Points Text, Fake Product Recall, SSN Suspension)
- Source: FTC.gov, AARP Fraud Watch Network

---
