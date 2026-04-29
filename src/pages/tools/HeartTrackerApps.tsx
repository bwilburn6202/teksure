import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const DEVICES = [
  { name: 'Apple Watch SE / Series 9 / 10', cost: '$249-450', best: 'Best heart-rate tracking. ECG (Series 4+). Atrial fib detection. Fall detection.', good: 'Best overall.' },
  { name: 'KardiaMobile (AliveCor)', cost: '$80-150', best: 'FDA-cleared single-lead ECG card. 30-sec readings. Doctor-quality.', good: 'Best ECG-only.' },
  { name: 'Withings ScanWatch', cost: '$280-400', best: 'Looks like analog watch. ECG + SpO2 + sleep. 30-day battery.', good: 'Best non-screen watch.' },
  { name: 'Fitbit Sense 2', cost: '$200', best: 'ECG + AFib detection. 6-day battery. Cheaper than Apple Watch.', good: 'Best Fitbit.' },
  { name: 'Polar H10 chest strap', cost: '$80', best: 'Most accurate heart rate during exercise. Chest strap.', good: 'Best exercise accuracy.' },
];

export default function HeartTrackerApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Heart Tracker Apps + Devices | TekSure" description="Apple Watch, KardiaMobile, Withings. Plain-English picks for at-home heart rate, ECG, and AFib monitoring." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Heart Tracker Apps</h1>
          <p className="text-lg text-muted-foreground">Track at home. Catch issues early.</p>
        </div>

        <div className="space-y-3 mb-6">
          {DEVICES.map(d => (
            <Card key={d.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{d.name}</h3>
                  <span className="text-sm font-semibold text-primary">{d.cost}</span>
                </div>
                <p className="text-sm">{d.best}</p>
                <p className="text-sm text-muted-foreground">{d.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why monitor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AFib detection</strong> — Apple Watch alone has caught millions of cases. Untreated AFib = stroke risk.</li>
              <li>Track resting heart rate trends — sudden change is a flag.</li>
              <li>Help cardiologist see real-world patterns.</li>
              <li>Confidence — fewer "is this a heart attack?" worries.</li>
              <li>Some Medicare Advantage plans REIMBURSE for fitness trackers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to call doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>App says "AFib detected" — show doctor at next visit. Save the PDF.</li>
              <li>Resting heart rate consistently above 100 or below 50.</li>
              <li>Sudden 10+ bpm increase in resting rate without explanation.</li>
              <li>Heart skipping or pounding more than occasionally.</li>
              <li>Chest pain with arm/jaw pain — call 911. Always.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Share with doctor</h3>
            <p className="text-sm text-muted-foreground">All these apps export PDF reports. Bring to cardiology appointments. Doctors love seeing 30-day trends instead of 1 in-office reading. Cardiologist often catches things in real-world data they&apos;d miss in 5-min visit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
