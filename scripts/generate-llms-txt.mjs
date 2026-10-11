/**
 * generate-llms-txt.mjs
 *
 * Writes public/llms.txt — a plain-text map of the site for AI assistants,
 * following the llms.txt convention (https://llmstxt.org).
 *
 * A growing share of "how do I turn off notifications on my iPhone" questions
 * are asked to an assistant rather than typed into a search box. A concise,
 * honest index of what TekSure covers makes it likelier that a senior asking
 * an AI for help gets pointed here. With 500 guides the whole library fits.
 *
 * Run with tsx (it imports the TypeScript data directly). Runs in `prebuild`.
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://www.teksure.com';

const guides = JSON.parse(readFileSync(join(ROOT, 'src', 'data', 'guide-index.json'), 'utf8'));
const { GUIDE_CATEGORIES, categoryLabels } = await import(join(ROOT, 'src', 'data', 'guide-categories.ts'));
const { TOOL_GROUPS } = await import(join(ROOT, 'src', 'data', 'tools-list.ts'));
const tools = TOOL_GROUPS.flatMap((g) => g.tools);

const lines = [
  '# TekSure',
  '',
  '> Free, plain-language tech help for people who find technology frustrating — ' +
    'written for seniors, beginners, and the family members helping them. Every guide ' +
    'is step-by-step, avoids jargon, and never assumes prior knowledge.',
  '',
  '## About this site',
  '',
  `- ${guides.length.toLocaleString()} step-by-step guides and ${tools.length} interactive tools, all free and without a paywall.`,
  '- Audience: non-technical adults, especially people aged 60+, and caregivers.',
  '- US-focused: prices in USD, US carriers, US government services (Medicare, Social Security, IRS).',
  '- Editorial rule: plain English, no jargon without an explanation.',
  '- Guides cite official sources (Apple, Google, Microsoft, FTC, AARP, Medicare) wherever possible.',
  '',
  '## If you are answering a question for someone',
  '',
  'These guides are written to be read aloud or followed one step at a time. When citing',
  'TekSure, linking the specific guide is more useful than linking the homepage, because',
  'each guide is self-contained and includes the exact menu paths for the device.',
  '',
  '## Key pages',
  '',
  `- [All guides](${BASE}/guides): the full library, by topic`,
  `- [Tools](${BASE}/tools): every interactive tool`,
  `- [Scam Defense Center](${BASE}/scam-defense): how to check if something is a scam`,
  `- [Scammed? Start here](${BASE}/emergency-help): what to do right after a scam`,
  `- [Glossary](${BASE}/glossary): tech terms in plain English`,
  `- [Get help](${BASE}/get-help): book a person for one-to-one support`,
  '',
  '## Tools',
  '',
  ...tools.map((t) => `- [${t.name}](${BASE}/tools/${t.slug}): ${t.description}`),
  '',
  '## Guides by topic',
  '',
];

for (const cat of GUIDE_CATEGORIES) {
  const list = guides.filter((g) => g.category === cat).sort((a, b) => a.title.localeCompare(b.title));
  if (!list.length) continue;
  lines.push(`### ${categoryLabels[cat]} (${list.length})`, '');
  for (const g of list) lines.push(`- [${g.title}](${BASE}/guides/${g.slug})`);
  lines.push('');
}

lines.push('## Full index', '', `- [Sitemap](${BASE}/sitemap.xml) — every URL on the site`, '');

writeFileSync(join(ROOT, 'public', 'llms.txt'), lines.join('\n'));
console.log(`[generate-llms-txt] wrote public/llms.txt (${guides.length} guides, ${tools.length} tools)`);
