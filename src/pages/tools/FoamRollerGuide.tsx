import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CircleDashed } from 'lucide-react';

export default function FoamRollerGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Foam Roller Guide for Seniors | TekSure" description="Best foam rollers, gentle exercises, and safety. Plain-English guide for back pain, hip stiffness, calves." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CircleDashed className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Foam Roller Guide</h1>
          <p className="text-lg text-muted-foreground">$25. Years of relief.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best rollers for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AmazonBasics smooth foam</strong> ($15-25) — softer, beginner. 36" length.</li>
              <li><strong>OPTP PRO Roller (white, smooth)</strong> ($30) — PT favorite. Firm but not knobby.</li>
              <li>SKIP textured/knobby rollers (TriggerPoint Grid) for seniors at first — too aggressive.</li>
              <li>SKIP super-firm black rollers — too hard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Gentle senior moves</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Upper back stretch</strong> — roller across upper back, hands behind head, slowly arch.</li>
              <li><strong>Side body stretch</strong> — roller under hip, side-lying.</li>
              <li><strong>Calf release</strong> — sit, calf on roller, gently roll.</li>
              <li><strong>IT band</strong> — side-lying, careful.</li>
              <li><strong>Quad release</strong> — stomach down, roller under thigh.</li>
              <li>30-60 seconds each. NEVER painful.</li>
              <li>Use chair / wall for support.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEVER on lower back directly — protects spine.</li>
              <li>NEVER on bones (knees, elbows, spine).</li>
              <li>Don&apos;t roll over varicose veins.</li>
              <li>Stop if it hurts. Discomfort OK; pain = NO.</li>
              <li>Have a chair / wall to grab when getting on/off floor.</li>
              <li>Roll on carpet OR yoga mat — not slick floor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free YouTube guides</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bob and Brad PT</strong> — "foam roller exercises for seniors". Most senior-friendly.</li>
              <li><strong>SilverSneakers</strong> — gentle modifications.</li>
              <li><strong>More Life Health Seniors</strong> — Mike Hines.</li>
              <li><strong>Yoga with Adriene</strong> — has foam roller restorative videos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best at bedtime</h3>
            <p className="text-sm text-muted-foreground">5 min foam rolling before bed eases stiffness, helps sleep. Don&apos;t do it first thing in morning when joints are coldest. Warm up first.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
