import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, CheckCircle, XCircle, Play, Clock, Calendar,
  CreditCard, FileText, AlertCircle, Loader2, User, Phone,
  MessageSquare, StickyNote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StatusBadge } from '@/components/StatusBadge';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface Booking {
  id: string;
  user_id: string | null;
  tech_id: string | null;
  name: string;
  email: string | null;
  phone: string | null;
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
  pending: { label: 'Unpaid', className: 'bg-gray-100 text-gray-600 border-gray-200' },
  paid: { label: 'Deposit Paid', className: 'bg-green-100 text-green-700 border-green-200' },
  refunded: { label: 'Refunded', className: 'bg-amber-100 text-amber-700 border-amber-200' },
  failed: { label: 'Failed', className: 'bg-red-100 text-red-700 border-red-200' },
};

function formatDate(iso: string | null) {
  if (!iso) return 'Not set';
  return new Date(iso).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

const TechJobRoom = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (!id) return;
    fetchBooking();
  }, [id]);

  async function fetchBooking() {
    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await (supabase as any)
      .from('bookings')
      .select('id, user_id, tech_id, name, email, phone, issue_type, description, status, payment_status, preferred_date, preferred_time, deposit_paid_at, created_at')
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

  async function updateStatus(newStatus: string) {
    if (!booking) return;
    setUpdating(true);

    const { error: updateError } = await (supabase as any)
      .from('bookings')
      .update({ status: newStatus })
      .eq('id', booking.id);

    if (updateError) {
      toast.error('Failed to update status. Please try again.');
    } else {
      setBooking(prev => prev ? { ...prev, status: newStatus } : prev);
      toast.success(`Booking marked as "${newStatus.replace('_', ' ')}"`);
    }
    setUpdating(false);
  }

  // ---------- Loading state ----------
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-16 max-w-4xl flex flex-col items-center justify-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-lg text-muted-foreground">Loading booking details...</p>
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
          <Link to="/tech" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
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
                  ? 'This booking could not be found. It may have been removed or the link is incorrect.'
                  : 'We had trouble loading this booking. Please try again.'}
              </p>
              <div className="flex gap-3 mt-2">
                <Button variant="outline" onClick={fetchBooking}>Try again</Button>
                <Button asChild><Link to="/tech">Back to Dashboard</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  // ---------- Main view ----------
  const issueLabel = ISSUE_LABELS[booking.issue_type ?? ''] ?? booking.issue_type ?? 'Support Request';
  const paymentBadge = PAYMENT_BADGES[booking.payment_status ?? 'pending'] ?? PAYMENT_BADGES.pending;
  const status = booking.status;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 max-w-4xl">
        <Link to="/tech" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
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
          <StatusBadge status={status} />
        </div>

        {/* Action buttons based on current status */}
        {(status === 'pending' || status === 'confirmed' || status === 'in_progress') && (
          <Card className="rounded-2xl border border-border bg-card mb-6">
            <CardContent className="flex flex-wrap gap-3 py-4">
              {status === 'pending' && (
                <>
                  <Button onClick={() => updateStatus('confirmed')} disabled={updating} className="flex-1 min-w-[140px]">
                    <CheckCircle className="mr-2 h-4 w-4" /> Confirm Booking
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" disabled={updating} className="flex-1 min-w-[140px]">
                        <XCircle className="mr-2 h-4 w-4" /> Cancel
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Cancel this booking?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will cancel the booking for the customer. This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Go back</AlertDialogCancel>
                        <AlertDialogAction onClick={() => updateStatus('cancelled')}>
                          Yes, cancel booking
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </>
              )}

              {status === 'confirmed' && (
                <Button onClick={() => updateStatus('in_progress')} disabled={updating}>
                  <Play className="mr-2 h-4 w-4" /> Start Work
                </Button>
              )}

              {status === 'in_progress' && (
                <Button onClick={() => updateStatus('completed')} disabled={updating}>
                  <CheckCircle className="mr-2 h-4 w-4" /> Mark Complete
                </Button>
              )}

              {updating && <Loader2 className="h-5 w-5 animate-spin text-muted-foreground ml-2 self-center" />}
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left column: Customer info */}
          <Card className="rounded-2xl border border-border bg-card md:col-span-1">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4" /> Customer
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Name</p>
                <p className="text-sm font-medium">{booking.name || 'Not provided'}</p>
              </div>
              {booking.email && (
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Email</p>
                  <p className="text-sm">{booking.email}</p>
                </div>
              )}
              {booking.phone && (
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-sm">{booking.phone}</p>
                </div>
              )}
              <Separator />
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Payment</p>
                <Badge variant="secondary" className={`border font-medium ${paymentBadge.className}`}>
                  <CreditCard className="h-3 w-3 mr-1" />
                  {paymentBadge.label}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Right column: Booking details + Notes */}
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
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Issue Type</p>
                    <p className="text-sm font-medium">{issueLabel}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Booking ID</p>
                    <p className="text-sm font-mono text-muted-foreground">{booking.id.slice(0, 8)}...</p>
                  </div>
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
                </div>

                {booking.description && (
                  <>
                    <Separator />
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Problem Description</p>
                      <p className="text-sm leading-relaxed">{booking.description}</p>
                    </div>
                  </>
                )}

                <Separator />
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Created</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(booking.created_at).toLocaleString('en-GB', {
                      weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
                      hour: '2-digit', minute: '2-digit',
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Internal notes */}
            <Card className="rounded-2xl border border-border bg-card">
              <CardHeader className="border-b border-border">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <StickyNote className="h-4 w-4" /> Internal Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-3">
                <Textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Add your notes about this job here (e.g. what you tried, parts needed, follow-up required)..."
                  rows={4}
                  className="text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  These notes are saved locally in your browser for now. A shared notes system is coming soon.
                </p>
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
                      A messaging feature is being built so you can communicate directly with customers.
                      For now, use the contact details above.
                    </p>
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

export default TechJobRoom;
