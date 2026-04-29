import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function ChronicPainManagement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chronic Pain Management for Seniors | TekSure" description="Beyond opioids. Plain-English chronic pain guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chronic Pain Management</h1>
          <p className="text-lg text-muted-foreground">Many tools beyond opioids.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Beyond meds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Physical therapy</strong> — proven, Medicare covered.</li>
              <li><strong>Acupuncture</strong> — some Medicare coverage 2020+.</li>
              <li><strong>Tai Chi</strong> — proven for arthritis.</li>
              <li><strong>Yoga</strong> — gentle senior versions.</li>
              <li><strong>Massage</strong> — relief + relaxation.</li>
              <li><strong>Heat/cold therapy</strong>.</li>
              <li><strong>TENS unit</strong> — $50, electrical relief.</li>
              <li><strong>CBT</strong> — chronic pain therapy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medication options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tylenol</strong> — first try. Safe under 3g/day.</li>
              <li><strong>NSAIDs</strong> — Advil, Aleve. Watch stomach + kidneys.</li>
              <li><strong>Topical NSAIDs</strong> — Voltaren gel. Fewer side effects.</li>
              <li><strong>Capsaicin cream</strong> — natural.</li>
              <li><strong>Lidocaine patches</strong> — localized relief.</li>
              <li><strong>Cymbalta, Lyrica</strong> — nerve pain.</li>
              <li><strong>Cortisone injections</strong> — joint pain.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid these in seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Long-term opioids (addictive, falls).</li>
              <li>Benzodiazepines (confusion, falls).</li>
              <li>Muscle relaxants (drowsy).</li>
              <li>Beers Criteria — drugs to avoid in seniors. Ask doctor.</li>
              <li>NSAIDs long-term (bleeding, kidneys).</li>
              <li>Over-medicating common — review with pharmacist.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lifestyle helps most</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Movement — counterintuitive but helps.</li>
              <li>Anti-inflammatory diet.</li>
              <li>Lose 5-10 lbs = 4x less knee pressure.</li>
              <li>Sleep — pain worse when tired.</li>
              <li>Stress reduction.</li>
              <li>Social connection.</li>
              <li>Pain catastrophizing therapy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to see specialist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pain &gt; 3 months.</li>
              <li>Limiting daily activities.</li>
              <li>Multiple meds not working.</li>
              <li>New or sudden pain.</li>
              <li>Pain doctor specializes.</li>
              <li>Cancer pain — palliative care helpful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free resources</h3>
            <p className="text-sm text-muted-foreground"><strong>Arthritis Foundation</strong> — free pain courses. <strong>Walk With Ease</strong> — proven. <strong>Pain Management apps</strong> — Curable, MyPainDiary. <strong>Stanford Self-Management</strong> — chronic disease courses. Living with pain doesn&apos;t mean accepting suffering. Manageable.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
