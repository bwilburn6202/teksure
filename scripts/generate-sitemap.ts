/**
 * TekSure Sitemap Generator
 * Run: npx tsx scripts/generate-sitemap.ts
 * Output: public/sitemap.xml
 */
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://teksure.com';

// Static pages with priority and change frequency
const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/guides', priority: '0.9', changefreq: 'daily' },
  { path: '/tools', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/how-it-works', priority: '0.7', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.7', changefreq: 'monthly' },
  { path: '/setup', priority: '0.7', changefreq: 'monthly' },
  { path: '/glossary', priority: '0.7', changefreq: 'weekly' },
  { path: '/quick-fixes', priority: '0.8', changefreq: 'weekly' },
  { path: '/device-hub', priority: '0.6', changefreq: 'monthly' },
  { path: '/tips', priority: '0.7', changefreq: 'weekly' },
  { path: '/news', priority: '0.6', changefreq: 'daily' },
  { path: '/forum', priority: '0.6', changefreq: 'daily' },
  { path: '/book', priority: '0.7', changefreq: 'monthly' },  { path: '/webinars', priority: '0.5', changefreq: 'weekly' },
  { path: '/safety/scam-alerts', priority: '0.7', changefreq: 'weekly' },
  { path: '/tools/troubleshooter', priority: '0.7', changefreq: 'monthly' },
  { path: '/tools/backup-wizard', priority: '0.6', changefreq: 'monthly' },
  { path: '/tools/app-recommender', priority: '0.6', changefreq: 'monthly' },
  { path: '/tools/warranty-checker', priority: '0.6', changefreq: 'monthly' },
  { path: '/tools/password-strength', priority: '0.6', changefreq: 'monthly' },
  { path: '/tools/wifi-speed', priority: '0.6', changefreq: 'monthly' },
  { path: '/tools/phishing-scanner', priority: '0.6', changefreq: 'monthly' },
  { path: '/tools/wifi-troubleshooter', priority: '0.6', changefreq: 'monthly' },
  { path: '/tools/cyber-scorecard', priority: '0.5', changefreq: 'monthly' },
  { path: '/tools/two-factor-setup', priority: '0.6', changefreq: 'monthly' },
  { path: '/ai-tutor', priority: '0.7', changefreq: 'monthly' },
  { path: '/local-help', priority: '0.5', changefreq: 'monthly' },
  { path: '/get-help', priority: '0.8', changefreq: 'monthly' },
];

// Import guides data to generate guide URLs
async function getGuides() {
  try {
    const guidesModule = await import('../src/data/guides');
    return (guidesModule.default || guidesModule.guides || []).map(
      (g: any) => g.id || g.slug
    );
  } catch {
    console.warn('Could not import guides data. Generating static pages only.');
    return [];
  }
}
const today = new Date().toISOString().split('T')[0];

function buildUrl(path: string, priority: string, changefreq: string): string {
  return `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function generate() {
  const guideSlugs = await getGuides();

  const urls = [
    ...staticPages.map((p) => buildUrl(p.path, p.priority, p.changefreq)),
    ...guideSlugs.map((slug: string) => buildUrl(`/guides/${slug}`, '0.8', 'weekly')),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  const outPath = resolve(__dirname, '..', 'public', 'sitemap.xml');
  writeFileSync(outPath, xml, 'utf-8');
  console.log(`✅ Sitemap generated: ${outPath} (${urls.length} URLs)`);
}

generate().catch(console.error);