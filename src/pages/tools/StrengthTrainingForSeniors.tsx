import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Dumbbell } from 'lucide-react';

export default function StrengthTrainingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Strength Training for Seniors | TekSure" description="Resistance training for seniors. Apps + free YouTube routines. Critical for aging well." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Dumbbell className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Strength Training</h1>
          <p className="text-lg text-muted-foreground">Most important exercise for seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why crucial after 50</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lose 1-2% muscle per year after 30.</li>
              <li>Accelerates after 60.</li>
              <li>Muscle = independence.</li>
              <li>Falls prevention.</li>
              <li>Bone density.</li>
              <li>Longevity correlation strong.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Resistance band routines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bands cheap ($20).</li>
              <li>Joint-friendly.</li>
              <li>Adjustable tension.</li>
              <li>Travel-friendly.</li>
              <li>Many YouTube tutorials.</li>
              <li>Great for senior beginners.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bodyweight exercises</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Squats — sit-to-stand from chair.</li>
              <li>Wall pushups.</li>
              <li>Step-ups (low height).</li>
              <li>Calf raises.</li>
              <li>Plank from knees.</li>
              <li>No equipment needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Weight training</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Light dumbbells (5-15 lbs).</li>
              <li>Plus heavier as you progress.</li>
              <li>Routine: 8-12 reps × 2-3 sets.</li>
              <li>Major muscle groups.</li>
              <li>2-3 times per week.</li>
              <li>Always warm up first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Caliber — guided strength training.</li>
              <li>StrongLifts 5x5 — progressive program.</li>
              <li>Daily Burn senior workouts.</li>
              <li>Apple Fitness+ Strength.</li>
              <li>SilverSneakers strength.</li>
              <li>Many free options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Personal trainer worth it?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1-2 sessions to learn form — yes.</li>
              <li>Senior-experienced trainer ideal.</li>
              <li>$50-$100/hour.</li>
              <li>Then maintain with apps + DIY.</li>
              <li>Form prevents injuries.</li>
              <li>Especially important after 60.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Most important senior exercise</h3>
            <p className="text-sm text-muted-foreground">If you do one type of exercise as a senior, make it strength training. Cardio is great but strength training prevents falls, maintains independence, and has stronger longevity correlation. Start with bodyweight, progress to bands, then weights. 2-3 times per week. 20-30 minutes. Transformative.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
