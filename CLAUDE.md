# TekSure — Claude Code Instructions

## Project Overview
TekSure is a tech support and digital literacy platform for non-technical users and seniors (60+).
- **Stack:** React 18, TypeScript, Tailwind CSS, shadcn/ui, Supabase, React Query, React Router
- **Supabase project ref:** `vrhxitxzqtbphzsbdqih`
- **GitHub:** https://github.com/bwilburn6202/teksure
- **Dev path:** `/Users/baileywilburn/Documents/Claude/Projects/TekSure`
- **Dev port:** http://localhost:5173

## Design Principles
- Plain language always — no jargon, especially in guides and UI copy
- Mobile-first responsive design
- Accessibility-focused (WCAG 2.1 AA target)
- Large text, high contrast, clear navigation
- Audience: non-technical users, seniors (60+), digital learners

## Key File Locations
| File | Purpose |
|------|---------|
| `src/data/guides.ts` | All guide content lives here |
| `src/App.tsx` | All routes — add new pages here |
| `src/components/Navbar.tsx` | Navigation |
| `src/components/TekBot.tsx` | AI assistant component |
| `supabase/migrations/` | Database migrations |
| `.env.local` | Environment variables (never commit) |
| `.claude/evolution-state.json` | Evolution loop state (see below) |

## Brand Constraints
- Never use: "It's easy", "simply", "just", "obviously", "leverage", "utilize", "seamless", "cutting-edge"
- Never use jargon without immediately explaining it
- Use "Quick Tip" not "Pro Tip"
- Difficulty levels: `Beginner` / `Intermediate` / `Advanced` (PascalCase — enforced by the `Guide` type in `src/data/guides.ts`)
- All new pages need a `<SEOHead title="..." description="..." />` component
- Commit format: `feat: [description]` or `fix: [description]`

## Guide Format (src/data/guides.ts)
```ts
{
  slug: "unique-slug",
  title: "How to ...",
  excerpt: "Max 160 characters — used in cards and meta tags.",
  body: "Full guide content (min 300 words).",
  category: "Safety" | "Essential Skills" | "Tips & Tricks" | "AI" | "Apps" | "Health Tech" | ...,
  tags: ["tag1", "tag2"],
  emoji: "🔒",
  difficulty: "Beginner",
  readTime: "5 min",
  publishedAt: "2026-03-31",
  steps: [
    { title: "Step title", description: "Step description with plain-language detail." }
  ]
}
```

## Supabase Tables (live)
`auth.users`, `profiles`, `bookings` (+ payment_status, stripe_session_id, deposit_paid_at),
`forum_threads`, `forum_replies`, `guide_ratings`

## Edge Functions (live)
`send-help-confirmation`, `send-booking-confirmation`, `create-checkout-session`, `stripe-webhook`

## Payments
Stripe — LIVE. $15 deposit model. Never touch the Stripe edge functions without explicit instruction.

---

## Current State (as of 2026-05-04)
- **~2,900 guides** across 19 categories (incl. 50 Spanish at /guias, Batch 93+ in progress)
- **145+ interactive tools** at /tools
- **3,000+ routes**, 218+ pages
- **TekSure Brain** live at /brain — semantic search + optional hosted Ollama
- **Hosted Ollama:** edge functions deployed (`brain-query`, `ollama-health`). Awaiting Hetzner CX22 server — set `OLLAMA_BASE_URL` + `OLLAMA_MODEL=llama3.2:1b` in Supabase secrets to activate
- **Pages shipped:** /free-resources (Free Tech Programs), /scam-defense (Scam Defense Center)
- **Tools shipped:** /tools/streaming-calculator, /tools/device-age-checker
- **Stale files deleted:** teksure-sprint-plan-march2026.md, daily-tip files, content-gaps/, old roadmap reviews

## Autonomous Development System (as of 2026-04-01)

TekSure is maintained by a fully autonomous development pipeline. The system has **full creative freedom** to add guides, build features, update content, and evolve the site — all in service of helping non-technical people with technology.

### Core Principles
- **American company, American workers** — all content for US audience (USD, US carriers, US services)
- **Free one-stop shop** — no paywalls on educational content
- **Plain English always** — no jargon, no assumptions about prior knowledge
- **Every guide should have:** step-by-step instructions, official source links, video walkthrough references
- **Official sources only** — Apple Support, Google Support, Microsoft Support, AARP, FTC, How-To Geek

### Scheduled Tasks
| Task | Schedule | Purpose |
|------|----------|---------|
| `daily-site-health` | Daily 6:47 AM | Build check, TypeScript validation, broken reference scan |
| `weekly-guide-enrichment` | Monday 7:23 AM | Add 3-5 new guides with video links, update 10 existing |
| `content-freshness-check` | Wednesday 8:41 AM | Fix outdated OS versions, add missing resource links |
| `weekly-tip-scam-alert` | Friday 9:17 AM | Scam alerts from FTC/AARP, weekly tips, tech news |
| `monthly-feature-build` | 1st of month 10:13 AM | Build one new tool or page based on trending needs |

**Task files:** `~/.claude/scheduled-tasks/[task-id]/SKILL.md`
**Dev log:** `~/.claude/projects/.../memory/dev_log.md`
**Memory index:** `~/.claude/projects/.../memory/MEMORY.md`

### Content Sources
- **Official:** Apple/Google/Microsoft/Samsung support sites
- **Educational:** AARP tech, How-To Geek, GCFGlobal, Tom's Guide
- **Safety:** FTC.gov, CISA.gov, IC3.gov
- **Video:** YouTube official channels (Apple Support, Google, Microsoft, Samsung, AARP)
- **Community:** Reddit r/techsupport, r/seniors, r/AskTechnology

### To manage scheduled tasks
Go to Claude Code sidebar → Scheduled section. Each task can be enabled/disabled individually.

## Dev-Loop (deterministic CI loop)

Lives at `scripts/dev-loop.mjs` and runs every 6 hours via `.github/workflows/dev-loop.yml`. Read-only checks only — no API calls, no source-file edits. Findings land in two places:

- `.claude/dev-loop-state.json` — machine-readable state (cycle count, last findings, 50-cycle history)
- `.claude/dev-loop-backlog.md` — human-readable feed; newest cycles at top, capped at 256KB

The creative scheduled tasks (`weekly-guide-enrichment`, `content-freshness-check`, `monthly-feature-build`) read the backlog as their input queue — the loop surfaces work, the scheduled tasks do it.

### Checks per cycle
- Site metrics snapshot (guides, routes, lazy imports, tools)
- Duplicate slug guard (`scripts/validate-slugs.mjs`)
- Internal link audit (`scripts/link-audit.mjs --json`)
- TypeScript compile (`tsc --noEmit`)
- Stale OS version mentions (iOS ≤16, Android ≤13, Windows 7/8, macOS pre-Ventura)
- Aged guides (publishedAt > 18 months)

### Local commands
```bash
npm run loop:dev:dry    # one cycle, no writes
npm run loop:dev:once   # one cycle, writes state + backlog
npm run loop:dev        # continuous (default 30 min interval)
npm run loop:dev:ci     # one cycle, exits 1 on hard failures (used by workflow)
```

Flags: `--once`, `--dry-run`, `--ci`, `--interval=N`, `--only=health,links`, `--skip=stale-os`.
