import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function SeniorOfferUp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="OfferUp & Facebook Marketplace for Seniors — TekSure" description="Buy and sell locally — OfferUp, Marketplace tips for seniors, scam warnings." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OfferUp &amp; Marketplace</h1>
          <p className="text-lg text-muted-foreground">Local buying and selling.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">OfferUp</h2><p>FREE app. Local resale. Free pickup, no shipping hassles.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Facebook Marketplace</h2><p>FREE if you have Facebook. Largest local market. Strong seller ratings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Craigslist</h2><p>FREE. Old-school but still works. Less spam than apps.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SAFETY RULES</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Meet in public (police station parking lots)</li><li>Daylight only</li><li>Bring a friend</li><li>CASH only</li><li>Never invite strangers home</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common scams</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Overpayment fake checks</li><li>&ldquo;I&apos;ll send a courier&rdquo; offers</li><li>Cryptocurrency requests</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Selling tips</h2><p>Bright photos. Honest descriptions. Lowball offers? Politely decline.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Many police departments offer &ldquo;safe trade&rdquo; areas with cameras.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
