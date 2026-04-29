import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bot } from 'lucide-react';

const PICKS = [
  { name: 'iRobot Roomba Combo j7+', price: '$700', best: 'Vacuums AND mops. Auto-empties into bin. Best for pets, carpet + hard floors.', good: 'Top pick for most homes.' },
  { name: 'iRobot Roomba 694', price: '$200', best: 'Cheapest reliable Roomba. Great if you don\'t need fancy mapping.', good: 'Best budget pick.' },
  { name: 'Roborock Q5+ / Q7 Max+', price: '$300-500', best: 'Self-emptying. Maps your home. Often beats Roomba on price + features.', good: 'Best value for features.' },
  { name: 'Roborock S8 Pro Ultra', price: '$1,400', best: 'Premium — vacuums, mops, washes its own mop, refills its own water.', good: 'Set-and-forget for a year.' },
  { name: 'Eufy RoboVac 11S', price: '$160', best: 'No app required (button only). Simple for tech-shy seniors.', good: 'Best ultra-simple option.' },
  { name: 'Shark AI Ultra', price: '$400-600', best: 'Self-empties. Strong suction. Solid for pet hair.', good: 'Reliable middle-tier.' },
];

export default function RobotVacuumCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Robot Vacuum Coach — Roomba, Roborock, Eufy | TekSure" description="A robot vacuum saves bending, time, and back pain. Plain-English picks for the best robots — basic, premium, and ultra-simple options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Robot Vacuum Coach</h1>
          <p className="text-lg text-muted-foreground">Save your back. The robot does the floor.</p>
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
            <h2 className="font-bold text-xl mb-3">Best features for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Self-emptying</strong> — robot empties itself into a bin you change every 30-60 days. No bending.</li>
              <li><strong>Voice control</strong> — "Alexa, start the Roomba."</li>
              <li><strong>Schedule</strong> — runs while you\'re out or asleep.</li>
              <li><strong>No-go zones</strong> — keeps it away from pet bowls, fragile rugs.</li>
              <li><strong>Big bumper</strong> — gentle on furniture and toes.</li>
              <li><strong>"Spot clean"</strong> — sends robot to clean a specific spot you point at.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips before you buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pick up cords and small rugs</strong> the first time — robots eat them.</li>
              <li><strong>Many small obstacles</strong> (chair legs, pet beds) — better robots map and avoid.</li>
              <li><strong>Pet hair</strong> — get one rated for it. Cheap robots clog quickly.</li>
              <li><strong>Multiple floors</strong> — most robots can\'t climb stairs. You move it manually OR get one per floor.</li>
              <li><strong>Hardwood + rugs</strong> — most modern robots handle both.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Maintenance</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Empty bin (if not self-emptying) — every 1-3 runs.</li>
              <li>Clean brushes — once a month for hair tangles.</li>
              <li>Replace HEPA filter — every 6 months ($10).</li>
              <li>Replace battery — every 2-4 years ($30-50).</li>
              <li>Wipe sensors — quick swipe with dry cloth monthly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">If you have pets — Roomba Combo j7+ or Roborock S8. If you want simple — Eufy 11S. If $200 budget — Roomba 694. Black Friday and Prime Day usually have $100-300 off the premium models.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
