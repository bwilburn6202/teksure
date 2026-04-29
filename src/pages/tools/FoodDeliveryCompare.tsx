import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

const APPS = [
  { name: 'DoorDash', cost: 'Order + 15-25% fees + tip', best: 'Biggest. Most restaurants. DashPass $10/mo waives delivery fee on $12+ orders.', good: 'Best selection.' },
  { name: 'Uber Eats', cost: 'Order + 15-25% fees + tip', best: 'Tied to Uber. Sometimes shows different restaurants than DoorDash.', good: 'Best if you already use Uber.' },
  { name: 'Grubhub', cost: 'Order + 15-25% fees + tip', best: 'Older service. Better for sit-down restaurants. Amazon Prime members get Grubhub+ free.', good: 'Best perk for Prime members.' },
  { name: 'Instacart (groceries)', cost: 'Order + ~$10 fees + tip', best: 'Groceries from Aldi, Costco, Wegmans. $10/mo Instacart+ waives fees on $35+.', good: 'Best for groceries.' },
];

export default function FoodDeliveryCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Food Delivery Apps Compared | TekSure" description="DoorDash vs Uber Eats vs Grubhub. Plain-English breakdown of fees, restaurant selection, and senior-friendly tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Food Delivery Compare</h1>
          <p className="text-lg text-muted-foreground">Restaurant food at your door.</p>
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

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real cost — typical $20 meal</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Food: $20</li>
              <li>Delivery fee: $4-6</li>
              <li>Service fee: $3-5</li>
              <li>Tip (15-20%): $3-5</li>
              <li><strong>Total: $30-36</strong> for a $20 meal.</li>
            </ul>
            <p className="text-sm mt-3">Delivery is convenient but expensive. Use sparingly or get a subscription if you order weekly.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pickup instead of delivery</strong> — saves $7-10 per order. Many people forget this option.</li>
              <li><strong>DashPass / Uber One / Grubhub+</strong> — $10/mo, kills delivery fee. Worth it if 4+ orders/month.</li>
              <li><strong>Order from restaurant directly</strong> — many use ChowNow or own app. No service fee.</li>
              <li><strong>Family combos</strong> — split a $50 order across 2-3 people, fees stay the same.</li>
              <li><strong>Avoid peak hours (6-8 PM)</strong> — surge pricing on delivery fees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First-time order — easy</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Download app. Sign up with phone, email, credit card.</li>
              <li>Enter your delivery address.</li>
              <li>Browse restaurants. Filter by "fastest" or "best rated".</li>
              <li>Tap restaurant → menu → tap items → Add to cart.</li>
              <li>Review cart. Add tip (15-20% recommended).</li>
              <li>Checkout. Estimate appears (usually 25-50 minutes).</li>
              <li>App tracks driver in real time on map.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tip generously</h3>
            <p className="text-sm text-muted-foreground">Drivers earn most income from tips. $3-5 minimum, $5-8 in bad weather or long drives. Pre-tip in app gets your order picked up faster — drivers see the tip before accepting.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
