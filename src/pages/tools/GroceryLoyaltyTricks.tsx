import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export default function GroceryLoyaltyTricks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grocery Loyalty Tricks for Seniors | TekSure" description="Get the lowest grocery prices. Plain-English loyalty + senior discount tricks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Receipt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grocery Loyalty Tricks</h1>
          <p className="text-lg text-muted-foreground">Save $1,000+/year with right strategies.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior discount day</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Albertsons / Safeway</strong> — Wednesdays/Tuesdays, varies, 5-10%.</li>
              <li><strong>Harris Teeter</strong> — Thursdays.</li>
              <li><strong>Kroger</strong> — varies by region.</li>
              <li><strong>Bealls Outlet</strong> — Mondays + 50+.</li>
              <li><strong>Goodwill</strong> — first Tuesday of month, 25% off.</li>
              <li>Ask cashier — many discount programs unposted.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Loyalty cards (FREE)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sign up for ALL local store programs.</li>
              <li>Sale prices often only with card.</li>
              <li>Personalized coupons.</li>
              <li>Birthday rewards.</li>
              <li>Fuel points (Kroger, Safeway gas savings).</li>
              <li>Use phone number — no card needed at register.</li>
              <li>Costco/Sam&apos;s — paid memberships, but worth it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Digital coupon stacking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Clip digital coupons in store app BEFORE shopping.</li>
              <li>Stack with paper coupon (some stores).</li>
              <li>Stack with cashback app rebate (Ibotta).</li>
              <li>Stack with loyalty points.</li>
              <li>Final price often 50-70% off retail.</li>
              <li>Check store app weekly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheapest grocery options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Aldi</strong> — generally 30-40% cheaper than Kroger.</li>
              <li><strong>Costco</strong> — bulk savings (split with neighbor).</li>
              <li><strong>Walmart</strong> — Great Value brand high-quality + cheap.</li>
              <li><strong>Trader Joe&apos;s</strong> — store brand + niche items.</li>
              <li><strong>Sprouts / Whole Foods 365</strong> — organic budget options.</li>
              <li><strong>Hispanic / Asian markets</strong> — produce + meat much cheaper.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save more</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Store brand vs name</strong> — same factory often, save 30%.</li>
              <li><strong>Markdown bins</strong> — meat/produce 50-70% off near sell-by date.</li>
              <li><strong>Bakery markdown</strong> — half-price end of day.</li>
              <li><strong>Buy on sale, freeze</strong> — meats, bread.</li>
              <li><strong>Meal planning</strong> — prevents impulse buys.</li>
              <li><strong>Grocery list</strong> — stick to it.</li>
              <li><strong>Eat before shopping</strong> — not hungry = less impulse.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">SNAP if eligible</h3>
            <p className="text-sm text-muted-foreground">Many seniors qualify for SNAP (food stamps) but don&apos;t apply. Income limits higher than you think. Average benefit ~$130/mo. Apply at <strong>fns.usda.gov</strong>. Use to buy groceries normally — no stigma. Also <strong>Senior Farmers Market Program</strong> — free $20-50/yr at farmers markets if income-eligible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
