import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRightCircle } from 'lucide-react';

export default function Plan401kRolloverCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="401(k) Rollover Coach — Move Your Old 401(k) | TekSure" description="Left a job? Plain-English steps to roll your 401(k) into an IRA. Avoid common mistakes that cost thousands." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ArrowRightCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">401(k) Rollover Coach</h1>
          <p className="text-lg text-muted-foreground">Move old retirement money to a better place.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to roll over</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>You changed jobs.</li>
              <li>You retired.</li>
              <li>Your old 401(k) has high fees (over 0.5% expense ratio).</li>
              <li>Your old 401(k) has limited investment options.</li>
              <li>You want everything in one account for simplicity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Your options for an old 401(k)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Leave it</strong> — fine if it has good low-cost funds (under 0.20% expense ratio).</li>
              <li><strong>Roll to NEW employer\'s 401(k)</strong> — keeps things simple, but only if new plan is good.</li>
              <li><strong>Roll to IRA</strong> — most flexibility. Open at Vanguard, Fidelity, or Schwab.</li>
              <li><strong>Cash out</strong> — DON\'T. 10% early-withdrawal penalty + income tax. Easily 30-40% gone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step-by-step rollover to IRA</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open an IRA at Vanguard, Fidelity, or Schwab. Free, 10 minutes.</li>
              <li>Match the type — Traditional 401(k) → Traditional IRA. Roth 401(k) → Roth IRA.</li>
              <li>Call the new IRA company\'s rollover desk. Tell them you want a "direct rollover" from your old 401(k).</li>
              <li>They tell you what to send. Usually:
                <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                  <li>Call old 401(k) plan, request rollover paperwork.</li>
                  <li>Have the check made payable to the NEW custodian, not you.</li>
                  <li>The check shows your name "for benefit of" — meaning you don\'t cash it.</li>
                </ul>
              </li>
              <li>Old plan mails the check. You forward it to the new IRA company. Or it goes directly.</li>
              <li>New IRA shows the funds. Pick investments.</li>
              <li>Done. You have one consolidated retirement account.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ Avoid the "60-day rollover" trap</h2>
            <p className="text-sm">If the check is made out to YOU, you must deposit into IRA within 60 days OR it\'s treated as a withdrawal — taxed + 10% penalty. ALWAYS use "direct rollover" — never have the check come to you personally.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After consolidation — pick investments</h2>
            <p className="text-sm mb-2">For most retirees, three simple options:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Target-date fund</strong> — picks "VFFVX 2025" or similar. Auto-balances stocks/bonds for someone retiring near that year.</li>
              <li><strong>Three-fund portfolio</strong> — total US stock + total international + total bond. Done.</li>
              <li><strong>Vanguard Personal Advisor</strong> — 0.30%/year. They invest for you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Look out for sales tactics</h2>
            <p className="text-sm">When rolling over a big balance, brokers often want to sell you ANNUITIES or LOADED MUTUAL FUNDS. Both have high fees and rarely outperform simple index funds. If a broker pushes annuity into a Traditional IRA — RUN. That\'s tax-deferred protection inside an already tax-deferred account = pointless and expensive.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best simple choice</h3>
            <p className="text-sm text-muted-foreground">Open an IRA at <strong>Fidelity, Vanguard, or Schwab</strong>. Roll over old 401(k)s into it via direct rollover. Pick a target-date fund matching your retirement year. Done. Cheap. Simple. Wealth-building.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
