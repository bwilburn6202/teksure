import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function BlackoutKit() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Power Outage / Blackout Kit | TekSure" description="Senior power outage checklist. Plain-English picks for flashlights, batteries, generators, food storage." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Blackout Kit</h1>
          <p className="text-lg text-muted-foreground">Power outages happen. Be ready.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Essentials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Flashlights</strong> — 2-3 + spare batteries.</li>
              <li><strong>Headlamp</strong> — hands-free.</li>
              <li><strong>Power bank</strong> — Anker 20K mAh ($50). Charge it monthly.</li>
              <li><strong>Battery / crank radio</strong> — emergency news.</li>
              <li><strong>Phone car charger</strong>.</li>
              <li><strong>$100-200 cash</strong> — ATMs may be down.</li>
              <li><strong>Manual can opener</strong>.</li>
              <li><strong>Battery candles</strong> — never real candle near oxygen.</li>
              <li><strong>Solar lantern</strong> — Goal Zero, MPOWERD.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior medical concerns</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Refrigerated medications (insulin)</strong> — cooler + ice.</li>
              <li><strong>CPAP backup battery</strong> — if you use one.</li>
              <li><strong>Oxygen concentrator backup</strong> — call utility for "medical baseline" priority restoration.</li>
              <li><strong>Power chair / scooter charging</strong> — keep car ready as backup charger.</li>
              <li><strong>Medication doesn&apos;t freeze</strong> — keep inside home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Generator considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Portable</strong> — $500-1,500. Need to manually start.</li>
              <li><strong>Solar generator (Jackery, EcoFlow)</strong> — silent, indoor-safe. $500-2,500.</li>
              <li><strong>Standby (whole house)</strong> — $5K-15K + install. Auto-starts.</li>
              <li><strong>NEVER run portable generator inside or in garage</strong> — CO kills.</li>
              <li>Solar = best for seniors (no fuel, silent, indoor-safe).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Food during blackout</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Keep refrigerator + freezer doors CLOSED.</li>
              <li>Fridge stays cold ~4 hours, freezer ~48 hours.</li>
              <li>Stock canned soup, peanut butter, crackers.</li>
              <li>Bottled water — 1 gallon/person/day.</li>
              <li>Pet food.</li>
              <li>Camping stove + pots if extended outage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Sign up for utility alerts</h3>
            <p className="text-sm text-muted-foreground">Most utilities send text alerts when outage starts + estimates restoration. Sign up via utility website. Better than calling repeatedly. Critical info during big storms.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
