/**
 * MyBookings — /my-bookings
 *
 * Shows the logged-in user's full booking history.
 * Guests are redirected to /login.
 *
 * Each booking card shows:
 *  - Service type, date, time, status, payment status
 *  - Assigned technician name (if any)
 *  - "Write a Review" button for completed bookings with a tech assigned
 *  - "View Review" badge if already reviewed
 *  - "Book Again" shortcut
 */

import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Wrench,
  MapPin,
  Phone,
  Star,
  ChevronDown,
  ChevronUp,
  PlusCircle,
  Loader2,
  XCircle,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Booking {
  id: string;
  date: string;
  time: string;
  service_type: string;
  price_cents: number;
  status: string;
  payment_status: string | null;
  notes: string | null;
  assigned_technician_id: string | null;
  created_at: string;
  // joined
  tech_name?: string;
  tech_email?: string;
  has_review?: boolean;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const serviceLabels: Record<string, string> = {
  "in-home": "In-Home Visit",
  remote: "Remote Support",
  phone: "Phone Guidance",
  "drop-off": "Drop-Off Service",
};

function ServiceIcon({ type }: { type: string }) {
  if (type === "in-home") return <MapPin className="h-4 w-4" />;
  if (type === "phone") return <Phone className="h-4 w-4" />;
  return <Wrench className="h-4 w-4" />;
}

function statusBadge(status: string) {
  const styles: Record<string, string> = {
    confirmed: "bg-green-100 text-green-700 border-green-200",
    completed: "bg-blue-100 text-blue-700 border-blue-200",
    cancelled: "bg-red-100 text-red-600 border-red-200",
    pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
  };
  const label = status.charAt(0).toUpperCase() + status.slice(1);
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
        styles[status] ?? "bg-gray-100 text-gray-600 border-gray-200"
      }`}
    >
      {label}
    </span>
  );
}

function payBadge(ps: string | null) {
  if (ps === "paid")
    return (
      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
        Paid
      </span>
    );
  if (ps === "pending")
    return (
      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200">
        Pending
      </span>
    );
  return (
    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-200">
      Unpaid
    </span>
  );
}

function fmtDate(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function MyBookings() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [cancelModal, setCancelModal] = useState<{ bookingId: string } | null>(null);
  const [cancelling, setCancelling] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const fetchBookings = useCallback(async () => {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      navigate("/login");
      return;
    }

    // Fetch bookings for this user
    const { data: bookingData } = await supabase
      .from("bookings")
      .select(
        "id, date, time, service_type, price_cents, status, payment_status, notes, assigned_technician_id, created_at"
      )
      .eq("user_id", userData.user.id)
      .order("created_at", { ascending: false });

    if (!bookingData) {
      setLoading(false);
      return;
    }

    // Enrich: technician name + review existence
    const enriched: Booking[] = await Promise.all(
      bookingData.map(async (b) => {
        let tech_name: string | undefined;
        let tech_email: string | undefined;
        let has_review = false;

        // Look up assigned tech name
        if (b.assigned_technician_id) {
          const { data: tp } = await supabase
            .from("technician_profiles")
            .select("full_name, email")
            .eq("id", b.assigned_technician_id)
            .maybeSingle();
          tech_name = tp?.full_name;
          tech_email = tp?.email;
        }

        // Check if a review exists for this booking
        if (b.status === "completed" && b.assigned_technician_id) {
          const { data: review } = await supabase
            .from("tech_reviews")
            .select("id")
            .eq("booking_id", b.id)
            .maybeSingle();
          has_review = !!review;
        }

        return { ...b, tech_name, tech_email, has_review };
      })
    );

    setBookings(enriched);
    setLoading(false);
  }, [navigate]);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const handleCancelBooking = useCallback(async (bookingId: string) => {
    setCancelling(true);
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status: "cancelled" })
        .eq("id", bookingId);

      if (error) throw error;

      // Update local state immediately
      setBookings((prev) =>
        prev.map((b) => (b.id === bookingId ? { ...b, status: "cancelled" } : b))
      );

      // Send cancellation confirmation email (fire-and-forget)
      const cancelledBooking = bookings.find((b) => b.id === bookingId);
      if (cancelledBooking) {
        const { data: userData } = await supabase.auth.getUser();
        const { data: sessionData } = await supabase.auth.getSession();
        const token = sessionData.session?.access_token;
        if (userData.user?.email && token) {
          fetch(
            `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-cancellation-email`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                bookingId,
                userEmail: userData.user.email,
                userName: userData.user.user_metadata?.full_name || "",
                serviceType: cancelledBooking.service_type,
                bookingDate: cancelledBooking.date,
                bookingTime: cancelledBooking.time,
              }),
            }
          ).catch((err) => console.warn("Cancellation email failed:", err));
        }
      }

      // Clear modal and show success message
      setCancelModal(null);
      setSuccessMessage("Booking cancelled — confirmation email sent");

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      console.error("Error cancelling booking:", err);
      alert("Failed to cancel booking. Please try again.");
    } finally {
      setCancelling(false);
    }
  }, [bookings]);

  // ── Stats ──────────────────────────────────────────────────────────────────
  const upcoming = bookings.filter(
    (b) => b.status === "confirmed" || b.status === "pending"
  );
  const completed = bookings.filter((b) => b.status === "completed");

  // ── Render ─────────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-white border-b border-gray-200 px-4 py-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-2xl font-bold text-gray-800">My Bookings</h1>
          <p className="text-gray-500 text-sm mt-1">
            All your TekSure appointments, past and upcoming.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-6">
        {/* Summary stats */}
        {bookings.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              {
                label: "Upcoming",
                value: upcoming.length,
                color: "bg-blue-50 text-blue-700 border-blue-200",
                icon: Calendar,
              },
              {
                label: "Completed",
                value: completed.length,
                color: "bg-green-50 text-green-700 border-green-200",
                icon: CheckCircle,
              },
              {
                label: "Total",
                value: bookings.length,
                color: "bg-gray-50 text-gray-700 border-gray-200",
                icon: Wrench,
              },
            ].map(({ label, value, color, icon: Icon }) => (
              <div
                key={label}
                className={`rounded-xl border p-4 ${color}`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">{label}</span>
                </div>
                <span className="text-2xl font-bold">{value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {bookings.length === 0 ? (
          <Card>
            <CardContent className="text-center py-16">
              <Calendar className="h-12 w-12 text-gray-200 mx-auto mb-4" />
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                No bookings yet
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Book a session with one of our technicians and it will appear
                here.
              </p>
              <Link to="/book">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Book a Technician
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {bookings.map((booking) => {
              const expanded = expandedId === booking.id;
              const canReview =
                booking.status === "completed" &&
                !!booking.assigned_technician_id;
              const canCancel =
                booking.status === "confirmed" || booking.status === "pending";

              return (
                <Card
                  key={booking.id}
                  className={`border transition-shadow hover:shadow-sm ${
                    booking.status === "confirmed"
                      ? "border-blue-200"
                      : "border-gray-200"
                  }`}
                >
                  <CardContent className="p-5">
                    {/* ── Top row ── */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        {/* Title + badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="font-semibold text-gray-800 flex items-center gap-1.5">
                            <ServiceIcon type={booking.service_type} />
                            {serviceLabels[booking.service_type] ??
                              booking.service_type}
                          </span>
                          {statusBadge(booking.status)}
                          {payBadge(booking.payment_status)}
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {fmtDate(booking.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {booking.time}
                          </span>
                          {booking.tech_name && (
                            <span className="flex items-center gap-1">
                              <Wrench className="h-3 w-3" />
                              {booking.tech_name}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Expand toggle */}
                      <button
                        onClick={() =>
                          setExpandedId(expanded ? null : booking.id)
                        }
                        className="shrink-0 text-gray-400 hover:text-gray-600 flex items-center gap-1 text-xs"
                        aria-label={expanded ? "Collapse details" : "Expand details"}
                      >
                        {expanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                        <span className="hidden sm:inline">
                          {expanded ? "Less" : "Details"}
                        </span>
                      </button>
                    </div>

                    {/* ── Expanded details ── */}
                    {expanded && (
                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-3 text-sm">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                              Date &amp; Time
                            </p>
                            <p className="text-gray-700">{fmtDate(booking.date)}</p>
                            <p className="text-gray-500 text-xs">{booking.time}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                              Technician
                            </p>
                            {booking.tech_name ? (
                              <>
                                <p className="text-gray-700">{booking.tech_name}</p>
                                {booking.tech_email && (
                                  <p className="text-gray-500 text-xs">
                                    {booking.tech_email}
                                  </p>
                                )}
                              </>
                            ) : (
                              <p className="text-gray-400 italic text-xs">
                                Not yet assigned
                              </p>
                            )}
                          </div>
                        </div>

                        {booking.notes && (
                          <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                              Your Notes
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                              {booking.notes}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-1">
                          <div className="text-xs text-gray-400">
                            Booking ID: {booking.id.slice(0, 8)}…
                          </div>
                          {booking.price_cents > 0 && (
                            <div className="text-sm font-semibold text-blue-600">
                              £{(booking.price_cents / 100).toFixed(2)} paid
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* ── Actions row ── */}
                    {(canReview || canCancel) && (
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        {canReview ? (
                          <div className="flex items-center justify-between gap-3">
                            {booking.has_review ? (
                              <div className="flex items-center gap-1.5 text-sm text-green-600">
                                <CheckCircle className="h-4 w-4" />
                                Review submitted — thank you!
                              </div>
                            ) : (
                              <>
                                <p className="text-xs text-gray-400">
                                  How did it go? Your feedback helps other customers.
                                </p>
                                <Link to={`/review/${booking.id}`}>
                                  <Button
                                    size="sm"
                                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs shrink-0"
                                  >
                                    <Star className="h-3.5 w-3.5 mr-1" />
                                    Write a Review
                                  </Button>
                                </Link>
                              </>
                            )}
                          </div>
                        ) : canCancel ? (
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setCancelModal({ bookingId: booking.id })}
                              disabled={cancelling}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              aria-label="Cancel this booking"
                            >
                              <XCircle className="h-3.5 w-3.5" />
                              Cancel Booking
                            </button>
                          </div>
                        ) : null}
                      </div>
                    )}

                    {/* Cancelled notice */}
                    {booking.status === "cancelled" && (
                      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        This booking was cancelled. Need help?{" "}
                        <a
                          href="mailto:support@teksure.com"
                          className="underline"
                        >
                          Contact us
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Book again CTA */}
        {bookings.length > 0 && (
          <div className="mt-6 text-center">
            <Link to="/book">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Book Another Appointment
              </Button>
            </Link>
          </div>
        )}

        {/* Success message */}
        {successMessage && (
          <div className="fixed bottom-4 right-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg shadow-lg text-sm font-medium">
            {successMessage}
          </div>
        )}

        {/* Cancellation confirmation modal */}
        {cancelModal && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cancel-modal-title"
          >
            <Card className="max-w-sm w-full bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h2
                      id="cancel-modal-title"
                      className="font-semibold text-gray-800 text-base"
                    >
                      Cancel Booking?
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6">
                  Are you sure you want to cancel this booking? This action cannot be undone.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setCancelModal(null)}
                    disabled={cancelling}
                    className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Never mind
                  </button>
                  <button
                    onClick={() => handleCancelBooking(cancelModal.bookingId)}
                    disabled={cancelling}
                    className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    aria-label="Confirm cancellation"
                  >
                    {cancelling ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Cancelling...
                      </>
                    ) : (
                      "Yes, Cancel"
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
