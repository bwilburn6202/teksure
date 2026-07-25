# TekSure — discoverability work, strategy, and advice
**July 25, 2026**

Everything below is committed and pushed to `main` and verified locally. One thing needs
you: a Vercel setting appears to be preventing `vercel.json` from taking effect. Details
in "The one blocker" — please read that first, because the biggest win of this session
is gated behind it.

---

## The one blocker (needs your Vercel dashboard)

**Symptom.** Three things that should be live are not:

| Check | Expected | Actual |
|---|---|---|
| `curl https://www.teksure.com/build-info.json` | JSON with commit + page count | the HTML shell |
| `curl -I https://www.teksure.com/pricing` | `308` redirect to `/get-help` | `200` |
| Guide page HTML size | ~74 KB (prerendered) | ~8 KB (empty SPA shell) |

**What that combination means.** The redirects and the rewrite rule live purely in
`vercel.json` and need no build step. They are not working, while `sitemap.xml` *is*
current (it carries today's date and the new `www` host, which only my new generator
produces). So builds are running from this repo, but **`vercel.json` is being ignored.**

**Most likely causes, in order — please check the Vercel project settings:**

1. **Root Directory** is set to a subdirectory. If Vercel's project Root Directory is
   anything other than the repo root, it will never see the root `vercel.json`.
2. **Build Command overridden in the dashboard.** A dashboard-set Build Command (e.g.
   `vite build`) takes precedence over `vercel.json`, which would explain fresh
   `sitemap.xml` (written by `prebuild`) with no prerendered pages (a different build
   command skips `npm run prerender`).
3. **A failing deployment**, with Vercel serving the last good one. Check
   Deployments → most recent → build log.

**How to confirm in 30 seconds after the next deploy:**

```bash
curl -s https://www.teksure.com/build-info.json
```

That endpoint is new and exists precisely so this is never guesswork again. If `commit`
is not what you pushed, the deploy did not happen. If `prerenderedPages` is 0, the
prerender step did not run.

I also found and fixed two things that were genuinely breaking deploys, so this is not
purely a settings problem:

- **`scripts/prerender.mjs` never exited.** It finished all 7,092 pages, then held the
  event loop open (the SSR bundle keeps a handle). Vercel's builder waited on it until
  the job timed out and discarded the deployment. Fixed with an explicit `process.exit(0)`.
- **`vercel.json` contained keys Vercel's schema rejects** — a `"comment"` on the rewrite
  and `"generated": true` on each redirect. Vercel fails the *entire* deployment on an
  unknown property. Both removed; explanations moved into the generator scripts.

---

## What was actually wrong with discoverability

You asked to be found in search. The reason you were not is specific and was not a
content problem — you have plenty of content.

**TekSure was a client-rendered SPA, so all 7,000+ URLs served identical HTML.** Same
`<title>`, same meta description, and none of the guide text in the source at all. The
title tag is the single strongest on-page signal, and every page had the same one.

Who this locked out:

- **Google** can run JavaScript, but at 7,000 near-identical-looking URLs it crawls
  slowly and risks treating them as duplicates.
- **Bing, DuckDuckGo, and every social preview crawler** largely do not run JavaScript.
  They saw one generic page. No rich link previews anywhere.
- **AI answer engines** (ChatGPT, Perplexity, Claude, Google AI) mostly do not execute
  JavaScript either. For a site whose entire product is 4,000 "how do I…" answers —
  exactly the questions people now ask assistants — this was the worst possible gap.

**The fix:** `scripts/prerender.mjs` renders every route to real static HTML at build
time, each with its own title, description, canonical URL, Open Graph tags and JSON-LD.
7,092 pages in ~44 seconds, wired into `npm run build`. Measured on the output: 7,052
unique titles, 0 pages missing a title, ~1,300 words of indexable text on a typical
guide where there had been none.

### Other discovery bugs found and fixed

- **19 legacy URLs were client-side redirects** (`<Navigate>`). A crawler asking for
  `/pricing` got `200 OK` and a blank page — no redirect, no link equity passed. They are
  now real `308`s generated from the route table, and excluded from the sitemap.
- **robots.txt was not blocking what you thought.** `Googlebot` had its own group listing
  only `Allow: /`, and a crawler obeys only its most specific group — so Googlebot ignored
  every `Disallow` below and could crawl `/admin/` and account pages. Rules are now
  repeated per group.
- **16 duplicate guide titles** had two URLs competing for the same query, splitting their
  ranking signals. The weaker page now points at the stronger with `rel=canonical` via a
  new `Guide.canonicalSlug` field — no content deleted.
- **2,969 tool pages were orphaned** (nothing linked to them). A generated `/tools/all`
  A–Z directory fixed it: orphans went 2,602 → 6, and the 6 are admin/payment callbacks.
- **`llms.txt` and `build-info.json` were swallowed by the SPA rewrite**, returning HTML.
  The rewrite now matches only dot-free paths, so any future static file works
  automatically.

---

## Advice: where the leverage actually is now

### 1. Stop adding guides. Start improving them.

This is the most important thing in this document.

You have **4,015 guides averaging a grade 9.5 reading level, with 78% above grade 8** —
measured, not guessed (`node scripts/audit-senior-ux.mjs`). Your audience is largely
over 60 and often anxious. Every extra clause loses someone.

Meanwhile the content automation keeps adding batches. Consider what that optimises for:
page count, not usefulness. Google has gotten decisively better at recognising
mass-produced content, and the penalty applies **domain-wide** — 4,000 thin pages can
drag down the 200 genuinely excellent ones. One rewritten guide on a topic people
actually search beats ten new ones.

**Concretely:** point the weekly task at `improve-readability.md` until the average is
under 8, and cap new guide creation at a handful a week with a real editorial bar.

### 2. Expect a lag, and watch the right numbers

Prerendering will not move rankings tomorrow. Google must recrawl 7,000 URLs, which
takes weeks. Sequence:

1. Confirm the deploy (`build-info.json`).
2. Submit `sitemap.xml` in Google Search Console **and** Bing Webmaster Tools. Bing is
   worth real attention here — it powers ChatGPT search, and your audience skews toward
   Edge/Bing defaults more than a tech-savvy audience would.
3. In Search Console, watch **Pages → Indexed** (should climb) and use the URL Inspector
   on a few guides to confirm Google now sees a unique title.
4. Only then look at clicks. 4–8 weeks before the trend is meaningful.

If you do not have Search Console verified, that is the highest-value 15 minutes
available to you right now — without it you are optimising blind.

### 3. Your unfair advantage is trust, not volume

Every generic tech site can explain how to clear a cache. Almost none is written for a
frightened 72-year-old who thinks they may have just been scammed. Lean into that:

- **Scam and fraud content is your strongest asset.** High urgency, high trust
  requirement, and a subject where competitors are either patronising or SEO spam.
  `/scam-defense` deserves to be your flagship, not one page among thousands.
- **Show your work.** "Checked against Apple's official instructions on 25 July 2026"
  earns more with this audience than any design change. You already store
  `lastVerifiedAt` — surface it prominently.
- **Answer the second question.** Everyone writes "how to set up X". Almost nobody writes
  "X is set up and still not working", which is where people actually give up. That is
  both underserved and low-competition.

### 4. Be honest about the AI-crawler decision

I set `robots.txt` to **allow** GPTBot, ClaudeBot, PerplexityBot and friends. My
reasoning: an increasing share of your audience asks an assistant instead of searching,
and being quotable there serves the mission and sends traffic back. But it is a real
business decision and it is yours — flip those groups to `Disallow: /` if you would
rather not. `public/llms.txt` (generated) also describes the site for those systems.

### 5. Fix the automation's incentives

Two structural problems worth more than any single feature:

- **The content tasks generate but do not ship.** That is what caused the 12-week gap I
  found earlier. Every content task should end with commit + push.
- **Local scheduled tasks and GitHub Actions both write `.claude/dev-loop-state.json`.**
  They will keep conflicting. Pick one writer — I would keep GitHub Actions.

---

## What is now automated

| Thing | Where | When |
|---|---|---|
| Prerender all routes | `scripts/prerender.mjs` | every build |
| Sitemap, tools directory, redirects, `llms.txt` | `scripts/generate-*.mjs` | every build (`prebuild`) |
| Build stamp | `scripts/write-build-info.mjs` | every build |
| Health, links, duplicate titles, readability | `scripts/dev-loop.mjs` | every 6h (GitHub Actions) |
| Senior-UX measurement | `scripts/audit-senior-ux.mjs` | on demand + in dev-loop |
| Weekly improvement cycle | `teksure-weekly-improvement` task | Tuesdays 8am |

Improvement briefs live in `.claude/prompts/` — start with `weekly-site-review.md`. They
are written so a fresh session can pick up the work without re-deriving context, and the
first thing that one does is verify discoverability is still intact.

---

## Scoreboard

| | Before | After |
|---|---|---|
| URLs with a unique title | 1 of 7,110 | 7,052 of 7,092 |
| Indexable text on a guide (no JS) | none | ~1,300 words |
| Legacy URLs returning blank 200s | 19 | 0 (real 308s) |
| Duplicate titles competing | 16 | 0 |
| Orphaned routes | 2,602 | 6 (intentional) |
| Private routes crawlable by Google | yes | no |
| Reading grade (avg) | 9.5 | 9.5 — **the open work** |
| TypeScript / tests / build | 440 errors / 17 failing | 0 / 104 passing / green |

The one number that has not moved is readability, and it is the one I would spend the
next month on.
