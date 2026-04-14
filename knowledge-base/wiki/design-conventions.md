# TekSure Design Conventions

Standards for color, spacing, and icon sizing across the TekSure codebase. Established from the April 2026 design critique to address consistency gaps across 80+ pages and 40+ tools.

**Tags:** #workflow #content-strategy

## Color System

TekSure defines 4 semantic color tokens in `tailwind.config.ts` and `src/index.css`:

| Token | Purpose | Light Value |
|-------|---------|-------------|
| `teksure-blue` | Primary brand, links, CTAs | hsl(221 83% 53%) |
| `teksure-success` | Success states, confirmations | hsl(142 71% 45%) |
| `teksure-warning` | Warnings, caution states | hsl(38 92% 50%) |
| `teksure-info` | Informational highlights | hsl(217 91% 60%) |

### Rules
- **Prefer teksure-* tokens** over raw Tailwind colors for semantic meaning (success, warning, info, brand)
- **Raw Tailwind grays** (`gray-50` through `gray-900`) are acceptable for text, borders, and backgrounds — these are neutral
- **Avoid raw Tailwind greens, reds, ambers, blues** for semantic states — use the tokens instead
- **Dark mode variants** are handled automatically via CSS variables

### Migration Status (April 2026)
- 69 files still use raw colors, 28 use teksure-* tokens
- Migrate incrementally — when touching a file for other reasons, update its color classes
- Priority: tool pages and form components (most user-facing)

## Section Spacing

Three standard section padding tiers:

| Class | Size | Use For |
|-------|------|---------|
| `py-12` | 48px | Standard content sections, tool pages, card containers |
| `py-16` | 64px | Major page sections, headers, breaks between content blocks |
| `py-20` | 80px | Hero/landing sections only (homepage, major landing pages) |

### Rules
- **Do not use** `py-10` or `py-24` for section padding
- When touching a page, normalize its section spacing to the three tiers
- Inner component padding (`p-4`, `p-6`, `p-8`) is separate — these rules are for page sections only

## Icon Sizing

Using lucide-react throughout. Three standard sizes:

| Size | Class | Use For |
|------|-------|---------|
| Small | `h-3.5 w-3.5` | Inline with text, badges, tags |
| Medium | `h-4 w-4` | Buttons, nav items, list markers |
| Large | `h-5 w-5` | Page headers, feature cards, standalone icons |

## Component Locations

| Component | Canonical Path | Notes |
|-----------|---------------|-------|
| Navbar | `src/components/layout/Navbar.tsx` | Only Navbar — root version deleted April 2026 |
| Footer | `src/components/layout/Footer.tsx` | |
| TekBot | `src/components/TekBot.tsx` | AI assistant |

## Sources
- [[raw/design-critique-2026-04-04.md]]

## Related
- [[ai-content-pipeline-patterns]]
