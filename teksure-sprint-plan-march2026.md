# TekSure — Sprint Plan: Complete the Roadmap by Saturday March 28

**Start:** Monday March 23, 2026
**Target:** Saturday March 28, 2026
**Goal:** Clear all Planned + high-value Exploring items from the Google Doc roadmap

---

## Already Live (as of Mon March 23)

- Community Forum (/forum) ✅ — built today
- 10 new guides (safety-guides + how-to categories) ✅ — built today
- Admin Dashboard, Email Notifications, Booking System ✅
- Video embeds in guides, Setup Wizard, App Recommender, Warranty Checker ✅
- Auth, Supabase backend, Get Help, My Requests, Profile ✅
- 180+ guides across all categories ✅

---

## Monday March 23 (Remaining)

| Feature | Route | Effort |
|---|---|---|
| TekBot Upgrade (context-aware + related guides) | TekBot.tsx | Medium |
| Tech News for Beginners | /news | Medium |
| Email Declutter Tool | /tools/email-declutter | Small |
| Personalized Learning Path | /profile (enhancement) | Small |

---

## Tuesday March 24

| Feature | Route | Effort |
|---|---|---|
| Accessibility Score Tool | /tools/accessibility-check | Medium |
| Large Print Mode (XXL toggle) | Navbar toggle | Small |
| Review & Rating System | Supabase + UI | Medium |
| Technician Profiles | /technicians/:id | Medium |
| Cybersecurity Scorecard | /tools/cyber-scorecard | Medium |

---

## Wednesday March 25

| Feature | Route | Effort |
|---|---|---|
| Stripe Payment Flow (booking checkout) | /book + Stripe | Large |
| Tech Blog | /blog | Medium |
| Webinars page | /webinars | Medium |
| Sprint 5 guides (telehealth, podcast, calendar, ride-sharing) | guides.ts | Small |

---

## Thursday March 26

| Feature | Route | Effort |
|---|---|---|
| Community Ambassadors | /community/ambassadors | Medium |
| Senior Tech Mode (simplified UI toggle) | Navbar + context | Medium |
| Premium tier gating (Stripe subscription check) | Profile + ProtectedRoute | Medium |
| Sprint 6 guides (hearing aid, medication, e-reader, QR, voice) | guides.ts | Small |

---

## Friday March 27

| Feature | Route | Effort |
|---|---|---|
| Multi-language support (react-i18next, EN/ES/FR) | i18n setup | Large |
| Phishing URL Scanner | /tools/phishing-scanner | Medium |
| WiFi Troubleshooter (wizard) | /tools/wifi-troubleshooter | Medium |
| Device Trade-in Guide | /guides/device-trade-in | Small |

---

## Saturday March 28 (Buffer + Polish)

| Feature | Route | Effort |
|---|---|---|
| Homepage polish (trust badges, animation tweaks) | Index.tsx | Small |
| Update live Roadmap page to reflect all new features | Roadmap.tsx / roadmapData.ts | Small |
| SEO meta tags (per-page title/description) | SEOHead updates | Small |
| Any missed items or bug fixes | — | — |

---

## Features NOT In Scope This Week (Post-Saturday)

- Mobile app (React Native — separate project)
- Screen sharing tool (requires WebRTC)
- Push notifications (Web Push API complexity)
- Corporate/franchise features
- Podcast/YouTube channel (content, not code)

---

## Notes

- Stripe requires STRIPE_SECRET_KEY env var — build UI + webhook handler, leave key insertion for Bailey
- Multi-language: install react-i18next, start with homepage + navbar only
- All Supabase tables need migrations run in SQL Editor
- Git push after each session block
