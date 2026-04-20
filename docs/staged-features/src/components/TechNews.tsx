/**
 * TechNews — "In the News" widget
 *
 * Shows 4 current tech news stories relevant to everyday users,
 * sourced from HN and r/technology via the fetch-tech-trends Edge Function.
 *
 * Designed to be placed on the homepage below the hero or guide cards.
 *
 * Usage:
 *   import TechNews from "@/components/TechNews";
 *   <TechNews />
 */

import { useEffect, useState } from "react";
import { Newspaper, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface NewsItem {
  title: string;
  source: string;
  url: string;
  score: number;
}

export default function TechNews() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
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

        if (!res.ok) throw new Error();
        const json = await res.json();
        setItems((json.news ?? []).slice(0, 4));
      } catch {
        /* Fail silently */
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (!loading && items.length === 0) return null;

  return (
    <section className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-5">
          <Newspaper className="h-4.5 w-4.5 text-gray-500 h-[18px] w-[18px]" />
          <h2 className="text-base font-semibold text-gray-700">In the news</h2>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-12 rounded-xl bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-blue-700 leading-snug line-clamp-2 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.source}</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-gray-300 group-hover:text-blue-400 shrink-0 mt-0.5 transition-colors" />
              </a>
            ))}
          </div>
        )}

        <p className="text-xs text-gray-300 mt-3 text-right">
          Sourced from Hacker News & Reddit · updated every 6 hours
        </p>
      </div>
    </section>
  );
}
