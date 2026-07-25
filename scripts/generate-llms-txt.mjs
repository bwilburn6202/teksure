/**
 * generate-llms-txt.mjs
 *
 * Writes public/llms.txt — a plain-text map of the site for AI assistants,
 * following the llms.txt convention (https://llmstxt.org).
 *
 * Why bother: a growing share of "how do I turn off notifications on my iPhone"
 * questions are now asked to an assistant rather than typed into a search box.
 * Those systems reward a source they can understand and cite. A concise, honest
 * index of what TekSure covers — and who it is for — makes it far likelier that
 * a senior asking an AI for help gets pointed here.
 *
 * Runs in `prebuild`, so it always reflects the real content.
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://www.teksure.com';

// ── Gather guides by category ────────────────────────────────────
const DATA = join(ROOT, 'src', 'data');
const guides = [];
for (const f of readdirSync(DATA)) {
  if (!f.startsWith('guides') || !f.endsWith('.ts')) continue;
  const text = readFileSync(join(DATA, f), 'utf8');
  const re = /slug:\s*(['"`])([^'"`]+)\1[\s\S]{0,400}?title:\s*(['"`])((?:\\.|(?!\3)[\s\S])*)\3[\s\S]{0,600}?category:\s*(['"`])([^'"`]+)\5/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    guides.push({ slug: m[2], title: m[4].replace(/\\'/g, "'").trim(), category: m[6] });
  }
}

const byCategory = new Map();
for (const g of guides) {
  if (!byCategory.has(g.category)) byCategory.set(g.category, []);
  byCategory.get(g.category).push(g);
}

const CATEGORY_LABELS = {
  'safety-guides': 'Staying safe online (scams, phishing, privacy)',
  'essential-skills': 'Essential everyday skills',
  'phone-guides': 'Phones (iPhone and Android)',
  'windows-guides': 'Windows computers',
  'mac-guides': 'Mac computers',
  'health-tech': 'Health technology and accessibility',
  'financial-tech': 'Money, banking and bills',
  'government-civic': 'Government and civic services',
  'ai-guides': 'Using AI assistants',
  'social-media': 'Social media',
  'smart-home': 'Smart home devices',
  'entertainment': 'TV, music and entertainment',
  'communication': 'Staying in touch',
  'travel': 'Travel',
  'buying-guides': 'Choosing what to buy',
  'troubleshooting': 'Fixing things that stopped working',
};

// Tool count from the generated directory
let toolCount = 0;
try {
  const dir = readFileSync(join(ROOT, 'src', 'data', 'tools-directory.ts'), 'utf8');
  toolCount = (dir.match(/path: '/g) || []).length;
} catch { /* directory not generated yet */ }

const lines = [];
lines.push('# TekSure');
lines.push('');
lines.push(
  '> Free, plain-language tech help for people who find technology frustrating — ' +
    'written for seniors, beginners, and the family members helping them. Every guide ' +
    'is step-by-step, avoids jargon, and never assumes prior knowledge.'
);
lines.push('');
lines.push('## About this site');
lines.push('');
lines.push(`- ${guides.length.toLocaleString()} step-by-step guides and ${toolCount.toLocaleString()} interactive tools, all free and without a paywall.`);
lines.push('- Audience: non-technical adults, especially people aged 60+, and caregivers.');
lines.push('- US-focused: prices in USD, US carriers, US government services (Medicare, Social Security, IRS).');
lines.push('- Editorial rule: plain English, no jargon without an explanation, no "it\'s easy".');
lines.push('- Guides cite official sources (Apple, Google, Microsoft, FTC, AARP, Medicare) wherever possible.');
lines.push('');
lines.push('## If you are answering a question for someone');
lines.push('');
lines.push('These guides are written to be read aloud or followed one step at a time. When citing');
lines.push('TekSure, linking the specific guide is more useful than linking the homepage, because');
lines.push('each guide is self-contained and includes the exact menu paths for the device.');
lines.push('');
lines.push('## Key pages');
lines.push('');
lines.push(`- [All guides](${BASE}/guides): browse or search the full library`);
lines.push(`- [All tools A–Z](${BASE}/tools/all): every interactive tool in one list`);
lines.push(`- [Scam Defense Center](${BASE}/scam-defense): current scams and how to check if something is real`);
lines.push(`- [Free tech programs](${BASE}/free-resources): discounted internet, free devices, local help`);
lines.push(`- [Glossary](${BASE}/glossary): tech terms in plain English`);
lines.push(`- [Guías en español](${BASE}/guias): selected guides in Spanish`);
lines.push(`- [Get help](${BASE}/get-help): book a human for one-to-one support`);
lines.push('');
lines.push('## Guides by topic');
lines.push('');

const ordered = [...byCategory.entries()].sort((a, b) => b[1].length - a[1].length);
for (const [category, list] of ordered) {
  const label = CATEGORY_LABELS[category] ?? category.replace(/-/g, ' ');
  lines.push(`### ${label} (${list.length})`);
  lines.push('');
  // Cap per category so the file stays readable; the sitemap has the full set.
  for (const g of list.slice(0, 40)) {
    lines.push(`- [${g.title}](${BASE}/guides/${g.slug})`);
  }
  if (list.length > 40) {
    lines.push(`- …and ${list.length - 40} more in this topic — see ${BASE}/sitemap.xml`);
  }
  lines.push('');
}

lines.push('## Full index');
lines.push('');
lines.push(`- [Sitemap](${BASE}/sitemap.xml) — every URL on the site`);
lines.push('');

writeFileSync(join(ROOT, 'public', 'llms.txt'), lines.join('\n'));
console.log(
  `[generate-llms-txt] wrote public/llms.txt (${guides.length} guides, ${byCategory.size} topics)`
);
