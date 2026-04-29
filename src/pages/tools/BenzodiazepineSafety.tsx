import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function BenzodiazepineSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Benzodiazepine Safety for Seniors | TekSure" description="Xanax, Valium, Ativan in seniors. Plain-English safety guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Benzodiazepine Safety</h1>
          <p className="text-lg text-muted-foreground">Often prescribed. Often dangerous in seniors.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common benzos</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Xanax (alprazolam)</strong>.</li>
              <li><strong>Ativan (lorazepam)</strong>.</li>
              <li><strong>Valium (diazepam)</strong>.</li>
              <li><strong>Klonopin (clonazepam)</strong>.</li>
              <li><strong>Restoril (temazepam)</strong>.</li>
              <li>Used for anxiety + insomnia.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why dangerous in seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Falls — 50%+ increased risk.</li>
              <li>Hip fractures.</li>
              <li>Confusion + delirium.</li>
              <li>Memory problems.</li>
              <li>Increased dementia risk (controversial but possible).</li>
              <li>Highly addictive.</li>
              <li>Withdrawal dangerous.</li>
              <li>BEERS Criteria — avoid in seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safer alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Anxiety</strong> — SSRIs (sertraline, citalopram). Slower onset, safer long-term.</li>
              <li><strong>Sleep</strong> — sleep hygiene, melatonin, trazodone.</li>
              <li><strong>CBT-I</strong> — cognitive therapy for insomnia. Free app from VA.</li>
              <li><strong>Buspar (buspirone)</strong> — safer for daily anxiety.</li>
              <li><strong>Therapy</strong> — long-term solution.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If on benzo long-term</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEVER stop suddenly — withdrawal seizures.</li>
              <li>Doctor must taper slowly (months).</li>
              <li>Some require year+ taper.</li>
              <li>Switch to longer-acting first sometimes.</li>
              <li>Many seniors successfully discontinue.</li>
              <li>Quality of life improves after.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tell your doctor</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get pharmacist medication review.</li>
              <li>Ask about Beers Criteria for your meds.</li>
              <li>Consider taper if on benzo long-term.</li>
              <li>Get geriatric specialist if multiple meds.</li>
              <li>Mediation reconciliation yearly.</li>
              <li>You have right to discuss alternatives.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Z-drugs same risks</h3>
            <p className="text-sm text-muted-foreground"><strong>Ambien (zolpidem)</strong>, <strong>Lunesta</strong>, <strong>Sonata</strong> = same fall + confusion risks. Also avoid in seniors per Beers Criteria. Sleep hygiene + CBT-I = better long-term. Many seniors over-prescribed sleep + anxiety meds. Review.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
