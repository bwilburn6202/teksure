import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Platform {
  name: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  fees: string;
  link: string;
}

const PLATFORMS: Platform[] = [
  {
    name: 'Facebook Marketplace',
    bestFor: 'Local pickup of furniture, appliances, large items.',
    pros: ['Free to list', 'Huge local audience', 'Buyers see your real Facebook profile (less anonymous)', 'No shipping needed for local pickup'],
    cons: ['No buyer protection', 'Spam buyers ("is this still available?")', 'Have to meet strangers'],
    fees: 'Free for local. ~5% for shipped items via FB Pay.',
    link: 'https://www.facebook.com/marketplace',
  },
  {
    name: 'eBay',
    bestFor: 'Anything specific or collectible — vintage, electronics, name brands.',
    pros: ['Largest US audience', 'PayPal protection covers both sides', 'Auction format pushes prices up'],
    cons: ['Real fees: 13% final value + payment processing', 'Have to ship', 'Seller scams (chargebacks 60+ days later)'],
    fees: '~13% of sale + $0.30/listing after 250 free listings.',
    link: 'https://www.ebay.com/sl/sell',
  },
  {
    name: 'OfferUp',
    bestFor: 'Local pickup, simpler than Facebook Marketplace.',
    pros: ['No Facebook account needed', 'Built-in messaging', 'Lower fees than eBay'],
    cons: ['Smaller audience than Facebook', 'Same in-person scam risk'],
    fees: 'Free for local. 12.9% for shipped items.',
    link: 'https://offerup.com',
  },
  {
    name: 'Craigslist',
    bestFor: 'Vehicles, large furniture, free stuff.',
    pros: ['Free for most categories', 'Old-school text-only — fast to post', 'Good for cars and big furniture'],
    cons: ['Highest scam rate of any platform', 'No buyer/seller verification', 'Mostly cash-only'],
    fees: 'Free for personal items.',
    link: 'https://www.craigslist.org',
  },
  {
    name: 'Poshmark',
    bestFor: 'Designer clothing, brand-name accessories, shoes.',
    pros: ['Built-in shipping label printing', 'Female-leaning shopper base', 'Trend-focused interface'],
    cons: ['Not for general goods', '~20% fee on items over $15'],
    fees: '$2.95 flat fee under $15, 20% over.',
    link: 'https://poshmark.com/sell',
  },
  {
    name: 'Mercari',
    bestFor: 'Smaller, mailable items — books, jewelry, small electronics.',
    pros: ['Mobile-first listing flow', 'Built-in shipping', 'Buyer rates are protected by escrow'],
    cons: ['~10% fee + payment processing', 'Limited to items under 70 lbs'],
    fees: '10% sale fee + 2.9% + $0.50 payment processing.',
    link: 'https://www.mercari.com',
  },
];

const STEPS = [
  {
    title: 'Take great photos',
    detail: 'Natural light from a window. Solid background. Multiple angles. Photos sell — bad ones do not.',
  },
  {
    title: 'Write a clear, honest description',
    detail: 'Brand, model, condition, age, any flaws. Buyers respect honesty; they refund-claim against hype.',
  },
  {
    title: 'Price competitively',
    detail: 'Search the same item on the platform first. Price slightly below the median if you want a fast sale.',
  },
  {
    title: 'Use platform messaging only',
    detail: 'Never move to private text or WhatsApp before payment — that is where scams happen.',
  },
  {
    title: 'Accept ONLY the platform\'s payment system',
    detail: 'eBay payments through eBay. Marketplace through Facebook Pay or in-person cash. NEVER Zelle or PayPal Friends & Family.',
  },
  {
    title: 'For local pickup, meet at a Safe Exchange Zone',
    detail: 'Most US police stations have parking spots specifically for this. Free, well-lit, cameras. Bring a friend.',
  },
  {
    title: 'For shipping, use platform\'s label',
    detail: 'eBay, Mercari, Poshmark all generate shipping labels with built-in tracking. Never ship without tracking — buyer claims "did not arrive" otherwise.',
  },
  {
    title: 'Wait for funds to clear before shipping',
    detail: 'Especially on Marketplace and OfferUp. PayPal can hold a payment for 21 days on a new seller. Wait until you see "available balance".',
  },
  {
    title: 'Save all messages and tracking',
    detail: 'Take screenshots. If a dispute happens 30 days later, you need the receipts.',
  },
];

export default function SellOnlineSafely() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Sell Online Safely"
        description="Sell stuff online without getting scammed. eBay, Facebook Marketplace, OfferUp, Craigslist, Poshmark, Mercari — comparison and 9 rules to follow on every platform."
        path="/tools/sell-online-safely"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <ShoppingBag className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Sell Online Safely</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Pick the right platform. Follow nine rules. Never get scammed.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Sell Online Safely' }]} />

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Six platforms compared</p>
          <div className="space-y-3 mb-6">
            {(showAll ? PLATFORMS : PLATFORMS.slice(0, 3)).map(p => (
              <Card key={p.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{p.name}</p>
                    <Badge variant="outline">{p.fees}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Best for:</strong> {p.bestFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-2">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {p.pros.map((pr, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{pr}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {p.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Visit {p.name} <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 6 platforms</Button>
            )}
          </div>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Nine rules for any platform</p>
          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <ol className="space-y-3">
                {STEPS.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-muted-foreground mt-0.5">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">The most common online-selling scam, in one paragraph</p>
                <p className="text-muted-foreground">
                  A buyer offers to overpay you with a check. They ask you to refund the difference via Zelle. The check bounces a week later — and now you owe the bank both the bad check AND the cash you wired to the scammer. If anyone overpays, walks away. Real buyers pay the asking price.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/marketplace-scam-spotter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Marketplace Scam Spotter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Walk-through checklist for scam buyers and sellers.</p>
              </Link>
              <Link to="/tools/device-retirement-helper" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Device Retirement</p>
                <p className="text-xs text-muted-foreground mt-0.5">Wipe before you sell.</p>
              </Link>
              <Link to="/tools/online-banking-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Banking Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Lock down before you transact.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
