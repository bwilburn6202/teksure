import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function MelatoninSafetyGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Melatonin Safety for Seniors | TekSure" description="Melatonin dosing + risks for seniors. Plain-English guide — most are taking too much." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Melatonin Safety</h1>
          <p className="text-lg text-muted-foreground">Most seniors take 10x too much.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Right dose</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Effective dose: 0.3-0.5mg.</li>
              <li>Most pills sold: 5-10mg (10-30x too much).</li>
              <li>More ≠ better — high dose may worsen sleep.</li>
              <li>Sublingual under tongue absorbs better.</li>
              <li>Take 30-60 min before bed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific risks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daytime drowsiness = fall risk.</li>
              <li>Confusion / vivid dreams.</li>
              <li>Headaches, dizziness.</li>
              <li>Interactions: blood thinners, BP meds, diabetes meds.</li>
              <li>Worsens depression for some.</li>
              <li>Not regulated by FDA — quality varies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Start with sleep hygiene (see /tools/insomnia-senior-guide).</li>
              <li>Light therapy lamp 30 min in morning ($30).</li>
              <li>Magnesium glycinate 200mg — safer for seniors.</li>
              <li>Tart cherry juice — natural melatonin source.</li>
              <li>Chamomile / valerian tea.</li>
              <li>CBT-I therapy — gold standard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you must take it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buy 0.5mg or 1mg dose.</li>
              <li>USP-verified label — quality assurance.</li>
              <li>Time-release for staying asleep.</li>
              <li>Tell doctor + pharmacist (drug interactions).</li>
              <li>Short term — 2 weeks max for chronic use review.</li>
              <li>Don&apos;t mix with sleeping pills or alcohol.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Avoid &quot;PM&quot; meds</h3>
            <p className="text-sm text-muted-foreground"><strong>Tylenol PM, Advil PM, Benadryl</strong> — contain diphenhydramine. Beers Criteria says SENIORS SHOULD AVOID. Causes confusion, falls, dementia risk. Melatonin much safer.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
