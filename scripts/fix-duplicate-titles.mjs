/**
 * fix-duplicate-titles.mjs
 *
 * Some topics were written up twice under different slugs — "phone-hotspot" and
 * "how-to-use-your-phone-as-a-wifi-hotspot-2026", for example. Two URLs with the
 * same title compete for the same query and split their ranking signals, so
 * neither ranks as well as one consolidated page would.
 *
 * Rather than delete a version (the content is fine, and inbound links may point
 * at either), this marks the weaker one with `canonicalSlug` pointing at the
 * stronger. GuideDetail turns that into <link rel="canonical">, which is the
 * standard way to tell a search engine "index the other one instead".
 *
 * "Stronger" = more substantive content (body length + number of steps).
 *
 *   node scripts/fix-duplicate-titles.mjs --dry-run
 *   node scripts/fix-duplicate-titles.mjs
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src', 'data');
const DRY = process.argv.includes('--dry-run');

// Parse each guide object well enough to compare weight. We deliberately use a
// coarse text scan rather than importing the TS module — this must run before
// any build step and without a TS toolchain.
const entries = [];
for (const file of readdirSync(DATA)) {
  if (!file.startsWith('guides') || !file.endsWith('.ts')) continue;
  const text = readFileSync(join(DATA, file), 'utf8');

  // Split on top-level object starts; good enough because every guide literal
  // begins with a `slug:` line.
  const slugRe = /\n\s*\{\s*\n?\s*slug:\s*['"`]([^'"`]+)['"`]/g;
  const marks = [];
  let m;
  while ((m = slugRe.exec(text)) !== null) marks.push({ slug: m[1], at: m.index });

  marks.forEach((mark, i) => {
    const chunk = text.slice(mark.at, marks[i + 1]?.at ?? text.length);
    // Match the closing quote of the SAME kind that opened the string, so a
    // title like "What's New in iOS 26" is not truncated at the apostrophe.
    // Getting this wrong silently grouped unrelated guides together.
    const title =
      /title:\s*(['"`])((?:\\.|(?!\1)[\s\S])*)\1/.exec(chunk)?.[2] ?? '';
    const steps = (chunk.match(/\btitle:\s*[`'"]/g) || []).length - 1;
    entries.push({
      file,
      slug: mark.slug,
      title: title.trim(),
      weight: chunk.length + Math.max(0, steps) * 200,
      hasCanonical: /canonicalSlug:/.test(chunk),
      at: mark.at,
    });
  });
}

// Group by title
const byTitle = new Map();
for (const e of entries) {
  if (!e.title) continue;
  if (!byTitle.has(e.title)) byTitle.set(e.title, []);
  byTitle.get(e.title).push(e);
}

const groups = [...byTitle.entries()].filter(([, list]) => list.length > 1);
if (!groups.length) {
  console.log('[fix-duplicate-titles] no duplicate guide titles — nothing to do');
  process.exit(0);
}

// Plan the edits: heaviest entry wins, the rest get canonicalSlug.
const edits = new Map(); // file → [{slug, canonicalSlug}]
let planned = 0;
for (const [title, list] of groups) {
  const sorted = [...list].sort((a, b) => b.weight - a.weight);
  const primary = sorted[0];
  for (const dup of sorted.slice(1)) {
    if (dup.hasCanonical) continue;
    if (!edits.has(dup.file)) edits.set(dup.file, []);
    edits.get(dup.file).push({ slug: dup.slug, canonicalSlug: primary.slug });
    planned++;
  }
  console.log(`  "${title.slice(0, 62)}"`);
  console.log(`     keep → ${primary.slug}`);
  for (const d of sorted.slice(1)) console.log(`     canonical → ${d.slug}`);
}

if (DRY) {
  console.log(`[fix-duplicate-titles] ${groups.length} duplicate groups, ${planned} canonical tags to add (dry run)`);
  process.exit(0);
}

// Apply: insert `canonicalSlug: '<primary>',` right after the dup's slug line.
let applied = 0;
for (const [file, list] of edits) {
  const path = join(DATA, file);
  let text = readFileSync(path, 'utf8');
  for (const { slug, canonicalSlug } of list) {
    const re = new RegExp(`(slug:\\s*['"\`]${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"\`],)`);
    if (!re.test(text)) continue;
    text = text.replace(re, `$1\n    canonicalSlug: '${canonicalSlug}',`);
    applied++;
  }
  writeFileSync(path, text);
}

console.log(`[fix-duplicate-titles] added ${applied} canonical tags across ${edits.size} files`);
