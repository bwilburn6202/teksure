# TekSure Test Suite

This directory contains unit and integration tests for TekSure.com.

## Quick Start

```bash
# Run all tests
npm run test

# Watch mode (re-run on file changes)
npm run test:watch

# Run only critical path tests (guides, booking, auth)
npm run test:critical

# Generate coverage report
npm run test:coverage
```

## Test Structure

```
src/__tests__/
├── guides.test.ts      # Guide schema validation, search, filtering
├── booking.test.ts     # Booking validation, payment flow, RLS policies
├── auth.test.ts        # User profile, auth, session management
└── README.md           # This file

tests/
├── fixtures/
│   ├── guides.ts       # Sample guide data for tests
│   ├── users.ts        # Sample user data for tests
│   ├── bookings.ts     # Sample booking data for tests
│   └── stripe-webhook.json  # Mock Stripe webhook (Phase 2)
└── setup.ts            # Jest/Vitest setup configuration
```

## What's Tested

### Guides (`guides.test.ts`)
- ✅ Required schema fields present
- ✅ Slug format validation (lowercase, hyphens)
- ✅ Title length constraints (≤60 chars for SEO)
- ✅ Excerpt length constraints (≤160 chars for meta)
- ✅ Valid category from allowed list
- ✅ Valid difficulty level
- ✅ Valid ISO 8601 dates
- ✅ Search filtering by category, tag, difficulty
- ✅ Full-text search by title/excerpt

### Bookings (`booking.test.ts`)
- ✅ Required schema fields present
- ✅ Valid status values (pending, confirmed, completed, cancelled)
- ✅ Valid payment_status when present (unpaid, paid, refunded)
- ✅ Date/time format validation
- ✅ Stripe session ID validation
- ✅ Payment deposit timestamp logic
- ✅ RLS policy compliance (user ownership)
- ✅ State transition logic
- ✅ Data integrity constraints

### Auth (`auth.test.ts`)
- ✅ User profile schema validation
- ✅ Email format validation
- ✅ UUID format validation
- ✅ Valid age_range when present
- ✅ Unique email/ID constraints
- ✅ RLS policy concepts (self-read, self-update)
- ✅ Admin user distinction

## Critical Path Tests

The `npm run test:critical` script runs only the highest-priority tests (guides, booking, auth). These are integration into your daily health checks since they cover:

1. **Guide data** — The daily enrichment task adds/updates 341 guides; bad data breaks the site
2. **Booking flow** — Live Stripe payments; regressions = revenue loss
3. **Auth** — User accounts and session management; RLS policies must work

## Running in CI/CD & Scheduled Tasks

The `daily-site-health` scheduled task will run:

```bash
npm run test:critical
```

If any critical tests fail, the health check will flag the issue and prevent deployments.

## Phase 2: Integration Tests

Phase 2 will add:
- Supabase client integration tests (real mutations, RLS enforcement)
- Stripe webhook handler tests
- Edge Function tests (send-booking-confirmation, create-checkout-session)
- E2E tests for full booking flow (Playwright)

## Test Data Fixtures

Located in `/tests/fixtures/`:

- `guides.ts` — Sample guides for testing schema and search
- `users.ts` — Sample users for auth and booking tests
- `bookings.ts` — Sample bookings at different states (pending, paid, completed)

Use these fixtures in tests to avoid hardcoding test data.

## Best Practices

1. **Keep tests focused** — One assertion per test case when possible
2. **Use fixtures** — Reuse test data from `tests/fixtures/`
3. **Test behavior, not implementation** — Test "I can search by tag" not "the filter function does X"
4. **No side effects** — Tests should not create real database records
5. **Clear naming** — Test names should describe what they verify, not how

## Common Issues

### Tests fail with "Cannot find module"
Make sure vitest is configured with the `@` alias in `vitest.config.ts`.

### Tests pass locally but fail in CI
Check that `tests/` directory is included in the git repo. Add to `.gitignore` only if needed.

### Vitest is slow
Use `npm run test:watch` during development instead of re-running `npm run test` each time.

## Next Steps

1. **Week 1:** Run `npm run test` to ensure all tests pass locally
2. **Week 2:** Integrate `npm run test:critical` into daily health checks
3. **Week 3:** Add integration tests for Supabase mutations and Edge Functions
4. **Week 4+:** Add E2E tests for user-facing flows
