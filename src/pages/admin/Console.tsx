import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Shield, AlertTriangle, Users, Clock, CheckCircle, Wrench, AlertCircle,
  RefreshCw, Phone, Mail, Monitor, ChevronDown, ChevronUp, Search,
} from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { formatBookingSlot } from '@/lib/bookingSlots';

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
  phone: ' Phone', tablet: ' Tablet', computer: ' Computer',
  tv: ' TV / Streaming', 'smart-home': ' Smart Home', other: ' Other',
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
  wifi: ' WiFi & Internet', setup: ' Device Setup', security: ' Security',
  printer: ' Printer', phone: ' Phone / Tablet', general: ' General Help',
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
      .from('bookings' as any)
      .select('*')
      .order('preferred_date', { ascending: true })
      .limit(100);
    if (error) {
      toast.error('Failed to load bookings');
    } else if (data) {
      setBookings(data as unknown as Booking[]);
    }
    setLoading(false);
  };

  useEffect(() => { fetchBookings(); }, []);

  const updateBookingStatus = async (id: string, newStatus: BookingStatus) => {
    setUpdatingId(id);
    const { error } = await supabase.from('bookings' as any).update({ status: newStatus }).eq('id', id);
    if (error) {
      toast.error('Failed to update booking status');
    } else {
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
    }
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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(['all', 'pending', 'confirmed', 'completed'] as const).map(s => {
          const cfg = s === 'all' ? null : bookingStatusConfig[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`text-left rounded-xl border p-4 transition-all hover:shadow-md ${filterStatus === s ? 'ring-2 ring-primary shadow-sm' : ''}`}
            >
              <p className="text-xs text-muted-foreground mb-1 capitalize">{s === 'all' ? 'Total' : cfg?.label}</p>
              <p className="text-2xl font-bold">{counts[s]}</p>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        {(['all', ...BOOKING_STATUS_OPTIONS] as const).map(s => {
          const cfg = s === 'all' ? null : bookingStatusConfig[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`rounded-full border px-3 py-1 text-xs transition-all ${
                filterStatus === s ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-muted text-muted-foreground'
              }`}
            >
              {s === 'all' ? `All (${counts.all})` : `${cfg?.label} (${counts[s]})`}
            </button>
          );
        })}
      </div>

      <Card className="rounded-2xl border border-border bg-card overflow-hidden">
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
                      {new Date(b.preferred_date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
                      <span className="text-muted-foreground ml-1">· {formatBookingSlot(b.preferred_slot)}</span>
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

interface Job {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  service_type: string;
  problem_description: string | null;
  preferred_date: string;
  preferred_slot: string | null;
  status: string;
  payment_status: string | null;
  created_at: string;
  tech_id: string | null;
  tech_name?: string;
}

const JOB_STATUS_OPTIONS = ['pending', 'confirmed', 'in_progress', 'completed', 'cancelled'] as const;
type JobStatus = typeof JOB_STATUS_OPTIONS[number];

const jobStatusConfig: Record<string, { label: string; color: string; dot: string }> = {
  pending:     { label: 'Pending',     color: 'bg-amber-500/10 text-amber-600 border-amber-500/20',  dot: 'bg-amber-500' },
  confirmed:   { label: 'Confirmed',   color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',     dot: 'bg-blue-500' },
  in_progress: { label: 'In Progress', color: 'bg-purple-500/10 text-purple-600 border-purple-500/20', dot: 'bg-purple-500' },
  completed:   { label: 'Completed',   color: 'bg-green-500/10 text-green-600 border-green-500/20',  dot: 'bg-green-500' },
  cancelled:   { label: 'Cancelled',   color: 'bg-muted/50 text-muted-foreground border-border',      dot: 'bg-muted-foreground' },
};

const paymentLabels: Record<string, { label: string; color: string }> = {
  paid:      { label: 'Paid',      color: 'bg-green-500/10 text-green-600 border-green-500/20' },
  pending:   { label: 'Pending',   color: 'bg-amber-500/10 text-amber-600 border-amber-500/20' },
  refunded:  { label: 'Refunded',  color: 'bg-red-500/10 text-red-600 border-red-500/20' },
  cancelled: { label: 'Cancelled', color: 'bg-muted/50 text-muted-foreground border-border' },
};

function JobsTab() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchJobs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings' as any)
      .select('*')
      .not('tech_id', 'is', null)
      .order('created_at', { ascending: false })
      .limit(100);
    if (error) {
      toast.error('Failed to load jobs');
      setLoading(false);
      return;
    }
    const jobsData = (data || []) as unknown as Job[];

    // Fetch tech names for assigned jobs
    const techIds = [...new Set(jobsData.map(j => j.tech_id).filter(Boolean))];
    if (techIds.length > 0) {
      const { data: techProfiles } = await supabase
        .from('profiles' as any)
        .select('id, full_name')
        .in('id', techIds);
      const techMap = new Map((techProfiles || []).map((t: any) => [t.id, t.full_name]));
      jobsData.forEach(j => { j.tech_name = techMap.get(j.tech_id!) || 'Unknown Tech'; });
    }

    setJobs(jobsData);
    setLoading(false);
  };

  useEffect(() => { fetchJobs(); }, []);

  const updateJobStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    const { error } = await supabase.from('bookings' as any).update({ status: newStatus }).eq('id', id);
    if (error) {
      toast.error('Failed to update job status');
    } else {
      setJobs(prev => prev.map(j => j.id === id ? { ...j, status: newStatus } : j));
      toast.success(`Job status updated to ${newStatus}`);
    }
    setUpdatingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="text-left rounded-xl border p-4">
          <p className="text-xs text-muted-foreground mb-1">Total Jobs</p>
          <p className="text-2xl font-bold">{jobs.length}</p>
        </div>
        <div className="text-left rounded-xl border p-4">
          <p className="text-xs text-muted-foreground mb-1">In Progress</p>
          <p className="text-2xl font-bold">{jobs.filter(j => j.status === 'in_progress' || j.status === 'confirmed').length}</p>
        </div>
        <div className="text-left rounded-xl border p-4">
          <p className="text-xs text-muted-foreground mb-1">Completed</p>
          <p className="text-2xl font-bold">{jobs.filter(j => j.status === 'completed').length}</p>
        </div>
        <div className="text-left rounded-xl border p-4">
          <p className="text-xs text-muted-foreground mb-1">Disputed</p>
          <p className="text-2xl font-bold">{jobs.filter(j => j.status === 'disputed').length}</p>
        </div>
      </div>

      <Card className="rounded-2xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Tech</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">Loading...</TableCell></TableRow>
            ) : jobs.length === 0 ? (
              <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No assigned jobs yet. Jobs will appear here once a technician is assigned to a booking.</TableCell></TableRow>
            ) : jobs.map(job => {
              const cfg = jobStatusConfig[job.status] || jobStatusConfig.pending;
              const pay = paymentLabels[job.payment_status || ''] || paymentLabels.pending;
              const isExpanded = expandedId === job.id;
              return (
                <>
                  <TableRow key={job.id} className="cursor-pointer hover:bg-muted/50" onClick={() => setExpandedId(isExpanded ? null : job.id)}>
                    <TableCell className="font-medium">{job.name}</TableCell>
                    <TableCell className="text-muted-foreground">{serviceLabels[job.service_type] || job.service_type}</TableCell>
                    <TableCell>{job.tech_name || '—'}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${cfg.color}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                        {cfg.label}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${pay.color}`}>
                        {pay.label}
                      </span>
                    </TableCell>
                    <TableCell>{isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}</TableCell>
                  </TableRow>
                  {isExpanded && (
                    <TableRow key={`${job.id}-detail`} className="bg-muted/30">
                      <TableCell colSpan={6} className="py-4">
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-1.5">
                            {job.email && <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /><a href={`mailto:${job.email}`} className="hover:underline text-foreground">{job.email}</a></div>}
                            {job.phone && <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /><a href={`tel:${job.phone}`} className="hover:underline text-foreground">{job.phone}</a></div>}
                            <p className="text-xs text-muted-foreground pt-1">
                              Created {timeAgo(job.created_at)} · Preferred: {new Date(job.preferred_date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
                              {job.preferred_slot && ` · ${formatBookingSlot(job.preferred_slot)}`}
                            </p>
                            <p className="text-xs text-muted-foreground">Ref: {job.id.slice(0, 8).toUpperCase()}</p>
                          </div>
                          {job.problem_description && (
                            <p className="rounded-lg bg-background border p-3 leading-relaxed">{job.problem_description}</p>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                          <span className="text-xs text-muted-foreground self-center mr-1">Change status:</span>
                          {JOB_STATUS_OPTIONS.filter(s => s !== job.status).map(s => {
                            const c = jobStatusConfig[s];
                            return (
                              <button
                                key={s}
                                disabled={updatingId === job.id}
                                onClick={e => { e.stopPropagation(); updateJobStatus(job.id, s); }}
                                className={`rounded-full border px-3 py-1 text-xs font-medium transition-all hover:shadow-sm disabled:opacity-50 ${c.color}`}
                              >
                                {updatingId === job.id ? '...' : c.label}
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

interface Dispute {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  service_type: string;
  problem_description: string | null;
  preferred_date: string;
  preferred_slot: string | null;
  status: string;
  payment_status: string | null;
  created_at: string;
  tech_id: string | null;
  tech_name?: string;
}

function DisputesTab() {
  const [disputes, setDisputes] = useState<Dispute[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchDisputes = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings' as any)
      .select('*')
      .eq('status', 'disputed')
      .order('created_at', { ascending: false })
      .limit(100);
    if (error) {
      toast.error('Failed to load disputes');
      setLoading(false);
      return;
    }
    const disputeData = (data || []) as unknown as Dispute[];

    const techIds = [...new Set(disputeData.map(d => d.tech_id).filter(Boolean))];
    if (techIds.length > 0) {
      const { data: techProfiles } = await supabase
        .from('profiles' as any)
        .select('id, full_name')
        .in('id', techIds);
      const techMap = new Map((techProfiles || []).map((t: any) => [t.id, t.full_name]));
      disputeData.forEach(d => { d.tech_name = techMap.get(d.tech_id!) || 'Unknown Tech'; });
    }

    setDisputes(disputeData);
    setLoading(false);
  };

  useEffect(() => { fetchDisputes(); }, []);

  if (loading) {
    return <div className="text-center py-12 text-muted-foreground">Loading...</div>;
  }

  if (disputes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
        <h3 className="text-lg font-semibold mb-1">No disputes at this time</h3>
        <p className="text-muted-foreground text-sm max-w-md">
          When a booking is marked as disputed, it will appear here for review.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
        <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{disputes.length} active dispute{disputes.length !== 1 ? 's' : ''}</span> requiring review.
        </p>
      </div>

      <Card className="rounded-2xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Tech</TableHead>
              <TableHead>Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {disputes.map(d => {
              const isExpanded = expandedId === d.id;
              return (
                <>
                  <TableRow key={d.id} className="cursor-pointer hover:bg-muted/50" onClick={() => setExpandedId(isExpanded ? null : d.id)}>
                    <TableCell className="font-medium">{d.name}</TableCell>
                    <TableCell className="text-muted-foreground">{serviceLabels[d.service_type] || d.service_type}</TableCell>
                    <TableCell>{d.tech_name || '—'}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{timeAgo(d.created_at)}</TableCell>
                    <TableCell>{isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}</TableCell>
                  </TableRow>
                  {isExpanded && (
                    <TableRow key={`${d.id}-detail`} className="bg-muted/30">
                      <TableCell colSpan={5} className="py-4">
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-1.5">
                            {d.email && <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /><a href={`mailto:${d.email}`} className="hover:underline text-foreground">{d.email}</a></div>}
                            {d.phone && <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /><a href={`tel:${d.phone}`} className="hover:underline text-foreground">{d.phone}</a></div>}
                            <p className="text-xs text-muted-foreground pt-1">
                              Booked for {new Date(d.preferred_date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
                              {d.preferred_slot && ` at ${formatBookingSlot(d.preferred_slot)}`}
                            </p>
                            <p className="text-xs text-muted-foreground">Ref: {d.id.slice(0, 8).toUpperCase()}</p>
                            {d.payment_status && (
                              <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${(paymentLabels[d.payment_status] || paymentLabels.pending).color}`}>
                                Payment: {(paymentLabels[d.payment_status] || paymentLabels.pending).label}
                              </span>
                            )}
                          </div>
                          {d.problem_description && (
                            <p className="rounded-lg bg-background border p-3 leading-relaxed">{d.problem_description}</p>
                          )}
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

interface TechProfile {
  id: string;
  full_name: string | null;
  email: string | null;
  created_at: string;
}

function TechVerificationTab() {
  const [techs, setTechs] = useState<TechProfile[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTechs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles' as any)
      .select('id, full_name, email, created_at')
      .eq('role', 'tech')
      .order('created_at', { ascending: false });
    if (error) {
      toast.error('Failed to load technicians');
    } else if (data) {
      setTechs(data as unknown as TechProfile[]);
    }
    setLoading(false);
  };

  useEffect(() => { fetchTechs(); }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Card className="rounded-2xl border border-border bg-card">
          <CardContent className="flex items-center gap-3 py-4">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Total Techs</p>
              <p className="text-xl font-bold">{loading ? '...' : techs.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border border-border bg-card">
          <CardContent className="flex items-center gap-3 py-4">
            <Shield className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Verified</p>
              <p className="text-xl font-bold">{loading ? '...' : techs.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border border-border bg-card">
          <CardContent className="flex items-center gap-3 py-4">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-xs text-muted-foreground">Active</p>
              <p className="text-xl font-bold">{loading ? '...' : techs.length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={4} className="text-center py-8 text-muted-foreground">Loading...</TableCell></TableRow>
            ) : techs.length === 0 ? (
              <TableRow><TableCell colSpan={4} className="text-center py-8 text-muted-foreground">No technicians registered yet. Techs will appear here once they sign up with a technician role.</TableCell></TableRow>
            ) : techs.map(tech => (
              <TableRow key={tech.id}>
                <TableCell className="font-medium">{tech.full_name || '(No name)'}</TableCell>
                <TableCell className="text-muted-foreground">
                  {tech.email ? <a href={`mailto:${tech.email}`} className="hover:underline">{tech.email}</a> : '—'}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {new Date(tech.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

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
      .order('created_at', { ascending: false })
      .limit(100);
    if (error) {
      toast.error('Failed to load help requests');
    } else if (data) {
      setRequests(data as HelpRequest[]);
    }
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
    if (error) {
      toast.error('Failed to update status');
    } else {
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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(['all', 'new', 'in_progress', 'resolved'] as const).map(s => {
          const cfg = s === 'all' ? null : statusConfig[s];
          const count = counts[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`text-left rounded-xl border p-4 transition-all hover:shadow-md ${filterStatus === s ? 'ring-2 ring-primary shadow-sm' : ''}`}
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

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            className="w-full rounded-lg border bg-background pl-9 pr-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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

      <div className="flex flex-wrap gap-2">
        {(['all', ...STATUS_OPTIONS] as const).map(s => {
          const cfg = s === 'all' ? null : statusConfig[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`rounded-full border px-3 py-1 text-xs transition-all ${
                filterStatus === s
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'hover:bg-muted text-muted-foreground'
              }`}
            >
              {s === 'all' ? `All (${counts.all})` : `${cfg?.label} (${counts[s]})`}
            </button>
          );
        })}
      </div>

      <Card className="rounded-2xl border border-border bg-card overflow-hidden">
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

const AdminConsole = () => (
  <div className="min-h-screen bg-background">
    <SEOHead title="Admin Console — TekSure" description="TekSure admin dashboard for managing bookings, users, and support tickets." path="/admin" noindex />
    <Navbar />
    <div className="container py-8">
      <div className="border-b border-border pb-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">Admin Console</h1>
        <p className="text-muted-foreground">Manage requests, jobs, disputes, and technician verification</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            to="/admin/content"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-muted/40 hover:bg-muted transition-colors text-foreground"
          >
            Content Pipeline →
          </Link>
          <Link
            to="/admin/newsletter"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-muted/40 hover:bg-muted transition-colors text-foreground"
          >
            <Mail className="h-3 w-3" /> Newsletter →
          </Link>
        </div>
      </div>

      <Tabs defaultValue="requests">
        <TabsList className="mb-6">
          <TabsTrigger value="requests">Help Requests</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="disputes">Disputes</TabsTrigger>
          <TabsTrigger value="techs">Tech Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="requests">
          <HelpRequestsTab />
        </TabsContent>

        <TabsContent value="bookings">
          <BookingsTab />
        </TabsContent>

        <TabsContent value="jobs">
          <JobsTab />
        </TabsContent>

        <TabsContent value="disputes">
          <DisputesTab />
        </TabsContent>

        <TabsContent value="techs">
          <TechVerificationTab />
        </TabsContent>
      </Tabs>
    </div>
    <Footer />
  </div>
);

export default AdminConsole;
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Shield, AlertTriangle, Users, Clock, CheckCircle, Wrench, AlertCircle,
  RefreshCw, Phone, Mail, Monitor, ChevronDown, ChevronUp, Search,
} from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

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
  phone: ' Phone', tablet: ' Tablet', computer: ' Computer',
  tv: ' TV / Streaming', 'smart-home': ' Smart Home', other: ' Other',
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
  wifi: ' WiFi & Internet', setup: ' Device Setup', security: ' Security',
  printer: ' Printer', phone: ' Phone / Tablet', general: ' General Help',
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
      .from('bookings' as any)
      .select('*')
      .order('preferred_date', { ascending: true })
      .limit(100);
    if (error) {
      toast.error('Failed to load bookings');
    } else if (data) {
      setBookings(data as unknown as Booking[]);
    }
    setLoading(false);
  };

  useEffect(() => { fetchBookings(); }, []);

  const updateBookingStatus = async (id: string, newStatus: BookingStatus) => {
    setUpdatingId(id);
    const { error } = await supabase.from('bookings' as any).update({ status: newStatus }).eq('id', id);
    if (error) {
      toast.error('Failed to update booking status');
    } else {
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
    }
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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(['all', 'pending', 'confirmed', 'completed'] as const).map(s => {
          const cfg = s === 'all' ? null : bookingStatusConfig[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`text-left rounded-xl border p-4 transition-all hover:shadow-md ${filterStatus === s ? 'ring-2 ring-primary shadow-sm' : ''}`}
            >
              <p className="text-xs text-muted-foreground mb-1 capitalize">{s === 'all' ? 'Total' : cfg?.label}</p>
              <p className="text-2xl font-bold">{counts[s]}</p>
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2">
        {(['all', ...BOOKING_STATUS_OPTIONS] as const).map(s => {
          const cfg = s === 'all' ? null : bookingStatusConfig[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`rounded-full border px-3 py-1 text-xs transition-all ${
                filterStatus === s ? 'bg-primary text-primary-foreground border-primary' : 'hover:bg-muted text-muted-foreground'
              }`}
            >
              {s === 'all' ? `All (${counts.all})` : `${cfg?.label} (${counts[s]})`}
            </button>
          );
        })}
      </div>

      <Card className="rounded-2xl border border-border bg-card overflow-hidden">
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
                      {new Date(b.preferred_date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
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

interface Job {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  service_type: string;
  problem_description: string | null;
  preferred_date: string;
  preferred_slot: string | null;
  status: string;
  payment_status: string | null;
  created_at: string;
  tech_id: string | null;
  tech_name?: string;
}

const JOB_STATUS_OPTIONS = ['pending', 'confirmed', 'in_progress', 'completed', 'cancelled'] as const;
type JobStatus = typeof JOB_STATUS_OPTIONS[number];

const jobStatusConfig: Record<string, { label: string; color: string; dot: string }> = {
  pending:     { label: 'Pending',     color: 'bg-amber-500/10 text-amber-600 border-amber-500/20',  dot: 'bg-amber-500' },
  confirmed:   { label: 'Confirmed',   color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',     dot: 'bg-blue-500' },
  in_progress: { label: 'In Progress', color: 'bg-purple-500/10 text-purple-600 border-purple-500/20', dot: 'bg-purple-500' },
  completed:   { label: 'Completed',   color: 'bg-green-500/10 text-green-600 border-green-500/20',  dot: 'bg-green-500' },
  cancelled:   { label: 'Cancelled',   color: 'bg-muted/50 text-muted-foreground border-border',      dot: 'bg-muted-foreground' },
};

const paymentLabels: Record<string, { label: string; color: string }> = {
  paid:      { label: 'Paid',      color: 'bg-green-500/10 text-green-600 border-green-500/20' },
  pending:   { label: 'Pending',   color: 'bg-amber-500/10 text-amber-600 border-amber-500/20' },
  refunded:  { label: 'Refunded',  color: 'bg-red-500/10 text-red-600 border-red-500/20' },
  cancelled: { label: 'Cancelled', color: 'bg-muted/50 text-muted-foreground border-border' },
};

function JobsTab() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchJobs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings' as any)
      .select('*')
      .not('tech_id', 'is', null)
      .order('created_at', { ascending: false })
      .limit(100);
    if (error) {
      toast.error('Failed to load jobs');
      setLoading(false);
      return;
    }
    const jobsData = (data || []) as unknown as Job[];

    // Fetch tech names for assigned jobs
    const techIds = [...new Set(jobsData.map(j => j.tech_id).filter(Boolean))];
    if (techIds.length > 0) {
      const { data: techProfiles } = await supabase
        .from('profiles' as any)
        .select('id, full_name')
        .in('id', techIds);
      const techMap = new Map((techProfiles || []).map((t: any) => [t.id, t.full_name]));
      jobsData.forEach(j => { j.tech_name = techMap.get(j.tech_id!) || 'Unknown Tech'; });
    }

    setJobs(jobsData);
    setLoading(false);
  };

  useEffect(() => { fetchJobs(); }, []);

  const updateJobStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    const { error } = await supabase.from('bookings' as any).update({ status: newStatus }).eq('id', id);
    if (error) {
      toast.error('Failed to update job status');
    } else {
      setJobs(prev => prev.map(j => j.id === id ? { ...j, status: newStatus } : j));
      toast.success(`Job status updated to ${newStatus}`);
    }
    setUpdatingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="text-left rounded-xl border p-4">
          <p className="text-xs text-muted-foreground mb-1">Total Jobs</p>
          <p className="text-2xl font-bold">{jobs.length}</p>
        </div>
        <div className="text-left rounded-xl border p-4">
          <p className="text-xs text-muted-foreground mb-1">In Progress</p>
          <p className="text-2xl font-bold">{jobs.filter(j => j.status === 'in_progress' || j.status === 'confirmed').length}</p>
        </div>
        <div className="text-left rounded-xl border p-4">
          <p className="text-xs text-muted-foreground mb-1">Completed</p>
          <p className="text-2xl font-bold">{jobs.filter(j => j.status === 'completed').length}</p>
        </div>
        <div className="text-left rounded-xl border p-4">
          <p className="text-xs text-muted-foreground mb-1">Disputed</p>
          <p className="text-2xl font-bold">{jobs.filter(j => j.status === 'disputed').length}</p>
        </div>
      </div>

      <Card className="rounded-2xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Tech</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">Loading...</TableCell></TableRow>
            ) : jobs.length === 0 ? (
              <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No assigned jobs yet. Jobs will appear here once a technician is assigned to a booking.</TableCell></TableRow>
            ) : jobs.map(job => {
              const cfg = jobStatusConfig[job.status] || jobStatusConfig.pending;
              const pay = paymentLabels[job.payment_status || ''] || paymentLabels.pending;
              const isExpanded = expandedId === job.id;
              return (
                <>
                  <TableRow key={job.id} className="cursor-pointer hover:bg-muted/50" onClick={() => setExpandedId(isExpanded ? null : job.id)}>
                    <TableCell className="font-medium">{job.name}</TableCell>
                    <TableCell className="text-muted-foreground">{serviceLabels[job.service_type] || job.service_type}</TableCell>
                    <TableCell>{job.tech_name || '—'}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${cfg.color}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                        {cfg.label}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${pay.color}`}>
                        {pay.label}
                      </span>
                    </TableCell>
                    <TableCell>{isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}</TableCell>
                  </TableRow>
                  {isExpanded && (
                    <TableRow key={`${job.id}-detail`} className="bg-muted/30">
                      <TableCell colSpan={6} className="py-4">
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-1.5">
                            {job.email && <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /><a href={`mailto:${job.email}`} className="hover:underline text-foreground">{job.email}</a></div>}
                            {job.phone && <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /><a href={`tel:${job.phone}`} className="hover:underline text-foreground">{job.phone}</a></div>}
                            <p className="text-xs text-muted-foreground pt-1">
                              Created {timeAgo(job.created_at)} · Preferred: {new Date(job.preferred_date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
                              {job.preferred_slot && ` · ${job.preferred_slot}`}
                            </p>
                            <p className="text-xs text-muted-foreground">Ref: {job.id.slice(0, 8).toUpperCase()}</p>
                          </div>
                          {job.problem_description && (
                            <p className="rounded-lg bg-background border p-3 leading-relaxed">{job.problem_description}</p>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                          <span className="text-xs text-muted-foreground self-center mr-1">Change status:</span>
                          {JOB_STATUS_OPTIONS.filter(s => s !== job.status).map(s => {
                            const c = jobStatusConfig[s];
                            return (
                              <button
                                key={s}
                                disabled={updatingId === job.id}
                                onClick={e => { e.stopPropagation(); updateJobStatus(job.id, s); }}
                                className={`rounded-full border px-3 py-1 text-xs font-medium transition-all hover:shadow-sm disabled:opacity-50 ${c.color}`}
                              >
                                {updatingId === job.id ? '...' : c.label}
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

interface Dispute {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  service_type: string;
  problem_description: string | null;
  preferred_date: string;
  preferred_slot: string | null;
  status: string;
  payment_status: string | null;
  created_at: string;
  tech_id: string | null;
  tech_name?: string;
}

function DisputesTab() {
  const [disputes, setDisputes] = useState<Dispute[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchDisputes = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings' as any)
      .select('*')
      .eq('status', 'disputed')
      .order('created_at', { ascending: false })
      .limit(100);
    if (error) {
      toast.error('Failed to load disputes');
      setLoading(false);
      return;
    }
    const disputeData = (data || []) as unknown as Dispute[];

    const techIds = [...new Set(disputeData.map(d => d.tech_id).filter(Boolean))];
    if (techIds.length > 0) {
      const { data: techProfiles } = await supabase
        .from('profiles' as any)
        .select('id, full_name')
        .in('id', techIds);
      const techMap = new Map((techProfiles || []).map((t: any) => [t.id, t.full_name]));
      disputeData.forEach(d => { d.tech_name = techMap.get(d.tech_id!) || 'Unknown Tech'; });
    }

    setDisputes(disputeData);
    setLoading(false);
  };

  useEffect(() => { fetchDisputes(); }, []);

  if (loading) {
    return <div className="text-center py-12 text-muted-foreground">Loading...</div>;
  }

  if (disputes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
        <h3 className="text-lg font-semibold mb-1">No disputes at this time</h3>
        <p className="text-muted-foreground text-sm max-w-md">
          When a booking is marked as disputed, it will appear here for review.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
        <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{disputes.length} active dispute{disputes.length !== 1 ? 's' : ''}</span> requiring review.
        </p>
      </div>

      <Card className="rounded-2xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Tech</TableHead>
              <TableHead>Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {disputes.map(d => {
              const isExpanded = expandedId === d.id;
              return (
                <>
                  <TableRow key={d.id} className="cursor-pointer hover:bg-muted/50" onClick={() => setExpandedId(isExpanded ? null : d.id)}>
                    <TableCell className="font-medium">{d.name}</TableCell>
                    <TableCell className="text-muted-foreground">{serviceLabels[d.service_type] || d.service_type}</TableCell>
                    <TableCell>{d.tech_name || '—'}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{timeAgo(d.created_at)}</TableCell>
                    <TableCell>{isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}</TableCell>
                  </TableRow>
                  {isExpanded && (
                    <TableRow key={`${d.id}-detail`} className="bg-muted/30">
                      <TableCell colSpan={5} className="py-4">
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-1.5">
                            {d.email && <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /><a href={`mailto:${d.email}`} className="hover:underline text-foreground">{d.email}</a></div>}
                            {d.phone && <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /><a href={`tel:${d.phone}`} className="hover:underline text-foreground">{d.phone}</a></div>}
                            <p className="text-xs text-muted-foreground pt-1">
                              Booked for {new Date(d.preferred_date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
                              {d.preferred_slot && ` at ${d.preferred_slot}`}
                            </p>
                            <p className="text-xs text-muted-foreground">Ref: {d.id.slice(0, 8).toUpperCase()}</p>
                            {d.payment_status && (
                              <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${(paymentLabels[d.payment_status] || paymentLabels.pending).color}`}>
                                Payment: {(paymentLabels[d.payment_status] || paymentLabels.pending).label}
                              </span>
                            )}
                          </div>
                          {d.problem_description && (
                            <p className="rounded-lg bg-background border p-3 leading-relaxed">{d.problem_description}</p>
                          )}
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

interface TechProfile {
  id: string;
  full_name: string | null;
  email: string | null;
  created_at: string;
}

function TechVerificationTab() {
  const [techs, setTechs] = useState<TechProfile[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTechs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles' as any)
      .select('id, full_name, email, created_at')
      .eq('role', 'tech')
      .order('created_at', { ascending: false });
    if (error) {
      toast.error('Failed to load technicians');
    } else if (data) {
      setTechs(data as unknown as TechProfile[]);
    }
    setLoading(false);
  };

  useEffect(() => { fetchTechs(); }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Card className="rounded-2xl border border-border bg-card">
          <CardContent className="flex items-center gap-3 py-4">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Total Techs</p>
              <p className="text-xl font-bold">{loading ? '...' : techs.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border border-border bg-card">
          <CardContent className="flex items-center gap-3 py-4">
            <Shield className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Verified</p>
              <p className="text-xl font-bold">{loading ? '...' : techs.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border border-border bg-card">
          <CardContent className="flex items-center gap-3 py-4">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-xs text-muted-foreground">Active</p>
              <p className="text-xl font-bold">{loading ? '...' : techs.length}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={4} className="text-center py-8 text-muted-foreground">Loading...</TableCell></TableRow>
            ) : techs.length === 0 ? (
              <TableRow><TableCell colSpan={4} className="text-center py-8 text-muted-foreground">No technicians registered yet. Techs will appear here once they sign up with a technician role.</TableCell></TableRow>
            ) : techs.map(tech => (
              <TableRow key={tech.id}>
                <TableCell className="font-medium">{tech.full_name || '(No name)'}</TableCell>
                <TableCell className="text-muted-foreground">
                  {tech.email ? <a href={`mailto:${tech.email}`} className="hover:underline">{tech.email}</a> : '—'}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {new Date(tech.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

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
      .order('created_at', { ascending: false })
      .limit(100);
    if (error) {
      toast.error('Failed to load help requests');
    } else if (data) {
      setRequests(data as HelpRequest[]);
    }
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
    if (error) {
      toast.error('Failed to update status');
    } else {
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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(['all', 'new', 'in_progress', 'resolved'] as const).map(s => {
          const cfg = s === 'all' ? null : statusConfig[s];
          const count = counts[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`text-left rounded-xl border p-4 transition-all hover:shadow-md ${filterStatus === s ? 'ring-2 ring-primary shadow-sm' : ''}`}
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

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            className="w-full rounded-lg border bg-background pl-9 pr-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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

      <div className="flex flex-wrap gap-2">
        {(['all', ...STATUS_OPTIONS] as const).map(s => {
          const cfg = s === 'all' ? null : statusConfig[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`rounded-full border px-3 py-1 text-xs transition-all ${
                filterStatus === s
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'hover:bg-muted text-muted-foreground'
              }`}
            >
              {s === 'all' ? `All (${counts.all})` : `${cfg?.label} (${counts[s]})`}
            </button>
          );
        })}
      </div>

      <Card className="rounded-2xl border border-border bg-card overflow-hidden">
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

const AdminConsole = () => (
  <div className="min-h-screen bg-background">
    <SEOHead title="Admin Console — TekSure" description="TekSure admin dashboard for managing bookings, users, and support tickets." path="/admin" noindex />
    <Navbar />
    <div className="container py-8">
      <div className="border-b border-border pb-6 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">Admin Console</h1>
        <p className="text-muted-foreground">Manage requests, jobs, disputes, and technician verification</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            to="/admin/content"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-muted/40 hover:bg-muted transition-colors text-foreground"
          >
            Content Pipeline →
          </Link>
          <Link
            to="/admin/newsletter"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-muted/40 hover:bg-muted transition-colors text-foreground"
          >
            <Mail className="h-3 w-3" /> Newsletter →
          </Link>
        </div>
      </div>

      <Tabs defaultValue="requests">
        <TabsList className="mb-6">
          <TabsTrigger value="requests">Help Requests</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="disputes">Disputes</TabsTrigger>
          <TabsTrigger value="techs">Tech Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="requests">
          <HelpRequestsTab />
        </TabsContent>

        <TabsContent value="bookings">
          <BookingsTab />
        </TabsContent>

        <TabsContent value="jobs">
          <JobsTab />
        </TabsContent>

        <TabsContent value="disputes">
          <DisputesTab />
        </TabsContent>

        <TabsContent value="techs">
          <TechVerificationTab />
        </TabsContent>
      </Tabs>
    </div>
    <Footer />
  </div>
);

export default AdminConsole;
