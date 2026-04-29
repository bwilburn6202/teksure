import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ListChecks } from 'lucide-react';

export default function MedReconciliation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medication Reconciliation Guide | TekSure" description="Keep one accurate medication list. Plain-English steps to reconcile prescriptions across multiple doctors and avoid dangerous interactions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ListChecks className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medication Reconciliation</h1>
          <p className="text-lg text-muted-foreground">One accurate list across all doctors.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why this matters</h2>
            <p className="text-sm">7,000-9,000 deaths/year from medication errors. Most happen because doctors don&apos;t know all the drugs you take. Your job — be the keeper of the list. Bring it to every visit.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Build the list</h2>
            <p className="text-sm">For each medication, write:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Name (brand + generic).</li>
              <li>Strength (e.g., 20mg).</li>
              <li>How often (e.g., once a day).</li>
              <li>Time of day.</li>
              <li>What for (e.g., blood pressure).</li>
              <li>Prescribing doctor.</li>
              <li>Pharmacy.</li>
              <li>Start date.</li>
            </ul>
            <p className="text-sm mt-3">Include OTC, vitamins, supplements, herbs. ALL of them. They interact too.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to keep it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Health Medications</strong> (iOS 16+) — auto-tracks interactions. Free.</li>
              <li><strong>Medisafe app</strong> — free, family-shareable.</li>
              <li><strong>MyChart</strong> — patient portal often has medication list. Update yourself.</li>
              <li><strong>Wallet card</strong> — print + carry. Critical in ER.</li>
              <li><strong>Notes app</strong> on phone — at minimum.</li>
              <li>Update every 3 months OR after every change.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bring to every visit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Primary care visits.</li>
              <li>Specialist visits — they often don&apos;t see your full record.</li>
              <li>ER trips — first thing they ask.</li>
              <li>Hospital admission.</li>
              <li>Surgery pre-ops.</li>
              <li>Dental work (some meds affect bleeding).</li>
              <li>Eye doctor (some meds affect pressure).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annual brown-bag review</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Once a year, dump every pill bottle into a paper bag.</li>
              <li>Bring to PCP visit.</li>
              <li>Doctor reviews each one.</li>
              <li>Discuss: still needed? Dose right? Cheaper alternative?</li>
              <li>Average senior takes 5+ medications. 30%+ usually have one that can be removed.</li>
              <li>Saves money + reduces side effect risk.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">One pharmacy</h3>
            <p className="text-sm text-muted-foreground">Use ONE pharmacy for everything if possible. Pharmacist auto-checks for interactions. Multiple pharmacies = no one has full picture. Even Pillpack (mail) handles all your meds in one place — same benefit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
