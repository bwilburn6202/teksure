import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function BloodThinnerGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blood Thinner Guide for Seniors | TekSure" description="Eliquis, Warfarin, others. Plain-English blood thinner guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Blood Thinner Guide</h1>
          <p className="text-lg text-muted-foreground">Prevents strokes. Manage carefully.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common blood thinners</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Eliquis (apixaban)</strong> — most popular. 2x daily.</li>
              <li><strong>Xarelto (rivaroxaban)</strong> — daily.</li>
              <li><strong>Pradaxa (dabigatran)</strong> — 2x daily.</li>
              <li><strong>Warfarin (Coumadin)</strong> — older, requires INR monitoring.</li>
              <li><strong>Aspirin</strong> — different mechanism, milder.</li>
              <li>For: AFib, blood clots, valve replacements.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch for bleeding</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Easy bruising — common.</li>
              <li>Nosebleeds.</li>
              <li>Bleeding gums.</li>
              <li>Heavy menstrual.</li>
              <li>Pink urine.</li>
              <li>Black stools — call doctor.</li>
              <li>Prolonged bleeding from cuts.</li>
              <li>Severe bleeding — ER.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wear medical ID bracelet.</li>
              <li>Tell ALL doctors + dentists.</li>
              <li>Use electric razor (not blade).</li>
              <li>Soft toothbrush.</li>
              <li>Don&apos;t miss doses.</li>
              <li>Don&apos;t double up if missed.</li>
              <li>Avoid contact sports.</li>
              <li>Be careful walking/falling.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Warfarin diet (if on it)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Vitamin K affects how it works.</li>
              <li>Don&apos;t suddenly change leafy greens.</li>
              <li>Consistent intake = stable INR.</li>
              <li>Tell doctor about diet changes.</li>
              <li>NEW thinners (Eliquis, etc.) — no diet restrictions.</li>
              <li>Many switch from warfarin for ease.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Eliquis $500-700/mo brand.</li>
              <li>Manufacturer assistance programs.</li>
              <li>Generic apixaban arriving 2026.</li>
              <li>Warfarin generic $4/mo.</li>
              <li>Medicare D coverage varies.</li>
              <li>Cost Plus Drugs (Mark Cuban) lower.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Surgery prep</h3>
            <p className="text-sm text-muted-foreground">Most surgeries require stopping blood thinner days before. NEVER stop without doctor. Some procedures (cataract surgery) safe to continue. Always tell every doctor + dentist about blood thinner. Carry list of medications.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
