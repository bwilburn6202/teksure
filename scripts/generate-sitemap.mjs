/**
 * generate-sitemap.mjs
 * ---------------------
 * Regenerates public/sitemap.xml from:
 *   1. STATIC_PAGES below (top-level routes)
 *   2. Every guide slug across src/data/guides*.ts  →  /guides/<slug>
 *   3. Every concrete route defined in src/App.tsx (tools, hubs, etc.)
 *
 * Runs automatically via the `prebuild` npm script, so the sitemap can
 * never go stale again. Can also be run manually:
 *   node scripts/generate-sitemap.mjs
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readNavigateRedirects } from './generate-redirects.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
// www is the canonical host — the apex domain 301s to www at the edge.
const BASE_URL = 'https://www.teksure.com';
const _d = new Date();
const TODAY = `${_d.getFullYear()}-${String(_d.getMonth() + 1).padStart(2, '0')}-${String(_d.getDate()).padStart(2, '0')}`;

// Paths never included (auth-only, payments, API — mirrors robots.txt)
// `/memory` is a per-user TekBot memory dashboard — it renders empty for a
// crawler. `/opportunity-dashboard` is an internal business-model comparison
// chart, off-topic for a senior tech-help site. Both were unlinked from
// anywhere on the site yet submitted in the sitemap, which is the definition
// of an orphaned thin page. Excluded 2026-08-12.
//
// Added 2026-09-02: `login` and `signup` are auth forms, and `notifications`,
// `my-devices`, `achievements`, `journal` and `certificate` render per-user
// state that is empty for a crawler. All seven were being submitted for
// indexing. `forum/new` is a compose form; /forum itself stays in.
const EXCLUDE =
  /^\/(admin|customer|tech|profile|my-requests|my-path|favorites|setup|payment|api|memory|opportunity-dashboard|login|signup|notifications|my-devices|achievements|journal|certificate|forum\/new)(\/|$)/;

// ── Static pages with explicit priorities ─────────────────────
const STATIC_PAGES = [
  { path: '/',              changefreq: 'weekly',  priority: '1.0' },
  { path: '/guides',        changefreq: 'daily',   priority: '0.9' },
  { path: '/tools',         changefreq: 'weekly',  priority: '0.9' },
  { path: '/quick-fixes',   changefreq: 'weekly',  priority: '0.8' },
  { path: '/tips',          changefreq: 'weekly',  priority: '0.8' },
  { path: '/safety',        changefreq: 'weekly',  priority: '0.8' },
  { path: '/scam-defense',  changefreq: 'weekly',  priority: '0.8' },
  { path: '/guias',         changefreq: 'weekly',  priority: '0.8' },
  { path: '/free-resources',changefreq: 'weekly',  priority: '0.7' },
  { path: '/glossary',      changefreq: 'monthly', priority: '0.7' },
  { path: '/news',          changefreq: 'daily',   priority: '0.7' },
  { path: '/blog',          changefreq: 'weekly',  priority: '0.7' },
  { path: '/book',          changefreq: 'monthly', priority: '0.7' },
  { path: '/brain',         changefreq: 'monthly', priority: '0.6' },
  { path: '/how-it-works',  changefreq: 'monthly', priority: '0.6' },
  { path: '/pricing',       changefreq: 'monthly', priority: '0.6' },
  { path: '/about',         changefreq: 'monthly', priority: '0.5' },
  { path: '/roadmap',       changefreq: 'weekly',  priority: '0.5' },
  // Legal pages. Low priority for ranking, but they must be crawlable and
  // reachable — Stripe expects terms and a refund policy to be discoverable
  // from the site, and customers look for them before paying.
  { path: '/terms',         changefreq: 'yearly',  priority: '0.3' },
  { path: '/refund-policy', changefreq: 'yearly',  priority: '0.3' },
  { path: '/privacy',       changefreq: 'yearly',  priority: '0.3' },
];

// ── lastmod manifest ──────────────────────────────────────────
// A sitemap that restamps every <lastmod> to the build date on every deploy is
// telling crawlers that 7,128 pages changed today when none of them did. Do
// that daily and the field stops carrying information, so a guide that really
// was rewritten gets no more attention than one untouched since February.
//
// So each URL is paired with a hash of the source that produces it, stored in
// scripts/sitemap-lastmod.json (committed). If the hash is unchanged since the
// last run, the recorded date is carried forward. Only new or genuinely
// changed URLs get today's date.
//
// The manifest is rewritten on every build but only the COMMITTED copy is read
// at deploy time, so commit it alongside content changes — otherwise a changed
// guide re-stamps today's date on each deploy until the manifest catches up.
// (That churn is limited to the URLs that actually changed, so it is safe.)
//
// Deliberately hash-based rather than git-based: Vercel builds from a shallow
// clone, where `git log -1 <file>` returns the deploy commit for every file —
// which would restamp everything and reintroduce the exact bug this fixes.
const MANIFEST_PATH = join(__dirname, 'sitemap-lastmod.json');
let manifest = {};
if (existsSync(MANIFEST_PATH)) {
  try {
    manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));
  } catch {
    console.warn('[generate-sitemap] lastmod manifest unreadable — rebuilding it');
    manifest = {};
  }
} else {
  // First run: seed dates from the sitemap already committed, so introducing
  // the manifest does not itself restamp all 7,128 URLs to today. Hashes are
  // left null, which means the first run after this records a hash without
  // moving the date; only the run after that can advance it.
  const existing = join(ROOT, 'public', 'sitemap.xml');
  if (existsSync(existing)) {
    const xmlText = readFileSync(existing, 'utf8');
    for (const m of xmlText.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)) {
      manifest[m[1]] = { h: null, d: m[2] };
    }
    console.log(`[generate-sitemap] seeded lastmod manifest from ${Object.keys(manifest).length} existing sitemap URLs`);
  }
}
const nextManifest = {};

function sha1(text) {
  return createHash('sha1').update(text).digest('hex').slice(0, 16);
}

/** Hash of a source file, or null when the file cannot be resolved. */
function fileHash(relPath) {
  const abs = join(ROOT, relPath);
  if (!existsSync(abs)) return null;
  return sha1(readFileSync(abs, 'utf8'));
}

/**
 * Date to advertise for `loc`. `hash` fingerprints the content behind the URL;
 * pass null when no source file could be resolved, in which case the recorded
 * date is held rather than refreshed.
 */
function lastmodFor(loc, hash) {
  const prev = manifest[loc];
  if (hash === null) {
    const date = prev?.d ?? TODAY;
    nextManifest[loc] = { h: prev?.h ?? null, d: date };
    return date;
  }
  // prev.h === null means the entry was seeded from the existing sitemap and
  // has no hash yet: adopt the hash without treating it as a change.
  const unchanged = prev && (prev.h === hash || prev.h === null);
  const date = unchanged ? prev.d : TODAY;
  nextManifest[loc] = { h: hash, d: date };
  return date;
}

// ── 1. Guide slugs from every data file ───────────────────────
const dataDir = join(ROOT, 'src', 'data');
const guideSlugs = new Set();
// `slugSourceHash` maps each slug to a hash of the batch file that defines it.
// That hash is what decides whether the URL's <lastmod> may advance — see the
// lastmod manifest section below.
const slugSourceHash = new Map();
for (const f of readdirSync(dataDir)) {
  if (!f.startsWith('guides') || !f.endsWith('.ts')) continue;
  const content = readFileSync(join(dataDir, f), 'utf8');
  const fileHash = sha1(content);
  for (const m of content.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)) {
    guideSlugs.add(m[1]);
    slugSourceHash.set(m[1], fileHash);
  }
}

// ── 2. Concrete routes from App.tsx ───────────────────────────
const appTsx = readFileSync(join(ROOT, 'src', 'App.tsx'), 'utf8');
const appRoutes = new Set();
// A sitemap must not advertise URLs that redirect — those are served as 308s
// (scripts/generate-redirects.mjs) and listing them wastes crawl budget.
const redirectSources = new Set(readNavigateRedirects().map((r) => r.source));
for (const m of appTsx.matchAll(/path="(\/[^"]*)"/g)) {
  const p = m[1];
  if (p.includes(':') || p.includes('*')) continue; // dynamic/wildcard
  if (EXCLUDE.test(p)) continue;
  if (redirectSources.has(p)) continue;
  appRoutes.add(p);
}

// Map each concrete route to the page component file behind it, so a route's
// <lastmod> tracks edits to that page rather than the deploy date.
const importPaths = new Map(); // component name -> relative source path
for (const m of appTsx.matchAll(/(?:^|\n)\s*import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g)) {
  importPaths.set(m[1], m[2]);
}
for (const m of appTsx.matchAll(/const\s+(\w+)\s*=\s*lazy\(\s*\(\)\s*=>\s*import\(\s*['"]([^'"]+)['"]/g)) {
  importPaths.set(m[1], m[2]);
}
function resolveSource(spec) {
  if (!spec) return null;
  const rel = spec.startsWith('@/') ? `src/${spec.slice(2)}` : spec.startsWith('./') ? `src/${spec.slice(2)}` : null;
  if (!rel) return null;
  for (const ext of ['.tsx', '.ts', '/index.tsx', '/index.ts']) {
    const h = fileHash(rel + ext);
    if (h) return h;
  }
  return null;
}
const routeHash = new Map();
for (const m of appTsx.matchAll(/path="(\/[^"]*)"[^>]*element=\{\s*<(\w+)/g)) {
  routeHash.set(m[1], resolveSource(importPaths.get(m[2])));
}

// ── Build XML ─────────────────────────────────────────────────
function buildEntry({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const seen = new Set();
const entries = [];

for (const page of STATIC_PAGES) {
  // STATIC_PAGES used to skip both filters that the App.tsx routes go through,
  // so a hand-listed path stayed in the sitemap after it became a redirect.
  // That is how /book kept being submitted while the edge served it a 308 to
  // /get-help (found 2026-09-02). Apply the same two rules here.
  if (EXCLUDE.test(page.path)) continue;
  if (redirectSources.has(page.path)) continue;
  seen.add(page.path);
  const loc = `${BASE_URL}${page.path}`;
  entries.push(buildEntry({ loc, lastmod: lastmodFor(loc, routeHash.get(page.path) ?? null), changefreq: page.changefreq, priority: page.priority }));
}

for (const p of [...appRoutes].sort()) {
  if (seen.has(p)) continue;
  seen.add(p);
  const isTool = p.startsWith('/tools/');
  const loc = `${BASE_URL}${p}`;
  entries.push(buildEntry({ loc, lastmod: lastmodFor(loc, routeHash.get(p) ?? null), changefreq: 'monthly', priority: isTool ? '0.6' : '0.5' }));
}

for (const slug of [...guideSlugs].sort()) {
  const p = `/guides/${slug}`;
  if (seen.has(p)) continue;
  seen.add(p);
  const loc = `${BASE_URL}${p}`;
  entries.push(buildEntry({ loc, lastmod: lastmodFor(loc, slugSourceHash.get(slug) ?? null), changefreq: 'monthly', priority: '0.7' }));
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

writeFileSync(join(ROOT, 'public', 'sitemap.xml'), xml);
writeFileSync(MANIFEST_PATH, JSON.stringify(nextManifest, null, 0) + '\n');

const refreshed = Object.values(nextManifest).filter((e) => e.d === TODAY).length;
console.log(`[generate-sitemap] wrote ${entries.length} URLs (${guideSlugs.size} guides, ${appRoutes.size} app routes) to public/sitemap.xml`);
console.log(`[generate-sitemap] lastmod: ${refreshed} dated ${TODAY}, ${entries.length - refreshed} carried forward`);
