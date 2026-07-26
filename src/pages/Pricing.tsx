import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Check, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  FIRST_HOUR_PRICE,
  ADDITIONAL_HOUR_PRICE,
  DEPOSIT_AMOUNT,
  FREE_CANCELLATION_HOURS,
  INCLUDED_TRAVEL_MILES,
  PER_MILE_RATE,
  formatPrice,
  remainderAfterDeposit,
} from '@/data/pricing';

/**
 * NOTE: this page previously advertised three flat tiers ($49 / $99 / $149)
 * that did not exist in the booking flow. The booking flow charges by the hour
 * and is what is wired to Stripe, so this page now describes that same model
 * and reads every number from src/data/pricing.ts.
 */

const included = [
  'A real person who explains things in plain English',
  'As much of the hour as your problem needs',
  'A written summary emailed to you afterward',
  'Follow-up questions answered at no extra charge',
  `Travel within ${INCLUDED_TRAVEL_MILES} miles for in-home visits`,
];

const trustBadges = [
  { icon: Shield, label: 'No fix, no charge', sub: 'You only pay if we sort it' },
  { icon: Clock, label: 'Same-week appointments', sub: 'Often as soon as tomorrow' },
  { icon: Star, label: 'Vetted technicians', sub: 'ID-checked, background-verified' },
];

const pricingJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'TekSure Tech Support',
    provider: { '@type': 'Organization', name: 'TekSure', url: 'https://www.teksure.com' },
    description:
      'Patient, plain-English tech support for seniors and non-technical users — remote or in your home.',
    url: 'https://www.teksure.com/pricing',
    offers: {
      '@type': 'Offer',
      price: String(FIRST_HOUR_PRICE),
      priceCurrency: 'USD',
      url: 'https://www.teksure.com/get-help',
      description: `${formatPrice(FIRST_HOUR_PRICE)} for the first hour, then ${formatPrice(
        ADDITIONAL_HOUR_PRICE,
      )} for each additional hour.`,
    },
  },
];

const Pricing = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SEOHead
      title={`Tech Support Pricing | TekSure — ${formatPrice(FIRST_HOUR_PRICE)} the First Hour`}
      description={`Honest tech support pricing: ${formatPrice(FIRST_HOUR_PRICE)} for the first hour, ${formatPrice(ADDITIONAL_HOUR_PRICE)} for each additional hour. Hold your slot with a ${formatPrice(DEPOSIT_AMOUNT)} deposit. No fix, no charge.`}
      path="/pricing"
      jsonLd={pricingJsonLd}
    />
    <Navbar />
    <main id="main-content" className="flex-1">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-12 md:py-16 text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, Honest Pricing</h1>
            <p className="text-muted-foreground text-lg mb-3 max-w-xl mx-auto">
              One rate for every kind of problem. No subscriptions, no hidden fees, no upselling.
            </p>
          </div>
        </div>
      </section>

      {/* The single rate */}
      <section className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="rounded-3xl border border-primary bg-primary/[0.03] shadow-lg shadow-primary/10 p-6 md:p-10 text-center">
            <h2 className="text-xl font-bold mb-1">Tech help, by the hour</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Remote or in your home — same rate either way
            </p>

            <div className="flex items-end justify-center gap-2 mb-1">
              <span className="text-6xl font-bold tracking-tight">{formatPrice(FIRST_HOUR_PRICE)}</span>
              <span className="text-muted-foreground mb-2">for the first hour</span>
            </div>
            <p className="text-muted-foreground mb-6">
              then {formatPrice(ADDITIONAL_HOUR_PRICE)} for each additional hour
            </p>

            <p className="text-sm text-primary font-medium mb-8">
              Most jobs are done within the first hour.
            </p>

            <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
              {included.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="w-full sm:w-auto rounded-xl h-12 px-8">
              <Link to="/get-help">Book a Session</Link>
            </Button>
          </div>
        </div>

        {/* Deposit explainer */}
        <div className="max-w-lg mx-auto rounded-2xl border border-border bg-muted/30 p-6 text-center mb-8">
          <h3 className="font-semibold text-base mb-2">You can book without paying anything</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pay the whole amount on the day, or hold your slot with a{' '}
            <strong className="text-foreground">{formatPrice(DEPOSIT_AMOUNT)} deposit</strong>. The deposit
            comes off your bill — on a one-hour job that leaves{' '}
            {formatPrice(remainderAfterDeposit())} to pay afterward. Cancel {FREE_CANCELLATION_HOURS}+ hours
            ahead and the deposit is refunded in full.{' '}
            <Link to="/refund-policy" className="text-primary font-medium hover:underline">
              Read the refund policy
            </Link>
            .
          </p>
        </div>

        {/* Honest extras */}
        <div className="max-w-lg mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            The only thing that can change the price: in-home visits more than {INCLUDED_TRAVEL_MILES} miles
            away add {PER_MILE_RATE.toFixed(2)}/mile. We tell you before you book, never after.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-muted/40 border-t border-border py-12">
        <div className="container max-w-3xl">
          <div className="grid sm:grid-cols-3 gap-8">
            {trustBadges.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold text-sm mb-1">{label}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-foreground text-background">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to get your tech working?
          </h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">
            Book a session today. A real person will help you — no jargon, no runaround.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="gap-2 rounded-xl h-12 px-6 bg-background text-foreground hover:bg-background/90">
              <Link to="/get-help">Book a Session <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-12 px-6 border-background/20 text-background hover:bg-background/10">
              <Link to="/guides">Browse Free Guides</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Pricing;
