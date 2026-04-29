import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export default function IntermittentFastingSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Intermittent Fasting for Seniors | TekSure" description="IF for seniors — pros, cons, safety. Plain-English guide for healthy fasting after 65." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Clock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Intermittent Fasting</h1>
          <p className="text-lg text-muted-foreground">Eat in window. Skip breakfast. Lose weight + boost brain.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it is</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Eat all meals in time window.</li>
              <li>Common: 16:8 — fast 16 hrs, eat in 8 hrs.</li>
              <li>Easier: 14:10 — fast 14 hrs.</li>
              <li>Most do: skip breakfast, eat noon-8pm.</li>
              <li>Drink water + black coffee + tea during fast.</li>
              <li>NOT calorie restriction (eat normal in window).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Modest weight loss.</li>
              <li>Better blood sugar control.</li>
              <li>Lower inflammation.</li>
              <li>Brain clarity reported.</li>
              <li>Cellular &quot;cleanup&quot; (autophagy).</li>
              <li>May extend lifespan (animal studies).</li>
              <li>Simpler than counting calories.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior cautions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Talk to doctor FIRST — especially diabetic, kidney, heart.</li>
              <li>Some meds need food.</li>
              <li>Risk of dizziness / fainting (fall risk).</li>
              <li>Frail seniors — DON&apos;T fast (need calories + protein).</li>
              <li>Risk of muscle loss (sarcopenia).</li>
              <li>NOT for those with eating disorder history.</li>
              <li>Stop if losing too much weight.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Start gentle</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Week 1: 12-hr fast (8pm-8am). Most already do.</li>
              <li>Week 2: 14:10 — last meal 7pm, breakfast 9am.</li>
              <li>Week 3: 16:8 — last meal 7pm, lunch noon.</li>
              <li>Don&apos;t go longer than 16 hrs without doctor approval.</li>
              <li>Listen to body.</li>
              <li>Drink lots of water during fast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eating window tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Eat enough — don&apos;t under-eat.</li>
              <li>Protein priority — preserves muscle.</li>
              <li>Vegetables for fiber.</li>
              <li>Healthy fats.</li>
              <li>Limit ultra-processed food.</li>
              <li>Don&apos;t binge — eat normally.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tracking apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Zero</strong> — most popular fasting app. Free.</li>
              <li><strong>Fastic</strong> — community + tracking.</li>
              <li><strong>Simple</strong> — free, color-coded.</li>
              <li><strong>Plain timer</strong> on phone — works fine.</li>
              <li>App not required.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Doctor first</h3>
            <p className="text-sm text-muted-foreground">Senior bodies different. Please discuss with primary doctor before starting. Diabetic seniors need special considerations — insulin timing changes. Some studies show fasting may not be ideal for older adults due to muscle loss risk. May not be right for everyone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
