import { motion } from 'framer-motion';
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
  { icon: Clock, label: 'Same-week appointments', sub: 'Book for as soon as tomorrow' },
  { icon: Star, label: 'Vetted technicians', sub: 'ID-checked, background-verified' },
];

const Pricing = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />
    <main className="flex-1">
      {/* Header */}
      <section className="border-b border-border">
        <div className="container py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
            <p className="text-muted-foreground text-lg mb-3 max-w-xl mx-auto">
              No subscriptions. No hidden fees. Pay only for the help you need.
            </p>
            <p className="text-sm text-muted-foreground">Prices include travel within 10 miles · Extra miles at £0.45/mi</p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="container py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`relative flex flex-col h-full rounded-2xl border ${plan.popular ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-2 pt-8">
                  <div className="text-4xl mb-2">{plan.emoji}</div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-5xl font-bold mt-2 tracking-tight">{plan.price}</div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.desc}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground"
        >
          Not sure which plan you need?{' '}
          <Link to="/book" className="text-primary font-semibold hover:opacity-80 transition-opacity">
            Book a free consultation
          </Link>{' '}
          and we'll recommend the right option.
        </motion.p>
      </section>

      {/* Trust badges */}
      <section className="bg-muted/40 border-t border-border py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container max-w-3xl"
        >
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
        </motion.div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Pricing;
