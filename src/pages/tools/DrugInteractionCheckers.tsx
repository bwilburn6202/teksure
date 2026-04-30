import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const TOOLS = [
  { name: 'Drugs.com Interactions', cost: 'FREE', best: 'Best free interaction checker. Type meds, get severity-rated warnings.', good: 'Best free.' },
  { name: 'Medscape', cost: 'FREE', best: 'Pro-grade tool. Used by doctors. Free with signup.', good: 'Best clinical.' },
  { name: 'WebMD Drug Interaction Checker', cost: 'FREE', best: 'Familiar UI. Senior-friendly explanations.', good: 'Best for seniors.' },
  { name: 'Apple Health Medications', cost: 'FREE', best: 'iOS 16+ flags interactions automatically.', good: 'Best built-in.' },
  { name: 'GoodRx app', cost: 'FREE', best: 'Has interaction checker + price comparison.', good: 'Best with prices.' },
  { name: 'Your pharmacist', cost: 'FREE', best: 'Best interaction-checker walks behind any counter. ASK.', good: 'Best human.' },
];

export default function DrugInteractionCheckers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Drug Interaction Checkers | TekSure" description="Drugs.com, WebMD, Medscape. Plain-English picks for free drug interaction checkers — including supplements." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Drug Interaction Checkers</h1>
          <p className="text-lg text-muted-foreground">Catch dangerous combinations before they hurt.</p>
        </div>

        <div className="space-y-3 mb-6">
          {TOOLS.map(t => (
            <Card key={t.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <span className="text-sm font-semibold text-primary">{t.cost}</span>
                </div>
                <p className="text-sm">{t.best}</p>
                <p className="text-sm text-muted-foreground">{t.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common dangerous interactions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Blood thinner (Warfarin/Eliquis) + ibuprofen/aspirin</strong> — bleeding risk.</li>
              <li><strong>Statin + grapefruit</strong> — affects metabolism, can be toxic.</li>
              <li><strong>Antidepressant + St. John&apos;s Wort</strong> — serotonin syndrome.</li>
              <li><strong>Multiple anti-anxiety / sleep meds</strong> — over-sedation, fall risk.</li>
              <li><strong>BP medication + decongestants</strong> — spike blood pressure.</li>
              <li><strong>Insulin / diabetes meds + alcohol</strong> — dangerous lows.</li>
              <li><strong>Ginkgo + blood thinners</strong> — increased bleeding.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t forget OTC + supplements</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Aspirin + blood thinners.</li>
              <li>Tylenol — too much can damage liver, especially with alcohol.</li>
              <li>Decongestants (Sudafed) — raise blood pressure.</li>
              <li>Antihistamines (Benadryl) — increase fall risk in seniors.</li>
              <li>Vitamin K + blood thinners — affects effectiveness.</li>
              <li>Fish oil + blood thinners — bleeding risk.</li>
              <li>St. John&apos;s Wort — interacts with MANY meds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pharmacist is free + best</h3>
            <p className="text-sm text-muted-foreground">Walk into Walgreens / CVS / Costco. Hand pharmacist your medication list. Ask "any concerning interactions?" Free service. Better than any app. Pharmacists are medication experts AND they have access to your prescription history.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
