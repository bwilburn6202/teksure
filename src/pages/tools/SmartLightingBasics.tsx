import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

const PICKS = [
  { name: 'Kasa Smart Bulbs (TP-Link)', cost: '$10-15/bulb', best: 'No hub needed. Works with Alexa, Google. Cheapest reliable.', good: 'Best budget.' },
  { name: 'Philips Hue', cost: '$50-100/bulb + $60 hub', best: 'Best color quality. Premium.', good: 'Best premium.' },
  { name: 'Wyze Bulb', cost: '$8-12/bulb', best: 'Cheapest, decent. Works with all major hubs.', good: 'Best cheapest.' },
  { name: 'Sengled (Alexa-bundled)', cost: '$10-15/bulb', best: 'Comes free with some Echo devices. Decent.', good: 'Best with Alexa.' },
  { name: 'Lutron Caseta wall switch', cost: '$70-100/switch + $80 hub', best: 'Replace WALL SWITCH not bulb. Most reliable + senior-friendly.', good: 'Best wall-switch.' },
];

export default function SmartLightingBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Lighting Basics for Seniors | TekSure" description="Kasa, Hue, Wyze, Lutron. Plain-English picks for smart bulbs and switches. Voice-control your lights." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Lighting Basics</h1>
          <p className="text-lg text-muted-foreground">"Alexa, turn off the lights."</p>
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
            <h2 className="font-bold text-xl mb-3">Bulbs vs switches</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Smart bulbs</strong> — replace bulb, set in app. Cheap, easy. Works with lamps + ceiling.</li>
              <li><strong>Smart switches</strong> — replace WALL SWITCH (Lutron, Kasa, etc.). Better — works with all bulbs, family can use normally.</li>
              <li><strong>Smart plugs</strong> — alternative for lamps. $10. No bulb change.</li>
              <li>For seniors — switches often best because old wall switch still works as expected.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best uses for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Goodnight" turns off all lights from bed.</li>
              <li>Motion sensor → bathroom light at night.</li>
              <li>Sunset auto-on — never come home in dark.</li>
              <li>Voice control when hands are full.</li>
              <li>Hallway lights schedule for arthritis days.</li>
              <li>Color-changing for circadian rhythm (warm at night, blue daytime).</li>
              <li>Vacation simulation — looks lived-in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (5 min/bulb)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Screw in bulb.</li>
              <li>Turn switch ON.</li>
              <li>Open app (Kasa, Hue, etc.).</li>
              <li>Tap "Add Device".</li>
              <li>App finds bulb. Connect to wifi.</li>
              <li>Name it ("Living Room Lamp").</li>
              <li>Add to Alexa/Google in their app.</li>
              <li>Test: "Alexa, turn on Living Room Lamp."</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior-friendly tip</h3>
            <p className="text-sm text-muted-foreground">Skip color-changing bulbs first time. Start with simple white smart bulbs. After you get used to voice control, upgrade. Don&apos;t waste money on what you won&apos;t use.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
