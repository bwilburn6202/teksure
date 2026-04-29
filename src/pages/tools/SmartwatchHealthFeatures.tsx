import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse } from 'lucide-react';

export default function SmartwatchHealthFeatures() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smartwatch Health Features for Seniors | TekSure" description="What every smartwatch can monitor. Plain-English health features for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartPulse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smartwatch Health</h1>
          <p className="text-lg text-muted-foreground">More medical tracking on your wrist than imaginable.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">All smartwatches measure</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heart rate (24/7).</li>
              <li>Steps + activity.</li>
              <li>Sleep stages.</li>
              <li>Workout tracking (with GPS).</li>
              <li>Calories burned.</li>
              <li>Standing time.</li>
              <li>Inactive alerts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Premium features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ECG/EKG</strong> — Apple Watch, Samsung Galaxy Watch, Fitbit Sense.</li>
              <li><strong>AFib detection</strong> — irregular rhythm warnings.</li>
              <li><strong>SpO2 (blood oxygen)</strong> — Apple, Garmin, Fitbit.</li>
              <li><strong>Skin temperature</strong> — Apple Watch.</li>
              <li><strong>Blood pressure</strong> — Samsung Galaxy Watch + cuff.</li>
              <li><strong>Stress monitoring</strong>.</li>
              <li><strong>VO2 Max</strong> — fitness measure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Coming 2026+</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Non-invasive glucose (Apple, Samsung — slow).</li>
              <li>Hydration monitoring.</li>
              <li>Mental health insights.</li>
              <li>Hearing health monitoring.</li>
              <li>Sleep apnea detection (Apple Watch S10).</li>
              <li>Hypertension alerts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior life-savers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Watch fall detection — auto 911.</li>
              <li>Apple Watch Crash Detection — car accidents.</li>
              <li>Garmin Incident Detection.</li>
              <li>Emergency SOS button on most.</li>
              <li>AFib early-warning systems.</li>
              <li>Many seniors saved by smartwatch detection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Share with doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Print PDF of health data from app.</li>
              <li>Share trends — heart rate, BP, sleep, activity.</li>
              <li>Doctor sees big picture not just visit snapshot.</li>
              <li>ECG can be sent direct to cardiologist.</li>
              <li>Health Records integration via Apple Health.</li>
              <li>Bring data to next appointment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t over-rely</h3>
            <p className="text-sm text-muted-foreground">Smartwatches FDA-cleared but not medical devices. False positives + negatives. Use as health awareness tool. Take seriously when warnings — but verify with doctor. Pair with annual physical + medical professional. Smartwatch ≠ replace doctor.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
