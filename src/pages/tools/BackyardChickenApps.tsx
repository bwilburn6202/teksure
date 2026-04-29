import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

const APPS = [
  { name: 'Run-Chicken automatic coop door', price: '$170', best: 'Opens coop door at dawn, closes at dusk. Light-sensor or timer. Predator-proof.', good: 'Most beloved chicken-keeper gadget.' },
  { name: 'Brinsea Chick Safe Eco', price: '$200', best: 'Premium auto coop door.', good: 'Best premium pick.' },
  { name: 'Coop Tender app', cost: 'Free; Pro $5', best: 'Track egg laying, treatments, expenses.', best_text: 'For data-keepers.', good: 'Best chicken record app.' },
  { name: 'Wyze Cam in coop', cost: '$30', best: 'Watch your hens day or night. Predator detection.', good: 'Cheapest coop monitoring.' },
  { name: 'Chickenpedia (free site)', cost: 'FREE', best: 'Best chicken-keeping reference site.', good: 'Free encyclopedia.' },
  { name: 'BackyardChickens.com forum', cost: 'FREE', best: 'Largest US chicken-keeper community. Photos, advice.', good: 'Biggest community.' },
];

export default function BackyardChickenApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Backyard Chicken Apps & Smart Coops | TekSure" description="Raising backyard chickens? Plain-English picks for automatic coop doors, chicken record apps, and the best community forums." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Backyard Chicken Apps</h1>
          <p className="text-lg text-muted-foreground">Smart coop tech for the modern flock.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost ?? a.price}</span>
                </div>
                <p className="text-sm">{a.best_text ?? a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior chicken-keeping tips</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>3-6 hens for a typical family.</li>
              <li>Auto-door = sleep without worrying.</li>
              <li>Rain-proof feeder + waterer.</li>
              <li>Heated waterer for winter ($30).</li>
              <li>Cleaning system — deep litter method or sand bedding for less maintenance.</li>
              <li>Egg-aprons for chicks pecked too much.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Local rules</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Most US cities allow 3-6 hens; almost no roosters allowed.</li>
              <li>Check zoning + HOA rules first.</li>
              <li>Some cities require coop permits, distance from neighbors.</li>
              <li>Search "[your city] backyard chicken ordinance".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Most underrated senior hobby</h3>
            <p className="text-sm text-muted-foreground">Chickens give you fresh eggs, garden compost, and gentle daily routine. They\'re social. They\'re fun. They\'re lower-maintenance than dogs. Many seniors find their flock a true joy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
