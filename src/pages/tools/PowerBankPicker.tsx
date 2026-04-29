import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BatteryCharging } from 'lucide-react';

const PICKS = [
  { name: 'Anker 313 PowerCore (10,000 mAh)', price: '$25-30', best: 'Charges an iPhone 2-3 times. Pocket-sized. Anker is the most reliable brand.', good: 'Best for everyday carry.' },
  { name: 'Anker 737 Power Bank (24,000 mAh)', price: '$130', best: 'Charges a laptop. Big enough for a full weekend trip.', good: 'For travelers.' },
  { name: 'Mophie Snap+ Wireless', price: '$50', best: 'MagSafe — sticks to back of iPhone, no cable. Convenient at restaurants.', good: 'iPhone 12+ only.' },
  { name: 'Jackery Explorer 240', price: '$200', best: 'A real "power station" — runs CPAP machine, phone, lights for hours during outages.', good: 'Should be in every emergency kit.' },
  { name: 'EcoFlow River 2 Pro / Bluetti', price: '$500-1500', best: 'Bigger power stations. Solar-rechargeable. Real backup for medical equipment.', good: 'For people on home oxygen, CPAP, or insulin.' },
];

export default function PowerBankPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Power Bank Picker — Pocket Banks to Power Stations | TekSure" description="Phone dies on long trips? Storm knocks out power? The right power bank or power station depends on what you need. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BatteryCharging className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Power Bank Picker</h1>
          <p className="text-lg text-muted-foreground">For your pocket, your travel bag, and your emergency kit.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Sizing them out</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>5,000-10,000 mAh</strong> — pocket size. 1-2 phone charges.</li>
              <li><strong>20,000-26,000 mAh</strong> — travel size. 4-5 phone charges. TSA carry-on max.</li>
              <li><strong>"Power station" (200-2000 watt-hours)</strong> — runs medical equipment, lights, phones during outages.</li>
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
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Charging tips</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Charge the power bank every 1-3 months even if not using — battery degrades faster when fully drained.</li>
              <li>Don\'t leave in hot car for hours — heat kills lithium batteries.</li>
              <li>Bring it on flights in carry-on, NEVER in checked luggage (FAA rule).</li>
              <li>For laptops, you need a "USB-C PD" power bank with at least 60W output.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Surge protectors worth knowing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>APC P11VT3 / P11U2</strong> — basic 11-outlet, $30. Good for most homes.</li>
              <li><strong>Tripp Lite Isobar</strong> — premium, longer warranty, better filtering.</li>
              <li><strong>Whole-house surge protector</strong> — $250-500 installed by electrician at the panel. Stops big surges before they reach individual outlets.</li>
              <li><strong>UPS (uninterruptible power supply)</strong> — $80-150. A surge protector with battery backup. Keeps computer alive 5-15 minutes during a flicker, lets you save and shut down properly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For medical equipment</h3>
            <p className="text-sm text-muted-foreground">If you use a CPAP, home oxygen concentrator, or other plug-in medical device — a Jackery or EcoFlow power station is genuinely lifesaving in an outage. Add solar panels for $200-400 if you live in storm country.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
