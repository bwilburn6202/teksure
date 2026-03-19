import { useEffect, useState } from 'react';
import { Clock, CheckCircle, Wrench, AlertCircle, Users, RefreshCw, Phone, Mail, Monitor, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  new:         { label: 'New',         icon: Clock,       color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',   dot: 'bg-blue-500' },
  in_progress: { label: 'In Progress', icon: Wrench,      color: 'bg-amber-500/10 text-amber-600 border-amber-500/20', dot: 'bg-amber-500' },
  resolved:    { label: 'Resolved',    icon: CheckCircle, color: 'bg-green-500/10 text-green-600 border-green-500/20', dot: 'bg-green-500' },
  cancelled:   { label: 'Cancelled',   icon: AlertCircle, color: 'bg-muted/50 text-muted-foreground border-border',    dot: 'bg-muted-foreground' },
};

const deviceLabels: Record<string, string> = {
  phone: '📱 Phone', tablet: '📲 Tablet', computer: '💻 Computer',
  tv: '📺 TV / Streaming', 'smart-home': '🏠 Smart Home', other: '🔧 Other',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

const AdminConsole = () => {
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

    if (!error && data) {
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

    if (!error) {
      setRequests(prev => prev.map(r => r.id === id ? { ...r, status: newStatus } : r));
    }
    setUpdatingId(null);
  };

  // Stats
  const counts = {
    all: requests.length,
    new: requests.filter(r => r.status === 'new').length,
    in_progress: requests.filter(r => r.status === 'in_progress').length,
    resolved: requests.filter(r => r.status === 'resolved').length,
    cancelled: requests.filter(r => r.status === 'cancelled').length,
  };

  // Filtered + searched
  const filtered = requests.filter(r => {
    const matchStatus = filterStatus === 'all' || r.status === filterStatus;
    const q = search.toLowerCase();
    const matchSearch = !q || [r.name, r.email, r.phone, r.problem_description, r.device_type]
      .some(v => v?.toLowerCase().includes(q));
    return matchStatus && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 py-10 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Last refreshed: {timeAgo(lastRefreshed.toISOString())}
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2" onClick={fetchRequests} disabled={loading}>
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { key: 'all', label: 'Total', color: 'text-foreground', icon: Users },
              { key: 'new', label: 'New', color: 'text-blue-600', icon: Clock },
              { key: 'in_progress', label: 'In Progress', color: 'text-amber-600', icon: Wrench },
              { key: 'resolved', label: 'Resolved', color: 'text-green-600', icon: CheckCircle },
            ].map(({ key, label, color, icon: Icon }) => (
              <Card
                key={key}
                className={`cursor-pointer transition-all hover:border-primary/50 ${filterStatus === key ? 'border-primary ring-1 ring-primary/30' : ''}`}
                onClick={() => setFilterStatus(key as Status | 'all')}
              >
                <CardContent className="flex items-center gap-3 py-4 px-5">
                  <Icon className={`h-5 w-5 ${color}`} />
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className={`text-2xl font-bold ${color}`}>{counts[key as keyof typeof counts]}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Search + Filter bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, email, phone, issue…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {(['all', ...STATUS_OPTIONS] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    filterStatus === s
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background border-border text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  {s === 'all' ? 'All' : statusConfig[s].label}
                </button>
              ))}
            </div>
          </div>

          {/* Requests list */}
          {loading && (
            <div className="space-y-3">
              {[1,2,3].map(i => <div key={i} className="h-20 rounded-xl bg-muted animate-pulse" />)}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <AlertCircle className="h-10 w-10 mx-auto mb-3 opacity-40" />
              <p className="font-medium">No requests found</p>
              <p className="text-sm mt-1">{search ? 'Try a different search term.' : 'No requests match this filter.'}</p>
            </div>
          )}

          {!loading && filtered.length > 0 && (
            <div className="space-y-3">
              {filtered.map(req => {
                const st = statusConfig[req.status as Status] ?? statusConfig['new'];
                const StatusIcon = st.icon;
                const isExpanded = expandedId === req.id;

                return (
                  <div key={req.id} className="bg-card border border-border rounded-xl overflow-hidden transition-all">
                    {/* Row header */}
                    <div
                      className="flex items-center gap-3 px-5 py-4 cursor-pointer hover:bg-muted/30 transition-colors"
                      onClick={() => setExpandedId(isExpanded ? null : req.id)}
                    >
                      {/* Status dot */}
                      <div className={`h-2.5 w-2.5 rounded-full shrink-0 ${st.dot}`} />

                      {/* Name + time */}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{req.name || 'Anonymous'}</p>
                        <p className="text-xs text-muted-foreground truncate">{req.problem_description || 'No description'}</p>
                      </div>

                      {/* Device */}
                      <span className="hidden sm:block text-xs text-muted-foreground shrink-0">
                        {deviceLabels[req.device_type ?? ''] ?? req.device_type ?? '—'}
                      </span>

                      {/* Status badge */}
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border shrink-0 ${st.color}`}>
                        <StatusIcon className="h-3 w-3" />
                        {st.label}
                      </span>

                      {/* Time */}
                      <span className="text-xs text-muted-foreground shrink-0 hidden sm:block">{timeAgo(req.created_at)}</span>

                      {/* Expand chevron */}
                      {isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />}
                    </div>

                    {/* Expanded detail */}
                    {isExpanded && (
                      <div className="border-t border-border px-5 py-4 space-y-4 bg-muted/20">
                        {/* Contact info */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                          {req.email && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Mail className="h-3.5 w-3.5 shrink-0" />
                              <a href={`mailto:${req.email}`} className="hover:text-primary truncate">{req.email}</a>
                            </div>
                          )}
                          {req.phone && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Phone className="h-3.5 w-3.5 shrink-0" />
                              <a href={`tel:${req.phone}`} className="hover:text-primary">{req.phone}</a>
                            </div>
                          )}
                          {req.device_type && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Monitor className="h-3.5 w-3.5 shrink-0" />
                              <span>{deviceLabels[req.device_type] ?? req.device_type}</span>
                            </div>
                          )}
                        </div>

                        {/* Problem description */}
                        {req.problem_description && (
                          <div className="bg-background border border-border rounded-lg px-4 py-3 text-sm">
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Issue</p>
                            <p className="leading-relaxed">{req.problem_description}</p>
                          </div>
                        )}

                        {/* Meta */}
                        <p className="text-xs text-muted-foreground">
                          Submitted: {formatDate(req.created_at)} · ID: <span className="font-mono">{req.id.slice(0, 8)}…</span>
                          {req.user_id ? ' · Logged in user' : ' · Anonymous'}
                        </p>

                        {/* Status update buttons */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="text-xs font-medium text-muted-foreground self-center">Update status:</span>
                          {STATUS_OPTIONS.map(s => (
                            <button
                              key={s}
                              disabled={req.status === s || updatingId === req.id}
                              onClick={() => updateStatus(req.id, s)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all disabled:opacity-40 disabled:cursor-not-allowed ${
                                req.status === s
                                  ? statusConfig[s].color + ' font-semibold'
                                  : 'bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                              }`}
                            >
                              {updatingId === req.id && req.status !== s ? '…' : statusConfig[s].label}
                            </button>
                          ))}
                          {req.email && (
                            <a
                              href={`mailto:${req.email}?subject=Re: Your TekSure Help Request`}
                              className="ml-auto px-3 py-1.5 rounded-lg text-xs font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                              Reply via Email
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Footer count */}
          {!loading && filtered.length > 0 && (
            <p className="text-xs text-muted-foreground text-center mt-6">
              Showing {filtered.length} of {counts.all} total request{counts.all !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminConsole;
