import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wheat } from 'lucide-react';

export default function SourdoughForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sourdough for Senior Bakers | TekSure" description="Make artisan bread at home. Plain-English sourdough guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wheat className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sourdough Bread</h1>
          <p className="text-lg text-muted-foreground">Hobby + delicious + healthier than store.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior love it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Therapeutic process.</li>
              <li>Smell of baking bread.</li>
              <li>Healthier than store bread.</li>
              <li>Easier on digestion (fermented).</li>
              <li>Saves money long term.</li>
              <li>Share with neighbors.</li>
              <li>Lifelong hobby — always learning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get started</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buy starter (King Arthur, Etsy).</li>
              <li>Or make from scratch (5 days).</li>
              <li>Feed daily — small amount flour + water.</li>
              <li>Use neglect-tolerant — refrigerator slows it.</li>
              <li>Bread baking weekend hobby for many.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Equipment ($100)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Dutch oven (Le Creuset / Lodge cast iron $50-300).</li>
              <li>Banneton — proofing basket $20.</li>
              <li>Bench scraper.</li>
              <li>Kitchen scale (digital).</li>
              <li>Plastic wrap or shower cap.</li>
              <li>Pizza stone optional.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tartine Bread</strong> — Chad Robertson book.</li>
              <li><strong>Joshua Weissman</strong> — YouTube.</li>
              <li><strong>King Arthur Baking</strong> — recipes free.</li>
              <li><strong>The Perfect Loaf</strong> — blog.</li>
              <li>Reddit r/Sourdough — friendly community.</li>
              <li>Local sourdough clubs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No-knead recipes easier on hands.</li>
              <li>Stretch + folds vs kneading.</li>
              <li>Stand mixer with dough hook.</li>
              <li>Don&apos;t fight with stiff dough — let machine.</li>
              <li>Patience required — 12-24 hour process.</li>
              <li>Plan around your schedule.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth the effort</h3>
            <p className="text-sm text-muted-foreground">First few loaves disappointing — normal. By loaf 10 — getting good. Loaf 50 — bakery quality. Many seniors lifetime hobby. Share starter with friends — passes generations. Free hobby once started.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
