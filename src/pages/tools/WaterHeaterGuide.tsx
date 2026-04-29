import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function WaterHeaterGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Water Heater Guide for Seniors | TekSure" description="Maintain + replace water heaters. Plain-English guide for seniors avoiding $4K floods." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Heater Guide</h1>
          <p className="text-lg text-muted-foreground">Annual flush + age check = no flood disasters.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Know your water heater</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find install date — sticker or take photo of nameplate.</li>
              <li>Average lifespan 8-12 years.</li>
              <li>Replace BEFORE failing (proactive saves flood damage).</li>
              <li>Tank, tankless, hybrid, electric, gas — different needs.</li>
              <li>Photo nameplate now — needed if emergency replacement.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annual maintenance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Flush sediment yearly — extends life 5+ years.</li>
              <li>Check anode rod every 3 years (sacrificial part).</li>
              <li>Test pressure relief valve yearly.</li>
              <li>Check for leaks at pipe joints monthly.</li>
              <li>Set temperature 120°F (saves energy + scald protection).</li>
              <li>YouTube videos show flush DIY ($0).</li>
              <li>Or hire plumber annually $100-150.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Leak prevention (essential)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Drip pan</strong> under heater — catches small leaks.</li>
              <li><strong>Smart leak detector</strong> ($30-150) — alerts phone.</li>
              <li><strong>Auto shutoff valve</strong> — closes if leak detected ($200-600 install).</li>
              <li>Tank failures = $5K-15K floods.</li>
              <li>Insurance often won&apos;t cover if known issue.</li>
              <li>Smart shutoff = best investment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to replace</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Age 10+ years — start planning.</li>
              <li>Rust in hot water.</li>
              <li>Strange noises (popping, rumbling).</li>
              <li>Lukewarm water (not hot).</li>
              <li>Visible rust on tank.</li>
              <li>Wet area around base.</li>
              <li>$1,500-3,500 typical replacement.</li>
              <li>Tankless: $3,500-7,000 but lasts 20+ years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tankless pros + cons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pros</strong> — endless hot water, lasts 2x, smaller, more energy efficient.</li>
              <li><strong>Cons</strong> — higher upfront cost, may need gas line upgrade.</li>
              <li>2026 tax credits — heat pump water heaters $2,000+.</li>
              <li>Gas tankless great if gas line existing.</li>
              <li>Hybrid heat pump = greenest option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free leak detector</h3>
            <p className="text-sm text-muted-foreground">Many home insurance companies + utility companies provide FREE smart leak detectors. Ask. Smart-home insurance discount common 5-10%. Heat pump water heaters often have utility rebates $500-1,500. Senior weatherization programs may include water heater replacement free if income-eligible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
