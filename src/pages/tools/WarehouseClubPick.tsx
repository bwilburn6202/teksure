import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

const PICKS = [
  { name: 'Costco', cost: '$65/yr Gold; $130/yr Executive', best: 'Best price-to-quality. Strong electronics, optical, tires, gas. Executive earns 2% back — usually pays for itself.', good: 'Best overall.' },
  { name: 'Sam\'s Club', cost: '$50/yr; $110/yr Plus', best: 'Walmart-owned. Plus tier earns 2% back. Curbside pickup free for Plus.', good: 'Best if no nearby Costco.' },
  { name: 'BJ\'s Wholesale', cost: '$55-110/yr', best: 'East Coast focus. Accepts manufacturer coupons (Costco doesn\'t).', good: 'Best for couponers.' },
  { name: 'Amazon Prime ($15/mo)', cost: '$139/yr', best: 'Free 2-day shipping + Prime Video + unlimited photos. Different value prop — not bulk groceries.', good: 'Different category.' },
  { name: 'Walmart+', cost: '$98/yr or $13/mo', best: 'Free Walmart delivery + grocery pickup. Free Paramount+. Gas discount.', good: 'Best for grocery delivery.' },
];

export default function WarehouseClubPick() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Warehouse Club Pick — Costco vs Sam&apos;s vs BJ&apos;s | TekSure" description="Plain-English comparison of warehouse club memberships. Which is worth $65/year for your household?" />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Warehouse Club Pick</h1>
          <p className="text-lg text-muted-foreground">Worth the $65/year? For most senior households — yes.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
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
            <h2 className="font-bold text-xl mb-3">Best Costco buys</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Hearing aids</strong> — Costco Hearing Aid Center: $1,500 vs $5,000 elsewhere.</li>
              <li><strong>Glasses + eye exams</strong>.</li>
              <li><strong>Pharmacy</strong> — non-members can use too. Often cheapest cash prices.</li>
              <li><strong>Tires</strong> — install + free rotations + road hazard warranty.</li>
              <li><strong>Gas</strong> — typically 10-30¢/gallon less.</li>
              <li><strong>Travel (Costco Travel)</strong> — bundles with extra perks.</li>
              <li><strong>Kirkland Signature</strong> — often as good or better than premium brands.</li>
              <li><strong>Rotisserie chicken</strong> — $5 for the best supermarket chicken.</li>
              <li><strong>Photo printing</strong> — best price 4×6 prints.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid the trap</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Don\'t buy bulk perishables that\'ll spoil before you finish.</li>
              <li>Don\'t buy because "it\'s a good deal" — only what you actually use.</li>
              <li>Track membership cost vs actual savings. Some families don\'t spend enough to break even.</li>
              <li>For singles or couples — Sam\'s Club / BJ\'s sizes are sometimes overwhelming. Costco\'s "single shopper" sizes are often better.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick math</h3>
            <p className="text-sm text-muted-foreground">If you spend $200/month at the warehouse club + use the gas + use the pharmacy or eye exam — Costco Executive ($130/yr) earns back 2%. Most families end up break-even or net-positive after the rebate.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
