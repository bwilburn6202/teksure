import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function RoofInspectionGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Roof Inspection Guide for Seniors | TekSure" description="Catch roof problems early. Plain-English roof inspection + replacement guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Roof Inspection Guide</h1>
          <p className="text-lg text-muted-foreground">Watch from ground. Hire pro yearly.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annual ground-level check</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walk around house with binoculars.</li>
              <li>Look for missing/curled/cracked shingles.</li>
              <li>Sagging areas.</li>
              <li>Stains on ceilings inside (water damage).</li>
              <li>Granules in gutters (asphalt shingle wear).</li>
              <li>Moss or algae growth.</li>
              <li>Damaged flashing around chimney/vents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to call pro</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>After hailstorm or major wind.</li>
              <li>If 15+ years old asphalt shingle.</li>
              <li>20+ years architectural shingles.</li>
              <li>Selling home soon (inspection helps).</li>
              <li>Buying home (always inspect).</li>
              <li>Annual = good idea after age 15.</li>
              <li>Cost: $100-300 inspection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Roof lifespan</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Asphalt shingle</strong> — 15-30 years.</li>
              <li><strong>Architectural shingle</strong> — 25-40 years.</li>
              <li><strong>Metal</strong> — 40-70 years.</li>
              <li><strong>Tile / slate</strong> — 50-100+ years.</li>
              <li>Replace BEFORE failure (insurance issues if known damage).</li>
              <li>Get records when bought home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Roof replacement cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Average asphalt: $8,000-18,000.</li>
              <li>Architectural shingle: $10,000-25,000.</li>
              <li>Metal: $20,000-40,000.</li>
              <li>Get 3 quotes — wide variance.</li>
              <li>Storm damage often homeowner&apos;s insurance covers.</li>
              <li>Watch deductible — roofs raise it after claim.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Storm chaser scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Show up after hailstorm offering &quot;free inspection.&quot;</li>
              <li>Find &quot;damage&quot; that wasn&apos;t there before.</li>
              <li>Sometimes CAUSE damage during &quot;inspection.&quot;</li>
              <li>Help file inflated insurance claim.</li>
              <li>Disappear with money before work done.</li>
              <li>Use LOCAL companies (in business 5+ years).</li>
              <li>Verify license + insurance.</li>
              <li>Get 3 quotes. Don&apos;t sign contracts at door.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find good roofer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>BBB A+ rating.</li>
              <li>Ask for 3 recent local references — drive by.</li>
              <li>5+ years in business.</li>
              <li>Licensed in your state.</li>
              <li>Workers comp + liability insurance.</li>
              <li>Manufacturer-certified for shingle warranty.</li>
              <li>Detailed written estimate (not 1 line).</li>
              <li>Don&apos;t pay more than 30% upfront.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Drone inspections</h3>
            <p className="text-sm text-muted-foreground">Some inspectors use drones — safer + thorough. iRoof, IMGING etc. send drone, get full report. Often $50-150. Ask current home insurance — they&apos;ll often inspect for free since they want to know about damage. Use this. Document conditions yearly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
