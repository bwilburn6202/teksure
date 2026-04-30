import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

export default function AmazonFreshWalmartPlus() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Fresh vs Walmart+ for Seniors | TekSure" description="Compare Amazon Fresh and Walmart+ grocery delivery memberships for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Truck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amazon Fresh vs Walmart+</h1>
          <p className="text-lg text-muted-foreground">Which grocery membership fits you best?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Amazon Fresh</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Included with Amazon Prime ($14.99/mo or $139/yr).</li>
              <li>Free delivery on orders $100+.</li>
              <li>$10 fee for orders under $50.</li>
              <li>Same-day or next-day in many cities.</li>
              <li>Whole Foods delivery via same Prime account.</li>
              <li>Best if already a Prime member.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Walmart+</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$98/year or $12.95/month.</li>
              <li>Free delivery from local Walmart, no minimum.</li>
              <li>Same-day delivery available.</li>
              <li>Free shipping on Walmart.com.</li>
              <li>10 cents/gallon off gas at Walmart, Murphy stations.</li>
              <li>Includes Paramount+ streaming free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Which to choose?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Amazon Fresh — if already paying for Prime.</li>
              <li>Walmart+ — if you shop Walmart anyway.</li>
              <li>Walmart+ — better for weekly small orders ($35).</li>
              <li>Amazon Fresh — better for less frequent big orders.</li>
              <li>Both have free trials — try each for a month.</li>
              <li>Cancel before trial ends if not using.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Walmart+ extras</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Paramount+ Essential included — saves $7.99/month.</li>
              <li>Mobile scan + go in stores — skip checkout line.</li>
              <li>RX prescription discounts — like GoodRx.</li>
              <li>Auto Care — discounts at Walmart auto centers.</li>
              <li>The bundle pays for membership easily.</li>
              <li>Many seniors stack it with Amazon Prime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Amazon Prime extras</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free 2-day shipping on millions of items.</li>
              <li>Prime Video — large streaming library.</li>
              <li>Prime Reading + Music free.</li>
              <li>Whole Foods 10% off most days.</li>
              <li>Prime Senior — $6.99/month (income-qualified).</li>
              <li>Combined value massive if you use everything.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">EBT/SNAP support</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Both accept EBT for grocery items.</li>
              <li>Walmart — has discounted Walmart+ for EBT users ($49/year).</li>
              <li>Amazon — has Prime Access at $6.99/month for EBT/Medicaid.</li>
              <li>Significant savings for low-income seniors.</li>
              <li>Eligible items clearly marked at checkout.</li>
              <li>Apply online, takes 5 minutes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with whichever store you use</h3>
            <p className="text-sm text-muted-foreground">If you already shop Walmart weekly, Walmart+ is the obvious pick — $98/year for free delivery on every order, plus Paramount+ included. If you&apos;re a long-time Amazon Prime member, just turn on Amazon Fresh — already included. Don&apos;t pay for both unless you genuinely use both. Try the free trial first, set a calendar reminder to cancel if not using it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
