import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

const APPS = [
  { name: 'MyFitnessPal', cost: 'Free; $20/mo Premium', best: 'Biggest food database. Scan barcodes. Most popular.', good: 'Free version is full-featured.' },
  { name: 'Lose It!', cost: 'Free; $40/yr Premium', best: 'Simpler interface than MyFitnessPal. Strong photo-based food logging (snap your meal).', good: 'Often easier for first-timers.' },
  { name: 'Cronometer', cost: 'Free; $50/yr Gold', best: 'Best for nutrient tracking — vitamins, minerals, fiber. Used by serious health-conscious people.', good: 'Best free pick for detail.' },
  { name: 'Noom', cost: '$60-200/year', best: 'Behavior-change focused. Daily lessons + tracking. Best for SUSTAINED weight loss.', good: 'Try the trial; can be intense.' },
  { name: 'WW (Weight Watchers)', cost: '$25-45/mo', best: 'Points-based. Real community. Long track record.', good: 'In-person meetings still available in many areas.' },
  { name: 'Apple Health / Google Fit', cost: 'FREE built-in', best: 'Simple step counts and basic activity. Pair with separate diet app for the full picture.', good: 'No setup needed.' },
];

export default function CalorieTrackingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Calorie & Diet Tracking Apps — MyFitnessPal, Lose It, Noom | TekSure" description="The honest take on calorie tracking apps for older adults. Free options, when paid is worth it, and how to actually stick with logging." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Calorie & Diet Tracking</h1>
          <p className="text-lg text-muted-foreground">Don\'t guess. Know what you actually eat.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why log food</h2>
            <p className="text-sm">Studies consistently show that tracking food doubles weight-loss success. After 60, muscle loss accelerates — protein and resistance training matter more than ever. Tracking food shows you whether you\'re actually getting enough.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to actually stick with logging</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Log BEFORE you eat, not after.</li>
              <li>Take a photo of every meal — log it later if you\'re busy.</li>
              <li>Save your common breakfasts/lunches as "meals" — log a recurring breakfast in 3 seconds.</li>
              <li>Be honest about portions. Most underestimate by 20-40%.</li>
              <li>If you skip a day — pick up the next morning. Don\'t quit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Talk to a real dietitian</h3>
            <p className="text-sm text-muted-foreground">Medicare Part B covers some nutrition counseling for diabetes and kidney disease. Many advantage plans cover more. Pair an app with one or two real dietitian visits to get a sustainable plan, not a fad diet.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
