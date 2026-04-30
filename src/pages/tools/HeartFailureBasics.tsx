import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function HeartFailureBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Heart Failure Basics for Seniors | TekSure" description="Live well with heart failure. Plain-English guide for senior patients." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Heart Failure</h1>
          <p className="text-lg text-muted-foreground">Manageable. Treatable. Live well.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What heart failure is</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heart pumps less efficiently.</li>
              <li>NOT the same as heart attack.</li>
              <li>Fluid backs up in lungs + body.</li>
              <li>6.5M Americans have it.</li>
              <li>Most common 65+.</li>
              <li>Manageable with medication + lifestyle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily symptoms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shortness of breath (especially lying down).</li>
              <li>Swelling in legs, ankles, feet.</li>
              <li>Fatigue.</li>
              <li>Rapid weight gain (fluid).</li>
              <li>Coughing.</li>
              <li>Reduced exercise tolerance.</li>
              <li>Track DAILY weight (huge clue).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily management</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Weigh every morning. Same time. Same scale.</li>
              <li>Gain 3+ lbs in 2-3 days = call doctor.</li>
              <li>Limit salt under 2,000mg/day (often 1,500).</li>
              <li>Limit fluid (per doctor).</li>
              <li>Take all meds as prescribed.</li>
              <li>Watch for swelling.</li>
              <li>Walk daily as tolerated.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Critical medications</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ACE/ARBs</strong> — lisinopril, losartan.</li>
              <li><strong>Beta blockers</strong> — carvedilol, metoprolol.</li>
              <li><strong>Diuretics</strong> — furosemide. Removes fluid.</li>
              <li><strong>Spironolactone</strong> — adds protection.</li>
              <li><strong>SGLT2</strong> — newer, dapagliflozin (Farxiga).</li>
              <li><strong>Entresto</strong> — newer combo med.</li>
              <li>Don&apos;t stop without doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get to ER if</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Severe shortness of breath (can&apos;t lie down).</li>
              <li>Sudden swelling.</li>
              <li>Chest pain.</li>
              <li>Pink frothy cough.</li>
              <li>Confusion.</li>
              <li>Fast heart rate at rest.</li>
              <li>Don&apos;t wait.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Get cardiologist + heart failure specialist</h3>
            <p className="text-sm text-muted-foreground">Many patients only see primary care. Heart failure clinic = specialized + better outcomes. Reduces hospitalizations 50%. Medicare covers. <strong>Heart Failure Society of America</strong> — find specialist. Living well with heart failure possible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
