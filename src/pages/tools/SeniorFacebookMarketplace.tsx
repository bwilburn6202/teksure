import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function SeniorFacebookMarketplace() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Facebook Marketplace — Senior Guide" description="Buy and sell locally with Marketplace." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Facebook Marketplace</h1>
          <p className="text-lg text-muted-foreground">Local buying and selling.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open in Facebook</h2><p>Tap Marketplace icon. Browse local listings.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Sell items</h2><p>Tap Create New Listing. Upload photos, price, description.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Free</h2><p>No fees for local pickup. Small fee if you ship through Facebook.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Meet in public</h2><p>Coffee shop, police station parking lot. Daytime. Tell family where you go.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Cash only</h2><p>Don't accept checks. Skip Zelle from strangers. Cash in hand at meetup.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Beware scams</h2><p>Buyer wants to overpay and refund? Scam. Wants to ship instead of meet? Scam.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Block strange messages. Lots of scammers on Marketplace. Trust your gut.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
