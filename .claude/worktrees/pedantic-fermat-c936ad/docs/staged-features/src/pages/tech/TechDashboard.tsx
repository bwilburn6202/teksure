/**
 * TechDashboard — Technician's personal job dashboard
 *
 * Route: /tech
 * Gate: Must be logged in AND have an approved technician_profile linked to their user_id
 *
 * Shows:
 *  - Summary stats (total jobs, upcoming, completed)
 *  - List of all assigned jobs, filterable by upcoming / completed
 *  - Job detail card with customer info, date/time, service type, and description
 *
 * Requires:
 *  - technician_profiles.user_id must be set (admin links the profile to the user's account)
 *  - bookings.assigned_technician_id must reference this tech's technician_profiles.id
 */

import { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Calendar,
  Clock,
  User,
  CheckCircle,
  Briefcase,
  MapPin,
  Phone,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Star,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface TechProfile {
  id: string;
  full_name: string;
  email: string;
  specialties: string[];
  location: string;
}

interface Job {
  id: string;
  service_type: string;
  booking_date: string;
  booking_time: string;
  issue_description: string | null;
  status: string;
  payment_status: string | null;
  assigned_at: string | null;
  created_at: string;
  // joined customer info
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
}

type JobFilter = "upcoming" | "all";

// ── Helpers ───────────────────────────────────────────────────────────────────

function serviceLabel(type: string) {
  const map: Record<string, string> = {
    "in-home": "In-Home Support",
    remote: "Remote Support",
    phone: "Phone Support",
    "drop-off": "Drop-Off Support",
  };
  return map[type] ?? type;
}

function serviceIcon(type: string) {
  if (type === "in-home") return <MapPin className="h-4 w-4" />;
  if (type === "phone") return <Phone className="h-4 w-4" />;
  return <Wrench className="h-4 w-4" />;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function isUpcoming(dateStr: string) {
  // booking_date is stored as "YYYY-MM-DD" or "DD Month YYYY" etc
  // Compare against today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const jobDate = new Date(dateStr);
  return isNaN(jobDate.getTime()) ? true : jobDate >= today;
}

function statusPill(status: string) {
  if (status === "confirmed")
    return (
      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200">
        Confirmed
      </span>
    );
  if (status === "completed")
    return (
      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
        Completed
      </span>
    );
  return (
    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function TechDashboard() {
  const navigate = useNavigate();
  const [techProfile, setTechProfile] = useState<TechProfile | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [filter, setFilter] = useState<JobFilter>("upcoming");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [rating, setRating] = useState<{
    avgRating: number | null;
    reviewCount: number;
  }>({ avgRating: null, reviewCount: 0 });

  // ── Auth + profile check ─────────────────────────────────────────────────
  const checkAuth = useCallback(async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      navigate("/login");
      return;
    }

    // Look up their technician profile
    const { data: tp } = await supabase
      .from("technician_profiles")
      .select("id, full_name, email, specialties, location, status")
      .eq("user_id", data.user.id)
      .maybeSingle();

    if (!tp) {
      setAuthError(
        "No technician profile found for your account. If you've applied, please wait for admin approval."
      );
      setLoading(false);
      return;
    }

    if ((tp as { status: string }).status !== "approved") {
      setAuthError(
        "Your technician application is still being reviewed. Check back soon!"
      );
      setLoading(false);
      return;
    }

    setTechProfile(tp as TechProfile);

    // Fetch their average rating and review count
    const { data: ratingData } = await supabase
      .from("technician_avg_ratings")
      .select("avg_rating, review_count")
      .eq("technician_profile_id", tp.id)
      .maybeSingle();

    if (ratingData) {
      setRating({
        avgRating: ratingData.avg_rating as number | null,
        reviewCount: (ratingData.review_count as number) ?? 0,
      });
    }

    // Fetch their assigned bookings
    const { data: bookingData } = await supabase
      .from("bookings")
      .select(`
        id,
        service_type,
        booking_date,
        booking_time,
        issue_description,
        status,
        payment_status,
        assigned_at,
        created_at,
        user_id
      `)
      .eq("assigned_technician_id", (tp as TechProfile).id)
      .order("booking_date", { ascending: true });

    if (bookingData) {
      // Enrich with customer info
      const enriched: Job[] = await Promise.all(
        (bookingData as Job[]).map(async (b) => {
          const { data: profile } = await supabase
            .from("profiles")
            .select("full_name, email, phone")
            .eq("user_id", b.user_id)
            .maybeSingle();

          return {
            ...b,
            customer_name: (profile as { full_name?: string } | null)?.full_name ?? "Customer",
            customer_email: (profile as { email?: string } | null)?.email ?? "",
            customer_phone: (profile as { phone?: string } | null)?.phone,
          };
        })
      );
      setJobs(enriched);
    }

    setLoading(false);
  }, [navigate]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // ── Derived counts ────────────────────────────────────────────────────────
  const upcomingJobs = jobs.filter((j) => isUpcoming(j.booking_date));
  const completedJobs = jobs.filter((j) => j.status === "completed");
  const filteredJobs =
    filter === "upcoming" ? upcomingJobs : jobs;

  // ── Render ────────────────────────────────────────────────────────────────

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400">Loading your dashboard…</p>
      </div>
    );

  if (authError)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <AlertCircle className="h-12 w-12 text-orange-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Access Restricted
          </h2>
          <p className="text-gray-600 mb-6">{authError}</p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-5">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Wrench className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800">
                Hi, {techProfile?.full_name?.split(" ")[0]} 👋
              </h1>
              <div className="flex items-center gap-4 flex-wrap mt-1">
                <p className="text-gray-500 text-sm">
                  Technician Dashboard &nbsp;·&nbsp; {techProfile?.location}
                </p>
                <Link
                  to="/tech/availability"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  Manage Availability
                </Link>
                {rating.avgRating !== null ? (
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.round(rating.avgRating!)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium text-gray-700">
                      {rating.avgRating.toFixed(1)} ({rating.reviewCount}{" "}
                      {rating.reviewCount === 1 ? "review" : "reviews"})
                    </span>
                  </div>
                ) : (
                  <p className="text-sm text-gray-400">No reviews yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-6">
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            {
              label: "Upcoming Jobs",
              value: upcomingJobs.length,
              color: "bg-blue-50 text-blue-700 border-blue-200",
              icon: Calendar,
              f: "upcoming" as JobFilter,
            },
            {
              label: "Completed",
              value: completedJobs.length,
              color: "bg-green-50 text-green-700 border-green-200",
              icon: CheckCircle,
              f: "all" as JobFilter,
            },
            {
              label: "Total Jobs",
              value: jobs.length,
              color: "bg-gray-50 text-gray-700 border-gray-200",
              icon: Briefcase,
              f: "all" as JobFilter,
            },
          ].map(({ label, value, color, icon: Icon, f }) => (
            <button
              key={label}
              onClick={() => setFilter(f)}
              className={`rounded-xl border p-4 text-left transition-all ${color} ${
                filter === f
                  ? "ring-2 ring-offset-1 ring-current"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className="h-4 w-4" />
                <span className="text-xs font-medium">{label}</span>
              </div>
              <span className="text-2xl font-bold">{value}</span>
            </button>
          ))}
        </div>

        {/* Specialties chip row */}
        {techProfile && techProfile.specialties.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            <span className="text-xs text-gray-400 self-center mr-1">
              Your specialties:
            </span>
            {techProfile.specialties.map((s) => (
              <span
                key={s}
                className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Filter tabs */}
        <div className="flex gap-2 mb-4">
          {(["upcoming", "all"] as JobFilter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all ${
                filter === f
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
              }`}
            >
              {f === "upcoming" ? "Upcoming" : "All Jobs"}
            </button>
          ))}
        </div>

        {/* Job list */}
        {filteredJobs.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-200 mx-auto mb-3" />
              <p className="text-gray-500 font-medium mb-1">No jobs yet</p>
              <p className="text-gray-400 text-sm">
                {filter === "upcoming"
                  ? "You have no upcoming jobs at the moment. Check back soon!"
                  : "No jobs have been assigned to you yet."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filteredJobs.map((job) => {
              const expanded = expandedId === job.id;
              const upcoming = isUpcoming(job.booking_date);

              return (
                <Card
                  key={job.id}
                  className={`border transition-shadow hover:shadow-sm ${
                    upcoming ? "border-blue-200" : "border-gray-200"
                  }`}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        {/* Title row */}
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-semibold text-gray-800 flex items-center gap-1.5">
                            {serviceIcon(job.service_type)}
                            {serviceLabel(job.service_type)}
                          </span>
                          {statusPill(job.status)}
                          {upcoming && (
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                              Upcoming
                            </span>
                          )}
                        </div>

                        {/* Meta row */}
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {job.booking_date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {job.booking_time}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {job.customer_name}
                          </span>
                        </div>
                      </div>

                      {/* Expand toggle */}
                      <button
                        onClick={() =>
                          setExpandedId(expanded ? null : job.id)
                        }
                        className="shrink-0 text-gray-400 hover:text-gray-600 flex items-center gap-1 text-xs"
                      >
                        {expanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                        {expanded ? "Less" : "Details"}
                      </button>
                    </div>

                    {/* Expanded details */}
                    {expanded && (
                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-3 text-sm">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">
                              Customer
                            </p>
                            <p className="text-gray-700">{job.customer_name}</p>
                            <p className="text-gray-500 text-xs">
                              {job.customer_email}
                            </p>
                            {job.customer_phone && (
                              <p className="text-gray-500 text-xs flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                {job.customer_phone}
                              </p>
                            )}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">
                              Appointment
                            </p>
                            <p className="text-gray-700">{fmtDate(job.booking_date)}</p>
                            <p className="text-gray-500 text-xs">
                              {job.booking_time}
                            </p>
                          </div>
                        </div>

                        {job.issue_description && (
                          <div>
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">
                              Issue Description
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              {job.issue_description}
                            </p>
                          </div>
                        )}

                        <div className="flex items-center gap-2 pt-1 text-xs text-gray-400">
                          <span>Booking ID: {job.id.slice(0, 8)}…</span>
                          {job.assigned_at && (
                            <span>
                              · Assigned {new Date(job.assigned_at).toLocaleDateString("en-GB")}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Help / support footer */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Questions or issues?{" "}
            <Link to="/forum" className="text-blue-500 hover:underline">
              Visit the community forum
            </Link>{" "}
            or contact TekSure support.
          </p>
        </div>
      </div>
    </div>
  );
}
