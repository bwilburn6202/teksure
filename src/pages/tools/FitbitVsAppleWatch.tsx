import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

export default function FitbitVsAppleWatch() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fitbit vs Apple Watch for Seniors | TekSure" description="Pick the right smartwatch. Plain-English comparison for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fitbit vs Apple Watch</h1>
          <p className="text-lg text-muted-foreground">Two top choices. Different strengths.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Side-by-side</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Watch</strong> — premium, daily charge, iPhone only.</li>
              <li><strong>Fitbit</strong> — budget, 5-7 day battery, Android + iPhone.</li>
              <li>Both: heart rate, sleep, activity.</li>
              <li>Apple: ECG, AFib, fall detection, cellular.</li>
              <li>Fitbit: longer battery, simpler interface.</li>
              <li>Apple: $250-1,000. Fitbit: $80-300.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Watch SE = senior favorite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$250 — affordable Apple Watch.</li>
              <li>Fall detection.</li>
              <li>Emergency SOS.</li>
              <li>Heart rate.</li>
              <li>Workout tracking.</li>
              <li>Apple Pay.</li>
              <li>Phone calls (cellular version).</li>
              <li>Best for iPhone users + safety.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fitbit picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fitbit Inspire 3</strong> — $100. Basic + great.</li>
              <li><strong>Fitbit Charge 6</strong> — $160. Better display + features.</li>
              <li><strong>Fitbit Versa 4</strong> — $200. Smartwatch + screen.</li>
              <li><strong>Fitbit Sense 2</strong> — $300. Premium with ECG.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Watch picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Watch SE 2</strong> — $250. Best for most seniors.</li>
              <li><strong>Apple Watch Series 10</strong> — $400. Latest features.</li>
              <li><strong>Apple Watch Ultra 2</strong> — $800. Hiker/adventurer.</li>
              <li>Cellular adds $100 (calling without phone).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple-exclusive features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fall detection</strong> — auto-calls 911 + family.</li>
              <li><strong>Emergency SOS</strong> — hold side button.</li>
              <li><strong>Crash Detection</strong> — auto-detects car crash.</li>
              <li><strong>ECG</strong> — record EKG, share with doctor.</li>
              <li><strong>AFib detection</strong> — heart rhythm warnings.</li>
              <li><strong>High/low heart rate alerts</strong>.</li>
              <li>Cellular for calls without phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior pick</h3>
            <p className="text-sm text-muted-foreground">If iPhone user + want safety = <strong>Apple Watch SE 2 ($250)</strong>. Best fall detection + Emergency SOS. Worth charging daily for safety. If Android = Fitbit Charge 6 or Garmin Vivosmart 5. If hate charging = Garmin. Match to your phone + priorities.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
