/**
 * TrendingTopics — "What people are asking" widget
 *
 * Shows the top 6 trending tech questions pulled from Reddit (r/techsupport,
 * r/seniors) and Hacker News via the fetch-tech-trends Edge Function.
 *
 * Each item links out to the original thread AND, where possible, to a
 * matching TekSure guide.
 *
 * Usage:
 *   import TrendingTopics from "@/components/TrendingTopics";
 *   <TrendingTopics />
 *
 * Drop it on the homepage (Index.tsx) or the GuidesIndex page.
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, ExternalLink, ArrowRight, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// ── Types ─────────────────────────────────────────────────────────────────────

interface TrendItem {
  title: string;
  source: string;
  url: string;
  score: number;
}

// ── Simple guide keyword matcher ──────────────────────────────────────────────
// Maps keywords to TekSure guide slugs so we can link to relevant guides

const GUIDE_KEYWORD_MAP: { keywords: string[]; slug: string }[] = [
  { keywords: ["wifi", "wi-fi", "internet", "router", "connect"], slug: "how-to-connect-to-wifi" },
  { keywords: ["slow internet", "buffering", "speed"], slug: "troubleshoot-slow-internet" },
  { keywords: ["scam", "phishing", "fraud", "suspicious"], slug: "avoid-scams-online" },
  { keywords: ["password", "login", "forgot", "locked out"], slug: "reset-forgotten-password" },
  { keywords: ["update", "software", "ios", "android", "windows"], slug: "update-your-software" },
  { keywords: ["backup", "photos", "pictures", "icloud", "google photos"], slug: "backup-your-photos" },
  { keywords: ["storage", "full", "space", "memory"], slug: "free-up-storage" },
  { keywords: ["virus", "malware", "hacked", "ransomware"], slug: "antivirus-basics" },
  { keywords: ["restart", "frozen", "crash", "not responding"], slug: "restart-your-device" },
  { keywords: ["email", "gmail", "outlook"], slug: "set-up-email" },
  { keywords: ["bluetooth", "headphones", "speaker", "pair"], slug: "bluetooth-setup" },
  { keywords: ["video call", "zoom", "facetime", "skype"], slug: "video-calling" },
  { keywords: ["print", "printer"], slug: "how-to-print" },
  { keywords: ["screenshot", "screen capture"], slug: "take-a-screenshot" },
  { keywords: ["two factor", "2fa", "two-step", "verification"], slug: "two-factor-authentication" },
];

function findRelatedGuide(title: string): string | null {
  const lower = title.toLowerCase();
  for (const { keywords, slug } of GUIDE_KEYWORD_MAP) {
    if (keywords.some((kw) => lower.includes(kw))) return slug;
  }
  return null;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function TrendingTopics() {
  const [items, setItems] = useState<TrendItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const load = async () => {
    setLoading(true);
    setError(false);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData.session?.access_token;

      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/fetch-tech-trends`,
        {
          headers: token
            ? { Authorization: `Bearer ${token}` }
            : { apikey: import.meta.env.VITE_SUPABASE_ANON_KEY },
        }
      );

      if (!res.ok) throw new Error("fetch failed");
      const json = await res.json();
      setItems((json.trending ?? []).slice(0, 6));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (error) return null; // Fail silently — don't break the page

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4.5 w-4.5 text-blue-600 h-[18px] w-[18px]" />
          <h2 className="text-base font-semibold text-gray-800">
            What people are asking right now
          </h2>
        </div>
        <button
          onClick={load}
          disabled={loading}
          className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 transition-colors"
          title="Refresh"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
          {loading ? "Loading…" : "Refresh"}
        </button>
      </div>

      {loading ? (
        /* Skeleton */
        <div className="grid sm:grid-cols-2 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-16 rounded-xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      ) : items.length === 0 ? null : (
        <div className="grid sm:grid-cols-2 gap-3">
          {items.map((item, i) => {
            const guideSlug = findRelatedGuide(item.title);
            return (
              <div
                key={i}
                className="group flex items-start gap-3 p-3.5 rounded-xl border border-gray-100 bg-white hover:border-blue-200 transition-all"
              >
                {/* Source badge */}
                <span className="shrink-0 text-xs font-medium px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 mt-0.5">
                  {item.source}
                </span>

                {/* Title */}
                <p className="text-sm text-gray-700 leading-snug flex-1 line-clamp-2">
                  {item.title}
                </p>

                {/* Links */}
                <div className="flex flex-col gap-1 shrink-0 items-end">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-500 transition-colors"
                    title="View thread"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  {guideSlug && (
                    <Link
                      to={`/guides/${guideSlug}`}
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                      title="Read our guide"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Footer hint */}
      {!loading && items.length > 0 && (
        <p className="text-xs text-gray-300 mt-3 text-right">
          Updated every 6 hours · from Reddit & Hacker News
        </p>
      )}
    </section>
  );
}
