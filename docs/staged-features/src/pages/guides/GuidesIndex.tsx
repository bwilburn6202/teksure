/**
 * GuidesIndex — Guide listing page (decluttered)
 *
 * Design goals:
 *  - Search bar + category filter pills — no sidebar
 *  - Cards show: icon, category, title, difficulty dot — nothing else
 *  - Clean grid, consistent spacing, no badge soup
 */

import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Wifi, Shield, Smartphone, Settings, Mail, Printer, CreditCard, HelpCircle, Bookmark } from "lucide-react";
import { guides } from "@/data/guides";
import { supabase } from "@/integrations/supabase/client";

// ── Category config ───────────────────────────────────────────────────────────
const CATEGORIES = [
  { key: "all",      label: "All" },
  { key: "wifi",     label: "Wi-Fi" },
  { key: "security", label: "Security" },
  { key: "devices",  label: "Devices" },
  { key: "software", label: "Software" },
  { key: "email",    label: "Email" },
  { key: "backup",   label: "Backup" },
  { key: "printing", label: "Printing" },
  { key: "payments", label: "Payments" },
];

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  wifi:     Wifi,
  security: Shield,
  devices:  Smartphone,
  software: Settings,
  email:    Mail,
  printing: Printer,
  payments: CreditCard,
};

const DIFFICULTY_COLOR: Record<string, string> = {
  beginner:     "bg-green-400",
  intermediate: "bg-yellow-400",
  advanced:     "bg-red-400",
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function GuidesIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  // Load user's bookmarked guide IDs once (silent — no error shown if logged out)
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) return;
      supabase
        .from("guide_bookmarks")
        .select("guide_id")
        .then(({ data: rows }) => {
          if (rows) setSavedIds(new Set(rows.map((r: { guide_id: string }) => r.guide_id)));
        });
    });
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return guides.filter((g) => {
      const matchesCat = category === "all" || g.category === category;
      const matchesQ =
        !q ||
        g.title.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        g.tags?.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQ;
    });
  }, [query, category]);

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Guides</h1>
          <p className="text-gray-500 text-sm mb-6">
            Plain-English instructions for everyday tech tasks.
          </p>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides…"
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
            />
          </div>
        </div>

        {/* Category pills — scrollable on mobile */}
        <div className="max-w-5xl mx-auto px-4 pb-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {CATEGORIES.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setCategory(key)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === key
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Guide grid */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <HelpCircle className="h-10 w-10 mx-auto mb-3 opacity-40" />
            <p className="font-medium text-gray-500">No guides found</p>
            <p className="text-sm mt-1">Try a different search or category</p>
          </div>
        ) : (
          <>
            <p className="text-xs text-gray-400 mb-5">
              {filtered.length} guide{filtered.length !== 1 ? "s" : ""}
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filtered.map((guide) => {
                const Icon = CATEGORY_ICONS[guide.category] ?? HelpCircle;
                return (
                  <Link
                    key={guide.id}
                    to={`/guides/${guide.id}`}
                    className="group flex flex-col p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all bg-white"
                  >
                    {/* Icon + right meta (bookmark indicator + difficulty dot) */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <Icon className="h-4.5 w-4.5 text-blue-600 h-[18px] w-[18px]" />
                      </div>
                      <div className="flex items-center gap-2">
                        {savedIds.has(guide.id) && (
                          <Bookmark
                            className="w-3.5 h-3.5 fill-blue-400 text-blue-400"
                            title="Saved"
                          />
                        )}
                        <span
                          title={guide.difficulty}
                          className={`w-2 h-2 rounded-full ${
                            DIFFICULTY_COLOR[guide.difficulty] ?? "bg-gray-300"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-xs text-gray-400 mb-1">
                      {CATEGORIES.find((c) => c.key === guide.category)?.label ?? guide.category}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-blue-700 transition-colors">
                      {guide.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {guide.description}
                    </p>

                    {/* Time — only metadata shown */}
                    {guide.timeToComplete && (
                      <p className="text-xs text-gray-300 mt-auto pt-3">
                        {guide.timeToComplete}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
