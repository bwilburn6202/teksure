import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertOctagon } from 'lucide-react';

const PICKS = [
  { name: 'First Alert 10-Year Combo (BRK)', price: '$30', best: 'Smoke + CO. 10-year sealed battery. Set and forget.', good: 'Best basic option.' },
  { name: 'Kidde KN-COSM-IBA', price: '$50', best: 'Hardwired smoke + CO. With battery backup. Fits most home wiring.', good: 'For replacing existing hardwired.' },
  { name: 'Nest Protect (Google)', price: '$120', best: 'Smart smoke + CO. Speaks alerts ("smoke in the kitchen"). App alerts. Tests itself.', good: 'Best smart option.' },
  { name: 'X-Sense (low-cost smart)', price: '$50-80', best: 'Cheaper smart alternative to Nest. Wi-Fi alerts.', good: 'Best smart value.' },
  { name: 'First Alert Strobe Light Smoke', price: '$60', best: 'For deaf/hard-of-hearing — flashes bright light + sound.', good: 'Required for hearing-impaired homes.' },
];

export default function SmokeCoDetectorMaintenance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smoke & CO Detector Maintenance | TekSure" description="When to replace, how to test, and which detectors are best for seniors. Includes special-needs hearing-impaired options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertOctagon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smoke & CO Detectors</h1>
          <p className="text-lg text-muted-foreground">Replace every 10 years. Test monthly. Save lives.</p>
        </div>

        <Card className="mb-4 border-destructive">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ Old detectors fail SILENTLY</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Smoke detectors expire after 10 years — sensor degrades.</li>
              <li>CO detectors expire after 5-7 years (depends on model).</li>
              <li>Many old detectors LOOK fine but won\'t actually alarm in a fire.</li>
              <li>Look at the back: "Manufactured" date.</li>
              <li>If older than 10 years — REPLACE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to install</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>One smoke detector inside each bedroom.</li>
              <li>One outside every sleeping area.</li>
              <li>One on every floor (basement included).</li>
              <li>CO detector on every floor where someone sleeps.</li>
              <li>NOT in kitchen / bathroom (false alarms).</li>
              <li>NOT near ceiling fans or AC vents.</li>
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
            <h2 className="font-bold text-xl mb-3">Monthly test (1 minute)</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Press the TEST button on each detector.</li>
              <li>Should alarm immediately.</li>
              <li>If quiet/weak — battery dying. Replace battery (or whole detector if 10-year sealed).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For seniors who can\'t reach high</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Local fire department often INSTALLS detectors free for seniors. Call non-emergency line.</li>
              <li>Red Cross "Sound the Alarm" program — free smoke detectors + install. soundthealarm.org.</li>
              <li>Reach extender pole ($30) for testing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Fire extinguisher too</h3>
            <p className="text-sm text-muted-foreground">One ABC-rated 5-pound fire extinguisher in kitchen, garage, and bedroom. ~$30 each. Replace or recharge every 5-12 years (check tag). Most kitchen fires are STOVE fires — extinguisher near the stove (but not directly above) saves homes.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
