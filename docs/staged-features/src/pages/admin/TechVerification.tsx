/**
 * TechVerification — Admin Technician Management Page
 *
 * Allows admins to:
 *  - View pending technician applications
 *  - Approve or reject applications with optional notes
 *  - View all approved/rejected technicians
 *  - Search and filter by status
 *  - Link an approved technician to their auth account by email
 *    (replaces the manual SQL step previously required)
 *
 * Route: /admin/technicians
 * DB: technician_profiles table (see migration 20260325120000_technician_profiles.sql)
 * Gate: Admins only (is_admin = TRUE on profiles table)
 */

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Wrench,
  Clock,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Search,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ShieldCheck,
  Car,
  Star,
  Filter,
  ChevronDown,
  ChevronUp,
  Link2,
  UserCheck,
  AlertCircle,
  Loader2,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface TechProfile {
  id: string;
  user_id: string | null;
  full_name: string;
  email: string;
  phone: string;
  location: string;
  years_experience: number;
  specialties: string[];
  bio: string;
  availability: string;
  has_dbs: boolean;
  has_own_transport: boolean;
  linkedin_url: string | null;
  status: "pending" | "approved" | "rejected";
  admin_notes: string | null;
  reviewed_at: string | null;
  created_at: string;
}

type StatusFilter = "all" | "pending" | "approved" | "rejected";

// ── Link state per card ───────────────────────────────────────────────────────
interface LinkState {
  email: string;
  loading: boolean;
  success: boolean;
  error: string | null;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function statusBadgeClass(status: TechProfile["status"]) {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "approved":
      return "bg-green-100 text-green-700 border-green-200";
    case "rejected":
      return "bg-red-100 text-red-700 border-red-200";
  }
}

function StatusIcon({ status }: { status: TechProfile["status"] }) {
  if (status === "approved")
    return <CheckCircle className="h-3.5 w-3.5 inline mr-1" />;
  if (status === "rejected")
    return <XCircle className="h-3.5 w-3.5 inline mr-1" />;
  return <Clock className="h-3.5 w-3.5 inline mr-1" />;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function TechVerification() {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [techs, setTechs] = useState<TechProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("pending");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Per-card link state
  const [linkStates, setLinkStates] = useState<Record<string, LinkState>>({});

  // Dialog state for approve/reject
  const [dialog, setDialog] = useState<{
    open: boolean;
    tech: TechProfile | null;
    action: "approve" | "reject" | null;
    notes: string;
    saving: boolean;
  }>({ open: false, tech: null, action: null, notes: "", saving: false });

  // ── Auth check ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const checkAdmin = async () => {
      const { data: authData } = await supabase.auth.getUser();
      if (!authData.user) {
        navigate("/login");
        return;
      }
      const { data: profile } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("user_id", authData.user.id)
        .single();
      if (!profile?.is_admin) {
        navigate("/");
        return;
      }
      // Store access token for Edge Function calls
      const { data: sessionData } = await supabase.auth.getSession();
      setAccessToken(sessionData.session?.access_token ?? "");
      setAuthChecked(true);
    };
    checkAdmin();
  }, [navigate]);

  useEffect(() => {
    if (authChecked) fetchTechs();
  }, [authChecked]);

  // ── Data fetching ────────────────────────────────────────────────────────────
  const fetchTechs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("technician_profiles")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setTechs(data as TechProfile[]);
    setLoading(false);
  };

  // ── Filtering ────────────────────────────────────────────────────────────────
  const filteredTechs = techs.filter((t) => {
    const matchesStatus =
      statusFilter === "all" || t.status === statusFilter;
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      t.full_name.toLowerCase().includes(q) ||
      t.email.toLowerCase().includes(q) ||
      t.location.toLowerCase().includes(q) ||
      t.specialties.some((s) => s.toLowerCase().includes(q));
    return matchesStatus && matchesSearch;
  });

  // Stats
  const pendingCount = techs.filter((t) => t.status === "pending").length;
  const approvedCount = techs.filter((t) => t.status === "approved").length;
  const rejectedCount = techs.filter((t) => t.status === "rejected").length;

  // ── Action: open dialog ──────────────────────────────────────────────────────
  const openActionDialog = (tech: TechProfile, action: "approve" | "reject") => {
    setDialog({ open: true, tech, action, notes: "", saving: false });
  };

  // ── Action: confirm approve/reject ───────────────────────────────────────────
  const confirmAction = async () => {
    if (!dialog.tech || !dialog.action) return;
    setDialog((d) => ({ ...d, saving: true }));

    const newStatus = dialog.action === "approve" ? "approved" : "rejected";

    const { error } = await supabase
      .from("technician_profiles")
      .update({
        status: newStatus,
        admin_notes: dialog.notes.trim() || null,
        reviewed_at: new Date().toISOString(),
      })
      .eq("id", dialog.tech.id);

    if (!error) {
      setTechs((prev) =>
        prev.map((t) =>
          t.id === dialog.tech!.id
            ? {
                ...t,
                status: newStatus,
                admin_notes: dialog.notes.trim() || null,
                reviewed_at: new Date().toISOString(),
              }
            : t
        )
      );

      // Send welcome email when a tech is approved
      if (dialog.action === "approve") {
        try {
          await fetch(
            `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-tech-approval`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
              body: JSON.stringify({
                techName: dialog.tech.full_name,
                techEmail: dialog.tech.email,
                adminNotes: dialog.notes.trim() || undefined,
              }),
            }
          );
        } catch (emailErr) {
          console.warn("Tech approval email failed:", emailErr);
        }
      }
    }

    setDialog({ open: false, tech: null, action: null, notes: "", saving: false });
  };

  // ── Action: link tech to user account ────────────────────────────────────────
  const linkTechToUser = async (techId: string) => {
    const state = linkStates[techId];
    if (!state?.email.trim()) return;

    setLinkStates((prev) => ({
      ...prev,
      [techId]: { ...prev[techId], loading: true, error: null },
    }));

    try {
      const resp = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/link-tech-to-user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            tech_profile_id: techId,
            user_email: state.email.trim(),
          }),
        }
      );

      const result = await resp.json();

      if (!resp.ok || result.error) {
        setLinkStates((prev) => ({
          ...prev,
          [techId]: { ...prev[techId], loading: false, error: result.error ?? "Failed to link account." },
        }));
        return;
      }

      // Success — update local state to reflect linked user_id
      setTechs((prev) =>
        prev.map((t) =>
          t.id === techId ? { ...t, user_id: result.user_id } : t
        )
      );
      setLinkStates((prev) => ({
        ...prev,
        [techId]: { email: "", loading: false, success: true, error: null },
      }));
    } catch (err) {
      setLinkStates((prev) => ({
        ...prev,
        [techId]: { ...prev[techId], loading: false, error: "Network error. Please try again." },
      }));
    }
  };

  // ── Guard ────────────────────────────────────────────────────────────────────
  if (!authChecked) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Checking admin access...</p>
      </div>
    );
  }

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
            <Link to="/admin" className="hover:text-gray-600 flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Admin Console
            </Link>
            <span>/</span>
            <span className="text-gray-700">Technician Verification</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Wrench className="h-7 w-7 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Technician Applications
                </h1>
                <p className="text-gray-500 text-sm">
                  Review applications and link approved techs to their accounts.
                </p>
              </div>
            </div>
            <Link to="/become-a-technician" target="_blank">
              <Button variant="outline" size="sm" className="text-xs">
                View Application Page ↗
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-6">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            {
              label: "Pending Review",
              count: pendingCount,
              color: "bg-yellow-50 text-yellow-700 border-yellow-200",
              icon: Clock,
              filter: "pending" as StatusFilter,
            },
            {
              label: "Approved",
              count: approvedCount,
              color: "bg-green-50 text-green-700 border-green-200",
              icon: CheckCircle,
              filter: "approved" as StatusFilter,
            },
            {
              label: "Rejected",
              count: rejectedCount,
              color: "bg-red-50 text-red-700 border-red-200",
              icon: XCircle,
              filter: "rejected" as StatusFilter,
            },
          ].map(({ label, count, color, icon: Icon, filter }) => (
            <button
              key={label}
              onClick={() => setStatusFilter(filter)}
              className={`rounded-xl border p-4 text-left transition-all ${color} ${
                statusFilter === filter
                  ? "ring-2 ring-offset-1 ring-current"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className="h-4 w-4" />
                <span className="text-xs font-medium">{label}</span>
              </div>
              <span className="text-2xl font-bold">{count}</span>
            </button>
          ))}
        </div>

        {/* Search + filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, location, or specialty..."
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="all">All statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Tech list */}
        {loading ? (
          <div className="text-center py-16 text-gray-400">
            Loading applications...
          </div>
        ) : filteredTechs.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Wrench className="h-12 w-12 text-gray-200 mx-auto mb-3" />
              <p className="text-gray-500">
                {search
                  ? "No applications match your search."
                  : statusFilter === "pending"
                  ? "No pending applications right now."
                  : "No applications found."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filteredTechs.map((tech) => {
              const expanded = expandedId === tech.id;
              const ls = linkStates[tech.id] ?? { email: "", loading: false, success: false, error: null };

              return (
                <Card
                  key={tech.id}
                  className={`border transition-shadow ${
                    tech.status === "pending"
                      ? "border-yellow-200"
                      : "border-gray-200"
                  }`}
                >
                  <CardContent className="p-5">
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-semibold text-gray-800 text-lg">
                            {tech.full_name}
                          </span>
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full border ${statusBadgeClass(
                              tech.status
                            )}`}
                          >
                            <StatusIcon status={tech.status} />
                            {tech.status.charAt(0).toUpperCase() +
                              tech.status.slice(1)}
                          </span>
                          {tech.user_id && (
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 flex items-center gap-1">
                              <UserCheck className="h-3 w-3" />
                              Account linked
                            </span>
                          )}
                          {tech.has_dbs && (
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200 flex items-center gap-1">
                              <ShieldCheck className="h-3 w-3" />
                              DBS
                            </span>
                          )}
                          {tech.has_own_transport && (
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200 flex items-center gap-1">
                              <Car className="h-3 w-3" />
                              Has car
                            </span>
                          )}
                        </div>
                        {/* Quick meta */}
                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {tech.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {tech.phone}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {tech.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {tech.years_experience}+ yrs experience
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Applied {formatDate(tech.created_at)}
                          </span>
                        </div>
                        {/* Specialties */}
                        <div className="flex flex-wrap gap-1 mt-2">
                          {tech.specialties.map((s) => (
                            <span
                              key={s}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Action buttons */}
                      <div className="flex flex-col gap-2 shrink-0">
                        {tech.status === "pending" && (
                          <>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white text-xs h-8"
                              onClick={() => openActionDialog(tech, "approve")}
                            >
                              <CheckCircle className="h-3.5 w-3.5 mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-red-200 text-red-600 hover:bg-red-50 text-xs h-8"
                              onClick={() => openActionDialog(tech, "reject")}
                            >
                              <XCircle className="h-3.5 w-3.5 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-xs h-8 text-gray-500"
                          onClick={() =>
                            setExpandedId(expanded ? null : tech.id)
                          }
                        >
                          {expanded ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                          {expanded ? "Less" : "More"}
                        </Button>
                      </div>
                    </div>

                    {/* Expanded detail */}
                    {expanded && (
                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-4 text-sm">
                        <div>
                          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
                            About
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {tech.bio}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">
                              Availability
                            </p>
                            <p className="text-gray-700">{tech.availability}</p>
                          </div>
                          {tech.linkedin_url && (
                            <div>
                              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">
                                LinkedIn
                              </p>
                              <a
                                href={tech.linkedin_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline truncate block"
                              >
                                View profile ↗
                              </a>
                            </div>
                          )}
                        </div>
                        {tech.admin_notes && (
                          <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3">
                            <p className="text-xs font-medium text-yellow-700 mb-1">
                              Admin Notes
                            </p>
                            <p className="text-sm text-gray-700">
                              {tech.admin_notes}
                            </p>
                            {tech.reviewed_at && (
                              <p className="text-xs text-gray-400 mt-1">
                                Reviewed {formatDate(tech.reviewed_at)}
                              </p>
                            )}
                          </div>
                        )}

                        {/* ── Link to account section (approved techs only) ── */}
                        {tech.status === "approved" && (
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Link2 className="h-4 w-4 text-blue-600" />
                              <p className="text-sm font-semibold text-gray-700">
                                Link to Auth Account
                              </p>
                            </div>

                            {tech.user_id ? (
                              // Already linked
                              <div className="flex items-center gap-2 text-sm text-green-700">
                                <UserCheck className="h-4 w-4 shrink-0" />
                                <span>
                                  Account linked. This technician can now log into their{" "}
                                  <Link to="/tech" className="underline">
                                    /tech dashboard
                                  </Link>
                                  .
                                </span>
                              </div>
                            ) : ls.success ? (
                              // Just linked this session
                              <div className="flex items-center gap-2 text-sm text-green-700">
                                <CheckCircle className="h-4 w-4 shrink-0" />
                                <span>
                                  Account linked successfully! The technician can now access{" "}
                                  <Link to="/tech" className="underline">
                                    /tech
                                  </Link>
                                  .
                                </span>
                              </div>
                            ) : (
                              <>
                                <p className="text-xs text-gray-500 mb-3">
                                  Enter the email address the technician used when signing up to TekSure.
                                  This connects their profile to their login so they can access the Tech Dashboard.
                                </p>
                                <div className="flex gap-2">
                                  <Input
                                    type="email"
                                    placeholder="technician@email.com"
                                    value={ls.email}
                                    onChange={(e) =>
                                      setLinkStates((prev) => ({
                                        ...prev,
                                        [tech.id]: {
                                          ...prev[tech.id] ?? { loading: false, success: false, error: null },
                                          email: e.target.value,
                                        },
                                      }))
                                    }
                                    className="flex-1 text-sm h-9"
                                    disabled={ls.loading}
                                  />
                                  <Button
                                    size="sm"
                                    className="bg-blue-600 hover:bg-blue-700 text-white h-9 text-xs"
                                    onClick={() => linkTechToUser(tech.id)}
                                    disabled={!ls.email.trim() || ls.loading}
                                  >
                                    {ls.loading ? (
                                      <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                      <>
                                        <Link2 className="h-3.5 w-3.5 mr-1" />
                                        Link
                                      </>
                                    )}
                                  </Button>
                                </div>
                                {ls.error && (
                                  <div className="flex items-center gap-1.5 mt-2 text-xs text-red-600">
                                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                                    {ls.error}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Approve / Reject dialog */}
      <Dialog
        open={dialog.open}
        onOpenChange={(open) =>
          !dialog.saving &&
          setDialog((d) => ({ ...d, open, notes: open ? d.notes : "" }))
        }
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {dialog.action === "approve" ? "✅ Approve" : "❌ Reject"}{" "}
              Application
            </DialogTitle>
          </DialogHeader>
          <div className="py-2">
            <p className="text-sm text-gray-600 mb-4">
              {dialog.action === "approve"
                ? `Approving ${dialog.tech?.full_name} as a TekSure technician. They'll be able to start accepting jobs.`
                : `Rejecting ${dialog.tech?.full_name}'s application. You can provide a reason below.`}
            </p>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Admin notes (optional)
            </label>
            <Textarea
              value={dialog.notes}
              onChange={(e) =>
                setDialog((d) => ({ ...d, notes: e.target.value }))
              }
              placeholder={
                dialog.action === "approve"
                  ? "e.g. Great experience, fast approval."
                  : "e.g. Insufficient experience at this time."
              }
              className="min-h-[80px]"
            />
          </div>
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={() =>
                setDialog({
                  open: false,
                  tech: null,
                  action: null,
                  notes: "",
                  saving: false,
                })
              }
              disabled={dialog.saving}
            >
              Cancel
            </Button>
            <Button
              onClick={confirmAction}
              disabled={dialog.saving}
              className={
                dialog.action === "approve"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-red-600 hover:bg-red-700 text-white"
              }
            >
              {dialog.saving
                ? "Saving..."
                : dialog.action === "approve"
                ? "Approve"
                : "Reject"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
