import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export default function SeniorTaxCredits() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Tax Credits & Deductions — Save Thousands | TekSure" description="Adults 65+ get extra deductions, property tax breaks, and credits most miss. Plain-English guide to senior-specific tax savings." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Receipt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Tax Credits</h1>
          <p className="text-lg text-muted-foreground">Tax breaks the IRS quietly gives you when you turn 65.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Federal: Extra Standard Deduction</h2>
            <p className="text-sm">If you\'re 65+, you get an additional $1,950 (single) or $1,550 (married, per spouse) added to the standard deduction. 2025 numbers:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Single 65+: $16,550 (up from $14,600 under 65).</li>
              <li>Married filing jointly, both 65+: $32,300 (up from $29,200).</li>
              <li>Blind? Add another $1,950 (or $1,550 if married).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Federal: Credit for the Elderly or Disabled</h2>
            <p className="text-sm">Income-based federal credit, $3,750 to $7,500. Mostly for retirees on Social Security with little other income. Check IRS Schedule R.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Federal: Medical Expense Deduction</h2>
            <p className="text-sm">If you ITEMIZE — medical expenses over 7.5% of income are deductible. Includes:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Medicare Part B/D premiums.</li>
              <li>Medicare Advantage premiums.</li>
              <li>Long-term care insurance premiums (capped by age — $5,880/year at 71+).</li>
              <li>Dental, vision, hearing aids.</li>
              <li>Travel to medical appointments — 21¢/mile in 2025.</li>
              <li>Home modifications for medical reasons (grab bars, ramps).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Federal: QCD (Qualified Charitable Distribution)</h2>
            <p className="text-sm">If 70.5+, you can send up to $105,000 from your IRA directly to charity. Counts toward Required Minimum Distribution but is TAX-FREE — better than donating cash and itemizing.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">State: Property tax breaks for seniors</h2>
            <p className="text-sm mb-2">Almost every state offers SOMETHING for seniors:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Homestead exemption</strong> — extra reduction in property value used for tax. (FL, TX, MI, OH have generous ones.)</li>
              <li><strong>Senior property tax freeze</strong> — your property tax stops increasing once you reach 65 or 70. (IL, NY, NJ, MO, etc.)</li>
              <li><strong>School tax relief / STAR (NY)</strong> — exemption on school taxes for seniors.</li>
              <li><strong>Property tax circuit breaker</strong> — if property tax exceeds X% of income, state pays the difference. (MN, MA, others.)</li>
              <li><strong>Property tax deferral</strong> — defer paying until home is sold (OR, ID, CA).</li>
            </ul>
            <p className="text-sm mt-3">Search "[your state] property tax senior" or call your county assessor.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">State: Income tax breaks for retirees</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>9 states have NO state income tax (FL, TX, NV, WA, WY, SD, AK, NH, TN). Big savings to retire there.</li>
              <li>Many states EXEMPT Social Security — IL, MS, PA fully. Most others partially.</li>
              <li>Some states exempt pensions and military retirement.</li>
              <li>Search "[your state] tax retirement income".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get free help</h3>
            <p className="text-sm text-muted-foreground"><strong>AARP Tax-Aide</strong> volunteers are trained on senior tax breaks. Free Feb-April at libraries and senior centers nationwide. They\'ll catch credits and deductions you might miss. (See our Free Tax Filing Coach.)</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
