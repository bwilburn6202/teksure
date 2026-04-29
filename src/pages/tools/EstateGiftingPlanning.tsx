import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';

export default function EstateGiftingPlanning() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Estate Gifting + Lifetime Giving | TekSure" description="Give while living. Plain-English picks for tax-smart annual gifts, 529 plans, charitable giving, and Roth conversions for heirs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gift className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Estate Gifting Planning</h1>
          <p className="text-lg text-muted-foreground">Give while you can see them enjoy it.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annual gift exclusion</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>$19,000/year per recipient</strong> in 2025. NO tax. NO reporting.</li>
              <li>Married couples can give $38K/year per recipient ($19K each).</li>
              <li>Each recipient is separate — give to all kids + grandkids.</li>
              <li>Family of 4 (2 kids + 2 spouses) = $76K/year tax-free for couple.</li>
              <li>Stay UNDER limit to avoid filing IRS Form 709.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax-smart gift options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>529 College Plan</strong> — fund up to $90K at once (5-year acceleration). Grows tax-free.</li>
              <li><strong>Direct tuition payment</strong> — UNLIMITED if paid to school directly. Doesn&apos;t count as gift.</li>
              <li><strong>Direct medical payment</strong> — UNLIMITED if paid to provider directly.</li>
              <li><strong>Roth IRA contributions</strong> — for working grandkids (under earned income).</li>
              <li><strong>Down payment help</strong> — limit gift to annual exclusion to avoid issues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Charitable giving</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>QCD (Qualified Charitable Distribution)</strong> — give from IRA directly to charity. Up to $108K/yr (2025). Counts toward RMD. NO income tax.</li>
              <li><strong>Donor Advised Fund</strong> — Fidelity Charitable, Vanguard. Donate big now, distribute over years.</li>
              <li><strong>Charitable Remainder Trust</strong> — give appreciated stock, get income for life, charity gets remainder.</li>
              <li><strong>Stock donations</strong> — give appreciated stock. Avoid capital gains.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Heir tax savings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Roth conversion</strong> — convert traditional IRA to Roth. Heirs inherit tax-free.</li>
              <li><strong>Step-up in basis</strong> — appreciated assets at death get reset basis. Heirs sell with little/no capital gains.</li>
              <li><strong>Life insurance</strong> — proceeds tax-free to heirs.</li>
              <li><strong>Trust planning</strong> — protects assets from heirs&apos; creditors / divorces.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Watch your own future</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t over-gift. Healthcare costs in 80s+ can be massive. Keep enough for yourself + spouse to age in place comfortably with care needs. Generous in retirement = run-out at 88. Plan with fee-only advisor — NAPFA.org.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
