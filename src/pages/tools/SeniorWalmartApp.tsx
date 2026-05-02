import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function SeniorWalmartApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walmart App for Seniors — TekSure" description="Walmart app tips for seniors — pickup, delivery, prescription, savings." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walmart App</h1>
          <p className="text-lg text-muted-foreground">Skip the store. Save time.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free pickup</h2><p>Order online. Drive to store. Walmart loads your trunk. Free with $35+ order.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Walmart+</h2><p>$98/year. Free delivery, gas discounts, paramount+ included.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pharmacy</h2><p>Refill prescriptions. Track delivery. Often cheaper than retail.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Price scanner</h2><p>Scan in-store with phone. App shows price + matching reviews.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">EBT/SNAP</h2><p>Yes — accepts SNAP for online grocery orders.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior hour</h2><p>Many Walmarts open 1 hour early Tuesdays for seniors. Less crowded.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pickup is usually $2-$5 cheaper than delivery. Same selection.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
