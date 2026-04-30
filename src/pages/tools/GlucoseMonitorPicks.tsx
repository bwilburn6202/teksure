import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function GlucoseMonitorPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Continuous Glucose Monitors — Plain English | TekSure" description="Dexcom, Libre, and over-the-counter Stelo. What CGMs do, what they cost in 2025, and what Medicare actually covers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Glucose Monitors (CGMs)</h1>
          <p className="text-lg text-muted-foreground">Track blood sugar without finger pricks.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What a CGM is</h2>
            <p className="text-sm">A small sensor (size of a quarter) sticks to your upper arm. A tiny wire under the skin reads glucose every minute. Phone app shows real-time numbers and trends. Lasts 10-15 days, then replace.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top CGMs (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dexcom G7</strong> — $300/month retail. 10-day sensor. Best app and accuracy. Covered by Medicare for insulin users.</li>
              <li><strong>Freestyle Libre 3</strong> — $140/month retail. 14-day sensor. Smaller. Covered by Medicare for insulin users.</li>
              <li><strong>Dexcom Stelo</strong> — $99/month. 15-day sensor. <strong>NO PRESCRIPTION NEEDED</strong> (FDA approved 2024). For non-insulin users.</li>
              <li><strong>Libre Rio</strong> — $50/month (launching 2025). Same idea — over the counter.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicare coverage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Type 1 or Type 2 diabetes WITH insulin → Dexcom or Libre fully covered. ~$0/month.</li>
              <li>Diabetes WITHOUT insulin → expanded coverage approved 2023. Often covered.</li>
              <li>Pre-diabetes or no diabetes → not covered. Pay out of pocket (Stelo).</li>
              <li>Ask doctor for a prescription. Pharmacy can bill Medicare.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup is simple</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Download the app (Dexcom, Libre, or Stelo).</li>
              <li>Click sensor onto upper arm — pre-loaded applicator. Painless.</li>
              <li>Scan/pair with phone. Numbers start in 30-60 minutes.</li>
              <li>Wear in shower, sleep, exercise. Adhesive lasts 10-15 days.</li>
              <li>Replace when app says.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Are CGMs worth it for non-diabetics?</h3>
            <p className="text-sm text-muted-foreground">For most healthy people — no. Health benefits unclear. Can cause unhealthy obsession with food. For pre-diabetics, people on weight-loss journeys, or those with strong family history of diabetes — informative for 30-90 days then stop. Talk to your doctor.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
