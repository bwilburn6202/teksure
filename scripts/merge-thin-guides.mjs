#!/usr/bin/env node
/**
 * merge-thin-guides.mjs
 *
 * merge-duplicate-guides.mjs catches guides whose *titles* normalize to the same
 * string. It does not catch the more common case: a 30-word stub and a 1,400-word
 * guide covering the same topic under different titles ("How to Use Siri" next to
 * "How to Use Siri on Your iPhone (2026)"). Those compete with each other in search
 * and the stub always loses — while still being the page a reader might land on.
 *
 * This takes an explicit, human-reviewed map of thin-slug → canonical-slug, deletes
 * the thin guide objects, and writes the redirects into src/data/guide-redirects.ts
 * so /guides/<old> resolves to the guide that actually answers the question.
 *
 * The map is explicit on purpose. Automatic topic matching produced plausible-looking
 * but wrong merges (a VPN guide onto a OneDrive guide, a romance-scam guide onto an
 * investment-scam guide, an Apple Watch guide onto Apple Pay), so every pair here was
 * read by a human first. Do not generate this file.
 *
 * Usage:
 *   node scripts/merge-thin-guides.mjs <map.json>            # dry run, prints plan
 *   node scripts/merge-thin-guides.mjs <map.json> --apply    # writes file edits
 */
import fs from 'node:fs';
import path from 'node:path';
import { findGuideSpans, listGuideFiles } from './merge-duplicate-guides.mjs';

const APPLY = process.argv.includes('--apply');
const MAP_PATH = process.argv[2];
if (!MAP_PATH || MAP_PATH.startsWith('--')) {
  console.error('usage: node scripts/merge-thin-guides.mjs <map.json> [--apply]');
  process.exit(1);
}
const map = JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'));

/** Add entries to src/data/guide-redirects.ts, skipping ones already present. */
export function writeGuideRedirects(pairs) {
  const p = path.join('src', 'data', 'guide-redirects.ts');
  const src = fs.readFileSync(p, 'utf8');
  const existing = new Set([...src.matchAll(/^\s*"([^"]+)":/gm)].map((m) => m[1]));
  const added = pairs.filter(([from]) => !existing.has(from));
  if (!added.length) return 0;
  const lines = added
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([from, to]) => `  "${from}": "${to}",\n`)
    .join('');
  fs.writeFileSync(p, src.replace(/\n\};\s*$/, `\n${lines}};\n`));
  return added.length;
}

const allSlugs = new Set();
const byFile = new Map();
for (const file of listGuideFiles()) {
  const content = fs.readFileSync(file, 'utf8');
  const spans = findGuideSpans(content).map((s) => {
    const text = content.slice(s.start, s.end);
    return { ...s, slug: (text.match(/slug:\s*['"`]([^'"`]+)['"`]/) ?? [])[1] };
  });
  for (const s of spans) if (s.slug) allSlugs.add(s.slug);
  byFile.set(file, { content, spans });
}

const missing = Object.entries(map).flatMap(([f, t]) =>
  [!allSlugs.has(f) && `source ${f}`, !allSlugs.has(t) && `destination ${t}`].filter(Boolean)
);
if (missing.length) {
  console.error('[merge-thin-guides] slugs not found:\n  ' + missing.join('\n  '));
  process.exit(1);
}
const chained = Object.keys(map).filter((k) => Object.values(map).includes(k));
if (chained.length) {
  console.error('[merge-thin-guides] redirect chain — these are both a source and a destination:\n  ' + chained.join('\n  '));
  process.exit(1);
}

let removed = 0;
for (const [file, { content, spans }] of byFile) {
  const doomed = spans.filter((s) => map[s.slug]).sort((a, b) => b.start - a.start);
  if (!doomed.length) continue;
  let out = content;
  for (const s of doomed) out = out.slice(0, s.start) + out.slice(s.end);
  removed += doomed.length;
  console.log(`  ${file}: ${doomed.length} — ${doomed.map((d) => d.slug).join(', ')}`);
  if (APPLY) fs.writeFileSync(file, out);
}

console.log(`\n[merge-thin-guides] ${removed} thin guides ${APPLY ? 'removed' : 'would be removed'}`);
if (APPLY) {
  const n = writeGuideRedirects(Object.entries(map));
  console.log(`[merge-thin-guides] added ${n} redirects to src/data/guide-redirects.ts`);
} else {
  console.log('[merge-thin-guides] dry run — pass --apply to write');
}
