import { useEffect, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StatusBadge } from '@/components/StatusBadge';
import {
  Shield, AlertTriangle, Users, Clock, CheckCircle, Wrench, AlertCircle,
  RefreshCw, Phone, Mail, Monitor, ChevronDown, ChevronUp, Search,
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

// ─── Types ───────────────────────────────────────────────────────────────────

interface HelpRequest {
  id: string;
  name: string | null;
  phone: string | null;
  email: string | null;
  device_type: string | null;
  problem_description: string | null;
  status: string;
  created_at: string;
  user_id: string | null;
}

const STATUS_OPTIONS = ['new', 'in_progress', 'resolved', 'cancelled'] as const;
type Status = typeof STATUS_OPTIONS[number];

const statusConfig: Record<Status, { label: string; icon: typeof Clock; color: string; dot: string }> = {
  new:         { label: 'New',         icon: Clock,       color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',    dot: 'bg-blue-500' },
  in_progress: { label: 'In Progress', icon: Wrench,      color: 'bg-amber-500/10 text-amber-600 border-amber-500/20', dot: 'bg-amber-500' },
  resolved:    { label: 'Resolved',    icon: CheckCircle, color: 'bg-green-500/10 text-green-600 border-green-500/20', dot: 'bg-green-500' },
  cancelled:   { label: 'Cancelled',   icon: AlertCircle, color: 'bg-muted/50 text-muted-foreground border-border',     dot: 'bg-muted-foreground' },
};

const deviceLabels: Record<string, string> = {
  phone: '📱 Phone', tablet: '📲 Tablet', computer: '💻 Computer',
  tv: '📺 TV / Streaming', 'smart-home': '🏠 Smart Home', other: '🔧 Other',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit',
  });
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

// ─── Bookings tab ─────────────────────────────────────────────────────────────

interface Booking {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  service_type: string;
  device_type: string | null;
  preferred_date: string;
  preferred_slot: string;
  problem_description: string | null;
  status: string;
  created_at: string;
}

const BOOKING_STATUS_OPTIONS = ['pending', 'confirmed', 'completed', 'cancelled'] as const;
type BookingStatus = typeof BOOKING_STATUS_OPTIONS[number];

const bookingStatusConfig: Record<BookingStatus, { label: string; color: string; dot: string }> = {
  pending:   { label: 'Pending',   color: 'bg-amber-500/10 text-amber-600 border-amber-500/20',  dot: 'bg-amber-500' },
  confirmed: { label: 'Confirmed', color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',     dot: 'bg-blue-500' },
  completed: { label: 'Completed', color: 'bg-green-500/10 text-green-600 border-green-500/20',  dot: 'bg-green-500' },
  cancelled: { label: 'Cancelled', color: 'bg-muted/50 text-muted-foreground border-border',      dot: 'bg-muted-foreground' },
};

const serviceLabels: Record<string, string> = {
  wifi: '📶 WiFi & Internet', setup: '🖥️ Device Setup', security: '🔒 Security',
  printer: '🖨️ Printer', phone: '📱 Phone / Tablet', general: '🔧 General Help',
};

function BookingsTab() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<BookingStatus | 'all'>('all');

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('preferred_date', { ascending: true });
    if (!error && data) setBookings(data as Booking[]);
    setLoading(false);
  };

  useEffect(() => { fetchBookings(); }, []);

  const updateBookingStatus = async (id: string, newStatus: BookingStatus) => {
    setUpdatingId(id);
    const { error } = await supabase.from('bookings').update({ status: newStatus }).eq('id', id);
    if (!error) setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
    setUpdatingId(null);
  };

  const filtered = bookings.filter(b => filterStatus === 'all' || b.status === filterStatus);

  const counts = {
    all: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    completed: bookings.filter(b => b.status === 'completed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length,
  };

  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(['all', 'pending', 'confirmed', 'completed'] as const).map(s => {
          const cfg = s === 'all' ? null : bookingStatusConfig[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`text-left rounded-xl border p-4 transition-all hover:shadow-md ${filterStatus === s ? 'ring-2 ring-secondary shadow-sm' : ''}`}
            >
              <p className="text-xs text-muted-foreground mb-1 capitalize">{s === 'all' ? 'Total' : cfg?.label}</p>
              <p className="text-2xl font-bold">{counts[s]}</p>
            </button>
          );
        })}
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        {(['all', ...BOOKING_STATUS_OPTIONS] as const).map(s => {
          const cfg = s === 'all' ? null : bookingStatusConfig[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`rounded-full border px-3 py-1 text-xs transition-all ${
                filterStatus === s ? 'bg-secondary text-secondary-foreground border-secondary' : 'hover:bg-muted text-muted-foreground'
              }`}
            >
              {s === 'all' ? `All (${counts.all})` : `${cfg?.label} (${counts[s]})`}
            </button>
          );
        })}
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={5} className="text-center py-8 text-muted-foreground">Loading…</TableCell></TableRow>
            ) : filtered.length === 0 ? (
              <TableRow><TableCell colSpan={5} className="text-center py-8 text-muted-foreground">No bookings found.</TableCell></TableRow>
            ) : filtered.map(b => {
              const cfg = bookingStatusConfig[b.status as BookingStatus] || bookingStatusConfig.pending;
              const isExpanded = expandedId === b.id;
              return (
                <>
                  <TableRow key={b.id} className="cursor-pointer hover:bg-muted/50" onClick={() => setExpandedId(isExpanded ? null : b.id)}>
                    <TableCell className="font-medium">{b.name}</TableCell>
                    <TableCell className="text-muted-foreground">{serviceLabels[b.service_type] || b.service_type}</TableCell>
                    <TableCell className="text-sm">
                      {new Date(b.preferred_date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                      <span className="text-muted-foreground ml-1 capitalize">· {b.preferred_slot}</span>
                    </TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${cfg.color}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                        {cfg.label}
                      </span>
                    </TableCell>
                    <TableCell>{isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}</TableCell>
                  </TableRow>
                  {isExpanded && (
                    <TableRow key={`${b.id}-detail`} className="bg-muted/30">
                      <TableCell colSpan={5} className="py-4">
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-1.5">
                            {b.email && <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /><a href={`mailto:${b.email}`} className="hover:underline text-foreground">{b.email}</a></div>}
                            {b.phone && <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /><a href={`tel:${b.phone}`} className="hover:underline text-foreground">{b.phone}</a></div>}
                            {b.device_type && <div className="flex items-center gap-2 text-muted-foreground"><Monitor className="h-4 w-4" /><span>{b.device_type}</span></div>}
                            <p className="text-xs text-muted-foreground pt-1">Booked {timeAgo(b.created_at)} · Ref: {b.id.slice(0, 8).toUpperCase()}</p>
                          </div>
                          {b.problem_description && (
                            <p className="rounded-lg bg-background border p-3 leading-relaxed">{b.problem_description}</p>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                          <span className="text-xs text-muted-foreground self-center mr-1">Change status:</span>
                          {BOOKING_STATUS_OPTIONS.filter(s => s !== b.status).map(s => {
                            const c = bookingStatusConfig[s];
                            return (
                              <button
                                key={s}
                                disabled={updatingId === b.id}
                                onClick={e => { e.stopPropagation(); updateBookingStatus(b.id, s); }}
                                className={`rounded-full border px-3 py-1 text-xs font-medium transition-all hover:shadow-sm disabled:opacity-50 ${c.color}`}
                              >
                                {updatingId === b.id ? '…' : c.label}
                              </button>
                            );
                          })}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// ─── Placeholder data for future features ────────────────────────────────────

const mockJobs = [
  { id: '1', category: 'WiFi', customer: 'John D.', tech: 'Alex M.', status: 'in_progress', created: '2024-01-15' },
  { id: '2', category: 'Printer', customer: 'Sarah K.', tech: 'Mike R.', status: 'completed', created: '2024-01-14' },
  { id: '3', category: 'Virus Removal', customer: 'Tom B.', tech: null, status: 'disputed', created: '2024-01-13' },
  { id: '4', category: 'Device Setup', customer: 'Lisa W.', tech: 'Alex M.', status: 'offered', created: '2024-01-12' },
];

const mockTechs = [
  { id: '1', name: 'Alex M.', verification_level: 'background', jobs: 24, rating: 4.8 },
  { id: '2', name: 'Mike R.', verification_level: 'id', jobs: 12, rating: 4.5 },
  { id: '3', name: 'Chris P.', verification_level: 'none', jobs: 0, rating: 0 },
];

// ─── Help Requests tab ───────────────────────────────────────────────────────

function HelpRequestsTab() {
  const [requests, setRequests] = useState<HelpRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<Status | 'all'>('all');
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('help_requests')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) setRequests(data as HelpRequest[]);
    setLastRefreshed(new Date());
    setLoading(false);
  };

  useEffect(() => { fetchRequests(); }, []);

  const updateStatus = async (id: string, newStatus: Status) => {
    setUpdatingId(id);
    const { error } = await supabase
      .from('help_requests')
      .update({ status: newStatus })
      .eq('id', id);
    if (!error) {
      setRequests(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
    }
    setUpdatingId(null);
  };

  const counts = {
    all: requests.length,
    new: requests.filter(r => r.status === 'new').length,
    in_progress: requests.filter(r => r.status === 'in_progress').length,
    resolved: requests.filter(r => r.status === 'resolved').length,
    cancelled: requests.filter(r => r.status === 'cancelled').length,
  };

  const filtered = requests.filter(r => {
    const matchesStatus = filterStatus === 'all' || r.status === filterStatus;
    const q = search.toLowerCase();
    const matchesSearch = !q
      || (r.name || '').toLowerCase().includes(q)
      || (r.email || '').toLowerCase().includes(q)
      || (r.phone || '').toLowerCase().includes(q)
      || (r.problem_description || '').toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(['all', 'new', 'in_progress', 'resolved'] as const).map(s => {
          const cfg = s === 'all' ? null : statusConfig[s];
          const count = counts[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`text-left rounded-xl border p-4 transition-all hover:shadow-md ${filterStatus === s ? 'ring-2 ring-secondary shadow-sm' : ''}`}
            >
              <p className="text-xs text-muted-foreground mb-1 capitalize">{s === 'all' ? 'Total' : cfg?.label}</p>
              <p className="text-2xl font-bold">{count}</p>
              {cfg && (
                <div className={`mt-2 inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs ${cfg.color}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                  {cfg.label}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Search + refresh */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            className="w-full rounded-lg border bg-background pl-9 pr-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Search name, email, or issue…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <button
          onClick={fetchRequests}
          className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline">{lastRefreshed.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
        </button>
      </div>

      {/* Status filter pills */}
      <div className="flex flex-wrap gap-2">
        {(['all', ...STATUS_OPTIONS] as const).map(s => {
          const cfg = s === 'all' ? null : statusConfig[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`rounded-full border px-3 py-1 text-xs transition-all ${
                filterStatus === s
                  ? 'bg-secondary text-secondary-foreground border-secondary'
                  : 'hover:bg-muted text-muted-foreground'
              }`}
            >
              {s === 'all' ? `All (${counts.all})` : `${cfg?.label} (${counts[s]})`}
            </button>
          );
        })}
      </div>

      {/* Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Received</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">Loading…</TableCell>
              </TableRow>
            ) : filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">No requests found.</TableCell>
              </TableRow>
            ) : filtered.map(r => {
              const cfg = statusConfig[r.status as Status] || statusConfig.new;
              const isExpanded = expandedId === r.id;
              return (
                <>
                  <TableRow
                    key={r.id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => setExpandedId(isExpanded ? null : r.id)}
                  >
                    <TableCell className="font-medium">{r.name || '(anonymous)'}</TableCell>
                    <TableCell className="text-muted-foreground">{r.device_type ? (deviceLabels[r.device_type] || r.device_type) : '—'}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${cfg.color}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                        {cfg.label}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{timeAgo(r.created_at)}</TableCell>
                    <TableCell>
                      {isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                    </TableCell>
                  </TableRow>
                  {isExpanded && (
                    <TableRow key={`${r.id}-detail`} className="bg-muted/30">
                      <TableCell colSpan={5} className="py-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2 text-sm">
                            {r.email && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <a href={`mailto:${r.email}`} className="hover:underline text-foreground">{r.email}</a>
                              </div>
                            )}
                            {r.phone && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <a href={`tel:${r.phone}`} className="hover:underline text-foreground">{r.phone}</a>
                              </div>
                            )}
                            {r.device_type && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Monitor className="h-4 w-4" />
                                <span>{deviceLabels[r.device_type] || r.device_type}</span>
                              </div>
                            )}
                            <p className="text-xs text-muted-foreground pt-1">
                              Submitted {formatDate(r.created_at)}{r.user_id ? ' · Logged-in user' : ' · Guest'}
                            </p>
                          </div>
                          <div>
                            {r.problem_description && (
                              <p className="text-sm rounded-lg bg-background border p-3 leading-relaxed">
                                {r.problem_description}
                              </p>
                            )}
                          </div>
                        </div>
                        {/* Status actions */}
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                          <span className="text-xs text-muted-foreground self-center mr-1">Change status:</span>
                          {STATUS_OPTIONS.filter(s => s !== r.status).map(s => {
                            const c = statusConfig[s];
                            return (
                              <button
                                key={s}
                                disabled={updatingId === r.id}
                                onClick={e => { e.stopPropagation(); updateStatus(r.id, s); }}
                                className={`rounded-full border px-3 py-1 text-xs font-medium transition-all hover:shadow-sm disabled:opacity-50 ${c.color}`}
                              >
                                {updatingId === r.id ? '…' : c.label}
                              </button>
                            );
                          })}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

// ─── Main admin console ───────────────────────────────────────────────────────

const AdminConsole = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-1">Admin Console</h1>
      <p className="text-muted-foreground mb-8">Manage requests, jobs, disputes, and technician verification</p>

      <Tabs defaultValue="requests">
        <TabsList className="mb-6">
          <TabsTrigger value="requests">Help Requests</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="disputes">Disputes</TabsTrigger>
          <TabsTrigger value="techs">Tech Verification</TabsTrigger>
        </TabsList>

        {/* ── Help Requests (live Supabase data) ── */}
        <TabsContent value="requests">
          <HelpRequestsTab />
        </TabsContent>

        {/* ── Bookings (live Supabase data) ── */}
        <TabsContent value="bookings">
          <BookingsTab />
        </TabsContent>

        {/* ── Jobs (placeholder — technician booking coming soon) ── */}
        <TabsContent value="jobs">
          <div className="rounded-lg border border-dashed p-6 text-center mb-6 text-muted-foreground text-sm">
            Job matching launches with the technician booking system. Requests will appear here once a tech is assigned.
          </div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Tech</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockJobs.map(job => (
                  <TableRow key={job.id} className="opacity-60">
                    <TableCell className="font-medium">{job.category}</TableCell>
                    <TableCell>{job.customer}</TableCell>
                    <TableCell>{job.tech || '—'}</TableCell>
                    <TableCell><StatusBadge status={job.status} /></TableCell>
                    <TableCell className="text-muted-foreground">{job.created}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        {/* ── Disputes (placeholder) ── */}
        <TabsContent value="disputes">
          <div className="rounded-lg border border-dashed p-6 text-center mb-6 text-muted-foreground text-sm">
            Dispute management will be available once the technician booking system is live.
          </div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Tech</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockJobs.filter(j => j.status === 'disputed').map(job => (
                  <TableRow key={job.id} className="opacity-60">
                    <TableCell className="font-medium">{job.category}</TableCell>
                    <TableCell>{job.customer}</TableCell>
                    <TableCell>{job.tech || '—'}</TableCell>
                    <TableCell className="text-muted-foreground">{job.created}</TableCell>
                    <TableCell><Button variant="outline" size="sm" disabled>Review</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        {/* ── Tech Verification (placeholder) ── */}
        <TabsContent value="techs">
          <div className="rounded-lg border border-dashed p-6 text-center mb-6 text-muted-foreground text-sm">
            Technician profiles and verification will be managed here once onboarding is live.
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="flex items-center gap-3 py-4">
                <Users className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-xs text-muted-foreground">Total Techs</p>
                  <p className="text-xl font-bold">{mockTechs.length}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 py-4">
                <Shield className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-xs text-muted-foreground">Verified</p>
                  <p className="text-xl font-bold">{mockTechs.filter(t => t.verification_level !== 'none').length}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-3 py-4">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <div>
                  <p className="text-xs text-muted-foreground">Pending Verify</p>
                  <p className="text-xl font-bold">{mockTechs.filter(t => t.verification_level === 'none').length}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Verification</TableHead>
                  <TableHead>Jobs</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTechs.map(tech => (
                  <TableRow key={tech.id} className="opacity-60">
                    <TableCell className="font-medium">{tech.name}</TableCell>
                    <TableCell>
                      <Badge variant={tech.verification_level === 'none' ? 'destructive' : 'secondary'} className="capitalize">
                        {tech.verification_level}
                      </Badge>
                    </TableCell>
                    <TableCell>{tech.jobs}</TableCell>
                    <TableCell>{tech.rating > 0 ? tech.rating : '—'}</TableCell>
                    <TableCell>
                      {tech.verification_level === 'none' && (
                        <Button variant="outline" size="sm" disabled>Verify</Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
);

export default AdminConsole;
