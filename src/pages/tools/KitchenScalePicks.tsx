import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

const PICKS = [
  { name: 'OXO Good Grips Stainless', cost: '$50', best: 'Senior favorite. Pull-out display. Easy buttons. 11lb capacity.', good: 'Best overall.' },
  { name: 'Etekcity Digital Scale', cost: '$15', best: 'Cheap and accurate. AAA batteries, no charging.', good: 'Best budget.' },
  { name: 'Greater Goods Nourish', cost: '$25', best: 'Built-in nutrition counter. Type food, get calories + macros.', good: 'Best for diet tracking.' },
  { name: 'Escali Primo', cost: '$30', best: 'Most accurate at low weights. Loved by bakers.', good: 'Best for baking.' },
  { name: 'Hario V60 Drip Scale', cost: '$80', best: 'Built-in timer. For coffee enthusiasts.', good: 'Best for coffee.' },
];

export default function KitchenScalePicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Kitchen Scale Picks for Seniors | TekSure" description="OXO, Etekcity, Greater Goods. Plain-English picks for kitchen scales — for baking, weight loss, and accurate cooking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Kitchen Scale Picks</h1>
          <p className="text-lg text-muted-foreground">Better baking + portion control.</p>
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
            <h2 className="font-bold text-xl mb-3">Why a kitchen scale</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Better baking</strong> — flour cup measurements vary 30%. Weight is exact.</li>
              <li><strong>Portion control</strong> — for diabetes, weight loss.</li>
              <li><strong>Less dishes</strong> — measure into mixing bowl.</li>
              <li><strong>Tare</strong> = zero out container, weigh just contents.</li>
              <li><strong>Mailing</strong> — packages, postcards.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sized + senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pull-out display (OXO) — see weight even when bowl covers display.</li>
              <li>Backlit display — easier to read.</li>
              <li>g/oz toggle button.</li>
              <li>Auto-shutoff saves battery.</li>
              <li>11lb / 5kg capacity covers all home use.</li>
              <li>0.1g accuracy for tiny things (yeast).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where it really shines</h3>
            <p className="text-sm text-muted-foreground">Sourdough bread baking, canning jam (need exact sugar ratios), pet food portioning, and packing for shipping. Worth the $25-50 for any one of those uses.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
