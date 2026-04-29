import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

const PICKS = [
  { name: 'Wyze Bulb (basic white)', price: '$10', best: 'Cheapest reliable smart bulb. Good for one or two lamps to try.', good: 'Best entry point.' },
  { name: 'Wyze Color Bulb', price: '$15', best: 'Same brand, color-changing.', good: 'Cheap, fun.' },
  { name: 'Philips Hue White & Color', price: '$45-50/bulb', best: 'Premium. Best app and reliability. Needs Hue Bridge for full features (or works with Hub-less newer ones).', good: 'Best build quality and ecosystem.' },
  { name: 'LIFX', price: '$30-50', best: 'No bridge needed — connects to Wi-Fi directly. Strong colors.', good: 'Hue alternative without bridge.' },
  { name: 'TP-Link Kasa', price: '$15-30', best: 'Solid mid-range. Strong app. No bridge needed.', good: 'Best value for whole-house.' },
  { name: 'Sengled', price: '$10-15', best: 'Cheap reliable budget option. Works with Alexa, Google, SmartThings.', good: 'Best budget for many bulbs.' },
];

export default function SmartBulbPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Bulb Picker — Wyze, Hue, LIFX | TekSure" description="Smart bulbs let you control lights with voice or schedules. Plain-English picks for the best smart bulbs and how to start small." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Bulb Picker</h1>
          <p className="text-lg text-muted-foreground">Voice control your lights. Set schedules. Save energy.</p>
        </div>

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
            <h2 className="font-bold text-xl mb-3">Setup (any brand)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Screw in the bulb.</li>
              <li>Install the brand\'s app.</li>
              <li>App auto-finds the new bulb (or you scan a QR code).</li>
              <li>Connect to your home Wi-Fi.</li>
              <li>Name it ("Living Room Lamp", "Kitchen Light").</li>
              <li>Connect to Alexa / Google / Apple Home in app settings.</li>
              <li>Now: "Alexa, turn off the kitchen light" works.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly use cases</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Auto-on at sunset</strong> — lights turn on before you come home or before it gets too dark.</li>
              <li><strong>Voice from bed</strong> — "Alexa, turn off all lights" without fumbling for switches.</li>
              <li><strong>Auto-off at bedtime</strong> — set a schedule. No more "did I leave the kitchen light on?".</li>
              <li><strong>Vacation mode</strong> — lights randomly turn on/off while you\'re away. Looks lived-in.</li>
              <li><strong>Color change for emergency</strong> — set bulb red if smoke detector triggers.</li>
              <li><strong>Brightness fade for sleep</strong> — gentle dim over 15 min as you fall asleep.</li>
              <li><strong>Color change for medication reminder</strong> — bulb flashes purple at 8 PM = take heart pill.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Alternative — smart plugs</h3>
            <p className="text-sm text-muted-foreground">Don\'t want to replace bulbs? Buy a $10 smart plug. Plug your existing lamp into it. Same control. Sometimes simpler. Brands: Kasa, Wyze, Amazon.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
