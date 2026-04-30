import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hand } from 'lucide-react';

export default function GripStrengthTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grip Strength Tools for Seniors | TekSure" description="Hand strength = longevity marker. Plain-English guide to grip strengtheners + jar openers for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hand className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grip Strength Tools</h1>
          <p className="text-lg text-muted-foreground">Hand strength predicts longevity.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why grip strength matters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Studies link weak grip to higher mortality.</li>
              <li>Strong grip = full-body strength indicator.</li>
              <li>Easier daily life — opening jars, carrying groceries.</li>
              <li>Reduces wrist/elbow pain.</li>
              <li>Improves handwriting + typing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Grip trainers ($10-30)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Stress ball</strong> — $5. Squeeze 30x per hand daily.</li>
              <li><strong>Hand grip strengthener</strong> — adjustable, $15.</li>
              <li><strong>Therapy putty</strong> — different resistances. $10.</li>
              <li><strong>Finger exerciser</strong> — works each finger separately. $20.</li>
              <li><strong>Captains of Crush</strong> — for serious grip work, $25.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily grip exercises</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Squeeze stress ball 30x while watching TV.</li>
              <li>Towel wring — twist towel like wringing water, 10x.</li>
              <li>Finger spread — rubber band around fingers, spread 20x.</li>
              <li>Dead hangs — hang from bar 10-30 seconds (with caution).</li>
              <li>Carry groceries without cart when possible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Jar opener tools (when grip fails)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>EZ Off Jar Opener</strong> — $15. Mounts under cabinet.</li>
              <li><strong>Black &amp; Decker Lids Off</strong> — electric, $40.</li>
              <li><strong>Rubber jar grippers</strong> — $5. Better leverage.</li>
              <li><strong>Strap wrench</strong> — $10. Great for stuck lids.</li>
              <li>OXO Good Grips brand — best ergonomic kitchen tools.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Test your grip</h3>
            <p className="text-sm text-muted-foreground">Hand dynamometer — $25 on Amazon. Measures grip in pounds. Track monthly. Goal: maintain or improve. Drops of 20%+ year-over-year = talk to doctor (could indicate health issue).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
