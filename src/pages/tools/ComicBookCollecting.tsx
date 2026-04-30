import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookMarked } from 'lucide-react';

export default function ComicBookCollecting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Comic Book Collecting Revival | TekSure" description="Old comics worth fortunes. Plain-English guide for senior comic collectors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookMarked className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Comic Book Collecting</h1>
          <p className="text-lg text-muted-foreground">Childhood comics may be retirement gold.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Check old boxes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1960s+ Marvel + DC = potentially valuable.</li>
              <li>First appearances of major heroes = $$$$.</li>
              <li>Action Comics #1 = $5M+.</li>
              <li>Amazing Fantasy #15 (Spider-Man) = $1M+.</li>
              <li>Most worth less but check before tossing.</li>
              <li>Condition is everything.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Comic value tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Overstreet Price Guide</strong> — annual book, library copy.</li>
              <li><strong>GoCollect</strong> — gocollect.com. Real sale prices.</li>
              <li><strong>ComicsPriceGuide</strong> — comicspriceguide.com.</li>
              <li><strong>eBay sold</strong> — real market.</li>
              <li><strong>Heritage Auctions</strong> — high-end sales.</li>
              <li><strong>CGC + CBCS</strong> — grading services.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Condition guide</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mint (10)</strong> — perfect, never read.</li>
              <li><strong>Very Fine (8.0)</strong> — minor wear.</li>
              <li><strong>Fine (6.0)</strong> — moderate wear.</li>
              <li><strong>Very Good (4.0)</strong> — visible wear.</li>
              <li><strong>Good (2.0)</strong> — heavily worn.</li>
              <li>Comic books grow brittle — handle carefully.</li>
              <li>Wear gloves to inspect valuable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Storing properly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Acid-free bags + boards.</li>
              <li>Acid-free comic boxes.</li>
              <li>Cool, dry, dark storage.</li>
              <li>Don&apos;t fold or roll.</li>
              <li>Don&apos;t expose to sunlight.</li>
              <li>For valuable: get CGC graded + slabbed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Selling</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Heritage Auctions</strong> — for $500+ items.</li>
              <li><strong>ComicConnect</strong> — premium auctions.</li>
              <li><strong>eBay</strong> — middle-market.</li>
              <li><strong>Local comic shops</strong> — quick but lowball.</li>
              <li><strong>Comic conventions</strong> — many dealers buying.</li>
              <li>Get 2-3 quotes for valuable items.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Condition determines all</h3>
            <p className="text-sm text-muted-foreground">A 1962 Spider-Man #1 in poor condition = $200. Same comic in mint = $1M+. Don&apos;t clean comics — leave grading to pros. CGC slabbing ($30-50 per comic) PROVES condition + raises value 50%+. Worth doing for valuable books.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
