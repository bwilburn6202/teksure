import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function StrokeWarningSigns() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Stroke Warning Signs for Seniors | TekSure" description="Time = brain. Plain-English stroke recognition guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Stroke Warning Signs</h1>
          <p className="text-lg text-muted-foreground">FAST = save lives. Memorize NOW.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">FAST signs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>F</strong>ace droop — one side of face droops.</li>
              <li><strong>A</strong>rm weakness — one arm drifts down.</li>
              <li><strong>S</strong>peech slurred or strange.</li>
              <li><strong>T</strong>ime — call 911 NOW.</li>
              <li>Time matters — clot busters work first 3 hours.</li>
              <li>Even if symptoms go away — STILL go ER.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other signs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sudden severe headache (worst of life).</li>
              <li>Sudden vision change.</li>
              <li>Sudden confusion / trouble understanding.</li>
              <li>Sudden trouble walking / dizziness.</li>
              <li>Sudden numbness on one side.</li>
              <li>Even if mild — call 911.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mini-stroke (TIA)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Symptoms last minutes to hours.</li>
              <li>Then go away.</li>
              <li>STILL emergency — predicts full stroke.</li>
              <li>30% have full stroke within 90 days.</li>
              <li>Don&apos;t ignore.</li>
              <li>Get to ER even if feel better.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reduce stroke risk</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Control BP — single biggest factor.</li>
              <li>Treat AFib if have it.</li>
              <li>Don&apos;t smoke.</li>
              <li>Limit alcohol.</li>
              <li>Exercise daily.</li>
              <li>Mediterranean diet.</li>
              <li>Manage diabetes + cholesterol.</li>
              <li>Maintain healthy weight.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After stroke</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Aggressive rehab = best outcomes.</li>
              <li>Physical, occupational, speech therapy.</li>
              <li>Medicare covers extensively.</li>
              <li>Brain rewires (neuroplasticity).</li>
              <li>Recovery continues 1+ year.</li>
              <li>Most return home.</li>
              <li>Stroke survivor support groups.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apple Watch detection</h3>
            <p className="text-sm text-muted-foreground">Apple Watch fall detection auto-calls 911 if you fall. Crash detection too. AFib alerts catch irregular rhythm = stroke risk warning. See /tools/apple-watch-fall-detection. Senior life saver.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
