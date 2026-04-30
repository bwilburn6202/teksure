import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors } from 'lucide-react';

export default function HairThinningOptions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hair Thinning Options for Seniors | TekSure" description="Senior hair loss: causes, treatments, wigs, acceptance. Plain-English guide for 65+." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scissors className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hair Thinning Options</h1>
          <p className="text-lg text-muted-foreground">Most seniors thin — many options.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why hair thins after 65</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Genetics — male/female pattern baldness.</li>
              <li>Hormonal changes (post-menopause).</li>
              <li>Thyroid issues — get blood test.</li>
              <li>Iron deficiency — common in seniors.</li>
              <li>Medications — many cause hair loss.</li>
              <li>Stress.</li>
              <li>Some causes reversible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medical treatments</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Minoxidil (Rogaine)</strong> — OTC, $30/mo. Both men + women.</li>
              <li><strong>Finasteride</strong> — Rx pill, men only. Side effects.</li>
              <li><strong>Spironolactone</strong> — Rx, women only.</li>
              <li><strong>PRP injections</strong> — $500-1,500 per session, 3-4 sessions.</li>
              <li><strong>Hair transplant</strong> — $5K-15K. Permanent.</li>
              <li>Talk to dermatologist for prescription options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cosmetic options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Volumizing shampoo</strong> — Nioxin, OGX Thick &amp; Full.</li>
              <li><strong>Toppik</strong> — keratin fiber sprinkle, $25.</li>
              <li><strong>Hair toppers</strong> — partial pieces, $200-1,000.</li>
              <li><strong>Wigs</strong> — synthetic $50-200, human hair $500-3,000.</li>
              <li><strong>Scalp micropigmentation</strong> — tattoo dots, $2K-5K.</li>
              <li>Shorter cuts often look fuller.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wash 2-3x/week — not daily (strips oils).</li>
              <li>Cool/lukewarm water rinse.</li>
              <li>Wide-tooth comb when wet (hair fragile).</li>
              <li>Air dry when possible.</li>
              <li>Silk pillowcase reduces breakage.</li>
              <li>Avoid tight ponytails / buns.</li>
              <li>Eat protein + iron (see /tools/protein-for-seniors).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cancer + hair loss</h3>
            <p className="text-sm text-muted-foreground">Chemo causes hair loss. Wigs covered by Medicare with prescription &quot;cranial prosthesis.&quot; American Cancer Society&apos;s &quot;wig bank&quot; provides free wigs. Look Good Feel Better — free workshops on wigs/makeup during cancer treatment.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
