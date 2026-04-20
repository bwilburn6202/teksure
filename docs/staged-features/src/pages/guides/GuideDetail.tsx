/**
 * GuideDetail — /guides/:id
 *
 * Shows a single guide with:
 *  - Step-by-step content
 *  - Video tutorial (if guide has videoUrl)
 *  - Bookmark / Save button (logged-in users)
 *  - Star rating widget
 *  - Back to guides + related tags
 */

import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { guides } from "@/data/guides";
import GuideVideo from "@/components/GuideVideo";
import GuideRating from "@/components/GuideRating";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Clock,
  BookmarkPlus,
  BookmarkCheck,
  CheckCircle2,
  Tag,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Difficulty label colours
// ─────────────────────────────────────────────────────────────────────────────

const difficultyColour: Record<string, string> = {
  beginner:     "bg-green-100 text-green-700",
  intermediate: "bg-yellow-100 text-yellow-700",
  advanced:     "bg-red-100 text-red-700",
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export default function GuideDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const guide = guides.find((g) => g.id === id);

  // ── Bookmark state ─────────────────────────────────────────────────────────
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkLoading, setBookmarkLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  // ── View tracking (sessionStorage dedup) ──────────────────────────────────
  useEffect(() => {
    if (!guide) return;
    const key = `viewed_${guide.id}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    supabase.from("guide_views").insert({ guide_id: guide.id }).then(() => {});
  }, [guide?.id]);

  // ── Auth + bookmark status ─────────────────────────────────────────────────
  useEffect(() => {
    if (!guide) return;
    const init = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) return;
      setUserId(data.user.id);

      const { data: bm } = await supabase
        .from("guide_bookmarks")
        .select("id")
        .eq("guide_id", guide.id)
        .maybeSingle();

      setBookmarked(!!bm);
    };
    init();
  }, [guide?.id]);

  // ── Toggle bookmark ────────────────────────────────────────────────────────
  const toggleBookmark = async () => {
    if (!userId || !guide) {
      navigate("/login");
      return;
    }
    setBookmarkLoading(true);
    if (bookmarked) {
      await supabase
        .from("guide_bookmarks")
        .delete()
        .eq("guide_id", guide.id);
      setBookmarked(false);
    } else {
      await supabase
        .from("guide_bookmarks")
        .insert({ guide_id: guide.id, user_id: userId });
      setBookmarked(true);
    }
    setBookmarkLoading(false);
  };

  // ── 404 ────────────────────────────────────────────────────────────────────
  if (!guide) {
    return (
      <main className="min-h-screen pt-20 pb-16 bg-gray-50 flex flex-col items-center justify-center">
        <p className="text-gray-500 mb-4 text-lg">Guide not found.</p>
        <Link
          to="/guides"
          className="text-blue-600 hover:underline font-medium"
        >
          Back to all guides
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">

        {/* Back link */}
        <Link
          to="/guides"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-6 mt-4"
        >
          <ArrowLeft className="w-4 h-4" />
          All guides
        </Link>

        {/* Guide header */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
              {guide.title}
            </h1>

            {/* Bookmark button */}
            <button
              onClick={toggleBookmark}
              disabled={bookmarkLoading}
              title={bookmarked ? "Remove bookmark" : "Save this guide"}
              aria-label={bookmarked ? "Remove bookmark" : "Save this guide"}
              className={`shrink-0 mt-1 flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm font-medium transition-colors disabled:opacity-50 ${
                bookmarked
                  ? "bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100"
                  : "bg-white border-gray-200 text-gray-500 hover:border-blue-200 hover:text-blue-600"
              }`}
            >
              {bookmarked ? (
                <>
                  <BookmarkCheck className="w-4 h-4" />
                  <span className="hidden sm:inline">Saved</span>
                </>
              ) : (
                <>
                  <BookmarkPlus className="w-4 h-4" />
                  <span className="hidden sm:inline">Save</span>
                </>
              )}
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-base mb-4 leading-relaxed">
            {guide.description}
          </p>

          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="capitalize text-xs text-gray-500">
              {guide.category}
            </Badge>
            <span
              className={`text-xs px-2.5 py-1 rounded-full font-medium capitalize ${
                difficultyColour[guide.difficulty] ?? "bg-gray-100 text-gray-600"
              }`}
            >
              {guide.difficulty}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              {guide.timeToComplete}
            </span>
          </div>
        </div>

        {/* Video tutorial */}
        {guide.videoUrl && (
          <GuideVideo url={guide.videoUrl} title={guide.title} />
        )}

        {/* Steps */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Step-by-step instructions
          </h2>
          <ol className="space-y-5">
            {guide.steps.map((step) => (
              <li key={step.number} className="flex gap-4">
                {/* Step number circle */}
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                  {step.number}
                </div>
                {/* Step content */}
                <div className="flex-1 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                  <p className="font-semibold text-gray-800 mb-1">
                    {step.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.content}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Completion note */}
          <div className="mt-6 flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            <p className="text-sm text-green-700">
              <span className="font-semibold">You're all set!</span> If you get
              stuck at any step, head to our{" "}
              <Link
                to="/community"
                className="underline hover:text-green-900"
              >
                Community Forum
              </Link>{" "}
              or{" "}
              <Link to="/book" className="underline hover:text-green-900">
                book a technician
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Tags */}
        {guide.tags && guide.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <Tag className="w-3.5 h-3.5 text-gray-300 shrink-0" />
            {guide.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Rating widget */}
        <GuideRating guideId={guide.id} />

        {/* Bottom bookmark reminder for non-logged-in users */}
        {!userId && (
          <div className="mt-8 text-center bg-blue-50 border border-blue-100 rounded-xl p-5">
            <p className="text-sm text-blue-700 mb-3">
              Found this guide useful?{" "}
              <strong>Sign in to save it for later.</strong>
            </p>
            <Link
              to="/login"
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              Sign in
            </Link>
            {" · "}
            <Link
              to="/signup"
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              Create a free account
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
