import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors } from 'lucide-react';

export default function HairCareForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hair Care for Seniors | TekSure" description="Mature hair care. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scissors className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hair Care for Seniors</h1>
          <p className="text-lg text-muted-foreground">Thinning, gray, dry — manage all.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mature hair changes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drier — less oil production.</li>
              <li>Thinner — fewer follicles.</li>
              <li>Gray — pigment cells decline.</li>
              <li>Slower growth.</li>
              <li>More fragile.</li>
              <li>Adapt routine accordingly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hydration first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wash less often — every 2-3 days.</li>
              <li>Sulfate-free shampoo.</li>
              <li>Deep conditioner weekly.</li>
              <li>Hair oil at ends.</li>
              <li>Argan / coconut / castor.</li>
              <li>Avoid hot water — lukewarm.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Thinning hair</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>See doctor about cause.</li>
              <li>Thyroid, iron deficiency common.</li>
              <li>Minoxidil 5% (Rogaine) — works.</li>
              <li>Shorter cuts make hair look fuller.</li>
              <li>Volumizing shampoo.</li>
              <li>Avoid tight ponytails.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Gray hair embrace</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Silver shampoo (Klorane) prevents yellowing.</li>
              <li>Show off natural — popular trend.</li>
              <li>Stop dyeing = healthier hair.</li>
              <li>Glamorous gray — Cindy Joseph style.</li>
              <li>Save $1,000+/yr stop coloring.</li>
              <li>Highlights blend gray gradually.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best senior cuts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lob</strong> — long bob, easy.</li>
              <li><strong>Pixie</strong> — short, low-maintenance.</li>
              <li><strong>Layered shoulder length</strong>.</li>
              <li><strong>Bob with bangs</strong> — softens forehead lines.</li>
              <li>Avoid: very long hair (drags face down).</li>
              <li>Update every 6 weeks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior money-savers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Beauty schools cut for $20.</li>
              <li>Blow-dry training for free.</li>
              <li>Costco hair products.</li>
              <li>Senior discount Tuesdays at salons.</li>
              <li>Dry shampoo extends time between washes.</li>
              <li>Coconut oil = expensive deep conditioner.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Diet + hair</h3>
            <p className="text-sm text-muted-foreground">Hair grows from what you eat. Protein — eggs, salmon, beans. Iron — leafy greens, beef. Biotin — eggs, nuts. Vitamin D — sun, supplement. Omega-3 — fish oil. Stress reduction. 7-8 hours sleep. Hair changes signal health changes — listen to your body.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
