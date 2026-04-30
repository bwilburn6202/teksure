import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Boxes } from 'lucide-react';

const PICKS = [
  { name: 'Public Storage', cost: '$30-300/mo', best: 'Largest. Climate-controlled options. Online quote.', good: 'Best overall.' },
  { name: 'Extra Space Storage', cost: '$30-300/mo', best: '#2 in US. Good app. Senior senior discounts available.', good: 'Best 2nd choice.' },
  { name: 'CubeSmart', cost: '$30-300/mo', best: 'Cleaner facilities than competitors typically.', good: 'Best clean facilities.' },
  { name: 'Life Storage', cost: '$30-300/mo', best: 'Now part of Extra Space. Same quality.', good: 'Best alternative.' },
  { name: 'PODS / U-Pack', cost: '$200-800/mo', best: 'They drop container at your house. You fill. They store OR move.', good: 'Best for moving.' },
];

export default function StorageUnitPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Storage Unit Picks for Seniors | TekSure" description="Public Storage, Extra Space, CubeSmart. Plain-English picks for senior storage during moves, downsizing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Boxes className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Storage Unit Picks</h1>
          <p className="text-lg text-muted-foreground">Temporary storage. Pick smart.</p>
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
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>5×10 typical for 1-2 bedroom downsize</strong>.</li>
              <li><strong>10×10 for 3 bedroom</strong>.</li>
              <li><strong>10×20 for 4+ bedroom</strong>.</li>
              <li><strong>Climate control</strong> for furniture, books, electronics, art.</li>
              <li><strong>Ground floor</strong> if possible — easier loading.</li>
              <li><strong>Drive-up access</strong> — no carrying through hallways.</li>
              <li>Inquire about senior + military discounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t store too long</h2>
            <p className="text-sm">Average senior pays $100-200/mo. Over 5 years = $6-12K. Most "stored" stuff stays stored forever — kids never want it. Set 6-12 month limit. After that, sort + dispose.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PODS for moves</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>PODS drops container at home.</li>
              <li>You fill at your pace.</li>
              <li>They store at warehouse OR move to new home.</li>
              <li>Best for: cross-country, multi-month moves, gradual move-in.</li>
              <li>Costlier than truck rental but no driving.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Insurance</h3>
            <p className="text-sm text-muted-foreground">Storage company insurance is OPTIONAL but recommended. $10-30/mo. Or check if homeowners/renters insurance covers off-site storage. Don&apos;t store priceless heirlooms — fire / flood happens.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
