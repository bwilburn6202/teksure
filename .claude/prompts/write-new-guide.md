# Write a new guide

**Goal:** add a guide that is correct, findable, and genuinely usable by someone who is
stuck — not another page that exists mainly to raise the count.

## Before writing: does it deserve to exist?

- Search the library first: `grep -ril "<topic>" src/data/guides*.ts | head`.
  If a guide already covers it, **improve that one instead**. Two pages on one topic
  split their search ranking and neither wins (see `Guide.canonicalSlug`).
- Is it something the audience actually asks? Good: "why does my iPhone say storage
  full", "is this text from USPS a scam", "how do I get my hearing aids to connect".
  Bad: topics chosen because they were easy to write.

## The shape (enforced by tests — see `src/data/guides.ts`)

```ts
{
  slug: 'how-to-...',              // lowercase, hyphens, no year unless the year matters
  title: 'How to ...',             // plain, matches how a person would ask
  excerpt: 'One sentence, max 160 characters.',
  category: '<one of GUIDE_CATEGORIES>',
  tags: ['...'],
  readTime: '5 min',
  thumbnailEmoji: '',              // vestigial; cards use lucide icons
  publishedAt: 'YYYY-MM-DD',
  difficulty: 'Beginner',
  body: `...`,                     // 300+ words
  steps: [{ title: '...', content: '...' }],
  sourceName: 'Apple Support',     // official source where one exists
  sourceUrl: 'https://...',
}
```

Put it in the highest-numbered `src/data/guides-batch-NNN.ts`, or make the next one —
and **import AND spread it in `src/data/guides.ts`**. A batch that is imported but not
spread silently does not exist. That has happened before.

## Writing standards

- **Grade 8 or below.** Check with `node scripts/audit-senior-ux.mjs` after.
- **Steps describe what the person sees**, including colour, icon shape, and the exact
  words on the button. "Tap the grey gear labelled *Settings*", not "open Settings".
- **Say what happens after each step**, so they know it worked.
- **Name the failure modes.** "If you do not see this option, your phone is on an older
  version — here is what to do instead." Guides that only cover the happy path are the
  ones that make people give up.
- **Never** use "simply", "just", "it's easy", "obviously" (`npm test` enforces this).
- **Reassure where there is real fear.** For anything involving money, accounts, or
  deleting things, say plainly what is and is not reversible.

## Make it findable

- The title should read like the question someone types.
- Link 2–4 related TekSure guides from the body. Internal links are how the rest of the
  library gets discovered — a page nothing links to is nearly invisible.
- Guides automatically emit HowTo + FAQ + Breadcrumb JSON-LD via `GuideDetail`, so you
  get rich results for free **if** the steps are real steps.

## Verify

```bash
node scripts/validate-slugs.mjs        # no duplicate slugs
npm test                                # brand voice + schema
npx tsc --noEmit -p tsconfig.app.json
node scripts/audit-senior-ux.mjs        # reading level
```

Sitemap, tools directory, redirects and `llms.txt` regenerate on build — do not hand-edit
them. Then commit and push.
