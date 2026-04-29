import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function WhenToTakeSocialSecurity() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="When to Take Social Security — 62 vs 67 vs 70 | TekSure" description="The most expensive retirement decision you&apos;ll make. Plain-English breakdown of starting Social Security at 62 vs full retirement age vs 70." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">When to Take Social Security</h1>
          <p className="text-lg text-muted-foreground">62, 67, or 70? The choice can mean tens of thousands.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The numbers, simplified</h2>
            <p className="text-sm">If your "Full Retirement Age" benefit is $2,000/month:</p>
            <ul className="text-sm list-disc pl-5 mt-2">
              <li><strong>Take at 62:</strong> ~$1,400/month (30% reduction, FOREVER).</li>
              <li><strong>Take at FRA (66-67):</strong> $2,000/month.</li>
              <li><strong>Take at 70:</strong> $2,480/month (24% bonus, FOREVER).</li>
            </ul>
            <p className="text-sm mt-2">Difference between 62 and 70: $1,080/month, every month, for life. That\'s real money.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When it makes sense to take EARLY (62)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Serious health issues; family history of short life expectancy.</li>
              <li>You really need the money to eat.</li>
              <li>You\'ve stopped working AND have no other income.</li>
              <li>You\'re the lower-earning spouse and your higher-earning spouse will keep delaying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When it makes sense to DELAY (67-70)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Good health, family longevity.</li>
              <li>You can live on other savings until 70.</li>
              <li>You\'re still working (and would lose benefits to the earnings test before FRA anyway).</li>
              <li>You\'re the higher-earning spouse — the larger benefit becomes the survivor benefit.</li>
              <li>You want a guaranteed inflation-adjusted income.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">"Break-even" math</h2>
            <p className="text-sm">If you take at 62 vs 70: in dollars-out, you break even around age 80-82. Live past that — delaying wins. Live shorter — taking early wins. Average US 65-year-old today lives to 84.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spousal & survivor benefits — important</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lower-earning spouse</strong> can claim up to 50% of higher-earner\'s FRA benefit.</li>
              <li><strong>If higher earner dies</strong>, the survivor gets to keep the larger of the two benefits. So delaying the higher earner\'s claim BOOSTS the survivor benefit too.</li>
              <li><strong>Divorced</strong> — if married 10+ years, can claim on ex-spouse\'s record (without affecting them).</li>
              <li><strong>Widows/widowers</strong> — can take survivor benefits as early as 60, then switch to your own at 70.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free tools</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>SSA.gov "my Social Security"</strong> — your actual estimated benefit at every age. Free account.</li>
              <li><strong>SSA.tools</strong> — visualize claim timing decisions.</li>
              <li><strong>OpenSocialSecurity.com</strong> — free, math-based optimizer for couples.</li>
              <li><strong>AARP Social Security calculator</strong> — easy to use.</li>
              <li><strong>Maximize My Social Security</strong> ($40 once) — the most thorough paid optimizer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to apply</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Apply 3 months before you want benefits to start.</li>
              <li>Online: <strong>ssa.gov/applyforbenefits</strong>. 30 minutes.</li>
              <li>Or call 1-800-772-1213 for a phone appointment.</li>
              <li>Or visit a local SSA office (long lines but personal).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For most healthy couples</h3>
            <p className="text-sm text-muted-foreground">Higher earner delays to 70. Lower earner can take at 67. This usually maximizes both lifetime income and survivor benefits. But it depends on your specific numbers — run them through OpenSocialSecurity.com or a fee-only fiduciary advisor before deciding.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
