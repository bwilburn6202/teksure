import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorDrivingTests() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Driving Self-Tests + Refresher Courses | TekSure" description="Driving safety for 60+. Plain-English picks for AARP refresher, online self-tests, when to stop driving." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Driving Tests</h1>
          <p className="text-lg text-muted-foreground">Stay safe + insured.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Refresher courses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AARP Smart Driver</strong> — 6-hour online course $20-30. Insurance discount in most states.</li>
              <li><strong>AAA RoadWise Driver</strong> — similar. Senior-focused.</li>
              <li><strong>State-sponsored courses</strong> — many free for 55+.</li>
              <li>Insurance discount typically 5-15% for 3 years after completion.</li>
              <li>Must be 50/55/60 depending on state.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Self-evaluation signs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Family makes nervous comments about your driving.</li>
              <li>Multiple recent fender-benders or close calls.</li>
              <li>Get lost on familiar routes.</li>
              <li>Slow reaction to traffic lights.</li>
              <li>Confused at intersections.</li>
              <li>Riding brake constantly.</li>
              <li>Trouble seeing road at night.</li>
              <li>Drift across lane lines.</li>
              <li>Trouble turning head to check blind spots.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Professional evaluations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>OT-trained Driver Rehabilitation Specialist (CDRS)</strong> — comprehensive assessment $200-500. Find at aded.net.</li>
              <li><strong>Driving evaluation by physician</strong> — sometimes covered by insurance.</li>
              <li><strong>Cognitive testing</strong> — ask doctor about MoCA test.</li>
              <li><strong>Hospital programs</strong> — many neurology dept offer driving evaluation.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Adaptations to extend driving</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pedal extender</strong> ($40-80) — for shorter people.</li>
              <li><strong>Steering wheel cover</strong> for grip.</li>
              <li><strong>Seat cushion / wedge</strong> for visibility.</li>
              <li><strong>Hand controls</strong> — for limited leg mobility.</li>
              <li><strong>Backup camera retrofit</strong> ($100-300).</li>
              <li><strong>Blind spot mirrors</strong> — $5-15 stick-on.</li>
              <li><strong>Avoid driving</strong> — at night, in rain, in rush hour.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to stop driving</h2>
            <p className="text-sm">Hard conversation. Things to consider:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Doctor recommends.</li>
              <li>Family + you both honestly say it&apos;s time.</li>
              <li>Can&apos;t drive at night safely.</li>
              <li>Multiple accidents in a year.</li>
              <li>Memory issues prevent driving safely.</li>
              <li>Better to retire driving early than after a tragedy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">After driving — keep mobility</h3>
            <p className="text-sm text-muted-foreground">Stopping driving doesn&apos;t mean isolation. See /tools/rideshare-for-seniors. Many Medicare Advantage plans include free rides. Senior centers run shuttle programs. Family can help. Don&apos;t equate "no car" with "no life".</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
