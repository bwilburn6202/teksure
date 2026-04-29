import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Microwave } from 'lucide-react';

const PICKS = [
  { name: 'Toshiba EM131A5C', cost: '$150', best: 'Reliable. 1.2 cu ft. Easy controls. Senior favorite.', good: 'Best overall.' },
  { name: 'Panasonic Inverter NN-SN686S', cost: '$200', best: 'Inverter tech = better cooking. Quieter.', good: 'Best premium.' },
  { name: 'GE 1.4 cu ft', cost: '$180', best: 'Big enough. Big buttons.', good: 'Best big buttons.' },
  { name: 'Whirlpool Countertop', cost: '$120', best: 'Basic + cheap. Just works.', good: 'Best budget.' },
  { name: 'Sharp 0.7 cu ft', cost: '$80', best: 'Compact for studio/RV/dorm.', good: 'Best small.' },
];

export default function MicrowaveSeniorBuy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Microwave Picks for Seniors | TekSure" description="Easy-button microwaves. Plain-English picks for senior kitchens." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Microwave className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Microwave for Seniors</h1>
          <p className="text-lg text-muted-foreground">Big buttons. Simple. Safe.</p>
        </div>

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
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Large buttons / numerical keypad.</li>
              <li>Simple controls (NOT touchscreen).</li>
              <li>Bright readable display.</li>
              <li>Sensor cooking — auto stops.</li>
              <li>Add 30-second button.</li>
              <li>Mute button (some constant beeping annoys).</li>
              <li>Child lock (don&apos;t accidentally start).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smart microwaves with WiFi (overkill).</li>
              <li>Convection ovens (more complex).</li>
              <li>Below-average brands (Cuisinart microwaves bad).</li>
              <li>Touchscreen-only controls.</li>
              <li>Overly complex programs.</li>
              <li>Buttons too small for arthritic hands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Size guide</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>0.7-0.9 cu ft</strong> — small (1 person, RV).</li>
              <li><strong>1.1-1.3 cu ft</strong> — most popular for couples.</li>
              <li><strong>1.4-1.6 cu ft</strong> — full-size families.</li>
              <li><strong>1.8+ cu ft</strong> — over-range / built-in.</li>
              <li>Counter-top easier to replace than over-range.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Microwave Q+A</h3>
            <p className="text-sm text-muted-foreground"><strong>Q: Replace every X years?</strong> Microwaves last 7-10 yrs. <strong>Q: Wattage matters?</strong> 700W slow, 1000W standard, 1100W+ best. <strong>Q: Worst brand?</strong> Anything under $80 generally. <strong>Q: Best deal?</strong> Costco bundles, holiday sales.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
