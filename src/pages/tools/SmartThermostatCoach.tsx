import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

const PICKS = [
  { name: 'Ecobee Premium', price: '$250', best: 'Built-in Alexa speaker. Includes remote room sensors. Best for big homes.', good: 'Best premium.' },
  { name: 'Ecobee Smart Enhanced', price: '$190', best: 'Same brain, no built-in speaker.', good: 'Best Ecobee value.' },
  { name: 'Google Nest Learning Thermostat', price: '$280', best: 'Auto-learns your schedule. Beautiful design.', good: 'For Google Home homes.' },
  { name: 'Nest Thermostat (basic)', price: '$130', best: 'Cheaper Nest. No learning, but still smart + remote.', good: 'Best Nest budget pick.' },
  { name: 'Honeywell T9', price: '$200', best: 'Solid mid-range. Good app.', good: 'Reliable middle-tier.' },
  { name: 'Amazon Smart Thermostat', price: '$80', best: 'Cheapest "smart" option. Basic features. Works with Alexa.', good: 'Best ultra-budget.' },
];

export default function SmartThermostatCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Thermostat Coach — Nest, Ecobee, Honeywell | TekSure" description="Save $100-180/year. Plain-English picks for smart thermostats and how to install one yourself." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Thermometer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Thermostat Coach</h1>
          <p className="text-lg text-muted-foreground">$130-280 once. Saves $100-180/year forever.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why upgrade</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Auto-adjusts when you\'re away (saves 8-15% on heat/cool).</li>
              <li>Sense room temperature, not just hallway temp.</li>
              <li>Alerts on weird usage spikes — caught early HVAC failures.</li>
              <li>Voice control — "Alexa, set thermostat to 72".</li>
              <li>Many utilities offer $30-100 REBATE for smart thermostat. Search "[utility] thermostat rebate".</li>
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
            <h2 className="font-bold text-xl mb-3">Install (DIY)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Turn OFF power to HVAC at breaker.</li>
              <li>Photograph current thermostat\'s wiring (so you can replicate).</li>
              <li>Remove old thermostat (2 screws).</li>
              <li>Note wire labels (R, C, W, Y, G, etc.).</li>
              <li>Most smart thermostats need a "C wire" (common) for power. If you don\'t have one — buy a "C-wire adapter" ($30) or have an HVAC pro install it.</li>
              <li>Connect new thermostat per manual.</li>
              <li>Turn power back on. App walks you through Wi-Fi setup.</li>
              <li>Total: 30-60 min DIY OR $100-150 installer.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Recommendation</h3>
            <p className="text-sm text-muted-foreground"><strong>Ecobee Smart Enhanced</strong> for most homes. Best balance of features and price. Pair with utility rebate to bring net cost to $50-100.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
