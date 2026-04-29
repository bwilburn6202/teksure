import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cable } from 'lucide-react';

interface CableType {
  id: string;
  name: string;
  shape: string;
  fits: string[];
  notes: string;
  watchOut?: string;
}

const CABLES: CableType[] = [
  { id: 'usb-c', name: 'USB-C', shape: 'Small oval. Same on both ends. Plugs in any direction (no "right side up").',
    fits: ['iPhone 15, 16, and newer', 'Most new Android phones (Samsung Galaxy S, Google Pixel)', 'iPad Pro, iPad Air, newer iPads', 'MacBook (most made after 2016)', 'Many laptops, Kindle (newer), AirPods Pro 2 (USB-C case)'],
    notes: 'This is the new standard. Most new devices use it. The cable works either way you plug it in.',
    watchOut: 'Not all USB-C cables are equal. Cheap ones may charge slow or not carry video. For laptops, look for "100W" or "USB-C PD" on the package.' },
  { id: 'lightning', name: 'Lightning', shape: 'Small flat rectangle. Same shape on both sides — plugs in any direction.',
    fits: ['iPhone 5 through iPhone 14', 'Older iPads (before 2018)', 'Older AirPods cases', 'Older Apple keyboards and mice'],
    notes: 'Apple\'s old connector. Apple is replacing it with USB-C, so it\'s slowly disappearing.',
    watchOut: 'Apple is phasing this out. If you\'re buying new, pick a phone with USB-C instead.' },
  { id: 'micro-usb', name: 'Micro-USB', shape: 'Small trapezoid (wider on top, narrower on bottom). Only fits one way.',
    fits: ['Older Android phones (before about 2017)', 'Many Bluetooth speakers and headphones', 'E-readers (older Kindles)', 'Cheap battery packs', 'Some game controllers'],
    notes: 'Older standard. Still common on cheap or older gadgets.',
    watchOut: 'Easy to break the connector if you force it the wrong way. Always check direction first.' },
  { id: 'usb-a', name: 'USB-A (the big rectangle)', shape: 'Large flat rectangle. The end that plugs into a computer or wall block.',
    fits: ['The "wall plug" end of most charging cables', 'Computer USB ports', 'Car USB ports', 'TV USB ports'],
    notes: 'This is the FAR end of most cables — what plugs into the wall block, computer, or car. The OTHER end is what matches your device.',
    watchOut: 'Only fits one way. If it won\'t go in, flip it over — don\'t force it.' },
  { id: 'magsafe', name: 'MagSafe (Apple wireless)', shape: 'Round magnetic puck on the end of a cable.',
    fits: ['iPhone 12 and newer (snaps to the back)', 'Some MacBook laptops (different MagSafe — for laptop charging)'],
    notes: 'Wireless charging that snaps on with magnets. Slower than plugging in but very convenient.',
    watchOut: 'Phone MagSafe and laptop MagSafe are different — not interchangeable.' },
  { id: 'barrel', name: 'Barrel plug (round)', shape: 'Round metal plug, like a small cylinder.',
    fits: ['Older laptop chargers', 'Lamps, clocks, monitors', 'Routers and modems', 'Some older printers'],
    notes: 'Each device often has its own size. Not interchangeable.',
    watchOut: 'Wrong voltage can damage the device. Always check the small print on both the charger and the device match.' },
];

export default function ChargerCableIdentifier() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="What Cable Is This? Charger & Cable Identifier | TekSure" description="Plain-English guide to USB-C, Lightning, Micro-USB, USB-A, MagSafe, and barrel plugs. Find out which cable fits which device." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cable className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">What Cable Is This?</h1>
          <p className="text-lg text-muted-foreground">Tap any cable to learn what it fits and what to watch out for.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-1">Quick way to tell</h2>
            <p className="text-sm text-muted-foreground">Most charging cables have <strong>two different ends</strong>. The big rectangle end (USB-A) plugs into the wall block. The OTHER end is the one that matches your device — that's the one we're naming below.</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {CABLES.map(c => (
            <Card key={c.id}>
              <CardContent className="pt-6">
                <button onClick={() => setOpen(open === c.id ? null : c.id)} className="w-full text-left">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{c.name}</h3>
                      <p className="text-sm text-muted-foreground">{c.shape}</p>
                    </div>
                    <span className="text-sm text-primary font-medium shrink-0">{open === c.id ? 'Hide' : 'Details'}</span>
                  </div>
                </button>
                {open === c.id && (
                  <div className="mt-4 pt-4 border-t space-y-3">
                    <div>
                      <p className="font-semibold mb-1">Fits:</p>
                      <ul className="text-sm list-disc pl-5 space-y-1 text-muted-foreground">
                        {c.fits.map((f, i) => <li key={i}>{f}</li>)}
                      </ul>
                    </div>
                    <p className="text-sm bg-muted/50 p-3 rounded">{c.notes}</p>
                    {c.watchOut && <p className="text-sm bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-300 dark:border-yellow-800 p-3 rounded"><strong>Watch out:</strong> {c.watchOut}</p>}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Buying a replacement?</h3>
            <p className="text-sm text-muted-foreground">Bring the OLD cable to the store, or take a clear photo of the end that plugs into your device. Staff at any phone store can match it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
