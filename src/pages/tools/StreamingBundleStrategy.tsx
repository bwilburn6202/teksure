import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

const BUNDLES = [
  { name: 'Disney+ Hulu Max bundle', price: '$17/mo (with ads) or $30/mo (no ads)', best: '3 services for one price. Great for variety.', good: 'Disney+ + Hulu + Max.' },
  { name: 'Apple One Family', price: '$23/mo', best: 'Apple Music + TV+ + Arcade + iCloud+ 200GB. Good if you use multiple Apple services.', good: 'Best for iOS-deep families.' },
  { name: 'Apple One Premier', price: '$38/mo', best: '6-person plan. Adds News+ + Fitness+ + 2TB iCloud.', good: 'Best for big Apple-using households.' },
  { name: 'Amazon Prime Video Channels', price: 'Various', best: 'Add MAX, AMC+, Paramount+ etc. AS channels in your Prime app.', good: 'Easiest single-bill management.' },
  { name: 'Verizon / T-Mobile streaming perks', price: 'FREE with plan', best: 'T-Mobile gives Apple TV+ and Netflix free with some plans. Verizon includes Disney bundle.', good: 'Check your phone plan benefits FIRST.' },
  { name: 'YouTube TV + standalones', price: '$83/mo + add-ons', best: 'Live TV (replaces cable) + add streaming services.', good: 'Cable replacement.' },
];

export default function StreamingBundleStrategy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Streaming Bundle Strategy — Best Deals 2025 | TekSure" description="Stop overpaying for separate streaming subscriptions. Plain-English bundle picks that save \$10-30/month." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Streaming Bundle Strategy</h1>
          <p className="text-lg text-muted-foreground">Bundle smartly. Save $10-30/month.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Check your benefits FIRST</h2>
            <p className="text-sm">Many of these are FREE through:</p>
            <ul className="text-sm list-disc pl-5 mt-2">
              <li><strong>T-Mobile</strong> — Apple TV+, Netflix Basic, Hulu free with some plans.</li>
              <li><strong>Verizon</strong> — Disney+/Hulu/Max bundle with some plans.</li>
              <li><strong>Walmart+</strong> — Paramount+ included.</li>
              <li><strong>AT&T</strong> — Max included with some plans.</li>
              <li><strong>Amex Platinum</strong> — Disney+ credit, Walmart+ credit.</li>
              <li><strong>Chase Sapphire</strong> — sometimes Apple subscription credits.</li>
            </ul>
            <p className="text-sm mt-2">Call carrier and credit card. Often you\'re paying for streaming you ALREADY HAVE.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {BUNDLES.map(b => (
            <Card key={b.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{b.name}</h3>
                  <span className="text-sm font-semibold text-primary">{b.price}</span>
                </div>
                <p className="text-sm">{b.best}</p>
                <p className="text-sm text-muted-foreground">{b.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annual vs monthly</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Most services 15-25% cheaper if paid annually.</li>
              <li>Apple TV+, Hulu, Disney+, Paramount+ all offer yearly discount.</li>
              <li>Black Friday + January often have year-long deals.</li>
              <li>Annual = commit. Monthly = pause when not watching.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For 60+ households</h3>
            <p className="text-sm text-muted-foreground">If you watch a few specific shows — pause subscriptions when not actively watching. Apple TV+ and Hulu both make this easy. Most retirees watching 2-3 hours a day pay $40-60 in bundles instead of $80-120 stacked separately.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
