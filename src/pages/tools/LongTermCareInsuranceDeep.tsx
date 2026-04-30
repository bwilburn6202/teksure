import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function LongTermCareInsuranceDeep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Long-Term Care Insurance Deep Dive | TekSure" description="Should seniors buy LTCI? Costs, alternatives, hybrid policies explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Long-Term Care Insurance</h1>
          <p className="text-lg text-muted-foreground">Pay for nursing home, in-home care.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What LTCI covers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Nursing home care.</li>
              <li>Assisted living.</li>
              <li>In-home care.</li>
              <li>Adult day care.</li>
              <li>Hospice care.</li>
              <li>NOT covered by Medicare beyond 100 days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Best to buy in 50s-60s.</li>
              <li>$2,500-$5,000/year typical at 60.</li>
              <li>Premiums increase with age.</li>
              <li>Pre-existing conditions raise cost.</li>
              <li>Some can&apos;t qualify after 70.</li>
              <li>Premiums can rise during policy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hybrid life-LTC policies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pays death benefit OR LTC.</li>
              <li>Can&apos;t lose money if don&apos;t use.</li>
              <li>Single premium ($75K+) typical.</li>
              <li>Or 10-pay options.</li>
              <li>More popular than traditional LTCI.</li>
              <li>Talk to advisor about pros/cons.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Self-insure option</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Save what you&apos;d pay in premiums.</li>
              <li>$3,000/year × 30 years = significant.</li>
              <li>Healthy seniors may never use LTCI.</li>
              <li>If never use — premiums lost.</li>
              <li>Self-insure if substantial savings.</li>
              <li>Most American adults self-insure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicaid as backup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If savings depleted — Medicaid covers nursing home.</li>
              <li>Must spend down assets first.</li>
              <li>5-year lookback on transfers.</li>
              <li>Quality varies — best facilities private-pay.</li>
              <li>Many seniors end on Medicaid.</li>
              <li>Plan ahead with elder law attorney.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When LTCI worth it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Net worth $300K-$1M (sweet spot).</li>
              <li>Family history of dementia.</li>
              <li>Want to leave inheritance.</li>
              <li>Buy in your 50s-early 60s.</li>
              <li>Healthy enough to qualify.</li>
              <li>Can comfortably afford premiums.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Talk to fee-only advisor</h3>
            <p className="text-sm text-muted-foreground">LTCI is complex — premiums vary widely + insurers go out of business. Talk to a fee-only fiduciary advisor (not commission-based). They&apos;ll review your situation and recommend whether to buy traditional LTCI, hybrid policy, self-insure, or rely on Medicaid eventually. Often the right answer differs by individual situation.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
