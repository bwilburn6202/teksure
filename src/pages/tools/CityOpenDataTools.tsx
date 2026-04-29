import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';

export default function CityOpenDataTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="City Open Data Tools | TekSure" description="Property tax records, building permits, crime stats, school ratings. Plain-English guide to free city data tools you can use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BarChart3 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">City Open Data Tools</h1>
          <p className="text-lg text-muted-foreground">Free public data — most people don&apos;t know.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free public records</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Property records</strong> — county assessor website. Type address, see owner, value, tax, square footage.</li>
              <li><strong>Building permits</strong> — town/city. See what work neighbors are doing.</li>
              <li><strong>Court records</strong> — county clerk. Civil + criminal cases public (PACER for federal, $0.10/page).</li>
              <li><strong>Sex offender registry</strong> — state-by-state. NSOPW.gov national.</li>
              <li><strong>Crime maps</strong> — most cities have public crime map (CrimeMapping.com aggregates).</li>
              <li><strong>Inspection records</strong> — restaurant health inspections, daycare, nursing homes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Government data sites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Data.gov</strong> — federal data portal. Census, weather, health.</li>
              <li><strong>Census.gov</strong> — neighborhood demographics, income, education.</li>
              <li><strong>Medicare.gov Care Compare</strong> — hospital, nursing home, hospice ratings.</li>
              <li><strong>Nursing Home Compare</strong> — Medicare star ratings of nursing homes.</li>
              <li><strong>HospitalCompare</strong> — patient experience, readmission rates.</li>
              <li><strong>USA Spending</strong> — federal contractor data.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Real-life uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Buying a home</strong> — check property taxes, building permits, neighborhood crime, school ratings (GreatSchools.org).</li>
              <li><strong>Researching a contractor</strong> — court records for past lawsuits.</li>
              <li><strong>Choosing a nursing home</strong> — Medicare Care Compare star ratings.</li>
              <li><strong>Picking a neighborhood</strong> — Census + crime maps + walkscore.com.</li>
              <li><strong>Looking up a person</strong> — court records, sex offender registry.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Beware paid sites</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sites like BeenVerified, Spokeo, TruthFinder charge $30+/mo for data that&apos;s mostly FREE on government sites.</li>
              <li>They aggregate public records + sell.</li>
              <li>One thing they do better — find old addresses + relatives — but rarely worth the price.</li>
              <li>If you must use them — cancel the auto-renewal IMMEDIATELY after one search.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Public participation</h3>
            <p className="text-sm text-muted-foreground">Town council meetings, school board meetings — all public. Most stream live now via Zoom or YouTube. You can watch from your couch. If something matters to you (rezoning, budget cuts, school changes), 5 minutes of public comment is more powerful than yelling on Facebook.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
