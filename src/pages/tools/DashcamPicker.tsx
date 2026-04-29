import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const PICKS = [
  { name: 'Garmin Mini 2', cost: '$130', best: 'Tiny + great. Senior-friendly.', good: 'Best small.' },
  { name: 'Vantrue N4', cost: '$260', best: '3-channel. Front + interior + rear.', good: 'Best multi-camera.' },
  { name: 'Nextbase 522GW', cost: '$240', best: 'Premium. Alexa built-in.', good: 'Best premium.' },
  { name: 'Viofo A129 Plus', cost: '$170', best: 'Front + rear. Reliable.', good: 'Best mid-range.' },
  { name: 'BlackVue DR900X', cost: '$500', best: 'Premium with cloud connectivity.', good: 'Best with cloud.' },
];

export default function DashcamPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dashcam Picker for Seniors | TekSure" description="Senior driver protection cameras. Plain-English dashcam picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dashcam Picks</h1>
          <p className="text-lg text-muted-foreground">Catch crashes. Protect insurance.</p>
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
            <h2 className="font-bold text-xl mb-3">Why senior need dashcam</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Proof of fault in accidents.</li>
              <li>Defends against staged accidents (target seniors).</li>
              <li>Insurance disputes resolved.</li>
              <li>Catches hit-runs.</li>
              <li>Family + grandkid memories drive.</li>
              <li>Some insurance discounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup easy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plug into 12V outlet (cigarette lighter).</li>
              <li>Stick to windshield (back of mirror).</li>
              <li>SD card included.</li>
              <li>Auto-records when you drive.</li>
              <li>Loops over old footage.</li>
              <li>Save important by tagging.</li>
              <li>Most save automatically on impact.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1080p minimum (4K nice but bigger files).</li>
              <li>GPS tracking.</li>
              <li>Auto-save on impact.</li>
              <li>Parking mode (records while parked).</li>
              <li>Front + rear cameras.</li>
              <li>WiFi for phone download.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Install help</h3>
            <p className="text-sm text-muted-foreground">Most DIY 30 min. If uncomfortable — Best Buy Geek Squad installs $50-100. Permanent install hides wires + uses constant power for parking mode. Worth it for protection.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
