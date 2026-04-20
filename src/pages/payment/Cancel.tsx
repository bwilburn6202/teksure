import { useSearchParams, Link } from 'react-router-dom';
import { XCircle, ArrowLeft, RefreshCcw, RotateCcw, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

export default function PaymentCancel() {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get('booking_id') ?? '';

  return (
    <>
      <SEOHead
        title="Payment Cancelled | TekSure"
        description="Your payment was cancelled. Your booking details are still saved — you can try again."
        path="/payment/cancel"
      />
      <Navbar />

      <main className="min-h-[80vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center space-y-6">

          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full bg-orange-100 flex items-center justify-center">
              <XCircle className="h-12 w-12 text-orange-500" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Payment cancelled</h1>
            <p className="text-muted-foreground text-lg">
              No worries — your booking details are saved and no charge was made.
            </p>
          </div>

          <Card className="rounded-2xl border border-border bg-card">
            <CardContent className="p-5 text-left space-y-3">
              <p className="font-semibold text-sm mb-2">What would you like to do?</p>
              <div className="flex items-start gap-3 text-sm">
                <RotateCcw className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Try the deposit payment again — your booking is still valid.
                </p>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <DollarSign className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Or choose "Pay on the day" to complete your booking for free.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3 flex-col sm:flex-row justify-center">
            <Button asChild>
              <Link to="/book" className="gap-2">
                <RefreshCcw className="h-4 w-4" />
                Try Again
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Need help?{' '}
            <a href="mailto:hello@teksure.com" className="text-primary hover:underline">
              hello@teksure.com
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
