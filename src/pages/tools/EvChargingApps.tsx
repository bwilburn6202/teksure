import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

const APPS = [
  { name: 'PlugShare', cost: 'FREE', best: 'Best charging map. Shows EVERY charger from every network. User reviews and photos.', good: 'Required app for any EV driver.' },
  { name: 'ChargePoint', cost: 'FREE app', best: 'Largest US charging network. App finds and starts ChargePoint stations.', good: 'Most workplace and shopping center chargers.' },
  { name: 'Tesla', cost: 'FREE for Tesla owners', best: 'Built into Tesla cars. Other EVs are now welcomed at Tesla Superchargers via the Tesla app.', good: 'Best US charging network — fastest, most reliable.' },
  { name: 'EVgo', cost: 'FREE app, pay per use', best: 'Fast-charging network. Many in shopping centers.', good: 'Compete with Tesla on speed.' },
  { name: 'Electrify America', cost: 'FREE app', best: 'Big high-speed network, good highway coverage. Required for many road trips.', good: 'Free for many new EV owners as part of the deal.' },
  { name: 'A Better Routeplanner (ABRP)', cost: 'FREE; $5/mo Premium', best: 'For ROAD TRIPS. Plans the entire route with charging stops, factoring in your specific car\'s range.', good: 'Best free EV route planner.' },
  { name: 'Your car\'s app', cost: 'FREE', best: 'Pre-condition battery, schedule charging during off-peak hours, see range remotely.', good: 'Essential — install when you buy the car.' },
];

export default function EvChargingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="EV Charging Apps — PlugShare, ChargePoint, EVgo | TekSure" description="Driving an EV? Plain-English picks for charging apps — find chargers, plan road trips, save money on electricity." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">EV Charging Apps</h1>
          <p className="text-lg text-muted-foreground">Find a charger. Plan a trip. Save on electricity.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save on home charging</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Time-of-use rates</strong> — many utilities charge HALF as much overnight. Set the car to charge between 11 PM and 6 AM.</li>
              <li><strong>EV-specific plans</strong> — many utilities offer special "EV plans" with cheaper off-peak rates.</li>
              <li><strong>Federal tax credit</strong> — up to $7,500 on new EVs, $4,000 on used. Check eligibility at fueleconomy.gov.</li>
              <li><strong>State rebates</strong> — California, New York, Colorado, etc. Search "[your state] EV rebate".</li>
              <li><strong>Free home Level 2 charger</strong> — many utilities offer free or discounted Level 2 chargers if you sign up for their EV time-of-use plan.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Road trip tip</h3>
            <p className="text-sm text-muted-foreground">Use ABRP (A Better Routeplanner) BEFORE every road trip. It plans charging stops based on your actual car&apos;s range, the weather, and the elevation. Beats just trusting the car&apos;s built-in nav.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
