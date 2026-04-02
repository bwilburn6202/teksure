import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, Wrench, AlertCircle, Plus, Phone, Mail, Monitor, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface HelpRequest {
  id: string;
  name: string | null;
  phone: string | null;
  email: string | null;
  device_type: string | null;
  problem_description: string | null;
  status: string;
  created_at: string;
}

const statusConfig: Record<string, { label: string; icon: typeof Clock; color: string }> = {
  new:         { label: 'New',         icon: Clock,         color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  in_progress: { label: 'In Progress', icon: Wrench,        color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  resolved:    { label: 'Resolved',    icon: CheckCircle,   color: 'bg-green-500/10 text-green-400 border-green-500/20' },
  cancelled:   { label: 'Cancelled',   icon: AlertCircle,   color: 'bg-muted/50 text-muted-foreground border-border' },
};

const deviceLabels: Record<string, string> = {
  phone: 'Phone',
  tablet: 'Tablet',
  computer: 'Computer',
  tv: 'TV / Streaming',
  'smart-home': 'Smart Home',
  other: 'Other',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

const MyRequests = () => {
  const { user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [requests, setRequests] = useState<HelpRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login', { state: { from: '/my-requests', message: 'Sign in to view your help requests.' } });
      return;
    }
    if (!user) return;

    supabase
      .from('help_requests')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setRequests(data as HelpRequest[]);
        setLoading(false);
      });
  }, [user, authLoading, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title="My Requests — TekSure" description="View and track your TekSure help requests." path="/my-requests" />
      <Navbar />

      <main className="flex-1 py-10 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">My Requests</h1>
              <p className="text-muted-foreground mt-1">
                {user?.fullName ? `Hi ${user.fullName.split(' ')[0]}!` : 'Hi there!'} Here's what you've submitted.
              </p>
            </div>
            <Button asChild className="gap-2 rounded-xl">
              <Link to="/get-help"><Plus className="h-4 w-4" /> New Request</Link>
            </Button>
          </div>

          {/* Loading */}
          {(loading || authLoading) && (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-32 rounded-xl bg-muted animate-pulse" />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && !authLoading && requests.length === 0 && (
            <div className="text-center py-20 space-y-4">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                <MessageSquare className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold">No requests yet</h2>
              <p className="text-muted-foreground">Submit your first help request and we'll get back to you fast.</p>
              <Button asChild className="rounded-xl"><Link to="/get-help">Get Help Now</Link></Button>
            </div>
          )}

          {/* Request cards */}
          {!loading && !authLoading && requests.length > 0 && (
            <div className="space-y-4">
              {requests.map(req => {
                const status = statusConfig[req.status] ?? statusConfig['new'];
                const StatusIcon = status.icon;
                return (
                  <div key={req.id} className="bg-card border border-border rounded-2xl p-5 space-y-4">
                    {/* Top row: date + status */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm text-muted-foreground">{formatDate(req.created_at)}</span>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${status.color}`}>
                        <StatusIcon className="h-3 w-3" />
                        {status.label}
                      </span>
                    </div>

                    {/* Details grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      {req.phone && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-3.5 w-3.5 shrink-0" />
                          <span>{req.phone}</span>
                        </div>
                      )}
                      {req.email && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-3.5 w-3.5 shrink-0" />
                          <span className="truncate">{req.email}</span>
                        </div>
                      )}
                      {req.name && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <User className="h-3.5 w-3.5 shrink-0" />
                          <span>{req.name}</span>
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
                      <div className="bg-muted/40 rounded-lg px-4 py-3 text-sm text-muted-foreground">
                        <p className="font-medium text-foreground text-xs mb-1 uppercase tracking-wider">Issue</p>
                        <p className="leading-relaxed">{req.problem_description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyRequests;
