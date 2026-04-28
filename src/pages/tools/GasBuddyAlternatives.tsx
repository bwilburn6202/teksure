import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Fuel, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Pick { name: string; cost: string; bestFor: string; pros: string[]; cons: string[]; link: string; }

const PICKS: Pick[] = [
  {
    name: 'GasBuddy',
    cost: 'Free app (optional Pay+ card)',
    bestFor: 'Finding the cheapest gas near you or along a planned trip route.',
    pros: ['Real-time prices reported by other drivers, updated constantly.', 'Trip cost calculator before a long drive.', 'Pay+ debit card saves a few cents per gallon at most stations.'],
    cons: ['Pay+ pulls from your bank account directly — set up alerts.', 'Lots of in-app ads on the free tier.'],
    link: 'https://www.gasbuddy.com',
  },
  {
    name: 'Costco Gas (members only)',
    cost: 'Requires $65/year Gold Star membership',
    bestFor: 'High-volume drivers. Costco gas is usually 20-40 cents below local average.',
    pros: ['Top-tier fuel quality (meets the Top Tier detergent standard).', 'Big savings if you fill up weekly — pays for the membership in months.', 'Members-only, so the price is reliably lower than nearby stations.'],
    cons: ['Long lines on weekends.', 'Need a Costco store nearby.'],
    link: 'https://www.costco.com/gasoline.html',
  },
  {
    name: "Sam's Club Gas",
    cost: 'Requires $50/year Club membership',
    bestFor: "Walmart shoppers. Sam's gas runs close to Costco prices.",
    pros: ['Often 15-30 cents below local average.', "Plus members ($110/yr) earn Sam's Cash on fuel.", 'Many locations open later than Costco.'],
    cons: ['Membership required.', "Not every Sam's Club has a fuel center."],
    link: 'https://www.samsclub.com/gas-stations',
  },
  {
    name: 'Walmart+ (Murphy USA / Walmart fuel)',
    cost: '$98/year (or $12.95/mo)',
    bestFor: 'Already a Walmart shopper — adds 10 cents off per gallon at Murphy and Walmart stations.',
    pros: ['10 cents off per gallon at participating stations nationwide.', 'Free shipping and grocery delivery come with the membership.', 'Includes Paramount+ streaming.'],
    cons: ["Savings only kick in at Murphy USA, Murphy Express, Walmart, and Sam's Club fuel."],
    link: 'https://www.walmart.com/plus',
  },
  {
    name: 'Upside (cashback)',
    cost: 'Free app',
    bestFor: 'Earning a few extra cents per gallon back as cash to your bank.',
    pros: ['Real cashback — typically 5-25 cents per gallon.', 'Works at thousands of regular stations.', 'Cash out to PayPal, bank, or gift cards.'],
    cons: ['Asks for your debit/credit card data — read the warning below.', 'Offers vary day-to-day.'],
    link: 'https://upside.com',
  },
  {
    name: 'AAA Mobile / Waze',
    cost: 'Free (AAA needs membership)',
    bestFor: 'Drivers who already use AAA or Waze for navigation.',
    pros: ['Waze shows the cheapest stations along your active route — no detour math needed.', 'AAA app has a verified gas-price tool plus roadside assistance.', 'Both are free to download.'],
    cons: ['AAA price data is less crowd-sourced than GasBuddy.', 'Waze prices can lag a day or two.'],
    link: 'https://www.waze.com',
  },
  {
    name: 'Grocery rewards (Kroger, Publix, Safeway)',
    cost: 'Free loyalty card',
    bestFor: 'Shoppers who buy groceries at the same chain weekly.',
    pros: ['Kroger Fuel Points — 100 points = 10 cents off per gallon (up to $1 off at Shell or Kroger fuel).', 'Publix has rotating gift card promos that stack with gas savings.', 'Safeway / Albertsons rewards earn points toward Chevron, Texaco, and Exxon discounts.'],
    cons: ['Points often expire after 30 days — use them or lose them.'],
    link: 'https://www.kroger.com/i/savings/fuel-points',
  },
];

export default function GasBuddyAlternatives() {
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <SEOHead title="Save on Gas: Best Apps & Habits" description="Seven ways to save money on gas — GasBuddy, Costco, Sam's Club, Walmart+, Upside cashback, Waze, and grocery fuel rewards. Honest comparison with safety notes." path="/tools/gas-buddy-alternatives" />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3"><div className="p-3 bg-amber-500/10 rounded-full"><Fuel className="h-8 w-8 text-amber-600" /></div></div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Save on Gas: Apps & Habits</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Seven picks to lower your gas bill — from free price-finders to warehouse club fuel and grocery rewards.</p>
          </div>
        </section>
        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Gas Savings' }]} />
          <Card className="border-border bg-amber-50/50 dark:bg-amber-950/10 mb-6">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-2">Read the fine print on cashback gas apps</p>
                  <p className="text-xs text-muted-foreground">Apps like Upside, GetUpside, and Fetch ask you to link a debit or credit card, and many of them share anonymized purchase data with third parties as part of the deal. The cashback is real — but read the privacy terms before linking. If you would rather not share, you can scan the receipt manually inside Upside instead of linking your card.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-4 mb-6">
            {(showAll ? PICKS : PICKS.slice(0, 3)).map(p => (
              <Card key={p.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{p.name}</p>
                    <Badge variant="outline">{p.cost}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {p.bestFor}</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">{p.pros.map((pr, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{pr}</span></li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">{p.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}</ul>
                    </div>
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">Visit / sign up <ExternalLink className="h-3 w-3" /></a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (<Button variant="outline" onClick={() => setShowAll(true)}>Show all 7 picks</Button>)}
          </div>
          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Habits that beat any app</p>
              <p className="text-xs text-muted-foreground">Keep tires inflated to the door-sticker pressure (saves up to 3% on fuel). Combine errands into one loop. Drive 60-65 mph on the highway instead of 75 (10-15% better mileage). Drop the rooftop carrier when you are not using it. Most drivers save more with these habits than with any single app.</p>
            </CardContent>
          </Card>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/maps-navigation-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Maps & Navigation Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Set up Waze and Google Maps the right way.</p>
              </Link>
              <Link to="/tools/credit-card-rewards-picker" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Credit Card Rewards Picker</p>
                <p className="text-xs text-muted-foreground mt-0.5">Find a card with strong gas cashback.</p>
              </Link>
              <Link to="/tools/senior-discount-finder-app" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Senior Discount Finder</p>
                <p className="text-xs text-muted-foreground mt-0.5">More everyday savings beyond the pump.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1"><ChevronRight className="h-3 w-3" /> Quick Tip: fill up Tuesday or Wednesday morning. National data shows those days have the lowest average prices most weeks.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
