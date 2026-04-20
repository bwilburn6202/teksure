/**
 * categorize-and-dedup
 *
 * Reads scraped_articles with status = 'pending' and no category, then:
 *   1. Auto-categorizes the article
 *   2. Generates relevant tags
 *   3. Computes a content quality score (0–1)
 *   4. Runs deduplication against all existing articles (Jaccard on word sets)
 *   5. Records duplicates in article_duplicates; marks the weaker copy 'rejected'
 *   6. Auto-rejects any article with quality_score < 0.3
 *   7. Promotes qualifying articles to 'scraped' status
 *
 * Trigger: POST /functions/v1/categorize-and-dedup
 * Auth:    service_role JWT (called from cron / admin UI)
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─── Constants ───────────────────────────────────────────────────────────────

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL      = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SVC_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

/**
 * Mapping from TekSure category label → keyword signals.
 * Order matters: first match wins, so put more-specific categories first.
 */
const CATEGORY_SIGNALS: Array<{ category: string; keywords: string[] }> = [
  {
    category: 'WiFi & Internet',
    keywords: ['wifi', 'wi-fi', 'internet', 'router', 'broadband', 'network', 'connection', 'ethernet', 'hotspot', 'dns', 'ip address', 'modem'],
  },
  {
    category: 'Email & Accounts',
    keywords: ['email', 'gmail', 'outlook', 'yahoo mail', 'inbox', 'account', 'sign in', 'sign-in', 'login', 'log in', 'subscription', 'newsletter', 'spam'],
  },
  {
    category: 'Passwords & Security',
    keywords: ['password', 'security', 'hack', 'breach', 'phishing', 'scam', 'fraud', 'two-factor', '2fa', 'authenticator', 'credential', 'ransomware', 'malware', 'antivirus'],
  },
  {
    category: 'Phone & Tablet',
    keywords: ['iphone', 'android', 'smartphone', 'tablet', 'ipad', 'samsung', 'pixel', 'mobile', 'phone', 'cell phone', 'app store', 'google play'],
  },
  {
    category: 'Computer Basics',
    keywords: ['computer', 'laptop', 'pc', 'mac', 'windows', 'macos', 'desktop', 'keyboard', 'mouse', 'monitor', 'hard drive', 'ram', 'cpu', 'processor'],
  },
  {
    category: 'Printing',
    keywords: ['print', 'printer', 'ink', 'cartridge', 'scanner', 'scan', 'pdf', 'document', 'paper jam'],
  },
  {
    category: 'Smart Home',
    keywords: ['smart home', 'alexa', 'google home', 'siri', 'echo', 'smart speaker', 'smart tv', 'streaming', 'netflix', 'hulu', 'disney+', 'amazon fire', 'roku', 'chromecast', 'smart bulb', 'thermostat'],
  },
  {
    category: 'Apps & Software',
    keywords: ['app', 'software', 'update', 'install', 'download', 'program', 'browser', 'chrome', 'firefox', 'safari', 'microsoft office', 'word', 'excel', 'zoom', 'teams'],
  },
  {
    category: 'Photos & Files',
    keywords: ['photo', 'picture', 'image', 'video', 'file', 'folder', 'backup', 'cloud', 'google drive', 'icloud', 'dropbox', 'onedrive', 'storage', 'memory', 'usb'],
  },
  {
    category: 'Troubleshooting',
    keywords: ['fix', 'problem', 'issue', 'error', 'crash', 'freeze', 'slow', 'not working', 'broken', 'restart', 'reset', 'troubleshoot', 'help', 'support', 'repair'],
  },
];

/**
 * Source authority scores — higher = keep this version in a duplicate pair.
 * Unlisted domains default to 0.5.
 */
const SOURCE_AUTHORITY: Record<string, number> = {
  'support.apple.com':     0.95,
  'support.microsoft.com': 0.95,
  'support.google.com':    0.95,
  'consumer.ftc.gov':      0.90,
  'aarp.org':              0.80,
  'howtogeek.com':         0.75,
};

const DUPLICATE_THRESHOLD = 0.7;
const AUTO_REJECT_QUALITY = 0.3;

// ─── Types ───────────────────────────────────────────────────────────────────

interface ScrapedArticle {
  id: string;
  source_id: string;
  original_url: string;
  original_title: string;
  original_content: string;
  category: string | null;
  tags: string[] | null;
  scrape_status: string;
  quality_score: number | null;
}

interface ContentSource {
  id: string;
  domain: string;
}

// ─── Text utilities ───────────────────────────────────────────────────────────

/** Normalize text to lower-case words, stripping punctuation */
function tokenize(text: string): Set<string> {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2);
  return new Set(words);
}

/** Jaccard similarity between two token sets */
function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 1;
  const intersection = new Set([...a].filter(x => b.has(x)));
  const union = new Set([...a, ...b]);
  return intersection.size / union.size;
}

/** Combined title + content similarity (title weighted 40%, content 60%) */
function similarity(
  titleA: string, contentA: string,
  titleB: string, contentB: string,
): number {
  const contentSnipA = contentA.slice(0, 1000);
  const contentSnipB = contentB.slice(0, 1000);

  const titleSim   = jaccard(tokenize(titleA), tokenize(titleB));
  const contentSim = jaccard(tokenize(contentSnipA), tokenize(contentSnipB));
  return titleSim * 0.4 + contentSim * 0.6;
}

// ─── Categorization ───────────────────────────────────────────────────────────

function detectCategory(title: string, content: string): string {
  const haystack = `${title} ${content.slice(0, 500)}`.toLowerCase();
  for (const { category, keywords } of CATEGORY_SIGNALS) {
    if (keywords.some(kw => haystack.includes(kw))) {
      return category;
    }
  }
  return 'Troubleshooting'; // fallback
}

function generateTags(title: string, content: string, category: string): string[] {
  const haystack = `${title} ${content.slice(0, 500)}`.toLowerCase();
  const tags = new Set<string>([category.toLowerCase()]);

  // Pull matched signal keywords as tags (limit to 8 total)
  for (const { keywords } of CATEGORY_SIGNALS) {
    for (const kw of keywords) {
      if (haystack.includes(kw)) {
        tags.add(kw);
        if (tags.size >= 8) break;
      }
      if (tags.size >= 8) break;
    }
    if (tags.size >= 8) break;
  }

  return [...tags].slice(0, 8);
}

// ─── Quality scoring ──────────────────────────────────────────────────────────

function scoreQuality(article: ScrapedArticle, sourceDomain: string): number {
  let score = 0.5; // baseline

  const content = article.original_content;
  const wordCount = content.split(/\s+/).length;

  // Length: penalise very short, reward medium length
  if (wordCount < 100)      score -= 0.3;
  else if (wordCount < 200) score -= 0.1;
  else if (wordCount > 400) score += 0.1;

  // Step-by-step structure (numbered lists / step markers)
  if (/\b(step\s+\d|^\d+\.\s)/im.test(content))  score += 0.1;
  if (/(\b(how\s+to|guide|tutorial)\b)/i.test(content)) score += 0.05;

  // Images (basic check for markdown or HTML image references)
  if (/!\[.*?\]\(|<img\s/i.test(content)) score += 0.05;

  // Readability proxy: average sentence length (shorter = more readable for seniors)
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  if (sentences.length > 0) {
    const avgSentenceWords = wordCount / sentences.length;
    if (avgSentenceWords < 15)      score += 0.05;
    else if (avgSentenceWords > 30) score -= 0.05;
  }

  // Source authority bonus
  const authority = SOURCE_AUTHORITY[sourceDomain] ?? 0.5;
  score += (authority - 0.5) * 0.2; // scale: ±0.09

  // Clamp to [0, 1]
  return Math.min(1, Math.max(0, Math.round(score * 100) / 100));
}

// ─── Main handler ─────────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_SVC_KEY);

    // ── 1. Fetch pending articles without a category ──────────────────────────
    const { data: pending, error: fetchErr } = await supabase
      .from('scraped_articles')
      .select('id, source_id, original_url, original_title, original_content, category, tags, scrape_status, quality_score')
      .eq('scrape_status', 'pending')
      .is('category', null)
      .limit(50); // process in batches

    if (fetchErr) throw fetchErr;
    if (!pending || pending.length === 0) {
      return json({ processed: 0, message: 'No pending articles to process.' });
    }

    // ── 2. Fetch source domains for authority scoring ─────────────────────────
    const sourceIds = [...new Set((pending as ScrapedArticle[]).map(a => a.source_id))];
    const { data: sources } = await supabase
      .from('content_sources')
      .select('id, domain')
      .in('id', sourceIds);

    const domainMap: Record<string, string> = {};
    (sources as ContentSource[] ?? []).forEach(s => { domainMap[s.id] = s.domain; });

    // ── 3. Fetch existing articles for dedup comparison ───────────────────────
    // Pull all non-rejected articles (title + content snippet + id + source_id)
    const { data: existing } = await supabase
      .from('scraped_articles')
      .select('id, source_id, original_title, original_content, scrape_status')
      .neq('scrape_status', 'rejected');

    const existingArticles = (existing ?? []) as ScrapedArticle[];

    // ── 4. Process each pending article ──────────────────────────────────────
    const results = {
      categorized: 0,
      rejected_quality: 0,
      duplicates_found: 0,
      errors: 0,
    };

    for (const article of pending as ScrapedArticle[]) {
      try {
        const domain   = domainMap[article.source_id] ?? '';
        const category = detectCategory(article.original_title, article.original_content);
        const tags     = generateTags(article.original_title, article.original_content, category);
        const qualityScore = scoreQuality(article, domain);

        // Auto-reject low-quality content
        if (qualityScore < AUTO_REJECT_QUALITY) {
          await supabase
            .from('scraped_articles')
            .update({ category, tags, quality_score: qualityScore, scrape_status: 'rejected' })
            .eq('id', article.id);
          results.rejected_quality++;
          continue;
        }

        // ── Deduplication ──────────────────────────────────────────────────
        let isDuplicate = false;

        for (const other of existingArticles) {
          // Skip self-comparison
          if (other.id === article.id) continue;

          const sim = similarity(
            article.original_title, article.original_content,
            other.original_title,  other.original_content,
          );

          if (sim >= DUPLICATE_THRESHOLD) {
            isDuplicate = true;
            results.duplicates_found++;

            // Determine which article is the authority
            const articleAuthority = SOURCE_AUTHORITY[domain] ?? 0.5;
            const otherDomain      = domainMap[other.source_id] ?? '';
            const otherAuthority   = SOURCE_AUTHORITY[otherDomain] ?? 0.5;

            const primaryId   = articleAuthority >= otherAuthority ? article.id : other.id;
            const duplicateId = articleAuthority >= otherAuthority ? other.id   : article.id;

            // Record the duplicate pair (ignore conflict if already recorded)
            await supabase
              .from('article_duplicates')
              .upsert(
                { primary_article_id: primaryId, duplicate_article_id: duplicateId, similarity_score: sim },
                { onConflict: 'primary_article_id,duplicate_article_id', ignoreDuplicates: true },
              );

            // Reject the lower-authority copy (if it's the incoming article, mark rejected)
            if (duplicateId === article.id) {
              await supabase
                .from('scraped_articles')
                .update({ category, tags, quality_score: qualityScore, scrape_status: 'rejected' })
                .eq('id', article.id);
            } else {
              // The other existing article is the duplicate — reject it
              await supabase
                .from('scraped_articles')
                .update({ scrape_status: 'rejected' })
                .eq('id', other.id);
            }

            break; // one duplicate match is enough
          }
        }

        if (!isDuplicate) {
          // Promote to 'scraped' — ready for the simplification step
          await supabase
            .from('scraped_articles')
            .update({ category, tags, quality_score: qualityScore, scrape_status: 'scraped' })
            .eq('id', article.id);
          results.categorized++;
        }

        // Add to existingArticles pool so subsequent articles in this batch can dedup against it
        existingArticles.push({ ...article, category, scrape_status: isDuplicate ? 'rejected' : 'scraped' });

      } catch (articleErr) {
        console.error(`Error processing article ${article.id}:`, articleErr);
        results.errors++;
      }
    }

    return json({ processed: (pending as ScrapedArticle[]).length, ...results });

  } catch (err) {
    console.error('categorize-and-dedup fatal error:', err);
    return json({ error: String(err) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}
