import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function ScreenCleaner() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Clean Your Screens Right | TekSure" description="Don&apos;t damage your phone, tablet, computer screens. Plain-English picks for safe cleaning." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Clean Screens Safely</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t damage with wrong cleaner.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DON&apos;T use these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Windex / glass cleaner</strong> — strips screen coating.</li>
              <li><strong>Paper towels</strong> — scratch screen.</li>
              <li><strong>Tissues</strong> — small fibers + scratching.</li>
              <li><strong>Pure alcohol</strong> — strips oleophobic coating.</li>
              <li><strong>Vinegar</strong> — too acidic.</li>
              <li><strong>Bleach</strong> — destroys.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DO use these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Microfiber cloth</strong> — primary tool. $5 for 6 pack.</li>
              <li><strong>Distilled water</strong> — for stubborn spots.</li>
              <li><strong>70% isopropyl alcohol wipes</strong> — Apple-approved for iPhone.</li>
              <li><strong>Whoosh! screen cleaner</strong> — pre-made, safe.</li>
              <li><strong>Apple-branded polishing cloth</strong> — $19 (overpriced but works).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily routine</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Power off device.</li>
              <li>Microfiber cloth — gentle circular motions.</li>
              <li>For grease — slightly damp cloth (NEVER drip on screen).</li>
              <li>Dry with second microfiber.</li>
              <li>Don&apos;t spray cleaner directly on screen.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Disinfecting (Covid era)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple OK&apos;d 70% isopropyl alcohol wipes.</li>
              <li>Clorox disinfecting wipes — gentle on Apple devices.</li>
              <li>Squeeze excess moisture before wiping.</li>
              <li>Avoid openings (ports, speakers, mics).</li>
              <li>1x / week typical for shared devices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior tip</h3>
            <p className="text-sm text-muted-foreground">If glasses fog when you wear mask + clean phone — same microfiber works for both. Buy pack of 6 microfiber cloths. Keep one in car, kitchen, bedroom. Quick wipe = clear vision.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
