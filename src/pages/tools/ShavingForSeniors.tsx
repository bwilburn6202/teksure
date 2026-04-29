import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

const RAZORS = [
  { name: 'Braun Series 9 Pro', cost: '$300', best: 'Best electric, gentle.', good: 'Best premium.' },
  { name: 'Philips Norelco 9000', cost: '$200', best: 'Rotary, 360-degree blades.', good: 'Best rotary.' },
  { name: 'Braun Series 5', cost: '$130', best: 'Solid mid-range.', good: 'Best mid-range.' },
  { name: 'Wahl Mustache + Beard', cost: '$50', best: 'Trim, not full shave.', good: 'Best trim.' },
  { name: 'Old-school safety razor', cost: '$30', best: 'Tradition, sharp.', good: 'Best traditional.' },
];

export default function ShavingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Shaving for Seniors | TekSure" description="Senior shaving picks. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <User className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Shaving for Seniors</h1>
          <p className="text-lg text-muted-foreground">Easier on aging skin. Less irritation.</p>
        </div>

        <div className="space-y-3 mb-6">
          {RAZORS.map(r => (
            <Card key={r.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{r.name}</h3>
                  <span className="text-sm font-semibold text-primary">{r.cost}</span>
                </div>
                <p className="text-sm">{r.best}</p>
                <p className="text-sm text-muted-foreground">{r.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pick: Braun Series 9</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most gentle on aging skin.</li>
              <li>Self-cleaning station.</li>
              <li>Wet + dry use.</li>
              <li>10-year battery.</li>
              <li>Less irritation than blades.</li>
              <li>Less risk of cuts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pre-shave</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wash face — opens pores.</li>
              <li>Pre-shave oil for sensitive skin.</li>
              <li>Warm towel 1 minute.</li>
              <li>Or shave after shower.</li>
              <li>Drink water — hydrated skin.</li>
              <li>Sharp / clean razor critical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">During shave</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shave with grain (not against).</li>
              <li>Light pressure — let blade work.</li>
              <li>Stretch skin gently.</li>
              <li>Rinse blade between strokes.</li>
              <li>Take time — don&apos;t rush.</li>
              <li>Magnifying mirror helps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After shave</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cool water rinse.</li>
              <li>Aftershave balm (alcohol-free).</li>
              <li>Moisturize daily.</li>
              <li>SPF on face daily.</li>
              <li>Cuts — Q-tip + bleeding stops.</li>
              <li>Styptic pencil for nicks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior beard option</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Beards saving time / sensitive skin.</li>
              <li>Trim weekly (not full shave).</li>
              <li>Beard oil for softness.</li>
              <li>Keep neck shaved.</li>
              <li>White / gray distinguished look.</li>
              <li>Bring out eye color.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Skin cancer awareness</h3>
            <p className="text-sm text-muted-foreground">Shaving daily = up-close skin examination. Notice new spots, asymmetric moles, color changes. See dermatologist annually 50+. SPF on face + ears critical. Skin cancer common after years of sun. Shaving routine = early detection opportunity. Self-exams save lives.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
