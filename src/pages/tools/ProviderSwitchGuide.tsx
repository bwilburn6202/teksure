import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeftRight } from 'lucide-react';

export default function ProviderSwitchGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Switch Phone Provider — Save $500/yr | TekSure" description="Switch from Verizon/AT&amp;T/T-Mobile to a cheaper plan. Plain-English steps to keep your number, save $30-60/month." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ArrowLeftRight className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Switch Phone Provider</h1>
          <p className="text-lg text-muted-foreground">$500-1,500/year savings is common.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Are you overpaying?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Verizon/AT&amp;T/T-Mobile postpaid — typically $70-90 per line.</li>
              <li>"MVNO" prepaid (uses same towers) — $15-30 per line.</li>
              <li>Most seniors use 2-5 GB/month — postpaid plans waste data you don&apos;t use.</li>
              <li>If you&apos;re paying $80+ for one line, you almost certainly can save.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best cheap plans (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mint Mobile</strong> — $15/mo (5GB), $20 (15GB), $25 (20GB), $30 unlimited. T-Mobile network. Buy 12 months upfront.</li>
              <li><strong>US Mobile</strong> — $10-50. Pick your network — Verizon, T-Mobile, or AT&amp;T tower.</li>
              <li><strong>Visible (by Verizon)</strong> — $25-45. Verizon network. Unlimited.</li>
              <li><strong>Consumer Cellular</strong> — $20-55. AARP discount. Senior-focused.</li>
              <li><strong>T-Mobile Connect</strong> — $15-25. T-Mobile network.</li>
              <li><strong>Boost Mobile</strong> — $25-50. Multiple networks.</li>
              <li><strong>Tello</strong> — $5-39. T-Mobile network. Cheap as it gets.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Switching steps (1 hour)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pick new carrier. Check coverage map for your zip.</li>
              <li>Most have 7-30 day money-back trials.</li>
              <li>Get your "PIN" or "transfer number" from current carrier (call or app).</li>
              <li>Sign up with new carrier. Provide phone number + PIN.</li>
              <li>New SIM arrives in 2-5 days (or use eSIM, instant).</li>
              <li>Insert SIM. Phone activates in 5-30 min. Number transfers in hours.</li>
              <li>Cancel old service after confirming new one works.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Will my phone work?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most US phones bought after 2018 are "unlocked" or unlock-able.</li>
              <li>Search "[your phone model] compatible carriers" or use carrier&apos;s checker.</li>
              <li>If under contract — finish payments first OR get phone "unlocked" by old carrier.</li>
              <li>iPhones and recent Samsungs work on all major networks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior plans + discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Verizon 55+ plan</strong> — $40/line (FL only) or $62 unlimited.</li>
              <li><strong>T-Mobile Essentials 55+</strong> — $35/line for 2 lines (in select states).</li>
              <li><strong>AT&amp;T senior discount</strong> — limited, FL/NY only.</li>
              <li><strong>Consumer Cellular AARP discount</strong> — 5% off + waived activation.</li>
              <li><strong>Lifeline subsidy</strong> — up to $9.25/mo off for income-qualifying seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try before fully committing</h3>
            <p className="text-sm text-muted-foreground">Mint Mobile and US Mobile both let you test their network on your phone for FREE for 7 days using eSIM. Make sure coverage works at home before switching. Reduces switching anxiety.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
