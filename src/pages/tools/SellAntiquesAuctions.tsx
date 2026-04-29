import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gavel } from 'lucide-react';

const VENUES = [
  { name: 'Sotheby\'s', what: 'Premier auction house. Items typically $5,000+.', good: 'Best for fine art and high-end.' },
  { name: 'Christie\'s', what: 'Sotheby\'s competitor.', good: 'Same tier.' },
  { name: 'Heritage Auctions', what: 'Best for collectibles, comics, sports memorabilia, coins.', good: 'Best mid-tier auction.' },
  { name: 'Bonhams', what: 'Strong for autos, fine wine, jewelry.', good: 'Specialty auction house.' },
  { name: 'Local auction house', what: 'Find via auctionzip.com. Best for items $100-5,000.', good: 'Best for general estate items.' },
  { name: 'eBay', what: 'For most items. Reaches global buyers.', good: 'Best for specific collectibles with active market.' },
  { name: 'Etsy', what: 'Vintage / handmade specialty.', good: 'Best for vintage clothes, jewelry.' },
  { name: 'Replacements.com', what: 'For china, silver, crystal patterns.', good: 'Best for old dish sets.' },
  { name: '1stDibs', what: 'High-end vintage / mid-century.', good: 'Best for designer pieces.' },
  { name: 'LiveAuctioneers', what: 'Online platform aggregating live auctions.', good: 'Bid on national auctions from home.' },
];

export default function SellAntiquesAuctions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sell Antiques + Auction Houses | TekSure" description="From eBay to Sotheby&apos;s. Plain-English guide to where to sell antiques, fine art, jewelry, and collectibles for the best price." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gavel className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sell Antiques + Auctions</h1>
          <p className="text-lg text-muted-foreground">Match item to venue. Maximize what you get.</p>
        </div>

        <div className="space-y-3 mb-6">
          {VENUES.map(v => (
            <Card key={v.name}>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg">{v.name}</h3>
                <p className="text-sm">{v.what}</p>
                <p className="text-sm text-muted-foreground">{v.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Match item to venue</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Fine art (signed, museum-quality)</strong> → Sotheby\'s/Christie\'s.</li>
              <li><strong>Mid-century furniture, designer pieces</strong> → 1stDibs or Heritage.</li>
              <li><strong>Sports cards, comics, coins</strong> → Heritage or PWCC.</li>
              <li><strong>General old furniture, china, silver</strong> → Local auction house OR Replacements.com (china).</li>
              <li><strong>Vintage clothing</strong> → Etsy, Vestiaire Collective.</li>
              <li><strong>Books</strong> → AbeBooks, eBay, Powell\'s.</li>
              <li><strong>Records</strong> → Discogs.</li>
              <li><strong>Jewelry (diamond, gold)</strong> → Sotheby\'s if $5k+; otherwise GoldGenie or local jeweler.</li>
              <li><strong>Random old stuff</strong> → estate sale company or eBay.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Auction commissions</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Sotheby\'s/Christie\'s: 5-25% seller commission + buyer\'s premium 25-30% (you keep 70-75% of hammer price).</li>
              <li>Heritage: ~10% seller.</li>
              <li>Local: 15-30% commission.</li>
              <li>eBay: 10-13% + payment processing.</li>
            </ul>
            <p className="text-sm mt-2">Higher commissions = higher prices generally. Sotheby\'s Audubon prints sell for 5x what eBay would fetch.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Key advice</h3>
            <p className="text-sm text-muted-foreground">For high-value items — get certified appraisal FIRST. Then approach 2-3 auction houses for free estimate. Compare. Pick the one that specializes in your item type. They\'ll get you the best price.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
