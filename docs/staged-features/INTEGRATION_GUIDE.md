# TekSure Development Updates — March 25, 2026

## Summary of All Features Built

Fifteen features were implemented across four automated sessions:

**Session 1 & 2 (P1/P2/P3 roadmap):**
1. **Community Forum (P1)** — Thread listing, detail/replies, and create-thread pages
2. **Stripe Payments for Bookings (P1)** — Full Stripe Checkout flow + webhook handler
3. **TekBot Upgrade (P2)** — Context-aware assistant with related guide suggestions
4. **Advanced Guides: Video + Ratings (P2)** — Responsive video player and star-rating widget
5. **Analytics Dashboard (P3)** — Admin-only page showing guide views, ratings, bookings, and forum activity

**Session 3 (Backlog improvements):**
6. **Forum: Full-text search** — Search bar with live filtering + match highlighting; GIN index + server-side `search_forum_threads` RPC
7. **Forum: Admin moderation** — Admins can delete any thread or reply (not just their own); admin RLS override policies
8. **TekBot AI** — Upgraded to real AI via Claude (Anthropic) Edge Function; graceful fallback to keyword matching if Edge Function not deployed
9. **Analytics: Session dedup** — Guide views deduplicated per browser session (sessionStorage) to prevent inflated counts on refresh

**Session 4 — March 25, 2026 (Backlog + Tech Onboarding):**
10. **TekBot GUIDE_INDEX expanded** — 25 guide entries (up from 10) covering Connectivity, Photos, Security, Devices, Email, Printing, Payments; QUICK_ANSWERS expanded with 15 new instant responses
11. **Forum: Server-side search upgrade** — ForumIndex uses `search_forum_threads` RPC for 3+ char queries; debounced 400ms; spinner indicator; graceful fallback to client-side if RPC unavailable
12. **Analytics: Forum replies CSV export** — Download all forum replies (with thread title enrichment) as CSV; separate export button from threads in Analytics Dashboard
13. **Technician Signup Flow** — `/become-a-technician` — 3-step application: intro/benefits, multi-section form (personal info, specialties checklist, availability), success screen; saves to `technician_profiles` DB table
14. **Admin Tech Verification** — `/admin/technicians` — Full admin panel: view all applications by status; expand full detail; approve/reject with notes dialog; real-time stat cards
15. **DB Migration** — `technician_profiles` table with RLS: anyone can apply, techs see own record, admins manage all

---

## All Files Created / Updated

### Forum Feature

| File | Location in your project |
|------|--------------------------|
| `ForumIndex.tsx` | `src/pages/forum/ForumIndex.tsx` |
| `ForumThread.tsx` | `src/pages/forum/ForumThread.tsx` |
| `NewThread.tsx` | `src/pages/forum/NewThread.tsx` |

### Stripe Payments

| File | Location in your project |
|------|--------------------------|
| `BookIndex.tsx` (updated) | `src/pages/book/BookIndex.tsx` |
| `BookingConfirmation.tsx` (updated) | `src/pages/book/BookingConfirmation.tsx` |
| `create-stripe-checkout/index.ts` | `supabase/functions/create-stripe-checkout/index.ts` |
| `stripe-webhook/index.ts` | `supabase/functions/stripe-webhook/index.ts` |

### TekBot

| File | Location in your project |
|------|--------------------------|
| `TekBot.tsx` | `src/components/TekBot.tsx` |

### Advanced Guides — Video + Ratings (NEW this session)

| File | Location in your project |
|------|--------------------------|
| `GuideVideo.tsx` | `src/components/GuideVideo.tsx` |
| `GuideRating.tsx` | `src/components/GuideRating.tsx` |

### Analytics Dashboard (NEW this session)

| File | Location in your project |
|------|--------------------------|
| `AnalyticsDashboard.tsx` | `src/pages/admin/AnalyticsDashboard.tsx` |

### Advanced Guides — Video + Ratings (Session 2)

| File | Location in your project |
|------|--------------------------|
| `GuideVideo.tsx` | `src/components/GuideVideo.tsx` |
| `GuideRating.tsx` *(updated — session dedup)* | `src/components/GuideRating.tsx` |

### Analytics Dashboard (Session 2)

| File | Location in your project |
|------|--------------------------|
| `AnalyticsDashboard.tsx` | `src/pages/admin/AnalyticsDashboard.tsx` |

### Session 3 — Backlog Improvements

| File | Location in your project |
|------|--------------------------|
| `ForumIndex.tsx` *(updated — search)* | `src/pages/forum/ForumIndex.tsx` |
| `ForumThread.tsx` *(updated — admin mod)* | `src/pages/forum/ForumThread.tsx` |
| `TekBot.tsx` *(updated — AI)* | `src/components/TekBot.tsx` |
| `tekbot-ai/index.ts` | `supabase/functions/tekbot-ai/index.ts` |

### Database Migrations (run all in Supabase SQL Editor, in order)

| File | What it does |
|------|--------------|
| `20260324120000_forum_enhancements.sql` | Forum tables + RLS policies + category column |
| `20260324130000_stripe_payments.sql` | Adds Stripe columns to bookings table |
| `20260324140000_guide_ratings.sql` | Creates guide_ratings and guide_views tables |
| `20260324150000_analytics.sql` | Creates analytics views + is_admin column on profiles |
| `20260324160000_forum_admin_and_search.sql` | Admin delete policies + GIN search index + search RPC |

---

## Step-by-Step Integration

### Step 1: Copy all files

Copy all files from `teksure-updates/src/` into `~/Documents/Claude/Projects/TekSure/src/` (matching the folder structure).
Copy all `supabase/` files the same way.

### Step 2: Run ALL database migrations (in order)

1. Go to Supabase Dashboard -> SQL Editor (https://supabase.com/dashboard/project/zrgtoefkqafndhxhbuag/sql)
2. Run each migration file in order (by date number):
   - 20260324120000_forum_enhancements.sql
   - 20260324130000_stripe_payments.sql
   - 20260324140000_guide_ratings.sql
   - 20260324150000_analytics.sql

### Step 3: Update App.tsx routes

Open src/App.tsx and add these imports at the top:

```tsx
import ForumIndex from "./pages/forum/ForumIndex";
import ForumThread from "./pages/forum/ForumThread";
import NewThread from "./pages/forum/NewThread";
import TekBot from "./components/TekBot";
import AnalyticsDashboard from "./pages/admin/AnalyticsDashboard";
```

Add these routes inside your <Routes> block:

```tsx
<Route path="/forum" element={<ForumIndex />} />
<Route path="/forum/new" element={<NewThread />} />
<Route path="/forum/:id" element={<ForumThread />} />
<Route path="/admin/analytics" element={<AnalyticsDashboard />} />
```

Replace existing /book routes with:

```tsx
<Route path="/book" element={<BookIndex />} />
<Route path="/book/confirmation" element={<BookingConfirmation />} />
```

Add TekBot outside of <Routes> but inside your root div:

```tsx
<TekBot />
```

### Step 4: Update your Navbar

Add a "Community" link to /forum in src/components/Navbar.tsx:

```tsx
<Link to="/forum">Community</Link>
```

### Step 5: Add GuideVideo and GuideRating to your guide detail page

Open src/pages/guides/GuideDetail.tsx and add:

```tsx
import GuideVideo from "@/components/GuideVideo";
import GuideRating from "@/components/GuideRating";
```

Then inside your guide detail render, after the guide steps:

```tsx
{guide.videoUrl && (
  <GuideVideo url={guide.videoUrl} title={guide.title} />
)}

<GuideRating guideId={guide.id} />
```

This will show the video player when a guide has a videoUrl, and always show the rating widget at the bottom. It also automatically logs a page view each time the guide opens.

### Step 6: Add Analytics link in Admin Dashboard

In src/pages/admin/AdminDashboard.tsx, add a link:

```tsx
import { Link } from "react-router-dom";

<Link to="/admin/analytics">View Analytics</Link>
```

### Step 7: Grant yourself admin access

Run this in Supabase SQL Editor — replace YOUR_USER_ID with your UUID from Supabase Dashboard -> Authentication -> Users:

```sql
UPDATE profiles
SET is_admin = TRUE
WHERE user_id = 'YOUR_USER_ID';
```

### Step 8: Set up Stripe (if not done already)

Get your Stripe secret key from stripe.com -> Developers -> API Keys.

Add these secrets in Supabase Dashboard -> Edge Functions -> Secrets:
- STRIPE_SECRET_KEY = your Stripe secret key (sk_test_... for testing)
- STRIPE_WEBHOOK_SECRET = your Stripe webhook signing secret
- PUBLIC_SITE_URL = https://teksure.com (or your dev URL)

Deploy the Edge Functions:

```bash
cd ~/Documents/Claude/Projects/TekSure
npx supabase functions deploy create-stripe-checkout --project-ref zrgtoefkqafndhxhbuag
npx supabase functions deploy stripe-webhook --project-ref zrgtoefkqafndhxhbuag
```

Configure Stripe Webhook:
1. Stripe Dashboard -> Developers -> Webhooks -> Add endpoint
2. URL: https://zrgtoefkqafndhxhbuag.supabase.co/functions/v1/stripe-webhook
3. Events: checkout.session.completed, checkout.session.expired, payment_intent.payment_failed
4. Copy signing secret -> add as STRIPE_WEBHOOK_SECRET in Supabase

### Step 9: Update TekBot guide IDs

Open src/components/TekBot.tsx and update the GUIDE_INDEX array so the guide IDs match the actual IDs in src/data/guides.ts.

### Step 10: Commit and push

```bash
cd ~/Documents/Claude/Projects/TekSure

git add -A
git commit -m "feat: Add Forum, Stripe, TekBot, Guide Ratings/Video, and Analytics

- Community Forum with thread listing, replies, and category filtering
- Stripe Checkout for paid technician bookings
- Stripe webhook to auto-confirm booking after payment
- TekBot with keyword-matched responses and related guide suggestions
- GuideVideo: responsive click-to-play video player for guides
- GuideRating: 1-5 star rating widget with comments; auto-logs page views
- AnalyticsDashboard (/admin/analytics): guide views, ratings, bookings, forum stats
- DB migrations for forum, Stripe, ratings/views, and analytics summary views"

git pull --rebase origin main
git push
```

---

## Feature Details

### Community Forum
- Thread list at /forum — filterable by category (General, WiFi, Devices, Security, Software)
- Thread detail at /forum/:id — full replies, post reply (logged-in only)
- New thread at /forum/new — auth-protected, category picker
- Guests can read; must sign in to post

### Stripe Payments
- 3-step booking: Choose service -> Date/time -> Pay
- Services: Remote ($49.99), Phone ($29.99), In-Home ($89.99), Drop-Off ($59.99)
- Stripe hosted checkout — card data never touches TekSure servers
- Webhook auto-confirms booking and triggers confirmation email

### TekBot (AI-powered)
- Floating chat bubble (bottom-right corner, all pages)
- **Real AI responses** via `tekbot-ai` Edge Function (Claude Haiku model)
- Graceful fallback to local keyword matching if the Edge Function is not deployed or offline
- "AI" badge shown when Edge Function is active; disappears silently if falling back
- Suggests up to 3 relevant guides based on what the user typed
- Quick-start question suggestions for new users
- Conversation history passed to AI for multi-turn context

### Advanced Guides: Video + Ratings
- GuideVideo: Embeds YouTube with thumbnail click-to-play (fast, no slow iframe on load)
- GuideRating: 1-5 stars + optional comment; shows average rating and last 5 comments
- One rating per user per guide (user can update their rating later)
- **View dedup:** Records a guide_views row only once per browser session (sessionStorage)

### Analytics Dashboard (/admin/analytics)
- Admin-only page (non-admins are redirected to home)
- Top 10 guides by total views + breakdown by last 7 / 30 days
- Top 10 guides by average star rating
- Booking payment status breakdown (paid / pending / unpaid)
- Forum new threads and replies count for the last 30 days

### Forum: Full-Text Search
- Search bar at the top of /forum with live client-side filtering
- Highlights matching keywords in thread titles
- Empty-state message when no results match the query
- DB migration adds a GIN full-text index on `forum_threads` for fast server-side search
- `search_forum_threads(query)` PostgreSQL function available for future server-side use

### Forum: Admin Moderation
- Admins see a yellow "Admin view" banner at the top of thread pages
- Admin can delete any reply (not just their own) — amber trash icon indicates admin-level delete
- Admin can delete entire threads via a red "Delete Thread" button in the header
- Confirmation dialog before any admin-level deletion to prevent accidents
- Two new RLS policies: `Admins can delete any thread` and `Admins can delete any reply`

---

## Session 3 Integration Steps (NEW — run after original Steps 1-10)

### Step 11: Run the new migration

In Supabase Dashboard → SQL Editor, paste and run:
`supabase/migrations/20260324160000_forum_admin_and_search.sql`

This adds:
- Admin delete RLS policies for forum_threads and forum_replies
- A GIN full-text search index on forum_threads
- A `search_forum_threads` RPC function

### Step 12: Deploy the TekBot AI Edge Function

```bash
cd ~/Documents/Claude/Projects/TekSure
npx supabase functions deploy tekbot-ai --project-ref zrgtoefkqafndhxhbuag
```

### Step 13: Add ANTHROPIC_API_KEY secret

1. Go to Supabase Dashboard → Edge Functions → Secrets
2. Add a new secret:
   - Name: `ANTHROPIC_API_KEY`
   - Value: your key from console.anthropic.com (starts with `sk-ant-...`)

TekBot will automatically start using Claude AI once the secret is set. If the key is missing, it silently falls back to local keyword matching — no errors for the user.

---

---

## Session 4 Integration Steps (NEW — March 25, run after Sessions 1–3)

### New files added

| File | Location in your project |
|------|--------------------------|
| `TekBot.tsx` *(updated — expanded guide index)* | `src/components/TekBot.tsx` |
| `ForumIndex.tsx` *(updated — server-side search)* | `src/pages/forum/ForumIndex.tsx` |
| `AnalyticsDashboard.tsx` *(updated — replies CSV)* | `src/pages/admin/AnalyticsDashboard.tsx` |
| `BecomeATech.tsx` *(NEW)* | `src/pages/technician/BecomeATech.tsx` |
| `TechVerification.tsx` *(NEW)* | `src/pages/admin/TechVerification.tsx` |
| `20260325120000_technician_profiles.sql` *(NEW)* | `supabase/migrations/` |
| `App.tsx.additions.tsx` *(updated — new routes)* | `src/App.tsx.additions.tsx` |

### Step 14: Run the technician_profiles migration

In Supabase Dashboard → SQL Editor, paste and run:
`supabase/migrations/20260325120000_technician_profiles.sql`

This creates the `technician_profiles` table with RLS policies:
- Anyone can submit an application (no account needed)
- Approved techs can view their own record
- Admins can manage all applications

### Step 15: Add the two new routes to `src/App.tsx`

Copy these two lines into your routes list (alongside the existing routes):

```tsx
<Route path="/become-a-technician" element={<BecomeATech />} />
<Route path="/admin/technicians"   element={<TechVerification />} />
```

And add these two lazy imports at the top of App.tsx:

```tsx
const TechVerification = lazy(() => import("./pages/admin/TechVerification"));
const BecomeATech      = lazy(() => import("./pages/technician/BecomeATech"));
```

### Step 16: Add a link in AdminDashboard to the Tech Verification page

In `src/pages/admin/AdminDashboard.tsx` (or your admin Console), add a link/card to `/admin/technicians` so you can find it easily.

---

---

## Session 5 Integration Steps (NEW — March 25, run after Sessions 1–4)

### New files added

| File | Location in your project |
|------|--------------------------|
| `TechVerification.tsx` *(updated — sends approval email)* | `src/pages/admin/TechVerification.tsx` |
| `JobsBoard.tsx` *(NEW)* | `src/pages/admin/JobsBoard.tsx` |
| `TechDashboard.tsx` *(NEW)* | `src/pages/tech/TechDashboard.tsx` |
| `send-tech-approval/index.ts` *(NEW)* | `supabase/functions/send-tech-approval/index.ts` |
| `20260325150000_job_assignments.sql` *(NEW)* | `supabase/migrations/` |
| `App.tsx.additions.tsx` *(updated — new routes)* | `src/App.tsx.additions.tsx` |

### Step 17: Run the job assignments migration

In Supabase Dashboard → SQL Editor, paste and run:
`supabase/migrations/20260325150000_job_assignments.sql`

This adds:
- `assigned_technician_id` column on `bookings` (FK → `technician_profiles`)
- `assigned_at` timestamp column
- RLS policy so approved technicians can read their own assigned bookings

### Step 18: Add two new routes to `src/App.tsx`

Add these imports at the top of App.tsx:

```tsx
const JobsBoard     = lazy(() => import("./pages/admin/JobsBoard"));
const TechDashboard = lazy(() => import("./pages/tech/TechDashboard"));
```

Add these routes inside your `<Routes>` block:

```tsx
<Route path="/tech"        element={<TechDashboard />} />
<Route path="/admin/jobs"  element={<JobsBoard />} />
```

### Step 19: Add Jobs Board link in Admin Console

In `src/pages/admin/AdminDashboard.tsx` (or Console.tsx), add a link/card to `/admin/jobs`.

### Step 20: Deploy the tech approval email Edge Function

```bash
cd ~/Documents/Claude/Projects/TekSure
npx supabase functions deploy send-tech-approval --project-ref zrgtoefkqafndhxhbuag
```

This function sends a branded HTML welcome email to newly approved technicians.
It's called automatically by TechVerification.tsx — no extra wiring needed.

Make sure `RESEND_API_KEY` and `PUBLIC_SITE_URL` secrets are already set in Supabase (they should be from earlier steps).

### Step 21: Link your first approved technician to their auth account

Approved technicians need their `user_id` set in `technician_profiles` so they can access the `/tech` dashboard.

Run in Supabase SQL Editor — replace the UUIDs with real values from the Dashboard:

```sql
UPDATE technician_profiles
SET user_id = 'THE_TECHS_AUTH_USER_UUID'
WHERE id = 'THE_TECHNICIAN_PROFILE_UUID';
```

### Step 22: Commit and push

```bash
cd ~/Documents/Claude/Projects/TekSure
git add -A
git commit -m "feat: Tech onboarding email, Technician Dashboard, and Admin Jobs Board

- send-tech-approval Edge Function: sends branded HTML welcome email on approval
- TechVerification: automatically calls send-tech-approval after approving a tech
- TechDashboard (/tech): approved techs see their assigned jobs with full details
- JobsBoard (/admin/jobs): admin assigns bookings to approved techs via dropdown
- Migration: assigned_technician_id + assigned_at on bookings + RLS for tech access"

git pull --rebase origin main
git push
```

---

## Known Limitations & Future Improvements

1. ~~TekBot AI — Uses keyword matching; upgrade to real AI~~ **✅ Done — Claude Haiku via Edge Function**
2. Stripe test mode — Use sk_test_ keys while testing; swap to live keys for production
3. Admin role — Simple is_admin boolean; can be expanded to a full roles system later
4. ~~Forum moderation — Admins can only delete their own posts~~ **✅ Done — admin override policies added**
5. ~~Guide view deduplication — Views log on every page load~~ **✅ Done — session dedup via sessionStorage**
6. ~~Forum search — Currently client-side~~ **✅ Done — server-side RPC with 400ms debounce**
7. ~~TekBot: GUIDE_INDEX had only 10 entries~~ **✅ Done — expanded to 25 guides, 15 new QUICK_ANSWERS**
8. ~~Analytics: no forum replies CSV~~ **✅ Done — separate replies export button added**
9. ~~Tech Verify admin tab was placeholder mock data~~ **✅ Done — real technician_profiles table + full CRUD admin UI**
10. ~~Tech onboarding email~~ **✅ Done — `send-tech-approval` Edge Function + auto-trigger on approval**
11. ~~Technician dashboard~~ **✅ Done — `/tech` with real Supabase data, job details, filters**
12. ~~Jobs board — admin assigns bookings to techs~~ **✅ Done — `/admin/jobs` with dropdown assignment**
13. Linking approved techs to auth accounts — currently requires a manual SQL update (Step 21 above)

---

---

---

## Session 6 Integration Steps (NEW — March 25, run after Sessions 1–5)

### What was added

Four community intelligence features inspired by the last30days skill, implemented using free public APIs (Reddit JSON + HN Algolia) with a 6-hour Supabase cache.

### New files added

| File | Location in your project |
|------|--------------------------|
| `TekBot.tsx` *(updated — Research Mode)* | `src/components/TekBot.tsx` |
| `Index.tsx` *(updated — TrendingTopics + TechNews)* | `src/pages/Index.tsx` |
| `TrendingTopics.tsx` *(NEW)* | `src/components/TrendingTopics.tsx` |
| `TechNews.tsx` *(NEW)* | `src/components/TechNews.tsx` |
| `TrendsInsights.tsx` *(NEW)* | `src/pages/admin/TrendsInsights.tsx` |
| `fetch-tech-trends/index.ts` *(NEW)* | `supabase/functions/fetch-tech-trends/index.ts` |
| `20260325200000_tech_trends.sql` *(NEW)* | `supabase/migrations/` |
| `App.tsx.additions.tsx` *(updated — /admin/trends route)* | `src/App.tsx.additions.tsx` |

### Step 23: Run the tech_trends migration

In Supabase Dashboard → SQL Editor, paste and run:
`supabase/migrations/20260325200000_tech_trends.sql`

This creates the `tech_trends` cache table:
- Stores trending tech questions and news from Reddit & Hacker News
- RLS: public SELECT only; the Edge Function writes with service role
- Index on `(type, fetched_at DESC)` for fast cache lookups

### Step 24: Add the `/admin/trends` route to `src/App.tsx`

Add this lazy import at the top of App.tsx (in the Admin section):

```tsx
const TrendsInsights = lazy(() => import("./pages/admin/TrendsInsights"));
```

Add this route inside your `<Routes>` block:

```tsx
<Route path="/admin/trends" element={<TrendsInsights />} />
```

### Step 25: Add TrendingTopics and TechNews to your homepage

`Index.tsx` has already been updated in the `teksure-updates/` folder. If you are manually patching your existing `Index.tsx`, add these imports near the top:

```tsx
import TrendingTopics from "@/components/TrendingTopics";
import TechNews from "@/components/TechNews";
```

Then add both components between the popular guides section and the quick-links section:

```tsx
<TrendingTopics />
<TechNews />
```

### Step 26: Deploy the fetch-tech-trends Edge Function

```bash
cd ~/Documents/Claude/Projects/TekSure
npx supabase functions deploy fetch-tech-trends --project-ref zrgtoefkqafndhxhbuag
```

No new secrets are needed — this function uses only free public APIs (Reddit JSON + HN Algolia) and Supabase's built-in service role key.

### Step 27: Add a Trends & Insights link in Admin Console

In `src/pages/admin/AdminDashboard.tsx` (or your Console page), add a link/card to `/admin/trends` so you can access the Trends & Insights page from the admin menu.

### Step 28: Commit and push

```bash
cd ~/Documents/Claude/Projects/TekSure
git add -A
git commit -m "feat: Community intelligence — Trending Topics, TechNews, TekBot Research Mode, Admin Trends page

- fetch-tech-trends Edge Function: fetches r/techsupport, r/seniors, r/technology + HN Algolia
- 6-hour Supabase cache in tech_trends table (public read, service-role write)
- TrendingTopics component: top 6 trending questions with source badges + guide auto-links
- TechNews component: top 4 current tech news stories on homepage
- TrendsInsights admin page (/admin/trends): research any topic, view trending/news tabs
- TekBot Research Mode: detects 'what are people saying about X?' and shows live community results
- Index.tsx updated: TrendingTopics + TechNews sections added between guides and quick-links"

git pull --rebase origin main
git push
```

---

## Feature Details (Session 6)

### Trending Topics (homepage)
- `<TrendingTopics />` displays the top 6 trending tech questions from Reddit & HN
- Each item shows a source badge, title (truncated to 2 lines), a link to the original thread, and an optional arrow to a matching TekSure guide
- Smart keyword matcher auto-links topics to 15 common guide slugs
- Refresh button lets users pull fresh data
- Skeleton loading state; fails silently on errors

### Tech News (homepage)
- `<TechNews />` displays 4 current tech news headlines in a 2-column grid
- Sourced from the same Edge Function (the `news` array)
- Clean card: headline, source label, external link icon
- Returns null if nothing is available — never breaks the page

### Admin Trends & Insights (`/admin/trends`)
- Admin-only page; redirects non-admins
- **Research box:** type any topic → calls `fetch-tech-trends?topic=X` → shows live HN + Reddit threads
- **Tabs:** Trending (community questions) / News (headlines) / Research (topic search results)
- **Per-item actions:** View original thread, Copy as guide title (one click), Create guide shortcut (pre-fills `/admin/guides?title=...`)
- Refresh button forces a cache bypass
- `toGuideTitle()` strips Reddit boilerplate from thread titles before showing them as guide ideas

### TekBot Research Mode
- TekBot now detects research-intent queries using 9 regex patterns, covering phrases like:
  - "what are people saying about X?"
  - "what's trending with X?"
  - "are people having issues with X?"
  - "is there community discussion about X?"
- When a match is found, TekBot calls `fetch-tech-trends?topic=<extracted_topic>` and displays the live community results inside the chat bubble as clickable cards
- Falls through to the normal AI path if no results are returned
- Opening message now includes a hint: "You can also ask me things like 'what are people saying about iPhone battery life?'"
- One quick-start suggestion updated to "What are people saying about phone scams?"

### Edge Function caching
- First call fetches from Reddit + HN (takes ~2–4s); results cached for 6 hours in `tech_trends` table
- Subsequent calls within the TTL return instantly from the cache
- Old records are pruned on each fresh fetch
- Force-refresh available via `?force=1` query param (used by the Refresh button in TrendsInsights)

---

---

---

## Session 7 Integration Steps (NEW — March 26)

### What was added

Three customer-experience and admin features:

| File | Location in your project |
|------|--------------------------|
| `MyBookings.tsx` *(NEW)* | `src/pages/account/MyBookings.tsx` |
| `WriteReview.tsx` *(NEW)* | `src/pages/account/WriteReview.tsx` |
| `TechVerification.tsx` *(updated — link account UI)* | `src/pages/admin/TechVerification.tsx` |
| `Navbar.tsx` *(updated — My Bookings link)* | `src/components/Navbar.tsx` |
| `link-tech-to-user/index.ts` *(NEW)* | `supabase/functions/link-tech-to-user/index.ts` |
| `20260326120000_tech_reviews.sql` *(NEW)* | `supabase/migrations/` |
| `App.tsx.additions.tsx` *(updated — new routes)* | `src/App.tsx.additions.tsx` |

### Step 29: Run the tech_reviews migration

In Supabase Dashboard → SQL Editor, paste and run:
`supabase/migrations/20260326120000_tech_reviews.sql`

This creates:
- `tech_reviews` table: one review per completed booking, 1–5 star rating + optional comment
- RLS: public SELECT, user can INSERT/UPDATE/DELETE own reviews
- `technician_avg_ratings` view for aggregating tech scores

### Step 30: Add the two new account routes to `src/App.tsx`

Add these lazy imports at the top of App.tsx (in the Account section):

```tsx
const MyBookings  = lazy(() => import("./pages/account/MyBookings"));
const WriteReview = lazy(() => import("./pages/account/WriteReview"));
```

Add these routes inside your `<Routes>` block:

```tsx
<Route path="/my-bookings"       element={<MyBookings />} />
<Route path="/review/:bookingId" element={<WriteReview />} />
```

### Step 31: Deploy the link-tech-to-user Edge Function

```bash
cd ~/Documents/Claude/Projects/TekSure
npx supabase functions deploy link-tech-to-user --project-ref zrgtoefkqafndhxhbuag
```

This function lets admin link an approved technician's profile to their auth account by email.
It uses the service role key (already available in Supabase Edge Function environment) — no new secrets needed.

### Step 32: Copy updated files

Copy the updated files from `teksure-updates/` to your project:
- `src/components/Navbar.tsx` — now includes "My Bookings" in the user dropdown and mobile drawer
- `src/pages/admin/TechVerification.tsx` — updated with "Link to Auth Account" UI on each approved tech card

### Step 33: Commit and push

```bash
cd ~/Documents/Claude/Projects/TekSure
git add -A
git commit -m "feat: My Bookings, Technician Reviews, and Admin Account Linking

- MyBookings (/my-bookings): customer booking history with status, tech name, payment info
- WriteReview (/review/:bookingId): star rating + comment for completed bookings
- tech_reviews table + technician_avg_ratings view
- TechVerification: inline 'Link to Account' UI replaces manual SQL step
- link-tech-to-user Edge Function: admin provides user email, function links the profile
- Navbar: My Bookings added to user dropdown and mobile drawer"

git pull --rebase origin main
git push
```

---

## Feature Details (Session 7)

### My Bookings (`/my-bookings`)
- Auth-protected; guests redirected to /login
- Shows all bookings ordered by newest first
- Summary stat cards: Upcoming / Completed / Total
- Each card shows service type, date, time, booking status, payment status, and assigned tech name
- Expandable detail: tech email, notes, booking ID, amount paid
- "Write a Review" CTA appears on completed bookings with an assigned tech
- After submitting a review, shows "Review submitted — thank you!" instead
- "Book Another Appointment" shortcut at the bottom

### Write a Review (`/review/:bookingId`)
- Guards: must be logged in, booking must belong to the user, must be completed, must have an assigned tech, one review per booking
- Large star rating widget (touch-friendly for seniors) with a label for each level
- Optional comment field (500 char limit)
- On submit: inserts into `tech_reviews`, redirects to success screen, then back to My Bookings
- If already reviewed, automatically redirects back to My Bookings

### Admin: Link Tech to Auth Account (in `/admin/technicians`)
- Each approved technician card now has an expandable "Link to Auth Account" section
- If already linked, shows "Account linked" with a purple badge
- If not linked, shows an email input field and "Link" button
- On clicking Link: calls `link-tech-to-user` Edge Function with the tech profile ID and the typed email
- Function validates admin JWT, finds the auth user by email using service role, updates `technician_profiles.user_id`
- On success: shows confirmation message; "Account linked" purple badge appears in card header
- On failure: shows a friendly error message (e.g. "No account found with email: X")

---

---

## Session 8 Integration Steps (NEW — March 26, run after Sessions 1–7)

### What was added

Three quality-of-life improvements — no new migrations needed:

| File | Location in your project |
|------|--------------------------|
| `TechDashboard.tsx` *(updated — avg rating display)* | `src/pages/tech/TechDashboard.tsx` |
| `JobsBoard.tsx` *(updated — tech ratings + mark completed)* | `src/pages/admin/JobsBoard.tsx` |
| `MyBookings.tsx` *(updated — booking cancellation)* | `src/pages/account/MyBookings.tsx` |

### Step 34: Copy updated files

Copy these three updated files from `teksure-updates/` to your project:

```
teksure-updates/src/pages/tech/TechDashboard.tsx    →  src/pages/tech/TechDashboard.tsx
teksure-updates/src/pages/admin/JobsBoard.tsx       →  src/pages/admin/JobsBoard.tsx
teksure-updates/src/pages/account/MyBookings.tsx    →  src/pages/account/MyBookings.tsx
```

No new routes, migrations, or edge functions are needed for this session.

### Step 35: Commit and push

```bash
cd ~/Documents/Claude/Projects/TekSure
git add -A
git commit -m "feat: Tech ratings display, admin mark-completed, and booking cancellation

- TechDashboard: shows average review rating (stars + count) in header
- JobsBoard: tech ratings visible in assignment dropdown and 'Assigned to' badges
- JobsBoard: 'Mark Completed' button for assigned bookings; status badges
- MyBookings: 'Cancel Booking' button with confirmation modal for upcoming bookings"

git pull --rebase origin main
git push
```

---

## Feature Details (Session 8)

### Tech Average Ratings on Dashboard (`/tech`)
- Fetches the technician's average rating from the `technician_avg_ratings` database view
- Shows a 5-star visual display in the dashboard header area
- Displays average rating to 1 decimal place (e.g. "4.7") and review count (e.g. "12 reviews")
- "No reviews yet" fallback when the tech has no reviews

### Tech Ratings on Jobs Board (`/admin/jobs`)
- Fetches all technician ratings and merges them with the tech options list
- Assignment dropdown now shows rating: "John Doe (London) ★ 4.7"
- "Assigned to" text on each booking card also shows the tech's rating and review count
- Helps admins make informed assignment decisions

### Admin: Mark Booking Completed (`/admin/jobs`)
- "Mark Completed" button appears on assigned bookings that are not yet completed or cancelled
- One-click update to change booking status to "completed"
- Status badges (Completed / Cancelled) shown when applicable
- Triggers the review flow: once a booking is completed, the customer sees the "Write a Review" CTA on My Bookings

### Booking Cancellation (`/my-bookings`)
- "Cancel Booking" button shown on bookings with status "confirmed" or "pending"
- Clicking opens an accessible confirmation modal with clear messaging
- "Yes, Cancel" confirms the action; "Never mind" dismisses it
- Updates booking status to "cancelled" in Supabase
- Local state updated immediately for instant UI feedback
- Success toast shown briefly in the bottom-right corner
- Cancelled bookings show a distinct red "Cancelled" badge

---

---

## Session 9 Integration Steps (NEW — March 31, run after Sessions 1–8)

### What was added

Two backlog features: booking cancellation emails and a technician availability calendar system.

| File | Location in your project |
|------|--------------------------|
| `send-cancellation-email/index.ts` *(NEW)* | `supabase/functions/send-cancellation-email/index.ts` |
| `TechAvailability.tsx` *(NEW)* | `src/pages/tech/TechAvailability.tsx` |
| `MyBookings.tsx` *(updated — sends cancellation email)* | `src/pages/account/MyBookings.tsx` |
| `BookIndex.tsx` *(updated — shows live availability)* | `src/pages/book/BookIndex.tsx` |
| `TechDashboard.tsx` *(updated — availability link)* | `src/pages/tech/TechDashboard.tsx` |
| `20260331120000_technician_availability.sql` *(NEW)* | `supabase/migrations/` |
| `App.tsx.additions.tsx` *(updated — /tech/availability route)* | `src/App.tsx.additions.tsx` |

### Step 36: Run the technician_availability migration

In Supabase Dashboard → SQL Editor, paste and run:
`supabase/migrations/20260331120000_technician_availability.sql`

This creates:
- `technician_availability` table: per-tech, per-date, per-slot availability records
- Unique constraint preventing duplicate slot entries
- Date index for fast booking page lookups
- RLS: public read, approved techs manage own, admins manage all
- `available_slots` view: aggregates available tech count per date+slot

### Step 37: Add the new route to `src/App.tsx`

Add this lazy import at the top of App.tsx (in the Technician section):

```tsx
const TechAvailability = lazy(() => import("./pages/tech/TechAvailability"));
```

Add this route inside your `<Routes>` block:

```tsx
<Route path="/tech/availability" element={<TechAvailability />} />
```

### Step 38: Deploy the send-cancellation-email Edge Function

```bash
cd ~/Documents/Claude/Projects/TekSure
npx supabase functions deploy send-cancellation-email --project-ref zrgtoefkqafndhxhbuag
```

No new secrets needed — uses `RESEND_API_KEY` and `PUBLIC_SITE_URL` (already set from earlier steps).

### Step 39: Copy updated files

Copy these updated files from `teksure-updates/` to your project:

```
teksure-updates/src/pages/account/MyBookings.tsx      →  src/pages/account/MyBookings.tsx
teksure-updates/src/pages/book/BookIndex.tsx          →  src/pages/book/BookIndex.tsx
teksure-updates/src/pages/tech/TechDashboard.tsx      →  src/pages/tech/TechDashboard.tsx
teksure-updates/src/pages/tech/TechAvailability.tsx   →  src/pages/tech/TechAvailability.tsx
```

### Step 40: Commit and push

```bash
cd ~/Documents/Claude/Projects/TekSure
git add -A
git commit -m "feat: Booking cancellation emails and technician availability calendar

- send-cancellation-email Edge Function: branded HTML email with booking details + refund info
- MyBookings: automatically sends cancellation confirmation email on cancel
- TechAvailability (/tech/availability): 14-day calendar, toggle time slots, bulk set/clear
- BookIndex: shows live tech availability per time slot, greys out unavailable slots
- TechDashboard: 'Manage Availability' quick-link in header
- Migration: technician_availability table with RLS + available_slots view"

git pull --rebase origin main
git push
```

---

## Feature Details (Session 9)

### Booking Cancellation Email (`send-cancellation-email`)
- Sends a branded HTML email when a customer cancels a booking
- Includes: service type, date, time, booking ID, refund timeline info
- Red gradient header to clearly indicate cancellation
- "Book a New Appointment" CTA button in the email
- Fire-and-forget: cancellation succeeds even if email fails to send
- Uses existing RESEND_API_KEY — no new secrets needed

### Technician Availability Calendar (`/tech/availability`)
- Auth-protected: only approved technicians can access
- 14-day forward calendar with pagination (navigate weeks ahead/back)
- Date cards show slot count; weekends visually dimmed
- Per-date slot manager: tap a time slot to toggle availability on/off
- "Set All Day" bulk action fills all 7 slots at once
- "Clear Day" removes all non-booked slots
- Booked slots shown in amber with "Booked" badge — cannot be removed
- Real-time save — each toggle writes immediately to Supabase
- Back-link to Technician Dashboard

### Booking Page Live Availability (BookIndex step 2)
- When customer picks a date, BookIndex queries `technician_availability`
- Time slots show available tech count (e.g. "2 techs")
- Slots with no available techs are greyed out and disabled
- Loading spinner while checking availability
- Graceful fallback: if the migration hasn't been run or the table is empty, all slots remain available (backwards-compatible)

---

Generated by automated TekSure development sessions — March 31, 2026
