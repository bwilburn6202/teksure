import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Microwave } from 'lucide-react';

const PICKS = [
  { name: 'Breville Smart Oven Pro', cost: '$280', best: 'Premium. 10 functions. Senior favorite.', good: 'Best overall.' },
  { name: 'Cuisinart TOA-65', cost: '$180', best: 'Air fryer + toaster oven. Great value.', good: 'Best with air fryer.' },
  { name: 'Hamilton Beach Easy Reach', cost: '$70', best: 'Roll-back door. Easy access. Senior-specific.', good: 'Best easy access.' },
  { name: 'Black+Decker 4-Slice', cost: '$50', best: 'Cheap + simple. Just toaster oven.', good: 'Best budget.' },
  { name: 'June Smart Oven', cost: '$600', best: 'AI-powered. Camera + auto-recognize foods.', good: 'Best smart.' },
];

export default function ToasterOvenGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Toaster Oven Guide for Seniors | TekSure" description="Replace big oven for small meals. Plain-English toaster oven picks for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Microwave className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Toaster Oven Guide</h1>
          <p className="text-lg text-muted-foreground">Cook small without big oven heat.</p>
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
            <h2 className="font-bold text-xl mb-3">Why seniors love them</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heats up in 2-3 min (full oven 10-15).</li>
              <li>Less electricity for small meals.</li>
              <li>Don&apos;t heat whole kitchen in summer.</li>
              <li>Easier cleanup.</li>
              <li>Counter height — no bending.</li>
              <li>Auto-shutoff for safety.</li>
              <li>Many include air fryer mode.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Big buttons + clear display.</li>
              <li>Knobs (vs touchscreen).</li>
              <li>Light inside oven.</li>
              <li>Pull-out crumb tray.</li>
              <li>Stay-cool exterior.</li>
              <li>Beeps when done.</li>
              <li>Auto-shutoff.</li>
              <li>Hamilton Beach roll-back door = easier access.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can cook</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>4-slice toast.</li>
              <li>1-2 person dinners.</li>
              <li>Frozen pizza.</li>
              <li>Reheating leftovers (better than microwave).</li>
              <li>Roasted vegetables.</li>
              <li>Small chicken or pork.</li>
              <li>Cookies, biscuits.</li>
              <li>Air-fried foods if model includes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip your big oven</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many seniors stop using oven entirely.</li>
              <li>Less energy + heat.</li>
              <li>Hot meal in 15 min not 45.</li>
              <li>Microwave + toaster oven + slow cooker = covers most cooking.</li>
              <li>Oven only for holidays / big meals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Air fryer combo</h3>
            <p className="text-sm text-muted-foreground">Cuisinart TOA-65 + Breville Combi = toaster oven + air fryer + dehydrator. One appliance replaces 3. Senior favorite. Air fry: chicken, fries, salmon, vegetables — healthier than deep frying. See /tools/air-fryer-basics for recipes.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
