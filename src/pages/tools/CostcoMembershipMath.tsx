import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function CostcoMembershipMath() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Costco Membership Worth It? — Plain Math | TekSure" description="Is the $65 Gold Star or $130 Executive worth it for a senior household? Plain-English math, surprising perks, and honest answer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Costco Membership Math</h1>
          <p className="text-lg text-muted-foreground">$65, $130 — when does it pay back?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2025 prices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Gold Star</strong> — $65/year. Two cards (you + spouse).</li>
              <li><strong>Executive</strong> — $130/year. Same access + 2% cash back on purchases (capped at $1,250/year).</li>
              <li>Executive break-even: spend $3,250/year at Costco. Below that, Gold Star wins.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Worth it if you spend regularly on...</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Gas</strong> — usually $0.20-0.40/gallon cheaper than nearby. $200+/year savings for typical driver.</li>
              <li><strong>Prescriptions</strong> — Costco Pharmacy is one of the cheapest in the US. No membership needed for pharmacy by federal law, but members get pricing.</li>
              <li><strong>Hearing aids</strong> — Kirkland brand 30-50% less than competitors. $1,500-2,000 savings.</li>
              <li><strong>Tires</strong> — installation, lifetime rotation, road hazard included. Saves $100+ vs Discount Tire.</li>
              <li><strong>Eyeglasses</strong> — frames + lenses ~$70-150 vs $300+ elsewhere.</li>
              <li><strong>Travel</strong> — Costco Travel often beats Expedia for cruises, rentals, hotels.</li>
              <li><strong>Bulk groceries</strong> — meat, eggs, paper goods, vitamins.</li>
              <li><strong>Rotisserie chicken</strong> — $5 (subsidized).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">NOT worth it if...</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You live alone, eat little, no freezer space.</li>
              <li>Drive an EV (no gas savings).</li>
              <li>No Costco within 30 minutes.</li>
              <li>Buy mostly fresh produce in small amounts.</li>
              <li>Already use BJ&apos;s or Sam&apos;s Club.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Underused perks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hearing test</strong> — FREE (members) at any Hearing Aid Center.</li>
              <li><strong>Photo conversion</strong> — VHS to digital, photo prints, books.</li>
              <li><strong>Auto Buying Program</strong> — pre-negotiated car prices. Often $1-3K below MSRP.</li>
              <li><strong>Concierge tech support</strong> — free for major electronics. 90-day return on most electronics.</li>
              <li><strong>Identity theft monitoring</strong> — free with Executive membership (CitizensGo).</li>
              <li><strong>Free price adjustments</strong> — bring receipt within 30 days, get refund of difference.</li>
              <li><strong>Fuel station saves up to $0.40/gallon</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">100% money-back guarantee</h2>
            <p className="text-sm">If you decide Costco isn&apos;t for you, ask for a full membership refund — even at end of year. They&apos;ll refund 100%. No fine print. Try it for a year, get money back if it didn&apos;t pay off.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior discount?</h3>
            <p className="text-sm text-muted-foreground">Costco does NOT offer a senior discount. AARP doesn&apos;t cover Costco. But Executive members spending $3,250+/year already get 2% back — that&apos;s effectively a senior-friendly discount for active shoppers.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
