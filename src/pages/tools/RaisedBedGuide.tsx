import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function RaisedBedGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Raised Garden Beds for Seniors | TekSure" description="No bending. No knees. Plain-English picks for senior-friendly raised garden beds — kits, DIY, height tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Raised Bed Garden Guide</h1>
          <p className="text-lg text-muted-foreground">Easier on knees + back.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best heights for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>24"-30" tall</strong> — comfortable kneeling/sitting on stool.</li>
              <li><strong>30"-36" tall</strong> — work standing, bend slightly.</li>
              <li><strong>36"-42" tall</strong> — fully standing, no bending. Best for arthritis.</li>
              <li>Most ground beds: 12-18" — still requires bending. Skip for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best kits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Greenes Fence elevated</strong> ($120-200) — 30" cedar bed. Easy assembly.</li>
              <li><strong>Vita Vitabox</strong> ($150-300) — vinyl, doesn&apos;t rot, 32" tall.</li>
              <li><strong>Yaheetech 32" elevated</strong> ($60) — cheaper plastic.</li>
              <li><strong>Birdies metal beds</strong> ($150-400) — 17"-32". Heavy duty.</li>
              <li><strong>Galvanized steel watering trough</strong> ($150-300) — DIY favorite. 24-36" tall.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best plants for raised beds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tomatoes</strong> — top performer.</li>
              <li><strong>Lettuce + greens</strong> — quick + easy.</li>
              <li><strong>Peppers</strong> — both sweet + hot.</li>
              <li><strong>Herbs</strong> — basil, oregano, thyme, parsley.</li>
              <li><strong>Cucumbers</strong> — vine on trellis.</li>
              <li><strong>Strawberries</strong> — perennial.</li>
              <li><strong>Carrots, radishes</strong> — quick crops.</li>
              <li>SKIP: corn (needs space), pumpkins (sprawl), potatoes (need depth).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheap soil filler</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bottom 50%: branches, sticks, logs, leaves (Hugelkultur).</li>
              <li>Middle 30%: compost or yard waste.</li>
              <li>Top 20%: quality garden soil + organic mix.</li>
              <li>Saves hundreds vs filling with all topsoil.</li>
              <li>Quality soil: Costco / Home Depot 1.5 cu ft bags $5-8.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Drip irrigation = magic</h3>
            <p className="text-sm text-muted-foreground">$30 drip irrigation kit + smart timer = automatic watering. No more dragging hose. Saves 50% water vs sprinkler. Plants happier. Best $30 senior gardener can spend.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
