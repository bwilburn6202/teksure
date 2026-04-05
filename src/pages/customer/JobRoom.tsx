import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Clock, Calendar, CreditCard, FileText,
  AlertCircle, Loader2, Phone, MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StatusBadge } from '@/components/StatusBadge';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Booking {
  id: string;
  user_id: string | null;
  name: string;
  email: string | null;
  issue_type: string | null;
  description: string | null;
  status: string;
  payment_status: string | null;
  preferred_date: string | null;
  preferred_time: string | null;
  deposit_paid_at: string | null;
  created_at: string;
}

const ISSUE_LABELS: Record<string, string> = {
  wifi: 'WiFi Issues',
  printer: 'Printer Problems',
  pc_slow: 'Slow Computer',
  virus: 'Virus / Malware',
  setup: 'Device Setup',
  security: 'Security',
  phone: 'Phone / Tablet',
  general: 'General Help',
  other: 'Other',
};

const PAYMENT_BADGES: Record<string, { label: string; className: string }> = {
  pending: { label: 'Awaiting payment', className: 'bg-gray-100 text-gray-600 border-gray-200' },
  paid: { label: 'Deposit paid', className: 'bg-green-100 text-green-700 border-green-200' },
  refunded: { label: 'Refunded', className: 'bg-amber-100 text-amber-700 border-amber-200' },
  failed: { label: 'Payment failed', className: 'bg-red-100 text-red-700 border-red-200' },
};

/** Build a simple timeline from the booking's current status */
function deriveTimeline(booking: Booking) {
  const steps: { label: string; time: string | null; done: boolean }[] = [];

  // Created is always the first step
  steps.push({ label: 'Request created', time: booking.created_at, done: true });

  // Deposit paid
  if (booking.payment_status === 'paid' && booking.deposit_paid_at) {
    steps.push({ label: 'Deposit paid', time: booking.deposit_paid_at, done: true });
  }

  const statusOrder = ['pending', 'confirmed', 'in_progress', 'completed'];
  const statusLabels: Record<string, string> = {
    pending: 'Awaiting confirmation',
    confirmed: 'Confirmed by technician',
    in_progress: 'Work in progress',
    completed: 'Completed',
  };

  const currentIdx = statusOrder.indexOf(booking.status);

  for (let i = 0; i < statusOrder.length; i++) {
    const s = statusOrder[i];
    if (s === 'pending') continue; // Covered by "Request created"
    steps.push({
      label: statusLabels[s],
      time: i <= currentIdx ? null : null, // We only have timestamps for created/deposit
      done: currentIdx >= i,
    });
  }

  // Special statuses
  if (booking.status === 'cancelled') {
    steps.push({ label: 'Cancelled', time: null, done: true });
  }
  if (booking.status === 'disputed') {
    steps.push({ label: 'Disputed', time: null, done: true });
  }

  return steps;
}

function formatDate(iso: string | null) {
  if (!iso) return 'Not set';
  return new Date(iso).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

const CustomerJobRoom = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchBooking();
  }, [id]);

  async function fetchBooking() {
    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await (supabase as any)
      .from('bookings')
      .select('id, user_id, name, email, issue_type, description, status, payment_status, preferred_date, preferred_time, deposit_paid_at, created_at')
      .eq('id', id)
      .single();

    if (fetchError) {
      if (fetchError.code === 'PGRST116') {
        setError('not_found');
      } else {
        setError(fetchError.message);
        toast.error('Failed to load booking details');
      }
    } else {
      setBooking(data as Booking);
    }
    setLoading(false);
  }

  // ---------- Loading state ----------
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-16 max-w-4xl flex flex-col items-center justify-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-lg text-muted-foreground">Loading your booking...</p>
        </div>
        <Footer />
      </div>
    );
  }

  // ---------- Error / not found state ----------
  if (error || !booking) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-16 max-w-4xl">
          <Link to="/customer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
          </Link>
          <Card className="rounded-2xl border border-border bg-card">
            <CardContent className="flex flex-col items-center gap-4 py-12">
              <AlertCircle className="h-12 w-12 text-muted-foreground/40" />
              <h2 className="text-xl font-semibold">
                {error === 'not_found' ? 'Booking not found' : 'Something went wrong'}
              </h2>
              <p className="text-muted-foreground text-center max-w-md">
                {error === 'not_found'
                  ? 'We could not find this booking. It may have been removed or the link is incorrect.'
                  : 'We had trouble loading this booking. Please try again.'}
              </p>
              <div className="flex gap-3 mt-2">
                <Button variant="outline" onClick={fetchBooking}>Try again</Button>
                <Button asChild><Link to="/customer">Back to Dashboard</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  // ---------- Main view ----------
  const timeline = deriveTimeline(booking);
  const issueLabel = ISSUE_LABELS[booking.issue_type ?? ''] ?? booking.issue_type ?? 'Support Request';
  const paymentBadge = PAYMENT_BADGES[booking.payment_status ?? 'pending'] ?? PAYMENT_BADGES.pending;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Booking Details — TekSure" description="View details and status of your TekSure support booking." path={`/customer/job/${id}`} />
      <Navbar />
      <div className="container py-8 max-w-4xl">
        <Link to="/customer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{issueLabel}</h1>
            {booking.description && (
              <p className="text-muted-foreground mt-1 text-lg">{booking.description}</p>
            )}
          </div>
          <StatusBadge status={booking.status} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left column: Timeline */}
          <Card className="rounded-2xl border border-border bg-card md:col-span-1">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" /> Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                {timeline.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${step.done ? 'bg-primary' : 'bg-border'}`} />
                      {i < timeline.length - 1 && <div className="w-px flex-1 bg-border" />}
                    </div>
                    <div className="pb-4">
                      <p className={`text-sm font-medium ${step.done ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {step.label}
                      </p>
                      {step.time && (
                        <p className="text-xs text-muted-foreground">
                          {formatTime(step.time)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right column: Details + Messages placeholder */}
          <div className="md:col-span-2 space-y-6">
            {/* Booking details */}
            <Card className="rounded-2xl border border-border bg-card">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Booking Details
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Preferred Date</p>
                    <p className="text-sm font-medium flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {formatDate(booking.preferred_date)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Preferred Time</p>
                    <p className="text-sm font-medium flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {booking.preferred_time ?? 'Not set'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Payment</p>
                    <Badge variant="secondary" className={`border font-medium ${paymentBadge.className}`}>
                      <CreditCard className="h-3 w-3 mr-1" />
                      {paymentBadge.label}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Booking ID</p>
                    <p className="text-sm font-mono text-muted-foreground">{booking.id.slice(0, 8)}...</p>
                  </div>
                </div>

                {booking.payment_status !== 'paid' && booking.status !== 'cancelled' && (
                  <>
                    <Separator />
                    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                      <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                        Payment not yet received
                      </p>
                      <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                        A deposit of 15 dollars is required to confirm your booking.
                        If you have already paid, it may take a moment to process.
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Messages placeholder */}
            <Card className="rounded-2xl border border-border bg-card">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" /> Messages
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 pb-6">
                <div className="flex flex-col items-center gap-4 text-center py-4">
                  <MessageSquare className="h-10 w-10 text-muted-foreground/30" />
                  <div>
                    <p className="text-base font-semibold mb-1">Live chat coming soon</p>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      We are building a messaging feature so you can chat directly with your technician.
                      For urgent issues, please book a call with us.
                    </p>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <Button variant="outline" asChild>
                      <Link to="/book" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" /> Book a Call
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerJobRoom;
