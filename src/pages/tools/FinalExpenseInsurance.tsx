import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function FinalExpenseInsurance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Final Expense Insurance Reality | TekSure" description="Funeral life insurance honest take. Plain-English picks (and what to skip) for senior end-of-life coverage." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Final Expense Insurance</h1>
          <p className="text-lg text-muted-foreground">Often overpriced. Sometimes useful.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The honest reality</h2>
            <p className="text-sm">Final expense insurance = small permanent life insurance ($5-25K) marketed to seniors for funeral costs. Average policy: pay $1,500/year, get $10K death benefit. Over 10 years, you pay $15K to leave $10K. Often a BAD financial deal.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Pay on Death" bank account</strong> — set aside $10-15K. Beneficiary gets at death. NO premiums.</li>
              <li><strong>Existing life insurance</strong> — many already have group life from work / association.</li>
              <li><strong>Pre-pay funeral home</strong> — locks today&apos;s prices (with risks — see /tools/funeral-prearrangement).</li>
              <li><strong>Term life</strong> — if under 70 in decent health, term life is cheaper for same coverage.</li>
              <li><strong>Cremation</strong> — direct cremation $700-2,500 vs $10K traditional. Less coverage needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When final expense MIGHT make sense</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You can&apos;t qualify for term life (health).</li>
              <li>You don&apos;t have $10K savings.</li>
              <li>You can&apos;t commit to monthly POD savings.</li>
              <li>You want guaranteed-issue coverage.</li>
              <li>For some seniors who otherwise wouldn&apos;t plan — better than nothing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">TV scam warning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Just $9.95/month" TV ads — coverage often $1,000-5,000 only.</li>
              <li>Premiums increase as you age.</li>
              <li>Some have 2-year waiting period — NO benefit if die in first 2 years (return of premium only).</li>
              <li>Read fine print BEFORE signing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you must buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get 3 quotes — Mutual of Omaha, AARP/NY Life, Globe Life.</li>
              <li>Compare exact same coverage + waiting period.</li>
              <li>Pick "level death benefit" (NOT graded).</li>
              <li>Confirm: NO 2-year waiting period if you can.</li>
              <li>Buy ONLY what funeral cost likely will be.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best plan for most seniors</h3>
            <p className="text-sm text-muted-foreground">Open Pay-on-Death savings account. Save $50-100/month for 5-10 years = $5-15K. Beneficiary inherits tax-free. NO premiums. NO waiting periods. NO commission to salesman. Best math for most seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
