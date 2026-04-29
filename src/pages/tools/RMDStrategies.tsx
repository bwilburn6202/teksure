import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function RMDStrategies() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Required Minimum Distribution (RMD) Strategies | TekSure" description="Plain-English explainer of RMD rules at 73, calculation, and tax-smart withdrawal strategies." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">RMD Strategies</h1>
          <p className="text-lg text-muted-foreground">Required at 73. Plan to minimize tax.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RMD basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Required at age 73 (SECURE Act 2.0 — was 72, now 73, soon 75).</li>
              <li>Applies to: traditional IRA, 401(k), 403(b), 457, SEP, SIMPLE.</li>
              <li>NOT required: Roth IRA (lifetime). Roth 401k starting 2024.</li>
              <li>First RMD by April 1 of year after turning 73.</li>
              <li>After that, December 31 deadline annually.</li>
              <li>Penalty: 25% of missed amount (was 50%, reduced 2023).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Calculate RMD</h2>
            <p className="text-sm">RMD = balance Dec 31 prior year ÷ life expectancy factor (IRS table).</p>
            <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
              <li>Age 73 — divide by 26.5.</li>
              <li>Age 75 — divide by 24.6.</li>
              <li>Age 80 — divide by 20.2.</li>
              <li>Age 90 — divide by 12.2.</li>
              <li>Most brokerages calculate FOR you — Vanguard, Fidelity, Schwab.</li>
              <li>Just check + withdraw.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax-smart strategies</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>QCD (Qualified Charitable Distribution)</strong> — give RMD directly to charity. Up to $108K (2025). Counts toward RMD. NO income tax.</li>
              <li><strong>Convert to Roth BEFORE 73</strong> — pay tax now at lower rate, no future RMD.</li>
              <li><strong>Spread big withdrawals</strong> — manage IRMAA + tax brackets.</li>
              <li><strong>Withhold tax from RMD</strong> — easier than estimated payments.</li>
              <li><strong>"In-kind" distribution</strong> — transfer stocks rather than sell. Same RMD value, no immediate sale.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Multiple IRAs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Calculate RMD for EACH IRA.</li>
              <li>Can withdraw TOTAL from any one or multiple.</li>
              <li>401(k) RMDs separate — must take from each 401k.</li>
              <li>Consolidating to one IRA simplifies — and easier for heirs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free calculators</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bankrate RMD calculator — free.</li>
              <li>Schwab, Fidelity, Vanguard sites have RMD calculators.</li>
              <li>IRS Publication 590-B — official rules.</li>
              <li>Boldin / Empower — multi-year RMD planning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t miss</h3>
            <p className="text-sm text-muted-foreground">25% penalty on missed RMD is brutal. Set up auto-withdrawal at brokerage by November each year. Never have to remember. Brokerage moves money to checking — done.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
