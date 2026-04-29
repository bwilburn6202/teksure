# TekSure UX Critique — 2026-04-21

**Audience:** Adults 60+, non-technical users. Mobile-first. WCAG 2.1 AA target.
**Scope:** Navbar, Index (landing), Guides, GuideDetail, Brain, Footer, theme tokens.
**Relationship to prior audit:** This critique assumes the fixes in `ACCESSIBILITY-AUDIT-2026-04-20.md` are still outstanding and does not re-list them. The critique below is about usability and information architecture, not WCAG bug-hunting.

---

## TL;DR

- **The mega-menu is a cognitive cliff.** The Resources popover hides 29 link destinations plus 8 "Quick Tools" chips across three columns of tiny 10-11px uppercase labels — far too many choices for a 70-year-old, and the Safety / Learn / Support taxonomy overlaps (Scam Alerts vs Scam Defense Center vs Scam Simulator vs Scam Alerts(footer); Emergency Help vs Emergency Prep; Free Tech Programs vs Free Software).
- **The landing page is an AI-chat doppelgänger, not a help site.** A 70-year-old arriving at TekSure sees an OpenAI-style blank textarea with "What do you need help with?" — there is zero preview of guides, categories, or "I just want to talk to a human." The five suggestion chips are the only wayfinding and they are small and low-contrast.
- **Guides index has 25 category pills** (the `categoryLabels` map has 25 entries). That tab-row overflows on desktop and scrolls horizontally on mobile — seniors don't recognize horizontal-scroll affordances. This is the single most usable page on the site and it's drowning in taxonomy.
- **Base font on the landing is 16px**. Seniors without the `senior-mode` toggle get body copy at `text-base` (16px) and suggestion chips at `text-sm` (14px). Senior Mode exists (20px root) but is opt-in behind a Sliders icon with no label — most users will never find it.
- **Search has three entry points** that behave differently: Navbar ⌘K SearchModal, `/brain` semantic search, and the `/guides` text filter. They are not reconciled. A senior typing on the landing is routed to `/search` — a fourth surface.
- **Brand feels generic shadcn.** The palette is the default blue+off-white, Inter at default weights, 12px radius, dotted-grid hero background. The only thing that says "TekSure" is the logo.

---

## Navigation & IA

**Mega-menu density.** `Navbar.tsx` lines 54-90 define three columns:

- Safety: 9 links
- Learn: 8 links
- Support: 12 links
- Quick Tools strip: 8 chips

That's **37 decisions** in one popover. Column headers are `text-[10px]` `text-muted-foreground/60` — already flagged in the a11y audit as below AA contrast, and visually indistinguishable for anyone with presbyopia. Emojis in the column headers ("🛡️ Safety", "📚 Learn", "🤝 Support") are doing all the semantic heavy-lifting.

**Overlap / redundancy in the menu alone:**

| Concept | Appears as |
|---|---|
| Scams | "Scam Defense Center", "Scam Alerts", "Scam Simulator", "Scam Alerts" (in footer again) |
| Emergency | "Emergency Help", "Emergency Prep" |
| Free stuff | "Free Tech Programs", "Free Software" |
| Local help | "Help Near Me", "Find Local Help" — these are two different URLs (`/tech-help-near-me` vs `/local-help`) |
| Learning paths | "Learning Paths", "Senior Tech Path", "Courses", "My Learning Path" (authed), "AI Tutor" (in Quick Tools) |
| About | "About TekSure" (menu), "About" (footer), "How It Works" (footer) |

Any one of these is a "did I already click this?" moment for a user with short-term memory fatigue.

**Mobile nav is a flat 29+ link list.** `allMobileLinks` (line 100-105) concatenates every public link plus all three mega-menu columns into one scroll. No section headers, no grouping, no search. The menu also has no focus trap and no Escape handler — both already noted in the a11y audit and still present.

**Top-level labels are fine.** "Guides / Tools / Safety / Get Help" are plain-English. The breakdown happens when a user clicks Resources.

## Home page first impression

Three-second test, hypothetical 70-year-old:

- **What they see:** A centered headline "Tech help that speaks your language.", a big empty text box, and five small gray pill buttons.
- **What they don't see:** Any guide previews, any "call a human" button, any indication this site has 1,200+ guides, any category list, any indication it's free.
- **Implicit expectation:** Because the input is the largest element and labeled "What do you need help with?", the site is telling seniors to type — which is the single hardest interaction for this audience. A senior who doesn't know the right words for their problem ("what do I even call that screen?") cannot use this landing.

**The "free" messaging is buried** in a 12px paragraph below the chips ("1,200+ free guides · Real humans · Plain English"), using the lightest possible font weight. That line is the most important value prop on the site and it's the smallest text in the hero.

**Suggestion chips are under-spec'd.**

- `text-sm` + `text-foreground/80` on a light card = low priority visual weight.
- Only 5 of them: "Get real human help", "Find the right guide", "Ask TekBot", "Browse tools", "More". A senior looking for "help with my iPhone" or "protect me from scams" doesn't see their mental model here.
- Tap targets: 40px min-height (line 88), which is **below the 44px WCAG recommendation** and well below the 52px `senior-mode` target.

**The `<h2>` / sr-only `<h1>` split** is already in the a11y audit — still there.

## Guide reading experience

`GuideDetail.tsx` is the best-designed page on the site. The hierarchy is legitimately good:

- 36px-40px bold H1 (line 537) with 18px muted excerpt
- At-a-Glance card summarizing category/difficulty/time/steps
- Table of contents above 3 steps
- Numbered step cards with left-primary border
- Quick Tip / Warning callouts
- Completion banner

**What's wrong for seniors:**

- **Step body is `text-base text-muted-foreground` (line 643).** That means the actual step instructions — the thing a senior is reading — are rendered in the low-emphasis gray. The `muted-foreground` is AA-compliant (~4.78:1) but it's "caption" color, not "body" color. Step instructions should be full foreground weight.
- **Line length on desktop.** `max-w-4xl` (line 471) = ~896px. Optimal reading line length is 45-75 characters; at 896px of `text-base` you're at ~110 characters. Either narrow the article column to `max-w-3xl` / `max-w-prose`, or bump the step content font size.
- **Read-time / step-time is `text-xs`** (lines 641, 527) — decorative and ignorable, but the 11px xs tier is hard to read without glasses.
- **No sticky "Next Step" affordance.** Once a user finishes step 3, there is no "on to step 4" button — they have to scroll past the screenshot, Quick Tip, and Warning to find step 4.
- **"Listen" button is a secondary variant** — text-to-speech is a huge senior feature and should be primary/prominent, not a tertiary icon-text button in a wrap row alongside Print / Share / Report.

## Search & findability

Four competing search surfaces:

1. **Landing `<textarea>`** → POSTs to `/search?q=` (separate SearchResults page)
2. **Navbar ⌘K `SearchModal`** — keyboard shortcut and mobile-search-icon trigger
3. **`/guides` text input** — in-page client filter (tag/title/body/steps)
4. **`/brain`** — keyword-extraction + synonym expansion + optional Ollama AI answer

A senior cannot tell which of these they want. The Navbar search icon on mobile opens a modal; the landing text input goes to a new page; the guides input filters in place; Brain has a different vibe entirely. All four are reasonable individually and confusing collectively.

**Brain vs Guides filter** is the sharpest redundancy. Brain does keyword extraction with synonym maps and returns "top 5 guides." The Guides page does substring match across title/excerpt/tags/body. For the end user these are the same thing — "find me a guide that matches these words" — but branded and styled completely differently. Brain even falls back to regular search when Ollama is offline, which is most of the time per the CLAUDE.md (Hetzner not live yet).

**Recommendation:** Pick ONE search surface and route everything else to it. If `/brain` is the flagship, the landing textarea should post to `/brain?q=`, not `/search?q=`. The Guides filter can stay as a within-index refinement. The ⌘K modal is fine for power users.

## Visual / brand critique

**Palette:** `--primary: 210 70% 46%` is the shadcn default blue-ish. The dark mode (`#050D1F` navy, `#1D5FE8` electric blue) is more branded and feels intentional. Light mode is almost entirely shadcn-out-of-the-box with off-white `40 20% 99%` backgrounds and `220 10% 91%` borders.

**Typography:** Inter everywhere, `letter-spacing: -0.011em` on body, `-0.025em` on headings. Also shadcn-default. No type personality — no display serif, no weight contrast, nothing that a senior would describe as "warm."

**Radius:** 12px (`--radius: 0.75rem`) with 16px/24px cards. Fine but generic.

**"Timeless, new generation" test:** It reads as "competent 2024 React-app with Tailwind." There is no visual artifact (illustration style, iconography system, photographic treatment, unique color, custom type) that a user would remember five minutes after closing the tab. The logo is the only brand equity on screen.

**What would move the needle:**

- One accent color that isn't blue (the `--accent: 16 70% 58%` orange token exists but is barely used)
- Larger, warmer body type (Source Serif or similar for body, Inter for UI)
- Human illustrations — not stock photos — in empty states and hero
- A distinctive "TekSure shape" — maybe rounded-2xl everywhere, maybe a hand-drawn underline for key phrases

## Redundancy / bloat

Beyond the menu overlap (above), there are duplicate or near-duplicate surfaces:

| Keep | Fold into it |
|---|---|
| `/brain` | `/search` (both do free-text → guide matches) |
| `/scam-defense` | `/safety/scam-alerts` (merge alerts as a tab inside the Defense Center) |
| `/free-resources` | `/free-software` (sub-tab under Free Resources) |
| `/local-help` | `/tech-help-near-me` (they are the same user intent at different URLs) |
| `/emergency-help` | `/emergency-tech` / "Emergency Prep" (consolidate into one Emergency page with two tabs) |
| `/senior-tech-path` | `/learn` (subset of Learning Paths) |
| `/about` | `/how-it-works` (single About page with "How it works" section) |

Pages are cheap; choices aren't. Every page you cut removes an "I don't know which one to click" moment.

---

## Concrete UI fixes

Priorities for the senior audience, ranked by leverage:

### 1. Raise the default base font size

**File:** `src/index.css:99` — `html { font-size: 16px; }`
**Change to** `17px` (or 18px) as the app-wide default. All Tailwind `text-*` sizes scale with root. The senior-mode override (20px) already exists for the explicit opt-in. Seniors shouldn't have to find the hidden toggle to get readable text; 16px is the absolute floor, not a senior-friendly default.

### 2. Enforce 44px min height on the landing suggestion chips

**File:** `src/pages/Index.tsx:88`
**Current:** `min-h-[40px]` — below WCAG 2.5.5 (44×44 target).
**Change to** `min-h-[48px]` + increase `text-sm` → `text-base`. These are the only navigation affordances on the landing and they're smaller than the submit button.

### 3. Make the landing value prop visible, not fine print

**File:** `src/pages/Index.tsx:95-97`
**Current:** "1,200+ free guides · Real humans · Plain English" in `text-xs text-muted-foreground`.
**Change to** at least `text-base` and move it **above** the textarea as a subtitle, or promote to `text-lg` below the H1. Seniors need to know what this site is before they're asked to type into a box.

### 4. Skip-to-content link — make it visibly focusable

**File:** `src/App.tsx:385`
**Current:** `sr-only focus:not-sr-only` — relies on focus-visible state. In senior-mode and high-contrast-mode there's no extra styling.
**Change:** Also add `focus:text-base focus:shadow-lg focus:ring-2 focus:ring-ring` so when a keyboard user tabs into it, it's a giant obvious button, not a skinny pill hiding in the corner. (Pairs with the a11y audit's fix of wiring the link to every page.)

### 5. Simplify the mobile nav — group, don't concatenate

**File:** `src/components/layout/Navbar.tsx:100-105` (where `allMobileLinks` is built) and `:389-402` (where they render).
**Current:** 29 links in a flat scroll.
**Change to:** Render the four mobile top-level links (Guides / Tools / Safety / Get Help) large; then render Safety / Learn / Support as three collapsible `<details>` sections with the column name as `<summary>`. Keeps the same content but cuts the initial visual load from 29 to 7.

### 6. Strengthen the default focus ring

**File:** `src/index.css:96-108` (base layer).
**Current:** No global focus-visible styles — each component implements its own. In practice, many buttons show a 2px ring that's invisible on the off-white background.
**Change:** Add `*:focus-visible { outline: 2px solid hsl(var(--ring)); outline-offset: 2px; }` in `@layer base`. Senior users who tab through pages need to see where they are.

### 7. Resources popover — kill the 10px labels

**File:** `src/components/layout/Navbar.tsx:150, 164, 178, 193, 229, 413`
**Current:** `text-[10px] ... text-muted-foreground/60` — ~2.9:1 contrast, below AA.
**Change to** `text-xs text-muted-foreground` (12px, full `/100` opacity). Also remove the uppercase-tracking-widest treatment on the mobile-menu "Display & Accessibility" label — uppercase at 10px is the single hardest text treatment for older eyes.

### 8. Step body text — primary, not muted

**File:** `src/pages/GuideDetail.tsx:643`
**Current:** `text-base text-muted-foreground leading-relaxed`
**Change to** `text-base text-foreground leading-relaxed`. The step instructions are the core content; `muted-foreground` is for metadata.

### 9. Narrow the article column

**File:** `src/pages/GuideDetail.tsx:471`
**Current:** `container py-8 max-w-4xl` (~896px).
**Change to** `max-w-3xl` (~768px) or — better — `max-w-prose` for the step block specifically. Brings line length to ~75 char.

### 10. Drop one search surface

**File:** `src/pages/Index.tsx:28`
**Current:** `navigate(\`/search?q=\${...}\`)` — routes to a separate SearchResults page.
**Change to** `navigate(\`/brain?q=\${...}\`)` and have Brain read the `?q=` param on mount. Removes one of the four competing search surfaces with a one-line code change. (Also pass this through ⌘K SearchModal when time permits.)
