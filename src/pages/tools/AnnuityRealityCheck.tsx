import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function AnnuityRealityCheck() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Annuities — Reality Check | TekSure" description="Annuity sales pitch sound good? Plain-English honest take on which annuities help and which fees + commissions hurt." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Annuity Reality Check</h1>
          <p className="text-lg text-muted-foreground">Honest take. Skip the sales hype.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The honest take</h2>
            <p className="text-sm">90%+ of annuities sold to seniors are bad deals. High commissions (5-10% paid to salesman). Surrender charges 7-10 years. Complex riders that don&apos;t deliver. <strong>Few annuities make sense for most retirees.</strong></p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annuity types</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SPIA (Single Premium Immediate Annuity)</strong> — give insurance company $X, get $Y/month for life. Simple. Sometimes useful.</li>
              <li><strong>Deferred Income Annuity (DIA)</strong> — buy now, payments start later. Inflation hedge.</li>
              <li><strong>Fixed annuity</strong> — like CD with insurance company. OK if rates are good.</li>
              <li><strong>Variable annuity</strong> — invests in market with insurance wrapper. Usually high fees, AVOID.</li>
              <li><strong>Indexed annuity</strong> — capped market exposure. Marketed heavily. AVOID — too complex.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When SPIA makes sense</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You worry about outliving money.</li>
              <li>You don&apos;t have pension.</li>
              <li>You want guaranteed income beyond Social Security.</li>
              <li>You&apos;re 70+ and want to lock-in lifetime check.</li>
              <li>Buy from low-cost provider (Fidelity, Vanguard, USAA).</li>
              <li>Compare quotes at <strong>immediateannuities.com</strong>.</li>
              <li>Don&apos;t put more than 25-50% of nest egg in annuity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annuity sales red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Free dinner seminar" — high-pressure sales.</li>
              <li>"Guaranteed 7%" — usually has caveats.</li>
              <li>"You can&apos;t lose money" — true but inflation eats real return.</li>
              <li>"Tax-deferred" — IRA already does this. Don&apos;t pay 5% commission for it.</li>
              <li>Salesman won&apos;t reveal commission — RUN.</li>
              <li>"Limited-time offer" — annuities aren&apos;t time-sensitive.</li>
              <li>Multi-page contract with 4-point font.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you already bought an annuity</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read the contract — know surrender period + charges.</li>
              <li>Some have 30-day "free look" period — cancel, get money back.</li>
              <li>Get fee-only advisor opinion before doing anything else.</li>
              <li>Sometimes makes sense to "1035 exchange" to lower-cost annuity (no tax hit).</li>
              <li>NAILBA + State Insurance Commissioner can help with complaints.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When to walk away</h3>
            <p className="text-sm text-muted-foreground">If annuity has 7+ year surrender period, 5%+ commission, or M&amp;E (mortality expense) over 1.5% — walk away. Talk to fee-only fiduciary (NAPFA.org). They sell ZERO annuities + give honest advice. Pay $200-500 for unbiased opinion.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
