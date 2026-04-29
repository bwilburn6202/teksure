import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

export default function HVACMaintenanceGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="HVAC Maintenance Guide for Seniors | TekSure" description="Keep heating + AC running. Plain-English HVAC schedule + filter changes for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Thermometer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">HVAC Maintenance</h1>
          <p className="text-lg text-muted-foreground">$8 filter changes save $5K replacements.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Filter changes (CRITICAL)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replace every 1-3 months.</li>
              <li>Standard 1&quot; filters monthly.</li>
              <li>4-5&quot; pleated filters every 6-12 months.</li>
              <li>MERV 8-11 best (higher = airflow problems).</li>
              <li>Set phone reminder.</li>
              <li>Subscribe + Save on Amazon — auto-deliver.</li>
              <li>Dirty filter = AC works harder = breaks faster.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annual professional service</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Spring</strong> — AC tuneup ($100-200).</li>
              <li><strong>Fall</strong> — heating tuneup ($100-200).</li>
              <li>Annual service contract often $200-300/yr.</li>
              <li>Detects problems before failure.</li>
              <li>Cleans coils + checks refrigerant.</li>
              <li>Many include 24/7 emergency service.</li>
              <li>Extends life 5-10+ years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY simple tasks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Clear leaves/debris from AC condenser outside.</li>
              <li>Trim plants 2-3 ft from condenser.</li>
              <li>Hose off AC fins gently.</li>
              <li>Vacuum vent registers monthly.</li>
              <li>Test smoke + CO detectors.</li>
              <li>Replace thermostat batteries yearly.</li>
              <li>Drain pan empty + clean if visible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to call pro</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strange noises (banging, screeching).</li>
              <li>Burning smell.</li>
              <li>Not cooling/heating effectively.</li>
              <li>Water around indoor unit.</li>
              <li>Ice on outdoor unit.</li>
              <li>Bills suddenly higher.</li>
              <li>Frequent on/off cycling.</li>
              <li>Don&apos;t DIY refrigerant — illegal + dangerous.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lifespan + replacement</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Furnace 15-30 years.</li>
              <li>AC 10-15 years.</li>
              <li>Heat pump 10-15 years.</li>
              <li>Replace BEFORE failure if 15+ years (avoid emergency $).</li>
              <li>Energy Star units save 20-30% bills.</li>
              <li>Heat pumps now eligible for $2,000+ federal tax credits.</li>
              <li>Get 3 quotes for replacement.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save on bills</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smart thermostat (Nest, Ecobee) — saves 10-15%.</li>
              <li>Set 78°F summer, 68°F winter (when home).</li>
              <li>Programmable schedules — adjust when out.</li>
              <li>Ceiling fans + AC = lower temp comfortable.</li>
              <li>Insulate attic — biggest energy waster.</li>
              <li>Energy audit free from utility company.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">LIHEAP if cost issue</h3>
            <p className="text-sm text-muted-foreground"><strong>LIHEAP (Low Income Home Energy Assistance Program)</strong> — federal program. Pays utility bills for income-eligible. Many seniors qualify. Apply at your state&apos;s social services office. Also <strong>Weatherization Assistance Program</strong> — free insulation, weather stripping, HVAC repair. liheap.acl.gov.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
