import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

const APPS = [
  { name: 'Instacart', cost: 'Order + $10 fees + tip', best: 'Largest. Costco, Aldi, Wegmans, Kroger, more. Instacart+ ($10/mo) waives fees.', good: 'Best variety.' },
  { name: 'Amazon Fresh / Whole Foods', cost: 'Prime + tip', best: 'Free 2-hour delivery for Prime members. Amazon prices.', good: 'Best with Prime.' },
  { name: 'Walmart+', cost: '$13/mo', best: 'Free grocery delivery from Walmart. Cheap groceries.', good: 'Best for cheap groceries.' },
  { name: 'Target Shipt', cost: '$11/mo or $5/order', best: 'Target home + grocery. Same-day.', good: 'Best Target.' },
  { name: 'Local supermarket apps', cost: 'Varies', best: 'Kroger, Publix, Wegmans all have own apps. Often free pickup.', good: 'Best free pickup.' },
];

export default function GroceryDeliveryApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grocery Delivery Apps | TekSure" description="Instacart, Amazon Fresh, Walmart+. Plain-English picks for grocery delivery — and free pickup options that save the fees." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grocery Delivery Apps</h1>
          <p className="text-lg text-muted-foreground">Save the trip. Save your back.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>$60 grocery order via Instacart</strong> = $60 + $4-7 delivery + $4-6 service + 15% tip ≈ $80.</li>
              <li><strong>Same order via store pickup</strong> = $60 + $0-2 = $60.</li>
              <li>Pickup saves $15-20/order.</li>
              <li>Subscription kills delivery fees if you order weekly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Curbside pickup tips</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Order via store app (free, no Instacart fees).</li>
              <li>Pick a 1-hour window.</li>
              <li>Arrive at pickup spot. Park in marked spaces.</li>
              <li>Tap "I&apos;m here" in app.</li>
              <li>Worker brings groceries to your trunk.</li>
              <li>Tip $3-5 cash.</li>
              <li>Drive home. Most workouts saved.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SNAP / EBT online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walmart, Amazon, Aldi, Kroger, Publix all accept EBT online.</li>
              <li>Add EBT card in app. Pay with EBT for SNAP-eligible items.</li>
              <li>Pay separately for tip + delivery (cannot use EBT for those).</li>
              <li>Senior eligibility: SSI alone often qualifies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tip your shopper</h3>
            <p className="text-sm text-muted-foreground">Instacart + Shipt shoppers depend on tips. $5 minimum, $8-10 in bad weather or large orders. Pre-tip in app — orders with good tips get picked up faster + handled more carefully.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
