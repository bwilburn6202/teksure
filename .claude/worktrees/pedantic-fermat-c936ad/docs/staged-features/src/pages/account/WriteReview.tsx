/**
 * WriteReview — /review/:bookingId
 *
 * Allows a logged-in user to rate their technician after a completed booking.
 *
 * Guards:
 *  - Must be logged in
 *  - Booking must belong to this user
 *  - Booking must be status=completed with an assigned technician
 *  - Only one review per booking (redirects to /my-bookings if already reviewed)
 *
 * On submit: inserts a row into tech_reviews, then redirects to /my-bookings
 */

import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Star,
  Wrench,
  CheckCircle,
  ArrowLeft,
  Loader2,
  AlertCircle,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface BookingContext {
  id: string;
  date: string;
  time: string;
  service_type: string;
  assigned_technician_id: string;
  tech_name: string;
  tech_specialties: string[];
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const serviceLabels: Record<string, string> = {
  "in-home": "In-Home Visit",
  remote: "Remote Support",
  phone: "Phone Guidance",
  "drop-off": "Drop-Off Service",
};

const starLabels = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

// ── Main Component ─────────────────────────────────────────────────────────────

export default function WriteReview() {
  const { bookingId } = useParams<{ bookingId: string }>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [booking, setBooking] = useState<BookingContext | null>(null);
  const [hovered, setHovered] = useState(0);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  // ── Load booking context ────────────────────────────────────────────────────
  useEffect(() => {
    const init = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        navigate("/login");
        return;
      }

      if (!bookingId) {
        setError("Invalid booking link.");
        setLoading(false);
        return;
      }

      // Fetch the booking
      const { data: b } = await supabase
        .from("bookings")
        .select(
          "id, date, time, service_type, status, assigned_technician_id, user_id"
        )
        .eq("id", bookingId)
        .maybeSingle();

      if (!b) {
        setError("Booking not found.");
        setLoading(false);
        return;
      }

      if (b.user_id !== userData.user.id) {
        setError("You can only review your own bookings.");
        setLoading(false);
        return;
      }

      if (b.status !== "completed") {
        setError(
          "You can only review a booking once the appointment is marked as completed."
        );
        setLoading(false);
        return;
      }

      if (!b.assigned_technician_id) {
        setError("No technician was assigned to this booking.");
        setLoading(false);
        return;
      }

      // Check if already reviewed
      const { data: existing } = await supabase
        .from("tech_reviews")
        .select("id")
        .eq("booking_id", bookingId)
        .maybeSingle();

      if (existing) {
        // Already reviewed — bounce back
        navigate("/my-bookings");
        return;
      }

      // Fetch tech profile
      const { data: tp } = await supabase
        .from("technician_profiles")
        .select("full_name, specialties")
        .eq("id", b.assigned_technician_id)
        .maybeSingle();

      setBooking({
        id: b.id,
        date: b.date,
        time: b.time,
        service_type: b.service_type,
        assigned_technician_id: b.assigned_technician_id,
        tech_name: tp?.full_name ?? "Your Technician",
        tech_specialties: tp?.specialties ?? [],
      });

      setLoading(false);
    };

    init();
  }, [bookingId, navigate]);

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (rating === 0 || !booking) return;
    setSubmitting(true);

    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      navigate("/login");
      return;
    }

    const { error: insertErr } = await supabase.from("tech_reviews").insert({
      booking_id: booking.id,
      user_id: userData.user.id,
      technician_profile_id: booking.assigned_technician_id,
      rating,
      comment: comment.trim() || null,
    });

    setSubmitting(false);

    if (insertErr) {
      setError("Something went wrong saving your review. Please try again.");
      return;
    }

    setDone(true);
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-sm text-center">
          <AlertCircle className="h-12 w-12 text-orange-400 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-gray-800 mb-2">Oops</h2>
          <p className="text-gray-600 text-sm mb-6">{error}</p>
          <Link to="/my-bookings">
            <Button variant="outline">Back to My Bookings</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-sm text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Thanks for your review!
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Your feedback helps us maintain a great team of technicians and
            helps other customers choose with confidence.
          </p>
          <Link to="/my-bookings">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Back to My Bookings
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const activeRating = hovered || rating;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-5">
        <div className="container mx-auto max-w-lg">
          <Link
            to="/my-bookings"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to My Bookings
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Write a Review</h1>
          <p className="text-gray-500 text-sm mt-1">
            Share your experience with {booking?.tech_name}.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-lg px-4 py-8">
        {/* Booking summary */}
        <Card className="mb-6 border border-gray-200">
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <Wrench className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  {booking?.tech_name}
                </p>
                <p className="text-xs text-gray-500">
                  {serviceLabels[booking?.service_type ?? ""] ?? booking?.service_type}
                  {" · "}
                  {booking?.date} at {booking?.time}
                </p>
                {booking && booking.tech_specialties.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {booking.tech_specialties.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Star rating */}
        <Card className="mb-4 border border-gray-200">
          <CardContent className="p-6">
            <h2 className="font-semibold text-gray-800 mb-1">
              How would you rate your experience?
            </h2>
            <p className="text-xs text-gray-400 mb-5">
              Tap a star to choose your rating.
            </p>

            {/* Stars — large touch targets for seniors */}
            <div
              className="flex justify-center gap-3 mb-3"
              onMouseLeave={() => setHovered(0)}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setRating(n)}
                  onMouseEnter={() => setHovered(n)}
                  className={`p-2 rounded-lg transition-transform active:scale-90 ${
                    n <= activeRating
                      ? "text-yellow-400"
                      : "text-gray-200 hover:text-yellow-300"
                  }`}
                  aria-label={`${n} star${n > 1 ? "s" : ""}`}
                >
                  <Star
                    className="h-10 w-10"
                    fill={n <= activeRating ? "currentColor" : "none"}
                  />
                </button>
              ))}
            </div>

            {activeRating > 0 && (
              <p className="text-center text-sm font-medium text-blue-600">
                {starLabels[activeRating]}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Comment */}
        <Card className="mb-6 border border-gray-200">
          <CardContent className="p-6">
            <label
              htmlFor="review-comment"
              className="block font-semibold text-gray-800 mb-1"
            >
              Add a comment{" "}
              <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <p className="text-xs text-gray-400 mb-3">
              What did the technician do well? Anything that could be better?
            </p>
            <Textarea
              id="review-comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="e.g. Very patient and explained everything clearly. Fixed the problem in under an hour!"
              rows={4}
              className="resize-none text-base"
              maxLength={500}
            />
            <p className="text-xs text-gray-400 mt-1.5 text-right">
              {comment.length}/500
            </p>
          </CardContent>
        </Card>

        {/* Submit */}
        <Button
          onClick={handleSubmit}
          disabled={rating === 0 || submitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base py-3 disabled:opacity-50"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              <Star className="h-4 w-4 mr-2" />
              Submit Review
            </>
          )}
        </Button>

        {rating === 0 && (
          <p className="text-center text-xs text-gray-400 mt-2">
            Please select a star rating before submitting.
          </p>
        )}
      </div>
    </div>
  );
}
