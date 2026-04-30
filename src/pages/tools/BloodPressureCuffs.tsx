import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const CUFFS = [
  { name: 'Omron Platinum BP5450', cost: '$80', best: 'Gold standard. Big screen. Bluetooth syncs to phone. 2 users.', good: 'Best overall.' },
  { name: 'Omron 5 Series', cost: '$50', best: 'Cheaper Omron. Reliable. No Bluetooth, big screen.', good: 'Best basic.' },
  { name: 'Withings BPM Connect', cost: '$100', best: 'Wifi syncing. Long-term tracking. App great for sharing with doctor.', good: 'Best smart tracking.' },
  { name: 'iHealth Track', cost: '$70', best: 'Bluetooth. Simple app. Apple Health integration.', good: 'Best for iPhone.' },
  { name: 'CVS / Walgreens basic cuff', cost: '$30-50', best: 'Walgreens, CVS branded cuffs. Adequate. No Bluetooth.', good: 'Best in-store cheap.' },
];

export default function BloodPressureCuffs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blood Pressure Cuffs Compared | TekSure" description="Omron, Withings, iHealth. Plain-English picks for the most accurate at-home blood pressure cuffs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Blood Pressure Cuffs</h1>
          <p className="text-lg text-muted-foreground">"White coat" readings aren&apos;t the truth.</p>
        </div>

        <div className="space-y-3 mb-6">
          {CUFFS.map(c => (
            <Card key={c.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <span className="text-sm font-semibold text-primary">{c.cost}</span>
                </div>
                <p className="text-sm">{c.best}</p>
                <p className="text-sm text-muted-foreground">{c.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to take BP correctly</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sit quietly 5 minutes BEFORE.</li>
              <li>Empty bladder.</li>
              <li>No caffeine, exercise, smoking 30 min before.</li>
              <li>Sit in chair with back support.</li>
              <li>Feet flat on floor (no crossed legs).</li>
              <li>Arm on table, cuff at heart level.</li>
              <li>Take 2 readings, 1 min apart. Average them.</li>
              <li>Same time daily for trends.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Healthy range (2025 guidelines)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Normal</strong> — under 120/80.</li>
              <li><strong>Elevated</strong> — 120-129 / under 80.</li>
              <li><strong>Stage 1</strong> — 130-139 / 80-89.</li>
              <li><strong>Stage 2</strong> — 140+ / 90+.</li>
              <li><strong>Crisis</strong> — over 180/120 → call doctor / ER.</li>
              <li>Senior targets often slightly higher (130-140) — talk to YOUR doctor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sharing with doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bluetooth cuffs export PDF reports.</li>
              <li>Or: notebook with date + 2 readings + average.</li>
              <li>Bring 14 days of data to cardiology visits.</li>
              <li>Real patterns matter more than one office reading.</li>
              <li>Many doctors now ASK for at-home log.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Wrist cuffs less accurate</h3>
            <p className="text-sm text-muted-foreground">Skip wrist cuffs. Upper-arm cuffs are MUCH more accurate. Take the time to roll up sleeve and use a real cuff. Wrist readings often 5-10 points off.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
