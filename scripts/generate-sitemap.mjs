/**
 * generate-sitemap.mjs
 * ---------------------
 * Reads guides[] from src/data/guides.ts and regenerates public/sitemap.xml.
 * Run manually or hook into the build process:
 *   node scripts/generate-sitemap.mjs
 *
 * Static pages and guide slugs are combined into a single sitemap.
 * Update STATIC_PAGES below when new top-level routes are added.
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BASE_URL = 'https://teksure.com';
const _d = new Date();
const TODAY = `${_d.getFullYear()}-${String(_d.getMonth() + 1).padStart(2, '0')}-${String(_d.getDate()).padStart(2, '0')}`;

// ── Static pages ──────────────────────────────────────────────
const STATIC_PAGES = [
  { path: '/',              changefreq: 'weekly',  priority: '1.0' },
  { path: '/guides',        changefreq: 'weekly',  priority: '0.9' },
  { path: '/quick-fixes',   changefreq: 'weekly',  priority: '0.8' },
  { path: '/tips',          changefreq: 'weekly',  priority: '0.8' },
  { path: '/safety',        changefreq: 'weekly',  priority: '0.8' },
  { path: '/tools',         changefreq: 'monthly', priority: '0.8' },
  { path: '/glossary',      changefreq: 'monthly', priority: '0.7' },
  { path: '/news',          changefreq: 'daily',   priority: '0.7' },
  { path: '/blog',          changefreq: 'weekly',  priority: '0.7' },
  { path: '/book',          changefreq: 'monthly', priority: '0.7' },
  { path: '/how-it-works',  changefreq: 'monthly', priority: '0.6' },
  { path: '/pricing',       changefreq: 'monthly', priority: '0.6' },
  { path: '/about',         changefreq: 'monthly', priority: '0.5' },
  { path: '/roadmap',       changefreq: 'weekly',  priority: '0.5' },
];

// ── Extract guide slugs from guides.ts ────────────────────────
function extractSlugs(guidesTs) {
  const matches = [...guidesTs.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)];
  return matches.map(m => m[1]);
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

function buildSitemap(staticPages, slugs) {
  const staticEntries = staticPages.map(p =>
    buildEntry({ loc: `${BASE_URL}${p.path}`, lastmod: TODAY, changefreq: p.changefreq, priority: p.priority })
  );

  const guideEntries = slugs.map(slug =>
    buildEntry({ loc: `${BASE_URL}/guides/${slug}`, lastmod: TODAY, changefreq: 'monthly', priority: '0.6' })
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticEntries,
    ...guideEntries,
    '</urlset>',
    '',
  ].join('\n');
}

// ── Main ──────────────────────────────────────────────────────
const guidesTs = readFileSync(join(ROOT, 'src/data/guides.ts'), 'utf8');
const slugs = extractSlugs(guidesTs);
const xml = buildSitemap(STATIC_PAGES, slugs);

writeFileSync(join(ROOT, 'public/sitemap.xml'), xml);
console.log(`✅  sitemap.xml regenerated — ${STATIC_PAGES.length} static pages + ${slugs.length} guides`);
