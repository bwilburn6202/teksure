import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

const PICKS = [
  { name: 'Withings Body+ Scale', price: '$100', best: 'Best smart scale. Auto-syncs to Apple Health, Google Fit, Withings app. Multiple users.', good: 'Pairs with their BP cuff seamlessly.' },
  { name: 'Renpho Smart Scale', price: '$30', best: 'Cheapest decent smart scale. Body composition, syncs to phone.', good: 'Best budget pick.' },
  { name: 'Eufy Smart Scale P2', price: '$50', best: 'Mid-range. Reliable.', good: 'Good if you want quality but not Withings price.' },
  { name: 'Withings BPM Connect', price: '$100', best: 'Wi-Fi blood pressure cuff. Sends results to phone automatically.', good: 'Best if you want simple syncing.' },
  { name: 'Omron Platinum BP5450', price: '$100', best: 'Most accurate consumer BP cuff. Bluetooth-only.', good: 'Best clinical accuracy.' },
  { name: 'iHealth BP cuff', price: '$50', best: 'Cheaper, syncs to Apple Health and Google Fit.', good: 'Best value.' },
  { name: 'KardiaMobile (AliveCor)', price: '$80-150', best: 'Personal EKG. 30-second test, FDA-cleared. Detects AFib.', good: 'Worth it for heart-condition patients.' },
  { name: 'Pulse oximeter (any reputable brand)', price: '$20-40', best: 'Clip on finger, reads oxygen saturation. Useful for COPD, heart, COVID monitoring.', good: 'Get the FDA-cleared kind, not knockoffs.' },
];

export default function SmartScaleBpCuffPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Scale & BP Cuff Picker — Withings, Omron, Kardia | TekSure" description="Track blood pressure, weight, oxygen, and heart rhythm at home. Plain-English picks for the best connected health devices." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Scale & BP Cuff Picker</h1>
          <p className="text-lg text-muted-foreground">Real medical-grade tracking from home.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why connected devices help</h2>
            <p className="text-sm">Single readings can be misleading. A trend over weeks tells you and your doctor much more. Connected devices track without you logging anything — they sync to your phone and into your patient portal automatically.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm mb-1">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for accurate BP readings</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Sit quietly for 5 minutes first.</li>
              <li>Empty bladder.</li>
              <li>Feet flat on floor, back supported.</li>
              <li>Arm on table at heart level.</li>
              <li>Cuff on bare arm, not over clothing.</li>
              <li>Don\'t talk during measurement.</li>
              <li>Take 2 readings a minute apart, average them.</li>
              <li>Same time each day if tracking trend.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sharing data with your doctor</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sync the device with Apple Health (iPhone) or Google Fit / Health Connect (Android).</li>
              <li>Show your doctor the trend chart at next visit.</li>
              <li>Some patient portals (MyChart, Epic) accept Apple Health data directly.</li>
              <li>Or screenshot the trend chart and message your doctor.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Insurance coverage</h3>
            <p className="text-sm text-muted-foreground">Many Medicare Advantage plans include a free BP cuff or smart scale. Some traditional insurance covers them with prescription. Ask your doctor and call your plan before paying.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
