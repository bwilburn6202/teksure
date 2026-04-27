# TekSure API Reference

Supabase database schema, Edge Functions, and integration points.

---

## Supabase Project

- **Project ref**: `zrgtoefkqafndhxhbuag`
- **Client**: `@supabase/supabase-js` v2
- **Types**: Auto-generated in `src/integrations/supabase/types.ts`

---

## Database Schema

### `profiles`

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid (PK, FK auth.users) | User ID |
| `role` | text | `customer`, `tech`, or `admin` |
| `full_name` | text | Display name |
| `avatar_url` | text | Profile image URL |
| `created_at` | timestamptz | Account creation |

### `bookings`

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid (PK) | Booking ID |
| `user_id` | uuid (FK auth.users) | Customer |
| `technician_id` | uuid (FK auth.users) | Assigned tech |
| `service_type` | text | Service requested |
| `description` | text | Problem description |
| `preferred_date` | date | Requested date |
| `preferred_slot` | text | Time slot |
| `status` | text | `pending`, `confirmed`, `completed`, `cancelled` |
| `payment_status` | text | `pending`, `paid`, `completed`, `refunded`, `cancelled` |
| `stripe_session_id` | text | Stripe session ID |
| `deposit_paid_at` | timestamptz | When deposit received |

### `forum_threads`

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid (PK) | Thread ID |
| `title` | text | Thread title |
| `body` | text | Content |
| `category` | text | `general`, `wifi`, `passwords`, `devices`, `software` |
| `author_id` | uuid (FK) | Author (nullable for anonymous) |
| `author_name` | text | Display name |
| `replies_count` | integer | Cached count |

### `forum_replies`

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid (PK) | Reply ID |
| `thread_id` | uuid (FK forum_threads) | Parent thread |
| `author_id` | uuid (FK) | Author |
| `body` | text | Reply content |

### `guide_ratings`

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid (PK) | Rating ID |
| `guide_slug` | text | Guide identifier |
| `user_id` | uuid (FK) | Reviewer |
| `rating` | integer | 1-5 stars |
| `review` | text | Optional text |

### `stripe_payments`

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid (PK) | Record ID |
| `booking_id` | uuid (FK bookings) | Related booking |
| `stripe_session_id` | text | Stripe session |
| `amount` | integer | Amount in cents |
| `currency` | text | Currency code |
| `status` | text | Payment status |

### `content_sources`

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid (PK) | Source ID |
| `url` | text | Source URL |
| `title` | text | Article title |
| `content` | text | Body text |
| `simplified_content` | text | AI-simplified version |
| `category` | text | Category |
| `quality_score` | numeric | Quality metric |

### `video_tutorials`

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid (PK) | Video ID |
| `title` | text | Video title |
| `url` | text | Embed URL |
| `guide_slug` | text | Linked guide |

---

## Edge Functions

### `create-checkout-session`

**POST** `/functions/v1/create-checkout-session`

```json
// Request
{ "bookingId": "uuid", "customerEmail": "user@example.com", "serviceName": "Computer Setup" }

// Response
{ "sessionId": "cs_live_...", "url": "https://checkout.stripe.com/..." }
```

### `stripe-webhook`

**POST** `/functions/v1/stripe-webhook`

Handles `checkout.session.completed` and `charge.refunded` events. Requires `stripe-signature` header.

### `send-booking-confirmation`

**POST** `/functions/v1/send-booking-confirmation`

```json
{ "to": "customer@example.com", "bookingId": "uuid", "serviceName": "...", "preferredDate": "2026-04-15" }
```

### `send-help-confirmation`

**POST** `/functions/v1/send-help-confirmation`

```json
{ "to": "user@example.com", "name": "John", "issue": "My Wi-Fi keeps disconnecting" }
```

### `scrape-articles`

**POST** `/functions/v1/scrape-articles` -- Scrapes external content sources.

### `simplify-article`

**POST** `/functions/v1/simplify-article` -- AI-rewrites articles in plain language.

### `categorize-and-dedup`

**POST** `/functions/v1/categorize-and-dedup` -- Categorizes and deduplicates content.

---

## Common Queries

```typescript
// Fetch customer bookings
const { data } = await supabase
  .from('bookings')
  .select('*')
  .eq('user_id', userId)
  .order('created_at', { ascending: false });

// Fetch forum threads by category
const { data } = await supabase
  .from('forum_threads')
  .select('*, forum_replies(count)')
  .eq('category', 'wifi')
  .order('created_at', { ascending: false });

// Submit guide rating
const { error } = await supabase
  .from('guide_ratings')
  .insert({ guide_slug: 'connect-wifi-windows', user_id: currentUser.id, rating: 5 });
```

---

## Deploying

```bash
supabase functions deploy              # All functions
supabase db push                       # Apply migrations
supabase secrets set KEY=value         # Set secrets
supabase functions logs <name> --tail  # View logs
```
