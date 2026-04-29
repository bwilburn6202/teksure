import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PiggyBank } from 'lucide-react';

export default function RetirementAccountTypes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Retirement Account Types — 401k, IRA, Roth Explained | TekSure" description="What&apos;s the difference between 401k, IRA, Roth, SEP, SIMPLE? Plain-English breakdown so you understand what you actually have." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PiggyBank className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Retirement Account Types</h1>
          <p className="text-lg text-muted-foreground">Know what you have. Plain English.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Traditional 401(k)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Through your employer.</li>
              <li>Contribute pre-tax money. Saves taxes today.</li>
              <li>Grows tax-deferred. Pay tax when you withdraw in retirement.</li>
              <li>2025 limit: $23,500/year, $31,000 if 50+ (catch-up).</li>
              <li>Required Minimum Distributions start at 73.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Roth 401(k)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Same as 401(k) but you contribute AFTER-tax money.</li>
              <li>Grows tax-free. Withdrawals tax-free in retirement.</li>
              <li>Best for: lower-tax-bracket workers (younger or part-time).</li>
              <li>No RMDs as of 2024.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Traditional IRA</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You open it yourself (Vanguard, Fidelity, Schwab).</li>
              <li>Pre-tax (deductible) IF income is under limits.</li>
              <li>Grows tax-deferred.</li>
              <li>2025 limit: $7,000/year, $8,000 if 50+.</li>
              <li>RMDs start at 73.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Roth IRA</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You contribute after-tax money.</li>
              <li>Grows tax-free. Withdrawals tax-free.</li>
              <li>Best account in retirement — withdrawals don\'t affect taxes, Medicare premiums.</li>
              <li>Income limits — $165,000 single / $246,000 married for 2025.</li>
              <li>NO required distributions, ever.</li>
              <li>If over income limit — "backdoor Roth" workaround exists.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SEP / SIMPLE IRA</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>SEP-IRA</strong>: for self-employed. High limit, simple paperwork.</li>
              <li><strong>SIMPLE IRA</strong>: for small business employees.</li>
              <li>Both pre-tax. RMDs apply.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pension / Defined Benefit</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Old-school employer plan. Promises a monthly check for life.</li>
              <li>Mostly disappearing in private sector. Still strong for federal, military, state, union.</li>
              <li>(See our "Pension Lump Sum vs Monthly" tool.)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">HSA — secret retirement account</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Triple tax advantage if you have a high-deductible health plan.</li>
              <li>After 65, withdraw for ANYTHING (taxed like IRA) or medical (tax-free).</li>
              <li>Maximize while working — best account that exists.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Common retiree question: "Is it traditional or Roth?"</h3>
            <p className="text-sm text-muted-foreground">Look at your account statement. "Pre-tax" or "Traditional" or "Tax-deferred" = pay tax when you withdraw. "After-tax" or "Roth" = tax-free withdrawals. Most workers have both pre-tax 401(k) AND a separate Roth IRA.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
