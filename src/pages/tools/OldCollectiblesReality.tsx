import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function OldCollectiblesReality() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Old Collectibles Reality Check | TekSure" description="Beanie Babies, Hummel figurines, Precious Moments, plate collections. Plain-English honest take on what your old collections are actually worth." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Package className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Old Collectibles Reality Check</h1>
          <p className="text-lg text-muted-foreground">The painful truth about Beanie Babies + 1990s collectibles.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The 1990s collectibles bubble</h2>
            <p className="text-sm">A LOT of "collectibles" sold in the 1990s — Beanie Babies, Hummel figurines, Precious Moments, decorative plates from Bradford Exchange — were marketed as "investments". They weren\'t. They\'re mostly worth less than purchase price.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Honest values today (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Beanie Babies</strong> — almost all worth $1-5. Rare exceptions (Princess Diana bear with paper hangtag in PSA 10) — $1,000+. 99.9% are pocket change.</li>
              <li><strong>Hummel figurines</strong> — most $20-100. Rare/early ones $300+.</li>
              <li><strong>Precious Moments</strong> — most $5-25.</li>
              <li><strong>Bradford Exchange plates</strong> — usually $5-15 each.</li>
              <li><strong>Franklin Mint coins/medals</strong> — base metal value (often $1-30).</li>
              <li><strong>Cabbage Patch Dolls</strong> — most $20-100. Hand-signed Coleco originals more.</li>
              <li><strong>Star Wars toys (mint in box, 1977-1985)</strong> — actually rare; can be valuable.</li>
              <li><strong>Pokemon cards from 1999</strong> — some VERY valuable. Most worth $1.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What\'s actually valuable now</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mid-century furniture (1945-1970)</strong> — strong market.</li>
              <li><strong>Original Star Wars toys 1977-1985</strong> in original packaging.</li>
              <li><strong>Vintage Apple products</strong> (original iPhone in box, original iPod, etc.).</li>
              <li><strong>Vintage Rolex / Omega watches</strong>.</li>
              <li><strong>1st edition books</strong> by famous authors.</li>
              <li><strong>Original sports memorabilia</strong> (NOT mass-produced).</li>
              <li><strong>Pre-1965 silver coins</strong>.</li>
              <li><strong>Original Pyrex Cinderella series</strong> — surprisingly hot.</li>
              <li><strong>Beatles, Stones original vinyl</strong> in good condition.</li>
              <li><strong>"Sentimental letters" from famous people</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to value YOUR things</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>eBay search → click "Sold listings" filter on left. See REAL recent prices.</li>
              <li>WorthPoint.com — paid site, comprehensive past sales.</li>
              <li>For high-value items — get certified appraisal. (See our Find an Appraiser tool.)</li>
              <li>Antiques Roadshow PBS — has free assessment events in many cities.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Sentimental value</h3>
            <p className="text-sm text-muted-foreground">Things from your loved ones often have HUGE sentimental value but little dollar value. That\'s OK. Keep what brings joy or memory. Donate what doesn\'t — you don\'t need to maximize money on every item. Free of clutter and emotionally complete is its own reward.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
