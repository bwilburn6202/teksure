import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function HomeInsuranceShoppingSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Insurance Shopping for Seniors | TekSure" description="Compare home insurance providers. Senior shopping tips + senior discounts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Insurance Shopping</h1>
          <p className="text-lg text-muted-foreground">Compare every 2-3 years.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Major insurers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>State Farm — largest US insurer.</li>
              <li>USAA — military families only.</li>
              <li>Allstate.</li>
              <li>Liberty Mutual.</li>
              <li>Travelers.</li>
              <li>Nationwide.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Retired senior discount common (5-10%).</li>
              <li>Loyal customer discount.</li>
              <li>Bundle home + auto = 15-25%.</li>
              <li>Security system = 5-15%.</li>
              <li>Smart water shutoff = 5-10%.</li>
              <li>Ask for ALL discounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Compare quotes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get quotes from 3-5 insurers.</li>
              <li>Same coverage levels for fair compare.</li>
              <li>Policygenius — free aggregator.</li>
              <li>The Zebra — comparison site.</li>
              <li>Direct quotes from insurer websites.</li>
              <li>Save $300-$1,000+ yearly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Coverage essentials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Dwelling coverage = rebuild value.</li>
              <li>Personal property = belongings.</li>
              <li>Liability = if someone hurt at your home.</li>
              <li>Loss of use = hotel if displaced.</li>
              <li>Flood + earthquake separate (not standard).</li>
              <li>Verify coverage matches actual values.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Raise deductible from $500 to $1,000 — save 10%.</li>
              <li>Bundle with auto.</li>
              <li>Update insurer on home improvements.</li>
              <li>New roof, electrical = lower rates.</li>
              <li>Shop around every 2-3 years.</li>
              <li>Negotiate at renewal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Document inventory</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Video walkthrough of home + belongings.</li>
              <li>Open every closet + drawer.</li>
              <li>Backup to cloud.</li>
              <li>Critical for claims after disaster.</li>
              <li>Update yearly.</li>
              <li>Saves weeks if you need to claim.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Shop every 2-3 years</h3>
            <p className="text-sm text-muted-foreground">Insurance loyalty rarely pays. After 2-3 years with same insurer, your rate often inflates. Get fresh quotes from competitors. Bring quote to current insurer — often they&apos;ll match. If not, switch. Many seniors save $500-$1,500/year with this routine. Set calendar reminder.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
