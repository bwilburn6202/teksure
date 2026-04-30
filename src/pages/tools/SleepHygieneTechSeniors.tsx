import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

export default function SleepHygieneTechSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sleep Hygiene Tech for Senior Sleepers | TekSure" description="Tech to improve senior sleep. Smart bulbs, blackout, white noise, screen filters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sleep Hygiene Tech</h1>
          <p className="text-lg text-muted-foreground">Better sleep with smart tech.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart bulbs for sleep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Philips Hue or Wyze bulbs.</li>
              <li>Auto-dim to red at night.</li>
              <li>Wake-up sunrise simulation.</li>
              <li>Less melatonin disruption.</li>
              <li>$15-$50 per bulb.</li>
              <li>Schedule via app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">White noise machines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hatch Restore — popular senior choice.</li>
              <li>$130 — light + sound + alarm.</li>
              <li>LectroFan — $40 cheap option.</li>
              <li>Drown out neighborhood noise.</li>
              <li>Consistent sound = better sleep.</li>
              <li>Smartphone app alternative.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Blue light filters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone Night Shift — automatic.</li>
              <li>Android equivalent.</li>
              <li>Reduces evening blue light.</li>
              <li>Better melatonin production.</li>
              <li>Set 1 hour before bed.</li>
              <li>Free, built-in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart thermostat for sleep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bedroom 65-68°F ideal for sleep.</li>
              <li>Nest, Ecobee schedule it automatically.</li>
              <li>Cool bedroom = deeper sleep.</li>
              <li>Save energy too.</li>
              <li>Wake to warmer temp.</li>
              <li>Senior-friendly programming.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Black out curtains</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Not tech but effective.</li>
              <li>Block streetlights, early sun.</li>
              <li>$30-$80 per window.</li>
              <li>Sleep until alarm.</li>
              <li>Combined with eye mask = perfect.</li>
              <li>Senior-friendly bedroom.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone in bedroom — temptation.</li>
              <li>TV right before bed.</li>
              <li>Alcohol disrupts sleep.</li>
              <li>Caffeine after 2pm.</li>
              <li>Heavy meals near bedtime.</li>
              <li>Senior sleep more fragile.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cool dark quiet</h3>
            <p className="text-sm text-muted-foreground">Three principles: cool (65-68°F), dark (blackout curtains), quiet (white noise). Senior sleep declines naturally — these tech aids help maintain it. Smart thermostat + smart bulbs + Hatch Restore = $250 total. Compared to ongoing sleeping pill costs, much cheaper + safer. Better sleep = better aging.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
