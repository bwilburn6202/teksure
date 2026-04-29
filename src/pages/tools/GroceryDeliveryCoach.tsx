import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function GroceryDeliveryCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grocery Delivery & Pickup Coach — Walmart, Instacart, Kroger | TekSure" description="Skip the grocery store. Plain-English steps to use grocery delivery and curbside pickup — Walmart, Kroger, Instacart, Amazon Fresh." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grocery Delivery & Pickup</h1>
          <p className="text-lg text-muted-foreground">Order from your couch. Pick up at the curb, or have it delivered.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Two ways to do this</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>Curbside pickup (free or $2-3)</strong> — you order, they bag it, you drive to the store and they bring it to your trunk. No tipping needed. Most stores offer this.</li>
              <li><strong>Home delivery ($10-20)</strong> — they bring it to your door. Plus tip. Best when weather, mobility, or time are issues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best apps by store</h2>
            <div className="space-y-3 text-sm">
              <div><strong>Walmart Grocery / Walmart+:</strong> Free pickup. Free delivery for Walmart+ members ($98/year). Lowest prices for everyday groceries.</div>
              <div><strong>Kroger:</strong> Free pickup. The Kroger app also includes "Boost" membership for delivery.</div>
              <div><strong>Publix Delivery & Curbside Pickup:</strong> Run through Instacart inside the Publix app.</div>
              <div><strong>Target / Shipt:</strong> Same-day delivery from Target stores via the Shipt app.</div>
              <div><strong>Whole Foods (Amazon):</strong> Free 2-hour delivery for Amazon Prime members in many cities.</div>
              <div><strong>Costco:</strong> Same-day delivery via Instacart, or 2-day Costco Same-Day for non-perishables.</div>
              <div><strong>Instacart:</strong> Pulls from many local stores (Aldi, ShopRite, Wegmans, Safeway, etc.). Higher tipping expectations.</div>
              <div><strong>Amazon Fresh:</strong> If your area has Amazon Fresh, the app is among the easiest to use.</div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First-time setup (any app)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Install the app from the App Store / Play Store.</li>
              <li>Make an account — email and password.</li>
              <li>Type your home address and your card.</li>
              <li>If you have a store loyalty card, add it for the discounts.</li>
              <li>Browse like a website — search for "milk" or "apples", tap to add.</li>
              <li>Pick a pickup or delivery time slot.</li>
              <li>Confirm. You'll get a confirmation email and a tracking link.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pickup over delivery</strong> when you can — saves $10-20 per order.</li>
              <li><strong>Watch for fees:</strong> Some apps charge "service fees" of 5-10% on top. Read the order summary before paying.</li>
              <li><strong>Check substitutions:</strong> If something's out of stock, the shopper picks a swap. You can choose "approve substitutions" (less surprises) or "no substitutions" (you might miss items).</li>
              <li><strong>Don't autopay tip suggestions blindly</strong> — they suggest 15-20% of the WHOLE bill. For grocery, $5-$10 per order is generous regardless of total.</li>
              <li><strong>Try both Walmart and Kroger</strong> — prices differ surprisingly across stores in the same town.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">EBT / SNAP food assistance</h2>
            <p className="text-sm">Most major grocery delivery now accepts EBT/SNAP (food stamps) — Walmart, Amazon, Aldi, Kroger, Publix all do. Add the EBT card in your account just like a credit card.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — schedule a "regular order"</h3>
            <p className="text-sm text-muted-foreground">Most apps let you reorder in one tap. Build a "weekly basics" list once — milk, bread, eggs, fruit, coffee — and re-order in 60 seconds every Saturday morning.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
