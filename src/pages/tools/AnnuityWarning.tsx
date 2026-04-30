import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function AnnuityWarning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Annuity Warning — When to Buy, When to Run | TekSure" description="Insurance brokers love selling annuities. Most retirees should AVOID complex annuities. Plain-English explainer of the good ones, the bad ones, and the traps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Annuity Warning</h1>
          <p className="text-lg text-muted-foreground">When they\'re great. When they\'re a trap.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">✅ The GOOD annuities (rare)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SPIA — Single Premium Immediate Annuity</strong>. You hand over a lump sum; they pay you a monthly check for life. Simple. Low fees. Useful for some retirees.</li>
              <li><strong>QLAC — Qualified Longevity Annuity Contract</strong>. Defers payments to age 80-85. Insurance against living too long. Reduces RMDs.</li>
              <li><strong>MYGA — Multi-Year Guaranteed Annuity</strong>. CD-like. Locks in 5-6% for 3-7 years. Tax-deferred.</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">Buy these from low-cost insurers via fee-only advisors — Schwab, Fidelity, Vanguard, or Stan Haithcock\'s "annuityman.com".</p>
          </CardContent>
        </Card>

        <Card className="mb-4 border-destructive">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">❌ The BAD annuities (most pitched to seniors)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Variable annuity</strong> — invested in mutual funds inside the annuity. Fees often 3%+/year. Surrender penalties 5-10 years. Locks money up.</li>
              <li><strong>Indexed annuity</strong> — promises stock market upside with "no downside". Reality: caps and "participation rates" capture 3-7% even when market does 20%. Heavy fees, complex.</li>
              <li><strong>Fixed annuity (multi-year)</strong> ← good if simple MYGA, bad if loaded with riders.</li>
            </ul>
            <p className="text-sm mt-2"><strong>Hallmarks of a bad annuity</strong>: long surrender period (5-10 years), commission to seller of 5-10% of your investment, multiple "riders" with extra fees, complex math you can\'t explain back.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sales tactics to watch for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Free dinner seminar"</strong> — almost always a sales pitch. The "free" steak costs you when you buy the annuity.</li>
              <li><strong>"Tax-free retirement income"</strong> — usually means cash-value life insurance or indexed annuities. Both have hidden costs.</li>
              <li><strong>"Lifetime income rider"</strong> — adds 1-2%/year extra in fees. Often unnecessary.</li>
              <li><strong>"You can\'t lose money"</strong> — but you can lose to inflation, opportunity cost, and fees.</li>
              <li><strong>"Just trust me"</strong> — never. Get every claim in writing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Already bought one — what now?</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>1035 exchange</strong> — IRS rule that lets you swap one annuity for another tax-free. May save fees. Talk to fiduciary advisor.</li>
              <li><strong>Surrender period</strong> — wait until past surrender (often 5-10 years) to avoid penalty.</li>
              <li><strong>Often locked in</strong> — accept the loss. Don\'t throw good money after bad.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Bottom line</h3>
            <p className="text-sm text-muted-foreground">If you want guaranteed income — SPIA from a top-rated insurer. If you want growth + safety — index funds + bond ladder, NOT a complex annuity. Always get a 2nd opinion from a fee-only fiduciary BEFORE signing.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
