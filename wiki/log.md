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

## [2026-04-04] ingest | April 2026 research ingest (batch 3)

Scraped additional sources (AARP, How-To Geek, Tom's Guide). Added 3 new wiki pages:
- **social-media-safety** — Facebook privacy settings, friends list protection, location services, safety tips
- **smart-home-basics** — Alexa/Google Home/HomeKit ecosystems, starter devices, tips for seniors
- **streaming-setup** — Roku/Fire TV/Apple TV setup, HDMI instructions, free streaming options

Added "Why It Works" explanations to 5 more guides (28 steps total): screenshot, copy-paste, save file, strong password, two-factor authentication.

## [2026-04-04] ingest | April 2026 research ingest (batch 2)

Scraped and ingested from 10+ authoritative sources (FTC, AARP, CISA, Apple Support, Google Support, Tom's Guide, How-To Geek, NIH/NCOA). Updated files:
- **src/data/wiki.ts** — Updated scam-prevention (recovery scams, fake law enforcement, AI content poisoning, $12.5B fraud stats), password-security (manager recommendations), wifi-networking (router placement, 2.4/5GHz), us-resources (smartphone adoption stats). Added online-shopping-safety and telehealth wiki pages.
- **src/components/TekBot.tsx** — Complete rewrite from chatbot to AI knowledge base. Now searches across 780+ guides and 20+ wiki pages instead of hardcoded 21-topic KB.

## [2026-04-05] architecture | Skill graph and MOC implementation (batch 5)

Implemented arscontexta-inspired Maps of Content (MOC) architecture. Added 3 hub pages that serve as navigation centers for topic clusters:
- **moc-staying-safe** — Connects safety-checklist, password-security, scam-prevention, online-banking-safety
- **moc-getting-started** — Step-by-step learning path from device basics to staying safe
- **moc-communication** — Email, video calling, messaging, voice assistants, social media

Updated cross-references across 8 existing wiki pages to link to MOC hubs. Created DESIGN.md (AI-readable design system). Upgraded SearchModal with knowledge base integration, keyboard navigation, and quick access links.

## [2026-04-05] ingest | April 2026 research ingest (batch 4)

Scraped AARP, FTC, CISA, Tom's Guide, How-To Geek for banking safety, smartphone guides, and digital literacy content. Added 3 new wiki pages:
- **online-banking-safety** — Phishing red flags, fraud reporting steps, AARP helpline, account monitoring
- **smartphone-basics** — iPhone vs Android, Easy Mode, essential skills, senior-friendly cell plans
- **digital-literacy** — Five core skills framework, confidence-building tips, free learning resources

Added "Why It Works" explanations to 9 more guides (39 steps): open-close-programs, use-taskbar, create-folder, use-microsoft-edge, manage-windows, restart-pc, setup-email, plus partial coverage on brightness and volume guides. Total: 16 guides, 77 steps with Why It Works content.

## [2026-04-05] architecture | LLM training dataset generator (batch 6)

Built `scripts/generate-training-data.mjs` — converts all TekSure guides + wiki pages into ChatML Q&A pairs for fine-tuning a custom LLM. Generator produces ~2,000 unique training examples from 1,037 guides and 38 wiki pages using 5 strategies: step-by-step guides, practical questions, individual step explanations, category-based rephrasing, and wiki section extraction. Output: JSONL file ready for Unsloth/LoRA fine-tuning.

Added `wiki/synthesis/llm-architecture-plan.md` documenting the full Karpathy-inspired pipeline: raw sources → compiled wiki → ChatML dataset → Unsloth + LoRA fine-tune → GGUF quantization → Ollama serving.

## [2026-04-04] ingest | April 2026 research ingest

Ingested research from 6 authoritative sources (FTC, AARP, CISA, Google, HHS/NCOA, senior tech sites). Updated files:
- **wiki/concepts/scam-prevention.md** — Added FTC 2026 fraud statistics ($15.9B losses, imposter scams #1, quadrupled losses for seniors)
- **wiki/concepts/password-security.md** — Added Google 7-step security checklist and CISA 4 core practices
- **wiki/concepts/health-technology.md** — Added telehealth accessibility stats (82% need help), library telehealth booths, platform accessibility features
- **wiki/concepts/device-basics.md** — Added common problems section (forgotten passwords, slow computers, email sync, printers, visual challenges)
- **wiki/entities/us-resources.md** — Added CISA Secure Our World program, Senior Planet update, AARP Tech Trends 2026 data
- **wiki/sources/research-2026-04.md** — Created new source page with all URLs and dates
- **src/data/wiki.ts** — Updated scam-prevention, password-security, and us-resources content in web UI data
