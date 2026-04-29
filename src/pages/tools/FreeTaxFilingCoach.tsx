import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function FreeTaxFilingCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Tax Filing — IRS Direct File, AARP Tax-Aide, FreeTaxUSA | TekSure" description="Don't pay TurboTax. The IRS, AARP, and several apps file your taxes for free. Here's which is right for you." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Tax Filing Coach</h1>
          <p className="text-lg text-muted-foreground">Most people can file federal taxes for free. Here's how.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🇺🇸 IRS Direct File (best for simple taxes)</h2>
            <p className="text-sm mb-2">The IRS\'s own free filing tool. Available in 25 states (and growing). Best for W-2 employees, retirees on Social Security, and simple returns.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Free for federal AND state in supported states.</li>
              <li>No income limit (in supported states for 2024+).</li>
              <li>Goes step by step like commercial software.</li>
              <li>Backed by the IRS — no upsells, no fake "free" trick.</li>
            </ul>
            <p className="text-sm mt-2">Check if your state qualifies at <a href="https://directfile.irs.gov" target="_blank" rel="noopener noreferrer" className="text-primary underline">directfile.irs.gov</a>.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">👴 AARP Foundation Tax-Aide (FREE in person, IDEAL for seniors)</h2>
            <p className="text-sm mb-2">A real human volunteer prepares your taxes for free. Designed for taxpayers 50+, but anyone can use it.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Available February-April at libraries, community centers, and senior centers nationwide.</li>
              <li>Volunteers are IRS-certified and re-trained every year.</li>
              <li>Bring your prior year return, all 1099s/W-2s, Social Security statement, and ID.</li>
            </ul>
            <p className="text-sm mt-2">Find a location at <a href="https://www.aarp.org/money/taxes/aarp_taxaide/" target="_blank" rel="noopener noreferrer" className="text-primary underline">aarp.org/money/taxes/aarp_taxaide</a> or call 1-888-AARPNOW.</p>
            <p className="text-sm mt-2 bg-muted/50 p-3 rounded"><strong>Most overlooked benefit for seniors.</strong> These volunteers are great. They catch things software misses.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🏛️ VITA (Volunteer Income Tax Assistance)</h2>
            <p className="text-sm">Same idea as Tax-Aide but for taxpayers earning less than ~$60,000. IRS-trained volunteers.</p>
            <p className="text-sm mt-2">Find a site at <strong>irs.gov/volunteers</strong> or call 211.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📱 Free online tax software</h2>
            <ul className="space-y-3 text-sm">
              <li><strong>FreeTaxUSA</strong> — federal is FREE for everyone. State is $14.99. Most reliable free option for non-simple taxes.</li>
              <li><strong>Cash App Taxes</strong> — federal AND state both free. Was Credit Karma Tax. Solid for moderate complexity.</li>
              <li><strong>IRS Free File</strong> — partnership with several software companies for those earning &lt;$84,000. Find at irs.gov/freefile.</li>
              <li><strong>TurboTax Free Edition</strong> — only really free for the simplest W-2 returns. They upsell you to "Deluxe" the moment you have a 1099 or itemize. Most people end up paying $80-$200.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Documents to gather first</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Last year\'s tax return (gives you starting numbers).</li>
              <li>SSA-1099 (Social Security benefits).</li>
              <li>1099-R (pension and IRA withdrawals).</li>
              <li>1099-INT and 1099-DIV (interest and dividends).</li>
              <li>1099-MISC or 1099-NEC if you did any side work.</li>
              <li>W-2 if you\'re still working.</li>
              <li>1098 (mortgage interest) and property tax records.</li>
              <li>Charitable donation receipts.</li>
              <li>Medical bills (if &gt;7.5% of income).</li>
              <li>1095-A or 1095-B (health insurance).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific deductions</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Higher standard deduction</strong> if you\'re 65+ ($16,550 single / $30,750 married, vs $15,000 / $29,200 under 65 in 2025).</li>
              <li><strong>QCDs</strong> — sending IRA money straight to charity reduces taxable income.</li>
              <li><strong>Medicare premiums</strong> count as deductible medical expenses if you itemize.</li>
              <li><strong>Long-term care insurance premiums</strong> — partially deductible (cap based on age).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When to hire a pro</h3>
            <p className="text-sm text-muted-foreground">If you have rental property, sold a business, did a Roth conversion, inherited an IRA, have multiple states, or sold a house — pay a CPA or Enrolled Agent ($300-700). They\'ll save you more than they cost.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
