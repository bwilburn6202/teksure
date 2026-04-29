import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

const APPS = [
  { name: 'MyFitnessPal', cost: 'FREE / $20/mo', best: 'Largest food database. Calorie + macro tracking. Apple Health sync.', good: 'Best overall.' },
  { name: 'Lose It!', cost: 'FREE / $40/yr', best: 'Beginner-friendly. Photo logging. Goal-setting wizards.', good: 'Best for beginners.' },
  { name: 'Cronometer', cost: 'FREE / $65/yr', best: 'Tracks 80+ vitamins/minerals, not just calories. Best for nutritional thoroughness.', good: 'Best detailed.' },
  { name: 'Noom', cost: '$70/mo', best: 'Behavioral approach + coaching. Pricey but research-backed for sustained loss.', good: 'Best for behavior.' },
  { name: 'WW (Weight Watchers)', cost: '$23/mo', best: 'Group meetings + app + coach. Best community accountability.', good: 'Best group support.' },
  { name: 'CalorieKing', cost: 'FREE / $20/yr Premium', best: 'Senior-friendly UI. Fast lookup. Less social.', good: 'Best simple.' },
];

export default function DietApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Diet &amp; Nutrition Apps | TekSure" description="MyFitnessPal, Noom, Weight Watchers. Plain-English picks for senior-friendly diet apps that work long-term." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Diet App Picks</h1>
          <p className="text-lg text-muted-foreground">Track. Adjust. Sustain.</p>
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
            <h2 className="font-bold text-xl mb-3">Senior-specific guidance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Protein</strong> — seniors need MORE (1g per kg body weight).</li>
              <li><strong>Calcium + Vitamin D</strong> — for bones (1,200mg / 800 IU).</li>
              <li><strong>Fiber</strong> — 25-30g/day for digestion + heart.</li>
              <li><strong>Hydration</strong> — thirst signal weakens with age.</li>
              <li><strong>Calories</strong> — most seniors need 1,800-2,200/day.</li>
              <li><strong>Avoid extreme diets</strong> — risk of muscle loss after 60.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free diet/nutrition resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NIH Senior Health</strong> — nia.nih.gov free PDFs.</li>
              <li><strong>USDA MyPlate</strong> — myplate.gov daily plan.</li>
              <li><strong>AARP Nutrition Resources</strong> — aarp.org/nutrition.</li>
              <li><strong>Mayo Clinic free meal planners</strong> — mayoclinic.org.</li>
              <li><strong>SilverSneakers nutrition tools</strong> — free with most Medicare Advantage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Talk to dietitian</h3>
            <p className="text-sm text-muted-foreground">Medicare covers Medical Nutrition Therapy for diabetes + kidney disease. Doctor referral, then real RD (Registered Dietitian) builds your plan. Apps support, but personalized advice from a pro is gold.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
