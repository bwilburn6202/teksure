import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flower2 } from 'lucide-react';

export default function ContainerGardening() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Container Gardening for Seniors | TekSure" description="Apartment + condo + small yard. Plain-English picks for container gardens. Patio + deck friendly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flower2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Container Gardening</h1>
          <p className="text-lg text-muted-foreground">Patio. Deck. Apartment.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best containers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Self-watering planters</strong> — Earthbox ($35), Vegepod, GroBucket.</li>
              <li><strong>Fabric grow bags</strong> — $5-15, breathable. Roots don&apos;t circle.</li>
              <li><strong>Half whiskey barrel</strong> — beautiful + roomy. $30-60.</li>
              <li><strong>5-gallon nursery pots</strong> — cheap. Drill drain holes.</li>
              <li><strong>Tower garden</strong> — vertical. Strawberries + lettuce. $50-300.</li>
              <li>NEVER use containers without drainage holes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best container plants</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tomatoes</strong> — Patio Princess, Better Bush. 5+ gallon.</li>
              <li><strong>Peppers</strong> — happy in containers.</li>
              <li><strong>Herbs</strong> — basil, mint, oregano, parsley.</li>
              <li><strong>Strawberries</strong> — multi-tier strawberry pot.</li>
              <li><strong>Lettuce</strong> — fast + reseeds.</li>
              <li><strong>Cherry tomatoes</strong> — productive.</li>
              <li><strong>Bush beans</strong> — pole bean variety.</li>
              <li><strong>Lemon trees</strong> — Meyer lemon dwarf.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sun + water needs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vegetables need 6+ hrs direct sun.</li>
              <li>Herbs OK in 4-6 hrs.</li>
              <li>Containers DRY OUT FAST — water daily in summer.</li>
              <li>Self-watering containers reduce daily care.</li>
              <li>Saucers under pots catch overflow.</li>
              <li>Mulch top to retain moisture.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pots on rolling caster bases — easy to move.</li>
              <li>Lighter potting mix (peat + perlite) — easier to lift.</li>
              <li>Group containers — reduces watering trips.</li>
              <li>Long-handled trowel — saves bending.</li>
              <li>Garden cart for moving heavy bags.</li>
              <li>Timer for hose/irrigation — set + forget.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best for renters</h3>
            <p className="text-sm text-muted-foreground">Container gardens come with you. Move? Bring your tomato plant. Apartment balcony, retirement community deck, condo patio — all work. Best gardening for downsizing seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
