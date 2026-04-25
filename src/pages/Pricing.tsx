import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Check, Shield, Clock, Star, Monitor, Home, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Remote Fix',
    price: '$49',
    deposit: '$15',
    desc: 'Quick help over the phone or screen sharing',
    icon: Monitor,
    features: [
      '30-min remote session',
      'Screen sharing support',
      'Follow-up email summary',
      'Chat support included',
    ],
  },
  {
    name: 'On-Site Visit',
    price: '$99',
    deposit: '$15',
    desc: 'A technician comes to your home',
    icon: Home,
    features: [
      '1-hour on-site visit',
      'Hardware diagnostics',
      'Setup & installation',
      'Priority technician matching',
      'No fix, no charge',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$149',
    deposit: '$15',
    desc: 'Comprehensive support for bigger jobs',
    icon: Award,
    features: [
      '2-hour session',
      'Full system health check',
      'Data backup assistance',
      'Dedicated technician',
      '48-hr follow-up call',
    ],
  },
];

const trustBadges = [
  { icon: Shield, label: 'No fix, no charge', sub: 'You only pay if we sort it' },
  { icon: Clock, label: 'Same-week appointments', sub: 'Book for as soon as tomorrow' },
  { icon: Star, label: 'Vetted technicians', sub: 'ID-checked, background-verified' },
];

const pricingJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'TekSure Tech Support',
    provider: { '@type': 'Organization', name: 'TekSure', url: 'https://teksure.com' },
    description: 'Professional tech support for seniors and non-technical users — remote and on-site.',
    url: 'https://teksure.com/pricing',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tech Support Plans',
      itemListElement: plans.map(plan => ({
        '@type': 'Offer',
        name: plan.name,
        description: plan.desc,
        price: plan.price.replace('$', ''),
        priceCurrency: 'USD',
        url: 'https://teksure.com/book',
        itemOffered: { '@type': 'Service', name: plan.name, description: plan.desc },
      })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does the $15 deposit work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Book with just a $15 deposit. Pay the rest on the day of your appointment. If we can\'t fix it, you get a full refund — no questions asked.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer a no-fix, no-charge guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. If our technician cannot resolve your issue, you pay nothing — not even the deposit.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can I get an appointment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer same-week appointments, often as soon as the next day depending on your location.',
        },
      },
    ],
  },
];

const Pricing = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SEOHead
      title="Tech Support Pricing | TekSure — From $49, Book with $15 Deposit"
      description="Transparent tech support pricing: Remote Fix $49, On-Site Visit $99, Premium $149. Book with just a $15 deposit. No fix, no charge guarantee."
      path="/pricing"
      jsonLd={pricingJsonLd}
    />
    <main className="flex-1">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-12 md:py-16 text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, Honest Pricing</h1>
            <p className="text-muted-foreground text-lg mb-3 max-w-xl mx-auto">
              No subscriptions. No hidden fees. Pay only for the help you need.
            </p>
            <p className="text-sm text-muted-foreground">Prices include travel within 10 miles · Extra miles at $0.45/mi</p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="container py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan) => (
            <div key={plan.name}>
              <div className={`relative flex flex-col h-full rounded-3xl border p-6 md:p-8 transition-all ${
                plan.popular
                  ? 'border-primary bg-primary/[0.03] shadow-lg shadow-primary/10'
                  : 'border-border bg-card hover:shadow-md'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6 pt-2">
                  <div className="flex justify-center mb-3">{(() => { const PIcon = plan.icon; return <PIcon className="h-10 w-10 text-primary" />; })()}</div>
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                  <div className="text-5xl font-bold tracking-tight">{plan.price}</div>
                  <p className="text-xs text-primary font-medium mt-2">Book with just a {plan.deposit} deposit</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full rounded-xl" variant={plan.popular ? 'default' : 'outline'}>
                  <Link to="/book">Book Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Deposit explainer */}
        <div className="max-w-lg mx-auto rounded-2xl border border-border bg-muted/30 p-6 text-center mb-8">
          <h3 className="font-semibold text-base mb-2">How the deposit works</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Book with just a <strong className="text-foreground">$15 deposit</strong>. Pay the rest on the day of your appointment.
            If we can't fix it, you get a full refund — no questions asked.
          </p>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Not sure which plan you need?{' '}
          <Link to="/book" className="text-primary font-semibold hover:opacity-80 transition-opacity">
            Book a free consultation
          </Link>{' '}
          and we'll recommend the right option.
        </p>
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
              <Link to="/book">Book a Session <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-12 px-6 border-background/20 text-background hover:bg-background/10">
              <Link to="/get-help">Get Free Help</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Pricing;
