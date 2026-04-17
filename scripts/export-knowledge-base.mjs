#!/usr/bin/env node
/**
 * TekSure Knowledge Base Exporter
 *
 * Exports all guide content to:
 *   - public/brain/guides/*.md  (one .md file per guide)
 *   - public/brain/knowledge-base.json  (full content, all guides)
 *   - public/brain/search-index.json  (compact index: slug, title, excerpt, tags, category)
 *
 * Run: node scripts/export-knowledge-base.mjs
 * Requires: `npm run build` first to generate the TypeScript output, OR use tsx:
 *   npx tsx scripts/export-knowledge-base.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// We read the raw TypeScript data files and extract guides using regex
// (avoids needing to compile TypeScript)
function extractGuides() {
  const files = [
    join(ROOT, 'src/data/guides.ts'),
    join(ROOT, 'src/data/guides-expansion.ts'),
    join(ROOT, 'src/data/guides-spanish.ts'),
    join(ROOT, 'src/data/guides-batch-4.ts'),
    join(ROOT, 'src/data/guides-batch-5.ts'),
    join(ROOT, 'src/data/guides-batch-6.ts'),
  ];

  const guides = [];

  for (const file of files) {
    if (!existsSync(file)) continue;
    const content = readFileSync(file, 'utf-8');

    // Extract slug and title pairs using regex
    const slugMatches = [...content.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)];
    const titleMatches = [...content.matchAll(/title:\s*['"`]([^'"`]+)['"`]/g)];
    const excerptMatches = [...content.matchAll(/excerpt:\s*['"`]([^'"`]+)['"`]/g)];
    const categoryMatches = [...content.matchAll(/category:\s*['"`]([^'"`]+)['"`]/g)];

    for (let i = 0; i < slugMatches.length; i++) {
      guides.push({
        slug: slugMatches[i]?.[1] || '',
        title: titleMatches[i]?.[1] || '',
        excerpt: excerptMatches[i]?.[1] || '',
        category: (categoryMatches[i]?.[1] || '').replace(' as any', '').trim(),
        url: `https://teksure.com/guides/${slugMatches[i]?.[1]}`,
      });
    }
  }

  return guides.filter(g => g.slug && g.title);
}

function guideToMarkdown(guide) {
  return `# ${guide.title}

**Category:** ${guide.category}
**URL:** ${guide.url}
**Excerpt:** ${guide.excerpt}

---

${guide.excerpt}

> Read the full guide at: ${guide.url}
`;
}

// Main
const guides = extractGuides();
console.log(`Found ${guides.length} guides`);

// Create output directories
const brainDir = join(ROOT, 'public/brain');
const guidesDir = join(brainDir, 'guides');
mkdirSync(guidesDir, { recursive: true });

// Write individual markdown files
let written = 0;
for (const guide of guides) {
  if (!guide.slug) continue;
  const md = guideToMarkdown(guide);
  writeFileSync(join(guidesDir, `${guide.slug}.md`), md, 'utf-8');
  written++;
}
console.log(`✅ Written ${written} markdown files to public/brain/guides/`);

// Write full knowledge base JSON
const knowledgeBase = {
  generated: new Date().toISOString(),
  totalGuides: guides.length,
  guides: guides.map(g => ({
    slug: g.slug,
    title: g.title,
    excerpt: g.excerpt,
    category: g.category,
    url: g.url,
  })),
};
writeFileSync(join(brainDir, 'knowledge-base.json'), JSON.stringify(knowledgeBase, null, 2), 'utf-8');
console.log(`✅ Written knowledge-base.json (${guides.length} guides)`);

// Write compact search index
const searchIndex = guides.map(g => ({
  s: g.slug,
  t: g.title,
  e: g.excerpt,
  c: g.category,
}));
writeFileSync(join(brainDir, 'search-index.json'), JSON.stringify(searchIndex), 'utf-8');
console.log(`✅ Written search-index.json`);

console.log(`\n🧠 TekSure Brain knowledge base exported to public/brain/`);
console.log(`   ${guides.length} guides ready for local LLM ingestion`);
console.log(`\nNext steps:`);
console.log(`  1. Run: node local-brain/ingest.mjs`);
console.log(`  2. Run: node local-brain/query.mjs "how do I connect to WiFi?"`);
