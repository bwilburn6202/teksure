import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const APPS = [
  { name: 'PD Warrior', cost: 'FREE / $80/yr Premium', best: 'Exercise programs designed for Parkinson&apos;s. Slows progression. Daily routines.', good: 'Best exercise.' },
  { name: 'Stop Parkinson', cost: 'FREE', best: 'Tremor-detection + medication tracker. From researchers at Imperial College.', good: 'Best tracking.' },
  { name: 'Voice Analyst (Lingraphica)', cost: 'FREE', best: 'Tracks voice strength + clarity over time. Catches early voice changes.', good: 'Best voice tracking.' },
  { name: 'Beats Medical', cost: 'FREE / $20/mo', best: 'Walking + balance + speech therapy in app. Used by clinics.', good: 'Best therapy.' },
  { name: 'mPower (Sage Bionetworks)', cost: 'FREE', best: 'Research app. Tap, voice, walking tests. Contributes to PD research.', good: 'Best for research.' },
];

export default function ParkinsonsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Parkinson&apos;s Apps + Tools | TekSure" description="Exercise, tremor tracking, voice therapy, and community apps for people living with Parkinson&apos;s. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Parkinson&apos;s Apps + Tools</h1>
          <p className="text-lg text-muted-foreground">Stay strong, stay connected.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Exercise programs (research-backed)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Rock Steady Boxing</strong> — non-contact boxing classes. Slows progression. Find at rocksteadyboxing.org.</li>
              <li><strong>LSVT BIG / LSVT LOUD</strong> — physical and speech therapy specifically for Parkinson&apos;s. Doctor referral. Often Medicare-covered.</li>
              <li><strong>PWR! Moves</strong> — power exercises designed for PD.</li>
              <li><strong>Tai chi, yoga, dance</strong> — all show benefit. Look for "Dance for PD" classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Helpful tech + tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Liftware Steady spoon</strong> ($195) — counters tremor, lets you eat soup again.</li>
              <li><strong>Voice amplifier</strong> — soft voice is common; portable mic + speaker helps.</li>
              <li><strong>Big-button phone</strong> — Tremor-friendly.</li>
              <li><strong>Smartwatch with medication reminders</strong> — Apple Watch, Fitbit.</li>
              <li><strong>Magnetic shoes</strong> (BILLY Footwear, others) — no tying needed.</li>
              <li><strong>Weighted utensils</strong>.</li>
              <li><strong>Voice-controlled lights</strong> — when motor symptoms are tough.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Community + support</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Michael J. Fox Foundation</strong> — research, resources, clinical trial finder.</li>
              <li><strong>Parkinson&apos;s Foundation</strong> — parkinson.org, 1-800-4PD-INFO. Care guides + helpline.</li>
              <li><strong>American Parkinson Disease Association</strong> — apdaparkinson.org, local chapters.</li>
              <li><strong>Davis Phinney Foundation</strong> — "Every Victory Counts" guide is free + excellent.</li>
              <li><strong>Local PD support groups</strong> — at hospitals, senior centers. Search by zip.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Movement is medicine</h3>
            <p className="text-sm text-muted-foreground">Studies consistently show: regular vigorous exercise is the single most effective non-medication treatment for Parkinson&apos;s. 30 minutes, 3-4 times a week. Anything that gets your heart rate up. Slows symptom progression measurably.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
