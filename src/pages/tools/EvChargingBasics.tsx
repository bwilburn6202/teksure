import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BatteryCharging } from 'lucide-react';

export default function EvChargingBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="EV Charging Basics for First-Time EV Drivers | TekSure" description="Just got an electric car? Plain-English explainer of Level 1, 2, and DC fast charging, plus apps for finding chargers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BatteryCharging className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">EV Charging Basics</h1>
          <p className="text-lg text-muted-foreground">First electric car? Start here.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">3 levels of charging</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Level 1 — wall outlet</strong> (120V). Plug into a regular outlet at home. Adds 3-5 miles per hour. Slow. Fine if you drive less than 40 miles/day.</li>
              <li><strong>Level 2 — home charger</strong> (240V). Adds 25-35 miles/hour. Full charge overnight. $500-1,500 for charger + install. The standard home option.</li>
              <li><strong>DC Fast Charging</strong> — public stations only. Adds 100-200 miles in 20-30 minutes. Used for road trips. Can&apos;t install at home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best home setup</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Hire an electrician — they install a 240V outlet near where you park (~$500-2,000).</li>
              <li>Buy Level 2 charger — Tesla Wall Connector, ChargePoint Home Flex, or your car&apos;s OEM charger ($400-700).</li>
              <li>Plug car in at night. Full by morning.</li>
              <li>Most utility companies offer rebates ($200-1,000 toward installation).</li>
              <li>Federal tax credit — 30% of charger cost up to $1,000.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps to find public chargers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>PlugShare</strong> — best community-driven map. Shows working/broken status from real drivers.</li>
              <li><strong>A Better Route Planner (ABRP)</strong> — plans road trips with charging stops.</li>
              <li><strong>Tesla app</strong> — for Tesla owners, finds Superchargers automatically.</li>
              <li><strong>ChargePoint, EVgo, Electrify America</strong> — network apps, must download to use their stations.</li>
              <li><strong>Apple Maps + Google Maps</strong> — both show chargers along your route.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Home charging</strong> — $0.10-0.20/kWh. Roughly $10-15 for a "tank" (250 miles).</li>
              <li><strong>DC fast charging</strong> — $0.40-0.55/kWh. Roughly $25-40 for 200 miles.</li>
              <li>Compare: $40 of gas = ~250 miles in efficient car; $40 of home electricity = 700+ miles in EV.</li>
              <li>EVs save ~$1,500/year in fuel for typical commuter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common worries</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Will it charge in rain?"</strong> Yes. Chargers and ports are waterproof.</li>
              <li><strong>"Cold weather?"</strong> Range drops 15-30% in winter. Pre-heat car while plugged in.</li>
              <li><strong>"Battery replacement?"</strong> Most batteries last 200,000+ miles. Warranty 8 years/100,000 miles federal minimum.</li>
              <li><strong>"Power outage?"</strong> EVs are batteries on wheels. Some can power your home for days during outages.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">First road trip</h3>
            <p className="text-sm text-muted-foreground">For the first long trip, use A Better Route Planner. It picks chargers, predicts arrival battery, and accounts for elevation/weather. Way smarter than guessing. After 2-3 trips you won&apos;t need it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
