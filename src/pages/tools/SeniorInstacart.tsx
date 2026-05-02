import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBasket } from 'lucide-react';

export default function SeniorInstacart() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Instacart for Seniors — Senior Guide" description="Get groceries delivered with Instacart." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBasket className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Instacart</h1>
          <p className="text-lg text-muted-foreground">Groceries to your door.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up</h2><p>Free at instacart.com or in the app. Pick your nearby store.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Pick a store</h2><p>Costco, Safeway, Publix, Aldi, ShopRite — and many more.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Add items</h2><p>Search or browse. Tap to add. Click cart to review before checkout.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Pick a time</h2><p>2-hour windows. Same-day or next-day. Faster slots cost more.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. SNAP/EBT</h2><p>Many stores accept SNAP through Instacart. Set up at instacart.com/ebt.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Tip the shopper</h2><p>Default tip 5%. Bump to 15-20% if order is heavy or it's bad weather.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Instacart+ membership ($99/year) skips delivery fees on $35+ orders.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
