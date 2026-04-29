import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets } from 'lucide-react';

const PICKS = [
  { name: 'Govee Water Leak Detector', price: '$30 (3-pack)', best: 'Cheap. Sirens loudly when wet. App alert.', good: 'Best budget pick. Place under sinks, behind toilets.' },
  { name: 'Kidde Water Leak Alarm', price: '$15', best: 'Simple battery-powered. No app. Alerts loudly.', good: 'Cheapest option. No setup.' },
  { name: 'Moen Flo', price: '$500', best: 'AUTO-SHUTOFF. Detects abnormal flow + freezing pipes. Shuts off main water valve before damage.', good: 'Best whole-house protection.' },
  { name: 'Phyn Plus', price: '$700+', best: 'Same idea. Pinpoints WHERE leaks are.', good: 'Premium alternative.' },
  { name: 'StreamLabs Smart Home Water Monitor', price: '$200', best: 'Detects leaks but doesn\'t shut off. Cheaper than Flo.', good: 'For renters or those who can\'t install valve.' },
  { name: 'Honeywell Lyric Water Leak', price: '$80', best: 'Wi-Fi connected. App alerts. Multi-pack saves.', good: 'Mid-range pick.' },
];

export default function WaterLeakDetector() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Water Leak Detector & Auto-Shutoff | TekSure" description="A leak under the kitchen sink can cause $20,000 of damage. Plain-English picks for sensors and full auto-shutoff systems." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplets className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Leak Detector</h1>
          <p className="text-lg text-muted-foreground">$30 of sensors prevents $20,000 of damage.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters most for travel</h2>
            <p className="text-sm">A burst hose on a washing machine releases 600 gallons/hour. While you\'re away for a week, a small leak can flood every floor of the house. Insurance covers it but the disruption is months. Detection devices alert you — auto-shutoff systems STOP it.</p>
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
            <h2 className="font-bold text-xl mb-3">Where to put sensors</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Under EVERY sink (kitchen, all bathrooms).</li>
              <li>Behind toilets.</li>
              <li>Behind / under washing machine.</li>
              <li>Under dishwasher.</li>
              <li>Under refrigerator (ice maker line).</li>
              <li>Near water heater (water heaters often fail in old age).</li>
              <li>Under sump pump (if basement).</li>
              <li>HVAC drain pan.</li>
              <li>Total: 8-10 sensors covers most homes. ~$100.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For full protection (Moen Flo / Phyn)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Installed at MAIN water line entering home.</li>
              <li>Monitors flow patterns.</li>
              <li>Detects unusual flow (a leak somewhere).</li>
              <li>Auto-shuts off valve.</li>
              <li>App alerts you immediately.</li>
              <li>Many homeowners insurers offer 5-15% discount when installed.</li>
            </ul>
            <p className="text-sm mt-2">Install: about $200-400 from a plumber, or DIY if comfortable.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Insurance discount</h3>
            <p className="text-sm text-muted-foreground">Call homeowners insurance and ask "What discount do you give for smart water leak detection?". Many offer 5-15% off, often $50-200/year. Often pays for the device in 2-3 years.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
