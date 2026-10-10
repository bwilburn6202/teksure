/**
 * generate-guide-data.mjs — split the guide library for the browser.
 *
 * Run with tsx (it imports the TypeScript guide sources directly):
 *   node --import tsx scripts/generate-guide-data.mjs
 *
 * Writes two things:
 *
 *   src/data/guide-index.json      Every guide minus body/steps/tip/warning — what
 *                                  list and filter pages need.
 *                                  ~1.9 MB raw / ~430 KB gzipped. Committed, so
 *                                  typecheck and tests work without a build.
 *
 *   public/guide-data/<slug>.json  One full guide per file (~4 KB median) plus its
 *                                  prev/next/related links. Fetched
 *                                  by /guides/:slug on client-side navigation.
 *                                  Git-ignored; regenerated in predev and prebuild.
 *
 * Why: every guide page used to download the whole library — 17.5 MB raw,
 * ~5.6 MB gzipped — to show one guide. Prerendered guide HTML embeds its own
 * guide's JSON, so a first visit needs no fetch at all.
 *
 * The index file must not be named guides-*: vite.config.ts sends any module
 * whose path contains "src/data/guides" to the giant guide-data chunk.
 */
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const { guides } = await import(join(ROOT, 'src', 'data', 'guides.ts'));
// Same helpers the server renderer uses, so prerendered and fetched guides match.
const { summarizeGuide, buildGuideNav } = await import(join(ROOT, 'src', 'lib', 'guide-nav.ts'));

const index = guides.map(summarizeGuide);
writeFileSync(join(ROOT, 'src', 'data', 'guide-index.json'), JSON.stringify(index) + '\n');

const outDir = join(ROOT, 'public', 'guide-data');
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
guides.forEach((g, i) => {
  writeFileSync(join(outDir, `${g.slug}.json`), JSON.stringify({ ...g, nav: buildGuideNav(guides, i) }));
});

console.log(`[guide-data] ${guides.length} guides -> src/data/guide-index.json + public/guide-data/*.json`);
