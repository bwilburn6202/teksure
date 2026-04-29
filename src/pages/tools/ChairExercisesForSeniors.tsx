import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function ChairExercisesForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chair Exercises for Seniors | TekSure" description="Safe exercises you can do from a chair. Free videos and apps for senior fitness at home." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chair Exercises</h1>
          <p className="text-lg text-muted-foreground">Safe, effective fitness from your chair.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why chair exercises?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No standing balance required.</li>
              <li>Safe for arthritis, joint pain, dizziness.</li>
              <li>Can do in living room — no gym needed.</li>
              <li>Builds strength + flexibility.</li>
              <li>Recommended by physical therapists.</li>
              <li>Excellent for beginners returning to fitness.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free YouTube channels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>HASfit — senior chair workouts, completely free.</li>
              <li>Seniors Fitness with Meredith — gentle chair exercises.</li>
              <li>SilverSneakers YouTube — official program videos.</li>
              <li>Yoga With Adriene — gentle seated yoga options.</li>
              <li>AgeProof Your Body — research-backed movements.</li>
              <li>Search YouTube: &quot;chair exercises seniors.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Basic chair exercises to start</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Seated marching — lift knees alternately.</li>
              <li>Arm circles — forward and backward.</li>
              <li>Ankle rotations — both directions.</li>
              <li>Seated cat-cow — arch and round back.</li>
              <li>Shoulder rolls — release tension.</li>
              <li>Start with 5–10 minutes, build up gradually.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Strength exercises seated</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Seated leg extensions — straighten and hold.</li>
              <li>Arm raises with light weights (soup cans work).</li>
              <li>Resistance band rows — pull band to chest.</li>
              <li>Calf raises — heels up while seated.</li>
              <li>Seated side bends — stretch the torso.</li>
              <li>Even light resistance builds muscle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps for guided chair fitness</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SilverSneakers GO — free with many Medicare plans.</li>
              <li>Eldergym — specifically for seniors.</li>
              <li>Fitplan — has gentle senior programs.</li>
              <li>Daily Yoga — seated + gentle options.</li>
              <li>YouTube app — free with your phone.</li>
              <li>Check if Medicare Advantage covers SilverSneakers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety reminders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use a sturdy chair without wheels.</li>
              <li>Keep feet flat on floor.</li>
              <li>Stop if you feel pain — not &quot;push through it.&quot;</li>
              <li>Breathe continuously — don&apos;t hold breath.</li>
              <li>Check with doctor if recovering from surgery.</li>
              <li>Gentle discomfort is okay, sharp pain is not.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">10 minutes counts</h3>
            <p className="text-sm text-muted-foreground">Research is clear: even 10 minutes of gentle movement per day reduces fall risk, improves balance, and boosts mood. You don&apos;t need a gym, equipment, or perfect mobility to start. Search YouTube for &quot;SilverSneakers chair workout&quot; and follow along. Your chair is the only equipment you need. Start today — any movement is better than none.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
