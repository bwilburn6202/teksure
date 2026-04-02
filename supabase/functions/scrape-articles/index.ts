/**
 * scrape-articles
 *
 * For each enabled content source:
 *   1. Fetches the RSS / Atom feed to discover article URLs
 *   2. Skips URLs already present in scraped_articles
 *   3. Fetches the full page for each new URL
 *   4. Strips nav / ads / footer / sidebar HTML — keeps only the article body
 *   5. Inserts a row into scraped_articles with scrape_status = 'pending'
 *   6. Updates content_sources.last_scraped_at
 *
 * Trigger: POST /functions/v1/scrape-articles
 * Auth:    service_role JWT (called from cron or admin UI)
 *
 * After this function runs, call categorize-and-dedup → simplify-article
 * to complete the content pipeline.
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// ─── Config ───────────────────────────────────────────────────────────────────

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL     = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SVC_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

/** Max new articles to fetch per source per invocation (keeps runtime < 120s) */
const MAX_NEW_PER_SOURCE = 3;

/** Delay between article fetches to be polite to source servers */
const ARTICLE_DELAY_MS = 1500;

/** Delay between sources */
const SOURCE_DELAY_MS = 2000;

/** User-Agent sent with every request */
const UA = 'TekSure Content Aggregator/1.0 (https://teksure.co)';

// ─── Types ───────────────────────────────────────────────────────────────────

interface ContentSource {
  id: string;
  name: string;
  domain: string;
  feed_url: string | null;
  feed_type: string;
  scrape_enabled: boolean;
  last_scraped_at: string | null;
}

interface FeedItem {
  url: string;
  title: string;
  publishedAt: string | null;
  description: string;
}

// ─── RSS / Atom parsing ───────────────────────────────────────────────────────

/**
 * Extract the text content of the first matching XML tag.
 * Handles both plain content and CDATA sections.
 */
function extractTag(xml: string, tag: string): string {
  // Match <tag ...>content</tag> — content may be CDATA
  const re = new RegExp(
    `<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`,
    'i',
  );
  const m = re.exec(xml);
  return m ? m[1].trim() : '';
}

/** Extract an attribute value from the first matching tag */
function extractAttr(xml: string, tag: string, attr: string): string {
  const re = new RegExp(`<${tag}[^>]*\\s${attr}="([^"]*)"`, 'i');
  const m  = re.exec(xml);
  return m ? m[1].trim() : '';
}

/** Decode common HTML entities and strip any remaining tags */
function cleanText(raw: string): string {
  return raw
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .trim();
}

/** Strip angle-bracket wrappers sometimes found around <link> values */
function cleanUrl(url: string): string {
  return url.replace(/^<|>$/g, '').trim();
}

/**
 * Parse an RSS 2.0 or Atom feed XML string.
 * Returns up to 25 items, newest first.
 */
function parseFeed(xml: string): FeedItem[] {
  const items: FeedItem[] = [];

  const isAtom = /<feed[^>]*xmlns="http:\/\/www\.w3\.org\/2005\/Atom"/i.test(xml);

  if (isAtom) {
    // ── Atom ──────────────────────────────────────────────────────────────────
    const entryRe = /<entry[^>]*>([\s\S]*?)<\/entry>/gi;
    let m: RegExpExecArray | null;
    while ((m = entryRe.exec(xml)) !== null) {
      const entry = m[1];
      const title = cleanText(extractTag(entry, 'title'));
      // Atom <link> uses href attribute; fallback to tag content
      const link  = cleanUrl(extractAttr(entry, 'link', 'href') || extractTag(entry, 'link'));
      const pub   = extractTag(entry, 'published') || extractTag(entry, 'updated') || null;
      const desc  = cleanText(extractTag(entry, 'summary') || extractTag(entry, 'content'));
      if (link && title) items.push({ url: link, title, publishedAt: pub, description: desc });
    }
  } else {
    // ── RSS 2.0 ───────────────────────────────────────────────────────────────
    const itemRe = /<item[^>]*>([\s\S]*?)<\/item>/gi;
    let m: RegExpExecArray | null;
    while ((m = itemRe.exec(xml)) !== null) {
      const item  = m[1];
      const title = cleanText(extractTag(item, 'title'));
      // <link> in RSS is sometimes followed by a text node, not a closing tag
      const linkTagMatch = /<link[^>]*>([^<]+)<\/link>/i.exec(item)
        ?? /<link[^>]*\/>/i.exec(item);
      const link  = cleanUrl(
        linkTagMatch ? linkTagMatch[1] : extractTag(item, 'guid') || '',
      );
      const pub   = extractTag(item, 'pubDate') || extractTag(item, 'dc:date') || null;
      const desc  = cleanText(extractTag(item, 'description'));
      if (link && title && link.startsWith('http')) {
        items.push({ url: link, title, publishedAt: pub, description: desc });
      }
    }
  }

  return items.slice(0, 25);
}

// ─── HTML content extraction ──────────────────────────────────────────────────

/**
 * Extract a clean, readable text body from a full HTML page.
 * Strategy:
 *   1. Remove irrelevant blocks (scripts, styles, nav, footer, ads, sidebars)
 *   2. Look for semantic article containers (<article>, <main>, or common class names)
 *   3. Convert heading/list markup to plain-text equivalents
 *   4. Collapse whitespace
 */
function extractContent(html: string): { title: string; content: string } {
  // Extract <title>
  const titleMatch = /<title[^>]*>([^<]+)<\/title>/i.exec(html);
  const title = titleMatch ? cleanText(titleMatch[1]) : '';

  let doc = html;

  // ── Strip completely useless blocks ──────────────────────────────────────────
  doc = doc.replace(/<script[\s\S]*?<\/script>/gi, '');
  doc = doc.replace(/<style[\s\S]*?<\/style>/gi, '');
  doc = doc.replace(/<svg[\s\S]*?<\/svg>/gi, '');
  doc = doc.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  doc = doc.replace(/<!--[\s\S]*?-->/g, '');
  doc = doc.replace(/<iframe[\s\S]*?<\/iframe>/gi, '');
  doc = doc.replace(/<(nav|header|footer|aside)[^>]*>[\s\S]*?<\/\1>/gi, '');

  // ── Remove ad / sidebar / promo elements by common class / id patterns ──────
  const noisePattern =
    /class="[^"]*(?:ad(?:s|vert)?|sidebar|related|nav(?:bar)?|menu|cookie|banner|popup|modal|promo|subscribe|newsletter|social|share|comment|widget)[^"]*"/i;
  doc = doc.replace(/<[a-z][^>]*>/gi, (tag) => (noisePattern.test(tag) ? '<!-- removed -->' : tag));
  // Clean up removed block containers (best-effort; we keep remaining tags)
  doc = doc.replace(/<!-- removed -->[\s\S]*?<\/[a-z]+>/gi, '');

  // ── Find the main content region ─────────────────────────────────────────────
  let body = '';

  const articleMatch = /<article[^>]*>([\s\S]*?)<\/article>/i.exec(doc);
  if (articleMatch) {
    body = articleMatch[1];
  } else {
    const mainMatch = /<main[^>]*>([\s\S]*?)<\/main>/i.exec(doc);
    if (mainMatch) {
      body = mainMatch[1];
    } else {
      // Try common content-area class names
      const contentMatch =
        /<div[^>]+class="[^"]*(?:article|post|entry|story|body|content)[^"]*"[^>]*>([\s\S]*?)<\/div>/i.exec(doc);
      body = contentMatch ? contentMatch[1] : doc;
    }
  }

  // ── Convert structural HTML to readable plain text ────────────────────────
  const content = body
    .replace(/<h[1-3][^>]*>/gi, '\n\n## ')
    .replace(/<h[4-6][^>]*>/gi, '\n\n### ')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<li[^>]*>/gi, '\n• ')
    .replace(/<\/li>/gi, '')
    .replace(/<p[^>]*>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')        // strip remaining tags
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/\n{3,}/g, '\n\n')     // collapse excessive blank lines
    .trim();

  return { title, content };
}

// ─── Utilities ────────────────────────────────────────────────────────────────

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

// ─── Main handler ─────────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS_HEADERS });

  const supabase = createClient(SUPABASE_URL, SUPABASE_SVC_KEY);

  const stats = {
    sources_processed: 0,
    feed_items_found:  0,
    articles_saved:    0,
    articles_skipped:  0,
    errors:            [] as string[],
  };

  try {
    // ── 1. Fetch enabled sources that have a feed URL ─────────────────────────
    const { data: sources, error: srcErr } = await supabase
      .from('content_sources')
      .select('id, name, domain, feed_url, feed_type, scrape_enabled, last_scraped_at')
      .eq('scrape_enabled', true)
      .not('feed_url', 'is', null);

    if (srcErr) throw srcErr;
    if (!sources || sources.length === 0) {
      return json({ message: 'No enabled sources with feed URLs.', ...stats });
    }

    console.log(`[scrape-articles] Processing ${sources.length} sources...`);

    // ── 2. Process each source ────────────────────────────────────────────────
    for (const source of sources as ContentSource[]) {
      stats.sources_processed++;
      console.log(`\n[${source.name}] Fetching feed: ${source.feed_url}`);

      try {
        // ── 2a. Fetch the RSS / Atom feed ───────────────────────────────────
        const feedRes = await fetch(source.feed_url!, {
          headers: { 'User-Agent': UA },
          signal: AbortSignal.timeout(15_000),
          redirect: 'follow',
        });

        if (!feedRes.ok) {
          throw new Error(`Feed HTTP ${feedRes.status}`);
        }

        const feedXml   = await feedRes.text();
        const feedItems = parseFeed(feedXml);
        stats.feed_items_found += feedItems.length;
        console.log(`[${source.name}] ${feedItems.length} items in feed`);

        if (feedItems.length === 0) continue;

        // ── 2b. Check which URLs we already have ────────────────────────────
        const urls = feedItems.map((i) => i.url);
        const { data: existing } = await supabase
          .from('scraped_articles')
          .select('original_url')
          .in('original_url', urls);

        const seen = new Set((existing ?? []).map((r: { original_url: string }) => r.original_url));
        const newItems = feedItems.filter((i) => !seen.has(i.url)).slice(0, MAX_NEW_PER_SOURCE);

        console.log(`[${source.name}] ${newItems.length} new articles to fetch`);

        // ── 2c. Fetch + save each new article ───────────────────────────────
        for (const item of newItems) {
          await sleep(ARTICLE_DELAY_MS);

          try {
            console.log(`[${source.name}] Fetching: ${item.url}`);

            const pageRes = await fetch(item.url, {
              headers: { 'User-Agent': UA },
              signal: AbortSignal.timeout(20_000),
              redirect: 'follow',
            });

            if (!pageRes.ok) {
              console.warn(`[${source.name}] HTTP ${pageRes.status} — skipping ${item.url}`);
              stats.articles_skipped++;
              continue;
            }

            const html = await pageRes.text();
            const { title, content } = extractContent(html);

            // Reject pages that are clearly not articles
            if (content.length < 200) {
              console.warn(`[${source.name}] Content too short (${content.length} chars) — skipping`);
              stats.articles_skipped++;
              continue;
            }

            const { error: insertErr } = await supabase
              .from('scraped_articles')
              .insert({
                source_id:             source.id,
                original_url:          item.url,
                original_title:        title || item.title,
                original_content:      content,
                original_author:       null,
                original_published_at: item.publishedAt
                  ? new Date(item.publishedAt).toISOString()
                  : null,
                scrape_status: 'pending',
              });

            if (insertErr) {
              // 23505 = unique_violation (URL already exists — race condition)
              if (insertErr.code === '23505') {
                console.log(`[${source.name}] Duplicate URL — skipping`);
                stats.articles_skipped++;
              } else {
                throw insertErr;
              }
            } else {
              stats.articles_saved++;
              console.log(`[${source.name}] Saved: "${title || item.title}"`);
            }
          } catch (articleErr) {
            const msg = `${source.name} / ${item.url}: ${articleErr}`;
            console.error(msg);
            stats.errors.push(msg);
          }
        }

        // ── 2d. Update last_scraped_at ───────────────────────────────────────
        await supabase
          .from('content_sources')
          .update({ last_scraped_at: new Date().toISOString() })
          .eq('id', source.id);

      } catch (sourceErr) {
        const msg = `${source.name}: ${sourceErr}`;
        console.error(msg);
        stats.errors.push(msg);
      }

      await sleep(SOURCE_DELAY_MS);
    }

    console.log('\n[scrape-articles] Complete:', stats);
    return json({ success: true, ...stats });

  } catch (err) {
    console.error('[scrape-articles] Fatal error:', err);
    return json({ error: String(err), ...stats }, 500);
  }
});
