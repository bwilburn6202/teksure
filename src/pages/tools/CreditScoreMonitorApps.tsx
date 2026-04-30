import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export default function CreditScoreMonitorApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Credit Score Monitor Apps for Seniors | TekSure" description="Free credit score apps. Credit Karma, Experian, Mint compared for senior users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingUp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Credit Score Apps</h1>
          <p className="text-lg text-muted-foreground">Track credit free. Catch identity theft.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Credit Karma — most popular</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>100% free — no credit card required.</li>
              <li>Get TransUnion + Equifax scores.</li>
              <li>Updated weekly.</li>
              <li>Shows credit factors + how to improve.</li>
              <li>Identity monitoring included free.</li>
              <li>Owned by Intuit (TurboTax).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Experian app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free FICO score from Experian.</li>
              <li>The score most lenders use.</li>
              <li>Boost feature — adds rent/utility to history.</li>
              <li>Identity protection scan.</li>
              <li>Premium ($25/month) optional.</li>
              <li>Free version sufficient for most.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bank app credit scores</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many banks include free FICO score.</li>
              <li>Chase + BofA + Wells Fargo + Citi.</li>
              <li>Updated monthly.</li>
              <li>Shown in app under Credit Journey or similar.</li>
              <li>No need to install separate app.</li>
              <li>Convenient + already trusted.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why monitor credit?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Catch identity theft fast.</li>
              <li>New account opened in your name = alert.</li>
              <li>Credit score drops if fraud occurred.</li>
              <li>Know score before applying for cards/loans.</li>
              <li>Build credit even in retirement.</li>
              <li>Improve score with paid-off debt.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free annual credit reports</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AnnualCreditReport.com — official site.</li>
              <li>Free reports from all 3 bureaus.</li>
              <li>Now weekly free reports until further notice.</li>
              <li>Different from credit SCORE — full report.</li>
              <li>Look for accounts you don&apos;t recognize.</li>
              <li>Dispute errors found.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Higher identity theft risk after retirement.</li>
              <li>Freeze credit if not applying for new credit.</li>
              <li>Equifax + Experian + TransUnion freezes are free.</li>
              <li>Unfreeze temporarily when applying.</li>
              <li>Monitor for new accounts from medical fraud.</li>
              <li>Notify Social Security if identity stolen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Credit Karma + freeze your credit</h3>
            <p className="text-sm text-muted-foreground">Two actions this week: download Credit Karma free for monitoring, and freeze your credit at all 3 bureaus (free) if you&apos;re not opening new accounts. Frozen credit prevents identity thieves from opening accounts in your name. Unfreeze temporarily only when you&apos;re applying for credit. Most seniors should keep credit frozen as default state.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
