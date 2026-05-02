import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function SeniorOnlineGroceryBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Grocery Shopping for Seniors — TekSure" description="How seniors order groceries online — Walmart+, Instacart, Kroger, Amazon Fresh." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Grocery Shopping</h1>
          <p className="text-lg text-muted-foreground">Groceries delivered. No driving, no lifting.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Walmart+</h2><p>$98/year. Free same-day delivery on $35+ orders.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Instacart</h2><p>Pay-as-you-go or $99/year. Picks up from local stores.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Kroger / Safeway</h2><p>Major chains have their own apps. Often cheaper than Instacart.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Amazon Fresh / Whole Foods</h2><p>Free delivery for Prime in many cities.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use SNAP/EBT</h2><p>Walmart, Amazon, and Instacart accept EBT cards online for groceries.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tip the shopper</h2><p>$5-$10 standard. They pick fresh produce more carefully when tipped.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pickup is often free — drive up, they load your trunk. No tipping.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
