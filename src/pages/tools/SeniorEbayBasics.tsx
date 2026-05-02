import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function SeniorEbayBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="eBay for Seniors — Senior Guide" description="Buy and sell on eBay safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">eBay for Seniors</h1>
          <p className="text-lg text-muted-foreground">Buy and sell with care.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up free</h2><p>Use a real email. eBay sends purchase confirmations and return updates here.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Buy It Now vs Auction</h2><p>Buy It Now is fixed price. Auction is bidding — set a max so you don't overpay.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Top Rated Seller</h2><p>Look for the gold seal. These sellers have great track records.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Read description</h2><p>Note any chips, scratches, missing parts before bidding.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Pay through eBay</h2><p>Never pay outside the site by Zelle or wire. eBay buyer protection only covers eBay payments.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Selling old stuff</h2><p>Take 4-6 clear photos. Set a fair price. Ship within 2 business days.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If a seller messages you to pay outside eBay, walk away. Common scam.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
