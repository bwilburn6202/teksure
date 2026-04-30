import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt } from 'lucide-react';

export default function WasherDryerForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Washer + Dryer for Seniors | TekSure" description="Senior-friendly laundry picks. Plain-English washer/dryer guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shirt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Washer + Dryer Picks</h1>
          <p className="text-lg text-muted-foreground">Easier laundry. Less bending.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Front-load vs top-load</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Front-load</strong> — gentler on clothes, more efficient.</li>
              <li><strong>Top-load</strong> — easier loading (no bending).</li>
              <li><strong>Pedestal raises front-loaders</strong> — best for seniors.</li>
              <li>$200-300 pedestals each.</li>
              <li>Worth it — saves back pain.</li>
              <li>Or use elevated stand alternative.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Big easy-to-press buttons (NOT touchscreen).</li>
              <li>Top dial controls (no kneeling).</li>
              <li>Auto-detect water level.</li>
              <li>Auto-dispenser for detergent.</li>
              <li>Steam wrinkle reduction (less ironing).</li>
              <li>Large door — easier loading.</li>
              <li>Drum light — see clothes.</li>
              <li>Wash-Dryer combo unit (1 machine, 1 cycle).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best brands 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>LG</strong> — popular, reliable.</li>
              <li><strong>Speed Queen</strong> — built like a tank, lasts 25 yrs.</li>
              <li><strong>Maytag</strong> — solid + American.</li>
              <li><strong>Whirlpool</strong> — most common.</li>
              <li><strong>Samsung</strong> — features but more breakdowns.</li>
              <li><strong>GE Profile</strong> — premium.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Compact / portable</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apartment seniors — compact stackable.</li>
              <li><strong>Bosch 500 Series</strong> — quietest compact.</li>
              <li>Portable washers ($300) — wheel to kitchen sink.</li>
              <li>2-in-1 washer/dryer combos — small spaces.</li>
              <li>Heat pump dryer — no vent needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save on laundry</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cold water — most clothes don&apos;t need hot.</li>
              <li>Energy-efficient cycle saves 30%.</li>
              <li>Clean lint trap every load.</li>
              <li>Replace dryer vent yearly (fire risk).</li>
              <li>Wool dryer balls — replace fabric softener.</li>
              <li>Senior tip: skip ironing — use steam dryer cycle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t lift heavy</h3>
            <p className="text-sm text-muted-foreground">Wet laundry HEAVY for seniors. Tips: wash smaller loads, use rolling laundry cart, ask family to help. Consider laundry service ($1-2/lb) — many seniors find this huge relief. Outsource if hurting your back.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
