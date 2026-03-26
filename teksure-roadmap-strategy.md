# TekSure Roadmap — Build Strategy
**Generated:** March 2026
**Current live count:** 41 items
**Remaining:** ~11 Planned + ~43 Exploring = ~54 items to build

---

## Build Principles
Each feature is assigned a **Priority** (P1–P3), an **Effort** (Small/Medium/Large), and a **Build Approach** so you know exactly what code to write.

- **P1** = High user value, relatively quick to build — do these next
- **P2** = Good value, moderate effort — build in batches
- **P3** = Long-term / community / complex — tackle after P1+P2

---

## SPRINT 1 — Next 4 Features to Build (P1, Small–Medium)

### 1. Video Tutorials — `/guides/:slug` (embedded)
**Status:** Planned → target: Live
**Effort:** Small
**Approach:** Add an optional `videoUrl?: string` field to the guide data type. When present, render a YouTube embed (`<iframe>`) above the written steps in `GuideDetail.tsx`. Start with 3–5 guides that have matching YouTube walkthroughs (e.g. "How to update Windows", "Setting up 2FA"). No backend needed.

### 2. Community Forum — `/forum`
**Status:** Planned → target: Live
**Effort:** Medium
**Approach:** Use Supabase tables: `forum_threads` (id, title, body, user_id, category, created_at) and `forum_replies` (id, thread_id, body, user_id, created_at). Build 3 pages: Forum index (list threads by category), Thread detail (replies + reply form), New thread form. Auth-protect posting; reading is public. Add a `ForumCategory` enum: General, WiFi & Connectivity, Passwords & Security, Devices, Software.

### 3. Guided Setup Wizard — `/setup`
**Status:** Planned → target: Live
**Effort:** Small
**Approach:** A multi-step onboarding wizard (similar to BackupWizard pattern) shown to new users after signup. Steps: (1) What device do you mainly use? (2) What's your tech confidence level? (3) What do you most want to learn? Result: redirect to a personalised "Start Here" guide list filtered by their answers. Store answers in localStorage (`teksure-setup`). Show a "Take the setup quiz" CTA on the homepage for logged-in users who haven't completed it.

### 4. AI-Powered TekBot Upgrade — TekBot.tsx
**Status:** Exploring → target: Live
**Effort:** Medium
**Approach:** Extend `TekBot.tsx` to include: (a) context-aware suggestions based on current page slug, (b) a "Related guides" panel that searches `guides[]` by keywords from the user's message, (c) conversation memory for the session (store last 5 exchanges in state). No new backend — enhance the existing Supabase Edge Function prompt to include current page context injected as a system message.

---

## SPRINT 2 — 5 Features (P1, Medium)

### 5. Two-Factor Authentication Setup Guide — `/guides/two-factor-auth`
**Status:** Exploring → target: Live
**Effort:** Small
**Approach:** This is a content item, not a new tool. Write and add a full guide to `src/data/guides.ts` covering iOS Authenticator, Google Authenticator, and SMS 2FA. Tag it `security`. No code changes needed beyond the data file.

### 6. Home Network Security Guide — `/guides/home-network-security`
**Status:** Exploring → target: Live
**Effort:** Small
**Approach:** Same as above — add a detailed guide with steps for: changing router default password, enabling WPA3, hiding SSID, setting up a guest network, and checking for unauthorized devices. Tag: `security`, `wifi`.

### 7. Software Update Guide — `/guides/software-updates`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering Windows Update, macOS Software Update, iOS/Android system updates, and browser updates. Emphasise *why* updates matter. Add to guides data.

### 8. Screenshot Annotations (in guides) — `GuideDetail.tsx`
**Status:** Planned
**Effort:** Medium
**Approach:** Add an optional `annotatedImages?: { src: string; caption: string; alt: string }[]` array to the guide data type. In `GuideDetail.tsx`, render these as a lightbox-style image gallery between steps. Use a simple CSS-only modal (no extra library) with a click-to-expand image viewer. Add annotated images to 5–10 existing guides to populate the feature.

### 9. App Recommendation Engine — `/tools/app-recommender`
**Status:** Planned
**Effort:** Medium
**Approach:** A 4-question wizard: (1) What do you want to do? (video calls / banking / photos / shopping / reading / health), (2) What device? (iPhone / Android / Windows / Mac), (3) Are you comfortable paying for apps?, (4) Do you need something very simple? Returns a curated list of 3 recommended apps with name, logo emoji, description, why it's good for seniors, and a link to the app store. Store recommendations as a static JSON dataset in `src/data/appRecommendations.ts`.

---

## SPRINT 3 — 5 Features (P1–P2, Medium)

### 10. Personalized Learning Path — `/my-path`
**Status:** Exploring
**Effort:** Medium
**Approach:** After a user completes 3+ guides, show a "Your Learning Path" section on their Profile page. Algorithm: look at completed guide categories → recommend next 3 uncompleted guides in the same categories, plus 1 guide from a new category. Render as a `NextGuide` card component (guide title, category badge, estimated time, "Start Guide" button). All client-side using localStorage progress data.

### 11. Warranty Repair Finder — `/tools/warranty-checker`
**Status:** Exploring
**Effort:** Small
**Approach:** A static lookup tool. User selects: (1) Device brand (Apple / Samsung / Google / Dell / HP / Lenovo / Microsoft), (2) Device type (phone / tablet / laptop / desktop). Returns: typical warranty period, how to check serial number, link to manufacturer's warranty lookup page, and nearest authorized repair locator URL. Pure static data, no API needed.

### 12. Social Media Safety Guide — `/guides/social-media-safety`
**Status:** Exploring
**Effort:** Small
**Approach:** Content guide covering: Facebook privacy settings, Instagram account security, recognising fake profiles, not oversharing personal info, and reporting suspicious accounts. Add to guides data with tags: `security`, `privacy`, `social`.

### 13. Photo Organization Guide — `/guides/photo-organization`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: Google Photos albums, iCloud Shared Albums, creating folders on Windows/Mac, and basic tips for naming and sorting photos by date. Add to guides data with tags: `photos`, `organization`.

### 14. Cloud Storage Explained — `/guides/cloud-storage`
**Status:** Exploring
**Effort:** Small
**Approach:** Beginner-friendly guide explaining what "the cloud" means, comparing iCloud / Google Drive / OneDrive / Dropbox side by side (free storage, best for which device), and how to upload your first file. Add to guides data.

---

## SPRINT 4 — 6 Features (P2, Medium–Large)

### 15. Live Chat Support — `/get-help` enhancement
**Status:** Planned
**Effort:** Large
**Approach:** Extend the existing help request system. When a tech submits a job, add a `chat_messages` Supabase table (job_id, sender_id, message, created_at). Add a real-time chat panel to both `CustomerJobRoom.tsx` and `TechJobRoom.tsx` using Supabase's `realtime` channel subscriptions. This is the most complex feature — tackle after other sprints.

### 16. Caregiver Dashboard — `/caregiver`
**Status:** Exploring
**Effort:** Large
**Approach:** New role: `caregiver`. A caregiver can be linked to a `customer` account (Supabase `caregiver_links` table: caregiver_user_id, customer_user_id). Caregiver dashboard shows: customer's open requests, guide progress, and a "Request help on their behalf" button. Requires schema changes + new ProtectedRoute role.

### 17. Multi-Language Support — i18n
**Status:** Planned
**Effort:** Large
**Approach:** Install `react-i18next`. Create `src/i18n/` with `en.json`, `es.json`, `fr.json`. Start with translating the homepage, navbar, and 5 most-read guides. Add a language selector dropdown to the Navbar next to the font size toggle. Store preference in `teksure-lang` localStorage key.

### 18. Tech News for Beginners — `/news`
**Status:** Planned
**Effort:** Medium
**Approach:** A curated news page. Store news items in a Supabase `tech_news` table (title, summary, source_url, published_date, category). Admin can add items; users see a card grid. Alternatively (simpler): curate 10–15 static news items in a `src/data/newsItems.ts` file updated weekly, displayed as a card grid at `/news`. Add a "Latest News" section to the homepage.

### 19. Streaming Setup Guide — `/guides/streaming-setup`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: how to set up Netflix on a Smart TV, Apple TV, Chromecast, and Fire Stick. Include what remote buttons to press. Add to guides data.

### 20. Email Declutter Tool — `/tools/email-declutter`
**Status:** Exploring
**Effort:** Medium
**Approach:** An interactive 5-step guide wizard (not a real email connector — explain how to do it manually). Steps: (1) Understand Unsubscribe links, (2) Use Gmail/Outlook filters, (3) Create folders, (4) Bulk-delete old mail, (5) Set a "5-minute inbox" habit. Present as a wizard with copy-paste search queries (e.g. `is:unread before:2023/01/01`) users can paste into Gmail. Simple, no auth required.

---

## SPRINT 5 — 6 Features (P2, Small–Medium)

### 21. Telehealth Tech Help — `/guides/telehealth`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: joining a Zoom/Teams/FaceTime doctor visit, what to do if audio/video doesn't work, how to share your screen with a provider, and how to access NHS/Medicare online portals. Add to guides data.

### 22. Banking App Help — `/guides/banking-apps`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: downloading your bank's app, setting up Face ID / fingerprint login, checking balance, paying bills, and spotting fake banking apps in app stores. Emphasise security. Add to guides data.

### 23. Podcast & Audiobook Setup — `/guides/podcasts-audiobooks`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: Apple Podcasts (iOS), Spotify Podcasts, Audible setup, and free alternatives like Libby (library audiobooks). Add to guides data.

### 24. Calendar Reminder Setup — `/guides/calendar-reminders`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: iPhone Calendar, Google Calendar, and Windows Calendar — how to add events, set reminders, share calendars with family. Add to guides data.

### 25. Voice Command Guide — `/guides/voice-commands`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide with a cheat-sheet table of the most useful Siri, Google Assistant, and Alexa voice commands. Categories: calling, reminders, weather, navigation, smart home, shopping. Add to guides data.

### 26. QR Code Scanner Guide — `/guides/qr-codes`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide explaining what QR codes are, how to scan with iPhone (Camera app), Android (Camera or Google Lens), and how to spot fake/malicious QR codes. Add to guides data.

---

## SPRINT 6 — 6 Features (P2, Medium)

### 27. Accessibility Score Tool — `/tools/accessibility-check`
**Status:** Exploring
**Effort:** Medium
**Approach:** A self-assessment checklist wizard. User answers yes/no about their current setup: font size, screen brightness, hearing aid connectivity, voice control enabled, etc. Returns a score (0–100) with a colour badge (green/amber/red) and 3 specific recommendations. No device access needed — pure questionnaire pattern.

### 28. Large Print Mode — Navbar toggle
**Status:** Exploring
**Effort:** Small
**Approach:** Extend the existing `FontSizeToggle` to add a 4th level: "XXL" (2rem base). The toggle already uses localStorage. Add `font-size-xxl` to `index.css` at 2rem. Rename the toggle button to show "A / A+ / A++ / MAX" with a tooltip.

### 29. Hearing Aid Phone Setup — `/guides/hearing-aid-bluetooth`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: pairing Made for iPhone hearing aids, Android hearing aid compatibility settings, and Bluetooth audio routing. Add to guides data with tags: `accessibility`, `bluetooth`.

### 30. Medication Reminder Apps — `/guides/medication-reminders`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: iPhone Reminders, Android Clock alarms, Medisafe app, and how to set up recurring reminders. Emphasise the importance of reminders for older adults. Add to guides data.

### 31. E-Reader Setup — `/guides/ereader-setup`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: setting up a Kindle (register, download books, adjust font size), Kobo, and reading apps on tablets (Kindle app, Google Play Books, Apple Books). Add to guides data.

### 32. Ride-Sharing Guide — `/guides/ride-sharing`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: installing Uber/Lyft, setting your home address, booking a ride, tracking your driver, and payment setup. Include safety tips. Add to guides data.

---

## SPRINT 7 — 6 Features (P2–P3, Medium–Large)

### 33. Digital Legacy Planning — `/guides/digital-legacy`
**Status:** Exploring
**Effort:** Medium
**Approach:** A comprehensive guide + interactive checklist. Content: how to make a list of all your accounts, what to do with social media after death, how to set up Google's Inactive Account Manager, Apple's Digital Legacy feature, and a downloadable PDF template for recording passwords/accounts. The PDF can use the existing PDF skill.

### 34. Tech Support Scheduling — `/get-help` enhancement
**Status:** Exploring
**Effort:** Medium
**Approach:** Add a date/time picker to the help request form in `GetHelp.tsx`. Store `preferred_datetime` in the Supabase `jobs` table. Display the requested slot in the tech's dashboard so they can accept or propose a new time. Use a simple calendar widget (no external library — CSS grid of the next 7 days with time slots).

### 35. File Management 101 — `/guides/file-management`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: Windows File Explorer basics (folders, moving files, search), Mac Finder basics, what to put in Documents vs Downloads vs Desktop, and how to name files sensibly. Add to guides data.

### 36. Screen Recording Guide — `/guides/screen-recording`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: Windows Game Bar (Win+G), macOS Command+Shift+5, iPhone Screen Recording (Control Centre), and Android Screen Record. Explain when screen recording is useful (showing tech support a problem). Add to guides data.

### 37. Online Shopping Safety — `/guides/online-shopping-safety`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: checking for https://, verifying seller reviews on Amazon/eBay, avoiding fake websites, safe payment methods, and what to do if you're scammed. Add to guides data. Different from Scam Alert Center (that's a news/alert feed, this is an educational guide).

### 38. Text Messaging Mastery — `/guides/text-messaging`
**Status:** Exploring
**Effort:** Small
**Approach:** Guide covering: iOS iMessage vs SMS, Android Messages, group chats, sending photos/videos, voice messages, and emoji basics. Add to guides data.

---

## SPRINT 8 — 5 Features (P3, Large)

### 39. Monthly Webinars — `/webinars`
**Status:** Exploring
**Effort:** Large
**Approach:** Static page listing upcoming and past webinar events. Store in Supabase `webinars` table (title, description, date, zoom_link, recording_url). Admin adds events; users can register (simple email capture to Supabase). Add a "Join Next Webinar" CTA to the homepage. Start with 1 dummy event to make the page live.

### 40. Community Ambassadors — `/community/ambassadors`
**Status:** Exploring
**Effort:** Large
**Approach:** Extend the badges system. Add an `ambassador` boolean to the `profiles` Supabase table. Admin can grant ambassador status. Ambassadors get a special badge on their profile and appear on a public `/community/ambassadors` page with their name and a blurb. Gate: only users with 10+ earned badges can be nominated.

### 41. Family Tech Sharing — Profile page
**Status:** Exploring
**Effort:** Large
**Approach:** Supabase `family_groups` table (owner_user_id, member_user_ids[]). Owner can invite members by email; invited users get a notification + accept link. Members share the owner's subscription tier. Requires email invite flow (Supabase Edge Function + Resend email).

### 42. Senior Tech Blog — `/blog`
**Status:** Exploring
**Effort:** Medium
**Approach:** A Supabase-backed blog. Table: `blog_posts` (title, slug, content_markdown, author_name, published_date, category). Admin publishes posts. Render markdown with `react-markdown`. Categories: Tips, Stories, News Explained, How-To. Add a "Latest from the Blog" section to the homepage.

### 43. TekSure Mobile App
**Status:** Exploring
**Effort:** Large (separate project)
**Approach:** This is a React Native / Expo project, not a web page. Scope: Expo router + same Supabase backend + existing guide data. Must be treated as a separate repository. Minimum viable app: browse guides, view guide detail, TekBot chat, user login. This is a Q3/Q4 project.

---

## LOCAL CONTENT SPRINT — 12 Guides to Add to `guides.ts`

These are pure content additions (no new code) that will immediately populate the guides library and unlock badge progress:

| Guide Title | Category | Tags | Effort |
|---|---|---|---|
| Smart Home Setup | how-to | smart-home, wifi | 30 min |
| Video Calling Mastery | communication | video-calls, zoom | 30 min |
| Streaming Setup (Netflix/YouTube) | how-to | streaming, tv | 20 min |
| Social Media Safety | safety-guides | security, privacy, social | 30 min |
| Photo Organization | how-to | photos, organization | 20 min |
| Banking App Safety | safety-guides | banking, security | 30 min |
| Cloud Storage Explained | how-to | cloud, storage | 20 min |
| Voice Commands Cheat Sheet | how-to | voice, accessibility | 20 min |
| Screen Recording | how-to | screen, windows, mac | 20 min |
| QR Codes Explained | general | qr, phone | 15 min |
| File Management 101 | how-to | files, windows, mac | 25 min |
| Digital Legacy Planning | safety-guides | privacy, security | 35 min |

---

## Summary Build Order

| Sprint | Features | Estimated Sessions |
|---|---|---|
| Sprint 1 | Video embeds, Forum, Setup Wizard, TekBot upgrade | 2 sessions |
| Sprint 2 | 2FA guide, Home Network guide, Screenshot annotations, App Recommender, Learning Path | 2 sessions |
| Sprint 3 | Warranty checker, 3 new safety/content guides | 1 session |
| Sprint 4 | News page, Streaming guide, Email declutter tool, Telehealth guide | 2 sessions |
| Sprint 5 | 6 small guides (banking, podcast, calendar, voice, ride-sharing, QR) | 1 session |
| Sprint 6 | Accessibility check tool, Large Print Mode, 4 small guides | 1 session |
| Sprint 7 | Digital Legacy, Tech Scheduling, 5 more guides | 2 sessions |
| Sprint 8 | Blog, Webinars, Community Ambassadors, Family Sharing | 3 sessions |
| Mobile App | React Native / Expo — separate repo | Separate project |
| **Total** | **~54 items** | **~15 sessions** |

---

*Strategy last updated: March 2026. Reprioritise between sprints based on user feedback.*
