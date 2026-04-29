import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ship } from 'lucide-react';

const LINES = [
  { name: 'Viking River Cruises', cost: '$3K-10K/week', best: 'Most popular. Best service. Senior favorite.', good: 'Best overall.' },
  { name: 'Avalon Waterways', cost: '$3K-7K/week', best: 'Premium river cruising.', good: 'Best premium.' },
  { name: 'AmaWaterways', cost: '$3K-8K/week', best: 'Active cruising — bikes + hikes.', good: 'Best active.' },
  { name: 'Uniworld', cost: '$5K-15K/week', best: 'Luxury all-inclusive.', good: 'Best luxury.' },
  { name: 'Scenic', cost: '$4K-9K/week', best: 'Australian, all-inclusive.', good: 'Best all-inclusive.' },
];

export default function RiverCruiseGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="River Cruises for Seniors | TekSure" description="Calmer than ocean cruises. Plain-English river cruise guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ship className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">River Cruises</h1>
          <p className="text-lg text-muted-foreground">Senior favorite. Calmer. Smaller ships. More inclusive.</p>
        </div>

        <div className="space-y-3 mb-6">
          {LINES.map(l => (
            <Card key={l.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{l.name}</h3>
                  <span className="text-sm font-semibold text-primary">{l.cost}</span>
                </div>
                <p className="text-sm">{l.best}</p>
                <p className="text-sm text-muted-foreground">{l.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">River cruise advantages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NO seasickness (vs ocean).</li>
              <li>180 passengers vs 4,000 ocean.</li>
              <li>Dock right in cities — walk off.</li>
              <li>Includes tours, drinks, gratuities, WiFi.</li>
              <li>Same ship, different city daily.</li>
              <li>Senior-paced — no walking miles to terminal.</li>
              <li>Adult-only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best routes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Danube</strong> (Germany, Austria, Hungary) — most popular.</li>
              <li><strong>Rhine</strong> (Switzerland, Germany, Netherlands).</li>
              <li><strong>Seine</strong> (France) — Paris + Normandy.</li>
              <li><strong>Mekong</strong> (Vietnam, Cambodia) — exotic.</li>
              <li><strong>Mississippi</strong> (USA) — American Queen.</li>
              <li><strong>Nile</strong> (Egypt) — pyramids + temples.</li>
              <li>Christmas Markets cruises (December) huge.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One unpacking — visit multiple cities.</li>
              <li>Walking distance everywhere.</li>
              <li>Wheelchair accessible cabins.</li>
              <li>Slow-paced shore excursions.</li>
              <li>Many senior travelers — make friends.</li>
              <li>Dietary restrictions accommodated.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save on cruises</h3>
            <p className="text-sm text-muted-foreground">Book 12+ months ahead for best cabins. Or wait for last-minute deals (sometimes 50% off). AAA + Costco Travel offer river cruise discounts. Single supplements waived sometimes. Off-season (March, November) much cheaper. Travel insurance ESSENTIAL.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
