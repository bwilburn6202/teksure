/**
 * AnalyticsDashboard — Admin-only analytics page
 *
 * Shows:
 *  - Top guides by views (last 7 / 30 days / all time)
 *  - Top guides by rating
 *  - Booking stats (pending, paid, etc.)
 *  - Forum activity (threads and replies in last 30 days)
 *
 * New in this update:
 *  - CSV export buttons for guide views, ratings, and bookings
 *
 * Route: /admin/analytics
 * Gate: Redirects to / if user is not authenticated or not an admin.
 */

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Star,
  Calendar,
  MessageSquare,
  TrendingUp,
  Eye,
  ArrowLeft,
  AlertCircle,
  Download,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
interface GuideViewRow {
  guide_id: string;
  total_views: number;
  views_last_30_days: number;
  views_last_7_days: number;
}

interface GuideRatingRow {
  guide_id: string;
  total_ratings: number;
  average_rating: number;
}

interface BookingRow {
  id: string;
  service_type?: string;
  date?: string;
  time?: string;
  payment_status?: string;
  status?: string;
  created_at?: string;
}

interface ForumThreadRow {
  id: string;
  title: string;
  category?: string;
  is_pinned?: boolean;
  accepted_reply_id?: string | null;
  created_at: string;
}

interface ForumReplyRow {
  id: string;
  thread_id: string;
  content: string;
  created_at: string;
  is_accepted_answer?: boolean;
}

interface BookingStats {
  total: number;
  paid: number;
  pending: number;
  unpaid: number;
}

interface ForumStats {
  threadsLast30: number;
  repliesLast30: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// CSV Export Utility
// ─────────────────────────────────────────────────────────────────────────────
function downloadCSV(rows: (string | number)[][], filename: string) {
  const csv = rows
    .map((row) =>
      row
        .map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`)
        .join(",")
    )
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function formatGuideId(id: string) {
  return id
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function StarDisplay({ value }: { value: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`h-3.5 w-3.5 ${
            n <= Math.round(value)
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-200"
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-600">{value.toFixed(1)}</span>
    </span>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color = "blue",
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
  color?: "blue" | "green" | "yellow" | "purple";
}) {
  const colorMap = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    yellow: "bg-yellow-50 text-yellow-600",
    purple: "bg-purple-50 text-purple-600",
  };
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl ${colorMap[color]}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
            {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
export default function AnalyticsDashboard() {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [loading, setLoading] = useState(true);

  const [viewData, setViewData] = useState<GuideViewRow[]>([]);
  const [ratingData, setRatingData] = useState<GuideRatingRow[]>([]);
  const [bookingStats, setBookingStats] = useState<BookingStats>({
    total: 0,
    paid: 0,
    pending: 0,
    unpaid: 0,
  });
  const [rawBookings, setRawBookings] = useState<BookingRow[]>([]);
  const [forumThreads, setForumThreads] = useState<ForumThreadRow[]>([]);
  const [forumReplies, setForumReplies] = useState<ForumReplyRow[]>([]);
  const [forumStats, setForumStats] = useState<ForumStats>({
    threadsLast30: 0,
    repliesLast30: 0,
  });
  const [totalViews, setTotalViews] = useState(0);

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

      setAuthChecked(true);
    };
    checkAdmin();
  }, [navigate]);

  useEffect(() => {
    if (!authChecked) return;
    fetchAnalytics();
  }, [authChecked]);

  const fetchAnalytics = async () => {
    setLoading(true);

    // 1. Guide views
    const { data: views } = await supabase
      .from("guide_view_summary")
      .select("*")
      .order("total_views", { ascending: false })
      .limit(10);
    const viewRows = (views as GuideViewRow[]) ?? [];
    setViewData(viewRows);
    setTotalViews(viewRows.reduce((sum, r) => sum + Number(r.total_views), 0));

    // 2. Guide ratings
    const { data: ratings } = await supabase
      .from("guide_rating_summary")
      .select("*")
      .order("average_rating", { ascending: false })
      .limit(10);
    setRatingData((ratings as GuideRatingRow[]) ?? []);

    // 3. Booking stats + raw data for CSV
    const { data: bookings } = await supabase
      .from("bookings")
      .select("id, service_type, date, time, payment_status, status, created_at")
      .order("created_at", { ascending: false });

    if (bookings) {
      setRawBookings(bookings as BookingRow[]);
      const stats: BookingStats = {
        total: bookings.length,
        paid: 0,
        pending: 0,
        unpaid: 0,
      };
      bookings.forEach((b: any) => {
        if (b.payment_status === "paid") stats.paid++;
        else if (b.payment_status === "pending") stats.pending++;
        else stats.unpaid++;
      });
      setBookingStats(stats);
    }

    // 4. Forum stats (last 30 days) + raw threads for CSV
    const thirtyDaysAgo = new Date(
      Date.now() - 30 * 24 * 60 * 60 * 1000
    ).toISOString();

    const { count: threadCount } = await supabase
      .from("forum_threads")
      .select("*", { count: "exact", head: true })
      .gte("created_at", thirtyDaysAgo);

    const { count: replyCount } = await supabase
      .from("forum_replies")
      .select("*", { count: "exact", head: true })
      .gte("created_at", thirtyDaysAgo);

    // Fetch all threads for CSV export
    const { data: allThreads } = await supabase
      .from("forum_threads")
      .select("id, title, category, is_pinned, accepted_reply_id, created_at")
      .order("created_at", { ascending: false });
    setForumThreads((allThreads as ForumThreadRow[]) ?? []);

    // Fetch all replies for CSV export (join thread title via thread_id)
    const { data: allReplies } = await supabase
      .from("forum_replies")
      .select("id, thread_id, content, created_at, is_accepted_answer")
      .order("created_at", { ascending: false });
    setForumReplies((allReplies as ForumReplyRow[]) ?? []);

    setForumStats({
      threadsLast30: threadCount ?? 0,
      repliesLast30: replyCount ?? 0,
    });

    setLoading(false);
  };

  // ── CSV export handlers ─────────────────────────────────────────────────────
  const exportGuideViews = () => {
    const today = new Date().toISOString().split("T")[0];
    const headers = ["Guide", "Total Views", "Views Last 7 Days", "Views Last 30 Days"];
    const rows = viewData.map((r) => [
      formatGuideId(r.guide_id),
      Number(r.total_views),
      Number(r.views_last_7_days),
      Number(r.views_last_30_days),
    ]);
    downloadCSV([headers, ...rows], `teksure-guide-views-${today}.csv`);
  };

  const exportGuideRatings = () => {
    const today = new Date().toISOString().split("T")[0];
    const headers = ["Guide", "Average Rating", "Total Ratings"];
    const rows = ratingData.map((r) => [
      formatGuideId(r.guide_id),
      Number(r.average_rating).toFixed(2),
      Number(r.total_ratings),
    ]);
    downloadCSV([headers, ...rows], `teksure-guide-ratings-${today}.csv`);
  };

  const exportBookings = () => {
    const today = new Date().toISOString().split("T")[0];
    const headers = ["Booking ID", "Service", "Date", "Time", "Payment Status", "Status", "Created"];
    const rows = rawBookings.map((b) => [
      b.id,
      b.service_type ?? "",
      b.date ?? "",
      b.time ?? "",
      b.payment_status ?? "",
      b.status ?? "",
      b.created_at ? new Date(b.created_at).toLocaleDateString() : "",
    ]);
    downloadCSV([headers, ...rows], `teksure-bookings-${today}.csv`);
  };

  const exportForumThreads = () => {
    const today = new Date().toISOString().split("T")[0];
    const headers = ["Thread ID", "Title", "Category", "Pinned", "Solved", "Created"];
    const rows = forumThreads.map((t) => [
      t.id,
      t.title,
      t.category ?? "General",
      t.is_pinned ? "Yes" : "No",
      t.accepted_reply_id ? "Yes" : "No",
      new Date(t.created_at).toLocaleDateString(),
    ]);
    downloadCSV([headers, ...rows], `teksure-forum-threads-${today}.csv`);
  };

  const exportForumReplies = () => {
    const today = new Date().toISOString().split("T")[0];
    // Build a map of thread id → title for enriching the export
    const threadTitleMap = new Map<string, string>(
      forumThreads.map((t) => [t.id, t.title])
    );
    const headers = [
      "Reply ID",
      "Thread ID",
      "Thread Title",
      "Reply Preview",
      "Accepted Answer",
      "Created",
    ];
    const rows = forumReplies.map((r) => [
      r.id,
      r.thread_id,
      threadTitleMap.get(r.thread_id) ?? "",
      // Truncate long content to keep the CSV readable
      r.content.length > 120 ? r.content.slice(0, 120) + "…" : r.content,
      r.is_accepted_answer ? "Yes" : "No",
      new Date(r.created_at).toLocaleDateString(),
    ]);
    downloadCSV([headers, ...rows], `teksure-forum-replies-${today}.csv`);
  };

  // ── Loading / guard ─────────────────────────────────────────────────────────
  if (!authChecked) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Checking access...</p>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-1">
            <Link
              to="/admin"
              className="text-gray-400 hover:text-gray-600 flex items-center gap-1 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Admin
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-700 font-medium">Analytics</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-7 w-7 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Analytics Dashboard
                </h1>
                <p className="text-gray-500 text-sm mt-0.5">
                  Track guide popularity, user engagement, bookings, and forum
                  activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        {loading ? (
          <div className="text-center py-16 text-gray-400">
            Loading analytics data...
          </div>
        ) : (
          <>
            {/* ── Summary Cards ── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatCard
                icon={Eye}
                label="Total Guide Views"
                value={totalViews.toLocaleString()}
                sub="All time"
                color="blue"
              />
              <StatCard
                icon={Star}
                label="Guides Rated"
                value={ratingData.length}
                sub="With at least 1 rating"
                color="yellow"
              />
              <StatCard
                icon={Calendar}
                label="Paid Bookings"
                value={bookingStats.paid}
                sub={`${bookingStats.total} total bookings`}
                color="green"
              />
              <StatCard
                icon={MessageSquare}
                label="Forum Activity"
                value={forumStats.threadsLast30 + forumStats.repliesLast30}
                sub="Posts & replies (30 days)"
                color="purple"
              />
            </div>

            {/* ── Two Column Layout ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

              {/* Top Guides by Views */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-500" />
                      Most Viewed Guides
                    </CardTitle>
                    {viewData.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={exportGuideViews}
                        className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1 h-7 px-2"
                        title="Export as CSV"
                      >
                        <Download className="h-3 w-3" />
                        Export CSV
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {viewData.length === 0 ? (
                    <EmptyState message="No guide views recorded yet." />
                  ) : (
                    <div className="space-y-3">
                      {viewData.map((row, i) => (
                        <div key={row.guide_id} className="flex items-center gap-3">
                          <span className="text-sm font-bold text-gray-300 w-5 text-right">
                            {i + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-700 truncate">
                              {formatGuideId(row.guide_id)}
                            </p>
                            <div className="flex gap-3 text-xs text-gray-400 mt-0.5">
                              <span>
                                {Number(row.views_last_7_days)} this week
                              </span>
                              <span>
                                {Number(row.views_last_30_days)} this month
                              </span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs shrink-0">
                            {Number(row.total_views).toLocaleString()} total
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Top Guides by Rating */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      Top-Rated Guides
                    </CardTitle>
                    {ratingData.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={exportGuideRatings}
                        className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1 h-7 px-2"
                        title="Export as CSV"
                      >
                        <Download className="h-3 w-3" />
                        Export CSV
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {ratingData.length === 0 ? (
                    <EmptyState message="No guide ratings recorded yet." />
                  ) : (
                    <div className="space-y-3">
                      {ratingData.map((row, i) => (
                        <div key={row.guide_id} className="flex items-center gap-3">
                          <span className="text-sm font-bold text-gray-300 w-5 text-right">
                            {i + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-700 truncate">
                              {formatGuideId(row.guide_id)}
                            </p>
                            <StarDisplay value={Number(row.average_rating)} />
                          </div>
                          <span className="text-xs text-gray-400 shrink-0">
                            {Number(row.total_ratings)}{" "}
                            {Number(row.total_ratings) === 1
                              ? "rating"
                              : "ratings"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* ── Bookings Breakdown ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-green-500" />
                      Booking Payment Status
                    </CardTitle>
                    {rawBookings.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={exportBookings}
                        className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1 h-7 px-2"
                        title="Export all bookings as CSV"
                      >
                        <Download className="h-3 w-3" />
                        Export CSV
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {bookingStats.total === 0 ? (
                    <EmptyState message="No bookings yet." />
                  ) : (
                    <div className="space-y-3">
                      <StatusBar
                        label="Paid"
                        count={bookingStats.paid}
                        total={bookingStats.total}
                        color="bg-green-500"
                      />
                      <StatusBar
                        label="Pending Payment"
                        count={bookingStats.pending}
                        total={bookingStats.total}
                        color="bg-yellow-400"
                      />
                      <StatusBar
                        label="Unpaid / Other"
                        count={bookingStats.unpaid}
                        total={bookingStats.total}
                        color="bg-gray-300"
                      />
                      <p className="text-xs text-gray-400 pt-1">
                        {bookingStats.total} total bookings
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Forum Stats */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-purple-500" />
                      Forum Activity (Last 30 Days)
                    </CardTitle>
                    {/* Export buttons for both threads and replies */}
                    <div className="flex items-center gap-1">
                      {forumThreads.length > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={exportForumThreads}
                          className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1 h-7 px-2"
                          title="Export all forum threads as CSV"
                        >
                          <Download className="h-3 w-3" />
                          Threads
                        </Button>
                      )}
                      {forumReplies.length > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={exportForumReplies}
                          className="text-xs text-gray-500 hover:text-blue-600 flex items-center gap-1 h-7 px-2"
                          title="Export all forum replies as CSV"
                        >
                          <Download className="h-3 w-3" />
                          Replies
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm text-gray-700">
                        New Discussions
                      </span>
                      <span className="text-2xl font-bold text-purple-700">
                        {forumStats.threadsLast30}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm text-gray-700">
                        Replies Posted
                      </span>
                      <span className="text-2xl font-bold text-purple-700">
                        {forumStats.repliesLast30}
                      </span>
                    </div>
                    <Link
                      to="/admin"
                      className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Manage forum content in Admin Dashboard →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ── Admin Note ── */}
            <div className="mt-6 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-700">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <p>
                <strong>Note:</strong> Guide view counts are logged automatically
                when users visit guide pages. Ratings are submitted by logged-in
                users on guide detail pages. Use the{" "}
                <strong>Export CSV</strong> buttons to download data for offline
                analysis.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────
function EmptyState({ message }: { message: string }) {
  return (
    <p className="text-sm text-gray-400 py-4 text-center">{message}</p>
  );
}

function StatusBar({
  label,
  count,
  total,
  color,
}: {
  label: string;
  count: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-700">{label}</span>
        <span className="font-medium text-gray-800">
          {count}{" "}
          <span className="text-gray-400 font-normal">({pct}%)</span>
        </span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
