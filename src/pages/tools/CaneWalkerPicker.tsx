import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

const AIDS = [
  { name: 'Standard cane', cost: '$15-30', best: 'Mild balance issues. One side weakness.', good: 'Best basic.' },
  { name: 'Quad cane (4-prong)', cost: '$25-50', best: 'More stability than standard. Stands on its own.', good: 'Best stability cane.' },
  { name: 'Standard walker', cost: '$30-60', best: 'Both hands. Indoor use.', good: 'Best basic walker.' },
  { name: 'Wheeled walker (rollator)', cost: '$80-200', best: '4 wheels + brakes + seat. Best outdoor.', good: 'Best rollator.' },
  { name: 'Knee scooter', cost: '$150 rental', best: 'Foot/ankle injury recovery.', good: 'Best for foot injury.' },
  { name: 'Transport wheelchair', cost: '$100-300', best: 'Long distances when caregiver pushes.', good: 'Best lightweight chair.' },
];

export default function CaneWalkerPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cane vs Walker Picker | TekSure" description="Pick the right mobility aid. Plain-English guide to canes, walkers, rollators for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cane vs Walker Picker</h1>
          <p className="text-lg text-muted-foreground">Right tool = stay independent.</p>
        </div>

        <div className="space-y-3 mb-6">
          {AIDS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sizing tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cane top should reach wrist crease when arms hang at side.</li>
              <li>Hold cane on STRONG side, advance with weak leg.</li>
              <li>Walker grips at wrist height with arms slightly bent.</li>
              <li>Rollator brakes should reach without leaning.</li>
              <li>Test before buying — local medical supply stores let you try.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicare coverage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medicare Part B covers durable medical equipment (DME).</li>
              <li>Need doctor prescription + medical necessity.</li>
              <li>Pay 20% after deductible.</li>
              <li>Use Medicare-approved supplier — find at Medicare.gov.</li>
              <li>Standard cane often cheaper to buy yourself.</li>
              <li>Rollators usually worth running through Medicare.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No shame in mobility aids</h3>
            <p className="text-sm text-muted-foreground">Resisting a cane/walker = falls + injury + lost independence. Using one = staying active longer. Seniors who use proper mobility aids stay independent 5+ years longer than those who refuse them. It&apos;s strength, not weakness.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
