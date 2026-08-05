# TekSure — Walkthrough as a 70-Year-Old User

**Date:** 2026-08-04
**Scope reviewed:** homepage + `/site-index` (235 pages, 106 tools, 26 guide categories, 34 audience hubs). Not every individual page was opened.

**The one-sentence verdict:** The site knows a great deal and has no idea what it wants me to do first. It reads like a search index, not like help.

---

## What I would actually use (KEEP — this is the real product)

If you deleted everything else, the site would still do its job.

### Safety — the strongest thing you have
- `/tools/is-this-a-scam` — paste a message, get an answer. This is the killer feature.
- `/tools/scam-phone-database` — "who called me?"
- `/tools/url-safety-checker`
- `/tools/data-breach-checker`
- `/scam-defense` — the hub these all live under
- `/safety/scam-alerts`

### Get unstuck right now
- `/get-help` — real human help. This is the reason to trust you.
- `/emergency-help`
- `/tools/account-recovery` — locked out is the #1 panic moment
- `/tools/wifi-password-finder`
- `/tools/printer-troubleshooter`
- `/tools/wifi-troubleshooter`
- `/tools/error-decoder` and `/tools/notification-decoder` — "what is this box asking me?"
- `/tools/phone-first-aid`

### Protect myself
- `/tools/password-manager`
- `/tools/two-factor-setup`
- `/tools/password-generator` (ONE of them)
- `/tools/privacy-audit`

### Learn at my pace
- `/guides` — but with 8 categories, not 26
- `/senior-tech-path`
- `/accessibility`
- `/glossary`
- `/tools/practice-mode` — a safe sandbox is genuinely great for this audience
- `/reference-cards` — printables are underrated for 70+

### Setup moments
- `/tools/new-phone-setup`
- `/tools/backup-wizard`
- `/tools/smart-tv-setup`
- `/tools/router-setup-wizard`

**That's roughly 25 tools and one guide library. You have 106 tools and 235 pages.**

---

## DELETE — wrong audience, actively harmful to trust

These tell a nervous 70-year-old "this site isn't for me."

| Page | Why |
|---|---|
| `/tools/google-dork-generator` | Advanced search-operator hacking. Nobody in the target audience knows this term. |
| `/tools/osint-framework` | Open-source *intelligence*. This is investigator/hacker tooling. |
| `/tools/security-osint` | Same, duplicated. |
| `/tools/cyber-toolkit` | Vague "collection of tools" — no user goal. |
| `/tools/llm-knowledge-base` + `/llm-knowledge-base` | Duplicated, and "LLM" is jargon you promised not to use. |
| `/tools/doc-browser` | Browsing your own documentation is a dev tool. |
| `/tools/receipt-scanner-demo` | A demo of someone else's product. Not help. |
| `/tools/accessibility-check` | Checks a page for a11y issues — that's a developer tool, not a senior tool. |
| `/roadmap`, `/changelog`, `/this-week` | Company-facing. No user over 60 wants your changelog. |
| `/memory` ("what TekSure has learned about your preferences") | Reads as surveillance to a privacy-anxious audience, right next to "No tracking." |

---

## MERGE — you have the same tool four times

This is the single biggest problem. When I see six ways to clean up storage, I don't feel served, I feel lost and I leave.

| Cluster | Duplicates | Should be |
|---|---|---|
| **Internet speed** | `internet-speed-advisor`, `internet-speed-doctor`, `internet-speed-needs`, `wifi-speed` | **2**: "Test my speed" + "Is my internet slow?" |
| **Cleanup / storage** | `storage-cleanup`, `storage-optimizer`, `phone-cleanup`, `digital-cleanup`, `app-cleanup`, `computer-cleanup-wizard` | **2**: "Free up space on my phone" + "…on my computer" |
| **Device compare** | `device-compare`, `device-comparison` — the index literally labels the second "A second, simpler device comparison tool" | **1** |
| **Device health** | `health-check`, `device-health`, `tech-health-quiz` | **1** |
| **Quizzes** | `tech-comfort-quiz`, `confidence-score`, `digital-literacy-assessment`, `tech-glossary-quiz`, `tech-health-quiz`, `scam-iq-test` | **2**: one skills check, one scam quiz |
| **Passwords** | `password-generator`, `password-phrase-generator`, `password-strength` | **1** tool with tabs |
| **Reference cards** | `reference-cards`, `quick-reference-cards`, `tools/quick-reference`, `checklists` | **1** printables page |
| **Tips** | `/tips`, `/weekly-tips`, `/tech-problem-of-week`, `/this-week` | **1** |
| **AI assistant** | `/brain`, `/tekbrain`, `/tekbrain/chat`, `/ai-tutor`, `/ai-literacy-hub` | **1** front door named one thing |
| **Digital footprint** | `digital-footprint-scanner`, `data-leak-dashboard`, `data-breach-checker` | **1–2** |
| **Caregiver** | `/caregiver-hub`, `/caregiver` | **1** |

**Rough count: ~106 tools → ~55.** Nothing of value is lost.

---

## SEGREGATE — real content, wrong shelf

### The 34 audience hubs
Most of these look like SEO landing pages wearing a hub costume. A person doesn't arrive thinking "I need the Empty Nest Tech Hub." They think "how do I video call my grandkids."

Move behind a single **"Life situations"** page, don't put them in navigation:
`empty-nest-tech`, `first-apartment-tech`, `new-grandparent-tech`, `job-search-tech-hub`, `esl-tech-hub`, `rural-tech-hub`, `small-business-tech-hub`, `moving-tech`, `divorce-tech-hub`, `retirement-tech`, `digital-detox`, `gift-guide`

**Handle differently — these are grief pages:** `bereavement-tech`, `widowhood-tech-hub`, `dementia-care-tech`, `divorce-tech-hub`. If they stay, they need real editorial care and a gentle tone, not a hub grid. If they're thin, they're worse than nothing — someone arrives in the worst week of their life and finds a stub. Verify content depth before keeping any of them.

### Account / gamification features
`/achievements`, `/certificate`, `/progress-report`, `/my-path`, `/journal`, `/favorites`, `/notifications`, `/my-devices`, `/memory`

Gamification is built for a 25-year-old. Seniors overwhelmingly do not want badges or a tech journal — and every one of these is a signed-in feature competing for space with the free help that actually converts. Collapse to: **Favorites + My Requests.** Everything else goes or hides behind the dashboard.

### Advanced material
If you want to keep the OSINT/security-research content for SEO, put it under a clearly-labeled `/advanced` section that never appears in main nav. Don't mix it with "how do I text a photo."

---

## Bugs and inconsistencies I hit

1. **Broken link:** in `/site-index`, "Terms of Use" points to `/privacy`, not `/terms`.
2. **Two navigation bars.** Top: Learn / Tools / Safety / Ask / Help. Below it: Guides / Tools / More. "Learn" vs "Guides" — are those different? I don't know. Pick one nav.
3. **Naming collision:** "Ask" → `/brain`, but the homepage button says "Ask TekBrain" → `/tekbrain`. Two names, two destinations, same idea.
4. **Count mismatch:** homepage says "2,500+ free guides," site index category totals sum to ~4,000+, tools hub description says "150+ free tools" while the index says 106. Pick real numbers.
5. **Footer mismatch:** "Family Tech Planner" links to `/family-sharing`, but `/tools/family-tech-planner` also exists.
6. **Mixed money message:** "Free forever" on the site index, with **Pricing** and **Refunds** in the footer. Say plainly: guides and tools are free, human technician help costs $X.
7. **Empty categories:** "Working from Home (1)". A category with one guide is a broken promise. Also thin: Tech Terms Explained (13), Travel (13), Online Privacy (18), AI In Depth (19). Fold them into larger categories until they have 25+.
8. **26 guide categories** is roughly 3x what anyone can scan. Target 8–10.

---

## What I'd do first (in order)

1. Fix the `/terms` link and the count mismatches — 30 minutes, credibility win.
2. Collapse the duplicate tool clusters. 106 → ~55.
3. Delete the OSINT/dork/dev-tool set.
4. Collapse 26 guide categories → 8.
5. Pick one name for the AI helper and kill the other three routes.
6. Pull the 34 audience hubs out of nav into one "Life situations" page.
7. Retire the gamification pages.
8. Then, and only then, add new content.

**The core insight:** the site's problem isn't that it lacks anything. It's that everything is present at equal weight, so nothing is findable. For an audience whose defining trait is *fear of getting it wrong*, an overwhelming menu is the same as no help at all.
