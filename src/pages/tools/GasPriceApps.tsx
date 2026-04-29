import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fuel } from 'lucide-react';

const APPS = [
  { name: 'GasBuddy', cost: 'FREE', best: 'The biggest gas price tracker. Crowdsourced — drivers report prices in real time.', good: 'Most accurate.' },
  { name: 'Waze', cost: 'FREE', best: 'Navigation app shows gas prices along your route. Owned by Google.', good: 'Best while driving.' },
  { name: 'Google Maps', cost: 'FREE', best: 'Search "gas near me" — Maps shows prices for stations on the map.', good: 'Already on your phone.' },
  { name: 'Costco app', cost: 'FREE (membership $65/yr)', best: 'Locates Costco gas stations. Often $0.20-0.40 cheaper than nearby competitors.', good: 'Best per-gallon savings.' },
  { name: 'Sam&apos;s Club app', cost: 'FREE (membership $50/yr)', best: 'Same idea as Costco. Members-only fuel pricing.', good: 'Cheap if you shop there anyway.' },
  { name: 'Upside', cost: 'FREE', best: 'Cash back app for gas (and groceries/restaurants). 10-25 cents/gallon back.', good: 'Stack with credit card cash back.' },
  { name: 'Exxon Mobil Rewards+', cost: 'FREE', best: 'Brand loyalty app. Earn points, redeem for free gas. 3-6 cents/gallon back.', good: 'If you fuel at Exxon often.' },
];

export default function GasPriceApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gas Price &amp; Cash-Back Apps — Save at the Pump | TekSure" description="The best free apps to find the cheapest gas near you and earn cash back per gallon. Plain-English picks for drivers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fuel className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gas Price Apps</h1>
          <p className="text-lg text-muted-foreground">Save 20-50 cents/gallon. $200-500/year for most drivers.</p>
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
            <h2 className="font-bold text-xl mb-3">Stack savings</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Use GasBuddy to find the cheapest station on your route.</li>
              <li>Activate Upside offer for that station BEFORE pumping.</li>
              <li>Pay with a cash-back credit card (Costco Visa = 4% on gas, AmEx Blue Cash = 3%).</li>
              <li>Snap receipt in Upside after pumping for confirmation.</li>
              <li>Combined: 30-60 cents/gallon back. $300-600/year for typical commuter.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick tip</h3>
            <p className="text-sm text-muted-foreground">Gas is usually cheapest Monday and Tuesday mornings. Most expensive Thursday-Saturday. If you can fill up early in the week, you&apos;ll save without trying.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
