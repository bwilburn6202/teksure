import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

const PICKS = [
  { name: 'AeroGarden Bounty', cost: '$300', best: '9 plants. WiFi controls. Senior favorite.', good: 'Best overall.' },
  { name: 'AeroGarden Harvest', cost: '$120-150', best: '6 plants. Compact. Great starter.', good: 'Best beginner.' },
  { name: 'iDoo 12-Pod', cost: '$80', best: '12 plants. Cheaper alternative.', good: 'Best budget.' },
  { name: 'Click and Grow Smart Garden 9', cost: '$200', best: 'Soil-based. Beautiful design.', good: 'Best design.' },
];

export default function AeroGardenForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AeroGarden for Seniors | TekSure" description="Indoor garden without dirt. Plain-English hydroponic guide for senior gardeners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AeroGarden + Hydroponics</h1>
          <p className="text-lg text-muted-foreground">Garden inside. No dirt. Year-round.</p>
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
            <h2 className="font-bold text-xl mb-3">Why senior-friendly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No bending — countertop height.</li>
              <li>No dirt = no mess.</li>
              <li>Water + light automatic.</li>
              <li>Apartment / condo friendly.</li>
              <li>Year-round fresh herbs + greens.</li>
              <li>Reminds when to add water + nutrients.</li>
              <li>Therapy + activity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best plants</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lettuce + greens</strong> — fastest, easiest.</li>
              <li><strong>Herbs</strong> — basil, parsley, mint, rosemary.</li>
              <li><strong>Cherry tomatoes</strong> — slow but rewarding.</li>
              <li><strong>Strawberries</strong> — long-lasting plants.</li>
              <li><strong>Peppers</strong> — small varieties.</li>
              <li>Skip: large veggies (squash, corn).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (15 min)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Place near electrical outlet.</li>
              <li>Fill water reservoir.</li>
              <li>Insert seed pods.</li>
              <li>Add nutrients per instructions.</li>
              <li>Plug in. Light auto-on.</li>
              <li>Done. Reminds when to refill.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Costs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Seed pods: $4-15 per pod (lasts 2-6 months).</li>
              <li>Use reusable pods + own seeds = much cheaper.</li>
              <li>Nutrients: $30/yr.</li>
              <li>Electricity: $5-10/month.</li>
              <li>Total: $300/year first, then $100-200/year.</li>
              <li>Pays back in store-bought herbs saved.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Therapy benefit</h3>
            <p className="text-sm text-muted-foreground">Indoor gardening proven to reduce depression + anxiety. Daily caring routine. Mindful + grounding. Senior living facilities install for residents. Especially valuable in winter / for those with limited mobility. Watching things grow = quiet joy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
