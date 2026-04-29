import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse } from 'lucide-react';

const PICKS = [
  { name: 'Omron Platinum BP5450', cost: '$80', best: 'Best home cuff. Bluetooth to phone. Doctor-grade.', good: 'Best cuff.' },
  { name: 'Withings BPM Connect', cost: '$100', best: 'WiFi cuff syncs to app + doctor portal.', good: 'Best smart.' },
  { name: 'QardioArm', cost: '$100', best: 'Travel cuff. Bluetooth.', good: 'Best portable.' },
  { name: 'iHealth Track', cost: '$45', best: 'Budget Bluetooth cuff.', good: 'Best budget.' },
  { name: 'Heart Habit (app)', cost: 'FREE', best: 'Tracks BP + reminds meds. Free.', good: 'Best app.' },
];

export default function HighBloodPressureApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blood Pressure Apps for Seniors | TekSure" description="Track BP at home. Plain-English picks for senior BP cuffs + apps that sync to doctor." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartPulse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">BP Tracking</h1>
          <p className="text-lg text-muted-foreground">2 of 3 seniors have high BP. Tech tracks it well.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">BP targets (2026)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Normal: under 120/80.</li>
              <li>Elevated: 120-129 / under 80.</li>
              <li>Stage 1 high: 130-139 / 80-89.</li>
              <li>Stage 2 high: 140+ / 90+.</li>
              <li>Crisis: 180+ / 120+ — ER NOW.</li>
              <li>Many seniors target around 130/80.</li>
              <li>Aggressive lowering can be too aggressive — work with doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Take BP correctly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sit 5 min quiet first.</li>
              <li>Empty bladder before.</li>
              <li>Feet flat, back supported.</li>
              <li>Cuff on bare arm, heart level.</li>
              <li>No talking during.</li>
              <li>Take 2-3 readings, average them.</li>
              <li>Same time daily — morning is best.</li>
              <li>Stop coffee/exercise 30 min before.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lower BP without meds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reduce salt to 1,500mg/day (see /tools/salt-reduction-tips).</li>
              <li>Lose 5-10 lbs — drops BP 5-10 points.</li>
              <li>30 min walking 5 days/week.</li>
              <li>Limit alcohol to 1/day.</li>
              <li>DASH diet — proven 5-15 point drop.</li>
              <li>Manage stress — meditation, yoga.</li>
              <li>Sleep 7-8 hrs (poor sleep raises BP).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common BP medications</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ACE inhibitors</strong> — lisinopril. Common.</li>
              <li><strong>ARBs</strong> — losartan, valsartan.</li>
              <li><strong>Calcium channel blockers</strong> — amlodipine.</li>
              <li><strong>Diuretics</strong> — HCTZ. Watch for falls if dizzy.</li>
              <li><strong>Beta blockers</strong> — metoprolol. Slows heart rate.</li>
              <li>Most generics $4-15/mo.</li>
              <li>Take SAME time daily.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground"><strong>Heart.org</strong> (American Heart Association) — free BP charts + DASH diet. <strong>Million Hearts</strong> initiative — millionhearts.hhs.gov. Most pharmacies have free BP machines (CVS, Walgreens, Walmart). Track for 1 week before doctor visit = better treatment decisions.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
