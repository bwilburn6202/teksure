import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function EmbroideryForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Embroidery for Seniors | TekSure" description="Hand embroidery for seniors. Plain-English beginner guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Embroidery for Seniors</h1>
          <p className="text-lg text-muted-foreground">Hand-stitched art. Calm + portable.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why embroidery?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Slow + meditative.</li>
              <li>Portable — anywhere.</li>
              <li>Cheap to start ($20).</li>
              <li>Hand exercise.</li>
              <li>Personalize gifts.</li>
              <li>Calming for anxiety.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Starter kit ($20)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Embroidery hoop</strong> — 6 inch wood.</li>
              <li><strong>Cotton fabric</strong> — light color, plain weave.</li>
              <li><strong>Embroidery floss</strong> — DMC brand, multiple colors.</li>
              <li><strong>Embroidery needles</strong> — sharp tip.</li>
              <li><strong>Small scissors</strong>.</li>
              <li>Joann, Michaels — full kits available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5 starter stitches</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Backstitch</strong> — outlines, lettering.</li>
              <li><strong>Running stitch</strong> — simple, dashed line.</li>
              <li><strong>Satin stitch</strong> — fill shapes.</li>
              <li><strong>French knot</strong> — dots + textures.</li>
              <li><strong>Chain stitch</strong> — decorative outlines.</li>
              <li>Master these = many designs possible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly projects</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hand towels with initials.</li>
              <li>Pillow cases.</li>
              <li>Tea towels.</li>
              <li>Pillows with quotes.</li>
              <li>Wall hoops — display the hoop.</li>
              <li>Patches for clothes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vision-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Magnifying lamp</strong> ($40).</li>
              <li><strong>Lighter fabric</strong> — more contrast.</li>
              <li><strong>Larger needle, thicker floss</strong>.</li>
              <li><strong>Bigger hoop sizes</strong>.</li>
              <li><strong>Self-threading needles</strong>.</li>
              <li>Daylight LED lamp essential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Learn online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YouTube</strong> — Cutesy Crafts, Sarah Homfray.</li>
              <li><strong>DMC.com</strong> — free patterns + tutorials.</li>
              <li><strong>SewMagazine.com</strong> — beginner.</li>
              <li><strong>Etsy</strong> — affordable patterns ($3-8).</li>
              <li><strong>Instagram</strong> — #embroidery for inspiration.</li>
              <li>Library — embroidery books.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Memory pieces</h3>
            <p className="text-sm text-muted-foreground">Embroider grandkids&apos; names + birthdates on hoops — wall art. Stitch family names + dates onto pillow case. Recreate vintage handkerchief embroidery. One stitch at a time = lifetime keepsake. Take to medical appointments — calming wait.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
