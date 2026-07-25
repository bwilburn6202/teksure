# TekSure Full Audit — July 25, 2026

Scope: repo state, code health, content quality, SEO plumbing, Supabase security & performance.
Passed checks: TypeScript compiles clean · 3,988 slugs, zero duplicates · zero broken internal links · zero aged guides.

---

## P0 — Deployment pipeline is broken (fix first, everything else is downstream)

### 1. Local and GitHub have massively diverged — the live site is serving ~May 4 content
- Local branch: **10 commits ahead, 547 commits behind** `origin/main`
- Last common commit: `551f1e9` (May 4, 2026)
- Remote main has advanced only via GitHub Actions dev-loop chore commits (now at cycle 300)
- **Everything built since May 4 — roughly 2,000 guides (batches ~126–319), tools, and fixes — has never reached GitHub, so Vercel has never deployed it.** Visitors see the May 4 site.

**Fix:** From the Mac terminal (sandbox lacks git write permission on `.git/objects`):
```bash
cd ~/Documents/Claude/Projects/TekSure
git add -A && git commit -m "feat: commit all local content through batch-319 (May–July 2026)"
git fetch origin
# Remote's 547 commits are dev-loop chores touching .claude/ files. Merge, preferring local:
git merge origin/main -X ours -m "merge: reconcile local content with remote dev-loop history"
git push
```
Then verify Vercel deploys and spot-check a new guide URL on teksure.com.

### 2. 376 uncommitted files, last local commit July 8
17 days of scheduled-task output (222 new/modified guide batch files) sitting uncommitted. The scheduled tasks are producing content but nothing is committing/pushing it. **Fix:** add a commit+push step to the end of the content scheduled tasks, or a daily "commit and push" task.

### 3. Two automation systems fighting over the same files
Local scheduled tasks and the GitHub Actions dev-loop both write `.claude/dev-loop-state.json` and `.claude/dev-loop-backlog.md` on different machines → guaranteed perpetual conflicts. **Fix:** pick one writer (recommend: GitHub Actions only), or have local tasks stop writing dev-loop state.

---

## P1 — Security (Supabase advisors, project `vrhxitxzqtbphzsbdqih`)

### 4. Overly permissive RLS
- `scraped_articles`: UPDATE policy `authenticated_update_scraped_articles` is `USING (true) WITH CHECK (true)` — **any signed-in user can rewrite article content**. Restrict to admin.
- Always-true INSERT policies on `bookings`, `guide_reports`, `help_requests`, `newsletter_subscribers`, `scam_reports` — intentional for public forms, but they allow unlimited anonymous inserts. Add rate limiting or captcha at the app layer; acceptable short-term.

### 5. SECURITY DEFINER functions callable by `anon` via REST RPC
`handle_new_user()`, `is_admin()`, `rls_auto_enable()` — especially `rls_auto_enable` should not be publicly executable. Revoke EXECUTE from `anon`/`authenticated`.

### 6. Edge functions with `verify_jwt: false` that shouldn't be open
`doc-chat`, `send-notification`, `scrape-articles`, `simplify-article`, `categorize-and-dedup` can be invoked by anyone — cost and abuse risk (doc-chat burns AI tokens; send-notification can spam). (`stripe-webhook` and `create-checkout-session` are correctly open.) Enable JWT or add a shared-secret check.

### 7. Hygiene warnings
- 7 functions with mutable `search_path` (add `SET search_path = ''`)
- `vector` extension installed in `public` schema
- Leaked-password protection disabled in Auth settings (one toggle)
- `.env` is **tracked in git**. It contains only publishable keys today, but `.gitignore` has no `.env` entry at all — one paste of a secret key away from a leak. `git rm --cached .env` and add `.env*` to `.gitignore`.

---

## P2 — SEO plumbing (blocks the whole content investment)

### 8. Sitemap is 3 months stale (last generated April 26)
- 2,897 guide URLs in sitemap vs **3,988 guides** → ~1,100 guides invisible
- Only **31 of 285 tools** included
- **Zero** Spanish `/guias` pages included
**Fix:** run `scripts/generate-sitemap.mjs` and wire it into the build (`prebuild` alongside validate-slugs) so it can never go stale again.

### 9. 2,602 of 2,976 routes are orphaned (87% have no internal link pointing to them)
Crawlers and users can't discover most of the site through navigation. Also clear category drift: `/tools/acid-reflux-seniors`, `/tools/adult-coloring-books`, `/tools/adult-child-boundaries` are articles, not tools. **Fix:** auto-generate category index pages that link every route; reclassify non-tool "tools" into guide categories.

### 10. Host mismatch
Sitemap and robots.txt point to `https://teksure.com/...` but the site 301s to `www.teksure.com`. Pick one canonical host and make sitemap, robots, canonicals, and Vercel config agree.

---

## P2 — Content quality

### 11. 50 stale OS version mentions
Full file:line list is in `.claude/dev-loop-backlog.md` (cycle 22) — iOS 11–16, macOS Monterey references across ~30 batch files.

### 12. Brand-voice violations in guide content (banned by CLAUDE.md)
| Phrase | Hits |
|---|---|
| "simply" | ~156 |
| "it's easy" | ~83 |
| "seamless" | 17 |
| "leverage" | 3 |
| "utilize" | 1 |
| "Pro Tip" (should be "Quick Tip") | 1 |

A scripted sweep can fix most of these mechanically; add these words to a dev-loop check so new batches can't reintroduce them.

---

## P3 — Performance & repo hygiene

### 13. Supabase performance advisors
- 7 unindexed foreign keys (`agent_memory*`, `article_duplicates`, `content_categories`, `knowledge_manual_sources`)
- ~30 `auth_rls_initplan` warnings — wrap `auth.uid()` as `(select auth.uid())` in policies
- ~35 unused indexes (drop candidates once traffic confirms)
- ~15 tables with multiple permissive policies for the same action (consolidate)

### 14. Repo junk to delete
- 5 × `vite.config.ts.timestamp-*.mjs`
- `newprobe.txt`, `tsc_check_local.json`
- 3 × `src/data/*.stale.bak` (risk: scanners/globs may pick them up)
- `teksure .logo/` directory (space in name)

### 15. Sandbox-only note
`npm run build` fails in the audit sandbox only because `node_modules` was installed on macOS (missing `@rollup/rollup-linux-arm64-gnu`) — not a repo bug. TypeScript (`tsc --noEmit`) passes clean.

---

## Recommended order of attack
1. **Today:** Commit + merge + push (items 1–2). Nothing else matters while the live site is 12 weeks stale.
2. **This week:** Security fixes (4–7) — one SQL migration + Auth toggle + edge-function JWT settings; regenerate sitemap and wire into build (8).
3. **Next:** Orphaned-route index pages + tool reclassification (9), host canonicalization (10), OS/brand-word sweeps (11–12).
4. **Ongoing:** Supabase performance migration (13), repo cleanup (14), and consolidate automation to a single writer (3).
