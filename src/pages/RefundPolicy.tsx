import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ShieldCheck, CalendarX, Wrench, Clock, CreditCard, Mail } from 'lucide-react';
import {
  FIRST_HOUR_PRICE,
  ADDITIONAL_HOUR_PRICE,
  DEPOSIT_AMOUNT,
  FREE_CANCELLATION_HOURS,
  formatPrice,
} from '@/data/pricing';

/**
 * Stripe requires every business processing live payments to publish a fair,
 * clearly-explained refund policy. The booking flow already promised customers
 * a "no fix, no charge" guarantee and a refundable deposit; this page is the
 * document that actually backs those promises.
 *
 * All amounts and windows are read from src/data/pricing.ts so this page can
 * never drift out of sync with what the checkout actually charges.
 */
const RefundPolicy = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SEOHead
      title="Refund & Cancellation Policy — TekSure"
      description={`How TekSure refunds and cancellations work: no fix, no charge; ${formatPrice(DEPOSIT_AMOUNT)} deposits refunded in full when you cancel ${FREE_CANCELLATION_HOURS}+ hours ahead.`}
      path="/refund-policy"
    />
    <Navbar />

    <main id="main-content" className="flex-1">
      <div className="container max-w-3xl py-8 px-4 space-y-8">
        <PageBreadcrumb
          items={[{ label: 'Home', href: '/' }, { label: 'Refund & Cancellation Policy' }]}
        />

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            The short version: if we don't fix your problem, you don't pay. And you can cancel a
            booking for a full refund up to {FREE_CANCELLATION_HOURS} hours beforehand.
          </p>
          <p className="text-sm text-muted-foreground">Last updated: July 26, 2026</p>
        </div>

        {/* No fix, no charge */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">No fix, no charge</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              If our technician cannot solve the problem you booked us for, you pay nothing. That
              includes the {formatPrice(DEPOSIT_AMOUNT)} deposit, which we refund in full.
            </p>
            <p>
              You don't need to argue your case or fill out a form. If the problem isn't fixed by
              the end of the session, the technician marks the job unresolved and the refund is
              issued automatically.
            </p>
            <p className="text-sm">
              One honest exception: if the problem turns out to need a paid part, a new device, or a
              repair we aren't able to perform (a cracked screen, a failed hard drive, a service
              only your internet provider can carry out), we'll tell you plainly and you won't be
              charged for our time diagnosing it.
            </p>
          </CardContent>
        </Card>

        {/* Cancelling */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <CalendarX className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">Cancelling or rescheduling</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong className="text-foreground">
                  {FREE_CANCELLATION_HOURS}+ hours before your appointment:
                </strong>{' '}
                cancel for any reason and your {formatPrice(DEPOSIT_AMOUNT)} deposit is refunded in
                full.
              </li>
              <li>
                <strong className="text-foreground">
                  Less than {FREE_CANCELLATION_HOURS} hours before:
                </strong>{' '}
                we keep the {formatPrice(DEPOSIT_AMOUNT)} deposit, because the technician has
                already set that time aside. That is the most you can lose — we never charge the
                full session fee for a cancellation.
              </li>
              <li>
                <strong className="text-foreground">Rescheduling is always free,</strong> even
                inside the {FREE_CANCELLATION_HOURS}-hour window. Your deposit moves to the new
                appointment. Just contact us rather than cancelling outright.
              </li>
              <li>
                <strong className="text-foreground">If we cancel or miss the appointment,</strong>{' '}
                you get a full refund regardless of timing, and we'll offer you the next available
                slot.
              </li>
            </ul>
            <p className="text-sm">
              Emergencies happen. If you miss an appointment because of illness, a hospital visit,
              or a family emergency, contact us and we will refund the deposit. We would rather be
              generous than argue over {formatPrice(DEPOSIT_AMOUNT)}.
            </p>
          </CardContent>
        </Card>

        {/* What you pay */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Wrench className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">What you actually pay</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Sessions are {formatPrice(FIRST_HOUR_PRICE)} for the first hour and{' '}
              {formatPrice(ADDITIONAL_HOUR_PRICE)} for each additional hour. You only pay for time
              actually spent. If your problem is solved in twenty minutes, you still pay the
              first-hour rate — that is the minimum for a booked visit, and we say so before you
              book.
            </p>
            <p>
              We will never start a second hour without asking you first. If a job is going to run
              long, the technician stops, explains why, and lets you decide whether to continue.
            </p>
            <p className="text-sm">
              See <Link to="/pricing" className="text-primary hover:underline">full pricing</Link>{' '}
              for the complete breakdown, including travel beyond our included radius.
            </p>
          </CardContent>
        </Card>

        {/* How refunds are issued */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <CreditCard className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">How refunds are issued</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Refunds go back to the original payment method through Stripe, our payment processor.
              We don't issue store credit and we don't ask you to accept a voucher instead.
            </p>
            <p className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-1 shrink-0" aria-hidden="true" />
              <span>
                We process refunds within <strong className="text-foreground">2 business days</strong>{' '}
                of your request. Once processed, your bank typically takes another 5–10 business
                days to post it. That second delay is on your bank's side, not ours.
              </span>
            </p>
            <p className="text-sm">
              If you paid the technician directly on the day (cash, card, or transfer), contact us
              and we will arrange the refund the same way you paid.
            </p>
          </CardContent>
        </Card>

        {/* How to request */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <Mail className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
            <CardTitle className="text-xl">How to request a refund</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground">
            <p>
              Email{' '}
              <a href="mailto:hello@teksure.com" className="text-primary hover:underline">
                hello@teksure.com
              </a>{' '}
              or call{' '}
              <a href="tel:8779083360" className="text-primary hover:underline">
                877-908-3360
              </a>
              . Tell us your name and roughly when the appointment was — that is enough for us to
              find it. You do not need an order number.
            </p>
            <p>
              A real person reads every one of these. If you're unhappy with how a refund was
              handled, say so in your reply and it will be looked at again.
            </p>
            <p className="text-sm">
              This policy does not limit any rights you have under your state's consumer protection
              laws.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>

    <Footer />
  </div>
);

export default RefundPolicy;
