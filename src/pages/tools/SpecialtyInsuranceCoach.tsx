import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SpecialtyInsuranceCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Flood, Earthquake & Umbrella Insurance | TekSure" description="Standard homeowners DOESN&apos;T cover floods or earthquakes. Plain-English guide to specialty insurance most homeowners overlook." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Specialty Insurance</h1>
          <p className="text-lg text-muted-foreground">Cover the big risks regular insurance doesn\'t.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🌊 Flood Insurance</h2>
            <p className="text-sm">Standard homeowners insurance does NOT cover flood. NOT covered: river rise, hurricane storm surge, even sewer backup.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>NFIP (National Flood Insurance Program)</strong> — federal. $700-2,000/year typical. Required if mortgage AND in flood zone.</li>
              <li><strong>Private flood insurance</strong> — sometimes cheaper. Companies like Neptune, Wright, FloodSafe.</li>
              <li><strong>Even outside flood zones</strong>: about 25% of NFIP claims come from "low risk" zones. Worth checking your address at floodsmart.gov.</li>
              <li><strong>30-day waiting period</strong> for new policies — buy BEFORE storm season.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🌋 Earthquake Insurance</h2>
            <p className="text-sm">Also not in standard policies. Important in CA, OR, WA, AK, HI, parts of MO/TN/IL.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>California Earthquake Authority (CEA)</strong> — most CA residents.</li>
              <li><strong>Private companies</strong> — GeoVera, Palomar.</li>
              <li><strong>Cost</strong>: $400-3,000/year depending on location.</li>
              <li><strong>High deductibles</strong> — typically 10-25% of home value. May only pay for major damage, not minor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">☂️ Umbrella Insurance</h2>
            <p className="text-sm">Extra liability on top of homeowners + auto. Pays out IF someone sues you for more than your basic policies cover.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>$1 million coverage = ~$200-400/year.</li>
              <li>Best protection for retirees with assets to lose.</li>
              <li>Covers: car accidents, dog bites, slip-and-fall on your property, even libel/defamation.</li>
              <li>Required by some HOAs and pool owners.</li>
            </ul>
            <p className="text-sm mt-2 font-semibold">If you have $500k+ in assets — get umbrella. Best $/protection ratio in insurance.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🚗 Long-term auto insurance for retirees</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Drop comprehensive on cars worth less than $4,000.</li>
              <li>Senior driving course discount.</li>
              <li>Low-mileage discount.</li>
              <li>Multi-policy bundle (auto + home).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📋 Insurance review checklist (yearly)</h2>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Re-shop homeowners + auto with 3 quotes.</li>
              <li>Add umbrella if you have assets.</li>
              <li>Check flood risk at floodsmart.gov.</li>
              <li>Update home value (your replacement-cost number).</li>
              <li>Confirm jewelry / fine art / firearms have separate riders if needed.</li>
              <li>Ask about senior + multi-policy + smart-home discounts.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground">An independent insurance broker (NOT a captive agent for one company) can shop multiple insurers. Often free to you. Search "[your area] independent insurance agent".</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
