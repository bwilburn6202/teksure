# TekSure — App Blueprint

> A single-source architectural reference for the TekSure platform.
> Snapshot date: **2026-04-28**

---

## 1. Mission

TekSure is a free, plain-language tech support and digital literacy platform for non-technical users — with a primary focus on seniors (60+), caregivers, and digital learners in the United States.

The product promise:

- **One stop** — guides, tools, AI help, human help, and community in one place.
- **No paywalls on educational content** — free to read, free to use.
- **Plain English always** — no jargon, no assumptions.
- **Accessible by design** — WCAG 2.1 AA target, large text, high contrast, keyboard navigation.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript (strict) |
| Build | Vite 5 (`@vitejs/plugin-react-swc`) |
| Routing | React Router 6 |
| Styling | Tailwind CSS 3 + `@tailwindcss/typography` + `tailwindcss-animate` |
| Component primitives | shadcn/ui on Radix UI |
| Icons | lucide-react |
| Data fetching | TanStack Query v5 |
| Backend / DB / Auth | Supabase (`vrhxitxzqtbphzsbdqih`) |
| Edge functions | Supabase Functions (Deno) |
| Payments | Stripe (live) — $15 deposit model |
| SSR (optional) | Express 5 + `src/entry-server.tsx` (`npm run dev:ssr` / `serve:ssr`) |
| Analytics | Vercel Analytics + Google Analytics component |
| Testing | Vitest + Testing Library; Playwright for e2e |
| Hosting | Vercel (`vercel.json`) |
| AI | Hosted Ollama (Hetzner CX22, awaiting activation) + embeddings for TekBrain RAG |

**Dev port:** `http://localhost:5173`
**Local dev path:** `/Users/baileywilburn/Documents/Claude/Projects/TekSure`

---

## 3. Repository Map

```
teksure/
├── src/
│   ├── App.tsx                  # All routes (302 <Route> entries)
│   ├── main.tsx                 # Client entry
│   ├── entry-client.tsx         # SSR hydration entry
│   ├── entry-server.tsx         # SSR render entry
│   ├── pages/                   # 122 top-level pages
│   │   └── tools/               # 151 interactive tool pages
│   ├── components/
│   │   ├── ui/                  # 31 shadcn primitives
│   │   ├── layout/              # Layout shells
│   │   ├── guide/               # Guide-specific pieces
│   │   ├── doc-browser/         # Knowledge-base browser
│   │   ├── skeletons/           # Loading skeletons
│   │   └── *.tsx                # 45 feature components
│   ├── data/
│   │   ├── guides.ts            # Guide type + main set
│   │   ├── guides-batch-*.ts    # 116 batch files (≈2,581 guide slugs total)
│   │   ├── guides-spanish.ts    # /guias content
│   │   ├── guides-expansion.ts
│   │   ├── weekly-tips.ts
│   │   ├── wiki.ts
│   │   ├── osint-tools.ts
│   │   ├── security-osint-tools.ts
│   │   ├── geoint-resources.ts
│   │   ├── aggregatedArticles.ts
│   │   └── roadmapData.ts
│   ├── contexts/                # React context providers
│   ├── hooks/                   # use-mobile, use-toast, useAgentMemory, useTestimonials
│   ├── integrations/supabase/   # Supabase client + types
│   ├── lib/                     # Utilities
│   ├── services/                # API/service wrappers
│   ├── types/                   # Shared TS types
│   └── __tests__/               # Component + unit tests
├── supabase/
│   ├── migrations/              # 27 SQL migrations
│   └── functions/               # 24 edge functions (Deno)
├── api/                         # Vercel serverless handlers
├── scripts/                     # Build helpers, slug validator, embed jobs
├── public/                      # Static assets
├── docs/                        # Long-form docs
├── tests/                       # Playwright e2e
├── server.ts                    # SSR Express server
├── vite.config.ts
├── tailwind.config.ts
├── vercel.json
└── CLAUDE.md                    # Claude Code project instructions
```

---

## 4. Routing & Page Surface

- **122 page modules** in `src/pages/`
- **151 interactive tools** in `src/pages/tools/`
- **302 `<Route>` entries** declared in `src/App.tsx`

### Top-level surfaces

| Path family | Purpose |
|---|---|
| `/` | Landing |
| `/guides`, `/guides/:slug` | Core guide library |
| `/guias`, `/guias/:slug` | Spanish guide library |
| `/tools`, `/tools/*` | Interactive tools (151 calculators, checkers, builders) |
| `/brain` | TekBrain — semantic search + AI chat |
| `/ask` | AskTekSure conversational helper |
| `/learn`, `/my-path`, `/achievements` | Learning paths + progress |
| `/get-help`, `/local-help`, `/emergency-help` | Human-help routing |
| `/forum`, `/community-qa` | Community |
| `/free-resources` | Free Tech Programs (in progress) |
| `/scam-defense` | Scam Defense Center (in progress) |
| `/changelog`, `/about`, `/faq`, `/contact` | Marketing/info |
| Hubs | `/accessibility`, `/caregiver`, `/chromebook`, `/devices`, `/ai-literacy`, `/deepfake-defense`, `/dementia-care-tech`, `/divorce-tech`, `/empty-nest-tech`, `/esl-tech`, `/job-search-tech`, `/kids-online-safety`, `/moving-tech`, `/new-grandparent-tech`, `/first-apartment-tech`, `/bereavement-tech`, `/digital-detox`, `/data-broker-removal`, `/family-sharing`, `/email-templates`, `/emergency-tech`, … |

### Route conventions

- Every public page renders `<SEOHead title=… description=… />`.
- `<ProtectedRoute>` wraps authenticated pages.
- 404 falls through to `NotFound.tsx`.
- Slug uniqueness is enforced by `scripts/validate-slugs.mjs` via `prebuild`.

---

## 5. Content System

### Guide schema (`src/data/guides.ts`)

```ts
type Guide = {
  slug: string;          // unique, kebab-case
  title: string;
  excerpt: string;       // ≤160 chars
  body: string;          // ≥300 words, plain English
  category: "Safety" | "Essential Skills" | "Tips & Tricks"
          | "AI" | "Apps" | "Health Tech" | ...;
  tags: string[];
  emoji: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced"; // PascalCase
  readTime: string;      // e.g. "5 min"
  publishedAt: string;   // YYYY-MM-DD
  steps: { title: string; description: string }[];
};
```

### Guide library

- ~2,581 guide slugs across 116 `guides-batch-*.ts` files + `guides.ts` + Spanish set.
- 19 categories live; Spanish set at `/guias` (~50 guides).
- Each guide should ship with: stepwise instructions, official source links, video walkthrough reference.

### Approved sources

- **Official:** Apple Support, Google Support, Microsoft Support, Samsung
- **Educational:** AARP, How-To Geek, GCFGlobal, Tom's Guide
- **Safety:** FTC.gov, CISA.gov, IC3.gov
- **Video:** YouTube official channels (Apple Support, Google, Microsoft, Samsung, AARP)

### Forbidden phrasing

`"It's easy"`, `"simply"`, `"just"`, `"obviously"`, `"leverage"`, `"utilize"`, `"seamless"`, `"cutting-edge"`. Use **"Quick Tip"**, never "Pro Tip".

---

## 6. Data Layer (Supabase)

**Project ref:** `vrhxitxzqtbphzsbdqih`

### Live tables (selection)

| Table | Notes |
|---|---|
| `auth.users` | Supabase auth |
| `profiles` | User profile metadata |
| `bookings` | Includes `payment_status`, `stripe_session_id`, `deposit_paid_at` |
| `forum_threads`, `forum_replies` | Community |
| `guide_ratings` | Per-guide star ratings |
| `guide_reports` | Reported issues + `resolved` flag |
| `newsletter_subscribers` | Weekly newsletter list |
| `scam_reports` | User-submitted scam reports |
| `agent_memory` | Autonomous agent state |
| `community_qa` | Q&A surface |
| `tier_and_user_progress` | Learning tier + per-user progress |
| `safety_lookup_cache` | Cached safety lookups |
| `tekbrain_*` | RAG setup, private KB chunks, chunk hashes |
| `knowledge_*` | Knowledge base, manual sources, document source links |
| `email_*` | Email queue + delivery infra |
| `content_aggregation`, `feed_urls`, `video_tutorials` | Content ingest |

### Migration history

27 timestamped SQL files in `supabase/migrations/` — most recent: `20260422100000_tekbrain_private_kb_chunk_hashes.sql`. RLS is enabled on user-data tables; admin policies live in `20260403100000_admin_rls_policies.sql`.

---

## 7. Edge Functions

24 functions in `supabase/functions/`:

| Function | Purpose |
|---|---|
| `auth-email-hook` | Auth email customization |
| `brain-query` | TekBrain RAG query (hosted Ollama gated) |
| `categorize-and-dedup` | Content cleanup |
| `create-checkout-session` | **Stripe** — never edit without approval |
| `doc-chat` | Per-document chat |
| `email-selftest` | Email infra healthcheck |
| `embed-guides`, `embed-knowledge-documents` | Vector embedding jobs |
| `knowledge-base-compile` | Compile KB to searchable form |
| `knowledge-source-import`, `knowledge-source-save` | KB ingest |
| `ollama-health` | Hosted Ollama probe |
| `process-email-queue` | Outbound email worker |
| `publish-to-batch` | Move guides into batch files |
| `safety-lookup` | Scam/URL safety lookups |
| `scrape-articles` | Aggregator scrape |
| `simplify-article` | Plain-English rewrite |
| `send-help-confirmation`, `send-booking-confirmation`, `send-notification`, `send-weekly-newsletter` | Transactional + newsletter email |
| `stripe-webhook` | **Stripe** — never edit without approval |
| `tekbrain-chat` | TekBrain conversational endpoint |

### Hosted Ollama activation

When the Hetzner CX22 server is online, set Supabase secrets:

```
OLLAMA_BASE_URL=<server-url>
OLLAMA_MODEL=llama3.2:1b
```

`brain-query` and `tekbrain-chat` will switch from fallback to live model output.

---

## 8. Payments (Stripe — LIVE)

- $15 deposit model on `bookings`.
- Checkout via `create-checkout-session`; settlement via `stripe-webhook`.
- Booking row tracks `payment_status`, `stripe_session_id`, `deposit_paid_at`.
- **Never modify Stripe edge functions without explicit user instruction.**

---

## 9. Frontend Patterns

### State & data
- **Server state:** TanStack Query (`@tanstack/react-query`) with stable query keys.
- **Auth:** Supabase client in `src/integrations/supabase/`.
- **Local state:** React hooks; cross-tree state via context providers in `src/contexts/`.

### Accessibility primitives
- `AccessibilityTray`, `FontSizeToggle`, `HighContrastToggle`, `SeniorModeToggle`, `KeyboardNavigation` page, `LanguageToggle`.
- All interactive components inherit Radix focus + ARIA semantics.

### Mobile
- `MobileBottomNav` for primary nav on small viewports.
- Mobile-first Tailwind breakpoints.

### Loading & errors
- `ErrorBoundary` at the route shell; per-page skeletons in `components/skeletons/`.

### SEO
- `SEOHead` (uses `react-helmet-async`) is required on every public page.
- SSR via Express + `entry-server.tsx` for crawler-friendly first paint when needed.

### TekBot / TekBrain
- `TekBot.tsx` — floating assistant component.
- `TekBrain.tsx` + `/brain` route — semantic search UI backed by `brain-query` / `tekbrain-chat`.

---

## 10. Build, Test, Deploy

### Scripts (`package.json`)

| Command | Action |
|---|---|
| `npm run dev` | Vite dev server on :5173 |
| `npm run dev:ssr` | SSR dev via `server.ts` |
| `npm run validate:slugs` | Enforce unique guide slugs (auto-runs in `prebuild`) |
| `npm run build` | Client production build |
| `npm run build:ssr` | Client + server SSR builds |
| `npm run serve:ssr` | Serve SSR build |
| `npm run lint` | ESLint |
| `npm run test` / `test:watch` | Vitest |
| `npm run embed-guides` | Embedding job for TekBrain |
| `npm run loop:critique` | Build-critique loop runner |

### Quality gates
- TypeScript strict via `tsconfig.app.json`.
- ESLint 9 with `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `typescript-eslint`.
- Vitest unit/integration; Playwright for e2e in `tests/`.
- Daily `daily-site-health` task validates build + TS + broken refs.

### Deployment
- Vercel via `vercel.json`.
- `.env.local` holds secrets — **never committed**.

---

## 11. Autonomous Development Pipeline

TekSure is maintained by scheduled Claude Code tasks under `~/.claude/scheduled-tasks/`:

| Task | Cadence | Output |
|---|---|---|
| `daily-site-health` | Daily 06:47 | Build + TS + broken-ref scan |
| `weekly-guide-enrichment` | Mon 07:23 | +3–5 new guides, update 10 |
| `content-freshness-check` | Wed 08:41 | Refresh OS versions, fix dead links |
| `weekly-tip-scam-alert` | Fri 09:17 | FTC/AARP scam alerts, weekly tips |
| `monthly-feature-build` | 1st 10:13 | One new tool/page from trending needs |

Logs live in `~/.claude/projects/.../memory/dev_log.md`; index in `MEMORY.md`. Tasks are individually toggleable from the Claude Code sidebar.

---

## 12. Conventions

### Commits
- `feat: [description]` for new functionality
- `fix: [description]` for bug fixes
- One concern per commit; reference user-visible change first.

### Branching
- Feature branches from `main`, e.g. `claude/teksure-app-blueprint-iGIzn`.
- PRs open as drafts; merge after review + green CI.

### Code style
- TypeScript strict; no `any` in new code.
- Plain-language UI copy — see brand constraints.
- New page → register route in `src/App.tsx` and add `<SEOHead>`.
- New guide → land in the next `guides-batch-N.ts`; never reuse a slug.

---

## 13. Current Initiatives (2026-04-28)

- **In progress:** `/free-resources` (Free Tech Programs), `/scam-defense` (Scam Defense Center).
- **Tools in progress:** `/tools/streaming-calculator`, `/tools/device-age-checker`.
- **TekBrain:** Edge functions deployed; awaiting Hetzner CX22 server to flip on hosted Ollama.
- **Spanish coverage:** ~50 guides live at `/guias`, expansion ongoing.
- **Guide library:** Batch 93+ in flight, target ≈2,900 guides across 19 categories.

---

## 14. Pointers

- Project instructions: `CLAUDE.md`
- Long-term plan: `TEKSURE-MASTER-PLAN.md`, `TEKSURE-MASTER-ROADMAP-2026-04-19.md`
- Audit baseline: `AUDIT-REPORT-2026-04-20.md`
- Design spec: `DESIGN.md`
- Testing strategy: `TESTING_STRATEGY.md`, `TESTING_IMPLEMENTATION.md`
- Analytics setup: `ANALYTICS-SETUP.md`
- Strategy docs: `teksure-roadmap-strategy.md`, `teksure-next-gen-strategy.md`
- Contributing: `CONTRIBUTING.md`
