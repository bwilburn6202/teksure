import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function InstacartForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Instacart for Seniors | TekSure" description="Grocery delivery from your favorite stores. Instacart explained for seniors in plain English." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Instacart</h1>
          <p className="text-lg text-muted-foreground">Groceries delivered from your usual store.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Instacart?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Personal shoppers pick up groceries for you.</li>
              <li>Order from Costco, Aldi, Kroger, Publix, Wegmans, etc.</li>
              <li>Same-day delivery — usually within 2 hours.</li>
              <li>You shop from your phone or computer.</li>
              <li>No need to drive or walk store aisles.</li>
              <li>Great for snowy weather and limited mobility.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pay-per-order — about $4–8 delivery fee.</li>
              <li>Plus tip for shopper — 10–15% standard.</li>
              <li>Instacart+ membership — $99/year, free delivery on orders $35+.</li>
              <li>Prices may be slightly higher than in-store.</li>
              <li>Compare carefully — some items 5–15% more.</li>
              <li>Costco prices match warehouse.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to order</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download free Instacart app or go to Instacart.com.</li>
              <li>Enter your zip code — see participating stores.</li>
              <li>Pick a store, browse aisles or search.</li>
              <li>Add items to cart.</li>
              <li>Choose delivery time — 2hr or scheduled.</li>
              <li>Pay with credit card, get text updates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Add notes — &quot;ripe bananas&quot; or &quot;leave at door.&quot;</li>
              <li>Choose &quot;Replace&quot; or &quot;Refund&quot; for out-of-stock.</li>
              <li>Save favorite items — speeds reorders.</li>
              <li>Tip well — shoppers do real work.</li>
              <li>Bring boxes/cooler outside if heavy/cold items.</li>
              <li>Communicate with shopper through app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">EBT/SNAP supported</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Instacart accepts EBT for grocery items.</li>
              <li>Free delivery often available for EBT users.</li>
              <li>Eligible items show EBT label.</li>
              <li>Reduced or free Instacart+ for EBT/Medicaid.</li>
              <li>Major win for low-income seniors with mobility issues.</li>
              <li>Set up by adding EBT card in payment section.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walmart+ — $98/year, free Walmart delivery.</li>
              <li>Amazon Fresh — Prime members, varies by area.</li>
              <li>Shipt — Target focused, $99/year.</li>
              <li>Store apps — Kroger, Publix have own delivery.</li>
              <li>Compare what stores deliver in your zip.</li>
              <li>Different stores may suit different needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try one order first</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t commit to a yearly membership before trying it. Place one $35+ order with a $5 delivery fee. See how it feels — quality of substitutions, freshness, accuracy. If you order weekly, the $99/year Instacart+ pays for itself in delivery fees alone. Many seniors with mobility issues say grocery delivery transformed their independence.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
