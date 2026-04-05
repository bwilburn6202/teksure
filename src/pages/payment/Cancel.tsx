import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, RefreshCcw, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';

export default function PaymentCancel() {
  return (
    <>
      <SEOHead
        title="Something Went Wrong | TekSure"
        description="There was a problem with your booking. You can try again or contact us for help."
        path="/payment/cancel"
      />
      <Navbar />

      <main className="min-h-[80vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center space-y-6">

          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full bg-orange-100 flex items-center justify-center">
              <AlertCircle className="h-12 w-12 text-orange-500" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Something went wrong
            </h1>
            <p className="text-muted-foreground text-lg">
              We weren't able to complete your booking this time. Don't worry — nothing has been
              lost, and you can try again whenever you're ready.
            </p>
          </div>

          <Card className="rounded-2xl border border-border bg-card">
            <CardContent className="p-5 text-left space-y-3">
              <p className="font-semibold text-sm mb-2">Here's what you can do</p>
              <div className="flex items-start gap-3 text-sm">
                <RefreshCcw className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  Go back to the booking page and try again. Your information may still be saved.
                </p>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  If this keeps happening, reach out to us and we'll help you get it sorted out.
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
            Need help? Email{' '}
            <a href="mailto:hello@teksure.com" className="text-primary hover:underline">
              hello@teksure.com
            </a>{' '}
            and we'll be happy to assist you.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
