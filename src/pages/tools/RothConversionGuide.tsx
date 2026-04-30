import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRightLeft } from 'lucide-react';

export default function RothConversionGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Roth IRA Conversion Guide | TekSure" description="Convert traditional IRA to Roth in retirement. Plain-English explainer of when conversions save taxes long-term." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ArrowRightLeft className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Roth Conversion Guide</h1>
          <p className="text-lg text-muted-foreground">Smart move for many retirees.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it means</h2>
            <p className="text-sm">Move money from traditional IRA → Roth IRA. Pay tax NOW on the amount converted. Future withdrawals are tax-free. Forever.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why convert</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lower tax now than future</strong> — early retirement (60-69) often has low income → low tax bracket.</li>
              <li><strong>RMDs avoided</strong> — Roth has no Required Minimum Distributions. Trad IRA forces withdrawals at 73.</li>
              <li><strong>Heir tax savings</strong> — Roth inheritances are tax-free.</li>
              <li><strong>Medicare premium control</strong> — Roth withdrawals don&apos;t count toward IRMAA Medicare surcharges.</li>
              <li><strong>Tax diversification</strong> — mix of traditional + Roth gives flexibility.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best time to convert</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Years 60-72</strong> — sweet spot. Retired, before RMDs, before higher Social Security taxes.</li>
              <li><strong>Year of low income</strong> — no W-2, before SS starts.</li>
              <li><strong>Market crash year</strong> — convert "low" + grow tax-free.</li>
              <li><strong>NOT</strong> if you&apos;re in highest tax bracket NOW — wait.</li>
              <li><strong>NOT</strong> if you&apos;ll need the money in next 5 years — Roth has 5-yr rule.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to do it</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Talk to fee-only fiduciary advisor first. <strong>This decision is complex.</strong></li>
              <li>Calculate: amount + your current tax rate vs expected future rate.</li>
              <li>Convert in chunks (e.g., $20K-50K/year) to fill lower tax brackets.</li>
              <li>Brokerage moves money internally. Done in days.</li>
              <li>You&apos;ll receive 1099-R for converted amount.</li>
              <li>Owe taxes April 15 next year on conversion.</li>
              <li>Convert SAME WEEK as new tax year starts so you have full year to plan.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Costs to consider</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Higher AGI year → may push Medicare IRMAA surcharge.</li>
              <li>Higher AGI → may make more Social Security taxable.</li>
              <li>State income tax on conversion.</li>
              <li>Pay tax from OUTSIDE the IRA (not from converted amount) for full benefit.</li>
              <li>Free tools: Boldin Roth Conversion Explorer, Bogleheads Roth calc.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hire fee-only advisor</h3>
            <p className="text-sm text-muted-foreground">Roth conversions can save / cost $50K-200K+ over a retirement. Worth $1,000-3,000 for a fee-only fiduciary advisor (NAPFA.org). They model multi-year strategies. NEVER advisor working on commission for conversions.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
