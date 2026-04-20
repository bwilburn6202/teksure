# TekSure Architecture

System architecture, design decisions, and how major components fit together.

---

## System Overview

```
                    ┌─────────────────┐
                    │   Vercel CDN    │
                    │   (Frontend)    │
                    └────────┬────────┘
                             │
                    ┌────────┴────────┐
                    │  React SPA      │
                    │  (Vite build)   │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
     ┌────────┴──────┐ ┌────┴────┐ ┌───────┴───────┐
     │  Supabase     │ │ Stripe  │ │   Resend      │
     │  (PostgreSQL  │ │ (Pay-   │ │   (Email)     │
     │   + Auth      │ │  ments) │ │               │
     │   + RLS       │ │         │ │               │
     │   + Edge Fn)  │ └─────────┘ └───────────────┘
     └───────────────┘
```

---

## Frontend Architecture

### Component Hierarchy

```
App.tsx (Router + Providers)
├── AuthProvider
├── SeniorModeProvider
├── HighContrastProvider
├── LanguageProvider
├── QueryClientProvider
├── ThemeProvider
│
├── Layout
│   ├── Navbar
│   ├── <Outlet /> (page content)
│   ├── Footer
│   ├── TekBot (floating AI assistant)
│   └── ScamPanicButton
│
└── Route Pages (115+ routes, lazy-loaded)
    ├── Public pages
    ├── Protected pages (customer, tech, admin)
    └── Tool pages (32 interactive tools)
```

### State Management

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Server state | TanStack React Query | Supabase data fetching, caching |
| Auth state | AuthContext | User session, roles |
| UI state | React Context | Senior mode, high contrast, language, dark mode |
| Form state | React Hook Form | Form inputs, validation (Zod) |
| Local state | useState | Component-level state |
| Persisted | localStorage | Favorites, progress, preferences |

### Code Splitting

Vite vendor chunks: `router`, `motion`, `supabase`, `ui`, `query`, `forms`. All pages lazy-loaded with `React.lazy()`.

---

## Authentication Flow

```
User clicks Login
  → Supabase Auth (email/password)
  → JWT stored in localStorage
  → AuthContext reads session, fetches profile
  → Role determines dashboard:
      customer → /customer
      tech     → /tech
      admin    → /admin
```

---

## Payment Flow (Stripe)

```
Customer books technician
  → Frontend calls create-checkout-session Edge Function
  → Edge Function creates Stripe session ($15 deposit)
  → Customer redirected to Stripe hosted checkout
  → On success → Stripe fires webhook
  → stripe-webhook Edge Function:
      - Updates booking payment_status
      - Records deposit_paid_at
      - Triggers confirmation email
  → Customer redirected to /payment/success
```

Payment states: `pending` → `paid` → `completed` | `refunded` | `cancelled`

---

## Content Architecture

```
guides.ts + batch files
    │
    ├── Merged: [...coreGuides, ...batch2, ...batch3]
    ├── Rendered: /guides (listing), /guides/:slug (detail)
    ├── Searched: SearchModal (fuzzy on title, tags, excerpt)
    ├── Rated: guide_ratings table (Supabase)
    └── Cached: Service Worker (offline)
```

---

## Route Groups

| Group | Path | Auth | Roles |
|-------|------|------|-------|
| Public | `/`, `/guides`, `/tools` | No | Any |
| Customer | `/customer` | Yes | customer |
| Technician | `/tech` | Yes | tech |
| Admin | `/admin` | Yes | admin |
| Forum | `/forum` | Partial | Any auth for write |
| Payment | `/payment` | No | Any |

---

## Security

- RLS on all tables
- JWT verification in Edge Functions
- Stripe webhook signature verification
- Secrets in Supabase vault (not in client code)
- HTTPS enforced by Vercel
- Only `VITE_` prefixed keys exposed to client
