# TekSure — Claude Code Instructions

## Project Overview
TekSure is a tech support and digital literacy platform for non-technical users and seniors (60+).
- **Stack:** React 18, TypeScript, Tailwind CSS, shadcn/ui, Supabase, React Query, React Router
- **Supabase project ref:** `zrgtoefkqafndhxhbuag`
- **GitHub:** https://github.com/bwilburn6202/teksure
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

## Autonomous Evolution Loop

TekSure has an active scheduled development agent that runs every 6 hours and autonomously builds features from the roadmap. **Do not manually rebuild features the evolution loop is already queued to build.**

### State file
**Location:** `.claude/evolution-state.json`

Tracks:
- `queue` — ordered list of features to build next (P1 → P2 → P3)
- `completedFeatures` — ids of features already built
- `currentFeature` — feature being built right now (null when idle)
- `lastRun` — ISO timestamp of last successful run
- `log` — audit log of every completed run with commit hashes

### Scheduled task
**Name:** `teksure-evolution-loop`
**Schedule:** Every 6 hours (`17 */6 * * *`)
**Managed from:** Claude Code sidebar → Scheduled section
**Task file:** `~/.claude/scheduled-tasks/teksure-evolution-loop/SKILL.md`

### Run logs
Each run writes a summary to `.claude/evolution-log-YYYY-MM-DD.md`.
If a build fails after 3 attempts, a `.claude/evolution-BLOCKED-[timestamp].md` file is written.

### Priority queue (as of 2026-03-31)
See `.claude/evolution-state.json` for the live queue. Order:

**Tier 1 (P1):** TekBot upgrade → 2FA guide → Home Network Security guide → Software Update guide → Screenshot annotations lightbox

**Tier 2 (P2):** Live chat support → Caregiver dashboard → Tech news page → Large print XXL mode → Accessibility score tool

**Tier 3 (P2 content):** Telehealth guide → Banking apps → Podcasts → Calendar reminders → Voice commands → QR codes → Hearing aid Bluetooth → Medication reminders → E-reader setup → Ride-sharing → Digital legacy → Online shopping safety

**Tier 4 (P3):** Monthly webinars system → Family tech sharing → Senior tech blog

### To pause the loop
Go to Claude Code sidebar → Scheduled → teksure-evolution-loop → Disable.

### To add a feature to the queue
Edit `.claude/evolution-state.json` and insert a new object into the `queue` array at the desired position. Follow the existing object schema.
