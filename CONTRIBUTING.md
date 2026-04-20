# Contributing to TekSure

Development workflow, coding standards, and conventions for the TekSure codebase.

---

## Development Setup

```bash
git clone https://github.com/bwilburn6202/teksure.git
cd teksure
npm install
cp .env.example .env   # Add your Supabase + Stripe keys
npm run dev             # Starts on http://localhost:5173
```

---

## Commit Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new password strength checker tool
fix: correct guide rating calculation
docs: update API documentation
refactor: simplify auth context logic
test: add forum thread tests
```

---

## Coding Standards

### TypeScript

- Use TypeScript for all files
- Define explicit types for component props
- Use Zod schemas for form validation
- Import path alias: `@/` maps to `src/`

### React Components

- Functional components with hooks
- shadcn/ui components from `@/components/ui/`
- Wrap pages in `<SEOHead>` for meta tags
- Lazy-load all page components

### Styling

- Tailwind CSS utility classes (mobile-first: `base` -> `sm` -> `md` -> `lg`)
- CSS variables from `index.css` for theme colors
- Minimum touch target: 44px

### Accessibility

- Every `<img>` must have `alt` text
- Semantic HTML (`<main>`, `<nav>`, `<section>`, `<article>`)
- All interactive elements keyboard-accessible
- Color contrast 4.5:1 for text, 3:1 for large text
- Test with Senior Mode and High Contrast enabled

### Content Writing

- **6th-grade reading level** - no jargon
- Second person ("you" and "your")
- Short sentences (under 20 words)
- Active voice

---

## Adding Features

### New Page

1. Create `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx` (lazy-loaded)
3. Add nav link in `Navbar.tsx` if needed
4. Add `<SEOHead>` for meta tags

### New Tool

1. Create `src/pages/tools/YourTool.tsx`
2. Add route in `App.tsx`
3. Add card on `/tools` hub page

### New Guide

See [docs/GUIDES.md](./docs/GUIDES.md)

### New Supabase Table

1. Create migration in `supabase/migrations/`
2. Define RLS policies
3. Run `supabase db push`
4. Regenerate types

### New Edge Function

1. Create `supabase/functions/your-function/index.ts`
2. Deploy: `supabase functions deploy your-function`
3. Set secrets: `supabase secrets set KEY=value`

---

## Testing

```bash
npm run test          # Single run
npm run test:watch    # Watch mode
npm run lint          # ESLint
```

---

## Design Principles

1. **Plain language** - no jargon, especially in guides
2. **Mobile-first** - design for phones, enhance for desktop
3. **Accessibility-focused** - WCAG 2.1 AA, senior-friendly
4. **Professional design** - no AI-looking or generic UI
5. **American identity** - US-focused language and references
