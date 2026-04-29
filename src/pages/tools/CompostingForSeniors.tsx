import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function CompostingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Composting for Seniors | TekSure" description="Easy composting. Plain-English guide for senior gardeners — bins, what to add, troubleshooting." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Composting for Seniors</h1>
          <p className="text-lg text-muted-foreground">Free fertilizer. Less garbage.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bin picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tumbler bin</strong> ($100-200) — easy turn, no shoveling. Senior favorite.</li>
              <li><strong>Closed plastic bin</strong> ($50-100) — keeps animals out.</li>
              <li><strong>Open pile</strong> — free but slowest + animal access.</li>
              <li><strong>Bokashi bucket</strong> ($60) — indoor, quick. Includes meat/dairy.</li>
              <li><strong>Worm bin (vermicompost)</strong> — indoor, kids love.</li>
              <li>Tumblers easiest for seniors — no bending or heavy turning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to add (browns + greens)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>GREENS (nitrogen)</strong> — fruit/veggie scraps, coffee grounds, grass clippings, eggshells.</li>
              <li><strong>BROWNS (carbon)</strong> — dried leaves, cardboard, newspaper, pine needles.</li>
              <li>2-3 parts browns to 1 part greens.</li>
              <li>Small pieces decompose faster.</li>
              <li>Keep moist like wrung-out sponge.</li>
              <li>Turn every 1-2 weeks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DON&apos;T add</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Meat, fish, dairy (rats, smell).</li>
              <li>Pet waste (parasites).</li>
              <li>Oils + greasy food.</li>
              <li>Diseased plants.</li>
              <li>Weeds with seeds.</li>
              <li>Treated wood / glossy paper.</li>
              <li>Citrus + onions in worm bins.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Troubleshooting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Smells bad</strong> — too wet or too many greens. Add browns.</li>
              <li><strong>Not breaking down</strong> — too dry or too cold. Add water + greens.</li>
              <li><strong>Pests/animals</strong> — closed bin or no meat/dairy.</li>
              <li><strong>Fruit flies</strong> — bury food scraps under browns.</li>
              <li><strong>Compost ready</strong> — dark + crumbly + earthy smell. 3-12 months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easier alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Curbside composting</strong> — many cities offer green bin pickup.</li>
              <li><strong>Community gardens</strong> — drop scraps off, take finished compost.</li>
              <li><strong>Mulch in place</strong> — bury veggie scraps directly in garden.</li>
              <li><strong>Lasagna gardening</strong> — layer browns/greens, plant on top.</li>
              <li><strong>Apartment composting services</strong> — Curbside, BinTaste, etc.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free composting classes</h3>
            <p className="text-sm text-muted-foreground">Most counties have FREE Master Gardener composting classes. Search &quot;[your county] master gardener compost.&quot; Free finished compost often given away spring/fall. Reduces trash 30%+. Garden grows better. Win-win-win.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
