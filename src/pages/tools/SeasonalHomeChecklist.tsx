import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function SeasonalHomeChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Seasonal Home Checklist for Seniors | TekSure" description="4-season home maintenance. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Seasonal Home Checklist</h1>
          <p className="text-lg text-muted-foreground">Maintenance that prevents disasters.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spring (March-May)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Service HVAC.</li>
              <li>Clean gutters.</li>
              <li>Check roof for winter damage.</li>
              <li>Test sump pump.</li>
              <li>Clean dryer vent.</li>
              <li>Reseal exterior caulk.</li>
              <li>Power-wash deck.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Summer (June-Aug)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replace air filter monthly.</li>
              <li>Clean ceiling fans.</li>
              <li>Check window AC seals.</li>
              <li>Trim trees from house.</li>
              <li>Service garbage disposal.</li>
              <li>Test smoke + CO detectors.</li>
              <li>Clean refrigerator coils.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fall (Sept-Nov)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Service heating system.</li>
              <li>Clean gutters AGAIN.</li>
              <li>Drain outdoor faucets.</li>
              <li>Reverse ceiling fans.</li>
              <li>Insulate exposed pipes.</li>
              <li>Stock fireplace wood.</li>
              <li>Replace weather stripping.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Winter (Dec-Feb)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Run faucets in cold (prevent freeze).</li>
              <li>Check roof for ice dams.</li>
              <li>Salt walkways early.</li>
              <li>Service generator.</li>
              <li>Vacuum dryer vent.</li>
              <li>Inspect basement after thaw.</li>
              <li>Test backup power.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Monthly all year</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Test smoke + CO detectors.</li>
              <li>Check air filter.</li>
              <li>Run garbage disposal w/ ice.</li>
              <li>Clean range hood filter.</li>
              <li>Clean vacuum + filters.</li>
              <li>Check water heater pressure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Yearly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Termite + pest inspection.</li>
              <li>Septic / sewer pumping.</li>
              <li>Chimney sweep.</li>
              <li>Detector battery change.</li>
              <li>Replace water heater anode.</li>
              <li>Roof inspection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hire help</h3>
            <p className="text-sm text-muted-foreground">Many tasks too risky / hard for seniors — gutter cleaning ($150), HVAC service ($150), chimney sweep ($300), tree trimming ($500). Worth hiring. Ask family. Local handyman services. Senior-friendly handymen often discounted. Don&apos;t risk falls. Schedule yearly with family help. Check Nextdoor for trusted local pros.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
