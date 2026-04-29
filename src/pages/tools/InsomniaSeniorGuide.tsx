import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

export default function InsomniaSeniorGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Insomnia Help for Seniors | TekSure" description="Sleep through the night. Plain-English insomnia fixes for seniors — habits, light, meds review." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Insomnia Help</h1>
          <p className="text-lg text-muted-foreground">Sleep changes after 65 — but you can sleep well.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors sleep less</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Melatonin production drops with age.</li>
              <li>Deep sleep stages shorten.</li>
              <li>Bladder wakes us up more.</li>
              <li>Aches + pains.</li>
              <li>Medications affect sleep.</li>
              <li>Earlier sleep + earlier wake = normal aging.</li>
              <li>7-8 hrs still target.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sleep hygiene fixes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Same bedtime + wake time daily (even weekends).</li>
              <li>Cool dark room — 65-68°F ideal.</li>
              <li>No screens 1 hr before bed.</li>
              <li>No caffeine after noon.</li>
              <li>Limit fluids 2 hrs before bed.</li>
              <li>Bedroom for sleep only — no TV, no work.</li>
              <li>Bright light (sun or lamp) within 30 min of waking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you can&apos;t sleep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>20 min rule — if not asleep in 20 min, get up.</li>
              <li>Read in dim light until sleepy.</li>
              <li>Don&apos;t look at clock — adds stress.</li>
              <li>Box breathing (4 in, 4 hold, 4 out, 4 hold).</li>
              <li>Don&apos;t catastrophize — one bad night = OK.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Talk to doctor about</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sleep apnea — common + dangerous if untreated.</li>
              <li>Restless legs syndrome.</li>
              <li>Medication side effects (review with pharmacist).</li>
              <li>Depression / anxiety.</li>
              <li>Avoid &quot;PM&quot; meds (Tylenol PM, Benadryl) — cause confusion in seniors.</li>
              <li>CBT-I (cognitive behavioral therapy for insomnia) — proven, drug-free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free CBT-I app</h3>
            <p className="text-sm text-muted-foreground"><strong>CBT-i Coach</strong> — free, made by VA. Walks through the gold-standard insomnia therapy. Works as well as sleeping pills, no side effects. Apple/Android app stores.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
