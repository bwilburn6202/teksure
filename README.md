# TekSure - Tech Help Made Simple

**Free tech support, digital literacy guides, and real human help for everyday people.**

TekSure is an American tech support platform built for non-technical users and seniors (60+). We provide plain-language guides, interactive tools, community forums, and on-demand technician bookings to help anyone feel confident with technology.

**Live site:** [teksure.com](https://teksure.com)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Database](#database)
- [Edge Functions](#edge-functions)
- [Guides System](#guides-system)
- [Accessibility](#accessibility)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [License](#license)

---

## Features

### Content & Education
- **~2,900 step-by-step guides** across 19 categories (Windows, Mac, phones, safety, AI, health tech, smart home, financial tech, and more)
- **Interactive tools** (99+): password strength checker, Wi-Fi speed test, device health dashboard, phishing scanner, backup wizard, jargon translator, and more
- **AI tutor (TekBot)**: page-aware assistant that answers questions in plain language
- **Video tutorials** embedded in guides with screenshot annotations
- **Guide rating system**: 5-star reviews on every guide
- **My Learning Path**: personalized progress tracking at `/my-path`
- **Glossary & Quick Fixes**: instant lookup for common terms and problems

### Community & Support
- **Community Forum**: peer-to-peer Q&A organized by category (Supabase-backed)
- **Technician Bookings**: schedule appointments with verified technicians
- **Scam Panic Button**: emergency one-click help for suspected scams
- **Get Help flow**: submit help requests with email confirmation

### Payments & Business
- **Stripe integration** (live): $15 deposit model with checkout sessions and webhooks
- **Payment success/cancel pages** with full status tracking
- **Admin Console**: manage help requests, bookings, and revenue analytics

### Dashboards
- **Customer Dashboard** (`/customer`): track jobs, view history
- **Technician Dashboard** (`/tech`): manage assigned jobs
- **Admin Console** (`/admin`): help requests, bookings, revenue KPIs, payment breakdowns

### Platform
- **PWA / Offline support**: service worker caches guides for offline reading
- **Multi-language**: language context with toggle
- **Push notifications**: opt-in alerts at `/notifications`
- **Dark mode & high contrast**: WCAG 2.1 AA accessibility
- **Senior mode**: larger text, simplified navigation
- **SEO optimized**: dynamic meta tags, sitemap, Open Graph, FAQ schema markup

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18 + TypeScript |
| **Build** | Vite 5 (SWC plugin) |
| **Styling** | Tailwind CSS 3 + shadcn/ui (Radix primitives) |
| **Routing** | React Router v6 (220+ routes, lazy-loaded) |
| **State** | TanStack React Query + React Context |
| **Backend** | Supabase (PostgreSQL + Auth + Row Level Security) |
| **Serverless** | Supabase Edge Functions (Deno) |
| **Payments** | Stripe (checkout sessions + webhooks) |
| **Email** | Resend (via Edge Functions) |
| **Forms** | React Hook Form + Zod validation |
| **Charts** | Recharts |
| **Animation** | Framer Motion |
| **Testing** | Vitest + Testing Library + Playwright |
| **Deployment** | Vercel |
| **Analytics** | Google Analytics 4 |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommend using [nvm](https://github.com/nvm-sh/nvm))
- **npm** or **bun** package manager
- A **Supabase** project (for backend features)
- A **Stripe** account (for payment features)

### Installation

```bash
# Clone the repository
git clone https://github.com/bwilburn6202/teksure.git
cd teksure

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your Supabase and Stripe keys

# Start development server
npm run dev
```

The app runs at **http://localhost:5173** by default.

---

## Project Structure

```
teksure/
├── public/                     # Static assets
│   ├── screenshots/            # Guide step screenshots (by platform)
│   ├── manifest.json           # PWA manifest
│   ├── sw.js                   # Service worker
│   ├── sitemap.xml             # Auto-generated SEO sitemap
│   └── robots.txt              # Search engine directives
│
├── src/
│   ├── App.tsx                 # Root component with all route definitions
│   ├── main.tsx                # Entry point (providers, QueryClient)
│   ├── index.css               # Global styles, CSS variables, themes
│   │
│   ├── components/             # Reusable components
│   │   ├── layout/             # Navbar, Footer
│   │   ├── ui/                 # 48 shadcn/ui base components
│   │   ├── TekBot.tsx          # AI assistant chatbot
│   │   ├── ProtectedRoute.tsx  # Role-based route guards
│   │   ├── SEOHead.tsx         # Dynamic meta tags
│   │   └── ScamPanicButton.tsx # Emergency scam help
│   │
│   ├── pages/                  # Route page components (218+ files)
│   │   ├── admin/              # Admin Console, Content Pipeline
│   │   ├── customer/           # Customer Dashboard, Job Room
│   │   ├── tech/               # Technician Dashboard, Job Room
│   │   ├── forum/              # Forum Index, Thread Detail, New Thread
│   │   ├── payment/            # Stripe Success/Cancel pages
│   │   └── tools/              # 99+ interactive tool pages
│   │
│   ├── data/                   # Static content data
│   │   ├── guides.ts           # Core guide definitions (~790 guides)
│   │   ├── guides-batch-*.ts   # Additional guide batches (96 batch files, ~2,100+ guides)
│   │   ├── aggregatedArticles.ts
│   │   └── roadmapData.ts
│   │
│   ├── contexts/               # React Context providers
│   │   ├── AuthContext.tsx      # Authentication & roles
│   │   ├── SeniorModeContext.tsx
│   │   ├── HighContrastContext.tsx
│   │   └── LanguageContext.tsx
│   │
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities (tekbot, favorites, progress, badges)
│   ├── integrations/           # Supabase client & auto-generated types
│   └── types/                  # TypeScript type definitions
│
├── supabase/
│   ├── functions/              # 20 Edge Functions (Deno runtime)
│   └── migrations/             # 26 SQL migration files
│
├── scripts/                    # Screenshot generation & sitemap scripts
├── vite.config.ts              # Vite config (SWC, code splitting, sitemap)
├── tailwind.config.ts          # Tailwind theme (colors, fonts, animations)
├── vercel.json                 # Vercel deployment config
└── vitest.config.ts            # Test configuration
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build (outputs to `dist/`) |
| `npm run build:dev` | Development mode build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest (single run) |
| `npm run test:watch` | Run Vitest in watch mode |

---

## Environment Variables

Create a `.env` file in the project root:

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Stripe (public key for client-side)
VITE_STRIPE_PUBLIC_KEY=pk_live_...

# Google Analytics
VITE_GA4_ID=G-XXXXXXXXXX
```

Supabase Edge Function secrets (set via Supabase dashboard):

```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
RESEND_API_KEY=re_...
```

---

## Database

TekSure uses **Supabase** (PostgreSQL) with Row Level Security (RLS) on all tables.

| Table | Purpose |
|-------|---------|
| `auth.users` | Supabase Auth (email/password, OAuth) |
| `profiles` | User profiles with role (customer, tech, admin) |
| `bookings` | Technician scheduling with payment status |
| `forum_threads` | Community forum posts |
| `forum_replies` | Threaded forum comments |
| `guide_ratings` | 5-star guide review system |
| `stripe_payments` | Payment transaction tracking |
| `content_sources` | Aggregated article sources |
| `video_tutorials` | Video content metadata |

<!-- TODO: Create docs/API.md with full schema details -->

---

## Edge Functions

| Function | Description |
|----------|-------------|
| `create-checkout-session` | Creates Stripe checkout session ($15 deposit) |
| `stripe-webhook` | Handles Stripe payment events |
| `send-booking-confirmation` | Booking confirmation email via Resend |
| `send-help-confirmation` | Help request confirmation email |
| `send-notification` | Push notifications |
| `send-weekly-newsletter` | Weekly email digest |
| `process-email-queue` | Async email processing |
| `brain-query` | AI semantic search for TekSure Brain |
| `ollama-health` | Ollama server health check |
| `doc-chat` | Document Q&A |
| `knowledge-base-compile` | KB compilation |
| `knowledge-source-import` | KB import |
| `knowledge-source-save` | KB save |
| `publish-to-batch` | Guide batch publishing |
| `safety-lookup` | Scam/safety data lookup |
| `scrape-articles` | Content aggregation from external sources |
| `simplify-article` | AI-powered article simplification |
| `categorize-and-dedup` | Content categorization and deduplication |
| `auth-email-hook` | Email verification hook |
| `email-selftest` | Email testing utility |

---

## Guides System

Guides are the core of TekSure: **~2,900** step-by-step tutorials across **19 categories**.

### Categories

Windows, Mac, Essential Skills, Tips & Tricks, AI Guides, AI Deep Dives, Safety & Privacy, How-To, Apps & Services, Health & Wellness Tech, Phone & Tablet, Social Media, Smart Home, Financial Tech, Internet & Connectivity, Communication, Entertainment, Government & Civic, Life Transitions.

### Adding a Guide

Add a guide object to `src/data/guides.ts`:

```typescript
{
  slug: 'your-guide-slug',
  title: 'How to Do Something',
  excerpt: 'Brief description.',
  category: 'essential-skills',
  tags: ['keyword1', 'keyword2'],
  readTime: '5 min',
  thumbnailEmoji: '📘',
  publishedAt: '2026-04-02',
  difficulty: 'Beginner',
  steps: [
    { title: 'Step 1', content: 'Plain language instructions.', tip: 'Helpful hint.' },
  ],
}
```

See the guide format section in [CLAUDE.md](./CLAUDE.md) for the full authoring reference.

---

## Accessibility

TekSure targets **WCAG 2.1 AA** with built-in:

- Senior Mode (larger fonts, simplified layout)
- High Contrast Mode
- Dark Mode
- Font Size Toggle
- Keyboard navigation throughout
- Screen reader support (semantic HTML, ARIA labels, alt text)
- 44px minimum touch targets
- Offline access via service worker
- All content at 6th-grade reading level

---

## Deployment

TekSure deploys to **Vercel** with auto-deploy on push to `main`.

Auto-deploys on push to `main`. See [vercel.json](./vercel.json) for deployment config.

---

## Documentation

| Document | Description |
|----------|-------------|
| [CLAUDE.md](./CLAUDE.md) | Claude Code instructions, project overview, guide format |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Development workflow and coding standards |
| [DESIGN.md](./DESIGN.md) | Design system and philosophy |
| [ANALYTICS-SETUP.md](./ANALYTICS-SETUP.md) | Google Analytics 4 configuration |
| [TESTING_STRATEGY.md](./TESTING_STRATEGY.md) | Test approach and implementation |
| [TEKSURE-MASTER-ROADMAP-2026-04-19.md](./TEKSURE-MASTER-ROADMAP-2026-04-19.md) | Master strategic plan and roadmap |

---

## License

Copyright 2026 Bailey Wilburn. All rights reserved.
