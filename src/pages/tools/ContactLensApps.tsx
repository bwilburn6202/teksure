import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

const SVCS = [
  { name: '1-800-Contacts', cost: 'Same as eye doctor or less', best: 'Largest. Free eye-doctor verification. Easy returns.', good: 'Best overall.' },
  { name: 'Hubble Contacts', cost: '$30-60/month', best: 'Subscription. Cheap if you want simple.', good: 'Best subscription.' },
  { name: 'ContactsDirect', cost: '5-15% off retail', best: 'Owned by EyeMed. Decent prices.', good: 'Best with EyeMed insurance.' },
  { name: 'Costco Optical', cost: 'Cheapest in-store', best: 'Members get the best in-person price.', good: 'Best in-store.' },
  { name: 'Amazon Pharmacy', cost: 'Often cheapest', best: 'Prime members. Compare to specialty sites.', good: 'Best if Prime.' },
  { name: 'GlassesUSA Contacts', cost: 'Mid-range', best: 'Combo glasses + contacts deals.', good: 'Best combo deal.' },
];

export default function ContactLensApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Order Contact Lenses Online | TekSure" description="1-800-Contacts, Hubble, Costco. Plain-English picks for buying contacts cheaper than eye doctor sells them." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Contact Lenses Online</h1>
          <p className="text-lg text-muted-foreground">Cheaper. Same brand. Federal law.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Federal law on prescriptions</h2>
            <p className="text-sm">By federal law (Fairness to Contact Lens Consumers Act), eye doctors MUST give you a copy of your contact prescription after fitting. Some sneaky doctors "forget" — politely ASK and they must comply. You can buy contacts from any seller with that Rx.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buy 6 or 12 boxes — bulk discount 10-20%.</li>
              <li>Sign up for rebates from manufacturer (Johnson, Bausch).</li>
              <li>Use FSA/HSA — pre-tax dollars.</li>
              <li>Switch to dailies if you forget to clean — $30/mo more but no infection risk.</li>
              <li>Annual prescription update required by federal law.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior contact tips</h3>
            <p className="text-sm text-muted-foreground">Multifocal contacts have improved a lot — many seniors with bifocal needs use them successfully. Dry eye gets worse with age — daily disposables (CooperVision MyDay, Acuvue OASYS 1-Day) help. Skip "monthly" lenses if dryness is issue.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
