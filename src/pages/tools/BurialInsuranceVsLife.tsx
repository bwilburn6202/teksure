import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function BurialInsuranceVsLife() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Burial Insurance vs Life Insurance | TekSure" description="Compare burial + final expense + life insurance. Plain-English guide for seniors 60+." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Burial vs Life Insurance</h1>
          <p className="text-lg text-muted-foreground">Most seniors are oversold. Here&apos;s the truth.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Types explained</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Burial / final expense</strong> — small ($5K-25K). Covers funeral.</li>
              <li><strong>Term life</strong> — temporary. Cheap. 10-30 year terms.</li>
              <li><strong>Whole life</strong> — permanent. Expensive. Cash value.</li>
              <li><strong>Universal life</strong> — flexible whole life. Risk premiums rise.</li>
              <li><strong>Pre-paid funeral</strong> — funeral home contract. Locked-in price.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Average funeral 2026: $9,000-15,000.</li>
              <li>Cremation: $1,000-3,000.</li>
              <li>Direct cremation: $500-1,500.</li>
              <li>Match coverage to actual cost — don&apos;t overinsure.</li>
              <li>Many policies pay LESS than premiums total.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you DON&apos;T need life insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>House paid off + savings cover funeral.</li>
              <li>No dependents.</li>
              <li>Spouse has own resources.</li>
              <li>Adult kids financially stable.</li>
              <li>$10K+ in savings already.</li>
              <li>Self-insure — keep money in CD instead of policy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reasonable picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mutual of Omaha Living Promise</strong> — $10K guaranteed issue, no exam.</li>
              <li><strong>AARP/New York Life</strong> — bundle.</li>
              <li><strong>Colonial Penn</strong> — small, low cost. Watch for graded benefit.</li>
              <li><strong>Pre-paid funeral</strong> — only with reputable funeral home.</li>
              <li>Compare 3 quotes via Policygenius (free).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Free quote&quot; calls — high pressure.</li>
              <li>&quot;Graded benefit&quot; — only pays full after 2-3 yrs.</li>
              <li>Premiums rise dramatically with age.</li>
              <li>Whole life sold to seniors as &quot;investment.&quot;</li>
              <li>TV ads with celebrity endorsements.</li>
              <li>Pressure to buy before consulting family/advisor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Talk to fee-only advisor</h3>
            <p className="text-sm text-muted-foreground">Fee-only fiduciary advisor (NAPFA.org) gives unbiased advice — they don&apos;t earn commission. $200-400 one-time. Insurance agents earn 50-100% first-year premium as commission. Conflict of interest is huge. Get independent advice.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
