import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function SeniorEbaySelling() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="eBay Selling for Seniors — TekSure" description="Declutter and earn — eBay selling tips for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">eBay for Seniors</h1>
          <p className="text-lg text-muted-foreground">Turn closets into cash.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free to start</h2><p>250 free listings/month. eBay charges 13% fee only when items sell.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sells well</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Vintage clothing</li><li>Old electronics</li><li>Collectibles</li><li>Tools</li><li>Books (rare ones)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Take 6-8 photos</h2><p>All sides. Brand labels. Defects honestly. Sells faster.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Auction or Buy It Now</h2><p>Auction = drama. Buy It Now = stability. Most sellers prefer Buy It Now.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Shipping calculator</h2><p>USPS calculator. Or print labels through eBay (often cheaper).</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out for scams</h2><p>Buyers asking to pay outside eBay = scam. Stay on platform.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Search &ldquo;sold listings&rdquo; before pricing. Shows what items actually sold for.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
