# UX cohesion review

**Goal:** make the site feel like one product built for one person, rather than 3,000
pages built by a pipeline.

## The person you are designing for

Not "a user". Picture someone 72, on an iPhone they did not choose, who has been told
by a relative to "just look it up". They are mildly anxious that tapping the wrong
thing will break something or cost money. They will not scroll to find a hidden
control, and they will not guess what an unlabelled icon means.

Every judgement below resolves to: **would that person succeed here, alone?**

## Run the numbers first

```bash
node scripts/audit-senior-ux.mjs --verbose
```

Current baseline to beat: average reading grade 9.5, 78% of guides above grade 8,
0 images missing alt text.

## Checklist

**Can they read it**
- No text below 14px. The Tailwind config raises the `xs`/`sm`/`base` steps so this holds
  globally — do not undo it with arbitrary values like `text-[11px]`.
- Body text at comfortable line length (~65–75 characters) and generous line height.
- Contrast at WCAG AA (4.5:1 for body). Grey-on-grey "subtle" text is the usual failure.

**Can they hit it**
- Tap targets at least 44×44px, with real space between them. `h-8`/`h-9` buttons are
  too small on a phone for an unsteady hand.
- Every interactive thing is a real `<button>` or `<a>` — keyboard and switch users
  cannot activate a `<div onClick>`. The audit flags these.

**Can they understand it**
- Buttons say what they do: "Check this link" not "Submit", "Start over" not "Reset".
- No unexplained jargon anywhere in UI copy, including error messages.
- Every page states, in the first screenful, what it is for and who it helps.

**Can they recover**
- Errors say what happened, whether anything was lost, and exactly what to do next.
- Destructive actions confirm, and say plainly whether they can be undone.
- There is always a visible way back — never rely on the browser back button alone.

**Do they trust it**
- Say when a page was last checked. Currency signals trustworthiness to this audience
  more than design polish does.
- Cite the official source (Apple, Medicare, FTC) and link it.
- Never fake urgency or use dark patterns. This audience is actively targeted by
  manipulative design; TekSure has to be the opposite of that, visibly.

## The flow, not just the page

Walk the actual journey and look for the seams:

1. Land on a guide from Google → is it obvious what this site is and why to trust it?
2. Finish the guide → is there a sensible next step, or a dead end?
3. Still stuck → can they find human help in one tap?
4. Search for something the site does not cover → is the empty state helpful?

Inconsistent navigation, differing card layouts, and pages that dead-end are what make
a large site feel unmaintained.

## Verify

```bash
node scripts/audit-senior-ux.mjs   # numbers moved the right way
npm test
npx tsc --noEmit -p tsconfig.app.json
npm run build
```

Report before/after numbers, commit, and push.
