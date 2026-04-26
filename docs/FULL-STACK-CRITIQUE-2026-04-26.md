# TekSure Full-Stack Critique (Frontend + Backend)

**Date:** 2026-04-26  
**Scope:** React SPA, design system adherence, routing/app structure, Supabase schema/RLS/functions, and quality gates.

## Executive Summary

TekSure has a strong mission fit and thoughtful accessibility intent, but the implementation quality is currently constrained by scale and consistency debt. The biggest near-term risks are (1) maintainability from oversized UI composition files, (2) inconsistent standards between documented design rules and shipped components, (3) weak guardrails in payment/booking paths, and (4) failing quality gates (lint/tests) that make regressions likely.

## What’s Working Well

1. **Clear user-centered product framing for seniors/non-technical users** is explicit in project docs and reflected in language/style goals.  
2. **Modern baseline stack** (React+TS+Vite, React Query, Supabase, Stripe) is appropriate for velocity.  
3. **SSR pathway exists** and is structured clearly with dev/prod split in `server.ts`.  
4. **Auth/RLS foundation exists** (profiles roles, bookings RLS, webhook signature verification), which is better than many early-stage apps.

## Frontend Critique

### 1) Route composition is too monolithic
- `src/App.tsx` is ~900 lines and manually declares a very large lazy-import list and route graph in one place.
- This harms discoverability, onboarding, merge conflict rates, and confidence when adding/removing pages.
- **Recommendation:** split route config by domain (`publicRoutes`, `toolsRoutes`, `adminRoutes`, etc.) and generate `<Route>` trees from typed config arrays.

### 2) Layout primitives are oversized and over-responsible
- `Navbar.tsx` (~509 lines) and `Footer.tsx` (~406 lines) combine rendering, behavior, and information architecture in single files.
- This raises cognitive load for any UI change and slows refactor velocity.
- **Recommendation:** extract subcomponents (`DesktopNav`, `MobileDrawer`, `AccountMenu`, `FooterColumns`, `NewsletterSignup`) and keep the shell files orchestration-only.

### 3) Design-system drift vs implementation reality
- `DESIGN.md` sets strict readability and interaction standards; implementation often follows them, but consistency appears manual rather than enforceable.
- Given scale, class-level conventions alone are not enough.
- **Recommendation:** add tokenized component variants (button/input/card density presets), visual regression checks for key surfaces, and lint rules for forbidden copy terms/undersized tap targets where feasible.

### 4) Router/context assumptions leak into component tests
- Test failures show components (`CookieConsent`, breadcrumb flows, helmet usage) rendered without required providers/router context.
- **Recommendation:** introduce a canonical `renderWithAppProviders()` test utility wrapping router, helmet, query client, auth stubs, etc.

## Backend Critique

### 1) Payment initiation endpoint is permissive
- `create-checkout-session` uses wildcard CORS and accepts request body fields directly; there is no explicit authentication/rate-limiting/idempotency guard in the function itself.
- **Risk:** abuse/spam session creation and metadata poisoning attempts.
- **Recommendation:** require an authenticated user for non-anonymous flows, server-side lookup of booking details from booking ID (instead of trusting client labels), and add replay/idempotency protections.

### 2) Webhook robustness can improve
- `stripe-webhook` does verify signatures (good), but secret/env variables use non-null assertions and there is broad `any` casting around DB writes.
- **Risk:** weaker runtime failure messages and reduced type safety in a critical revenue path.
- **Recommendation:** explicit env validation at startup, narrow typed update payloads, and structured audit logs (event id, booking id, transition).

### 3) Booking RLS policy may be too open for insert
- Current policy allows public inserts with `WITH CHECK (true)`.
- This can be intentional for anonymous bookings, but without anti-abuse controls it increases spam and data quality risk.
- **Recommendation:** add server-verified CAPTCHA/rate limiting, email/phone normalization checks, and optional staged status before operational queues.

### 4) Documentation/code mismatch in Supabase key naming
- README/docs commonly reference `VITE_SUPABASE_ANON_KEY`, while runtime client uses `VITE_SUPABASE_PUBLISHABLE_KEY`.
- **Risk:** env misconfiguration and onboarding friction.
- **Recommendation:** standardize on one variable naming convention and enforce with startup validation plus CI check.

### 5) Minor but telling content mismatch in payments migration
- Stripe migration comment references a **£15** deposit while function charges **$15**.
- **Risk:** trust/compliance confusion in support/admin contexts.
- **Recommendation:** normalize all payment copy/comments to USD or make currency configurable end-to-end.

## Quality Gates & Delivery Risk

### 1) Lint baseline is far from green
- Current lint run reports **484 problems (445 errors, 39 warnings)**.
- This means static checks are no longer a reliable merge gate and signal-to-noise is degraded.

### 2) Test suite has meaningful failing cases
- `npm test` shows failures in UI/provider wiring tests and data/content-contract tests (invalid category, missing step content, missing thumbnail emoji, brand-voice regressions).
- This is good visibility, but current default branch health is not stable.

## Prioritized 30-Day Plan

1. **Stabilize gates first (Week 1):** set a baseline file for legacy lint debt, enforce zero new violations, and fix deterministic failing tests.  
2. **Route/layout modularization (Week 2):** split `App.tsx`, `Navbar.tsx`, `Footer.tsx` into domain modules + shared primitives.  
3. **Payment hardening (Week 3):** auth/rate-limit/idempotency for checkout + stronger webhook env/type guards.  
4. **Docs/runtime alignment (Week 4):** env var naming unification, startup validation, and migration/comment cleanup.

## Scorecard (Current)

- **UX intent / accessibility philosophy:** 8/10  
- **Frontend maintainability:** 4/10  
- **Backend safety for critical flows:** 5/10  
- **Operational quality gates (lint/tests):** 3/10  
- **Documentation accuracy vs runtime:** 5/10
