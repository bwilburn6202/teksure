import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Apple, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Pick {
  name: string;
  cost: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const PICKS: Pick[] = [
  {
    name: 'MyFitnessPal',
    cost: 'Free with limits, Premium 20 dollars/mo',
    bestFor: 'Beginners who want the largest food database in the US.',
    pros: [
      'Huge food database — most US grocery brands and restaurant items.',
      'Barcode scanner on the free tier.',
      'Syncs with Apple Health, Fitbit, and many smart scales.',
      'Calorie + macro tracking that family members can share.',
    ],
    cons: [
      'Free tier shows ads and limits some macro views.',
      'User-submitted entries can have wrong calorie counts — verify before you trust.',
    ],
    link: 'https://www.myfitnesspal.com',
  },
  {
    name: 'Lose It!',
    cost: 'Free + Premium 40 dollars/year',
    bestFor: 'Weight-loss focus with a friendly, less-cluttered screen.',
    pros: [
      'Snap It feature — take a photo of food and it estimates calories.',
      'Cleaner layout than MyFitnessPal, better for older eyes.',
      'Free tier covers daily calorie tracking and weight logging.',
    ],
    cons: [
      'Smaller food database than MyFitnessPal.',
      'Photo recognition is rough — still verify the entry.',
    ],
    link: 'https://www.loseit.com',
  },
  {
    name: 'Cronometer',
    cost: 'Free + Gold 8 dollars/mo',
    bestFor: 'People who want accurate vitamin and mineral tracking, not guesses.',
    pros: [
      'Database is curated from USDA and verified sources — far fewer wrong entries.',
      'Tracks 80+ micronutrients (vitamin D, B12, potassium, sodium).',
      'Excellent for heart-healthy and kidney diets where sodium and potassium matter.',
    ],
    cons: [
      'Smaller restaurant database than MyFitnessPal.',
      'Interface looks more like a spreadsheet than a friendly app.',
    ],
    link: 'https://cronometer.com',
  },
  {
    name: 'Yuka',
    cost: 'Free (Premium 12 dollars/year for offline mode)',
    bestFor: 'Scanning food labels at the grocery store for hidden sugar, salt, and additives.',
    pros: [
      'Scan a barcode — get a 1 to 100 health score in plain English.',
      'Flags additives linked to health risks.',
      'Suggests a healthier swap right in the app.',
      'Works on packaged food AND personal-care items.',
    ],
    cons: [
      'Does NOT track calories or meals — pair it with one of the others.',
      'Scoring system is the app maker\'s opinion, not FDA guidance.',
    ],
    link: 'https://yuka.io/en/',
  },
  {
    name: 'MyNetDiary',
    cost: 'Free + Premium 9 dollars/mo or 60 dollars/year',
    bestFor: 'Diabetes management — has a dedicated diabetes tracker built in.',
    pros: [
      'Logs blood sugar, A1C, blood pressure, and medications in one place.',
      'Diabetes Tracker version is recommended by many CDEs (certified diabetes educators).',
      'Carb counting is front-and-center, not buried in menus.',
    ],
    cons: [
      'Premium needed to unlock the full diabetes dashboard.',
      'Less popular, so fewer YouTube tutorials online.',
    ],
    link: 'https://www.mynetdiary.com',
  },
  {
    name: 'Carb Manager',
    cost: 'Free + Premium 10 dollars/mo or 40 dollars/year',
    bestFor: 'Low-carb, keto, or diabetes-managed eating where net carbs matter.',
    pros: [
      'Net-carb tracking is the default view — no math required.',
      'Has a Diabetes mode that hides keto-specific noise.',
      'Recipe library with low-carb US comfort food (chili, casseroles, soups).',
      'Glucose and ketone logging supported.',
    ],
    cons: [
      'Free tier locks the recipe library and meal plans.',
      'A doctor should approve any low-carb plan if you take insulin or blood-pressure meds.',
    ],
    link: 'https://www.carbmanager.com',
  },
];

export default function NutritionAppPicker() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Nutrition App Picker for Seniors"
        description="Six free nutrition and food-tracking apps for seniors managing diabetes, heart, or weight — MyFitnessPal, Lose It!, Cronometer, Yuka, MyNetDiary, Carb Manager. Honest comparison."
        path="/tools/nutrition-app-picker"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-emerald-50 via-background to-lime-50 dark:from-emerald-950/20 dark:to-lime-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <Apple className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Nutrition App Picker</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six honest picks for seniors tracking food for diabetes, heart health, or weight. Most have a free tier that covers everything you need.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Nutrition App Picker' }]} />

          <Card className="border-amber-300 dark:border-amber-700 bg-amber-50/60 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-2">Skip the extreme-diet TikTok content</p>
                  <p className="text-xs text-muted-foreground">
                    Apple-cider-vinegar cleanses, "carnivore for seniors", 600-calorie one-meal-a-day plans, and similar TikTok or Instagram fads can be dangerous if you take blood-pressure pills, blood thinners, insulin, or have kidney issues. For any serious condition (diabetes, heart disease, kidney disease, recent surgery, cancer treatment), work with a Registered Dietitian (RD or RDN). Medicare Part B covers nutrition counseling for diabetes and kidney disease — ask your doctor for a referral.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? PICKS : PICKS.slice(0, 3)).map(p => (
              <Card key={p.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{p.name}</p>
                    <Badge variant="outline">{p.cost}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {p.bestFor}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">
                        {p.pros.map((pr, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{pr}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {p.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>

                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Visit / sign up <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && (
              <Button variant="outline" onClick={() => setShowAll(true)}>Show all 6 picks</Button>
            )}
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Free is plenty for most people</p>
              <p className="text-xs text-muted-foreground">
                You do not need a Premium subscription to log meals, count carbs, or watch sodium. Start on the free tier of MyFitnessPal or Cronometer, give it 30 days, and only pay for Premium if a specific feature (no ads, deeper macro splits, the diabetes dashboard) would actually change how you eat.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/senior-fitness-apps" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Senior Fitness Apps</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair nutrition tracking with movement.</p>
              </Link>
              <Link to="/tools/medication-reminder-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Medication Reminders</p>
                <p className="text-xs text-muted-foreground mt-0.5">Time meds with meals and carbs.</p>
              </Link>
              <Link to="/tools/medicare-plan-chooser" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Medicare Plan Chooser</p>
                <p className="text-xs text-muted-foreground mt-0.5">Find a plan that covers a dietitian.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: log everything for the first two weeks, even sips of soda. The honest picture is the whole point.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
