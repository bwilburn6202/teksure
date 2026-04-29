import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

const APPS = [
  { name: 'Honey (PayPal)', cost: 'FREE', best: 'Browser extension auto-applies coupon codes at checkout. Owned by PayPal.', good: 'Easiest to use.' },
  { name: 'Capital One Shopping', cost: 'FREE', best: 'Same idea as Honey. Compares prices across retailers. Works without a Capital One card.', good: 'Best price comparison.' },
  { name: 'Rakuten', cost: 'FREE', best: 'Cash back at 3,500+ stores (1-10%). Pays via PayPal or check every 3 months.', good: 'Real cash back.' },
  { name: 'Ibotta', cost: 'FREE', best: 'Grocery rebates. Scan receipt — get cash back on listed items.', good: 'Best for groceries.' },
  { name: 'Fetch Rewards', cost: 'FREE', best: 'Snap any receipt — earn points for gift cards. Easiest rewards app.', good: 'Snap and forget.' },
  { name: 'Coupons.com', cost: 'FREE', best: 'Printable + digital grocery coupons. Load to store loyalty cards.', good: 'Old-school coupons.' },
  { name: 'RetailMeNot', cost: 'FREE', best: 'Big database of promo codes. Search store before checking out.', good: 'Quick lookup.' },
];

export default function DeepCouponApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Coupon and Cash-Back Apps — Honey, Rakuten, Ibotta | TekSure" description="Stack savings online and at the grocery store. Plain-English picks for cash-back and coupon apps that actually pay out." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Coupon &amp; Cash-Back Apps</h1>
          <p className="text-lg text-muted-foreground">Stack savings without clipping a thing.</p>
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
            <h2 className="font-bold text-xl mb-3">Stack the savings</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Start your shopping trip at Rakuten or Capital One Shopping — click through to the store.</li>
              <li>At checkout, let Honey try every coupon code automatically.</li>
              <li>For groceries — clip Ibotta offers BEFORE you shop, then snap the receipt after.</li>
              <li>Snap every receipt with Fetch — even non-grocery ones.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy heads-up</h2>
            <p className="text-sm">These apps see what you buy. That&apos;s how they work. If that bothers you — skip them. None require your bank password. Pay out goes to PayPal or as a gift card. Never share a Social Security number with a coupon app.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Realistic earnings</h3>
            <p className="text-sm text-muted-foreground">Most folks earn $100-400/year combined across these apps without changing buying habits. Power users with big grocery bills clear $1,000+. Worth 30 seconds at checkout.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
