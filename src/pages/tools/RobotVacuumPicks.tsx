import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bot } from 'lucide-react';

const VACS = [
  { name: 'Roomba 694 / i3+', cost: '$200-450', best: 'iRobot. The standard. i3+ has self-emptying base. Reliable, easy to fix.', good: 'Best overall.' },
  { name: 'Roborock Q5 / S8', cost: '$250-700', best: 'Strong suction. Mapping. Mid-range S models also mop. Senior favorite.', good: 'Best value mapping.' },
  { name: 'Eufy RoboVac 11S', cost: '$160-200', best: 'Simple, slim (gets under low furniture), no app needed — just press button.', good: 'Best budget / no-app.' },
  { name: 'Shark Matrix', cost: '$300-500', best: 'Better at cleaning corners. Strong on carpet. Self-empty option.', good: 'Best for carpet.' },
  { name: 'iRobot Combo j7+', cost: '$700-900', best: 'Vacuum + mop in one. Avoids pet messes (camera). Auto-empty + auto-fill.', good: 'Best premium.' },
];

export default function RobotVacuumPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Robot Vacuum Picks — Roomba, Roborock, Eufy | TekSure" description="Plain-English picks for robot vacuums under $300, $500, and $1,000. Best models for hardwood, carpet, and pet hair." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Robot Vacuum Picks</h1>
          <p className="text-lg text-muted-foreground">A clean floor, even on a bad-back day.</p>
        </div>

        <div className="space-y-3 mb-6">
          {VACS.map(v => (
            <Card key={v.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{v.name}</h3>
                  <span className="text-sm font-semibold text-primary">{v.cost}</span>
                </div>
                <p className="text-sm">{v.best}</p>
                <p className="text-sm text-muted-foreground">{v.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to look for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Self-emptying base</strong> — empties bin into bag, takes weeks before you touch it. Adds $150-300, worth every penny.</li>
              <li><strong>Mapping</strong> — vacuum learns your floor plan. Cleans efficiently. Skip random-pattern bots.</li>
              <li><strong>Suction</strong> — measured in Pa (Pascals). 2,500+ Pa for hardwood; 4,000+ Pa for carpet.</li>
              <li><strong>Slim profile</strong> — under 4" tall fits under most furniture.</li>
              <li><strong>Pet-hair tangle-free brushes</strong> — saves cleaning brushes weekly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup tips for seniors</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Put base in a corner with 18" clear on each side.</li>
              <li>Plug base into outlet. Vacuum drives back when done.</li>
              <li>First run — clear floor of cords, socks, small rugs.</li>
              <li>Run "mapping" mode once to teach it your home.</li>
              <li>Schedule daily clean (10 AM is great — out of way).</li>
              <li>App is optional — most have a "Clean" button on top.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Maintenance (5 min/month)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Empty dust bin (or replace bag if self-empty).</li>
              <li>Clean filter — tap clean weekly, replace every 2-3 months ($10).</li>
              <li>Cut off hair/string from main brush — scissors.</li>
              <li>Wipe sensors with dry cloth.</li>
              <li>Replace side brush every 6 months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Mop too?</h3>
            <p className="text-sm text-muted-foreground">Combo vacuum/mop bots (Roomba Combo, Roborock S8) lift mop pad on carpet, drop on hardwood. Auto-empty AND auto-refill bases mean truly hands-off floors. $700-1,500 — pricey but transformative if you have lots of hard floor.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
