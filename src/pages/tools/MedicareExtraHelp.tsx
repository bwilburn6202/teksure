import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PillBottle } from 'lucide-react';

export default function MedicareExtraHelp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medicare Extra Help (LIS) | TekSure" description="$5,300/yr in drug cost help. Plain-English Extra Help guide for senior Medicare." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PillBottle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Extra Help for Drugs</h1>
          <p className="text-lg text-muted-foreground">$5,300/yr saved. 3M+ seniors miss this.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What Extra Help is</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Federal program for prescription drug costs.</li>
              <li>Also called Low Income Subsidy (LIS).</li>
              <li>Pays Part D premiums + deductibles.</li>
              <li>Drug copays $0-12 (vs $50-300 normally).</li>
              <li>2024 expansion = more eligible than ever.</li>
              <li>Saves average $5,300/year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2026 income limits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Individual: under $23,475/year ($1,956/mo).</li>
              <li>Couple: under $31,725/year ($2,644/mo).</li>
              <li>Asset limit: $17,820 individual, $35,640 couple.</li>
              <li>Excludes home + 1 vehicle + burial fund.</li>
              <li>Higher limits than Medicare Savings Programs.</li>
              <li>Many seniors qualify, don&apos;t know.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Auto-enrolled if</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You have Medicaid + Medicare.</li>
              <li>You have Medicare Savings Program (QMB/SLMB).</li>
              <li>You receive SSI.</li>
              <li>Otherwise — must apply.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apply at SSA.gov/extrahelp.</li>
              <li>Or call 1-800-772-1213.</li>
              <li>Also state Medicaid office.</li>
              <li>Free help: SHIP counselors.</li>
              <li>Decisions in 30-60 days.</li>
              <li>Backdated to month of application.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2025-26 Inflation Reduction Act benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$2,000 yearly cap on out-of-pocket Part D costs (2025+).</li>
              <li>Insulin capped $35/month for ALL seniors.</li>
              <li>Free vaccines on Part D.</li>
              <li>$0 copays for ALL Extra Help recipients.</li>
              <li>HUGE benefit if expensive medications.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drug cost alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>GoodRx</strong> — discount card. Sometimes beats insurance copays.</li>
              <li><strong>Patient assistance programs</strong> — manufacturers free for low-income.</li>
              <li><strong>$4 generic lists</strong> — Walmart, Walgreens.</li>
              <li><strong>Cost Plus Drugs</strong> — Mark Cuban&apos;s pharmacy. 10-90% off.</li>
              <li><strong>Mail-order 90-day</strong> — Express Scripts, Caremark cheaper.</li>
              <li>Compare every renewal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t skip meds</h3>
            <p className="text-sm text-muted-foreground">Skipping prescriptions costs MORE — hospitalization, complications. Help is available. <strong>NeedyMeds</strong> — needymeds.org. Free patient assistance directory. <strong>RxAssist</strong> — rxassist.org. Pharmaceutical assistance programs. Apply for ALL — some manufacturers cover 100%.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
