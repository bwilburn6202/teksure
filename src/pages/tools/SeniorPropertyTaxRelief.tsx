import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Receipt } from 'lucide-react';

export default function SeniorPropertyTaxRelief() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Property Tax Relief | TekSure" description="Save thousands on property tax. Plain-English senior exemption + freeze guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Receipt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Property Tax Relief</h1>
          <p className="text-lg text-muted-foreground">$500-5,000+/year savings. Most don&apos;t apply.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common senior programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Homestead exemption</strong> — most states. $25K-75K off assessed value.</li>
              <li><strong>Senior exemption</strong> — additional 10-50% off (age 60-65+).</li>
              <li><strong>Senior assessment freeze</strong> — locks property value at age 65.</li>
              <li><strong>Property tax deferral</strong> — pay later from estate.</li>
              <li><strong>Veteran exemptions</strong> — disabled vets often 100% off.</li>
              <li><strong>Income-based</strong> — circuit breakers in some states.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best states for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Florida</strong> — homestead + additional senior exemptions.</li>
              <li><strong>Texas</strong> — senior assessment freeze.</li>
              <li><strong>South Carolina</strong> — homestead at 65.</li>
              <li><strong>Tennessee</strong> — property tax relief.</li>
              <li><strong>Alabama</strong> — many senior exemptions.</li>
              <li>Some states do nothing — others save thousands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Contact COUNTY assessor&apos;s office.</li>
              <li>NOT automatic — you must apply.</li>
              <li>Bring: deed, ID, proof of age, income (if income-based).</li>
              <li>Most states deadline March-April.</li>
              <li>Some retroactive 2-3 years.</li>
              <li>Renew annually some places.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Property tax deferral</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Stop paying now. Pay from estate when home sold.</li>
              <li>Available many states for low-income seniors.</li>
              <li>Like reverse mortgage but for taxes only.</li>
              <li>Interest accrues but lower than reverse mortgage.</li>
              <li>Frees cash flow now.</li>
              <li>Heirs pay from sale proceeds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Appeal your assessment</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If assessed value too high — appeal.</li>
              <li>1 in 3 successful.</li>
              <li>Saves $200-2,000/year.</li>
              <li>Compare to similar nearby homes (Zillow).</li>
              <li>File with county within 30-60 days of assessment.</li>
              <li>Free or $25 fee.</li>
              <li>No attorney needed for residential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t leave money on table</h3>
            <p className="text-sm text-muted-foreground">Most seniors qualify for SOMETHING but never apply. Call your county assessor TODAY. Ask: &quot;What senior + veteran property tax exemptions am I eligible for?&quot; Worth 30-min phone call. Programs change yearly — check at every birthday after 60.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
