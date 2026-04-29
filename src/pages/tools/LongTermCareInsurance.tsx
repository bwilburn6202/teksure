import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function LongTermCareInsurance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Long-Term Care Insurance Reality | TekSure" description="LTC insurance pros, cons, alternatives. Plain-English honest take for those considering it in their 50s-60s." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Long-Term Care Insurance</h1>
          <p className="text-lg text-muted-foreground">Honest reality check.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it covers</h2>
            <p className="text-sm">Pays for help with daily activities (bathing, dressing, eating) when you can&apos;t do them yourself. In-home care, assisted living, nursing home, memory care. Original Medicare does NOT cover long-term care.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reality of the cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buy at age 55-65 = $2,000-5,000/year.</li>
              <li>Buy at 70+ = $5,000-10,000+/year (or denied).</li>
              <li>Premiums often increase 5-15% per year.</li>
              <li>Coverage typically $150-300/day for 2-5 years.</li>
              <li>Inflation rider — $$$ but critical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Who should consider it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Net worth $500K-$2M (too much for Medicaid, not enough to self-insure).</li>
              <li>Family history of dementia, Parkinson&apos;s, etc.</li>
              <li>Buy by age 60-65.</li>
              <li>In good health when buying.</li>
              <li>Steady income to keep paying premiums in retirement.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip if...</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Net worth under $250K — Medicaid will cover.</li>
              <li>Net worth $5M+ — self-insure.</li>
              <li>You&apos;re 70+ in poor health — too expensive.</li>
              <li>Premium jumps would force lapse.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hybrid life + LTC</strong> — combines life insurance + LTC. If unused, heirs get life insurance.</li>
              <li><strong>Self-insure</strong> — set aside $250-500K specifically.</li>
              <li><strong>Continuing Care community (CCRC)</strong> — see /tools/ccrc-explained.</li>
              <li><strong>Home equity</strong> — reverse mortgage IF needed.</li>
              <li><strong>Family caregivers</strong> — formal agreement + payment.</li>
              <li><strong>Medicaid planning</strong> — protect assets via attorney 5+ years before need.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Use fee-only fiduciary</h3>
            <p className="text-sm text-muted-foreground">LTC insurance commissions are huge — agents push regardless of fit. Use fee-only fiduciary advisor (NAPFA.org). Pay $300-1,000 for honest analysis. May save $20K+ in unnecessary premiums OR find right policy fit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
