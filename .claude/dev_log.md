# TekSure Dev Log

---

## 2026-04-20 — Weekly Content Engine Run

**Task:** teksure-weekly-content scheduled task  
**Model:** Claude Sonnet 4.6  
**PR:** https://github.com/bwilburn6202/teksure/pull/47

### Research basis (April 20, 2026)
Trending topics: Windows 11 BitLocker lockout (KB5083769), iPhone battery drain post-update, iPhone storage too full for iOS update, Gmail stopped working in Outlook/Apple Mail (OAuth2 change), account lockout surges post-Patch-Tuesday.  
Scam alerts: FTC Medicare benefit review phone scam, utility shutoff threat scams, investment/pig butchering (already covered), traffic violation/QR scams (already covered).

### New Guides — guides-batch-95.ts (5 guides)
1. `fix-windows-11-bitlocker-recovery-screen-2026` — BitLocker screen fix from KB5083769; recovery key via account.microsoft.com; scam warning included
2. `fix-iphone-battery-drain-after-update` — Why battery drains after iOS updates; Background App Refresh, app updates, battery health check
3. `fix-iphone-not-enough-storage-to-update` — iCloud Photos offload, built-in Storage Recommendations, update-via-computer fallback
4. `fix-gmail-not-working-in-outlook-apple-mail` — Google OAuth2 change; re-add account in Outlook, Apple Mail (iPhone/iPad/Mac), Outlook PC
5. `locked-out-google-microsoft-account-recovery` — Recovery steps for Google, Microsoft, Apple ID; backup methods; post-recovery security

### Scam Alerts (ScamAlerts.tsx — 2 new)
- **Fake "Medicare Benefit Review" Call Scam (2026)** — unsolicited calls harvesting Medicare/SSN numbers under guise of benefit review
- **Utility Shutoff Threat Scam (2026)** — robocalls threatening same-day disconnection, demanding gift card/Zelle payment

### Tips.tsx
- New featured tip: **Windows 11 BitLocker Recovery Screen Free Fix** (tied to KB5083769 April 2026 issue)
- Previous featured tip (Phone Storage Full) moved to pastTips list

### News.tsx (2 new items)
- id:25 — Windows 11 April Update BitLocker Lockout (2026-04-20)
- id:26 — iPhone Battery Draining Fast After Update (2026-04-20)

### Phase 5 — 10 Existing Guide Updates
1. guides-batch-17.ts: `macOS Ventura` → `macOS Sequoia` in offline maps guide
2. guides-batch-17.ts: iOS 17 tip updated to note iOS 18 as current (offline maps)
3. guides-batch-36.ts: `Android 14` → `Android 14 or later (Android 15 is current)` in Circle to Search
4. guides-batch-47.ts: Check In feature step — added iOS 18 context
5. guides-batch-47.ts: Check In feature tip — added iOS 18 context
6. guides-batch-53.ts: `macOS Ventura` → added Sequoia mention in login items guide
7. guides-batch-63.ts: `macOS Ventura` → added Sequoia mention in Stage Manager guide
8. guides-batch-23.ts: iOS 17 transcript tip → added iOS 18 is current (Voice Memos)
9. guides-batch-22.ts: iOS 17 autocorrect tip → added iOS 18 context
10. guides-batch-81.ts: AirPods Conversation Awareness — iOS 17+ → added iOS 18 context

### Phase 7 — Content Repurposing
- Social/newsletter hooks embedded as comments at top of guides-batch-95.ts (5 guide × 2 hooks)
- Video script created: `.claude/video-scripts/fix-iphone-not-enough-storage.md` (75 sec)
- BitLocker video script already existed at `.claude/video-scripts/windows-bitlocker-lockout.md`

### Build
- `npm run build` passed — 0 TypeScript errors, 0 duplicate slugs (1833 unique slugs total)
- Sitemap regenerated with 1899 URLs

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
