import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function ECGOnAppleWatch() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="ECG on Apple Watch | TekSure" description="Take medical-grade EKG on wrist. Plain-English Apple Watch ECG guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Watch ECG</h1>
          <p className="text-lg text-muted-foreground">Medical-grade EKG on your wrist.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30-second EKG recording.</li>
              <li>FDA-cleared.</li>
              <li>Detects atrial fibrillation (AFib).</li>
              <li>PDF for cardiologist.</li>
              <li>Can save hospital trips.</li>
              <li>Apple Watch Series 4 or later.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Take an ECG</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open ECG app on Apple Watch.</li>
              <li>Rest arm on table.</li>
              <li>Touch + hold finger on Digital Crown.</li>
              <li>Don&apos;t move 30 seconds.</li>
              <li>Result appears: Sinus Rhythm / AFib / Inconclusive.</li>
              <li>PDF auto-saved in iPhone Health app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to take ECG</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heart racing / pounding feel.</li>
              <li>Watch alerts irregular rhythm.</li>
              <li>Skipping beats sensation.</li>
              <li>Doctor asks for at-home recording.</li>
              <li>Before exercise.</li>
              <li>Track progress on heart medication.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AFib alerts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Watch monitors background — no action needed.</li>
              <li>If detects 5x irregular rhythms in row → notification.</li>
              <li>Take ECG when alerted.</li>
              <li>Show doctor.</li>
              <li>AFib increases stroke risk 5x.</li>
              <li>Caught early = saves lives.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Send to doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Health app → ECG → tap recording.</li>
              <li>Tap Share PDF → Email/Message to doctor.</li>
              <li>Or print at appointment.</li>
              <li>Some hospitals integrate via My Chart.</li>
              <li>Doctor reviews like clinical EKG.</li>
              <li>FDA-cleared = trustworthy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Limits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Single-lead vs 12-lead ER.</li>
              <li>Detects AFib but not all heart issues.</li>
              <li>Limited to certain rhythms.</li>
              <li>Don&apos;t replace ER if chest pain.</li>
              <li>Inconclusive = needs proper EKG.</li>
              <li>Helps catch issues early.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Other smartwatch ECG</h3>
            <p className="text-sm text-muted-foreground"><strong>Samsung Galaxy Watch</strong> — ECG, only with Galaxy phone. <strong>Fitbit Sense 2</strong> — ECG. <strong>Withings ScanWatch</strong> — beautiful + ECG. <strong>KardiaMobile</strong> — $90 device, ECG without watch. All FDA-cleared. AFib detection saves lives.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
