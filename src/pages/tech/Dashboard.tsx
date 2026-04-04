import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, CheckCircle2, Clock, Loader2,
  Calendar, User, AlertCircle, Inbox,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { StatusBadge } from '@/components/StatusBadge';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Booking {
  id: string;
  user_id: string | null;
  tech_id: string | null;
  name: string;
  email: string | null;
  phone: string | null;
  issue_type: string | null;
  description: string | null;
  preferred_date: string | null;
  preferred_time: string | null;
  status: string;
  created_at: string;
}

function formatDate(iso: string | null) {
  if (!iso) return 'Not set';
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

const TechDashboard = () => {
  const { user } = useAuth();
  const [available, setAvailable] = useState(true);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;
    fetchBookings();
  }, [user?.id]);

  async function fetchBookings() {
    setLoading(true);
    const { data, error } = await (supabase as any)
      .from('bookings')
      .select('*')
      .eq('tech_id', user!.id)
      .order('created_at', { ascending: false });

    if (error) {
      toast.error('Failed to load bookings');
      console.error(error);
    } else {
      setBookings((data as unknown as Booking[]) || []);
    }
    setLoading(false);
  }

  async function updateBookingStatus(id: string, status: string) {
    const { error } = await (supabase as any)
      .from('bookings')
      .update({ status })
      .eq('id', id);

    if (error) {
      toast.error('Failed to update booking');
    } else {
      toast.success(`Booking marked as ${status}`);
      fetchBookings();
    }
  }

  // Derived stats
  const pendingBookings = bookings.filter(b => b.status === 'pending' || b.status === 'offered');
  const activeBookings = bookings.filter(b => b.status === 'confirmed' || b.status === 'accepted' || b.status === 'in_progress');
  const completedBookings = bookings.filter(b => b.status === 'completed');
  const stats = [
    { icon: Inbox, label: 'Pending Jobs', value: pendingBookings.length, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30' },
    { icon: Wrench, label: 'Active Jobs', value: activeBookings.length, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/30' },
    { icon: CheckCircle2, label: 'Completed', value: completedBookings.length, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-950/30' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-24 flex flex-col items-center justify-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground text-lg">Loading your dashboard...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Tech Dashboard | TekSure" description="Manage your jobs and availability." path="/tech" />
      <Navbar />

      <div className="container py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {getGreeting()}, {user?.fullName || 'Technician'}
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your job offers and active bookings
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className={`h-2.5 w-2.5 rounded-full ${available ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
            <Label htmlFor="availability" className="text-sm font-medium">
              {available ? 'Available' : 'Offline'}
            </Label>
            <Switch id="availability" checked={available} onCheckedChange={setAvailable} />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(stat => (
            <Card key={stat.label} className="rounded-2xl border border-border bg-card">
              <CardContent className="flex items-center gap-3 py-5 px-4">
                <div className={`rounded-xl p-2.5 ${stat.bg}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-bold tracking-tight">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pending / Offered Jobs */}
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-500" />
            Job Offers
            {pendingBookings.length > 0 && (
              <Badge variant="secondary" className="ml-1">{pendingBookings.length}</Badge>
            )}
          </h2>

          {pendingBookings.length === 0 ? (
            <Card className="rounded-2xl border border-border bg-card">
              <CardContent className="py-12 text-center">
                <Inbox className="h-10 w-10 text-muted-foreground/50 mx-auto mb-3" />
                <p className="text-muted-foreground">No pending job offers right now.</p>
                <p className="text-sm text-muted-foreground/70 mt-1">New offers will appear here when customers book appointments.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {pendingBookings.map(booking => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                  onAccept={() => updateBookingStatus(booking.id, 'confirmed')}
                  showAccept
                />
              ))}
            </div>
          )}
        </section>

        {/* Active Jobs */}
        {activeBookings.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-blue-500" />
              Active Jobs
              <Badge variant="secondary" className="ml-1">{activeBookings.length}</Badge>
            </h2>
            <div className="grid gap-4">
              {activeBookings.map(booking => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                  onComplete={() => updateBookingStatus(booking.id, 'completed')}
                  showComplete
                />
              ))}
            </div>
          </section>
        )}

        {/* Completed Jobs */}
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Completed Jobs
            {completedBookings.length > 0 && (
              <Badge variant="secondary" className="ml-1">{completedBookings.length}</Badge>
            )}
          </h2>

          {completedBookings.length === 0 ? (
            <Card className="rounded-2xl border border-border bg-card">
              <CardContent className="py-12 text-center">
                <CheckCircle2 className="h-10 w-10 text-muted-foreground/50 mx-auto mb-3" />
                <p className="text-muted-foreground">No completed jobs yet.</p>
                <p className="text-sm text-muted-foreground/70 mt-1">Jobs you finish will be recorded here.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {completedBookings.map(booking => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Booking Card                                                        */
/* ------------------------------------------------------------------ */

function BookingCard({
  booking,
  onAccept,
  onComplete,
  showAccept,
  showComplete,
}: {
  booking: Booking;
  onAccept?: () => void;
  onComplete?: () => void;
  showAccept?: boolean;
  showComplete?: boolean;
}) {
  const payment = paymentBadge[booking.payment_status || 'pending'] || paymentBadge.pending;

  return (
    <Card className="rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
      <CardContent className="py-5 px-5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          {/* Left: details */}
          <div className="space-y-2 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-base">{booking.name}</span>
              <StatusBadge status={booking.status} />
              <Badge variant="outline" className={`text-xs border ${payment.className}`}>
                {payment.label}
              </Badge>
            </div>

            {booking.issue_type && (
              <p className="text-sm font-medium text-primary capitalize">{booking.issue_type.replace(/_/g, ' ')}</p>
            )}

            {booking.description && (
              <p className="text-sm text-muted-foreground line-clamp-2">{booking.description}</p>
            )}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground pt-1">
              {booking.preferred_date && (
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(booking.preferred_date)}
                  {booking.preferred_time && ` at ${booking.preferred_time}`}
                </span>
              )}
              {booking.email && (
                <span className="inline-flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  {booking.email}
                </span>
              )}
            </div>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-2 shrink-0">
            <Link to={`/tech/jobs/${booking.id}`}>
              <Button variant="outline" size="sm">View</Button>
            </Link>
            {showAccept && onAccept && (
              <Button size="sm" onClick={onAccept}>Accept</Button>
            )}
            {showComplete && onComplete && (
              <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700" onClick={onComplete}>
                Mark Complete
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TechDashboard;
