import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Map } from 'lucide-react';

export default function RVTripWizardGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="RV Trip Wizard for Senior RVers | TekSure" description="Plan RV routes accounting for height, weight, fuel. Best RV trip planner for senior travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Map className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">RV Trip Wizard</h1>
          <p className="text-lg text-muted-foreground">RV-aware route planning.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Routes around low bridges (RV height aware).</li>
              <li>Avoids steep grades.</li>
              <li>Identifies tight turns.</li>
              <li>Plans fuel stops based on tank size.</li>
              <li>Finds RV-friendly stops along route.</li>
              <li>Built-in campground database.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$59/year subscription.</li>
              <li>Includes RV LIFE Pro features.</li>
              <li>RV LIFE GPS app for turn-by-turn.</li>
              <li>Save trips to plan offline.</li>
              <li>Worth it for serious RVers.</li>
              <li>Cheaper than one bridge mistake.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why not Google Maps?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Google Maps doesn&apos;t know RV restrictions.</li>
              <li>Routes through low bridges.</li>
              <li>Doesn&apos;t avoid weight-restricted roads.</li>
              <li>Sends you down narrow lanes.</li>
              <li>Real RVers crash into bridges following Google.</li>
              <li>Truck/RV-specific GPS critical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting RV dimensions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Enter height — most important.</li>
              <li>Enter length.</li>
              <li>Enter weight.</li>
              <li>Enter fuel capacity + MPG.</li>
              <li>App routes accordingly.</li>
              <li>Update if towing changes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alternative: Garmin RV GPS</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Garmin RV 1095 — $700 dedicated device.</li>
              <li>Or Garmin RV 795 — $500.</li>
              <li>One-time cost, no subscription.</li>
              <li>RV-specific routing built-in.</li>
              <li>Works without phone connection.</li>
              <li>Many full-time RVers use both.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For senior RVers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t trust Google Maps with RV.</li>
              <li>Plan routes day before — review carefully.</li>
              <li>Build in slower travel days.</li>
              <li>Account for fatigue + driving comfort.</li>
              <li>Have backup plan if route blocked.</li>
              <li>Read RV forums for area-specific advice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth $59/year</h3>
            <p className="text-sm text-muted-foreground">If you own an RV bigger than a small camper, RV Trip Wizard at $59/year is essential. One avoided bridge strike pays for it for decades. Combined with Garmin RV GPS as backup, you have RV-aware routing that won&apos;t send you to disaster. Many senior RVers say this is the most important $59 they spend annually.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
