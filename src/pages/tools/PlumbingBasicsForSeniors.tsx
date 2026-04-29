import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function PlumbingBasicsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Plumbing Basics for Seniors | TekSure" description="DIY plumbing safely. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Plumbing Basics</h1>
          <p className="text-lg text-muted-foreground">Save plumber visits. Know when to call.</p>
        </div>

        <Card className="mb-4 border-red-300">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3 text-red-700">EMERGENCY: shut off water</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Main shutoff usually basement.</li>
              <li>Or near water meter.</li>
              <li>Practice now — don&apos;t wait.</li>
              <li>Label it clearly.</li>
              <li>Tell family location.</li>
              <li>Could save thousands in damage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Clogged toilet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plunger first — flange type.</li>
              <li>Slow + steady, not hard.</li>
              <li>15-20 plunges.</li>
              <li>If still clogged: snake / auger.</li>
              <li>Don&apos;t use chemicals (damage pipes).</li>
              <li>Hot water + dish soap can help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Slow drain</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Boil water, pour slowly.</li>
              <li>Or baking soda + vinegar.</li>
              <li>Wait 15 min, flush hot water.</li>
              <li>Drain snake $20 — DIY.</li>
              <li>Clear hair from sink stopper.</li>
              <li>Skip Drano (corrodes).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Running toilet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$10 fix usually.</li>
              <li>Replace flapper at hardware store.</li>
              <li>YouTube — step-by-step.</li>
              <li>Tank lid removed first.</li>
              <li>Test flushes after replace.</li>
              <li>Saves $100/yr in water.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Leaky faucet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replace washers ($5).</li>
              <li>Or full cartridge replacement.</li>
              <li>Shut off water first.</li>
              <li>YouTube videos by faucet brand.</li>
              <li>Drip wastes 3,000 gal/yr.</li>
              <li>Easy DIY.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to call plumber</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Burst pipe.</li>
              <li>Sewage backup.</li>
              <li>No hot water.</li>
              <li>Frozen pipes.</li>
              <li>Multiple drains slow.</li>
              <li>Anything beyond your comfort.</li>
              <li>$150-400 typical visit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior tools kit ($50)</h3>
            <p className="text-sm text-muted-foreground">Plunger, drain snake, adjustable wrench, plumber&apos;s tape, pipe wrench, spare flapper. YouTube has tutorials for everything. Avoid hiring for $500 what costs $20 to DIY. But never push past comfort. Family member helping = OK. Home Depot rents specialty tools.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
