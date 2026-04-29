import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBasket } from 'lucide-react';

const PROGRAMS = [
  { name: 'Kroger Plus / Boost', cost: 'FREE / $10/mo Boost', best: 'Earn fuel points (10¢/gallon discount per 100 points). Personalized coupons.', good: 'Best for Kroger family of stores.' },
  { name: 'Publix Club', cost: 'FREE', best: 'Digital coupons + store rewards.', good: 'Best Florida/Southeast.' },
  { name: 'Albertsons / Safeway "for U"', cost: 'FREE', best: 'Personalized weekly deals + gas rewards.', good: 'Best West Coast.' },
  { name: 'Target Circle', cost: 'FREE; $99/yr 360', best: 'Free tier saves 1-5% with coupons. 360 adds free same-day delivery.', good: 'Top loyalty value.' },
  { name: 'Walmart+', cost: '$98/yr', best: 'Free delivery, 10¢ off gas, Paramount+ included.', good: 'Best Walmart shopper deal.' },
  { name: 'Whole Foods (Prime members)', cost: 'Free with Prime', best: '10% off select sale items + Prime member-only deals.', good: 'Best for Prime + Whole Foods regulars.' },
  { name: 'Aldi (no rewards needed)', cost: 'FREE — just shop', best: 'Already 30-50% cheaper than competitors. No rewards program needed.', good: 'Best inherent value.' },
];

export default function GroceryRewards() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grocery Rewards Programs — Kroger, Publix, Target | TekSure" description="Free programs that save 5-15% on groceries. Plain-English picks for stacking grocery rewards, fuel points, and coupons." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBasket className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grocery Rewards</h1>
          <p className="text-lg text-muted-foreground">Easy 5-15% savings. Most programs free.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PROGRAMS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save more with apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ibotta</strong> — cash back on groceries via app. Scan receipt, get $0.50-5 back.</li>
              <li><strong>Fetch Rewards</strong> — scan ANY receipt, earn points → gift cards.</li>
              <li><strong>Receipt Hog</strong> — similar to Fetch.</li>
              <li><strong>Coupons.com app</strong> — printable + digital coupons.</li>
              <li><strong>Honey browser extension</strong> — auto-coupons online.</li>
              <li><strong>Rakuten</strong> — cash back on online shopping.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior discount days at grocery</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Earth Fare</strong> — 5% Wednesday for seniors.</li>
              <li><strong>Many local IGA / Hometown stores</strong> — senior day Wed or Thursday.</li>
              <li><strong>Whole Foods</strong> — sometimes offers senior discount, varies by store.</li>
              <li><strong>Kroger / Smith\'s some stores</strong> — Tuesday senior day.</li>
              <li><strong>Always ask cashier</strong> — many stores have unadvertised senior discounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For most grocery shoppers</h3>
            <p className="text-sm text-muted-foreground">Stack: 1) Free store rewards card. 2) Digital coupons in store app. 3) Ibotta cash back. 4) Credit card with grocery cash back (Amex Blue Cash Preferred = 6% on groceries up to $6k). Can save 10-15% combined.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
