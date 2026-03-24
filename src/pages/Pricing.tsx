import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Shield, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Remote Fix',
    price: '£49',
    desc: 'Quick help over the phone or screen sharing',
    emoji: '💻',
    features: [
      '30-min remote session',
      'Screen sharing support',
      'Follow-up email summary',
      'Chat support included',
    ],
  },
  {
    name: 'On-Site Visit',
    price: '£99',
    desc: 'A technician comes to your home',
    emoji: '🏠',
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
    price: '£149',
    desc: 'Comprehensive support for bigger jobs',
    emoji: '⭐',
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
  { icon: Clock,  label: 'Same-week appointments', sub: 'Book for as soon as tomorrow' },
  { icon: Star,   label: 'Vetted technicians', sub: 'ID-checked, background-verified' },
];

const Pricing = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      {/* Hero */}
      <section className="container py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground text-lg mb-2 max-w-xl mx-auto">
          No subscriptions. No hidden fees. Pay only for the help you need.
        </p>
        <p className="text-sm text-muted-foreground">Prices include travel within 10 miles · Extra miles at £0.45/mi</p>
      </section>

      {/* Plans */}
      <section className="container pb-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {plans.map(plan => (
            <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? 'border-secondary shadow-xl scale-[1.02]' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <div className="text-3xl mb-1">{plan.emoji}</div>
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <div className="text-4xl font-bold mt-1">{plan.price}</div>
                <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  <Link to="/book">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Not sure which plan you need?{' '}
          <Link to="/book" className="text-primary hover:underline font-medium">
            Book a free consultation
          </Link>{' '}
          and we'll recommend the right option.
        </p>
      </section>

      {/* Trust badges */}
      <section className="bg-muted/40 border-t border-border py-12">
        <div className="container max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {trustBadges.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="p-3 bg-background rounded-full border border-border shadow-sm">
                  <Icon className="h-5 w-5 text-secondary" />
                </div>
                <p className="font-semibold text-sm">{label}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Pricing;
