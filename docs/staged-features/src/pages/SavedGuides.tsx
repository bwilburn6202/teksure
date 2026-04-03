/**
 * SavedGuides — /saved-guides
 *
 * Shows all guides the logged-in user has bookmarked.
 * Logged-out users see a friendly prompt to sign in.
 *
 * Each card:
 *  - Title, category badge, difficulty, time to complete
 *  - "Remove" button to un-bookmark
 *  - "Read Guide" link
 */

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { guides } from "@/data/guides";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bookmark, BookmarkX, BookOpen, ArrowRight, LogIn } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface BookmarkRow {
  id: string;
  guide_id: string;
  created_at: string;
}

// ── Difficulty colour ─────────────────────────────────────────────────────────

const difficultyColour: Record<string, string> = {
  beginner: "bg-green-100 text-green-700",
  intermediate: "bg-yellow-100 text-yellow-700",
  advanced: "bg-red-100 text-red-700",
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function SavedGuides() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [bookmarks, setBookmarks] = useState<BookmarkRow[]>([]);
  const [removing, setRemoving] = useState<string | null>(null); // guide_id being removed

  // ── Auth + fetch ───────────────────────────────────────────────────────────
  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        setAuthed(false);
        setLoading(false);
        return;
      }
      setAuthed(true);
      await fetchBookmarks();
    };
    init();
  }, []);

  const fetchBookmarks = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("guide_bookmarks")
      .select("id, guide_id, created_at")
      .order("created_at", { ascending: false });

    if (!error && data) setBookmarks(data as BookmarkRow[]);
    setLoading(false);
  };

  // ── Remove bookmark ────────────────────────────────────────────────────────
  const removeBookmark = async (guideId: string) => {
    setRemoving(guideId);
    await supabase
      .from("guide_bookmarks")
      .delete()
      .eq("guide_id", guideId);
    setBookmarks((prev) => prev.filter((b) => b.guide_id !== guideId));
    setRemoving(null);
  };

  // ── Resolve guide objects ──────────────────────────────────────────────────
  // Match bookmarks → guide data; skip any that no longer exist
  const saved = bookmarks
    .map((b) => ({ ...b, guide: guides.find((g) => g.id === b.guide_id) }))
    .filter((b) => b.guide != null) as Array<
    BookmarkRow & { guide: (typeof guides)[number] }
  >;

  // ── Render ─────────────────────────────────────────────────────────────────

  if (!authed && !loading) {
    return (
      <main className="min-h-screen pt-20 pb-16 bg-gray-50">
        <div className="max-w-lg mx-auto px-4 text-center py-20">
          <Bookmark className="w-14 h-14 text-blue-200 mx-auto mb-5" />
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Save your favourite guides
          </h1>
          <p className="text-gray-500 mb-8">
            Sign in to bookmark guides and find them here whenever you need
            them.
          </p>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            onClick={() => navigate("/login")}
          >
            <LogIn className="w-4 h-4" />
            Sign in to get started
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8 mt-6">
          <Bookmark className="w-7 h-7 text-blue-600 shrink-0" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 leading-tight">
              Saved Guides
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">
              Guides you've bookmarked for easy access
            </p>
          </div>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div className="space-y-4">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-28 rounded-xl bg-white animate-pulse border border-gray-100"
              />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && saved.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="w-14 h-14 text-blue-100 mx-auto mb-5" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              No saved guides yet
            </h2>
            <p className="text-gray-400 mb-8 max-w-xs mx-auto">
              When you find a guide helpful, tap the bookmark icon to save it
              here.
            </p>
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
            >
              Browse guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Guide cards */}
        {!loading && saved.length > 0 && (
          <div className="space-y-4">
            {saved.map(({ guide, guide_id }) => (
              <Card
                key={guide_id}
                className="border border-gray-200 bg-white hover:border-blue-200 transition-colors"
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-4">

                    {/* Left: info */}
                    <div className="min-w-0">
                      <Link
                        to={`/guides/${guide.id}`}
                        className="font-semibold text-gray-800 hover:text-blue-600 transition-colors text-base leading-snug block mb-2"
                      >
                        {guide.title}
                      </Link>

                      {/* Badges row */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge
                          variant="outline"
                          className="capitalize text-xs text-gray-500"
                        >
                          {guide.category}
                        </Badge>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${
                            difficultyColour[guide.difficulty] ??
                            "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {guide.difficulty}
                        </span>
                        <span className="text-xs text-gray-400">
                          · {guide.timeToComplete}
                        </span>
                      </div>

                      {/* Read link */}
                      <Link
                        to={`/guides/${guide.id}`}
                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline font-medium"
                      >
                        Read guide
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Right: remove button */}
                    <button
                      onClick={() => removeBookmark(guide_id)}
                      disabled={removing === guide_id}
                      title="Remove bookmark"
                      className="shrink-0 mt-0.5 p-2 rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-50 transition-colors disabled:opacity-40"
                    >
                      <BookmarkX className="w-5 h-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Footer browse link */}
            <div className="pt-4 text-center">
              <Link
                to="/guides"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-600 transition-colors"
              >
                Browse more guides
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
