import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function AmazonPrimePerks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Prime Perks for Seniors | TekSure" description="Get full value from Prime. Plain-English guide to senior-relevant Amazon Prime benefits." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Package className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amazon Prime Perks</h1>
          <p className="text-lg text-muted-foreground">$139/yr — most don&apos;t use 1/4 of benefits.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior $7/mo discount</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If on EBT, Medicaid — Prime is $6.99/mo (vs $14.99).</li>
              <li>Saves $96/year.</li>
              <li>Re-verify yearly.</li>
              <li>Apply at amazon.com/qualify.</li>
              <li>Same benefits as full Prime.</li>
              <li>Privacy — Amazon doesn&apos;t share with anyone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Often-missed benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Amazon Photos</strong> — UNLIMITED photo storage. HUGE perk.</li>
              <li><strong>Prime Reading</strong> — 1,000+ ebooks free.</li>
              <li><strong>Amazon Music</strong> — 100M songs (basic tier).</li>
              <li><strong>Prime Video</strong> — movies + TV included.</li>
              <li><strong>Whole Foods discount</strong> — 10% off sale items.</li>
              <li><strong>Amazon Fresh delivery</strong> — free over $35.</li>
              <li><strong>Same-day delivery</strong> in many cities — free.</li>
              <li><strong>Try Before You Buy</strong> — clothing, return free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save more on Amazon</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Subscribe &amp; Save</strong> — 5-15% off recurring orders.</li>
              <li><strong>Camelcamelcamel.com</strong> — price history tracker.</li>
              <li><strong>Honey browser extension</strong> — auto-applies coupons.</li>
              <li><strong>Amazon Warehouse</strong> — open box / used 30-50% off.</li>
              <li><strong>Buy refurbished</strong> — same warranty often.</li>
              <li><strong>Lightning Deals</strong> — short-term discounts on app.</li>
              <li><strong>Prime Day</strong> (July) + Black Friday — biggest sales.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid Amazon traps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Watch &quot;sponsored&quot; results — usually not best.</li>
              <li>Read recent reviews (last 6 months).</li>
              <li>Check seller — &quot;Sold by Amazon&quot; safer than 3rd party.</li>
              <li>Don&apos;t buy fragile items from 3rd party sellers.</li>
              <li>Counterfeits common — stick to brand-owned listings.</li>
              <li>Verify prices — sometimes higher than other retailers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cancel if not using</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Account → Manage Prime Membership → End Membership.</li>
              <li>If under-25 orders/yr — probably not worth it.</li>
              <li>Free pickup at Whole Foods/Kohl&apos;s an alternative.</li>
              <li>Walmart+ ($98/yr) sometimes better value.</li>
              <li>Sign up annually for Prime Day, cancel after.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family share</h3>
            <p className="text-sm text-muted-foreground">Amazon Household — share Prime with 1 adult + 4 kids/teens free. Spouse/family member gets Prime free. Both shopping accounts kept separate. Combine 2 households into one Prime — save $139. Settings → Amazon Household.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
