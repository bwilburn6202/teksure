import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardList } from 'lucide-react';

export default function DoctorVisitPrep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Doctor Visit Prep — Get the Most From Your Visit | TekSure" description="Average doctor visit is 15 min. Plain-English checklist to maximize the time and remember what was said." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardList className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Doctor Visit Prep</h1>
          <p className="text-lg text-muted-foreground">Be ready. Get more out of 15 minutes.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Day before — write 3 things</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Top concern</strong> — the ONE thing you most want addressed.</li>
              <li><strong>Symptoms list</strong> — when started, frequency, what makes worse/better.</li>
              <li><strong>Questions</strong> — top 3 (any more, doctor will skip).</li>
            </ol>
            <p className="text-sm mt-3">Write them down. Bring paper to the visit.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bring</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Updated medication list (with doses, all OTC + supplements). See /tools/med-reconciliation.</li>
              <li>Recent BP / blood sugar logs if applicable.</li>
              <li>Symptom journal — dates + descriptions.</li>
              <li>List of doctors + specialists.</li>
              <li>Photos of rashes, lumps, etc.</li>
              <li>Insurance cards.</li>
              <li>Previous test results (if from outside system).</li>
              <li>Notebook + pen — write down what doctor says.</li>
              <li>Family member or friend if helpful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">In the visit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>State your top concern FIRST. (Don&apos;t save it for end.)</li>
              <li>Be specific — "sharp pain in left knee, started 3 weeks ago, worse going downstairs".</li>
              <li>Ask: "What&apos;s your best guess?" + "What else could it be?"</li>
              <li>Ask: "What treatment do you recommend?" + "What are alternatives?"</li>
              <li>Ask: "What if I do nothing?"</li>
              <li>Ask: "When should I follow up?"</li>
              <li>Repeat back — "So I should ___, then ___, and call if ___?"</li>
              <li>Don&apos;t leave confused. ASK to clarify.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tools that help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Voice memo</strong> — record visit (ASK doctor first; some allow).</li>
              <li><strong>Patient portal</strong> — visit summary appears 24-48 hours after.</li>
              <li><strong>Apple Health Medications</strong> — share with doctor via QR code.</li>
              <li><strong>Medisafe</strong> — print medication list.</li>
              <li><strong>Telehealth visits</strong> — see /tools/telehealth-basics.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don&apos;t leave confused</h3>
            <p className="text-sm text-muted-foreground">If you didn&apos;t understand something — tell doctor. They will explain again. Patients who leave confused make worse decisions. 90 extra seconds at the desk saves a follow-up visit + better outcomes.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
