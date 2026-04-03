/**
 * fetch-tech-trends — Supabase Edge Function
 *
 * Fetches trending tech topics and news from:
 *  - Reddit public JSON (r/techsupport, r/seniors top posts — no auth)
 *  - HN Algolia API (free, no auth) for trending tech stories
 *
 * Returns two datasets:
 *  { trending: TrendItem[], news: NewsItem[] }
 *
 * Results are cached in the `tech_trends` Supabase table.
 * If cache is fresh (< 6 hours old), returns cached data without hitting
 * external APIs.
 *
 * Can also accept a ?topic=X query param for TekBot research mode —
 * searches HN Algolia for that specific topic and returns matching threads.
 *
 * Deploy: npx supabase functions deploy fetch-tech-trends --project-ref zrgtoefkqafndhxhbuag
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const CACHE_TTL_HOURS = 6;

// ── Types ─────────────────────────────────────────────────────────────────────

interface TrendItem {
  title: string;
  source: string;
  url: string;
  score: number;
  category: "question" | "discussion";
}

interface NewsItem {
  title: string;
  source: string;
  url: string;
  score: number;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Fetch with a timeout (ms). Returns null on error/timeout. */
async function fetchWithTimeout(
  url: string,
  timeoutMs = 8000
): Promise<Response | null> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "TekSure/1.0 (contact: admin@teksure.com)" },
    });
    clearTimeout(id);
    return res;
  } catch {
    clearTimeout(id);
    return null;
  }
}

/** Pull top posts from a subreddit's public JSON endpoint. */
async function fetchRedditTopics(
  subreddit: string,
  limit = 8
): Promise<TrendItem[]> {
  const url = `https://www.reddit.com/r/${subreddit}/top.json?t=week&limit=${limit}&raw_json=1`;
  const res = await fetchWithTimeout(url);
  if (!res || !res.ok) return [];

  try {
    const json = await res.json();
    const posts = json?.data?.children ?? [];
    return posts
      .filter(
        (p: { data: { title: string; score: number; url: string } }) =>
          p.data?.title && p.data.score > 0
      )
      .map(
        (p: {
          data: { title: string; score: number; url: string; permalink: string };
        }) => ({
          title: p.data.title,
          source: `r/${subreddit}`,
          url: `https://reddit.com${p.data.permalink}`,
          score: p.data.score,
          category: "question" as const,
        })
      );
  } catch {
    return [];
  }
}

/** Pull stories from HN Algolia for a search query. */
async function fetchHNStories(
  query: string,
  numericFiltersTag = "story",
  limit = 10
): Promise<NewsItem[]> {
  const encoded = encodeURIComponent(query);
  const url = `https://hn.algolia.com/api/v1/search?query=${encoded}&tags=${numericFiltersTag}&hitsPerPage=${limit}&numericFilters=created_at_i>` +
    Math.floor((Date.now() - 30 * 24 * 60 * 60 * 1000) / 1000);

  const res = await fetchWithTimeout(url);
  if (!res || !res.ok) return [];

  try {
    const json = await res.json();
    return (json?.hits ?? [])
      .filter(
        (h: { title?: string; objectID: string; points?: number; url?: string }) =>
          h.title && h.objectID
      )
      .map(
        (h: { title: string; objectID: string; points?: number; url?: string }) => ({
          title: h.title,
          source: "Hacker News",
          url: h.url ?? `https://news.ycombinator.com/item?id=${h.objectID}`,
          score: h.points ?? 0,
        })
      );
  } catch {
    return [];
  }
}

/** Deduplicate by title similarity (simple startsWith check). */
function dedupe<T extends { title: string }>(items: T[]): T[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = item.title.toLowerCase().slice(0, 40);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ── Main handler ─────────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response("ok", { headers: corsHeaders });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  const { searchParams } = new URL(req.url);
  const topicQuery = searchParams.get("topic")?.trim() ?? null;

  // ── TekBot research mode: search HN for a specific topic ──────────────────
  if (topicQuery) {
    const hnResults = await fetchHNStories(topicQuery, "story,comment_or_ask_hn", 8);
    const redditResults = await fetchRedditTopics(
      `${topicQuery.replace(/\s+/g, "")}`, 5
    );
    const combined = dedupe([
      ...hnResults.map((h) => ({
        title: h.title,
        source: h.source,
        url: h.url,
        score: h.score,
        snippet: "",
      })),
      ...redditResults.map((r) => ({
        title: r.title,
        source: r.source,
        url: r.url,
        score: r.score,
        snippet: "",
      })),
    ]).slice(0, 8);

    return new Response(JSON.stringify({ topic: topicQuery, results: combined }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // ── Check cache freshness ─────────────────────────────────────────────────
  const cacheThreshold = new Date(
    Date.now() - CACHE_TTL_HOURS * 60 * 60 * 1000
  ).toISOString();

  const { data: cached } = await supabase
    .from("tech_trends")
    .select("*")
    .gt("fetched_at", cacheThreshold)
    .order("score", { ascending: false });

  if (cached && cached.length > 0) {
    const trending = cached
      .filter((r: { type: string }) => r.type === "trending")
      .slice(0, 8);
    const news = cached
      .filter((r: { type: string }) => r.type === "news")
      .slice(0, 6);
    return new Response(JSON.stringify({ trending, news, fromCache: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // ── Fetch fresh data in parallel ─────────────────────────────────────────
  const [techsupportPosts, seniorsPosts, techPosts, hnNews, hnTechNews] =
    await Promise.all([
      fetchRedditTopics("techsupport", 10),
      fetchRedditTopics("seniors", 6),
      fetchRedditTopics("technology", 6),
      fetchHNStories("senior technology help everyday", "story", 6),
      fetchHNStories("technology consumer", "story", 8),
    ]);

  // Merge + dedupe trending questions
  const allTrending = dedupe(
    [...techsupportPosts, ...seniorsPosts, ...hnNews].sort(
      (a, b) => b.score - a.score
    )
  ).slice(0, 10);

  // Merge + dedupe news
  const allNews = dedupe(
    [...techPosts, ...hnTechNews].sort((a, b) => b.score - a.score)
  ).slice(0, 8);

  // ── Persist to cache ──────────────────────────────────────────────────────
  const now = new Date().toISOString();

  // Clear old records
  await supabase.from("tech_trends").delete().lt("fetched_at", cacheThreshold);

  const trendingRows = allTrending.map((t) => ({
    type: "trending",
    title: t.title,
    source: t.source,
    url: t.url,
    score: t.score,
    fetched_at: now,
  }));

  const newsRows = allNews.map((n) => ({
    type: "news",
    title: n.title,
    source: n.source,
    url: n.url,
    score: n.score,
    fetched_at: now,
  }));

  if (trendingRows.length + newsRows.length > 0) {
    await supabase.from("tech_trends").insert([...trendingRows, ...newsRows]);
  }

  return new Response(
    JSON.stringify({
      trending: allTrending,
      news: allNews,
      fromCache: false,
    }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
});
