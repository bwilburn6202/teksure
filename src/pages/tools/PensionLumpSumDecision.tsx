import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Banknote } from 'lucide-react';

export default function PensionLumpSumDecision() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pension Lump Sum vs Monthly — Which to Take? | TekSure" description="Retiring with a pension? You may be offered a lump sum or monthly payments for life. Plain-English guide to the biggest one-time decision in retirement." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Banknote className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pension Lump Sum vs Monthly</h1>
          <p className="text-lg text-muted-foreground">Once-in-a-lifetime decision. Get it right.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The decision</h2>
            <p className="text-sm">Many pensions offer two options at retirement:</p>
            <ul className="text-sm list-disc pl-5 mt-2">
              <li><strong>Monthly check for life</strong> ("annuity") — guaranteed income, no investment risk.</li>
              <li><strong>One-time lump sum</strong> — they give you all the money now; you invest it yourself.</li>
            </ul>
            <p className="text-sm mt-2">It\'s usually irrevocable. Pick wrong, you can\'t change it.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When MONTHLY is usually better</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Long life expectancy / family longevity.</li>
              <li>Spousal benefit (50% to surviving spouse) is included.</li>
              <li>You\'re not confident in managing investments yourself.</li>
              <li>Your other retirement income is small.</li>
              <li>Your pension is from a stable, well-funded employer.</li>
              <li>You want to sleep at night without market worries.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When LUMP SUM is usually better</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Short life expectancy / family history of early death.</li>
              <li>The pension fund is troubled (underfunded or company struggling).</li>
              <li>You want to leave money to heirs.</li>
              <li>You have other guaranteed income (Social Security + spouse\'s pension).</li>
              <li>You\'re comfortable investing or have a fee-only advisor.</li>
              <li>The lump-sum offer is generous (Internal Rate of Return analysis is favorable).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The math</h2>
            <p className="text-sm mb-2">Compare: monthly amount × 12 ÷ lump sum = the "implied yield".</p>
            <p className="text-sm mb-2">Example: $2,000/month or $400,000 lump? = $24,000/year ÷ $400,000 = 6%.</p>
            <p className="text-sm">If you can confidently earn 6%+ on the lump sum, it\'s competitive. If not, the monthly check is hard to beat — especially with no market risk.</p>
            <p className="text-sm mt-2">Add survivor benefits to the equation. A pension with 100% survivor benefit is worth more than a single-life pension.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Check pension safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Federal pensions (military, federal employee) — extremely safe.</li>
              <li>State/municipal pensions — varies. Some states (IL, NJ, KY) are underfunded.</li>
              <li>Private corporate pensions — protected up to ~$72,000/year by PBGC (federal insurance).</li>
              <li>Multi-employer (union) pensions — some are at risk; ARP Act 2021 helped.</li>
            </ul>
            <p className="text-sm mt-2">If your pension is at risk, taking the lump sum reduces uncertainty.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get help — this is too big to DIY</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fee-only fiduciary advisor</strong> (NAPFA.org, $300-1500 one-time) — runs the math for YOUR specific case.</li>
              <li><strong>Vanguard Personal Advisor</strong> — at 0.30%/year for retirement accounts.</li>
              <li><strong>Don\'t use the broker who calls offering to "roll over your pension"</strong> — they often push expensive annuities or front-loaded mutual funds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When in doubt, take the monthly check</h3>
            <p className="text-sm text-muted-foreground">For most retirees, the monthly pension is the right answer. It\'s essentially a free annuity — you don\'t pay sales commission. It hedges against living too long. The lump sum sounds appealing but loses to monthly more often than not.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
