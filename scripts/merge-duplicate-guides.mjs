#!/usr/bin/env node
/**
 * merge-duplicate-guides.mjs
 *
 * Finds guides with duplicate normalized titles (same purpose, different slug)
 * across src/data/guides*.ts. Keeps the longest body in each cluster, deletes
 * the others, and emits a redirect map so /guides/{old-slug} → /guides/{new-slug}.
 *
 * Exit codes:
 *   0 — completed (writes files in place + prints redirect map)
 *   1 — error
 *
 * Usage:
 *   node scripts/merge-duplicate-guides.mjs              # dry run, prints plan
 *   node scripts/merge-duplicate-guides.mjs --apply      # writes file edits
 */
import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = 'src/data';
const APPLY = process.argv.includes('--apply');

function listGuideFiles() {
  return fs.readdirSync(DATA_DIR)
    .filter(f => f.startsWith('guides') && f.endsWith('.ts'))
    .map(f => path.join(DATA_DIR, f));
}

/**
 * Walk the file character by character, tracking string/comment/brace state.
 * Return the [start, end) span of each guide object — i.e. each `{...}`
 * directly inside the top-level exported array. Span is inclusive of the
 * trailing `,` if present so deleting it leaves clean syntax.
 */
function findGuideSpans(content) {
  const spans = [];
  let depth = 0, bracketDepth = 0;
  let inSingle = false, inDouble = false, inTemplate = false;
  let inLineComment = false, inBlockComment = false;
  let escape = false;
  let guideStart = -1;

  for (let i = 0; i < content.length; i++) {
    const c = content[i];
    const next = content[i + 1];

    if (escape) { escape = false; continue; }

    if (inLineComment) {
      if (c === '\n') inLineComment = false;
      continue;
    }
    if (inBlockComment) {
      if (c === '*' && next === '/') { inBlockComment = false; i++; }
      continue;
    }
    if (inSingle) {
      if (c === '\\') escape = true;
      else if (c === "'") inSingle = false;
      continue;
    }
    if (inDouble) {
      if (c === '\\') escape = true;
      else if (c === '"') inDouble = false;
      continue;
    }
    if (inTemplate) {
      if (c === '\\') escape = true;
      else if (c === '`') inTemplate = false;
      continue;
    }

    if (c === '/' && next === '/') { inLineComment = true; i++; continue; }
    if (c === '/' && next === '*') { inBlockComment = true; i++; continue; }
    if (c === "'") { inSingle = true; continue; }
    if (c === '"') { inDouble = true; continue; }
    if (c === '`') { inTemplate = true; continue; }

    if (c === '[') {
      bracketDepth++;
    } else if (c === ']') {
      bracketDepth--;
    } else if (c === '{') {
      depth++;
      if (depth === 1 && bracketDepth === 1 && guideStart === -1) {
        guideStart = i;
      }
    } else if (c === '}') {
      if (depth === 1 && bracketDepth === 1 && guideStart !== -1) {
        // End of the guide object. Include any trailing whitespace + comma.
        let end = i + 1;
        while (end < content.length && /\s/.test(content[end])) end++;
        if (content[end] === ',') end++;
        // Also swallow trailing newline so we don't leave blank lines.
        while (end < content.length && content[end] === ' ') end++;
        if (content[end] === '\n') end++;
        spans.push({ start: guideStart, end });
        guideStart = -1;
      }
      depth--;
    }
  }

  return spans;
}

function extractSlugAndTitle(text) {
  // Quote-aware: capture the opening quote, then match any chars up to the
  // matching close quote. Handles single quotes inside double-quoted titles
  // and vice versa (e.g. 'How to Fix "iPhone Storage Full"').
  const slugMatch = text.match(/slug:\s*(['"`])((?:\\.|(?!\1).)*?)\1/);
  const titleMatch = text.match(/title:\s*(['"`])((?:\\.|(?!\1).)*?)\1/);
  return {
    slug: slugMatch ? slugMatch[2] : null,
    title: titleMatch ? titleMatch[2] : null,
  };
}

function normalizeTitle(t) {
  return t.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

function main() {
  const files = listGuideFiles();
  const all = [];

  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    const spans = findGuideSpans(content);
    for (const s of spans) {
      const text = content.slice(s.start, s.end);
      const { slug, title } = extractSlugAndTitle(text);
      if (!slug || !title) continue;
      all.push({ file: f, start: s.start, end: s.end, slug, title, size: text.length });
    }
  }

  console.log(`Scanned ${files.length} files, found ${all.length} guide objects.`);

  // Group by normalized title.
  const groups = new Map();
  for (const g of all) {
    const key = normalizeTitle(g.title);
    if (key.length < 3) continue;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(g);
  }

  const dupGroups = [...groups.values()].filter(arr => arr.length > 1);
  console.log(`Duplicate-title clusters: ${dupGroups.length}`);

  // For each cluster: keep the LONGEST guide body. Mark the rest for deletion.
  const toDelete = [];   // { file, start, end, slug, deleteToCanonical }
  const redirects = [];  // { from: oldSlug, to: canonicalSlug }
  let bytesFreed = 0;

  for (const cluster of dupGroups) {
    cluster.sort((a, b) => b.size - a.size);
    const winner = cluster[0];
    for (let i = 1; i < cluster.length; i++) {
      const loser = cluster[i];
      // Skip if winner and loser have the same slug (already deduplicated).
      if (loser.slug === winner.slug) continue;
      toDelete.push({
        file: loser.file,
        start: loser.start,
        end: loser.end,
        slug: loser.slug,
        winnerSlug: winner.slug,
        title: loser.title,
      });
      redirects.push({ from: loser.slug, to: winner.slug });
      bytesFreed += (loser.end - loser.start);
    }
  }

  console.log(`Will delete ${toDelete.length} duplicate guide objects (${bytesFreed} bytes).`);
  console.log(`Will add ${redirects.length} slug redirects.`);
  console.log('');

  if (!APPLY) {
    console.log('--- Sample of planned deletions (first 20) ---');
    for (const d of toDelete.slice(0, 20)) {
      console.log(`  • ${d.slug} → ${d.winnerSlug}  [${d.title}]  (${d.file})`);
    }
    console.log('');
    console.log('Run with --apply to write changes.');
    process.exit(0);
  }

  // Apply: group deletions by file, sort by start descending, splice them out.
  const byFile = new Map();
  for (const d of toDelete) {
    if (!byFile.has(d.file)) byFile.set(d.file, []);
    byFile.get(d.file).push(d);
  }

  for (const [file, dels] of byFile) {
    dels.sort((a, b) => b.start - a.start);
    let content = fs.readFileSync(file, 'utf8');
    for (const d of dels) {
      content = content.slice(0, d.start) + content.slice(d.end);
    }
    fs.writeFileSync(file, content);
    console.log(`Wrote ${file} (${dels.length} guide(s) removed)`);
  }

  // Emit the redirect map as JSON for App.tsx wiring.
  const outPath = 'scripts/guide-redirects.json';
  fs.writeFileSync(outPath, JSON.stringify(redirects, null, 2));
  console.log(`Wrote ${outPath} (${redirects.length} redirects)`);
}

main();
