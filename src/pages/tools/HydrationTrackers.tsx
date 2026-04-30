import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

const APPS = [
  { name: 'WaterMinder', cost: 'FREE / $5/yr Premium', best: 'Simple. Tracks ounces or liters. Customizable goals.', good: 'Best free.' },
  { name: 'Hidrate Spark Bottle', cost: '$50-90 + free app', best: 'Smart bottle glows when you need water. Auto-tracks.', good: 'Best smart bottle.' },
  { name: 'Apple Health Hydration', cost: 'FREE (built-in iPhone)', best: 'Type in Health app. Apple Watch shortcuts.', good: 'Best for iPhone.' },
  { name: 'Plant Nanny', cost: 'FREE', best: 'Gamified — virtual plant grows when you drink water.', good: 'Best gamified.' },
];

export default function HydrationTrackers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hydration Trackers for Seniors | TekSure" description="Senior dehydration risk. Plain-English picks for water tracking apps + smart bottles. Stay hydrated." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hydration Trackers</h1>
          <p className="text-lg text-muted-foreground">Critical for senior health.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
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

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors dehydrate</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Thirst signal weakens</strong> with age. You don&apos;t feel thirsty when you should.</li>
              <li>Many medications (diuretics) increase fluid loss.</li>
              <li>Many seniors avoid water late to prevent night bathroom trips.</li>
              <li>Dehydration causes confusion, falls, kidney issues, hospitalization.</li>
              <li>1 in 3 senior ER visits involves dehydration component.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior daily target</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Aim 6-8 cups (48-64 oz) total fluid/day.</li>
              <li>Coffee, tea, soup, watermelon — all count.</li>
              <li>NOT alcohol — dehydrates.</li>
              <li>Adjust for kidney / heart conditions (ask doctor).</li>
              <li>Pee color = best gauge — pale yellow good, dark = drink more.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy strategies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drink 8 oz first thing in morning.</li>
              <li>One glass at every meal (3 = 24 oz).</li>
              <li>Always carry water bottle — Stanley, Hydro Flask, Yeti.</li>
              <li>Stop drinking 2 hours before bed.</li>
              <li>Set Echo / phone reminder every 2 hours.</li>
              <li>Add lemon, cucumber, frozen fruit for variety.</li>
              <li>Decaf herbal tea between meals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Smart bottle for memory</h3>
            <p className="text-sm text-muted-foreground">For seniors with memory issues — Hidrate Spark glowing bottle is GREAT. It glows when time to drink. Auto-tracks intake. Family can monitor remotely. $50-90 well spent if dehydration is repeating issue.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
