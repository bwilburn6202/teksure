import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function BalanceExerciseApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Balance Exercise Apps — Prevent Falls | TekSure" description="Falls cause 1 in 4 senior injuries. Plain-English picks for balance-training apps that meaningfully reduce fall risk." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Balance Exercise Apps</h1>
          <p className="text-lg text-muted-foreground">Best fall prevention there is.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why balance training matters</h2>
            <p className="text-sm">1 in 4 seniors falls each year. 1 in 5 falls causes serious injury. Balance training reduces fall risk by 30-40%. 10-15 minutes a day. No equipment.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Nymbl Training (FREE)</strong> — research-backed senior balance app. 10-min/day. Free for many Medicare Advantage members.</li>
              <li><strong>Down Dog (FREE for 60+)</strong> — gentle yoga + balance flow.</li>
              <li><strong>Tai Chi for Seniors apps</strong> — Yang style is gentlest.</li>
              <li><strong>YouTube — Eldergym, More Life Health Seniors, SilverSneakers</strong> — free, dedicated senior balance routines.</li>
              <li><strong>Mighty Health</strong> — $25/mo. 1-on-1 coach + classes for 50+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best research-backed programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Otago Exercise Program</strong> — strength + balance. NIH-validated. Reduces falls 35%. Free PDFs online.</li>
              <li><strong>Tai Chi: Moving for Better Balance</strong> — CDC-approved. Search at "Tai Chi" + your zip — free at many community centers.</li>
              <li><strong>A Matter of Balance</strong> — 8-session free workshop at YMCAs and senior centers.</li>
              <li><strong>Stepping On</strong> — 7-week senior fall prevention. Free at health depts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5 simple daily exercises</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Heel-toe walk</strong> — 20 steps, like a tightrope. Hold counter for support.</li>
              <li><strong>Single-leg stand</strong> — 10 sec each leg. Build to 30 sec.</li>
              <li><strong>Sit-to-stand</strong> — 10 reps from chair without using hands.</li>
              <li><strong>Heel raises</strong> — 15 reps, holding counter.</li>
              <li><strong>Side leg raises</strong> — 10 reps each side.</li>
            </ol>
            <p className="text-sm mt-3">Do all 5 = 10 minutes. Daily. Within 4 weeks, balance noticeably improves.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Medicare PT</h3>
            <p className="text-sm text-muted-foreground">If you&apos;ve fallen recently, ask doctor for a physical therapy referral. Medicare covers it. Therapist designs a program for YOUR balance issues. Way more effective than apps for the first few weeks. Then maintain with apps.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
