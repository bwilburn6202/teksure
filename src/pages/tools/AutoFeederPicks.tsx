import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cookie } from 'lucide-react';

const FEEDERS = [
  { name: 'PetSafe Smart Feed', cost: '$170', best: 'Most reliable WiFi feeder. App scheduling. 5L capacity. Backup battery.', good: 'Best overall.' },
  { name: 'PetLibro Granary', cost: '$100', best: 'Best budget WiFi feeder. 5L hopper. Reliable.', good: 'Best budget.' },
  { name: 'WOpet SmartFeeder', cost: '$80', best: 'Camera + feeder combo. App + voice recording.', good: 'Best with camera.' },
  { name: 'Sure Petcare Microchip Feeder', cost: '$200', best: 'Reads pet&apos;s microchip — only opens for that pet. Multi-cat households.', good: 'Best for multi-pet.' },
  { name: 'Feed and Go (raw/wet)', cost: '$200', best: 'Refrigerated. Wet food / raw diets. 6 compartments.', good: 'Best for wet food.' },
];

export default function AutoFeederPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Auto Pet Feeder Picks | TekSure" description="Smart pet feeders for dogs and cats. Plain-English picks for scheduled, app-controlled, microchip, and refrigerated feeders." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cookie className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Auto Pet Feeders</h1>
          <p className="text-lg text-muted-foreground">Pet eats on time. You sleep in.</p>
        </div>

        <div className="space-y-3 mb-6">
          {FEEDERS.map(f => (
            <Card key={f.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{f.name}</h3>
                  <span className="text-sm font-semibold text-primary">{f.cost}</span>
                </div>
                <p className="text-sm">{f.best}</p>
                <p className="text-sm text-muted-foreground">{f.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When auto-feeders help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Diabetic pet needs precise meals.</li>
              <li>Pet who wakes you at 5 AM for food.</li>
              <li>Travel — short trips you can leave food set.</li>
              <li>Caregivers shared with adult kids — autopilots feeding.</li>
              <li>Pet on weight management — controlled portions.</li>
              <li>Multiple pets — microchip feeder ensures each only eats their food.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup tips</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Start in the room you currently feed — don&apos;t change locations + machines at once.</li>
              <li>Run on schedule for 1 week WITHOUT food in feeder, so pet learns the sound.</li>
              <li>Then start regular meals.</li>
              <li>Test app remote-feed once before traveling.</li>
              <li>Backup batteries — power outages happen.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Auto water fountains too</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>PetSafe Drinkwell</strong> — $40-80. Filters + circulates.</li>
              <li><strong>Catit Flower Fountain</strong> — $30. Cats love flowing water.</li>
              <li>Cleaner water = better drinking habits = better kidneys.</li>
              <li>Cats especially benefit (most don&apos;t drink enough still water).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t auto-feed for vacations longer than 3 days</h3>
            <p className="text-sm text-muted-foreground">Auto-feeders fail. Hoppers jam. Pets need real check-ins for trips longer than 2-3 days. Hire a pet sitter (Rover, Wag, neighbor). Auto-feeder is supplement, not replacement, for actual visits.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
