import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Luggage } from 'lucide-react';

export default function LuggageTrackerPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Luggage Trackers — AirTag, Tile, SmartTag | TekSure" description="Never lose a checked bag again. Plain-English picks for AirTag, Tile, and Samsung SmartTag — which one fits your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Luggage className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Luggage Trackers</h1>
          <p className="text-lg text-muted-foreground">$30 to know exactly where your bag is.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick pick — by phone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone</strong> — Apple AirTag. $29 each, $99 for 4-pack. Best US coverage.</li>
              <li><strong>Samsung phone</strong> — Samsung SmartTag2. $30. Uses Samsung&apos;s network.</li>
              <li><strong>Other Android</strong> — Tile or Chipolo. $25-35.</li>
              <li><strong>Mixed family (some iPhone, some Android)</strong> — Chipolo One Point works with both.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple AirTag (best for iPhone users)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$29. Works with the Find My app you already have.</li>
              <li>1-year battery (replaceable CR2032 — $1 at any pharmacy).</li>
              <li>Updates location anytime any iPhone walks within 30 feet (millions of iPhones).</li>
              <li>Best worldwide coverage — used by 100M+ travelers.</li>
              <li>United, Delta, American, Southwest all officially accept AirTag.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Samsung SmartTag2</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$30. Works with SmartThings Find on Galaxy phones.</li>
              <li>Works ONLY with Samsung Galaxy phones (Android, not iPhone).</li>
              <li>Ring it from app to find inside the house.</li>
              <li>Smaller network than AirTag — fewer location updates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tile</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tile Mate $25, Tile Pro $35.</li>
              <li>Works with iPhone AND Android.</li>
              <li>Smaller network = slower updates than AirTag.</li>
              <li>Some features need a $30/year subscription.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup tips</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Set up at home, BEFORE the trip. Name it "Big Suitcase".</li>
              <li>Slip into an inside pocket of the suitcase. Hard to spot, hard to remove.</li>
              <li>Test once — walk to driveway, check if it moved on the app.</li>
              <li>If checked bag goes missing — show airline staff your phone. They&apos;ll find it 90% of the time.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Other places to put one</h3>
            <p className="text-sm text-muted-foreground">Wallet, keychain, car, bicycle, walker, the TV remote that always disappears. $29 each. Pays for itself the first time you find your keys before missing an appointment.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
