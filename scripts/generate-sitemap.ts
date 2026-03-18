/**
 * Sitemap generator script.
 * Run: npx tsx scripts/generate-sitemap.ts
 * Reads all guide slugs from src/data/guides.ts and generates public/sitemap.xml
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://teksure.com';
const LASTMOD = '2026-03-17';

// Main pages with priority and changefreq
const mainPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/guides', priority: '0.8', changefreq: 'weekly' },
  { path: '/quick-fixes', priority: '0.8', changefreq: 'weekly' },
  { path: '/glossary', priority: '0.8', changefreq: 'weekly' },
  { path: '/device-hub', priority: '0.8', changefreq: 'weekly' },
  { path: '/how-it-works', priority: '0.8', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'weekly' },
  { path: '/search', priority: '0.8', changefreq: 'weekly' },
  { path: '/login', priority: '0.8', changefreq: 'weekly' },
  { path: '/signup', priority: '0.8', changefreq: 'weekly' },
];

// Extract guide slugs from guides.ts
const guidesFilePath = path.resolve(__dirname, '../src/data/guides.ts');
const guidesContent = fs.readFileSync(guidesFilePath, 'utf-8');
const slugRegex = /slug:\s*'([^']+)'/g;
const guideSlugs: string[] = [];
let match;
while ((match = slugRegex.exec(guidesContent)) !== null) {
  guideSlugs.push(match[1]);
}

console.log(`Found ${guideSlugs.length} guide slugs`);

// Build sitemap XML
const urlEntries = [
  ...mainPages.map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  ),
  ...guideSlugs.map(
    (slug) => `  <url>
    <loc>${BASE_URL}/guides/${slug}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  ),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join('\n')}
</urlset>
`;

const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap, 'utf-8');
console.log(`Sitemap written to ${outputPath} with ${mainPages.length + guideSlugs.length} URLs`);
