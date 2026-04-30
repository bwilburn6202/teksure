import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const SVCS = [
  { name: 'IRS Direct File', cost: 'FREE', best: 'Brand new (2024). File federal return free with IRS itself. Available in 25+ states. Senior-friendly.', good: 'Best free.' },
  { name: 'IRS Free File', cost: 'FREE (income under $79K)', best: 'Partnership with TurboTax, FreeTaxUSA, etc. Income-limited.', good: 'Best free traditional.' },
  { name: 'AARP Tax-Aide', cost: 'FREE in person', best: 'IRS-certified volunteers. Free tax prep for seniors at libraries + community centers. No income limit.', good: 'Best in-person.' },
  { name: 'FreeTaxUSA', cost: '$0 federal / $15 state', best: 'Truly cheap. Handles complex returns. Direct File alternative.', good: 'Best low-cost paid.' },
  { name: 'TurboTax', cost: '$60-200', best: 'Most popular. Best UI. Costly creep — "upgrade!" prompts everywhere.', good: 'Easiest UI.' },
  { name: 'H&amp;R Block', cost: '$45-180', best: 'Online OR in-person at any location. Audit support included.', good: 'Best hybrid.' },
];

export default function TaxFilingPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tax Filing Software Compared | TekSure" description="IRS Direct File, AARP Tax-Aide, TurboTax. Plain-English picks for seniors filing federal + state taxes — free options first." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tax Filing Picks</h1>
          <p className="text-lg text-muted-foreground">Free options first. TurboTax last.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AARP Tax-Aide — best for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free, in-person tax prep at 5,000+ US locations.</li>
              <li>IRS-certified volunteers (most are retired CPAs/accountants).</li>
              <li>NO age, income, or AARP membership requirement.</li>
              <li>Handles federal + state.</li>
              <li>Find at <strong>aarp.org/findtaxhelp</strong> — search by zip.</li>
              <li>Open February through April. Schedule appointments.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tax breaks (often missed)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Higher standard deduction at 65+</strong> — extra $1,950 (single) / $1,550 (married per spouse) in 2025.</li>
              <li><strong>Tax credit for elderly</strong> (Schedule R) — for low-income 65+.</li>
              <li><strong>Medical deduction</strong> — anything over 7.5% of income, including Medicare premiums and long-term care.</li>
              <li><strong>Charitable QCD</strong> — give from IRA directly to charity, skip the income.</li>
              <li><strong>State property tax breaks</strong> — most states give 65+ partial exemption. ASK your assessor.</li>
              <li><strong>Reverse mortgage interest</strong> — sometimes deductible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Documents to gather</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SSA-1099 (Social Security).</li>
              <li>1099-R (pensions, IRA withdrawals).</li>
              <li>1099-INT, 1099-DIV (interest, dividends).</li>
              <li>W-2 if still working.</li>
              <li>1099-MISC (any side income).</li>
              <li>1095-B or 1095-A (health insurance).</li>
              <li>Property tax + mortgage interest if itemizing.</li>
              <li>Medical expense totals + receipts.</li>
              <li>Charitable donation receipts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Required IRA distributions</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re 73+ and have a traditional IRA — you MUST take a Required Minimum Distribution (RMD) each year. Penalty for missing is 25% of what you should have withdrawn. Brokerage usually calculates for you. Don&apos;t skip.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
