import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Antenna } from 'lucide-react';

const PICKS = [
  { name: 'weBoost Home MultiRoom', price: '$500', best: 'Boosts 1-2 bars to 4-5 bars. Covers ~5,000 sq ft. Works for ALL US carriers.', good: 'Best whole-house pick.' },
  { name: 'weBoost Home Studio', price: '$300', best: 'For one room only — your living room or office.', good: 'Best small-area pick.' },
  { name: 'weBoost Drive Reach RV', price: '$500', best: 'For RVs and trucks. Mounts on roof.', good: 'Best mobile.' },
  { name: 'SureCall Fusion4Home', price: '$450', best: 'weBoost competitor. Similar quality, sometimes cheaper.', good: 'Alternative.' },
  { name: 'Wi-Fi calling (FREE)', price: 'FREE if your carrier supports', best: 'When weak signal — calls go over Wi-Fi instead of cellular. Built into modern phones.', good: 'Free first try.' },
];

export default function CellSignalBooster() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cell Signal Booster Picker — weBoost, Wi-Fi Calling | TekSure" description="Weak cell signal at home? Plain-English picks for boosters, plus the FREE Wi-Fi calling alternative most people miss." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Antenna className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cell Signal Booster</h1>
          <p className="text-lg text-muted-foreground">From 0 bars to 4 — at home or in the RV.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Try Wi-Fi calling FIRST (free)</h2>
            <p className="text-sm">Most modern phones make calls over Wi-Fi if cellular is weak. Free.</p>
            <ul className="text-sm list-disc pl-5 mt-2">
              <li><strong>iPhone:</strong> Settings → Phone → Wi-Fi Calling → ON.</li>
              <li><strong>Android:</strong> Settings → Connections / Network → Wi-Fi Calling → ON.</li>
              <li>If you have decent home Wi-Fi, this fixes 90% of poor-signal complaints.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How a booster works</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Outdoor antenna goes on roof or in attic — captures weak signal.</li>
              <li>Coax cable runs to indoor amplifier.</li>
              <li>Indoor antenna rebroadcasts amplified signal in your home.</li>
              <li>Your phone connects to the indoor antenna instead of distant tower.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Install</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>DIY install — 2-4 hours. Run cable through attic.</li>
              <li>Pro install — $200-400.</li>
              <li>Need at least 1 bar OUTSIDE for booster to work. Boosters amplify weak signal — they don\'t create signal from nothing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best path</h3>
            <p className="text-sm text-muted-foreground">Try Wi-Fi calling first (free). If you have NO cellular at all but good Wi-Fi — done. If Wi-Fi calling drops or you need cellular outdoors on the property — get a weBoost. Cheapest fix that actually fixes.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
