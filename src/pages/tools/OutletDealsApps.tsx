import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tag } from 'lucide-react';

const APPS = [
  { name: 'Slickdeals', cost: 'FREE', best: 'Crowdsourced deals. Vetted by community. Set alerts for "TV under $400" — pings you.', good: 'Best deal-finder.' },
  { name: 'DealNews', cost: 'FREE', best: 'Editor-curated daily deals. Less spammy than Slickdeals.', good: 'Best curated.' },
  { name: 'Brad&apos;s Deals', cost: 'FREE', best: 'Email-driven. Daily best-of list. Senior-friendly format.', good: 'Best email format.' },
  { name: 'RetailMeNot', cost: 'FREE', best: 'Coupon code database. Search store before checking out.', good: 'Best at checkout.' },
  { name: 'Honey (browser extension)', cost: 'FREE', best: 'Auto-tries every coupon code. Saves 5-15% on most online orders.', good: 'Best autopilot.' },
  { name: 'Rakuten', cost: 'FREE', best: 'Cash back at 3,500+ stores. Pays via PayPal or check.', good: 'Best cash back.' },
];

export default function OutletDealsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Outlet &amp; Deal-Finder Apps | TekSure" description="Find honest deals — not fake sales. Plain-English picks for Slickdeals, RetailMeNot, Honey, and other deal-tracking apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Deal-Finder Apps</h1>
          <p className="text-lg text-muted-foreground">Get the real best price.</p>
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
            <h2 className="font-bold text-xl mb-3">Best workflow</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sign up for Slickdeals + Brad&apos;s Deals daily emails.</li>
              <li>Add Honey browser extension on your computer.</li>
              <li>Add Rakuten as starting point for online shopping.</li>
              <li>For repeat purchases (e.g. a TV), set price alert.</li>
              <li>Wait. Real deals come every 4-8 weeks.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Outlet stores online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Nordstrom Rack</strong> — designer brands at 30-70% off. Free shipping over $89.</li>
              <li><strong>Sierra (Sierra Trading Post)</strong> — outdoor + boots clearance, owned by TJ Maxx.</li>
              <li><strong>Saks Off 5th</strong> — Saks Fifth Avenue overstock.</li>
              <li><strong>The Outnet</strong> — high-end designer clothes 50-80% off.</li>
              <li><strong>Macy&apos;s Backstage</strong> — Macy&apos;s outlet section.</li>
              <li><strong>L.L.Bean Outlet</strong> — older styles + slight defects.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best times to buy each thing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>TVs</strong> — Black Friday + Super Bowl week (late January).</li>
              <li><strong>Mattresses</strong> — Memorial Day, Labor Day, President&apos;s Day.</li>
              <li><strong>Cars</strong> — September-October when new models arrive; end-of-month for sales quotas.</li>
              <li><strong>Patio furniture</strong> — late August - September.</li>
              <li><strong>Appliances</strong> — September - October (new models drop).</li>
              <li><strong>Cookware</strong> — May (graduation) and November (holidays).</li>
              <li><strong>Air conditioners</strong> — September after summer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t fall for "limited time"</h3>
            <p className="text-sm text-muted-foreground">90% of "today only" sales are fake urgency — it&apos;ll be back next week. Use Camelcamelcamel or Keepa to see Amazon price history. If a "sale" is the regular price for the past 6 months, walk away.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
