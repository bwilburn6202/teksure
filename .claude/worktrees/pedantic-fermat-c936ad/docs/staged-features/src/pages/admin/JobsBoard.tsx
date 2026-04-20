/**
 * JobsBoard — Admin page to assign bookings to approved technicians
 *
 * Route: /admin/jobs
 * Gate: Admin only (is_admin = TRUE on profiles)
 *
 * Features:
 *  - Lists all bookings (newest first) with payment and assignment status
 *  - Filter by: unassigned / assigned / all
 *  - Filter by payment status: paid / pending / all
 *  - Dropdown to assign / reassign a booking to an approved technician
 *  - Real-time stat cards at the top
 */

import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Briefcase,
  UserCheck,
  Clock,
  CheckCircle,
  Search,
  Filter,
  Calendar,
  Wrench,
  User,
  AlertCircle,
  Star,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Booking {
  id: string;
  user_id: string;
  service_type: string;
  booking_date: string;
  booking_time: string;
  issue_description: string | null;
  status: string;
  payment_status: string | null;
  assigned_technician_id: string | null;
  assigned_at: string | null;
  created_at: string;
  // joined
  customer_email?: string;
  customer_name?: string;
  tech_name?: string;
  tech_email?: string;
}

interface TechOption {
  id: string;
  full_name: string;
  email: string;
  specialties: string[];
  location: string;
  avg_rating?: number;
  review_count?: number;
}

type AssignFilter = "unassigned" | "assigned" | "all";
type PayFilter = "paid" | "pending" | "all";

// ── Helpers ───────────────────────────────────────────────────────────────────

function serviceLabel(type: string) {
  const map: Record<string, string> = {
    "in-home": "In-Home",
    remote: "Remote",
    phone: "Phone",
    "drop-off": "Drop-Off",
  };
  return map[type] ?? type;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function payBadge(ps: string | null) {
  if (ps === "paid")
    return (
      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200">
        Paid
      </span>
    );
  if (ps === "pending")
    return (
      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200">
        Pending
      </span>
    );
  return (
    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
      Unpaid
    </span>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function JobsBoard() {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [techs, setTechs] = useState<TechOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null); // bookingId being saved
  const [search, setSearch] = useState("");
  const [assignFilter, setAssignFilter] = useState<AssignFilter>("unassigned");
  const [payFilter, setPayFilter] = useState<PayFilter>("all");

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

  // ── Fetch data ───────────────────────────────────────────────────────────────
  const fetchData = useCallback(async () => {
    setLoading(true);

    // Fetch bookings with customer profile info
    const { data: bookingData, error: bookingErr } = await supabase
      .from("bookings")
      .select(`
        id,
        user_id,
        service_type,
        booking_date,
        booking_time,
        issue_description,
        status,
        payment_status,
        assigned_technician_id,
        assigned_at,
        created_at
      `)
      .order("created_at", { ascending: false });

    if (!bookingErr && bookingData) {
      // Enrich with profile data (customer names) and tech names
      const enriched: Booking[] = await Promise.all(
        (bookingData as Booking[]).map(async (b) => {
          // Get customer profile
          const { data: profile } = await supabase
            .from("profiles")
            .select("full_name, email")
            .eq("user_id", b.user_id)
            .maybeSingle();

          // Get assigned tech name if assigned
          let techName: string | undefined;
          let techEmail: string | undefined;
          if (b.assigned_technician_id) {
            const { data: tech } = await supabase
              .from("technician_profiles")
              .select("full_name, email")
              .eq("id", b.assigned_technician_id)
              .maybeSingle();
            techName = tech?.full_name;
            techEmail = tech?.email;
          }

          return {
            ...b,
            customer_name: profile?.full_name ?? "Unknown",
            customer_email: profile?.email ?? "",
            tech_name: techName,
            tech_email: techEmail,
          };
        })
      );
      setBookings(enriched);
    }

    // Fetch approved techs for the assignment dropdown
    const { data: techData } = await supabase
      .from("technician_profiles")
      .select("id, full_name, email, specialties, location")
      .eq("status", "approved")
      .order("full_name");

    if (techData) {
      // Fetch average ratings for each tech
      const { data: ratingsData } = await supabase
        .from("technician_avg_ratings")
        .select("technician_profile_id, avg_rating, review_count");

      const ratingsMap = new Map(
        (ratingsData ?? []).map((r) => [r.technician_profile_id, r])
      );

      const enrichedTechs: TechOption[] = (techData as TechOption[]).map((t) => {
        const ratings = ratingsMap.get(t.id);
        return {
          ...t,
          avg_rating: ratings?.avg_rating,
          review_count: ratings?.review_count,
        };
      });

      setTechs(enrichedTechs);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (authChecked) fetchData();
  }, [authChecked, fetchData]);

  // ── Stats ────────────────────────────────────────────────────────────────────
  const unassignedCount = bookings.filter((b) => !b.assigned_technician_id).length;
  const assignedCount = bookings.filter((b) => !!b.assigned_technician_id).length;
  const paidCount = bookings.filter((b) => b.payment_status === "paid").length;

  // ── Filtering ────────────────────────────────────────────────────────────────
  const filtered = bookings.filter((b) => {
    if (assignFilter === "unassigned" && b.assigned_technician_id) return false;
    if (assignFilter === "assigned" && !b.assigned_technician_id) return false;
    if (payFilter === "paid" && b.payment_status !== "paid") return false;
    if (payFilter === "pending" && b.payment_status === "paid") return false;
    const q = search.trim().toLowerCase();
    if (q) {
      const haystack = [
        b.customer_name,
        b.customer_email,
        b.service_type,
        b.booking_date,
        b.tech_name,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  // ── Assign technician ─────────────────────────────────────────────────────
  const assignTech = async (bookingId: string, techId: string | "") => {
    setSaving(bookingId);

    const update =
      techId === ""
        ? { assigned_technician_id: null, assigned_at: null }
        : { assigned_technician_id: techId, assigned_at: new Date().toISOString() };

    const { error } = await supabase
      .from("bookings")
      .update(update)
      .eq("id", bookingId);

    if (!error) {
      const tech = techs.find((t) => t.id === techId);
      setBookings((prev) =>
        prev.map((b) =>
          b.id === bookingId
            ? {
                ...b,
                assigned_technician_id: techId || null,
                assigned_at: techId ? new Date().toISOString() : null,
                tech_name: tech?.full_name,
                tech_email: tech?.email,
              }
            : b
        )
      );
    }

    setSaving(null);
  };

  // ── Mark booking as completed ─────────────────────────────────────────────
  const markCompleted = async (bookingId: string) => {
    setSaving(bookingId);
    const { error } = await supabase
      .from("bookings")
      .update({ status: "completed" })
      .eq("id", bookingId);

    if (!error) {
      setBookings((prev) =>
        prev.map((b) =>
          b.id === bookingId ? { ...b, status: "completed" } : b
        )
      );
    }
    setSaving(null);
  };

  // ── Guard ────────────────────────────────────────────────────────────────────
  if (!authChecked)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400">Checking admin access…</p>
      </div>
    );

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
            <Link to="/admin" className="hover:text-gray-600 flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Admin Console
            </Link>
            <span>/</span>
            <span className="text-gray-700">Jobs Board</span>
          </div>
          <div className="flex items-center gap-3">
            <Briefcase className="h-7 w-7 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Jobs Board</h1>
              <p className="text-gray-500 text-sm">
                Assign bookings to approved technicians.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-6">
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            {
              label: "Unassigned",
              value: unassignedCount,
              color: "bg-orange-50 text-orange-700 border-orange-200",
              icon: AlertCircle,
              filter: "unassigned" as AssignFilter,
            },
            {
              label: "Assigned",
              value: assignedCount,
              color: "bg-green-50 text-green-700 border-green-200",
              icon: UserCheck,
              filter: "assigned" as AssignFilter,
            },
            {
              label: "Paid",
              value: paidCount,
              color: "bg-blue-50 text-blue-700 border-blue-200",
              icon: CheckCircle,
              filter: null,
            },
          ].map(({ label, value, color, icon: Icon, filter }) => (
            <button
              key={label}
              onClick={() => filter && setAssignFilter(filter)}
              className={`rounded-xl border p-4 text-left transition-all ${color} ${
                filter && assignFilter === filter
                  ? "ring-2 ring-offset-1 ring-current"
                  : "opacity-80 hover:opacity-100"
              } ${filter ? "cursor-pointer" : "cursor-default"}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className="h-4 w-4" />
                <span className="text-xs font-medium">{label}</span>
              </div>
              <span className="text-2xl font-bold">{value}</span>
            </button>
          ))}
        </div>

        {/* No approved techs warning */}
        {techs.length === 0 && !loading && (
          <div className="mb-4 flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800">
            <Wrench className="h-5 w-5 shrink-0" />
            <span className="text-sm">
              No approved technicians yet.{" "}
              <Link to="/admin/technicians" className="font-medium underline">
                Review applications →
              </Link>
            </span>
          </div>
        )}

        {/* Search + filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by customer, service, date, or technician…"
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={assignFilter}
              onChange={(e) => setAssignFilter(e.target.value as AssignFilter)}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="unassigned">Unassigned</option>
              <option value="assigned">Assigned</option>
              <option value="all">All jobs</option>
            </select>
            <select
              value={payFilter}
              onChange={(e) => setPayFilter(e.target.value as PayFilter)}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="all">Any payment</option>
              <option value="paid">Paid only</option>
              <option value="pending">Pending pay</option>
            </select>
          </div>
        </div>

        {/* Bookings list */}
        {loading ? (
          <div className="text-center py-16 text-gray-400">
            Loading bookings…
          </div>
        ) : filtered.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Briefcase className="h-12 w-12 text-gray-200 mx-auto mb-3" />
              <p className="text-gray-500">
                {search
                  ? "No bookings match your search."
                  : assignFilter === "unassigned"
                  ? "All bookings are assigned — great work!"
                  : "No bookings found."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filtered.map((b) => (
              <Card
                key={b.id}
                className={`border transition-shadow hover:shadow-sm ${
                  !b.assigned_technician_id
                    ? "border-orange-200"
                    : "border-gray-200"
                }`}
              >
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Left: booking info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-semibold text-gray-800">
                          {serviceLabel(b.service_type)} Support
                        </span>
                        {payBadge(b.payment_status)}
                        {b.assigned_technician_id ? (
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200 flex items-center gap-1">
                            <UserCheck className="h-3 w-3" />
                            Assigned
                          </span>
                        ) : (
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200">
                            Unassigned
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {b.customer_name} ({b.customer_email})
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {b.booking_date} at {b.booking_time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Booked {fmtDate(b.created_at)}
                        </span>
                      </div>

                      {b.issue_description && (
                        <p className="mt-2 text-xs text-gray-500 italic truncate max-w-md">
                          "{b.issue_description}"
                        </p>
                      )}

                      {b.assigned_technician_id && b.tech_name && (
                        <p className="mt-1.5 text-xs text-green-700 flex items-center gap-1 flex-wrap">
                          <Wrench className="h-3 w-3" />
                          Assigned to <strong>{b.tech_name}</strong>
                          {(() => {
                            const tech = techs.find(
                              (t) => t.id === b.assigned_technician_id
                            );
                            return tech?.avg_rating ? (
                              <>
                                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                <span>{tech.avg_rating.toFixed(1)}</span>
                                <span className="text-gray-400">
                                  ({tech.review_count}{" "}
                                  {tech.review_count === 1
                                    ? "review"
                                    : "reviews"}
                                  )
                                </span>
                              </>
                            ) : null;
                          })()}
                          {b.assigned_at && (
                            <span className="text-gray-400 ml-1">
                              on {fmtDate(b.assigned_at)}
                            </span>
                          )}
                        </p>
                      )}
                    </div>

                    {/* Right: assign dropdown + actions */}
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <div className="flex items-center gap-2">
                        <select
                          value={b.assigned_technician_id ?? ""}
                          onChange={(e) => assignTech(b.id, e.target.value)}
                          disabled={saving === b.id || techs.length === 0}
                          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 min-w-[200px]"
                        >
                          <option value="">— Unassigned —</option>
                          {techs.map((t) => (
                            <option key={t.id} value={t.id}>
                              {t.full_name} ({t.location})
                              {t.avg_rating
                                ? ` ★ ${t.avg_rating.toFixed(1)}`
                                : ""}
                            </option>
                          ))}
                        </select>
                        {saving === b.id && (
                          <span className="text-xs text-blue-500 whitespace-nowrap">
                            Saving…
                          </span>
                        )}
                      </div>
                      {/* Mark Completed button for assigned, non-completed bookings */}
                      {b.assigned_technician_id &&
                        b.status !== "completed" &&
                        b.status !== "cancelled" && (
                          <button
                            onClick={() => markCompleted(b.id)}
                            disabled={saving === b.id}
                            className="text-xs font-medium px-3 py-1.5 rounded-lg border border-green-200 bg-green-50 text-green-700 hover:bg-green-100 transition-colors disabled:opacity-50"
                          >
                            <CheckCircle className="h-3 w-3 inline mr-1" />
                            Mark Completed
                          </button>
                        )}
                      {b.status === "completed" && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                          Completed
                        </span>
                      )}
                      {b.status === "cancelled" && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-600 border border-red-200">
                          Cancelled
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
