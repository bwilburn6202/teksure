import { useEffect, useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Calendar, MessageSquare, Mail, Phone, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate       = useNavigate();
  const bookingId      = searchParams.get('booking_id') ?? '';
  const bookingRef     = bookingId.slice(0, 8).toUpperCase() || 'TEKSURE';
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown <= 0) {
      navigate('/my-requests');
      return;
    }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown, navigate]);

  return (
    <>
      <SEOHead
        title="Payment Confirmed | TekSure"
        description="Your deposit has been received. Your TekSure booking is confirmed."
        path="/payment/success"
      />
      <Navbar />

      <main className="min-h-[80vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center space-y-6">

          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Deposit received!</h1>
            <p className="text-muted-foreground text-lg">
              Your $15 deposit has been processed and your booking is confirmed.
            </p>
          </div>

          <Card className="rounded-2xl border border-green-200 bg-green-50">
            <CardContent className="p-5">
              <p className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wide">
                Booking reference
              </p>
              <p className="text-3xl font-mono font-bold tracking-widest text-green-700">
                {bookingRef}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-border bg-card">
            <CardContent className="p-5 text-left space-y-3">
              <p className="font-semibold text-sm mb-2">What happens next</p>
              <div className="flex items-start gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  You'll receive a confirmation email with your booking details and payment receipt.
                </p>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  One of our technicians will call or message you to confirm the exact appointment time.
                </p>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <CreditCard className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Pay the remaining amount directly to your technician after the visit.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3 flex-col sm:flex-row justify-center">
            <Button asChild>
              <Link to="/my-requests" className="gap-2">
                <Calendar className="h-4 w-4" />
                View My Bookings
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/guides" className="gap-2">
                <ArrowRight className="h-4 w-4" />
                Browse Free Guides
              </Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Redirecting to your bookings in {countdown}s…{' '}
            <button onClick={() => navigate('/my-requests')} className="underline hover:text-foreground">
              go now
            </button>
          </p>

          <div className="text-xs text-muted-foreground border-t border-border pt-4">
            Questions? Email{' '}
            <a href="mailto:hello@teksure.com" className="text-primary hover:underline">
              hello@teksure.com
            </a>{' '}
            with your reference number.
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
