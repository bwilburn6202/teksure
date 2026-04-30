import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee } from 'lucide-react';

export default function CaffeineForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Caffeine for Seniors | TekSure" description="How much is safe? Plain-English caffeine guide for seniors with health conditions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Coffee className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Caffeine + Seniors</h1>
          <p className="text-lg text-muted-foreground">Healthy in moderation. Caution in some.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior limits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most adults: up to 400mg/day = 2-4 cups coffee.</li>
              <li>Seniors metabolize slower — can affect 8+ hours.</li>
              <li>Cut off by noon for sleep.</li>
              <li>Some need to reduce due to health.</li>
              <li>Decaf is fine — 95% caffeine removed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to cut back</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>High BP — caffeine raises BP.</li>
              <li>Atrial fibrillation — can trigger.</li>
              <li>Acid reflux — worsens.</li>
              <li>Anxiety — increases.</li>
              <li>Sleep issues — even afternoon caffeine affects.</li>
              <li>Osteoporosis — caffeine reduces calcium absorption.</li>
              <li>Frequent urination — caffeine diuretic.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Surprising sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Decaf still has 5-15mg per cup.</li>
              <li>Tea — green, black caffeinated.</li>
              <li>Chocolate (especially dark).</li>
              <li>Some pain relievers (Excedrin).</li>
              <li>Some weight loss + cold meds.</li>
              <li>Energy drinks (avoid).</li>
              <li>Read labels.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reduces dementia risk (some studies).</li>
              <li>Reduces Type 2 diabetes risk.</li>
              <li>Antioxidants in coffee.</li>
              <li>Improves alertness + mood.</li>
              <li>Possible Parkinson&apos;s protection.</li>
              <li>Don&apos;t avoid unnecessarily — moderate fine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cutting caffeine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t quit cold-turkey — headaches.</li>
              <li>Replace 1 cup at a time with decaf.</li>
              <li>Taper over 2 weeks.</li>
              <li>Hydrate — water replacement.</li>
              <li>Energy improves after 2-3 weeks.</li>
              <li>Better sleep noticeable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Talk to doctor</h3>
            <p className="text-sm text-muted-foreground">Many BP or heart medications interact with caffeine. Heart medications especially. Some seniors should reduce or stop. Most fine with moderate. Doctor can advise based on your conditions.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
