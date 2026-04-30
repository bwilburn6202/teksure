import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function MercariForSeniorSellers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mercari for Senior Sellers | TekSure" description="Sell anything from your home. Mercari guide for senior sellers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Package className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mercari Selling</h1>
          <p className="text-lg text-muted-foreground">Declutter for cash.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What is Mercari</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app to sell.</li><li>Easy listing.</li><li>Anything home goods.</li><li>10% selling fee.</li><li>Buyer pays shipping.</li><li>USPS QR code.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior selling wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Old clothes.</li><li>Collectibles.</li><li>Books.</li><li>Kitchen gadgets.</li><li>Tools.</li><li>Declutter retirement.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Listing tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bright photos — 4-8.</li><li>Honest condition.</li><li>Brand + size in title.</li><li>Price competitively.</li><li>Search similar listings.</li><li>Sell faster.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Shipping easy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Print QR code.</li><li>USPS scans at counter.</li><li>No printer needed.</li><li>Boxes from home or USPS free.</li><li>Senior-friendly process.</li><li>Track in app.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mercari vs eBay</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mercari simpler.</li><li>eBay more buyers.</li><li>Mercari fee 10%.</li><li>eBay fee 13%.</li><li>List on both.</li><li>Easier on Mercari.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Start with 5 items.</li><li>Build seller rating.</li><li>Bundle for discounts.</li><li>Cash out via direct deposit.</li><li>Track in app.</li><li>Avoid scammers — stay on platform.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Declutter + earn = senior win</h3><p className="text-sm text-muted-foreground">Many seniors sit on $5,000+ of unused goods. Mercari simpler than eBay. Ship via USPS QR — no printer. Many seniors clear $200-$500/month decluttering home. Money + lighter house. Best decluttering app for seniors. Start with 5 easy items.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
