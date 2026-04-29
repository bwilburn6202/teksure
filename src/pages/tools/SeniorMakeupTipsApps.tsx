import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorMakeupTipsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Makeup Tips for Seniors | TekSure" description="Mature skin makeup. Plain-English senior beauty guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Makeup</h1>
          <p className="text-lg text-muted-foreground">Less is more. Confidence + glow.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mature skin basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hydrate first — primer + moisturizer.</li>
              <li>Less foundation = less settling in lines.</li>
              <li>Cream products beat powder.</li>
              <li>Use brush, not sponge.</li>
              <li>Avoid shimmer (highlights wrinkles).</li>
              <li>Matte less aging.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5-step morning routine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1. Moisturize with SPF.</li>
              <li>2. Tinted moisturizer or BB cream (not foundation).</li>
              <li>3. Cream blush — apple of cheek.</li>
              <li>4. Brow pencil — fill lightly.</li>
              <li>5. Lip gloss with color.</li>
              <li>Total time: 5 minutes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorite brands</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Laura Mercier</strong> — tinted moisturizer.</li>
              <li><strong>Bobbi Brown</strong> — natural look.</li>
              <li><strong>NARS</strong> — sheer foundation.</li>
              <li><strong>Boom! by Cindy Joseph</strong> — over-50 line.</li>
              <li><strong>Trinny London</strong> — cream products.</li>
              <li>Avoid: drugstore powder foundation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eye makeup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lighter shadow than younger.</li>
              <li>Avoid frosted shadow.</li>
              <li>Pencil liner over liquid (smudges).</li>
              <li>Brown more flattering than black.</li>
              <li>Lengthening mascara — not waterproof.</li>
              <li>Magnifying mirror essential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lip color</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lipliner first — stops bleeding.</li>
              <li>Cream lipstick over matte (drying).</li>
              <li>Pink/coral more flattering than dark red.</li>
              <li>Plumping gloss = fuller look.</li>
              <li>Reapply throughout day.</li>
              <li>Hydrating formulas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps + tutorials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YouTube</strong> — Trinny London, Hot &amp; Flashy.</li>
              <li><strong>YouCam Makeup</strong> — try styles virtually.</li>
              <li><strong>L&apos;Oreal Style My Hair</strong>.</li>
              <li><strong>Sephora app</strong> — virtual try-on.</li>
              <li><strong>Boom! by Cindy Joseph</strong> — videos.</li>
              <li>Local Sephora makeover (free).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Skip these aging mistakes</h3>
            <p className="text-sm text-muted-foreground">Heavy foundation — settles in lines. Black eyeliner all around — hardens face. Dark lipstick — ages. Frosted shadow — magnifies wrinkles. Caked-on powder. Skipping moisturizer. Same makeup as 20s. Adapt to current face. Less is genuinely more after 50. Confidence matters most.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
