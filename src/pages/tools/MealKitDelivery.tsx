import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Soup } from 'lucide-react';

const SVCS = [
  { name: 'HelloFresh', cost: '$8-13/serving', best: 'Most popular. Reliable. 30+ recipes/week. Senior-friendly recipes.', good: 'Best overall.' },
  { name: 'Blue Apron', cost: '$8-12/serving', best: 'Slightly more "chef-y" recipes. Premium feel.', good: 'Best for foodies.' },
  { name: 'Home Chef', cost: '$8-10/serving', best: 'Many "no prep" or "oven-ready" options. Simple.', good: 'Best for ease.' },
  { name: 'Factor 75', cost: '$11-15/meal', best: 'PRE-MADE, just heat. Diabetic, keto, low-sodium options.', good: 'Best for no-cook.' },
  { name: 'Mom&apos;s Meals', cost: '$7-10/meal', best: 'Senior-focused. Often free with Medicare Advantage. Heart, diabetic, kidney diets.', good: 'Best for seniors.' },
  { name: 'Magic Kitchen', cost: '$11-16/meal', best: 'Frozen pre-made. Many condition-specific menus.', good: 'Best premium pre-made.' },
];

export default function MealKitDelivery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meal Kit Delivery Compared | TekSure" description="HelloFresh, Mom&apos;s Meals, Factor. Plain-English picks for meal kits and pre-made meal services for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Soup className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meal Kit Delivery</h1>
          <p className="text-lg text-muted-foreground">From cook-it-yourself to heat-and-eat.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free for many seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Medicare Advantage</strong> — many plans cover Mom&apos;s Meals or similar 14-30 days post-hospital, free.</li>
              <li><strong>SNAP</strong> — covers HelloFresh, Hungryroot, Imperfect Foods.</li>
              <li><strong>Meals on Wheels</strong> — free or low-cost daily delivery for homebound. mealsonwheelsamerica.org.</li>
              <li><strong>Older Americans Act funded programs</strong> — call Area Agency on Aging.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick decision</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Like to cook</strong> — HelloFresh or Blue Apron.</li>
              <li><strong>Don&apos;t want to chop</strong> — Home Chef "oven-ready" line.</li>
              <li><strong>No cooking, just heat</strong> — Factor 75, Mom&apos;s Meals, Magic Kitchen.</li>
              <li><strong>Diabetic / heart / kidney</strong> — Mom&apos;s Meals or Magic Kitchen.</li>
              <li><strong>Recovery from surgery</strong> — Mom&apos;s Meals (Medicare often covers).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">First-week deals</h3>
            <p className="text-sm text-muted-foreground">All meal kits run heavy promos for first-time customers — sometimes 50-70% off first 4 weeks. Try one for a month, decide. Cancel anytime online (avoid the phone-only cancellations).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
