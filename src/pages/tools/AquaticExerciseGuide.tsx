import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Waves } from 'lucide-react';

export default function AquaticExerciseGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Aquatic Exercise for Seniors | TekSure" description="Pool exercise = senior gold. Plain-English guide for water aerobics + swimming." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Waves className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Aquatic Exercise</h1>
          <p className="text-lg text-muted-foreground">Joint-free workout. Best for arthritis.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Benefits for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buoyancy = no joint impact.</li>
              <li>Water resistance = strength training.</li>
              <li>Lower BP + heart rate.</li>
              <li>Reduces arthritis pain instantly.</li>
              <li>Cooling — won&apos;t overheat.</li>
              <li>Safe — water cushions falls.</li>
              <li>Especially good post-surgery recovery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to swim</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YMCA</strong> — most have pools, senior memberships $30-50.</li>
              <li><strong>Senior centers</strong> — many have pools, often free/cheap.</li>
              <li><strong>Community recreation centers</strong>.</li>
              <li><strong>Hotel pools</strong> if traveling.</li>
              <li><strong>Local apartment buildings</strong> sometimes open to public.</li>
              <li><strong>SilverSneakers + Renew Active</strong> — free with most Medicare Advantage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Water aerobics class</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most popular senior class.</li>
              <li>30-45 min sessions.</li>
              <li>Standing in chest-deep water.</li>
              <li>Walking, jogging, dancing in water.</li>
              <li>Used &quot;water dumbbells&quot; for resistance.</li>
              <li>Social + fun.</li>
              <li>YMCA + Y has best classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lap swimming</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Best cardio for seniors.</li>
              <li>Start with 5-10 laps.</li>
              <li>Build up over weeks.</li>
              <li>Swim 30 min = burn 200-400 calories.</li>
              <li>Various strokes work different muscles.</li>
              <li>If not strong swimmer — start in shallow lanes.</li>
              <li>Pool noodle as backup floaty.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior swim gear</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Modest swimsuit (TYR, Speedo).</li>
              <li>Goggles — better visibility, eye protection.</li>
              <li>Swim cap — keeps hair clean.</li>
              <li>Pool shoes for grip.</li>
              <li>Quick-dry towel.</li>
              <li>Waterproof Fitbit for tracking.</li>
              <li>Sunscreen if outdoor pool.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEVER swim alone (heart attack in water).</li>
              <li>Lifeguard required for senior swims.</li>
              <li>Stay hydrated (yes, in water).</li>
              <li>Know location of emergency exit.</li>
              <li>Listen to body — stop if dizzy.</li>
              <li>Don&apos;t mix swimming + alcohol.</li>
              <li>Shower after pool — chlorine on skin.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free with Medicare Advantage</h3>
            <p className="text-sm text-muted-foreground"><strong>SilverSneakers</strong> includes most YMCAs free. <strong>Renew Active</strong> (UnitedHealthcare) similar. Most Medicare Advantage plans include free fitness benefit. Check yours. Pool access often $30-50/mo elsewhere — free for many seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
