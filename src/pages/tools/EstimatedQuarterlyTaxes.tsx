import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function EstimatedQuarterlyTaxes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Quarterly Taxes for Retirees | TekSure" description="Avoid IRS penalties. Plain-English guide to estimated taxes for senior retirees with pensions + IRAs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Quarterly Taxes for Retirees</h1>
          <p className="text-lg text-muted-foreground">Avoid IRS penalty surprises.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Who needs to pay</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Will owe $1,000+ in taxes for the year.</li>
              <li>Income from IRA withdrawals + pension.</li>
              <li>Capital gains from stock sales.</li>
              <li>Self-employment income.</li>
              <li>Rental property income.</li>
              <li>Dividends + interest above ~$3K.</li>
              <li>Social Security alone usually doesn&apos;t require it.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2026 due dates</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Q1 (Jan-Mar income): due April 15.</li>
              <li>Q2 (Apr-May): due June 16.</li>
              <li>Q3 (Jun-Aug): due September 15.</li>
              <li>Q4 (Sep-Dec): due January 15 (next year).</li>
              <li>Mark calendar — late = penalties.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easier alternative — withholding</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Have IRA custodian withhold federal tax on distributions.</li>
              <li>Have Social Security withhold (Form W-4V).</li>
              <li>Have pension withhold extra.</li>
              <li>Withholding = no quarterly payments needed.</li>
              <li>IRS treats withholding as paid evenly throughout year.</li>
              <li>Most retirees prefer this — set + forget.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safe harbor rule</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pay 100% of LAST year&apos;s tax = no penalty.</li>
              <li>(110% if AGI &gt; $150K.)</li>
              <li>Easy: divide last year&apos;s tax by 4 = quarterly payment.</li>
              <li>Or 90% of current year — riskier estimate.</li>
              <li>Keep proof of payments.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to pay</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>IRS Direct Pay</strong> — irs.gov/payments. FREE. From bank account.</li>
              <li><strong>EFTPS</strong> — ach.eftps.gov. Schedule months ahead.</li>
              <li><strong>Mail Form 1040-ES</strong> — include voucher.</li>
              <li>Pay state tax separately (your state revenue website).</li>
              <li>Save confirmation numbers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground"><strong>AARP Tax-Aide</strong> — free help February-April for any senior. <strong>VITA</strong> — IRS volunteer help if income under $64K. <strong>IRS Tax Counselor for Elderly (TCE)</strong> — year-round phone support 800-829-1040. CPA usually $300-600/yr — worth it for complex situations.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
