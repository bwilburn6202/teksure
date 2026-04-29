import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export default function IRMAACliffs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="IRMAA Cliffs Explained | TekSure" description="Medicare income-related premium surcharges. Plain-English explainer of IRMAA cliffs + how to manage." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingUp className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">IRMAA Cliffs</h1>
          <p className="text-lg text-muted-foreground">Higher income = higher Medicare premium.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What IRMAA is</h2>
            <p className="text-sm">Income-Related Monthly Adjustment Amount. Higher-income seniors pay more for Medicare Part B + Part D. Based on 2-years-prior tax return.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2025 IRMAA tiers (single)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Under $106K</strong> — base premium ($185/mo for Part B).</li>
              <li><strong>$106K-$133K</strong> — base + $74 = $259/mo.</li>
              <li><strong>$133K-$167K</strong> — base + $185 = $370/mo.</li>
              <li><strong>$167K-$200K</strong> — base + $295 = $480/mo.</li>
              <li><strong>$200K-$500K</strong> — base + $406 = $591/mo.</li>
              <li><strong>Over $500K</strong> — base + $443 = $628/mo.</li>
              <li>For couples: roughly DOUBLE these income brackets.</li>
              <li>Plus separate IRMAA for Part D.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">"Cliff" effect</h2>
            <p className="text-sm">Going $1 over a tier = pay full tier increase. Not gradual. So $105,999 vs $106,001 = $74/mo difference. ALL year.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reduce IRMAA</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Roth conversions</strong> — strategic before age 63 (year before Medicare).</li>
              <li><strong>QCD (Qualified Charitable Distribution)</strong> — give from IRA to charity, doesn&apos;t count as income.</li>
              <li><strong>HSA withdrawals</strong> — for medical, tax-free, no IRMAA effect.</li>
              <li><strong>Manage capital gains timing</strong> — spread across years.</li>
              <li><strong>Avoid one-time income spike</strong> — large Roth conversion or sale of home + appreciated investments.</li>
              <li><strong>Tax-loss harvesting</strong> — offset gains.</li>
              <li><strong>Move income to spouse&apos;s lower tier</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Appeal IRMAA</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Form SSA-44 — appeal if life event reduced income.</li>
              <li>Qualifying events: death of spouse, divorce, work stoppage, retirement, loss of pension, etc.</li>
              <li>SSA reviews + may reduce premium.</li>
              <li>Within 60 days of IRMAA notice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">2-year lookback</h3>
            <p className="text-sm text-muted-foreground">2025 IRMAA based on 2023 tax return. So plan IRMAA timing 2 years ahead. Big income year now = bigger Medicare premium 2 years later. Fee-only fiduciary worth $$ to plan.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
