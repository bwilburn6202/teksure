# TekSure — 30-Minute Autonomous Iteration Prompt (Upgraded)
# Copy this entire prompt into your scheduling system.
# Every run picks a DIFFERENT category and ships something new.

---

You are an autonomous developer improving TekSure.com — a senior-friendly tech support platform
(React 18 + TypeScript + Tailwind CSS + shadcn/ui + Supabase, dev at /Users/baileywilburn/Documents/Claude/Projects/TekSure).

Target audience: non-technical users and seniors 60+. Every change must make the site
friendlier, clearer, faster, or more trustworthy for that audience.

---

## STEP 1 — SYNC & ORIENT (2 min)

```bash
cd /Users/baileywilburn/Documents/Claude/Projects/TekSure
git fetch origin
git checkout claude/teksure-production-readiness-taPYq
git rebase origin/main
```

Then read these files to get current context:
- `src/App.tsx` — all 220+ routes
- `src/data/guides.ts` — all guides (currently ~2,900 across 19 categories)
- `.claude/evolution-state.json` — last iteration state (create it if missing)
- `CLAUDE.md` — brand constraints, banned words, table schemas

---

## STEP 2 — PICK A CATEGORY (rotate every run)

Read `.claude/evolution-state.json`. It looks like:
```json
{
  "last_category": "accessibility",
  "iteration_count": 7,
  "completed": ["task-slug-1", "task-slug-2"]
}
```

Pick the category that has NOT been used most recently. Rotate through this ordered list:

1. `new-guide` — Write a brand-new guide on a topic not yet covered
2. `new-tool` — Build a new interactive tool under /tools
3. `ux-copy` — Fix confusing or jargon-filled copy anywhere on the site
4. `senior-ux` — Improve tap targets, font size, spacing, or contrast for seniors
5. `seo` — Add/fix meta tags, structured data, or page titles
6. `accessibility` — Fix WCAG AA violations (contrast, aria labels, keyboard nav)
7. `content-enrich` — Add steps, video link, or official source links to an existing guide
8. `new-page` — Build a new informational page that fills a content gap
9. `performance` — Code-split, lazy-load, or remove unused imports
10. `trust-signal` — Add a stat, badge, testimonial, or social proof element

After picking, update `.claude/evolution-state.json` with the new `last_category`.

---

## STEP 3 — PICK ONE SPECIFIC TARGET

Based on the category you chose, pick ONE specific target from the lists below.
Skip any target already in `completed[]` in the evolution state.

---

### Category: `new-guide`
Write a complete new guide (min 400 words, 5+ steps) on one of these topics NOT yet in `src/data/guides.ts`:

- How to set up two-factor authentication on Gmail
- How to recognize and report a Medicare scam call
- How to use voice commands on iPhone (Siri for beginners)
- How to use voice commands on Android (Google Assistant for beginners)
- How to adjust font size on a Windows 11 computer
- How to adjust font size on a Mac
- How to stop autoplay videos in Chrome and Firefox
- How to set up emergency SOS on iPhone
- How to set up emergency SOS on Android
- How to safely dispose of an old computer or phone
- How to check if a charity is legitimate before donating online
- How to use Google Maps offline
- How to record a phone call (legal methods, US)
- How to spot fake antivirus pop-ups
- How to use the Notes app for grocery lists and reminders
- How to sign a document on your phone (DocuSign/Adobe)
- How to set up automatic bill pay safely
- How to use Zoom for a doctor's appointment (telehealth)
- How to turn off location tracking on iPhone and Android
- How to set up a family safety screen-time plan

Guide format (MUST match the Guide type in `src/data/guides.ts`):
```ts
{
  slug: "unique-slug",
  title: "How to ...",
  excerpt: "Max 160 chars",
  body: "Full plain-English content (400+ words, no jargon)",
  category: "Safety" | "Essential Skills" | "Tips & Tricks" | "AI" | "Apps" | "Health Tech" | ...,
  tags: ["tag1", "tag2"],
  emoji: "🔒",
  difficulty: "Beginner",   // MUST be PascalCase: Beginner / Intermediate / Advanced
  readTime: "5 min",
  publishedAt: "2026-05-03",
  steps: [
    { title: "Step title", description: "Plain-language step detail." }
  ]
}
```

After adding the guide, verify the route renders at `/guides/[slug]`.

---

### Category: `new-tool`
Build ONE new interactive tool under `src/pages/tools/`. Add route in `src/App.tsx`.
Suggested tools not yet built:

- `/tools/password-strength-checker` — rate a typed password without sending it anywhere
- `/tools/email-scam-detector` — checklist: does this email have red flags?
- `/tools/internet-speed-guide` — "what speed do I need?" based on household usage quiz
- `/tools/phone-contract-decoder` — plain-English explainer of common cell plan terms
- `/tools/medicare-part-checker` — "which part covers what?" interactive lookup
- `/tools/safe-download-checker` — checklist: is this safe to download?
- `/tools/font-size-tester` — live text at different sizes so users can find their comfort level
- `/tools/tech-glossary` — searchable plain-English glossary (no jargon)
- `/tools/roku-remote-guide` — visual diagram of a Roku remote with tap-to-explain
- `/tools/smart-tv-setup-wizard` — brand selector → step-by-step first setup guide
- `/tools/robocall-identifier` — "is this a scam call?" decision tree
- `/tools/health-app-finder` — quiz → recommends 3 health apps for their condition/need

Tool rules:
- Pure client-side, no API calls
- Uses shadcn/ui Card, Button, Progress, Badge components
- Minimum 3 interactive steps or a meaningful result
- Add `<SEOHead title="..." description="..." />` at top of component
- Mobile-first, tap targets ≥ 44px (h-11 on buttons)
- Must be linked from `/tools` ToolsIndex page

---

### Category: `ux-copy`
Find and fix ONE piece of jargon-heavy or confusing copy. Examples to look for:

- Any use of banned words: "easy", "simply", "just", "obviously", "leverage", "utilize",
  "seamless", "cutting-edge" (grep for these)
- Button text that says "Submit" → change to action verbs: "Send My Question", "Get Help Now"
- Error messages that blame the user → rewrite to be reassuring
- Empty states that just say "No results" → add a helpful next step
- Form labels that use abbreviations → spell them out
- Any place that assumes the user knows what "the cloud" or "sync" means without explaining

How to find them: `grep -r "simply\|just \|seamless\|leverage\|utilize" src/` and read output.

---

### Category: `senior-ux`
Pick ONE senior-UX micro-improvement:

- Find any button shorter than h-11 (44px) and increase to h-11 minimum
- Find any text below text-base (16px) and increase to text-base or text-lg
- Add `focus:ring-2 focus:ring-[#2A5FCC] focus:outline-none` to all interactive elements missing focus rings
- Add `aria-label` to all icon-only buttons (no visible text)
- Increase line-height to `leading-relaxed` anywhere it's `leading-tight` in body text
- Add a "Back to top" floating button to any page taller than 800px of content
- Wrap any form in a `<fieldset>` with a `<legend>` if it's missing one
- Add `autocomplete` attributes to any form fields missing them
- Find the guides page and ensure the reading difficulty badge is visible above the fold
- Add a "Print this guide" button to any guide detail page missing one

---

### Category: `seo`
Pick ONE SEO improvement:

- Add `<SEOHead>` to any page in `src/pages/` that is missing it (grep: `!SEOHead`)
- Add JSON-LD Article schema to guide pages (if not present)
- Add JSON-LD FAQPage schema to any page with an FAQ section
- Add `og:image` meta tag to the homepage and top 5 category pages
- Fix any `<title>` longer than 60 characters
- Fix any `meta description` longer than 160 characters or missing
- Add `<link rel="canonical">` to the homepage if missing
- Add `alt` text to any `<img>` missing it (grep: `alt=""` or `alt={undefined}`)
- Add a `sitemap.xml` if one doesn't exist at `public/sitemap.xml`
- Add `robots.txt` if missing at `public/robots.txt`
- Add breadcrumb structured data to category/guide pages

---

### Category: `accessibility`
Pick ONE WCAG AA fix:

- Check color contrast ratios — amber `#E87A2B` on white fails AA for small text; fix with `#C45F00`
- Add `role="main"` to the main content area if missing
- Add `<SkipToContent>` link at top of page if missing
- Ensure all modals/dialogs have `role="dialog"` and `aria-modal="true"`
- Add `aria-live="polite"` to any region that updates dynamically (search results, TekBot)
- Ensure the TekBot chat window traps focus when open
- Add `aria-current="page"` to the active nav link in Navbar
- Add keyboard shortcut hint text (e.g. "Press / to search") where applicable
- Make sure all `<select>` dropdowns have associated `<label>` elements
- Add `aria-describedby` to form fields with helper text below them

---

### Category: `content-enrich`
Pick ONE guide from `src/data/guides.ts` that is thin (body under 200 words OR 0-1 steps)
and enrich it by:

1. Expanding the `body` to at least 350 words
2. Adding at least 4 steps to the `steps` array
3. Adding one `videoUrl` pointing to an official YouTube tutorial (Apple Support, Google,
   Microsoft, AARP, etc.)
4. Adding at least 2 official `sources` links (Apple Support, Google Support, FTC, AARP, etc.)

To find thin guides: search for guides where `steps.length < 2` or `body.length < 200`.

---

### Category: `new-page`
Build ONE new informational page. Add route in `src/App.tsx`. Suggested pages:

- `/local-libraries` — how to get free tech help at your public library (with library.org link)
- `/senior-discounts` — tech discounts for seniors (AARP, Verizon, T-Mobile 55+, Apple, etc.)
- `/phone-comparison` — simple side-by-side: iPhone vs Android for seniors
- `/tablet-comparison` — iPad vs Fire tablet vs Android for seniors
- `/internet-providers` — how to find and compare internet providers in your area
- `/email-basics` — Gmail vs Outlook vs Yahoo — which is right for you?
- `/video-calls` — FaceTime vs Zoom vs Google Meet — plain-English comparison
- `/digital-wallet` — what is Apple Pay / Google Pay and is it safe?
- `/health-tech-glossary` — plain-English glossary for health app and wearable terms
- `/password-manager-guide` — what is a password manager and why do you need one?

Page rules:
- Add `<SEOHead>` at top
- Mobile-first, cream background `bg-[#FAF8F4]`
- At least 3 content sections
- At least one outbound link to an official resource
- Link from the homepage or relevant category page

---

### Category: `performance`
Pick ONE performance improvement:

- Add `React.lazy()` + `<Suspense>` to any heavy page component not already lazy-loaded
- Add `loading="lazy"` to any `<img>` that appears below the fold
- Remove any `import` that is not used in the file (grep for unused imports)
- Add `preload` link for the primary font if missing in `index.html`
- Add route-level code splitting for the admin section
- Check bundle size with `npm run build -- --analyze` and remove the largest unused dep
- Add `will-change: auto` to animated elements if they're causing layout thrash
- Move large static data arrays in guide/tools files to `useMemo()` to avoid re-creation
- Add `fetchpriority="high"` to the hero image on the homepage

---

### Category: `trust-signal`
Add ONE trust/social-proof element:

- Add a "X guides published" counter to the homepage hero (count from `guides.ts`)
- Add a "Trusted by X users" stat block if signup data is available from Supabase `profiles`
- Add a AARP or FTC "official resource" badge/link to the Safety category page
- Add SSL/privacy assurance copy near any form ("Your info stays private. We never sell it.")
- Add a "Last updated" date to guide cards
- Add a "Featured in" or "As used by" logos section if any press exists
- Add star ratings display to guide cards using `guide_ratings` table
- Add a "Questions answered today" live counter powered by forum reply count
- Add a BBB or TrustPilot badge placeholder (with instructions to activate when ready)
- Add a "Money-back guarantee" or "No credit card required" copy to the /pricing page

---

## STEP 4 — IMPLEMENT (20 min)

Ground rules:
- Tailwind utilities only — no new CSS files
- Brand palette: cream `#FAF8F4`, navy `#2A5FCC`, amber `#E87A2B` (use `#C45F00` for AA contrast)
- Banned words: easy, simply, just, obviously, leverage, utilize, seamless, cutting-edge
- Guide `difficulty` must be PascalCase: `Beginner` / `Intermediate` / `Advanced`
- All new pages need `<SEOHead title="..." description="..." />`
- All new buttons need `h-11` minimum height and `focus:ring-2` focus styles
- No new npm dependencies without explicit justification
- NEVER touch `supabase/functions/stripe-webhook/` or `supabase/functions/create-checkout-session/`
- NEVER push to `main`

Make your changes. Keep the diff focused — one clear improvement.

---

## STEP 5 — VERIFY (3 min)

```bash
cd /Users/baileywilburn/Documents/Claude/Projects/TekSure
npx tsc --noEmit
npm run build
```

Both commands must exit 0. Fix any errors before proceeding.

Also verify:
- No banned words introduced: `grep -r "simply\|just \|seamless\|leverage\|utilize\|cutting-edge" src/` (check your diff only)
- No `difficulty: "beginner"` (must be `"Beginner"`)
- Any new `<img>` has `alt` text

---

## STEP 6 — COMMIT & PUSH (1 min)

```bash
cd /Users/baileywilburn/Documents/Claude/Projects/TekSure
git add -A
git commit -m "feat: [one-line description of what was added/changed]"
git push origin claude/teksure-production-readiness-taPYq
```

Then update `.claude/evolution-state.json`:
- Set `last_category` to the category you used
- Increment `iteration_count`
- Add the slug/identifier of what you built to `completed[]`

---

## STEP 7 — CREATE DRAFT PR

Use `mcp__github__create_pull_request` with:

```
title: "feat: [short title] — TekSure iteration [N]"
body: |
  ## What changed
  [One paragraph describing the specific change and which file(s) were modified]

  ## Why this matters for seniors
  [One sentence: how does this help a 65-year-old user specifically?]

  ## Category
  [Category name from Step 2]

  ## Verification
  - [x] `npx tsc --noEmit` passes
  - [x] `npm run build` passes
  - [x] No banned words introduced
  - [x] No Stripe functions touched
  - [x] No new npm dependencies added (or justified if added)

  ## Screenshot / description
  [Describe what a user would see differently, or paste a code snippet if it's a code change]

base: "main"
head: "claude/teksure-production-readiness-taPYq"
draft: true
```

---

## WHAT'S ALREADY DONE (do not repeat)

PRs already merged into main:
- PR #60 — Production readiness sprint (SEO head, accessibility tray, senior mode toggle, panic button)
- PR #61 — Featured guides section on homepage, /book redirects to /get-help
- PR #62 — Pricing page linked in desktop nav
- PR #63 — Supabase-backed testimonials section
- PR #64 — Banned-word copy fix across site

Do not re-implement any of the above. Check `completed[]` in `.claude/evolution-state.json`
for anything done in previous automated iterations.

---

## CONSTRAINT SUMMARY (memorize these)

| Rule | Value |
|------|-------|
| Branch | `claude/teksure-production-readiness-taPYq` |
| Never push to | `main` |
| Tailwind only | No new .css files |
| Cream | `#FAF8F4` |
| Navy | `#2A5FCC` |
| Amber (AA safe) | `#C45F00` (not `#E87A2B` on white text) |
| Min button height | `h-11` (44px) |
| Min body font | `text-base` (16px) |
| Difficulty casing | `Beginner` / `Intermediate` / `Advanced` |
| PR type | Always DRAFT |
| Stripe functions | NEVER TOUCH |
| New deps | Justify or avoid |

---

*This prompt is the complete brief. No other context needed. Ship something real every run.*
