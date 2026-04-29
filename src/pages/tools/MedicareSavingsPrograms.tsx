import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet } from 'lucide-react';

export default function MedicareSavingsPrograms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Savings Programs (QMB/SLMB/QI) | TekSure" description="Save $185+/mo on Medicare. Plain-English MSP guide for income-eligible seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wallet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medicare Savings Programs</h1>
          <p className="text-lg text-muted-foreground">Pay $0 for Part B. Most eligible don&apos;t apply.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">3 main programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>QMB (Qualified Medicare Beneficiary)</strong> — pays Part A + B + deductibles + copays.</li>
              <li><strong>SLMB (Specified Low-Income)</strong> — pays Part B premium ($185/mo).</li>
              <li><strong>QI (Qualifying Individual)</strong> — pays Part B premium.</li>
              <li>Each saves you $2,000-10,000/year.</li>
              <li>Auto-qualifies you for Extra Help (drugs).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2026 income limits (monthly)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>QMB</strong> — Individual $1,275, Couple $1,724.</li>
              <li><strong>SLMB</strong> — Individual $1,526, Couple $2,064.</li>
              <li><strong>QI</strong> — Individual $1,715, Couple $2,320.</li>
              <li>Asset limits: ~$9,660 individual, $14,470 couple.</li>
              <li>Some states higher limits — check yours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What QMB covers (best one)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Part B premium — $185/mo saved.</li>
              <li>Deductibles — $1,676 Part A, $257 Part B saved.</li>
              <li>Coinsurance — 20% Part B coinsurance covered.</li>
              <li>Copays.</li>
              <li>$2,500-12,000/year savings.</li>
              <li>Plus Extra Help for drugs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apply through STATE Medicaid office (NOT Medicare).</li>
              <li>Each state has slight variations.</li>
              <li>FREE help: SHIP counselors. shiphelp.org.</li>
              <li>BenefitsCheckUp.org — checks all benefits eligibility.</li>
              <li>Apply even if &quot;not sure&quot; — many surprised they qualify.</li>
              <li>Re-apply yearly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t make these mistakes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many qualify but don&apos;t apply (assume too rich).</li>
              <li>Many states EXCLUDE home + 1 car from assets.</li>
              <li>Don&apos;t count Social Security as full income — small deduction.</li>
              <li>Pre-tax retirement contributions reduce income.</li>
              <li>Reapply annually — limits + your situation change.</li>
              <li>Couples: even one spouse may qualify alone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">3 Free help options</h3>
            <p className="text-sm text-muted-foreground"><strong>SHIP</strong> — 1-877-839-2675. Free Medicare counseling. <strong>Eldercare Locator</strong> — 1-800-677-1116. <strong>BenefitsCheckUp.org</strong> — NCOA tool checks ALL benefits. Most seniors qualify for $5,000+/yr in benefits — apply.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
