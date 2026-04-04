# TekSure Wiki — Log

Append-only record of wiki operations. Each entry starts with `## [date] operation | description`.

---

## [2026-04-04] init | Wiki created

Initial wiki structure created with:
- 10 concept pages covering core TekSure topics
- 7 entity pages for platforms, services, and resources
- 3 synthesis pages for curated learning paths
- 4 source index pages cataloging existing TekSure content
- Schema added to CLAUDE.md

Source material: 780+ guides, 106 glossary terms, 22 weekly tips, 15 scam types, 37 tools.

## [2026-04-04] ingest | Initial content synthesis

Synthesized all existing TekSure content into wiki pages:
- Concept pages built from guide categories and cross-referenced
- Entity pages built from platform-specific guides
- Scam prevention page built from ScamAlerts data
- Synthesis pages built from cross-category analysis

## [2026-04-04] ingest | April 2026 research ingest (batch 2)

Scraped and ingested from 10+ authoritative sources (FTC, AARP, CISA, Apple Support, Google Support, Tom's Guide, How-To Geek, NIH/NCOA). Updated files:
- **src/data/wiki.ts** — Updated scam-prevention (recovery scams, fake law enforcement, AI content poisoning, $12.5B fraud stats), password-security (manager recommendations), wifi-networking (router placement, 2.4/5GHz), us-resources (smartphone adoption stats). Added online-shopping-safety and telehealth wiki pages.
- **src/components/TekBot.tsx** — Complete rewrite from chatbot to AI knowledge base. Now searches across 780+ guides and 20+ wiki pages instead of hardcoded 21-topic KB.

## [2026-04-04] ingest | April 2026 research ingest

Ingested research from 6 authoritative sources (FTC, AARP, CISA, Google, HHS/NCOA, senior tech sites). Updated files:
- **wiki/concepts/scam-prevention.md** — Added FTC 2026 fraud statistics ($15.9B losses, imposter scams #1, quadrupled losses for seniors)
- **wiki/concepts/password-security.md** — Added Google 7-step security checklist and CISA 4 core practices
- **wiki/concepts/health-technology.md** — Added telehealth accessibility stats (82% need help), library telehealth booths, platform accessibility features
- **wiki/concepts/device-basics.md** — Added common problems section (forgotten passwords, slow computers, email sync, printers, visual challenges)
- **wiki/entities/us-resources.md** — Added CISA Secure Our World program, Senior Planet update, AARP Tech Trends 2026 data
- **wiki/sources/research-2026-04.md** — Created new source page with all URLs and dates
- **src/data/wiki.ts** — Updated scam-prevention, password-security, and us-resources content in web UI data
