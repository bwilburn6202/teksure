import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

export default function RentersInsuranceSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Renters Insurance for Senior Renters | TekSure" description="Apartments, condos, retirement community renters. Plain-English picks for $15/mo coverage. Don&apos;t skip it." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Renters Insurance</h1>
          <p className="text-lg text-muted-foreground">$15/mo. Major protection.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why renters need it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Building owner&apos;s insurance covers BUILDING, NOT your stuff.</li>
              <li>Burst pipe, fire, theft = your loss without coverage.</li>
              <li>Liability — visitor falls + sues = covered.</li>
              <li>Loss of use — pays hotel if home unlivable.</li>
              <li>Most policies $15-25/month for $30-50K coverage.</li>
              <li>30 minutes online to set up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best renters insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Lemonade</strong> — app-based, instant. $5-15/mo. Best for under-70.</li>
              <li><strong>State Farm</strong> — bundle with auto for discount.</li>
              <li><strong>Allstate / Liberty Mutual</strong> — local agent help.</li>
              <li><strong>USAA</strong> — vets only, top rated.</li>
              <li><strong>GEICO</strong> — bundle with auto.</li>
              <li><strong>Amica</strong> — top customer satisfaction.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Coverage to get</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Personal property</strong> — $30-50K replacement cost (NOT cash value).</li>
              <li><strong>Liability</strong> — $300K minimum.</li>
              <li><strong>Loss of use</strong> — for hotel costs.</li>
              <li><strong>Medical payments</strong> — for visitor injuries.</li>
              <li><strong>Special items</strong> — jewelry, art over $1K need scheduling.</li>
              <li>Deductible — $500-1,000 typical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific concerns</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heirloom items — schedule separately for full value.</li>
              <li>Medical equipment — confirm coverage.</li>
              <li>Mobility scooter — list as scheduled item.</li>
              <li>Visitors / caregivers — liability covers if hurt at your apt.</li>
              <li>Senior community — required by some leases.</li>
              <li>Storage units — confirm covered if you have one.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t skip</h3>
            <p className="text-sm text-muted-foreground">$15/mo = $180/year. Lifetime savings of one fire / theft / liability claim = $30,000+. Cheapest insurance per dollar of coverage. Many seniors skip it + regret massively.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
