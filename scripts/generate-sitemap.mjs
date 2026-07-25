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

import { readFileSync, writeFileSync, readdirSync } from 'fs';
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
const EXCLUDE = /^\/(admin|customer|tech|profile|my-requests|my-path|favorites|setup|payment|api)(\/|$)/;

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
];

// ── 1. Guide slugs from every data file ───────────────────────
const dataDir = join(ROOT, 'src', 'data');
const guideSlugs = new Set();
for (const f of readdirSync(dataDir)) {
  if (!f.startsWith('guides') || !f.endsWith('.ts')) continue;
  const content = readFileSync(join(dataDir, f), 'utf8');
  for (const m of content.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)) {
    guideSlugs.add(m[1]);
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
  seen.add(page.path);
  entries.push(buildEntry({ loc: `${BASE_URL}${page.path}`, lastmod: TODAY, changefreq: page.changefreq, priority: page.priority }));
}

for (const p of [...appRoutes].sort()) {
  if (seen.has(p)) continue;
  seen.add(p);
  const isTool = p.startsWith('/tools/');
  entries.push(buildEntry({ loc: `${BASE_URL}${p}`, lastmod: TODAY, changefreq: 'monthly', priority: isTool ? '0.6' : '0.5' }));
}

for (const slug of [...guideSlugs].sort()) {
  const p = `/guides/${slug}`;
  if (seen.has(p)) continue;
  seen.add(p);
  entries.push(buildEntry({ loc: `${BASE_URL}${p}`, lastmod: TODAY, changefreq: 'monthly', priority: '0.7' }));
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

writeFileSync(join(ROOT, 'public', 'sitemap.xml'), xml);
console.log(`[generate-sitemap] wrote ${entries.length} URLs (${guideSlugs.size} guides, ${appRoutes.size} app routes) to public/sitemap.xml`);
