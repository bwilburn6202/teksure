import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function DrugInteractionChecker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Drug Interaction Checker — Free Tools | TekSure" description="Are your meds, supplements, or alcohol interacting? Plain-English guide to free drug interaction checkers — Drugs.com, MedlinePlus, your pharmacist." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Drug Interaction Checker</h1>
          <p className="text-lg text-muted-foreground">Are your medications working against each other?</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why this matters</h2>
            <p className="text-sm">After 65, many adults take 5-10+ medications. Studies show 1 in 5 take a combination that causes a real interaction. Some are mild, some can cause falls, bleeding, or worse.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free online checkers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Drugs.com Interaction Checker</strong> — biggest, most-trusted. Type in EVERY medication, vitamin, supplement, and OTC. Shows interactions, severity, food/alcohol notes.</li>
              <li><strong>MedlinePlus (medlineplus.gov)</strong> — official US government drug info. Plain-English drug summaries.</li>
              <li><strong>WebMD Interaction Checker</strong> — similar to Drugs.com.</li>
              <li><strong>Apple Health Medications</strong> — built into iOS Health app. Add your meds, get warnings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best resource — your pharmacist</h2>
            <p className="text-sm">Your pharmacist is a real medication expert. CVS, Walgreens, Walmart, Costco — all offer FREE consultations. Walk in with a complete list of every medication, supplement, and over-the-counter drug you take. Ask: "Are any of these working against each other?"</p>
            <p className="text-sm mt-2">Better still — use ONE pharmacy for all your prescriptions. Their system flags dangerous combinations automatically.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common dangerous interactions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Warfarin (blood thinner)</strong> + many things — vitamin K, NSAIDs, certain antibiotics. Big bleeding risk.</li>
              <li><strong>Statins (cholesterol)</strong> + grapefruit — drives statin levels too high.</li>
              <li><strong>SSRIs (antidepressants)</strong> + tramadol or migraine triptans — risk of serotonin syndrome.</li>
              <li><strong>Sleeping pills (Ambien, Lunesta)</strong> + alcohol or benzos — falls, breathing problems.</li>
              <li><strong>Blood pressure meds</strong> + over-the-counter cold meds with pseudoephedrine — BP spikes.</li>
              <li><strong>Diabetes meds</strong> + alcohol — dangerous low blood sugar.</li>
              <li><strong>Many meds</strong> + St. John\'s Wort (supplement) — reduces effectiveness.</li>
            </ul>
            <p className="text-sm mt-2 text-muted-foreground">If you take any of these, double-check with your pharmacist.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annual medication review</h2>
            <p className="text-sm">Once a year, ask your primary care doctor for a "deprescribing review". They look at every medication and ask: do you still need it? Studies show seniors safely come off 30-40% of their meds with this review. Less polypharmacy = fewer falls, less confusion.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">Keep an UP-TO-DATE list in your wallet AND on your iPhone\'s Medical ID. Every medication, every supplement, every dose. Share with every doctor every visit. Most medication mistakes happen because one doctor doesn\'t know what another prescribed.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
