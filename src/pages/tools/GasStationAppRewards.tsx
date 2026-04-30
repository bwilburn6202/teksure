import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fuel } from 'lucide-react';

export default function GasStationAppRewards() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gas Station Apps for Seniors | TekSure" description="Save on gas with Shell, Exxon, Costco gas apps. Senior pump tips + rewards." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fuel className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gas Station Apps</h1>
          <p className="text-lg text-muted-foreground">Save 5–25 cents per gallon.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Shell Fuel Rewards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free signup.</li>
              <li>$0.05/gal off automatically.</li>
              <li>Up to $0.30/gal with bonus offers.</li>
              <li>Pay through app at pump.</li>
              <li>Stay in car — no card insertion.</li>
              <li>AARP partnership for additional savings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Exxon Mobil Rewards+</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$0.06/gal off using app.</li>
              <li>Earn points toward more discounts.</li>
              <li>Bonus point promotions.</li>
              <li>Pay through app — no swiping.</li>
              <li>Free signup.</li>
              <li>Largest gas station network.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Costco gas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Member-only — usually 20–40 cents cheaper than regular.</li>
              <li>Top-tier gasoline quality.</li>
              <li>Lines can be long.</li>
              <li>Costco Anywhere Visa adds 4% back on gas.</li>
              <li>Combined with low prices = best deal.</li>
              <li>Worth membership alone for frequent drivers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">GasBuddy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shows all gas prices near you.</li>
              <li>Sort by cheapest.</li>
              <li>Free.</li>
              <li>Updated by user reports.</li>
              <li>Pay with GasBuddy card — extra 5–25 cents/gal off.</li>
              <li>Saves gas itself driving to better stations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pump safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use locking gas cap — anti-theft.</li>
              <li>Keep card-skimmer detection app.</li>
              <li>Pay inside if uncomfortable at pump.</li>
              <li>Avoid pumps near dumpsters at night.</li>
              <li>Keep doors locked while pumping.</li>
              <li>Pump in well-lit areas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Grocery store gas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Kroger fuel points — biggest discount potential.</li>
              <li>Walmart+ — 10 cents/gal at Walmart, Murphy.</li>
              <li>Sam&apos;s Club gas — member only.</li>
              <li>Stack with credit card cashback.</li>
              <li>Compare with Costco for best deal.</li>
              <li>Save $5–$15 per fill-up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">GasBuddy + station app combo</h3>
            <p className="text-sm text-muted-foreground">Best strategy: use GasBuddy to find cheapest stations near you. Then use that station&apos;s app (Shell, Exxon) for additional rewards. If Costco is nearby and you&apos;re a member, often beats everything. Add Costco Anywhere Visa for additional 4% back. Many seniors save $200+ yearly through this stacking strategy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
