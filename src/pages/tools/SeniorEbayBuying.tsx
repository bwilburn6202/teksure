import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function SeniorEbayBuying() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Buying on eBay — Senior Guide" description="Smart buying tactics for eBay." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart eBay Buying</h1>
          <p className="text-lg text-muted-foreground">Get great deals safely.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Watch list</h2><p>Tap heart on items. Track prices. Buy when right.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Seller feedback</h2><p>99%+ ratings preferred. 100+ feedback shows experience.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Bidding sniping</h2><p>Wait until last 30 seconds. Use eBay's max bid feature so you don't have to watch.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Buyer protection</h2><p>If item never arrives or is fake, eBay refunds you. Pay only through eBay.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Local pickup</h2><p>Save shipping. Pick up local items. Meet at safe place.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Returns</h2><p>Many sellers offer 30-day returns. Check before buying.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If a deal sounds too good (Rolex for $50), it's a scam. Use common sense.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
