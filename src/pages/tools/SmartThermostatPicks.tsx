import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

const PICKS = [
  { name: 'Google Nest Learning Thermostat', cost: '$250', best: 'Senior favorite. Auto-learns schedule. Big readable display.', good: 'Best overall.' },
  { name: 'Ecobee Smart Premium', cost: '$250', best: 'Built-in Alexa. Room sensors for temperature in different areas.', good: 'Best for big homes.' },
  { name: 'Honeywell T9', cost: '$150-200', best: 'Familiar Honeywell brand. Reliable. Smart app.', good: 'Best familiar brand.' },
  { name: 'Amazon Smart Thermostat', cost: '$80', best: 'Cheap + simple. Works with Alexa.', good: 'Best budget.' },
  { name: 'Mysa', cost: '$140-200', best: 'For electric baseboard heat (less common but Mysa specializes).', good: 'Best for baseboard.' },
];

export default function SmartThermostatPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Thermostat Picks | TekSure" description="Nest, Ecobee, Honeywell. Plain-English picks for smart thermostats that save 10-15% on heating + cooling." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Thermometer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Thermostat Picks</h1>
          <p className="text-lg text-muted-foreground">10-15% savings on energy bills.</p>
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
            <h2 className="font-bold text-xl mb-3">Why upgrade</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Auto-adjusts when away — saves money.</li>
              <li>Schedule different temps for sleep, away, home.</li>
              <li>Voice control — "Alexa, set thermostat to 72."</li>
              <li>Phone alerts — temperature spike (broken HVAC).</li>
              <li>Vacation mode — protects pipes from freezing.</li>
              <li>Family checks remotely — peace of mind for adult kids.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Utility rebates</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most US utilities offer $50-100 rebates for smart thermostats.</li>
              <li>Some give them FREE if you sign up for demand-response programs.</li>
              <li>Search "[your utility] smart thermostat rebate".</li>
              <li>Federal Inflation Reduction Act tax credits for energy efficiency.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY install (30 min)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Turn off HVAC at breaker.</li>
              <li>Photo your existing wires (back of old thermostat).</li>
              <li>Remove old thermostat.</li>
              <li>Connect wires to new thermostat per labels.</li>
              <li>Mount, attach.</li>
              <li>Turn breaker on.</li>
              <li>Connect to wifi via app.</li>
              <li>Or hire HVAC technician — $100-200 typically.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No "C-wire"?</h3>
            <p className="text-sm text-muted-foreground">Some smart thermostats need a "common wire" (C-wire). Check what you have first. Nest works without one. Ecobee includes a "PEK" adapter to add one. Honeywell C-wire kit is $35-50.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
