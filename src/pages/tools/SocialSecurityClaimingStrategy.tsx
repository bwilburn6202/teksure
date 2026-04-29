import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export default function SocialSecurityClaimingStrategy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Social Security Claiming Strategy for Seniors | TekSure" description="When to claim Social Security benefits. Early vs late claiming explained in plain English." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingUp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Social Security Timing</h1>
          <p className="text-lg text-muted-foreground">When to claim matters. Plain-English guide.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Your three claiming ages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Early: age 62 — reduced benefit (up to 30% less).</li>
              <li>Full Retirement Age: 66–67 — depends on birth year.</li>
              <li>Delayed: up to age 70 — 8% more per year delayed.</li>
              <li>Born 1960+: full retirement age is 67.</li>
              <li>Born before 1960: check SSA.gov for your exact age.</li>
              <li>This decision cannot be easily reversed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Claim early — when it makes sense</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Health problems — shorter life expectancy.</li>
              <li>Need income now and have no savings.</li>
              <li>Spouse has larger benefit and will claim later.</li>
              <li>Already retired and need cash flow.</li>
              <li>Breakeven vs full retirement age: about age 78.</li>
              <li>If you don&apos;t expect to live to 78 — early may win.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Delay claiming — when it makes sense</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Good health — long life expectancy in family.</li>
              <li>Working until 67–70 and don&apos;t need it yet.</li>
              <li>Want to maximize lifetime income.</li>
              <li>Married — larger benefit protects surviving spouse.</li>
              <li>Protecting against outliving your savings.</li>
              <li>Breakeven on delaying to 70 vs 67: about age 82.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spousal benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Can claim up to 50% of spouse&apos;s benefit.</li>
              <li>If your own benefit is lower — spousal may be better.</li>
              <li>Lower-earning spouse often claims early.</li>
              <li>Higher-earning spouse delays to maximize survivor.</li>
              <li>Divorced? May claim ex-spouse benefit if married 10+ years.</li>
              <li>Widow/widower — can claim survivor benefit at 60.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free tools to help decide</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SSA.gov retirement estimator — official tool.</li>
              <li>Create My Social Security account — see your estimate.</li>
              <li>AARP Social Security Benefits Calculator — free.</li>
              <li>Open Social Security — free, research-backed calculator.</li>
              <li>Social Security Timing — more detailed analysis.</li>
              <li>Financial advisor — worth the consult for complex situations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Working while claiming</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Before full retirement age: earnings limit applies.</li>
              <li>2024 limit: $22,320 — $1 withheld per $2 over.</li>
              <li>At full retirement age: no earnings limit.</li>
              <li>Withheld amounts returned through higher future checks.</li>
              <li>Taxes: up to 85% of SS may be taxable depending on income.</li>
              <li>Consult tax advisor if working + receiving SS.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">One size does not fit all</h3>
            <p className="text-sm text-muted-foreground">The right Social Security claiming age is different for everyone. For married couples, the strategy often involves the lower earner claiming early while the higher earner delays to 70 — maximizing the lifetime survivor benefit. For single people in good health, delaying pays off after about age 82. Use the free Open Social Security calculator at OpenSocialSecurity.com to model your specific situation.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
