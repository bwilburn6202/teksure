import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wine } from 'lucide-react';

export default function WineTastingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wine Tasting for Seniors | TekSure" description="Enjoy wine without expert. Plain-English senior wine guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wine Tasting for Seniors</h1>
          <p className="text-lg text-muted-foreground">Find what you like. Enjoy responsibly.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior moderation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior limit: 1 drink/day women, 2 men.</li>
              <li>Some research shows less = better.</li>
              <li>Talk to doctor if on medications.</li>
              <li>Wine still has calories + sugar.</li>
              <li>Hydrate water alongside.</li>
              <li>Quality over quantity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to taste</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local wineries — many states have.</li>
              <li>Wine bars — by-the-glass.</li>
              <li>Whole Foods / Trader Joe&apos;s tastings.</li>
              <li>Costco $5-15 wine surprisingly good.</li>
              <li>Wine.com — flights mailed.</li>
              <li>Senior travel — wine country tours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior favorites by type</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Red — easy</strong>: Pinot Noir, Merlot.</li>
              <li><strong>Red — bold</strong>: Cabernet, Malbec.</li>
              <li><strong>White — crisp</strong>: Sauvignon Blanc, Pinot Grigio.</li>
              <li><strong>White — buttery</strong>: Chardonnay.</li>
              <li><strong>Sweet</strong>: Riesling, Moscato.</li>
              <li><strong>Sparkling</strong>: Prosecco (cheaper than Champagne).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheap good wine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Trader Joe&apos;s</strong> — &quot;Two Buck Chuck&quot; Charles Shaw.</li>
              <li><strong>Costco Kirkland</strong> — quality at price.</li>
              <li><strong>Total Wine</strong> — selection + sales.</li>
              <li>$10-15 bottles often great.</li>
              <li>Don&apos;t overspend — find taste preferences.</li>
              <li>Wine.com 6-bottle deals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wine club</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local winery wine clubs.</li>
              <li>Discover new bottles.</li>
              <li>Member events.</li>
              <li>Friends + tasting community.</li>
              <li>Senior-popular hobby.</li>
              <li>Vivino app — track favorites.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Travel + wine</h3>
            <p className="text-sm text-muted-foreground">Napa, Sonoma, Willamette, Finger Lakes — premier US regions. Tuscany, Rioja, Burgundy international. Senior-paced wine tours via Tauck, VBT. Wine + travel = retirement bliss.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
