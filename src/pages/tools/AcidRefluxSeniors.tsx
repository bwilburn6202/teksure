import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flame } from 'lucide-react';

export default function AcidRefluxSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Acid Reflux + GERD for Seniors | TekSure" description="Heartburn relief. Plain-English GERD guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flame className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Acid Reflux + GERD</h1>
          <p className="text-lg text-muted-foreground">Common in seniors. Manageable.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Diet changes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Trigger foods</strong>: spicy, citrus, tomato, chocolate, mint, fried, fatty.</li>
              <li>Caffeine + alcohol worsen.</li>
              <li>Eat smaller portions.</li>
              <li>Don&apos;t eat 3 hours before bed.</li>
              <li>Stay upright after eating.</li>
              <li>Reduce overall stomach acid food.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sleep elevated</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wedge pillow ($30) — elevate upper body.</li>
              <li>Don&apos;t just stack pillows (kinks neck).</li>
              <li>Bed riser at head of bed.</li>
              <li>Adjustable bed best.</li>
              <li>Sleep on left side reduces reflux.</li>
              <li>Loose pajamas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medications</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Antacids</strong> (Tums, Rolaids) — quick relief.</li>
              <li><strong>H2 blockers</strong> (Pepcid, Zantac) — moderate.</li>
              <li><strong>PPIs</strong> (Prilosec, Nexium) — strongest.</li>
              <li>Don&apos;t take PPIs long-term without doctor — kidney + bone risks.</li>
              <li>Many OTC.</li>
              <li>Talk to doctor if daily use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to see doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heartburn 2+ times/week.</li>
              <li>OTC meds not enough.</li>
              <li>Trouble swallowing.</li>
              <li>Weight loss.</li>
              <li>Vomiting blood.</li>
              <li>Chest pain (could be heart!).</li>
              <li>Black stools.</li>
              <li>Endoscopy may be needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lifestyle wins</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lose 5-10 lbs if overweight.</li>
              <li>Quit smoking.</li>
              <li>Reduce stress.</li>
              <li>Walking after meals.</li>
              <li>Smaller meals more often.</li>
              <li>Stop alcohol.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Long-term GERD = risks</h3>
            <p className="text-sm text-muted-foreground">Untreated GERD can lead to Barrett&apos;s esophagus (precancer). Esophageal cancer rare but serious. Don&apos;t ignore. Annual check if chronic. Many seniors with GERD lifetime — manage well with right combination of lifestyle + meds.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
