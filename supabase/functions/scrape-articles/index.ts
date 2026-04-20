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
const YOUTUBE_API_KEY  = Deno.env.get('YOUTUBE_API_KEY') ?? '';

/** Max new articles to fetch per source per invocation (keeps runtime < 120s) */
const MAX_NEW_PER_SOURCE = 3;

/** Delay between article fetches to be polite to source servers */
const ARTICLE_DELAY_MS = 1500;

/** Delay between sources */
const SOURCE_DELAY_MS = 2000;

/** User-Agent sent with every request */
const UA = 'TekSure Content Aggregator/1.0 (https://teksure.com)';

// ─── Types ───────────────────────────────────────────────────────────────────

interface ContentSource {
  id: string;
  name: string;
  domain: string;
  feed_url: string | null;
  feed_type: string;
  source_type: string;
  fetch_config: Record<string, unknown> | null;
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

// ─── Community fetchers ───────────────────────────────────────────────────────
//
// Each fetcher returns FeedItem[] (ready for the existing dedup + insert path)
// plus a pre-extracted article body (so the main loop can skip extractContent).
// The main loop detects community sources by source.source_type and dispatches
// here before falling back to the RSS path.

interface FetchedArticle extends FeedItem {
  /** Pre-extracted article body (plain text). If empty, the main loop fetches the URL. */
  body?: string;
}

/**
 * Reddit: pulls top posts from the configured subreddit over the configured
 * time window, filtered by fetch_config.min_score. Combines the selftext with
 * the single highest-voted top-level comment (the canonical "answer").
 *
 * Rate-limit safe: Reddit's public JSON endpoints allow ~60 requests/min
 * without auth. We throttle via the main loop's ARTICLE_DELAY_MS.
 */
async function fetchReddit(source: ContentSource): Promise<FetchedArticle[]> {
  const cfg = source.fetch_config ?? {};
  const subreddit = String(cfg.subreddit ?? '');
  const minScore  = Number(cfg.min_score ?? 25);
  const timeRange = String(cfg.time_range ?? 'month');
  const limit     = Number(cfg.limit ?? 25);

  if (!subreddit) return [];

  const listUrl = `https://www.reddit.com/r/${subreddit}/top.json?t=${timeRange}&limit=${limit}`;
  const res = await fetch(listUrl, {
    headers: { 'User-Agent': UA },
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`Reddit list HTTP ${res.status}`);

  const listing = await res.json() as {
    data?: { children?: Array<{ data: RedditPost }> };
  };
  const posts = (listing.data?.children ?? [])
    .map(c => c.data)
    .filter(p => (p.score ?? 0) >= minScore && !p.stickied && !p.over_18);

  const items: FetchedArticle[] = [];
  for (const post of posts.slice(0, limit)) {
    await sleep(400); // polite pause between per-post comment fetches
    let topComment = '';
    try {
      const commentsUrl = `https://www.reddit.com${post.permalink}.json?limit=5&sort=top`;
      const cRes = await fetch(commentsUrl, {
        headers: { 'User-Agent': UA },
        signal: AbortSignal.timeout(15_000),
      });
      if (cRes.ok) {
        const threads = await cRes.json() as Array<{ data?: { children?: Array<{ data?: { body?: string; score?: number; stickied?: boolean } }> } }>;
        const comments = threads?.[1]?.data?.children ?? [];
        const best = comments
          .map(c => c.data)
          .filter((c): c is { body: string; score: number; stickied?: boolean } =>
            !!c && typeof c.body === 'string' && !c.stickied && (c.score ?? 0) > 0)
          .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))[0];
        if (best) topComment = best.body;
      }
    } catch (_commentErr) {
      // Comment fetch is best-effort; continue with selftext only
    }

    const body = [
      post.selftext ? `Question / Original post:\n${post.selftext}` : '',
      topComment ? `Top answer (community-voted):\n${topComment}` : '',
    ].filter(Boolean).join('\n\n').trim();

    // Skip if both the selftext and top comment are empty — nothing to simplify
    if (body.length < 100) continue;

    items.push({
      url: `https://www.reddit.com${post.permalink}`,
      title: cleanText(post.title ?? ''),
      publishedAt: post.created_utc ? new Date(post.created_utc * 1000).toISOString() : null,
      description: (post.selftext ?? '').slice(0, 280),
      body,
    });
  }

  return items;
}

interface RedditPost {
  title?: string;
  permalink: string;
  selftext?: string;
  score?: number;
  created_utc?: number;
  stickied?: boolean;
  over_18?: boolean;
}

/**
 * Stack Exchange: pulls high-score questions from the configured site and
 * pairs each with the top-scoring answer body. Uses the public API (no key
 * needed for low volume) with the `withbody` filter to include HTML bodies.
 */
async function fetchStackExchange(source: ContentSource): Promise<FetchedArticle[]> {
  const cfg = source.fetch_config ?? {};
  const site     = String(cfg.site ?? '');
  const minScore = Number(cfg.min_score ?? 10);
  const limit    = Number(cfg.limit ?? 25);

  if (!site) return [];

  const url = `https://api.stackexchange.com/2.3/questions?site=${site}&sort=votes&order=desc&pagesize=${limit}&filter=withbody`;
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, 'Accept-Encoding': 'gzip' },
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`StackExchange HTTP ${res.status}`);

  const data = await res.json() as {
    items?: Array<{
      question_id: number;
      title: string;
      body?: string;
      score: number;
      link: string;
      creation_date: number;
      is_answered?: boolean;
      accepted_answer_id?: number;
    }>;
  };

  const qs = (data.items ?? []).filter(q => q.score >= minScore && q.is_answered);

  const items: FetchedArticle[] = [];
  for (const q of qs.slice(0, limit)) {
    await sleep(400);
    let answerBody = '';
    try {
      const ansUrl = `https://api.stackexchange.com/2.3/questions/${q.question_id}/answers?site=${site}&sort=votes&order=desc&pagesize=1&filter=withbody`;
      const aRes = await fetch(ansUrl, {
        headers: { 'User-Agent': UA, 'Accept-Encoding': 'gzip' },
        signal: AbortSignal.timeout(15_000),
      });
      if (aRes.ok) {
        const aData = await aRes.json() as { items?: Array<{ body?: string }> };
        answerBody = aData.items?.[0]?.body ?? '';
      }
    } catch (_answerErr) {
      // Answer fetch is best-effort
    }

    if (!answerBody) continue; // cross-ref needs an answer to verify against

    // SE bodies are HTML — reuse extractContent's tag-stripper via a minimal wrapper
    const qPlain = stripHtml(q.body ?? '');
    const aPlain = stripHtml(answerBody);
    const body = `Question:\n${qPlain}\n\nTop-voted answer:\n${aPlain}`;

    if (body.length < 200) continue;

    items.push({
      url: q.link,
      title: cleanText(q.title),
      publishedAt: new Date(q.creation_date * 1000).toISOString(),
      description: qPlain.slice(0, 280),
      body,
    });
  }

  return items;
}

/** Minimal HTML → plain-text for community bodies (SE, YouTube) */
function stripHtml(html: string): string {
  return cleanText(
    html
      .replace(/<(p|br|li|h[1-6])[^>]*>/gi, '\n')
      .replace(/<\/(p|h[1-6])>/gi, '\n')
      .replace(/<[^>]+>/g, ''),
  ).replace(/\n{3,}/g, '\n\n').trim();
}

/**
 * YouTube: lists the configured channel's top videos from the last N months
 * via the YouTube Data API v3, then pulls each video's caption track via the
 * public timedtext endpoint. Requires YOUTUBE_API_KEY.
 */
async function fetchYouTube(source: ContentSource): Promise<FetchedArticle[]> {
  if (!YOUTUBE_API_KEY) {
    console.warn(`[${source.name}] YOUTUBE_API_KEY not set — skipping`);
    return [];
  }

  const cfg = source.fetch_config ?? {};
  const channelId = String(cfg.channel_id ?? '');
  const maxAgeMonths = Number(cfg.max_age_months ?? 12);
  const limit = Number(cfg.limit ?? 10);

  if (!channelId) return [];

  const publishedAfter = new Date();
  publishedAfter.setMonth(publishedAfter.getMonth() - maxAgeMonths);

  const searchUrl =
    `https://www.googleapis.com/youtube/v3/search` +
    `?key=${YOUTUBE_API_KEY}` +
    `&channelId=${channelId}` +
    `&part=snippet` +
    `&order=viewCount` +
    `&type=video` +
    `&maxResults=${limit}` +
    `&publishedAfter=${publishedAfter.toISOString()}`;

  const res = await fetch(searchUrl, { signal: AbortSignal.timeout(15_000) });
  if (!res.ok) throw new Error(`YouTube search HTTP ${res.status}`);

  const data = await res.json() as {
    items?: Array<{
      id: { videoId: string };
      snippet: { title: string; description: string; publishedAt: string };
    }>;
  };

  const items: FetchedArticle[] = [];
  for (const v of (data.items ?? []).slice(0, limit)) {
    await sleep(400);
    const videoId = v.id.videoId;
    const title   = cleanText(v.snippet.title);
    const url     = `https://www.youtube.com/watch?v=${videoId}`;

    // Pull caption track (best-effort — not every video has captions)
    let transcript = '';
    try {
      const ccRes = await fetch(
        `https://www.youtube.com/api/timedtext?lang=en&v=${videoId}`,
        { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(15_000) },
      );
      if (ccRes.ok) {
        const xml = await ccRes.text();
        transcript = Array.from(xml.matchAll(/<text[^>]*>([\s\S]*?)<\/text>/g))
          .map(m => cleanText(m[1]))
          .join(' ');
      }
    } catch (_ccErr) {
      // Transcript is best-effort
    }

    const body = [
      `Video: ${title}`,
      v.snippet.description ? `Description: ${v.snippet.description}` : '',
      transcript ? `Transcript:\n${transcript}` : '',
    ].filter(Boolean).join('\n\n').trim();

    if (body.length < 200) continue; // transcript missing + short description = skip

    items.push({
      url,
      title,
      publishedAt: v.snippet.publishedAt,
      description: (v.snippet.description ?? '').slice(0, 280),
      body,
    });
  }

  return items;
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
    // ── 1. Fetch enabled sources ──────────────────────────────────────────────
    // Community source types (reddit/youtube/stackexchange) read from
    // fetch_config, not feed_url — so we can't filter by `feed_url not null`
    // anymore. Filtering happens per-source inside the dispatch loop below.
    const { data: sources, error: srcErr } = await supabase
      .from('content_sources')
      .select('id, name, domain, feed_url, feed_type, source_type, fetch_config, scrape_enabled, last_scraped_at')
      .eq('scrape_enabled', true);

    if (srcErr) throw srcErr;
    if (!sources || sources.length === 0) {
      return json({ message: 'No enabled sources.', ...stats });
    }

    console.log(`[scrape-articles] Processing ${sources.length} sources...`);

    // ── 2. Process each source ────────────────────────────────────────────────
    for (const source of sources as ContentSource[]) {
      stats.sources_processed++;
      const sourceType = source.source_type || (source.feed_url ? 'rss' : 'html');
      console.log(`\n[${source.name}] type=${sourceType} feed=${source.feed_url ?? '-'}`);

      try {
        // ── 2a. Dispatch by source type ──────────────────────────────────────
        // RSS / Atom → parseFeed (existing path)
        // Reddit / YouTube / StackExchange → dedicated fetchers return full body
        // HTML → skip (needs a crawl seed; not in scope for this pass)
        let feedItems: FetchedArticle[] = [];

        if (sourceType === 'reddit') {
          feedItems = await fetchReddit(source);
        } else if (sourceType === 'stackexchange') {
          feedItems = await fetchStackExchange(source);
        } else if (sourceType === 'youtube') {
          feedItems = await fetchYouTube(source);
        } else if (sourceType === 'rss' || sourceType === 'atom') {
          if (!source.feed_url) {
            console.log(`[${source.name}] RSS source has no feed_url — skipping`);
            continue;
          }
          const feedRes = await fetch(source.feed_url, {
            headers: { 'User-Agent': UA },
            signal: AbortSignal.timeout(15_000),
            redirect: 'follow',
          });
          if (!feedRes.ok) throw new Error(`Feed HTTP ${feedRes.status}`);
          feedItems = parseFeed(await feedRes.text());
        } else {
          // 'html' sources need a crawl strategy wired in the next iteration
          console.log(`[${source.name}] source_type=${sourceType} not yet fetchable — skipping`);
          continue;
        }

        stats.feed_items_found += feedItems.length;
        console.log(`[${source.name}] ${feedItems.length} items discovered`);

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
            let title: string;
            let content: string;

            if (item.body) {
              // Community fetchers (Reddit / SE / YouTube) already extracted the
              // full body during listing. No per-article HTTP fetch needed.
              title   = item.title;
              content = item.body;
            } else {
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

              const extracted = extractContent(await pageRes.text());
              title   = extracted.title || item.title;
              content = extracted.content;
            }

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
