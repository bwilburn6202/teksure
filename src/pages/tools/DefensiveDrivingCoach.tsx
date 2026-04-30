import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function DefensiveDrivingCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Defensive Driving Course — AARP Smart Driver | TekSure" description="A 4-8 hour course saves 5-15% on car insurance, makes you safer, and is offered online. Plain-English guide to AARP, AAA, and other senior driving courses." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Defensive Driving</h1>
          <p className="text-lg text-muted-foreground">5-15% off insurance + safer driving. Best $25 you\'ll spend.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why take it</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Most insurance companies give 5-15% off your auto premium for 3 years.</li>
              <li>Average driver saves $50-150 a year — up to $450 over 3 years.</li>
              <li>Real updates on rules, signs, and tech (lane assist, blind-spot monitoring).</li>
              <li>Refreshes muscle memory on things you might have forgotten.</li>
              <li>In some states (NY, Texas, Florida) — required for the discount.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best courses</h2>
            <ul className="space-y-3 text-sm">
              <li><strong>AARP Smart Driver</strong> — $25 online for AARP members ($30 non-members). 4-8 hours. Take at your own pace. Most popular.</li>
              <li><strong>AAA RoadWise Driver</strong> — about $30 online. Designed specifically for 65+.</li>
              <li><strong>Improv Defensive Driving</strong> — $25-35. Funny, taught with humor — keeps you engaged.</li>
              <li><strong>National Safety Council</strong> — accredited, often required by insurance for discount.</li>
              <li><strong>Your state DMV</strong> — some states have free senior refresher courses.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How online courses work</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pay online. Sign in.</li>
              <li>Watch videos and read short modules. Pause and resume anytime.</li>
              <li>Quiz at end of each section — usually 80% to pass, can retake.</li>
              <li>Final exam.</li>
              <li>Print certificate.</li>
              <li>Mail / fax / upload certificate to your insurance company. Discount kicks in next bill.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What\'s covered</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Age-related changes — vision, hearing, reaction time, medications.</li>
              <li>How to compensate (more following distance, slower speeds).</li>
              <li>New car features — lane assist, automatic emergency braking.</li>
              <li>Roundabouts.</li>
              <li>Distracted driving.</li>
              <li>When to give up driving (the hardest topic).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Who should take it</h3>
            <p className="text-sm text-muted-foreground">If you\'re 50+ and drive — yes, every 3 years. The discount alone usually pays for the course 2-5 times over. Even better: research shows seniors who take these courses have measurably fewer accidents.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
