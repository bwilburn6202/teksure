import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

const APPS = [
  { name: 'Insight Timer', cost: 'FREE / $60/yr Premium', best: '130,000+ free meditations. Strong free tier. Senior-friendly.', good: 'Best free.' },
  { name: 'Smiling Mind', cost: 'FREE', best: 'Australian non-profit. Truly free, ad-free. Simple.', good: 'Best non-profit.' },
  { name: 'UCLA Mindful', cost: 'FREE', best: 'From UCLA Mindful Awareness Research Center. Evidence-based.', good: 'Best research-backed.' },
  { name: 'Mindfulness Coach (VA)', cost: 'FREE', best: 'From VA. Designed for veterans but anyone uses. Free.', good: 'Best for vets.' },
  { name: 'Calm + Headspace', cost: '$70/yr each', best: 'Premium options. Often free with insurance / Medicare Advantage.', good: 'Best premium.' },
];

export default function MeditationFreeApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Meditation Apps for Seniors | TekSure" description="Insight Timer, Smiling Mind, UCLA Mindful. Plain-English picks for genuinely free meditation apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Meditation Apps</h1>
          <p className="text-lg text-muted-foreground">Calm minds, no subscription.</p>
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
            <h2 className="font-bold text-xl mb-3">Senior benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lowers blood pressure 5-10 points.</li>
              <li>Reduces anxiety + depression.</li>
              <li>Improves sleep.</li>
              <li>Slows cognitive decline (research-backed).</li>
              <li>Eases chronic pain.</li>
              <li>10 min/day = real benefit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Start with these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Body scan</strong> — relax muscle group by group. Best for sleep.</li>
              <li><strong>Breathing meditation</strong> — focus on breath. Beginner-friendly.</li>
              <li><strong>Loving-kindness</strong> — wish well to self + others. Best for grief.</li>
              <li><strong>Walking meditation</strong> — slow walking with awareness.</li>
              <li><strong>Guided imagery</strong> — visualize peaceful place.</li>
              <li>Pick beginner option in any app. Build from there.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No "right way"</h3>
            <p className="text-sm text-muted-foreground">If a faith tradition meditation works (Christian centering prayer, Jewish mussar, Sufi practice) — use that. The point is intentional time of stillness. Not a brand. Not an app. The practice matters.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
