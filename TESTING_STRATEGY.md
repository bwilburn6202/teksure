# TekSure Testing Strategy

**Status:** Foundation Phase
**Priority:** Build test infrastructure for payment flow, guide data, and critical paths
**Audience:** Development pipeline, daily health checks, autonomous tasks

---

## Testing Pyramid for TekSure

```
              /    E2E   \
             / Stripe flow, booking flow
            /  Integration  \
           / Supabase mutations, Edge Functions, Auth
          /     Unit Tests      \
         / Guide data, guide search, tool logic, forum CRUD
```

---

## Priority Matrix

| Component | Test Type | Coverage Target | Rationale |
|-----------|-----------|-----------------|-----------|
| **Stripe Payment Flow** | Integration + E2E | 100% | Live payments — any regression = revenue loss |
| **Booking Creation & Confirmation** | Integration | 95% | Email delivery, Stripe webhook handling |
| **Guide Data Structure** | Unit + Integration | 90% | 341 guides auto-enriched daily; bad data breaks site |
| **Guide Search & Filter** | Unit | 85% | Core user feature; affects discovery |
| **Forum CRUD** | Unit + Integration | 80% | User-generated content; RLS policies critical |
| **Edge Functions** | Integration | 95% | Webhook handling, email delivery, checkout session |
| **TekBot Queries** | Unit | 70% | Nice-to-have; less critical than guides/booking |
| **Tool Wizards** (App Recommender, etc.) | Unit | 75% | Multi-step logic; test state transitions |
| **Admin Dashboard** | Integration | 60% | Internal use; lower priority |
| **Component Rendering** | Snapshot | 50% | Low signal-to-noise; skip trivial UI |

---

## Test Breakdown by Layer

### 1. Unit Tests (Fast, Focused)

**Guide Data & Search**
- Guide schema validation (required fields: slug, title, excerpt, body, etc.)
- Guide filtering by category, difficulty, tags
- Guide search ranking and relevance
- readTime calculation
- SEO field validation (title ≤ 60 chars, excerpt ≤ 160 chars)

**Tool Logic**
- App Recommender: input → recommendation logic → output
- Backup Wizard: state transitions, validation at each step
- Troubleshooter: step branching logic
- Warranty Checker: data lookup correctness

**Forum**
- Thread creation validation (title, content, user_id)
- Reply validation (content, thread_id, user_id)
- Thread/reply deletion with RLS checks

**Utilities**
- Price formatting (USD)
- Date formatting
- Plain-language helpers

### 2. Integration Tests (Medium Speed, DB + Auth)

**Supabase Auth**
- User signup with profile creation
- Session management
- Password reset flow
- RLS policies: users can read own profile, update own profile

**Guide Mutations**
- Insert new guide
- Update guide (enrichment task)
- RLS: public read, admin-only write

**Booking Flow**
- Create booking (user_id, date, time, technician_id)
- Update booking status (confirmed, completed, cancelled)
- RLS: users read own bookings, admin reads all
- Trigger: send confirmation email

**Forum Mutations**
- Create thread with user ownership
- Reply to thread
- Delete own thread/reply
- RLS enforcement: users see public threads, admins override

**Edge Function Mocking**
- Stripe webhook received → validate signature → update booking.payment_status
- send-booking-confirmation called → email sent (mock Resend)
- create-checkout-session called → Stripe session created

### 3. End-to-End Tests (Slow, Full Flow)

**Booking + Payment (Priority 1)**
1. User clicks "Book Technician"
2. User fills date/time, submits
3. Redirect to Stripe checkout (`create-checkout-session` Edge Function)
4. Mock Stripe payment success
5. Webhook received → booking.payment_status = "paid"
6. Confirmation email sent (mock)
7. User sees "Booking Confirmed" on profile

**Guide Enrichment Task (Priority 2)**
1. Daily task runs: `weekly-guide-enrichment`
2. 3-5 new guides inserted
3. 10 existing guides updated
4. No TypeScript errors
5. All guides pass schema validation

---

## Tech Stack for Testing

| Layer | Tool | Why |
|-------|------|-----|
| Unit/Integration | Jest | React + TypeScript standard |
| React Components | React Testing Library | Avoid snapshot brittleness; test behavior |
| Database | `@supabase/supabase-js` + test fixtures | Same client as prod; real mutations |
| HTTP/Webhooks | node-fetch + mocking | Test Edge Function triggers |
| Stripe | Stripe test API (`sk_test_...`) | Real test environment; no mocks needed |
| E2E | Playwright (optional Phase 2) | Full browser flow; catches UI bugs |

---

## Coverage Targets

- **Critical paths** (payment, booking, guide enrichment): 95%+
- **Feature logic** (tools, forum, search): 80%+
- **UI components** (buttons, cards): 50% (skip unless behavior-critical)
- **Overall**: 75%+ by end of Phase 1

---

## Phase 1: Foundation (Week 1-2)

**Goal:** Get payment flow and guide data under test; integrate into daily health checks.

1. **Setup** (2 days)
   - Add Jest + React Testing Library to `package.json`
   - Create `src/__tests__/` folder structure
   - Create `tests/fixtures/` for test data (sample guides, users, bookings)
   - Setup Supabase test client with RLS disabled for tests

2. **Unit Tests** (3 days)
   - Guide schema + validation
   - Guide search/filter logic
   - Tool wizard state transitions
   - Forum validation

3. **Integration Tests** (3 days)
   - Supabase Auth flow (signup, session)
   - Guide CRUD with RLS
   - Booking CRUD
   - Mock Stripe webhook handling

4. **Health Check Integration** (1 day)
   - Update `daily-site-health` task to run: `npm run test:critical`
   - Log test results
   - Flag failures in health check output

**Success:** `npm run test` passes, payment flow covered 95%, daily health check runs tests.

---

## Phase 2: Expansion (Week 3+)

- Playwright E2E for full booking flow
- Edge Function integration tests (real Deno runtime)
- TekBot query tests
- Admin dashboard tests
- Performance benchmarks (guide search, forum load)

---

## File Structure

```
src/
├── __tests__/
│   ├── guides.test.ts          # Guide schema, search, filter
│   ├── tools/
│   │   ├── AppRecommender.test.ts
│   │   ├── BackupWizard.test.ts
│   │   └── Troubleshooter.test.ts
│   ├── forum.test.ts           # Forum CRUD
│   ├── auth.test.ts            # Auth flow
│   └── booking.test.ts         # Booking + RLS
├── integrations/
│   └── supabase/
│       └── __tests__/
│           ├── booking.integration.test.ts
│           ├── guides.integration.test.ts
│           └── forum.integration.test.ts
├── utils/__tests__/
│   ├── formatting.test.ts
│   └── dates.test.ts
└── ...

tests/
├── fixtures/
│   ├── guides.json             # Sample guides for tests
│   ├── users.json              # Sample users
│   ├── bookings.json           # Sample bookings
│   └── stripe-webhook.json     # Sample Stripe webhook
└── setup.ts                    # Jest config, test DB setup

jest.config.js                  # Jest config (preset: ts-jest)
```

---

## Running Tests

```bash
# All tests
npm run test

# Watch mode (during development)
npm run test:watch

# Coverage report
npm run test:coverage

# Critical path only (daily health check)
npm run test:critical

# Integration only
npm run test:integration
```

---

## Next Steps

1. **This week:** Set up Jest + first unit tests for guides
2. **Week 2:** Integration tests for booking + payment
3. **Week 3:** E2E test for full booking flow; integrate into health checks
4. **Ongoing:** Add tests as new features ship (monthly feature build)

---

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Test flakiness (async, timing) | Use proper test utilities; avoid `setTimeout` |
| Slow integration tests | Parallelize with Jest workers; keep DB tests fast with fixtures |
| Stripe test API rate limits | Cache test responses; use deterministic test data |
| RLS policies not tested | Use real Supabase test client; disable RLS only for non-security tests |
| Tests rot as codebase changes | Keep tests close to code; refactor together; 75%+ coverage requirement |
