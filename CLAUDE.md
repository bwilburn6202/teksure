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
| `knowledge-base/` | LLM-maintained knowledge base (raw sources, wiki, outputs) |
| `knowledge-base/SCHEMA.md` | Knowledge base rules and structure |
| `knowledge-base/wiki/INDEX.md` | Wiki article index — start here for research |

## Brand Constraints
- Never use: "It's easy", "simply", "just", "obviously", "leverage", "utilize", "seamless", "cutting-edge"
- Never use jargon without immediately explaining it
- Use "Quick Tip" not "Pro Tip"
- Difficulty levels: `beginner` / `intermediate` / `advanced`
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
  difficulty: "beginner",
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
Stripe — LIVE. £15 deposit model. Never touch the Stripe edge functions without explicit instruction.

---

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

### Knowledge Base (Karpathy Method)
TekSure maintains an LLM-powered knowledge base at `knowledge-base/` for research, trends, and content strategy. Inspired by Andrej Karpathy's LLM knowledge base workflow.

**Structure:**
- `knowledge-base/raw/` — Unprocessed sources (articles, tweets, research). Never modify. Filename: `source-topic-YYYY-MM-DD.md`
- `knowledge-base/wiki/` — AI-maintained wiki articles with backlinks and summaries. AI owns this — rarely edit by hand.
- `knowledge-base/outputs/` — Generated reports, analyses, content briefs. File valuable outputs back into wiki.
- `knowledge-base/SCHEMA.md` — Rules the AI follows when maintaining the knowledge base.

**Workflow:**
1. Save interesting research/articles/insights to `raw/`
2. AI compiles raw sources into wiki articles (run: "Update the knowledge base wiki from new raw sources")
3. Query the wiki for content strategy decisions, gap analysis, trend reports
4. File useful outputs back into wiki (compounding loop)
5. Run monthly health checks to catch contradictions and gaps

**Integration with content pipeline:**
- Research in wiki informs guide stub creation (Monday enrichment task)
- Trend tracking in wiki feeds content-freshness-check (Wednesday task)
- Competitor insights feed evolution-state.json feature prioritization

### To manage scheduled tasks
Go to Claude Code sidebar → Scheduled section. Each task can be enabled/disabled individually.
