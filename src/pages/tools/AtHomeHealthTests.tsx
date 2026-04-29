import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TestTube } from 'lucide-react';

const TESTS = [
  { name: 'LetsGetChecked', cost: '$50-300/test', best: 'Big test menu — diabetes, cholesterol, thyroid, hormones, STIs, vitamins. CLIA-certified labs.', good: 'Real labs you mail samples to.' },
  { name: 'Everlywell', cost: '$50-200', best: 'Same idea. Strong on food sensitivity, hormones, thyroid.', good: 'HSA/FSA eligible.' },
  { name: 'Quest Direct / LabCorp OnDemand', cost: '$30-150', best: 'Order tests yourself, no doctor needed. Real Quest/LabCorp results — same as your doctor uses.', good: 'Best for routine bloodwork without paying $200 for an office visit.' },
  { name: 'Cologuard', cost: 'Often FREE through Medicare/insurance', best: 'At-home colon cancer screening. Pooping in a box, mailing it. Less hassle than colonoscopy for routine screening.', good: 'Talk to doctor first — colonoscopy is still gold standard.' },
  { name: 'iHealth COVID test, flu test', cost: '$10-30', best: 'Rapid antigen test. Result in 15 min.', good: 'Keep some at home for cold/flu season.' },
  { name: 'Biological Age tests (TruDiagnostic, Elysium)', cost: '$200-500', best: 'Tests "epigenetic age" — how old your body is biologically. Trendy.', good: 'Skip unless very curious. Useful for long-term tracking.' },
];

export default function AtHomeHealthTests() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="At-Home Health Tests — LetsGetChecked, Everlywell, Quest | TekSure" description="Skip the doctor visit. Plain-English guide to at-home blood tests, COVID tests, colon cancer screening, and what each is good for." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TestTube className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">At-Home Health Tests</h1>
          <p className="text-lg text-muted-foreground">Real lab tests without leaving home.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">When at-home tests help</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Routine annual bloodwork (cholesterol, glucose, thyroid).</li>
              <li>Tracking a known condition between doctor visits.</li>
              <li>Doctor wait too long for an appointment.</li>
              <li>Privacy concerns about specific tests (STI, hormones).</li>
              <li>Colon cancer screening (Cologuard) instead of colonoscopy when low risk.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {TESTS.map(t => (
            <Card key={t.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <span className="text-sm font-semibold text-primary">{t.cost}</span>
                </div>
                <p className="text-sm mb-1">{t.best}</p>
                <p className="text-sm text-muted-foreground">{t.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use a real doctor instead</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Anything serious — chest pain, stroke symptoms, severe pain.</li>
              <li>If you have ANY symptoms — go to a doctor for diagnosis, not a self-test.</li>
              <li>Test results in concerning range — your doctor can interpret in context.</li>
              <li>Prescription needed.</li>
              <li>Insurance will cover the office visit + lab anyway (often cheaper than retail tests).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save with insurance</h2>
            <p className="text-sm">Many at-home tests qualify for HSA/FSA reimbursement. Cologuard is covered free under most Medicare and commercial insurance every 3 years.</p>
            <p className="text-sm mt-2">Always check insurance first — sometimes a regular doctor visit + lab is cheaper than the at-home version.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best practical use</h3>
            <p className="text-sm text-muted-foreground">If you take cholesterol or blood-sugar meds, a $50 LetsGetChecked or Quest Direct test mid-year can confirm your meds are working — without paying $200 for an office visit. Share the results in your patient portal.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
