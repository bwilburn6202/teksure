import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function SeniorWalmartApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walmart App for Seniors — Senior Guide" description="Use the Walmart app to save time and money." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walmart App</h1>
          <p className="text-lg text-muted-foreground">Save time at Walmart.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Walmart Pay</h2><p>Scan barcode at checkout. Pay through phone — no card swiping.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Pickup orders</h2><p>Shop online. Walmart loads it into your trunk for free at the store.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Walmart+ membership</h2><p>$98/year. Free shipping, gas discounts, scan & go in store.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Refill prescriptions</h2><p>Walmart pharmacy section. Tap refill on each medication.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Reorder list</h2><p>App remembers things you buy weekly. One tap to add to cart.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Aisle finder</h2><p>Tap a product. App shows the exact aisle and shelf in your store.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Walmart+ pays for itself in gas savings if you fill up at Walmart Murphy USA stations.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
