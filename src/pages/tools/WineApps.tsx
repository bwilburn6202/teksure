import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wine } from 'lucide-react';

const APPS = [
  { name: 'Vivino', cost: 'FREE; Premium $5/mo', best: 'Most popular. Photograph any wine label, get ratings, price comparison, food pairing.', good: 'Best free wine app.' },
  { name: 'Delectable', cost: 'FREE', best: 'More serious tasters. Strong notes from sommeliers.', good: 'For serious enthusiasts.' },
  { name: 'CellarTracker', cost: 'Free; donations welcome', best: 'For tracking wine collection. Real database with 12M+ wines.', good: 'Best collection tracker.' },
  { name: 'Wine-Searcher', cost: 'Free', best: 'Find a specific wine in a US store. Compare prices.', good: 'Best for hunting bottles.' },
  { name: 'Wine.com', cost: 'Site/app', best: 'Buy wine online with $10/year shipping membership.', good: 'Best wine delivery.' },
  { name: 'Naked Wines', cost: 'Subscription model', best: 'Independent winemaker direct subscription.', good: 'Discovery model.' },
];

export default function WineApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wine Apps — Vivino, CellarTracker | TekSure" description="Photograph any wine label, see what others think, log your favorites. Plain-English picks for wine enthusiast apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wine Apps</h1>
          <p className="text-lg text-muted-foreground">Discover, track, share. From casual to serious.</p>
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

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First-time Vivino tour</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install Vivino. Sign up.</li>
              <li>Press camera button. Photograph a wine label.</li>
              <li>App shows ratings (1-5 stars), reviews, food pairing, price.</li>
              <li>Rate it yourself — your rating personalizes future recommendations.</li>
              <li>"Cellar" tab tracks every wine you\'ve had.</li>
              <li>"Explore" finds similar wines.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wine clubs worth knowing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Costco</strong> — best wine-per-dollar bargains in retail. The Kirkland branded wines are often legitimately good.</li>
              <li><strong>Naked Wines</strong> — direct from independent winemakers. $40-100/month subscription.</li>
              <li><strong>Cellars Wine Club</strong> — gift-giver and seasonal subscriptions.</li>
              <li><strong>Local wine shops</strong> — many run "wine club" subscriptions with hand-picked bottles. Build a relationship with the owner.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For your grandkids</h3>
            <p className="text-sm text-muted-foreground">Photograph wines from family weddings/anniversaries — saved in Vivino. Great keepsake AND lets you remember which wine you actually liked at someone\'s 50th anniversary.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
