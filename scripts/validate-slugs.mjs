#!/usr/bin/env node
/**
 * validate-slugs.mjs
 *
 * Build-time guard against the recurring slug-collision class of bug.
 *
 * Scans every guide data file under src/data/guides*.ts for `slug: '...'`
 * entries. Fails with exit code 1 if any slug appears in more than one
 * location (across or within files). This stops the build before duplicate
 * routes can ship to production.
 *
 * History: slug regressions on Apr 8, Apr 13, and Apr 16 2026 each required
 * a remediation session. This check makes the problem impossible to reintroduce.
 *
 * Usage:
 *   node scripts/validate-slugs.mjs
 *   npm run validate:slugs
 *
 * Wired into the `build` script so CI fails on any duplicate.
 */

import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = 'src/data';

function collectGuideFiles() {
  return fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.startsWith('guides') && f.endsWith('.ts'))
    .map((f) => path.join(DATA_DIR, f));
}

function scan() {
  const files = collectGuideFiles();
  const slugMap = new Map();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const re = /slug:\s*['"`]([^'"`]+)['"`]/g;
    let match;
    while ((match = re.exec(content)) !== null) {
      const slug = match[1];
      const line = content.substring(0, match.index).split('\n').length;
      if (!slugMap.has(slug)) slugMap.set(slug, []);
      slugMap.get(slug).push({ file, line });
    }
  }

  return { files, slugMap };
}

function main() {
  const { files, slugMap } = scan();
  const total = [...slugMap.values()].reduce((sum, arr) => sum + arr.length, 0);
  const duplicates = [...slugMap.entries()].filter(([, v]) => v.length > 1);

  console.log(`[validate-slugs] scanned ${files.length} files, ${total} slugs, ${slugMap.size} unique`);

  if (duplicates.length === 0) {
    console.log('[validate-slugs] OK — no duplicate slugs');
    process.exit(0);
  }

  console.error(`[validate-slugs] FAIL — ${duplicates.length} duplicate slug(s):`);
  for (const [slug, locations] of duplicates) {
    console.error(`  • ${slug}`);
    for (const { file, line } of locations) {
      console.error(`      ${file}:${line}`);
    }
  }
  console.error('');
  console.error('Each slug must appear exactly once across all guide data files.');
  console.error('Rename one of the collisions or remove the duplicate entry.');
  process.exit(1);
}

main();
