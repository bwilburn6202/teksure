import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function GeneratorTestRoutine() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Generator Test Routine for Seniors | TekSure" description="Keep generator working. Plain-English maintenance for senior backup power." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Generator Maintenance</h1>
          <p className="text-lg text-muted-foreground">Won&apos;t fail when needed. Test monthly.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Monthly test (5 min)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Run generator 5-10 minutes monthly.</li>
              <li>Check fuel.</li>
              <li>Listen for unusual sounds.</li>
              <li>Check oil level.</li>
              <li>Catch issues before crisis.</li>
              <li>Critical for medical equipment users.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annual service</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Oil change.</li>
              <li>Air filter check.</li>
              <li>Spark plug.</li>
              <li>Battery check (if electric start).</li>
              <li>Fuel system inspection.</li>
              <li>Costs $150-300.</li>
              <li>Hire generator pro for whole-home units.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fuel matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use stabilizer (Sta-bil) — gas spoils in 3 months.</li>
              <li>Or use ethanol-free gas.</li>
              <li>Drain gas before long storage.</li>
              <li>Whole-home propane = 10+ year storage.</li>
              <li>Natural gas best — no fuel storage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEVER run inside garage / home (CO poisoning).</li>
              <li>20+ feet from house, doors, windows.</li>
              <li>Carbon monoxide detectors in home.</li>
              <li>Don&apos;t backfeed via dryer outlet (electrocutes utility workers).</li>
              <li>Hire electrician for transfer switch.</li>
              <li>Cover from rain (special covers exist).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Whole-home worth?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$5K-15K install + propane tank.</li>
              <li>Auto-starts when power out.</li>
              <li>Worth it: medical equipment, frequent outages, hot/cold climates.</li>
              <li>Generac, Kohler, Cummins brands.</li>
              <li>Battery backup (Tesla Powerwall) alternative.</li>
              <li>Solar + battery growing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior priority</h3>
            <p className="text-sm text-muted-foreground">If on oxygen, CPAP, or have refrigerated meds — generator critical. Talk to power company about medical priority restoration. Battery backup ($2K-5K) covers fridge + medical 24-48 hours. Cheaper than whole-home generator.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
