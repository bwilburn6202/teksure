import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hand } from 'lucide-react';

export default function PotteryClassesGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pottery Classes for Senior Beginners | TekSure" description="Hand-build or wheel pottery for seniors. Plain-English starter guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hand className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pottery for Seniors</h1>
          <p className="text-lg text-muted-foreground">Therapy + creativity + tangible results.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why pottery for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tactile + grounding.</li>
              <li>Strengthens hands (arthritis benefit).</li>
              <li>Creates real, useful objects.</li>
              <li>Patient, slow craft.</li>
              <li>Studies show reduces depression.</li>
              <li>Class = social activity.</li>
              <li>Mistakes teach — ego dissolves.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find pottery classes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Community college art departments</strong> — most affordable.</li>
              <li><strong>Local pottery studios</strong> — search Google maps.</li>
              <li><strong>Senior centers</strong> — often have classes.</li>
              <li><strong>YMCA + park districts</strong>.</li>
              <li><strong>OLLI</strong> (Osher Lifelong Learning) — many do pottery.</li>
              <li><strong>Try class first</strong> — many offer drop-in.</li>
              <li>Cost: $200-400 for 8-week course.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hand-building vs wheel</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hand-building</strong> — easier start. Pinch, coil, slab.</li>
              <li><strong>Wheel</strong> — iconic but harder. Takes weeks to learn.</li>
              <li>Most studios teach both.</li>
              <li>Senior tip: start hand-building, add wheel later.</li>
              <li>Hand-building easier on arthritis.</li>
              <li>Wheel = back stress without good chair.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First projects</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pinch pots — squeeze ball into cup.</li>
              <li>Coil bowls.</li>
              <li>Slab plates.</li>
              <li>Mug with handle.</li>
              <li>Wedding/birthday gifts.</li>
              <li>Holiday ornaments.</li>
              <li>Small planters for herbs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Studio membership</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>After classes — many studios offer membership.</li>
              <li>$80-200/month for unlimited studio time.</li>
              <li>Includes clay, glazes, kiln firing.</li>
              <li>Like gym membership for pottery.</li>
              <li>Great social hobby.</li>
              <li>Friends share knowledge.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No studio? Air-dry clay</h3>
            <p className="text-sm text-muted-foreground">Air-dry clay ($10) needs no kiln. Crayola, Das brands. Make small sculptures, ornaments, jewelry. Limited durability but fun starter. Polymer clay (Sculpey, $5-15) bakes in home oven. Many senior crafts use polymer clay successfully. Try before committing to studio.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
