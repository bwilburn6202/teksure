import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

const APPS = [
  { name: 'Uber', cost: '$8-30/ride', best: 'Biggest. Most cars available. Tip in app. Schedule rides up to 30 days ahead.', good: 'Best overall.' },
  { name: 'Lyft', cost: '$8-30/ride', best: 'Same as Uber, often $1-3 cheaper. Switch between both for best prices.', good: 'Best price comparison.' },
  { name: 'GoGoGrandparent', cost: 'Uber/Lyft + $0.34/min surcharge', best: 'CALL a 1-800 number — no smartphone needed. They book Uber for you. Operator stays on line.', good: 'Best for non-smartphone users.' },
  { name: 'Lyft Concierge', cost: 'Family pays', best: 'Family member books rides for you on their phone. You just get in.', good: 'Best if family is helping.' },
  { name: 'SilverRide / SilverNest', cost: '$25-40/ride', best: 'Senior-specific. Driver helps with walker, groceries, doctor appointments.', good: 'Best for mobility help.' },
];

export default function RideshareForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Rideshare for Seniors — Uber, Lyft, GoGoGrandparent | TekSure" description="No more waiting on a friend for a ride. Plain-English picks for rideshare apps that work even without a smartphone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rideshare for Seniors</h1>
          <p className="text-lg text-muted-foreground">Independence without driving.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First Uber/Lyft ride — step by step</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Download Uber AND Lyft from app store. (Compare prices.)</li>
              <li>Sign up — name, phone, credit card.</li>
              <li>Open app at home. App detects your location.</li>
              <li>Type destination address.</li>
              <li>App shows price + estimated wait time. Tap "Confirm".</li>
              <li>Driver name + photo + license plate appear. Watch for them.</li>
              <li>Get in. They drive you. No payment in car (charged automatically).</li>
              <li>Rate driver and tip in app after.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Confirm driver name &amp; license plate BEFORE getting in.</li>
              <li>Sit in back seat (recommended for both you + driver).</li>
              <li>Share trip with family — Uber and Lyft both have "Share Trip" button.</li>
              <li>Phone fully charged.</li>
              <li>Carry water bottle, especially in summer.</li>
              <li>Use Uber/Lyft "Quiet Mode" if you don&apos;t want chatty driver.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use each</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Doctor&apos;s appointments</strong> — schedule both directions in advance.</li>
              <li><strong>Grocery store</strong> — driver helps load bags into trunk.</li>
              <li><strong>Airport</strong> — UberX cheaper, UberXL for big bags.</li>
              <li><strong>Going out for dinner</strong> — better than driving home tired.</li>
              <li><strong>Family events</strong> — saves anyone having to come pick you up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Insurance/Medicare may cover medical rides</h3>
            <p className="text-sm text-muted-foreground">Many Medicare Advantage plans cover free or low-cost rides to doctor appointments. Some Medicaid programs do too. Call your plan and ask about "non-emergency medical transportation". Often through Modivcare, Roundtrip, or LogistiCare.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
