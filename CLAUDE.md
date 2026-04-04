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
| `wiki/` | LLM-maintained knowledge wiki (see Wiki section below) |
| `wiki/index.md` | Wiki content catalog — read this first |
| `wiki/log.md` | Chronological record of wiki operations |
| `src/data/wiki.ts` | Wiki content for the web UI |

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

### To manage scheduled tasks
Go to Claude Code sidebar → Scheduled section. Each task can be enabled/disabled individually.

---

## LLM Wiki — Knowledge Base System

TekSure maintains a persistent, interlinked knowledge wiki at `wiki/`. The wiki synthesizes all site content (guides, scam alerts, tips, glossary, tools) into structured pages that compound over time. The LLM maintains all wiki content — humans curate sources and ask questions.

### Architecture

| Layer | Location | Description |
|-------|----------|-------------|
| **Raw sources** | `src/data/guides.ts`, `src/data/guides-batch-*.ts`, page components | Immutable source material — never modified by wiki operations |
| **Wiki pages** | `wiki/concepts/`, `wiki/entities/`, `wiki/synthesis/`, `wiki/sources/` | LLM-generated markdown — the persistent knowledge base |
| **Web UI data** | `src/data/wiki.ts` | TypeScript export of wiki content for the /wiki route |
| **Schema** | This section of CLAUDE.md | Conventions and workflows |

### Wiki Page Categories

- **Concepts** (`wiki/concepts/`) — Topic pages synthesizing knowledge across sources (e.g., Wi-Fi, Passwords, Scam Prevention)
- **Entities** (`wiki/entities/`) — Platform/service pages (e.g., Apple, Google, Windows, US Resources)
- **Synthesis** (`wiki/synthesis/`) — Cross-cutting analysis pages (e.g., Beginner's Roadmap, Safety Checklist)
- **Sources** (`wiki/sources/`) — Index pages cataloging raw source material

### Page Format

Every wiki page uses this structure:
```markdown
---
tags: [wifi, networking, troubleshooting]
sources: 15
last_updated: 2026-04-04
---

# Page Title

Brief overview paragraph.

## Section Heading

Content with [[wikilinks]] to other pages.

## See Also

- [[related-page-1]]
- [[related-page-2]]
```

### Operations

**Ingest** — When new guides, tips, or scam alerts are added to TekSure:
1. Read the new content
2. Update relevant concept and entity pages in `wiki/`
3. Update `wiki/index.md` with any new pages
4. Update `src/data/wiki.ts` to reflect changes in the web UI
5. Append an entry to `wiki/log.md`

**Query** — When answering user questions about TekSure content:
1. Read `wiki/index.md` to find relevant pages
2. Read the relevant wiki pages for synthesized knowledge
3. If the answer produces a valuable new synthesis, file it as a new wiki page

**Lint** — Periodic health check (can run during `content-freshness-check`):
1. Check for orphan pages (no inbound links)
2. Check for stale content (guides updated but wiki not)
3. Check for missing cross-references
4. Check for concepts mentioned but lacking their own page
5. Ensure `src/data/wiki.ts` matches `wiki/` content

### Conventions

- All content in plain language for seniors 60+ (same as rest of TekSure)
- Use `[[wikilinks]]` for cross-references between wiki pages
- YAML frontmatter on every page: `tags`, `sources` (count), `last_updated`
- Keep pages focused: 200-500 words each
- Index file is the primary navigation — keep it current
- Log file is append-only — never edit past entries
- When in doubt, create a new page rather than overloading an existing one
