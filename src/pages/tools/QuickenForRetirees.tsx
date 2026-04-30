import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function QuickenForRetirees() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Quicken for Retiree Money Management | TekSure" description="Quicken Simplifi + Classic for senior money management. Track spending + retirement." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Quicken</h1>
          <p className="text-lg text-muted-foreground">Track spending + investments together.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quicken Classic</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Desktop software — Windows + Mac.</li>
              <li>$60–$120/year subscription.</li>
              <li>Connects to all your bank/credit/investment accounts.</li>
              <li>Most comprehensive money management.</li>
              <li>Best for retirees with multiple accounts.</li>
              <li>30+ year established product.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quicken Simplifi</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Newer mobile-first app.</li>
              <li>$48/year ($4/mo).</li>
              <li>Connects accounts.</li>
              <li>Simpler than Classic.</li>
              <li>Modern interface.</li>
              <li>Mobile + web access.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why retirees love Quicken</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Track ALL accounts in one place.</li>
              <li>Net worth at a glance.</li>
              <li>Plan retirement withdrawals.</li>
              <li>Budget on fixed income.</li>
              <li>Investment tracking.</li>
              <li>Tax preparation reports.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Empower (formerly Personal Capital) — free tracking.</li>
              <li>Excel/Google Sheets — DIY budget.</li>
              <li>Bank apps — basic per-account tracking.</li>
              <li>Mint shutdown — many migrated to Empower.</li>
              <li>Try free first.</li>
              <li>Quicken if free options insufficient.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Empower — free alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE personal finance tracking.</li>
              <li>Like Mint but still operating.</li>
              <li>Net worth + budgeting + investments.</li>
              <li>Investment fee analyzer.</li>
              <li>Retirement planner included.</li>
              <li>They sell wealth management ($1M+ minimum).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spreadsheet method</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free Excel/Google Sheets.</li>
              <li>List all accounts + monthly balance.</li>
              <li>Track over time.</li>
              <li>No app dependence.</li>
              <li>Total privacy.</li>
              <li>Many seniors prefer this.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Empower free first</h3>
            <p className="text-sm text-muted-foreground">Before paying for Quicken, try Empower (Empower.com) free. Same account aggregation + tracking. Free forever. Save $60–$120 yearly. If you want desktop software with deeper features, Quicken Classic remains the most comprehensive. For most seniors, Empower&apos;s free dashboard is plenty.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
