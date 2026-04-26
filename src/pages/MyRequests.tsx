import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, Wrench, AlertCircle, Plus, Phone, Mail, Monitor, MessageSquare, User, Calendar, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
  payment_status: string;
  deposit_paid_at: string | null;
  created_at: string;
}

const statusConfig: Record<string, { label: string; icon: typeof Clock; color: string }> = {
  new:         { label: 'New',         icon: Clock,         color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  pending:     { label: 'Pending',     icon: Clock,         color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  confirmed:   { label: 'Confirmed',   icon: CheckCircle,   color: 'bg-green-500/10 text-green-400 border-green-500/20' },
  in_progress: { label: 'In Progress', icon: Wrench,        color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  resolved:    { label: 'Resolved',    icon: CheckCircle,   color: 'bg-green-500/10 text-green-400 border-green-500/20' },
  completed:   { label: 'Completed',   icon: CheckCircle,   color: 'bg-green-500/10 text-green-400 border-green-500/20' },
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

const slotLabels: Record<string, string> = {
  morning: 'Morning (8am–12pm)',
  afternoon: 'Afternoon (12pm–5pm)',
  evening: 'Evening (5pm–9pm)',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatBookingDate(isoDate: string) {
  // preferred_date is a plain date string like '2026-04-20'
  const d = new Date(isoDate + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

const MyRequests = () => {
  const { user, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [requests, setRequests] = useState<HelpRequest[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login', { state: { from: '/my-requests', message: 'Sign in to view your help requests.' } });
      return;
    }
    if (!user) return;

    let cancelled = false;

    Promise.all([
      supabase
        .from('help_requests')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false }),
      supabase
        .from('bookings')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false }),
    ]).then(([helpRes, bookingRes]) => {
      if (cancelled) return;
      if (!helpRes.error && helpRes.data) setRequests(helpRes.data as HelpRequest[]);
      if (!bookingRes.error && bookingRes.data) setBookings(bookingRes.data as Booking[]);
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [user, authLoading, navigate]);

  const hasAny = requests.length > 0 || bookings.length > 0;
  const isLoading = loading || authLoading;

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title="My Requests — TekSure" description="View and track your TekSure help requests and appointments." path="/my-requests" noindex />
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
          {isLoading && (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-32 rounded-xl bg-muted animate-pulse" />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!isLoading && !hasAny && (
            <div className="text-center py-20 space-y-4">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                <MessageSquare className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold">No requests yet</h2>
              <p className="text-muted-foreground">Submit your first help request and we'll get back to you fast.</p>
              <Button asChild className="rounded-xl"><Link to="/get-help">Get Help Now</Link></Button>
            </div>
          )}

          {/* Bookings (scheduled appointments) */}
          {!isLoading && bookings.length > 0 && (
            <section className="space-y-4 mb-10">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Scheduled Appointments
              </h2>
              {bookings.map(b => {
                const status = statusConfig[b.status] ?? statusConfig['pending'];
                const StatusIcon = status.icon;
                const isPaid = b.payment_status === 'paid';
                return (
                  <div key={b.id} className="bg-card border border-border rounded-2xl p-5 space-y-4">
                    {/* Top: booking date + status */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-foreground">{formatBookingDate(b.preferred_date)}</span>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${status.color}`}>
                        <StatusIcon className="h-3 w-3" />
                        {status.label}
                      </span>
                    </div>

                    {/* Time slot */}
                    <div className="text-sm text-muted-foreground">
                      {slotLabels[b.preferred_slot] ?? b.preferred_slot}
                    </div>

                    {/* Details grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Wrench className="h-3.5 w-3.5 shrink-0" />
                        <span>{b.service_type}</span>
                      </div>
                      {b.device_type && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Monitor className="h-3.5 w-3.5 shrink-0" />
                          <span>{deviceLabels[b.device_type] ?? b.device_type}</span>
                        </div>
                      )}
                      {b.phone && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-3.5 w-3.5 shrink-0" />
                          <span>{b.phone}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CreditCard className="h-3.5 w-3.5 shrink-0" />
                        <span>{isPaid ? 'Deposit paid' : 'Deposit pending'}</span>
                      </div>
                    </div>

                    {b.problem_description && (
                      <div className="bg-muted/40 rounded-lg px-4 py-3 text-sm text-muted-foreground">
                        <p className="font-medium text-foreground text-xs mb-1 uppercase tracking-wider">Issue</p>
                        <p className="leading-relaxed">{b.problem_description}</p>
                      </div>
                    )}

                    <p className="text-xs text-muted-foreground">
                      Booked {formatDate(b.created_at)}
                    </p>
                  </div>
                );
              })}
            </section>
          )}

          {/* Help requests */}
          {!isLoading && requests.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Help Requests
              </h2>
              {requests.map(req => {
                const status = statusConfig[req.status] ?? statusConfig['new'];
                const StatusIcon = status.icon;
                return (
                  <div key={req.id} className="bg-card border border-border rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm text-muted-foreground">{formatDate(req.created_at)}</span>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${status.color}`}>
                        <StatusIcon className="h-3 w-3" />
                        {status.label}
                      </span>
                    </div>

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

                    {req.problem_description && (
                      <div className="bg-muted/40 rounded-lg px-4 py-3 text-sm text-muted-foreground">
                        <p className="font-medium text-foreground text-xs mb-1 uppercase tracking-wider">Issue</p>
                        <p className="leading-relaxed">{req.problem_description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyRequests;
