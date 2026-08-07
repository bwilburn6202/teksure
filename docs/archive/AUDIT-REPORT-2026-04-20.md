# TekSure Codebase Audit Report — April 20, 2026

## Summary

This audit covers redundant code, documentation drift, audience misalignment, and dead-weight directories across the TekSure repository. Documentation inconsistencies have been **fixed in place**. Larger structural changes are documented below with rationale and recommended actions.

---

## 1. Sitemap Generators (3 found — keep 1)

| File | Method | Static Pages | Guide Coverage | Auto-runs? |
|------|--------|-------------|----------------|------------|
| `vite.config.ts` plugin | Regex scan of all `src/data/guides*.ts` | 67 pages | All batch files | Yes (on build) |
| `scripts/generate-sitemap.ts` | `import` from guides module | 42 pages | Core guides only (fragile) | Manual |
| `scripts/generate-sitemap.mjs` | Regex on `guides.ts` only | 14 pages | Core file only (misses ~2,100 batch guides) | Manual |

**Recommendation:** Keep the **Vite plugin** (vite.config.ts). It runs automatically on every build, scans all guide data files, and has the most complete page list. Delete both `scripts/generate-sitemap.ts` and `scripts/generate-sitemap.mjs`.

**Action required:**
```bash
rm scripts/generate-sitemap.ts scripts/generate-sitemap.mjs
```

---

## 2. Documentation Inconsistencies (FIXED)

All fixes applied to `CLAUDE.md` and `README.md`:

| Field | CLAUDE.md (was → now) | README.md (was → now) |
|-------|----------------------|----------------------|
| Guide count | 1,200+ → ~2,900 | 1,000+ → ~2,900 |
| Categories | (correct at 19) | 12 → 19 |
| Tools count | 68+ → 99+ | 25+ → 99+ |
| Routes | 161+ → 220+ | 115+ → 220+ |
| Pages | 80+ → 218+ | 63 → 218+ |
| Tool pages | — | 32 → 99+ |
| Edge functions | — | 7 → 20 |
| Migrations | — | 10 → 26 |
| Currency | £15 → $15 | (was already $15) |
| Batch progress | Batch 7 → Batch 93+ | — |

**Dead doc references fixed:** README linked to `docs/API.md`, `docs/ARCHITECTURE.md`, `docs/DEPLOYMENT.md`, and `docs/GUIDES.md` — none of these files exist (the `docs/` directory doesn't exist at all). Updated to point to actual files: CLAUDE.md, DESIGN.md, ANALYTICS-SETUP.md, TESTING_STRATEGY.md, and the master roadmap.

---

## 3. Scam/Security Pages — 7+ Pages with Naming Confusion

### Dedicated scam hub pages (5):
| Page | Route | Purpose |
|------|-------|---------|
| `ScamAlerts.tsx` | `/safety/scam-alerts` | Current scam warnings with red flags |
| `ScamDefenseCenter.tsx` | `/scam-defense` | Master scam resource + interactive checklist |
| `DeepfakeDefenseHub.tsx` | `/deepfake-defense` | Deepfake/AI fraud education |
| `PrivacyHub.tsx` | `/privacy` | Broader privacy/security resource center |
| `DataBrokerRemoval.tsx` | `/data-broker-removal` | Identity protection |

### Scam-related tools (6+):
| Tool | Route | Purpose |
|------|-------|---------|
| `IsThisAScam.tsx` | `/tools/is-this-a-scam` | Analyze suspicious messages |
| `ScamIqTest.tsx` | `/tools/scam-iq-test` | Interactive scam quiz |
| `PhishingScanner.tsx` | `/tools/phishing-scanner` | URL heuristic analysis |
| `ScamReport.tsx` | `/tools/scam-report` | Community scam reporting |
| `ScamSimulator.tsx` | `/tools/scam-simulator` | Practice identifying scams |
| `ScamPhoneDatabase.tsx` | `/tools/scam-phone-database` | Known scam number lookup |

### Duplicate guide topics:
- `safe-public-wifi` ↔ `connect-public-wifi-safely` (same topic)
- `spot-phishing-email` ↔ `identify-phishing-emails` (same topic)
- `ai-voice-scam-detection` exists as both guide and video script

**Recommendation:**
- **ScamAlerts** and **ScamDefenseCenter** overlap significantly. Merge ScamAlerts content into ScamDefenseCenter as a "Current Alerts" section, then redirect `/safety/scam-alerts` → `/scam-defense`.
- Consolidate duplicate guides: keep the more detailed version of each pair, redirect the other slug.
- The tools are all distinct enough to keep — they serve different interaction patterns (quiz vs. analyzer vs. reporter vs. database).

---

## 4. Device Comparison Tools (3 found — consolidate to 2)

| Tool | Route | Purpose |
|------|-------|---------|
| `DeviceComparison.tsx` | `/guides/device-comparison` | Broad category comparisons (phones vs tablets vs laptops) |
| `DeviceCompare.tsx` | `/tools/device-compare` | Side-by-side specific device data (iPhone vs Android, etc.) |
| `DeviceChooser.tsx` | `/tools/device-chooser` | Interactive questionnaire → device recommendation |

**Recommendation:** `DeviceComparison.tsx` and `DeviceCompare.tsx` overlap heavily — both show side-by-side device feature comparisons. Merge them into a single `/tools/device-compare` page that includes both the category overview and specific device drill-down. Keep `DeviceChooser.tsx` as-is (different interaction pattern: quiz → recommendation).

---

## 5. Speed/Internet Tools (3 found — consolidate to 2)

| Tool | Route | Purpose |
|------|-------|---------|
| `WifiSpeed.tsx` | `/tools/wifi-speed` | Speed test (embeds Fast.com) + Wi-Fi tips |
| `InternetSpeedAdvisor.tsx` | `/tools/internet-speed-advisor` | Simple calculator: users + activities → recommended Mbps |
| `InternetSpeedNeeds.tsx` | `/tools/internet-speed-needs` | Detailed calculator: granular inputs → Mbps breakdown |

Also related:
- `InternetPlanComparator.tsx` — provider plan comparison (distinct, keep)
- `PhonePlanComparator.tsx` — cellular plan comparison (distinct, keep)

**Recommendation:** `InternetSpeedAdvisor` and `InternetSpeedNeeds` do the same job with different detail levels. Merge into one tool with a "Simple / Detailed" toggle. Keep `WifiSpeed.tsx` separate (it's a live speed test, not a calculator).

---

## 6. OSINT/Pro Security Tools — Audience Mismatch

These pages contain professional penetration-testing and OSINT tools that conflict with TekSure's "seniors and beginners" mission:

| Page | Route | Content |
|------|-------|---------|
| `SecurityOsintTools.tsx` | `/tools/security-osint` | Red/Blue team modules, port scanners, exploit frameworks |
| `OsintFramework.tsx` | `/tools/osint-framework` | Shodan, Censys, IntelligenceX, dark web tools |
| `GoogleDorkGenerator.tsx` | `/tools/google-dork-generator` | Google search operator templates for finding exposed files |
| `CyberToolkit.tsx` | `/tools/cyber-toolkit` | Red/Blue/White/OSINT team tool aggregation |

Supporting data files: `src/data/security-osint-tools.ts`, `src/data/osint-tools.ts`

**Recommendation — two options:**

**Option A (Recommended): Remove entirely.** These tools serve a completely different audience (security professionals, penetration testers). They could create liability if misused by beginners, and Google Dork Generator specifically could enable finding exposed passwords and config files. Remove pages and data files.

**Option B: Gate behind an "Advanced" section.** Add a `/tools/advanced` landing page with disclaimers, require user acknowledgment before accessing. Add clear "This section is for IT professionals" warnings. Less clean but preserves the content.

---

## 7. knowledge-base/ and local-brain/ — Verdict: Useful, Keep

### knowledge-base/
- Contains wiki articles covering 11 content domains (streaming, smart home, banking, government, email, etc.)
- Has a content gap index, expansion plan, and schema docs
- The wiki content feeds the guide-writing pipeline
- **Verdict: Active reference material. Keep.**

### local-brain/
- Contains Ollama setup (README.md), CLI query tool (query.mjs), and local HTTP server (server.mjs)
- Part of the TekSure Brain feature — provides offline AI search capability
- Edge functions `brain-query` and `ollama-health` depend on this architecture
- **Verdict: Active infrastructure. Keep.** (Awaiting Hetzner server deployment per roadmap)

---

## 8. TekSure Content Strategy/ and teksure-updates/ — Consolidation Needed

### TekSure Content Strategy/
- Contains April 2026 content strategy document and a README
- Overlaps with the master roadmap's content planning sections
- **Verdict: Redundant with `TEKSURE-MASTER-ROADMAP-2026-04-19.md`.** The roadmap already covers content strategy, batch planning, and content gaps in more detail.
- **Recommendation:** Archive into `knowledge-base/wiki/` as a historical reference, then remove the top-level directory.

### teksure-updates/
- Contains only `src/data/guides.ts` — appears to be a stale copy of the main guides file
- **Verdict: Dead weight.**
- **Recommendation:** Delete entirely.

### Also redundant roadmap files:
- `TEKSURE-MASTER-PLAN.md` (13.5KB) — superseded by `TEKSURE-MASTER-ROADMAP-2026-04-19.md` (46.8KB)
- `teksure-roadmap-strategy.md` (1KB) — archived March-April plan fragment

**Recommendation:** Delete both. The master roadmap is the single source of truth.

---

## Cleanup Action Checklist

### Immediate (safe, no code impact):
- [x] Fix CLAUDE.md counts and currency — **DONE**
- [x] Fix README.md counts, categories, edge functions, migrations — **DONE**
- [x] Fix README.md dead doc references — **DONE**
- [ ] Delete `scripts/generate-sitemap.ts`
- [ ] Delete `scripts/generate-sitemap.mjs`
- [ ] Delete `teksure-updates/` directory
- [ ] Delete `TEKSURE-MASTER-PLAN.md`
- [ ] Delete `teksure-roadmap-strategy.md`
- [ ] Move `TekSure Content Strategy/` into `knowledge-base/wiki/archived-strategies/`

### Requires code changes (plan before executing):
- [ ] Merge `DeviceComparison.tsx` into `DeviceCompare.tsx`, add redirect
- [ ] Merge `InternetSpeedAdvisor.tsx` into `InternetSpeedNeeds.tsx` with Simple/Detailed toggle
- [ ] Merge `ScamAlerts.tsx` content into `ScamDefenseCenter.tsx`, add redirect
- [ ] Consolidate duplicate guides: `safe-public-wifi` / `connect-public-wifi-safely` and `spot-phishing-email` / `identify-phishing-emails`
- [ ] Remove or gate OSINT/pro tools (4 pages + 2 data files)

---

*Report generated: April 20, 2026*
