import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

const PICKS = [
  { name: 'First Alert SCO5CN', cost: '$30', best: 'Combination smoke + CO. Battery operated. Wirelessly interconnects with others. Best buy.', good: 'Best overall.' },
  { name: 'Kidde Nighthawk', cost: '$45', best: 'Plug-in style with backup battery. Digital readout shows CO level.', good: 'Best plug-in.' },
  { name: 'Nest Protect', cost: '$120', best: 'Smart alarm. Phone alert when away. Voice tells you which room. Self-tests.', good: 'Best smart.' },
  { name: 'Kidde i12060', cost: '$25', best: 'Hardwired (replaces existing alarms). 10-year sealed battery backup.', good: 'Best hardwired.' },
  { name: 'X-Sense Combo', cost: '$30', best: '10-year sealed battery. Combination smoke + CO. Cheap, FCC-certified.', good: 'Best 10-year.' },
];

export default function CarbonMonoxidePicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Carbon Monoxide Detector Picks | TekSure" description="The silent killer. Plain-English picks for the best CO detectors — and where to put them in your home." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Carbon Monoxide Detectors</h1>
          <p className="text-lg text-muted-foreground">Invisible. Odorless. Lethal. Detector required.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why every home needs one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>400 CO deaths/year in US. Many preventable with a $30 alarm.</li>
              <li>Sources: gas furnace, water heater, fireplace, attached garage, generator, gas range.</li>
              <li>Symptoms — headache, dizziness, nausea — often mistaken for flu.</li>
              <li>Required by law in 28+ states.</li>
            </ul>
          </CardContent>
        </Card>

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
            <h2 className="font-bold text-xl mb-3">Where to place</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One per floor.</li>
              <li>One outside each sleeping area.</li>
              <li>Within 10 feet of bedroom doors.</li>
              <li>Don&apos;t put within 5 feet of fuel-burning appliance (false alarms).</li>
              <li>Don&apos;t put in kitchen near stove (false alarms).</li>
              <li>5-12 feet off floor (CO mixes with air, not just rises).</li>
              <li>Test monthly. Replace every 5-7 years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If alarm sounds</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>GET OUT immediately. Take everyone + pets.</li>
              <li>Call 911 from outside.</li>
              <li>Don&apos;t go back until fire department clears.</li>
              <li>Get medical attention if anyone has symptoms.</li>
              <li>Have furnace, water heater, fireplace inspected before re-occupying.</li>
              <li>Find source before resuming use.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Prevent CO buildup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Annual furnace + chimney inspection ($100-300).</li>
              <li>Never run generator in attached garage — even with door open.</li>
              <li>Never use BBQ grill or camp stove indoors.</li>
              <li>Keep car/lawnmower running OUTSIDE garage.</li>
              <li>Never use oven/stove for heat.</li>
              <li>Replace cracked heat exchangers immediately.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free for seniors</h3>
            <p className="text-sm text-muted-foreground">Most fire departments give FREE smoke + CO alarms to seniors. Some install them too. Call your local non-emergency fire line. American Red Cross also runs "Sound the Alarm" — free installation events.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
