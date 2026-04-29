import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const APPS = [
  { name: 'Glucose Buddy', cost: 'FREE', best: 'Track BG, meds, food. Free + popular.', good: 'Best free.' },
  { name: 'mySugr', cost: 'FREE / $3/mo', best: 'Logbook + insulin calculator. Senior-friendly.', good: 'Best logbook.' },
  { name: 'One Drop', cost: '$5/mo', best: 'Coach + supplies + glucose meter included.', good: 'Best with coach.' },
  { name: 'Dexcom G7', cost: '$300/mo or insurance', best: 'CGM (Continuous Glucose Monitor). Real-time.', good: 'Best CGM.' },
  { name: 'FreeStyle Libre 3', cost: '$200/mo or insurance', best: 'CGM. 14-day sensor. No fingersticks.', good: 'Best low-cost CGM.' },
];

export default function DiabetesManagementApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Diabetes Management Apps for Seniors | TekSure" description="Track BG + insulin + diet. Plain-English picks for senior diabetes apps + CGMs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Diabetes Management Apps</h1>
          <p className="text-lg text-muted-foreground">25%+ of seniors have diabetes. Tech makes it manageable.</p>
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
            <h2 className="font-bold text-xl mb-3">CGM is the game-changer</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Continuous Glucose Monitor — patch on arm. No fingersticks.</li>
              <li>Reads BG every 5 min, 24/7.</li>
              <li>Phone shows trends + alerts highs/lows.</li>
              <li>Medicare covers for Type 1 + Type 2 on insulin (2023+).</li>
              <li>Often $0 with Medicare + most Advantage plans.</li>
              <li>Ask doctor — most don&apos;t mention without prompt.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily routine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Check BG morning + before/after meals.</li>
              <li>Log carbs + meals.</li>
              <li>Insulin per doctor&apos;s plan.</li>
              <li>Walk 10-15 min after meals (lowers BG).</li>
              <li>Foot check daily (see /tools/foot-care-seniors).</li>
              <li>Eye exam annually (diabetic retinopathy).</li>
              <li>A1C blood test every 3-6 months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Diabetes-friendly food</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Low-carb veggies — broccoli, spinach, peppers.</li>
              <li>Lean protein every meal.</li>
              <li>Whole grains over white.</li>
              <li>Berries (small portions) instead of high-sugar fruit.</li>
              <li>Limit white rice, white bread, soda, juice.</li>
              <li>Plate method: ½ veggies, ¼ protein, ¼ carbs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free resources</h3>
            <p className="text-sm text-muted-foreground"><strong>Diabetes.org</strong> (ADA) — recipes, free magazine. <strong>NIDDK</strong> — niddk.nih.gov. <strong>Medicare DSMT</strong> — Diabetes Self-Management Training, covered, find local. <strong>Beyond Type 2</strong> — community + tips. Talk to certified diabetes educator (CDE) — most plans cover.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
