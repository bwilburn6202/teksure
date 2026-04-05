# TekSure — Design System

> AI-readable design system for TekSure. Reference this file when building new pages, components, or features. Inspired by the [awesome-design-md](https://github.com/VoltAgent/awesome-design-md) pattern.

---

## 1. Visual Theme & Atmosphere

**Mood:** Warm, approachable, trustworthy. Like a patient friend who never makes you feel dumb.
**Audience:** Non-technical adults and seniors (60+). Every design choice prioritizes clarity over cleverness.
**Feel:** Clean and spacious — never cramped. Generous whitespace, large touch targets, readable text. Nothing flashy, nothing intimidating.

---

## 2. Color Palette & Roles

### Primary Colors
| Role | Light Mode | Dark Mode | Usage |
|------|-----------|-----------|-------|
| Primary (Teal) | `hsl(172 50% 40%)` | `hsl(172 50% 50%)` | CTAs, links, TekBot accent |
| Secondary (Blue) | `hsl(220 70% 50%)` | `hsl(220 70% 60%)` | Secondary buttons, highlights |
| Background | `hsl(0 0% 100%)` | `hsl(220 20% 10%)` | Page background |
| Card | `hsl(0 0% 100%)` | `hsl(220 20% 14%)` | Card surfaces |
| Muted | `hsl(210 25% 97%)` | `hsl(220 20% 18%)` | Subtle backgrounds, chat area |
| Border | `hsl(220 15% 90%)` | `hsl(220 15% 25%)` | Borders, dividers |

### Semantic Colors
| Role | Color | Usage |
|------|-------|-------|
| Success | Green `hsl(142 70% 45%)` | Completed steps, correct answers |
| Warning | Amber `hsl(38 90% 50%)` | Cautions, tips |
| Danger | Red `hsl(0 70% 55%)` | Errors, scam warnings |
| Info | Blue `hsl(210 80% 55%)` | "Why It Works" callouts, info boxes |

### Category Colors (Wiki & Guides)
- **Concept** (blue): `bg-blue-100 text-blue-800`
- **Entity** (green): `bg-green-100 text-green-800`
- **Synthesis** (purple): `bg-purple-100 text-purple-800`
- **Source** (amber): `bg-amber-100 text-amber-800`

---

## 3. Typography Rules

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Page title (h1) | System sans | `text-3xl md:text-5xl` | Bold (700) | Tight |
| Section heading (h2) | System sans | `text-2xl md:text-3xl` | Semibold (600) | Snug |
| Subheading (h3) | System sans | `text-xl md:text-2xl` | Medium (500) | Snug |
| Body text | System sans | `text-base` (16px) | Normal (400) | Relaxed (1.625) |
| Large body | System sans | `text-lg` (18px) | Normal (400) | Relaxed |
| Small/caption | System sans | `text-sm` (14px) | Normal/Medium | Normal |
| Badge/tag | System sans | `text-xs` (12px) | Medium (500) | Normal |

**Rules:**
- Minimum body text: 16px. Never go below 14px for any readable content.
- Headings use `tracking-tight` for visual density.
- Body text always uses `leading-relaxed` for readability.
- Never use light (300) weight — too hard to read for seniors.

---

## 4. Component Styling

### Buttons
```
Primary:    bg-primary text-primary-foreground rounded-lg min-h-[48px] px-6 text-base font-medium
Secondary:  bg-secondary text-secondary-foreground rounded-lg min-h-[48px] px-6 text-base font-medium
Outline:    border border-border bg-background rounded-lg min-h-[48px] px-6 text-base font-medium
Ghost:      hover:bg-muted rounded-lg min-h-[44px]
```
- **Minimum touch target:** 48px height, 44px for icon buttons
- **Never** use small buttons (< 40px) for primary actions

### Cards
```
rounded-2xl border border-border bg-card p-6 md:p-8
hover:border-primary/40 hover:shadow-md transition-all
```
- Always `rounded-2xl` (16px radius) — feels friendly
- Generous padding: `p-6` mobile, `p-8` desktop
- Subtle hover: border color shift + shadow

### Input Fields
```
rounded-xl border border-input bg-background px-4 py-3 min-h-[52px] text-lg
focus:ring-2 focus:ring-primary
```
- Large inputs (52px min height) for easy tapping
- `text-lg` placeholder and value text

### Badges/Tags
```
text-xs font-medium px-2.5 py-0.5 rounded-full
```
- Always `rounded-full` pill shape
- Use semantic background colors

### "Why It Works" Callout
```
rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 px-4 py-3
Title: text-sm font-semibold text-blue-800 dark:text-blue-300
Body:  text-sm text-blue-700 dark:text-blue-400 leading-relaxed
```

---

## 5. Layout Principles

### Spacing Scale
| Token | Size | Usage |
|-------|------|-------|
| xs | 4px (`gap-1`) | Between badges/tags |
| sm | 8px (`gap-2`) | Between inline elements |
| md | 16px (`gap-4`) | Between card elements |
| lg | 24px (`gap-6`) | Between sections within a card |
| xl | 40-64px (`py-10 md:py-16`) | Between page sections |

### Page Structure
```
<Navbar />                    — sticky top-16 z-50
<SEOHead title="" desc="" />  — every page, mandatory
<Hero section />              — border-b, centered, max-w-5xl
<Content sections />          — max-w-5xl mx-auto px-4 py-12
<Footer />                    — full width
<TekBot />                    — fixed bottom-right z-50
```

### Grid System
- **Cards:** `grid gap-5 sm:grid-cols-2 lg:grid-cols-3`
- **Stats:** `grid grid-cols-2 sm:grid-cols-4 gap-4`
- **Two-column:** `grid gap-4 sm:grid-cols-2`
- Max content width: `max-w-5xl` (1024px)
- Max article width: `max-w-3xl` (768px)

---

## 6. Depth & Elevation

| Level | Shadow | Usage |
|-------|--------|-------|
| Flat | None | Default cards, content areas |
| Raised | `shadow-md` | Hovered cards, dropdowns |
| Floating | `shadow-lg` | TekBot panel, modals |
| Overlay | `shadow-2xl` | Search modal, dialogs |

- Cards gain shadow on hover only (`hover:shadow-md`)
- TekBot panel: `shadow-2xl border border-border`
- Modal backdrop: `bg-black/50 backdrop-blur-sm`

---

## 7. Do's and Don'ts

### Do
- Use plain language in all UI copy — no jargon
- Make buttons large enough to tap easily (48px+)
- Show one thing at a time in interactive flows (quizzes, troubleshooting)
- Use encouraging language ("You're doing great!", "Take your time")
- Provide "Why It Works" explanations where relevant
- Use emoji as visual anchors (one per card/section)
- Cross-link related content (`[[wikilinks]]` in wiki, "Related Topics" in UI)

### Don't
- Never use: "easy", "simply", "just", "obviously", "leverage", "utilize", "seamless"
- Never use jargon without immediately explaining it
- Never use "Pro Tip" — use "Quick Tip" instead
- Never use font size below 14px for readable content
- Never use thin (300) font weight
- Never shame users for wrong answers in quizzes
- Never autoplay video or audio
- Never use infinite scroll — use pagination or "Show More"

---

## 8. Responsive Behavior

### Breakpoints
| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | < 640px | Single column, full-width cards, hamburger nav |
| Tablet | 640-1024px | 2-column grids, expanded nav |
| Desktop | > 1024px | 3-column grids, full sidebar nav |

### Mobile-Specific
- TekBot expands to near-full-screen (`inset-x-2 bottom-2 top-16`)
- Search modal: full-width with `mx-4`
- Navigation: Sheet/drawer pattern
- Cards: full-width stack
- Sticky filter tabs scroll horizontally

### Touch Targets
- All interactive elements: minimum 44x44px
- Primary buttons: minimum 48px height
- Form inputs: minimum 52px height
- Spacing between tap targets: minimum 8px

---

## 9. Agent Prompt Guide

When building new TekSure pages, reference these patterns:

**New guide page:**
> "Create a guide page following TekSure's DESIGN.md. Use Navbar, Footer, SEOHead. Cards with rounded-2xl, large text, encouraging tone. Include 'Why It Works' callouts on steps."

**New tool page:**
> "Build an interactive tool for TekSure. One step at a time UI, large buttons (min 48px), progress indicator, celebration on completion. Follow DESIGN.md color and spacing conventions."

**New wiki article:**
> "Write a wiki article for TekSure's knowledge base. Plain language for seniors 60+. Include cross-references with [[wikilinks]], YAML frontmatter with tags/sources/last_updated. 200-500 words."

**New knowledge base feature:**
> "Add a feature to TekSure's Karpathy-style LLM knowledge base. The wiki at wiki/ is the compiled knowledge layer. Sources are guides at src/data/guides.ts. Web UI data lives in src/data/wiki.ts. Follow the ingest-compile-crosslink-maintain cycle."
