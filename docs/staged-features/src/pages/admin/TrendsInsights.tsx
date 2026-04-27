/**
 * TrendsInsights — Admin page: Trending topics + Guide suggestion tool
 *
 * Route: /admin/trends
 * Gate: Admin only
 *
 * Features:
 *  - Shows all trending questions and news items (refreshable)
 *  - "Create Guide" button pre-fills a guide idea form
 *  - Manual topic research: type any topic → fetch live HN + Reddit threads
 *  - Copy guide title to clipboard with one click
 */

import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  TrendingUp,
  Newspaper,
  Search,
  RefreshCw,
  Copy,
  Check,
  ExternalLink,
  Lightbulb,
  BookOpen,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface TrendItem {
  title: string;
  source: string;
  url: string;
  score: number;
}

interface ResearchResult {
  title: string;
  source: string;
  url: string;
  score: number;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Convert a trending thread title into a potential guide title */
function toGuideTitle(threadTitle: string): string {
  // Strip common Reddit boilerplate
  const cleaned = threadTitle
    .replace(/^\[?(help|question|solved|update|psa|rant|advice)\]?:?\s*/i, "")
    .replace(/\s*\[.*?\]/g, "")
    .trim();
  // Capitalise first letter
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function TrendsInsights() {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [trending, setTrending] = useState<TrendItem[]>([]);
  const [news, setNews] = useState<TrendItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [researchQuery, setResearchQuery] = useState("");
  const [researching, setResearching] = useState(false);
  const [researchResults, setResearchResults] = useState<ResearchResult[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"trending" | "news" | "research">(
    "trending"
  );

  // ── Auth check ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) { navigate("/login"); return; }
      const { data: profile } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("user_id", data.user.id)
        .single();
      if (!profile?.is_admin) { navigate("/"); return; }
      setAuthChecked(true);
    };
    check();
  }, [navigate]);

  // ── Fetch trends ────────────────────────────────────────────────────────────
  const fetchTrends = useCallback(async (force = false) => {
    setLoading(true);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData.session?.access_token;
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/fetch-tech-trends${force ? "?force=1" : ""}`;
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      const json = await res.json();
      setTrending(json.trending ?? []);
      setNews(json.news ?? []);
    } catch {
      /* silent */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authChecked) fetchTrends();
  }, [authChecked, fetchTrends]);

  // ── Research a specific topic ───────────────────────────────────────────────
  const runResearch = async () => {
    if (!researchQuery.trim()) return;
    setResearching(true);
    setResearchResults([]);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData.session?.access_token;
      const encoded = encodeURIComponent(researchQuery.trim());
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/fetch-tech-trends?topic=${encoded}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (!res.ok) throw new Error();
      const json = await res.json();
      setResearchResults(json.results ?? []);
      setActiveTab("research");
    } catch {
      /* silent */
    } finally {
      setResearching(false);
    }
  };

  // ── Copy to clipboard ───────────────────────────────────────────────────────
  const copyTitle = (text: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  // ── Guard ────────────────────────────────────────────────────────────────────
  if (!authChecked)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400">Checking admin access…</p>
      </div>
    );

  const activeItems =
    activeTab === "trending"
      ? trending
      : activeTab === "news"
      ? news
      : researchResults;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
            <Link to="/admin" className="hover:text-gray-600 flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Admin Console
            </Link>
            <span>/</span>
            <span className="text-gray-700">Trends & Insights</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-7 w-7 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Trends & Insights
                </h1>
                <p className="text-gray-500 text-sm">
                  What real users are asking — fuel for new guides.
                </p>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => fetchTrends(true)}
              disabled={loading}
              className="text-xs gap-1.5"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-6">

        {/* Research a topic */}
        <Card className="mb-6 border-blue-100 bg-blue-50/40">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="h-4 w-4 text-blue-600" />
              <p className="text-sm font-semibold text-blue-800">
                Research any topic
              </p>
            </div>
            <p className="text-xs text-blue-600 mb-3">
              Type a tech topic to see what the community is currently discussing on Reddit &amp; Hacker News.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  value={researchQuery}
                  onChange={(e) => setResearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && runResearch()}
                  placeholder="e.g. smartphone scams, iphone battery, windows 11 issues…"
                  className="w-full pl-9 pr-4 py-2.5 border border-blue-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
                />
              </div>
              <Button
                onClick={runResearch}
                disabled={researching || !researchQuery.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm gap-1.5"
              >
                {researching ? (
                  <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Search className="h-3.5 w-3.5" />
                )}
                {researching ? "Searching…" : "Research"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex gap-2 mb-5">
          {(["trending", "news", "research"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-1.5 text-sm px-3.5 py-1.5 rounded-full border transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
              }`}
            >
              {tab === "trending" && <TrendingUp className="h-3.5 w-3.5" />}
              {tab === "news" && <Newspaper className="h-3.5 w-3.5" />}
              {tab === "research" && <Search className="h-3.5 w-3.5" />}
              {tab === "trending"
                ? `Trending (${trending.length})`
                : tab === "news"
                ? `News (${news.length})`
                : `Research${researchResults.length > 0 ? ` (${researchResults.length})` : ""}`}
            </button>
          ))}
        </div>

        {/* Items */}
        {loading && activeTab !== "research" ? (
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-16 rounded-xl bg-gray-100 animate-pulse" />
            ))}
          </div>
        ) : activeItems.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Search className="h-10 w-10 text-gray-200 mx-auto mb-3" />
              <p className="text-gray-500 font-medium mb-1">
                {activeTab === "research"
                  ? "Enter a topic above to start researching"
                  : "No items yet — click Refresh"}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {activeItems.map((item, i) => {
              const guideTitle = toGuideTitle(item.title);
              return (
                <Card
                  key={i}
                  className="border border-gray-100 hover:border-blue-100 transition-all"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 leading-snug mb-1">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <span className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">
                            {item.source}
                          </span>
                          {item.score > 0 && (
                            <span>{item.score} pts</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {/* Link to thread */}
                        {item.url && (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors"
                            title="View thread"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}

                        {/* Copy guide title */}
                        <button
                          onClick={() => copyTitle(guideTitle)}
                          className="p-1.5 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition-colors"
                          title="Copy as guide title"
                        >
                          {copied === guideTitle ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>

                        {/* Create guide shortcut */}
                        <Link
                          to={`/admin/guides?title=${encodeURIComponent(guideTitle)}`}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                          title="Create a guide based on this"
                        >
                          <BookOpen className="h-3.5 w-3.5" />
                          Create guide
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
