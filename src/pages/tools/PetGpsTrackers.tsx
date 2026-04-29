import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const APPS = [
  { name: 'Apple AirTag (in collar)', cost: '$29', best: 'Cheapest. Bluetooth-only — works in cities (lots of iPhones around). Bad in rural.', good: 'Best urban budget.' },
  { name: 'Tractive GPS', cost: '$50 + $8/mo', best: 'Real-time GPS, anywhere. Cellular. Best for actual escape recovery.', good: 'Best overall.' },
  { name: 'Fi Smart Collar', cost: '$150 + $8-15/mo', best: 'Sturdy collar with GPS, activity, sleep tracking. Good for outdoor dogs.', good: 'Best collar-built-in.' },
  { name: 'Whistle Switch', cost: '$130 + $9/mo', best: 'Health monitoring + GPS. Tracks behavior changes.', good: 'Best health tracking.' },
  { name: 'Jiobit', cost: '$110 + $10/mo', best: 'Smallest GPS tracker. Good for cats too. Reliable cellular.', good: 'Best for cats.' },
];

export default function PetGpsTrackers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet GPS Trackers — Tractive, Fi, AirTag | TekSure" description="Find your dog or cat if they escape. Plain-English picks for pet GPS trackers — Bluetooth (cheap) vs cellular (real-time)." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet GPS Trackers</h1>
          <p className="text-lg text-muted-foreground">If they bolt, you can find them.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bluetooth vs Cellular</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bluetooth (AirTag, Tile)</strong> — $30 one-time. Works only when another phone is within ~30 ft. Great in cities, useless in woods.</li>
              <li><strong>Cellular GPS (Tractive, Fi)</strong> — $100-150 + monthly fee. Works ANYWHERE with cell coverage. Live location.</li>
              <li>For escape-prone dogs — cellular is worth the $8/mo.</li>
              <li>For cats — AirTag in collar works in most homes/yards.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Microchip — non-negotiable</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Permanent ID — vet/shelter scans, finds your phone.</li>
              <li>$25-50 one-time. Many shelters microchip free at adoption.</li>
              <li>UPDATE the registry when you move or change phone.</li>
              <li>Doesn&apos;t track location — but reunites lost pets.</li>
              <li>Free chip-finder: <strong>aaha.org/petmicrochiplookup</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Stack it</h3>
            <p className="text-sm text-muted-foreground">Best setup: microchip (permanent ID) + collar tag with phone number (so anyone can call you immediately) + GPS tracker (real-time). All 3 = nearly impossible to permanently lose a pet. $30-200 total. Cheaper than one missed reunion.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
