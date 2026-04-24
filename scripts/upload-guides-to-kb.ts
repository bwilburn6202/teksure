#!/usr/bin/env tsx

/**
 * Build TekBrain knowledge base from TekSure guides + website pages.
 *
 * Usage examples:
 *   npx tsx scripts/upload-guides-to-kb.ts --dry-run
 *   npx tsx scripts/upload-guides-to-kb.ts --guides-only
 *   npx tsx scripts/upload-guides-to-kb.ts --max-pages=300 --embed
 *
 * Required env:
 *   VITE_SUPABASE_URL (or SUPABASE_URL)
 *   SUPABASE_SERVICE_ROLE_KEY
 */

import { createClient } from '@supabase/supabase-js';
import { readdir, readFile } from 'node:fs/promises';
import { extname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

interface GuideStepLike {
  title?: string;
  content?: string;
  tip?: string;
  warning?: string;
}

interface GuideLike {
  slug: string;
  title: string;
  excerpt?: string;
  body?: string;
  steps?: GuideStepLike[];
  category?: string;
  tags?: string[];
  readTime?: string;
  difficulty?: string;
}

interface SourceDoc {
  title: string;
  sourceUrl: string;
  content: string;
  keywords: string[];
  metadata?: Record<string, Json>;
}

const ROOT = resolve(new URL('.', import.meta.url).pathname, '..');
const DATA_DIR = resolve(ROOT, 'src/data');
const SITEMAP_PATH = resolve(ROOT, 'public/sitemap.xml');
const SITE_ORIGIN = process.env.TEKSURE_SITE_ORIGIN ?? 'https://teksure.com';
const MAX_PAGES_DEFAULT = 150;
const PAGE_MIN_CHARS = 400;

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const guidesOnly = args.has('--guides-only');
const embedAfter = args.has('--embed');
const maxPagesArg = [...args].find((arg) => arg.startsWith('--max-pages='));
const maxPages = maxPagesArg ? Math.max(1, Number(maxPagesArg.split('=')[1] || MAX_PAGES_DEFAULT)) : MAX_PAGES_DEFAULT;

const supabaseUrl = process.env.VITE_SUPABASE_URL ?? process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing env vars: VITE_SUPABASE_URL (or SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY are required.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function main() {
  console.log('🧠 Building TekBrain knowledge base corpus...');

  const guideDocs = await loadGuideDocs();
  console.log(`• Prepared ${guideDocs.length} guide-based source docs.`);

  const webDocs = guidesOnly ? [] : await loadWebsiteDocs(maxPages);
  if (!guidesOnly) {
    console.log(`• Prepared ${webDocs.length} website source docs from sitemap.`);
  }

  const allDocs = dedupeDocs([...guideDocs, ...webDocs]);
  console.log(`• Total unique source docs: ${allDocs.length}`);

  if (dryRun) {
    console.log('ℹ️ Dry run complete. No Supabase writes were performed.');
    return;
  }

  let createdOrUpdated = 0;
  for (const [i, doc] of allDocs.entries()) {
    await upsertKnowledgeDocument(doc);
    createdOrUpdated += 1;

    if ((i + 1) % 100 === 0) {
      console.log(`  ↳ Synced ${i + 1}/${allDocs.length}`);
    }
  }

  console.log(`✅ Synced ${createdOrUpdated} knowledge documents.`);

  if (embedAfter) {
    const { error } = await supabase.functions.invoke('embed-knowledge-documents', {
      body: { force_refresh: false, limit: 100 },
    });
    if (error) {
      console.warn(`⚠️ Embedding trigger failed: ${error.message}`);
    } else {
      console.log('✅ Triggered embed-knowledge-documents.');
    }
  }
}

async function loadGuideDocs(): Promise<SourceDoc[]> {
  const files = await readdir(DATA_DIR);
  const guideFiles = files
    .filter((file) => extname(file) === '.ts')
    .filter((file) => file === 'guides.ts' || file === 'guides-expansion.ts' || /^guides-batch-\d+\.ts$/.test(file))
    .map((file) => resolve(DATA_DIR, file));

  const bySlug = new Map<string, GuideLike>();

  for (const filePath of guideFiles) {
    try {
      const mod = await import(pathToFileURL(filePath).href);
      for (const value of Object.values(mod)) {
        if (!Array.isArray(value)) continue;
        for (const item of value) {
          if (!isGuide(item)) continue;
          if (!bySlug.has(item.slug)) {
            bySlug.set(item.slug, item);
          }
        }
      }
    } catch (err) {
      console.warn(`⚠️ Skipping ${filePath}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  return [...bySlug.values()].map((guide) => {
    const markdown = guideToMarkdown(guide);
    return {
      title: guide.title,
      sourceUrl: `${SITE_ORIGIN}/guides/${guide.slug}`,
      content: markdown,
      keywords: uniqueKeywords([
        ...(guide.tags ?? []),
        guide.category,
        'guide',
        'teksure',
      ]),
      metadata: {
        kind: 'guide',
        slug: guide.slug,
        category: guide.category ?? null,
        read_time: guide.readTime ?? null,
        difficulty: guide.difficulty ?? null,
      },
    };
  });
}

async function loadWebsiteDocs(maxPages: number): Promise<SourceDoc[]> {
  const sitemapXml = await readFile(SITEMAP_PATH, 'utf8');
  const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((m) => m[1]?.trim())
    .filter((u): u is string => Boolean(u))
    .filter((u) => u.startsWith(SITE_ORIGIN))
    .filter((u) => !u.includes('/guides/'))
    .slice(0, maxPages);

  const docs: SourceDoc[] = [];
  const concurrency = 8;
  let cursor = 0;

  async function worker() {
    while (cursor < urls.length) {
      const index = cursor;
      cursor += 1;
      const url = urls[index];
      const doc = await fetchWebsiteDoc(url);
      if (doc) docs.push(doc);
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return docs;
}

async function fetchWebsiteDoc(url: string): Promise<SourceDoc | null> {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'TekBrain-KB-Builder/1.0' } });
    if (!res.ok) return null;

    const html = await res.text();
    const title = extractTag(html, 'title')?.replace(/\s+\|\s*TekSure.*$/i, '').trim() || url;
    const bodyText = htmlToText(html);

    if (bodyText.length < PAGE_MIN_CHARS) return null;

    return {
      title,
      sourceUrl: url,
      content: `# ${title}\n\n${bodyText}`,
      keywords: uniqueKeywords(['teksure', 'website', ...tokensFromUrl(url)]),
      metadata: {
        kind: 'website_page',
      },
    };
  } catch {
    return null;
  }
}

function htmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extractTag(html: string, tagName: string): string | null {
  const match = html.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i'));
  return match?.[1]?.trim() ?? null;
}

function guideToMarkdown(guide: GuideLike): string {
  const parts: string[] = [`# ${guide.title}`];

  if (guide.excerpt) parts.push(guide.excerpt);
  if (guide.body) parts.push(guide.body);

  if (guide.steps && guide.steps.length > 0) {
    parts.push('## Steps');
    for (const [i, step] of guide.steps.entries()) {
      const stepTitle = step.title?.trim() || `Step ${i + 1}`;
      const stepBody = step.content?.trim() || '';
      const tip = step.tip ? `\nTip: ${step.tip}` : '';
      const warning = step.warning ? `\nWarning: ${step.warning}` : '';
      parts.push(`### ${i + 1}. ${stepTitle}\n${stepBody}${tip}${warning}`.trim());
    }
  }

  return parts.join('\n\n').trim();
}

function isGuide(value: unknown): value is GuideLike {
  if (!value || typeof value !== 'object') return false;
  const v = value as Partial<GuideLike>;
  return typeof v.slug === 'string' && typeof v.title === 'string';
}

function dedupeDocs(docs: SourceDoc[]): SourceDoc[] {
  const map = new Map<string, SourceDoc>();
  for (const doc of docs) {
    if (!doc.sourceUrl || !doc.content.trim()) continue;
    map.set(doc.sourceUrl, doc);
  }
  return [...map.values()];
}

function uniqueKeywords(values: Array<string | undefined>): string[] {
  return [...new Set(values.map((v) => (v ?? '').trim().toLowerCase()).filter(Boolean))].slice(0, 12);
}

function tokensFromUrl(url: string): string[] {
  return url
    .replace(SITE_ORIGIN, '')
    .split('/')
    .flatMap((part) => part.split(/[-_]/g))
    .map((token) => token.trim().toLowerCase())
    .filter(Boolean)
    .slice(0, 8);
}

async function upsertKnowledgeDocument(doc: SourceDoc) {
  const summary = summarize(doc.content);

  const { data: existingSource } = await supabase
    .from('knowledge_manual_sources')
    .select('id')
    .eq('source_url', doc.sourceUrl)
    .maybeSingle();

  let manualSourceId = existingSource?.id as string | undefined;

  if (!manualSourceId) {
    const { data, error } = await supabase
      .from('knowledge_manual_sources')
      .insert({
        title: doc.title,
        source_type: 'manual',
        source_url: doc.sourceUrl,
        content: doc.content,
      })
      .select('id')
      .single();

    if (error) {
      throw new Error(`Failed to insert manual source for ${doc.sourceUrl}: ${error.message}`);
    }
    manualSourceId = data.id;
  } else {
    const { error } = await supabase
      .from('knowledge_manual_sources')
      .update({ title: doc.title, content: doc.content })
      .eq('id', manualSourceId);

    if (error) {
      throw new Error(`Failed to update manual source ${manualSourceId}: ${error.message}`);
    }
  }

  const { data: existingDoc } = await supabase
    .from('knowledge_documents')
    .select('id')
    .eq('manual_source_id', manualSourceId)
    .maybeSingle();

  const payload = {
    title: doc.title,
    source_url: doc.sourceUrl,
    summary,
    markdown: doc.content,
    keywords: doc.keywords,
    compile_status: 'ready',
    manual_source_id: manualSourceId,
    source_article_id: null,
  };

  if (!existingDoc) {
    const { error } = await supabase.from('knowledge_documents').insert(payload);
    if (error) throw new Error(`Failed to insert knowledge document for ${doc.sourceUrl}: ${error.message}`);
  } else {
    const { error } = await supabase
      .from('knowledge_documents')
      .update(payload)
      .eq('id', existingDoc.id);
    if (error) throw new Error(`Failed to update knowledge document ${existingDoc.id}: ${error.message}`);
  }
}

function summarize(markdown: string): string {
  const clean = markdown
    .replace(/^#+\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (clean.length <= 320) return clean;
  return `${clean.slice(0, 317)}...`;
}

main().catch((err) => {
  console.error(`❌ ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});
