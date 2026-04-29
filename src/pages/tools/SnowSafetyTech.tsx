import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Snowflake } from 'lucide-react';

export default function SnowSafetyTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Snow Safety Tech for Seniors | TekSure" description="Heated mats, ice cleats, snow blowers, smart driveway de-icers. Plain-English picks for staying upright and warm in winter." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Snowflake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Snow Safety Tech</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t fall on the ice this year.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stay upright</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Yaktrax / Stabilicers ice cleats</strong> ($25-50) — slip on/off shoes. Saves a fall.</li>
              <li><strong>Walking poles / cane</strong> with ice tip — $30 at REI.</li>
              <li><strong>Yak Tracks Pro</strong> for serious icy walks.</li>
              <li>Practice walking like a penguin — short steps, weight forward, arms loose.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Heated mats + paths</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>HeatTrak heated walkway mat</strong> — $200-400. Plug in. Snow melts on contact.</li>
              <li><strong>HeatTrak stairs mat</strong> — for outdoor stairs.</li>
              <li><strong>Heated driveway</strong> — under-pavement system, $7-25/sq ft. Best when re-paving anyway.</li>
              <li><strong>Smart timer + plug</strong> — auto-turn-on at 25°F.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Snow removal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hire it out</strong> — $30-60/visit. Cheap insurance against heart attack.</li>
              <li><strong>Single-stage snowblower</strong> — $300-700. For light/moderate snow.</li>
              <li><strong>Two-stage snowblower</strong> — $700-1,500. For wet/heavy snow + drifts.</li>
              <li><strong>Electric/cordless snowblowers</strong> ($300-600) — light-duty, no gas + oil.</li>
              <li>Buy in summer — 30-50% cheaper than December.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Heart-friendly shoveling</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shoveling causes 100+ heart attacks/year in seniors.</li>
              <li>Shovel SMALL amounts often — not 12 inches at once.</li>
              <li>PUSH snow, don&apos;t lift. Ergonomic shovel.</li>
              <li>Take breaks every 10 minutes.</li>
              <li>Stop if dizzy/short of breath.</li>
              <li>If you have heart disease — DON&apos;T SHOVEL. Hire someone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Ice melt — pet/plant safe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Calcium chloride</strong> — works to -25°F. Tougher on concrete + plants.</li>
              <li><strong>Magnesium chloride</strong> — pet-safer.</li>
              <li><strong>Safe Paw, Paw Thaw</strong> — pet-safe ice melt brands.</li>
              <li><strong>Sand</strong> — for traction, no melt.</li>
              <li>Avoid plain rock salt if you have pets — burns paws.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Power outage prep (winter)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Backup heat source (small propane heater, kerosene heater) + ventilation.</li>
              <li>Extra blankets, sleeping bags rated to 30°F.</li>
              <li>Battery + crank radio for storm updates.</li>
              <li>Generator (Honda EU2200i is a senior favorite, ~$1,200) — STORE GAS PROPERLY.</li>
              <li>Whole-house generator $5K-15K — auto-starts when power fails.</li>
              <li>NEVER run generator inside garage — CO kills.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hire snow removal NOW</h3>
            <p className="text-sm text-muted-foreground">Best snow contractors are booked in October-November. Get on the schedule before you need it. Cost $300-700 for the season is much cheaper than ER trip after a fall ($3,000-30,000).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
