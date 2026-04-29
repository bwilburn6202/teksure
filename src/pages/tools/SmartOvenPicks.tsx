import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flame } from 'lucide-react';

const PICKS = [
  { name: 'Breville Smart Oven Air Fryer Pro', cost: '$400', best: 'Senior favorite. Air fry + bake + toast + dehydrate. Real glass + stainless. Lasts decades.', good: 'Best overall.' },
  { name: 'Cuisinart TOA-65 Air Fryer Toaster Oven', cost: '$200', best: 'Cheaper than Breville. Strong air fry. Big enough for whole chicken.', good: 'Best mid-price.' },
  { name: 'Ninja Foodi DualZone XL', cost: '$170', best: '2 baskets. Cook 2 things at once. No big cleaning.', good: 'Best two-meal.' },
  { name: 'Anova Precision Oven', cost: '$700', best: 'Steam + convection. Restaurant-grade. App-controlled.', good: 'Best high-end.' },
  { name: 'Tovala Smart Oven', cost: '$130 + meal subscription', best: 'Scan barcode on Tovala meal kit, oven cooks automatically.', good: 'Best for ready-meals.' },
  { name: 'Basic toaster oven', cost: '$30-60', best: 'If you just need toast + reheating, save the money.', good: 'Best basic.' },
];

export default function SmartOvenPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Countertop Oven Picks | TekSure" description="Breville, Cuisinart, Ninja Foodi. Plain-English picks for smart air-fryer ovens that replace 3-4 small appliances." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flame className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Countertop Ovens</h1>
          <p className="text-lg text-muted-foreground">One device. Many cooking modes.</p>
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
            <h2 className="font-bold text-xl mb-3">Why countertop ovens beat the big oven</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Faster preheat (3-5 min vs 15+).</li>
              <li>1/3 the energy.</li>
              <li>Don&apos;t heat up the whole kitchen in summer.</li>
              <li>Air-fry mode = healthier "fried" food.</li>
              <li>Many functions = replaces toaster + air fryer + dehydrator.</li>
              <li>Easier to clean than full oven.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For seniors specifically</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Big readable buttons + display (Breville is best).</li>
              <li>Auto-shutoff (peace of mind).</li>
              <li>Counter height — no bending to use big oven.</li>
              <li>Smaller portions for 1-2 people = less food waste.</li>
              <li>Reheats leftovers way better than microwave.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for downsizing kitchens</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>RV / motorhome cooking.</li>
              <li>Small apartment, no full oven.</li>
              <li>One cooking appliance does 80% of meals.</li>
              <li>Counter space — Breville under cabinet works.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Buy in spring</h3>
            <p className="text-sm text-muted-foreground">Costco, Wayfair, Amazon all run 25-40% off countertop ovens around Memorial Day, July 4, Black Friday. $400 Breville drops to $250-280. Worth waiting if you can.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
