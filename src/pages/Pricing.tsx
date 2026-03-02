import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Remote Fix',
    price: '$49',
    desc: 'Quick remote assistance',
    features: ['30-min remote session', 'Screen sharing support', 'Follow-up email', 'Chat support'],
  },
  {
    name: 'On-Site Visit',
    price: '$99',
    desc: 'In-person tech support',
    features: ['1-hour on-site visit', 'Hardware diagnostics', 'Setup & installation', 'Priority matching'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$149',
    desc: 'Comprehensive support',
    features: ['2-hour session', 'Full system check', 'Data backup assistance', 'Dedicated tech', '48-hr follow-up'],
  },
];

const Pricing = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="container py-20 flex-1">
      <h1 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
      <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
        No subscriptions. No hidden fees. Pay per job.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {plans.map(plan => (
          <Card key={plan.name} className={plan.popular ? 'border-secondary shadow-lg relative' : ''}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <div className="text-3xl font-bold mt-2">{plan.price}</div>
              <p className="text-sm text-muted-foreground">{plan.desc}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                <Link to="/signup">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Pricing;
