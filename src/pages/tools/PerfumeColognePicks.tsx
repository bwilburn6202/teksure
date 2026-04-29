import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flower2 } from 'lucide-react';

export default function PerfumeColognePicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Perfume + Cologne Picks for Seniors | TekSure" description="Sensitive-skin friendly fragrances. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flower2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Perfume + Cologne</h1>
          <p className="text-lg text-muted-foreground">Sensitive skin. Fewer chemicals.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior care?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Skin thinner — easier irritation.</li>
              <li>Allergies often worse with age.</li>
              <li>Some retirement homes ban heavy fragrances.</li>
              <li>Senses dull — over-spray easy.</li>
              <li>Quality over quantity.</li>
              <li>Subtle better than overwhelming.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Women&apos;s picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Chanel No. 5</strong> — timeless, classic.</li>
              <li><strong>Estee Lauder Beautiful</strong> — soft floral.</li>
              <li><strong>Lancome La Vie Est Belle</strong> — sweet.</li>
              <li><strong>Marc Jacobs Daisy</strong> — youthful.</li>
              <li><strong>Jo Malone</strong> — light, sophisticated.</li>
              <li><strong>Burberry Brit</strong> — fresh, modern.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Men&apos;s picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Old Spice (classic)</strong> — affordable.</li>
              <li><strong>Tom Ford Tuscan Leather</strong> — premium.</li>
              <li><strong>Ralph Lauren Polo</strong> — classic.</li>
              <li><strong>Dolce &amp; Gabbana Pour Homme</strong>.</li>
              <li><strong>Acqua di Gio</strong> — fresh.</li>
              <li><strong>Brut</strong> — vintage, recognizable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hypoallergenic options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Clean Reserve</strong> — natural ingredients.</li>
              <li><strong>Stella McCartney</strong>.</li>
              <li><strong>Pacifica</strong> — vegan + cruelty-free.</li>
              <li><strong>Henry Rose</strong> — allergen-free.</li>
              <li><strong>The Body Shop White Musk</strong>.</li>
              <li>Skin test inside elbow first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Application tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pulse points — wrist, neck.</li>
              <li>Don&apos;t rub wrists together (breaks scent).</li>
              <li>Hair holds fragrance well.</li>
              <li>Less is more — 1-2 sprays.</li>
              <li>Apply after shower (clean skin).</li>
              <li>Refresh with lighter mid-day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to buy + sample</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sephora</strong> — sample before buying.</li>
              <li><strong>Ulta</strong> — wide selection.</li>
              <li><strong>Macy&apos;s / Nordstrom</strong> — counter testing.</li>
              <li><strong>Scentbird</strong> — $15/mo subscription samples.</li>
              <li><strong>FragranceX</strong> — discount online.</li>
              <li>Free samples often.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Sensory loss reality</h3>
            <p className="text-sm text-muted-foreground">Smell weakens with age. Easy to over-spray (don&apos;t smell yourself). Ask spouse / friend &quot;is this too much?&quot;. Better err under than over. Refresh subtly. Some seniors switch to essential oils — gentler. Lavender, sandalwood, rose. Diffusers in home — pleasant ambient scent.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
