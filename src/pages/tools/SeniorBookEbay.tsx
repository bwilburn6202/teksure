import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function SeniorBookEbay() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sell on eBay — Senior Guide" description="Sell extra items on eBay safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sell on eBay</h1>
          <p className="text-lg text-muted-foreground">Turn old stuff into cash.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Take photos</h2><p>4-6 clear photos. Good light. Show flaws honestly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search similar items</h2><p>Filter Sold listings. See real prices. Set yours close.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Auction or Buy It Now</h2><p>Auction works for collectibles. Buy It Now for everyday items.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Free listings</h2><p>250 free listings per month for casual sellers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Ship within 3 days</h2><p>Print label from eBay. Drop at post office or schedule pickup.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Beware buyer scams</h2><p>Suspicious zero-feedback buyers. Pay through eBay only. Never accept overpayments.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>eBay takes about 13% of the sale plus shipping cost. Factor in when pricing.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
