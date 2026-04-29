import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export default function CreditScoreCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Credit Score Coach — Free Apps + What Actually Matters | TekSure" description="Plain-English breakdown of credit scores. Free apps to monitor, common myths, and the 5 things that actually move your score." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingUp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Credit Score Coach</h1>
          <p className="text-lg text-muted-foreground">Check free. Know what matters. Skip the myths.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free credit score apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Credit Karma</strong> — TransUnion + Equifax. Free, no credit card needed.</li>
              <li><strong>Experian app</strong> — your Experian score free.</li>
              <li><strong>Capital One CreditWise</strong> — free even without a Capital One card.</li>
              <li><strong>Chase Credit Journey</strong> — free, even non-customers.</li>
              <li><strong>WalletHub</strong> — daily score updates.</li>
              <li><strong>annualcreditreport.com</strong> — free actual credit reports (federal). Once per year per bureau, but as of 2024 it\'s every WEEK.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What ACTUALLY moves your score</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Payment history (35%)</strong> — pay every bill on time. Set autopay for at least the minimum.</li>
              <li><strong>Credit utilization (30%)</strong> — use less than 30% of available limit. Pay off cards before statement closes.</li>
              <li><strong>Length of credit history (15%)</strong> — keep oldest cards open even if rarely used.</li>
              <li><strong>Credit mix (10%)</strong> — having mortgage + credit card + auto loan is good.</li>
              <li><strong>New credit (10%)</strong> — opening lots of new accounts hurts short-term.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common myths</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>❌ "Closing old cards helps" — actually HURTS by reducing total available credit.</li>
              <li>❌ "Carrying a balance helps" — false. Pay in full. Carrying = paying interest.</li>
              <li>❌ "Checking your own credit hurts your score" — false. You can check it daily.</li>
              <li>❌ "Married couples share a credit score" — false. Separate scores.</li>
              <li>❌ "Income is part of the score" — false. Not directly.</li>
              <li>✅ "Late payment hurts" — yes, even one. Stays on report 7 years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What\'s a good score?</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>800+ = Exceptional. Best loan rates anywhere.</li>
              <li>740-799 = Very good. Great rates.</li>
              <li>670-739 = Good. Most loans, decent rates.</li>
              <li>580-669 = Fair. Higher rates, fewer options.</li>
              <li>Under 580 = Poor. Hard to get loans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For senior homeowners</h3>
            <p className="text-sm text-muted-foreground">Your credit score still matters in retirement. Insurance companies use it. Refinancing or HELOC use it. Some landlords (if you ever rent again) use it. Check yearly. Lock down identity theft (credit freeze) if you don\'t plan to apply for new credit. (See our Credit Freeze Coach.)</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
