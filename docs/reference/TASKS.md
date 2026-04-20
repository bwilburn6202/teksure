# Tasks

## Completed ✅

- [x] **P1: Community Forum** — ForumIndex, ForumThread, NewThread pages + DB migration with RLS
- [x] **P1: Stripe Payments** — BookIndex + BookingConfirmation updated, create-stripe-checkout + stripe-webhook Edge Functions, DB migration
- [x] **P2: TekBot Upgrade** — Context-aware floating chat assistant with related guide suggestions
- [x] **P2: Advanced Guides** — GuideVideo (YouTube embed w/ thumbnail) + GuideRating (1–5 stars + comments + view tracking)
- [x] **P3: Analytics Dashboard** — /admin/analytics page with guide views, ratings, booking stats, forum activity
- [x] **Forum: Full-text search** — Search bar with live filtering + highlight; GIN index + `search_forum_threads` SQL function
- [x] **Forum: Admin moderation** — Admins can delete any thread or reply; admin RLS policies added
- [x] **TekBot: Real AI upgrade** — `tekbot-ai` Edge Function (Claude API); graceful fallback to local keyword matching
- [x] **Analytics: Session dedup** — Guide views now deduplicated per browser session via sessionStorage
- [x] **Forum: Thread up-votes** — Thumbs-up "Helpful" button on each thread (toggle); vote counts shown on ForumIndex cards + ForumThread header
- [x] **Forum: Pin threads** — Admins can pin/unpin any thread; pinned threads float to the top with a blue "Pinned" badge
- [x] **Analytics: CSV export** — Download buttons in Analytics Dashboard for guide views, guide ratings, and bookings
- [x] **Performance: Lazy loading** — Route-based code splitting via React.lazy + Suspense; LazyImage component for native image lazy loading
- [x] **Forum: Accepted Answer / Solved** — Thread authors (+ admins) can mark any reply as the Best Answer; accepted reply shown prominently at top; "Solved" badge on ForumIndex cards; "Unmark" option to undo
- [x] **Analytics: Forum CSV export** — Export all forum threads (title, category, pinned, solved status, date) as CSV from Analytics Dashboard
- [x] **TekBot: GUIDE_INDEX expanded** — 25 guides across Connectivity, Photos, Security, Devices, Email, Printing, and Payments; QUICK_ANSWERS expanded with 15 new topics
- [x] **Forum: Server-side search** — ForumIndex now uses `search_forum_threads` RPC for queries 3+ chars; debounced with 400ms delay; spinner feedback; graceful fallback if RPC not deployed
- [x] **Analytics: Forum replies CSV** — Export all forum replies (with thread title context) as CSV; separate button from threads export in Forum Activity card
- [x] **Technician Signup Flow** — `/become-a-technician` page: intro, 3-section application form (personal, experience + specialties, availability), success screen
- [x] **Admin Tech Verification** — `/admin/technicians` page: view all applications filtered by status; expand detail; approve/reject with admin notes dialog; replaces mock-data placeholder
- [x] **Tech Onboarding Email** — `send-tech-approval` Edge Function sends branded welcome email (with dashboard link) when admin approves a tech; TechVerification.tsx updated to call it automatically
- [x] **Technician Dashboard** — `/tech` page: approved techs see their assigned jobs, upcoming/all filter, expandable job details with customer info
- [x] **Admin Jobs Board** — `/admin/jobs` page: admin assigns/reassigns bookings to approved technicians via dropdown; filters for unassigned/assigned and payment status; DB migration adds `assigned_technician_id` + RLS

## Pending (Bailey must do) 🔧

### First-time integration (if not done yet)
- [ ] Copy files from `teksure-updates/` into `~/Documents/Claude/Projects/TekSure/` (match folder structure)
- [ ] Run all DB migrations in Supabase SQL Editor (in date order — see INTEGRATION_GUIDE.md)
- [ ] Update `src/App.tsx` — use the new lazy-loaded pattern from `App.tsx.additions.tsx`
- [ ] Update `src/components/Navbar.tsx` — add Community link
- [ ] Update `src/pages/guides/GuideDetail.tsx` — add GuideVideo + GuideRating components
- [ ] Update `src/pages/admin/AdminDashboard.tsx` — add links to /admin/analytics, /admin/technicians, /admin/jobs
- [ ] Set is_admin = TRUE for your own user in Supabase
- [ ] Set up Stripe keys and deploy Stripe Edge Functions
- [ ] Commit and push (see git commands in INTEGRATION_GUIDE.md)

### New this session (Mar 26, Session 8) — no new migrations needed
- [ ] Copy updated files from `teksure-updates/` to your project:
  - `src/pages/tech/TechDashboard.tsx` — now shows average rating + review count in header
  - `src/pages/admin/JobsBoard.tsx` — shows tech ratings in dropdown + "Assigned to" text; "Mark Completed" button for assigned bookings
  - `src/pages/account/MyBookings.tsx` — "Cancel Booking" button on upcoming bookings with confirmation modal

### Previous session (Mar 26, Session 7) — run after all previous migrations
- [ ] **Run migration: `20260326120000_tech_reviews.sql`** in Supabase SQL Editor
- [ ] Add new routes to `src/App.tsx`:
  - `/my-bookings` → MyBookings
  - `/review/:bookingId` → WriteReview
- [ ] Deploy the `link-tech-to-user` Edge Function:
  ```bash
  npx supabase functions deploy link-tech-to-user --project-ref zrgtoefkqafndhxhbuag
  ```

### Previously pending (Mar 25, Session 5) — run after all previous migrations
- [ ] Run migration: `20260324170000_forum_votes_and_pins.sql` in Supabase SQL Editor
- [ ] Run migration: `20260324180000_forum_accepted_answer.sql` in Supabase SQL Editor
- [ ] **Run migration: `20260325120000_technician_profiles.sql`** in Supabase SQL Editor
- [ ] **Run migration: `20260325150000_job_assignments.sql`** in Supabase SQL Editor
- [ ] Add new routes to `src/App.tsx` (see App.tsx.additions.tsx):
  - `/tech` → TechDashboard
  - `/admin/jobs` → JobsBoard
- [ ] Optionally swap `<img>` tags for `<LazyImage>` in guide/homepage components
- [ ] Deploy TekBot AI Edge Function:
  ```bash
  npx supabase functions deploy tekbot-ai --project-ref zrgtoefkqafndhxhbuag
  ```
- [ ] Deploy tech approval email Edge Function:
  ```bash
  npx supabase functions deploy send-tech-approval --project-ref zrgtoefkqafndhxhbuag
  ```
- [ ] Add `ANTHROPIC_API_KEY` secret in Supabase Dashboard → Edge Functions → Secrets

## Completed ✅ (continued)

- [x] **UI Declutter — Navbar** — New minimal Navbar: 4 primary links, clean avatar dropdown, full-screen mobile drawer (no cramped stacks), single bottom border, no icons or badges in nav
- [x] **UI Declutter — Homepage** — New Index.tsx: single-CTA hero, 3-step "how it works", 4 guide cards, 3 quick-link tiles, one bottom CTA strip. No competing colours or busy sections
- [x] **UI Declutter — GuidesIndex** — New GuidesIndex.tsx: search + scrollable category pills, minimal cards (icon + title + difficulty dot + time), no tag clouds or badge soup
- [x] **UI Declutter — ToolsIndex** — New ToolsIndex.tsx: clean grid of 4 tool cards with icon, name, one-liner, arrow — nothing else
- [x] **Navbar condensed** — "Learn ▼" dropdown groups Guides + Tools into 3 nav items; mobile drawer unchanged in coverage
- [x] **Saved Guides (Bookmarks)** — Users can bookmark any guide from GuideDetail (BookmarkPlus/Check toggle); Saved Guides page at `/saved-guides`; bookmark dot indicator on GuidesIndex cards; "Saved Guides" in avatar dropdown + mobile drawer; DB migration `20260325220000_guide_bookmarks.sql`
- [x] **My Bookings page** — `/my-bookings`: logged-in users see full booking history with status, tech name, payment info; expandable detail cards; "Write a Review" CTA on completed bookings; stat summary row
- [x] **Post-job Technician Reviews** — `/review/:bookingId`: star rating (1–5) + optional comment; one review per booking; completed success screen; shows "Review submitted" on My Bookings after review; DB migration `20260326120000_tech_reviews.sql` + `technician_avg_ratings` view
- [x] **Admin: Link Tech to Auth Account** — TechVerification.tsx updated with inline email input + Link button on each approved tech card; calls new `link-tech-to-user` Edge Function; shows "Account linked" badge when done; replaces previous manual SQL step
- [x] **Navbar: My Bookings link** — Added to desktop avatar dropdown and mobile drawer (alongside Saved Guides)
- [x] **Tech Average Ratings on Dashboard** — TechDashboard header now shows 5-star display + "4.7 (12 reviews)" from `technician_avg_ratings` view; "No reviews yet" fallback
- [x] **Tech Ratings on Jobs Board** — Admin Jobs Board shows tech avg ratings in the assignment dropdown and on "Assigned to" badges; admins can see who's highest rated
- [x] **Admin: Mark Booking Completed** — Jobs Board now has a "Mark Completed" button on assigned bookings; status badges for completed/cancelled bookings
- [x] **Booking Cancellation** — My Bookings page now shows a "Cancel Booking" button on confirmed/pending bookings; confirmation modal; updates status to "cancelled"; success toast

## Future Backlog 📋

- [ ] Audit all guides for accessibility — plain language, no jargon
- [ ] Stripe: switch from test keys to live keys before launch
- [ ] Performance: analyze bundle size with `npx vite-bundle-visualizer`
- [x] Email notification when booking is cancelled (Edge Function) ✅
- [x] Technician availability calendar on the booking page ✅

## Completed ✅ (Session 9 — March 31, 2026)

- [x] **Booking Cancellation Email** — `send-cancellation-email` Edge Function sends branded HTML email with booking details + refund info when customer cancels; MyBookings.tsx updated to call it automatically (fire-and-forget)
- [x] **Technician Availability Calendar** — `/tech/availability` page: techs select dates and toggle time slots available; 14-day calendar view with pagination; bulk "Set All Day" and "Clear Day" actions; booked slots shown in amber (cannot be removed)
- [x] **Booking Page: Live Availability** — BookIndex step 2 now queries `technician_availability` to show which time slots have available techs; unavailable slots greyed out; tech count shown per slot; graceful fallback if migration not run
- [x] **DB Migration: technician_availability** — New table + unique index + date index + RLS policies (public read, tech CRUD own, admin full) + `available_slots` view for aggregate counts
- [x] **TechDashboard: Availability Link** — "Manage Availability" quick-link added to tech dashboard header

---

**Phase:** Revenue Foundation + Tech Onboarding + User Engagement + Reviews + Admin Polish + Availability System — All planned features built ✅
**Status:** Files ready in teksure-updates/ — awaiting integration by Bailey
**Next Priority:** Run migration `20260331120000_technician_availability.sql`; deploy `send-cancellation-email` Edge Function; copy updated files

*Last updated: 2026-03-31*
