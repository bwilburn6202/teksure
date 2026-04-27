/**
 * GuideRating — Star-rating + comment widget for guide detail pages
 *
 * Shows:
 *  - Average star rating + total count (visible to everyone)
 *  - A form for logged-in users to leave a rating (1–5 stars) + optional comment
 *  - User's existing rating pre-filled if they've already rated
 *  - Last 5 comments from other users
 *
 * Usage:
 *   <GuideRating guideId="how-to-connect-to-wifi" />
 */

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
interface RatingSummary {
  averageRating: number;
  totalRatings: number;
}

interface RatingComment {
  id: string;
  rating: number;
  comment: string | null;
  created_at: string;
}

interface Props {
  guideId: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function StarRow({
  value,
  interactive,
  hovered,
  onHover,
  onClick,
}: {
  value: number;
  interactive?: boolean;
  hovered?: number;
  onHover?: (n: number) => void;
  onClick?: (n: number) => void;
}) {
  const displayValue = hovered ?? value;
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          disabled={!interactive}
          onMouseEnter={() => onHover?.(n)}
          onMouseLeave={() => onHover?.(0)}
          onClick={() => onClick?.(n)}
          className={`${interactive ? "cursor-pointer hover:scale-110 transition-transform" : "cursor-default"}`}
          aria-label={interactive ? `Rate ${n} star${n > 1 ? "s" : ""}` : undefined}
        >
          <Star
            className={`h-6 w-6 ${
              n <= displayValue
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function GuideRating({ guideId }: Props) {
  const [user, setUser] = useState<any>(null);
  const [summary, setSummary] = useState<RatingSummary>({ averageRating: 0, totalRatings: 0 });
  const [comments, setComments] = useState<RatingComment[]>([]);
  const [myRating, setMyRating] = useState(0);
  const [myComment, setMyComment] = useState("");
  const [hoveredStar, setHoveredStar] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // ── Fetch data ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const init = async () => {
      // Check auth
      const { data: authData } = await supabase.auth.getUser();
      setUser(authData.user);

      await fetchRatings(authData.user?.id);
    };
    init();
  }, [guideId]);

  // Record a page view — deduplicated per browser session via sessionStorage
  // This prevents inflated counts when a user refreshes the page or
  // navigates away and comes back within the same browser session.
  useEffect(() => {
    const sessionKey = `guide_viewed_${guideId}`;

    // Skip if we already recorded a view for this guide in this session
    if (sessionStorage.getItem(sessionKey)) return;

    const recordView = async () => {
      const { data: authData } = await supabase.auth.getUser();
      const { error } = await supabase.from("guide_views").insert({
        guide_id: guideId,
        user_id: authData.user?.id ?? null,
      });
      if (!error) {
        // Mark as viewed for this session so we don't double-count
        sessionStorage.setItem(sessionKey, "1");
      }
    };
    recordView();
  }, [guideId]);

  const fetchRatings = async (userId?: string) => {
    setLoading(true);

    // Fetch all ratings for this guide
    const { data: ratings } = await supabase
      .from("guide_ratings")
      .select("id, rating, comment, created_at, user_id")
      .eq("guide_id", guideId)
      .order("created_at", { ascending: false });

    if (ratings && ratings.length > 0) {
      const avg = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
      setSummary({ averageRating: avg, totalRatings: ratings.length });

      // Show last 5 comments (non-empty)
      const withComments = ratings
        .filter((r) => r.comment && r.comment.trim() !== "")
        .slice(0, 5);
      setComments(withComments);

      // Pre-fill user's existing rating
      if (userId) {
        const mine = ratings.find((r) => r.user_id === userId);
        if (mine) {
          setMyRating(mine.rating);
          setMyComment(mine.comment ?? "");
          setSubmitted(true);
        }
      }
    } else {
      setSummary({ averageRating: 0, totalRatings: 0 });
      setComments([]);
    }

    setLoading(false);
  };

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!user) return;
    if (myRating === 0) {
      setError("Please select a star rating before submitting.");
      return;
    }
    setError("");
    setSubmitting(true);

    // Upsert (insert or update if they already rated)
    const { error: dbError } = await supabase.from("guide_ratings").upsert(
      {
        user_id: user.id,
        guide_id: guideId,
        rating: myRating,
        comment: myComment.trim() || null,
      },
      { onConflict: "user_id,guide_id" }
    );

    if (dbError) {
      setError("Something went wrong saving your rating. Please try again.");
    } else {
      setSubmitted(true);
      await fetchRatings(user.id);
    }
    setSubmitting(false);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="mt-10 border-t border-gray-200 pt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Was this guide helpful?</h2>

      {/* Summary */}
      {!loading && summary.totalRatings > 0 && (
        <div className="flex items-center gap-4 mb-6 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-500">
              {summary.averageRating.toFixed(1)}
            </p>
            <p className="text-xs text-gray-500 mt-1">out of 5</p>
          </div>
          <div>
            <StarRow value={Math.round(summary.averageRating)} />
            <p className="text-sm text-gray-500 mt-1">
              {summary.totalRatings} {summary.totalRatings === 1 ? "rating" : "ratings"}
            </p>
          </div>
        </div>
      )}

      {/* Rating Form */}
      {user ? (
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">
            {submitted ? "Update your rating" : "Leave a rating"}
          </h3>

          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">How helpful was this guide?</p>
            <StarRow
              value={myRating}
              interactive
              hovered={hoveredStar}
              onHover={setHoveredStar}
              onClick={(n) => setMyRating(n)}
            />
            {hoveredStar > 0 && (
              <p className="text-xs text-gray-400 mt-1">
                {["", "Not helpful", "Somewhat helpful", "Helpful", "Very helpful", "Extremely helpful"][hoveredStar]}
              </p>
            )}
          </div>

          <Textarea
            value={myComment}
            onChange={(e) => setMyComment(e.target.value)}
            placeholder="Share what was helpful or what could be improved (optional)..."
            className="mb-3 text-sm resize-none"
            rows={3}
            maxLength={500}
          />

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          {submitted ? (
            <div className="flex items-center gap-3">
              <p className="text-green-600 text-sm font-medium">✓ Rating saved!</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSubmitted(false)}
              >
                Edit Rating
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={submitting || myRating === 0}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {submitting ? "Saving..." : "Submit Rating"}
            </Button>
          )}
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6 text-center">
          <p className="text-gray-600 mb-3">
            Sign in to leave a rating and help others find great guides.
          </p>
          <a
            href="/login"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
          >
            Sign In to Rate This Guide
          </a>
        </div>
      )}

      {/* Recent Comments */}
      {comments.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">What others said</h3>
          <div className="space-y-3">
            {comments.map((c) => (
              <div
                key={c.id}
                className="bg-gray-50 border border-gray-100 rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <StarRow value={c.rating} />
                  <span className="text-xs text-gray-400">{formatDate(c.created_at)}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{c.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
