import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

const PICKS = [
  { name: 'Tesla Model Y', cost: '$45,000', best: 'Easiest EV. Full self-drive (close). Senior-favorite.', good: 'Best overall.' },
  { name: 'Hyundai Ioniq 5', cost: '$42,000', best: 'Modern + reliable. Great for seniors.', good: 'Best non-Tesla.' },
  { name: 'Chevy Bolt EUV', cost: '$28,000', best: 'Cheapest EV. Fully equipped.', good: 'Best budget.' },
  { name: 'Kia Niro EV', cost: '$40,000', best: 'Looks like normal SUV. Familiar feel.', good: 'Best familiar.' },
  { name: 'Toyota bZ4X', cost: '$45,000', best: 'Toyota reliability + EV.', good: 'Best Toyota.' },
];

export default function EVForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Electric Vehicles for Seniors | TekSure" description="EVs explained for seniors. Plain-English picks + charging + cost analysis." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">EVs for Seniors</h1>
          <p className="text-lg text-muted-foreground">Quieter. Smoother. Less maintenance.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors love EVs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>QUIET — easier on hearing.</li>
              <li>One pedal driving — easy on arthritic feet.</li>
              <li>No gas station stops.</li>
              <li>Massive safety tech (auto brake, lane keep).</li>
              <li>Maintenance MUCH less ($150/yr vs $700).</li>
              <li>Fuel costs 80% less.</li>
              <li>Smooth, no shifting, no engine noise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Charging at home</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plug into regular 120V outlet — slow but works.</li>
              <li>Level 2 charger ($500-1K + $1K install) — full charge overnight.</li>
              <li>Like charging your phone — every night.</li>
              <li>Most days = 20-50 miles. Plenty for seniors.</li>
              <li>Public DC fast charging for road trips.</li>
              <li>Federal tax credit — up to $1,000 for charger install.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">EV tax credits 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$7,500 federal tax credit on new EVs (income limits).</li>
              <li>$4,000 used EV credit.</li>
              <li>Many states add $1K-5K extra.</li>
              <li>Income limits — check eligibility on FuelEconomy.gov.</li>
              <li>Now applied at point of sale (instant discount).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Range anxiety reality</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most EVs go 250-300 miles per charge.</li>
              <li>Average senior drives 20-30 miles/day.</li>
              <li>Snowbirds: PlugShare app shows charging stations.</li>
              <li>Cold weather reduces range 20-30%.</li>
              <li>Tesla Supercharger network now opening to all brands.</li>
              <li>For mostly local driving — EV perfect.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try one</h3>
            <p className="text-sm text-muted-foreground">Test drive 2-3 EVs. Tesla service different (no traditional dealer). Used EV often half new price + same tech. Hertz/Enterprise rents EVs — try on a road trip first. Don&apos;t buy early model — battery tech improving fast.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
