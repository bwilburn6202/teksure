import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function AIHealthQuestions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI Health Questions for Seniors | TekSure" description="AI for medical info safely. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI Health Questions</h1>
          <p className="text-lg text-muted-foreground">Use safely. Always verify with doctor.</p>
        </div>

        <Card className="mb-4 border-yellow-300">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3 text-yellow-700">Important caveats</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AI isn&apos;t a doctor.</li>
              <li>Don&apos;t trust diagnoses.</li>
              <li>Don&apos;t change medications.</li>
              <li>Don&apos;t skip doctor visits.</li>
              <li>AI helps prepare questions, NOT replace.</li>
              <li>Emergency = call 911, not AI.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Good AI use cases</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Understand a diagnosis.</li>
              <li>Prepare doctor questions.</li>
              <li>Side effect possibilities.</li>
              <li>What&apos;s normal aging vs concerning.</li>
              <li>How to take meds with food / water.</li>
              <li>Lifestyle changes for conditions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pre-doctor visit prep</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;What questions should I ask my cardiologist?&quot;</li>
              <li>&quot;What does my A1c result mean?&quot;</li>
              <li>&quot;Help me describe my symptoms accurately.&quot;</li>
              <li>&quot;Translate medical terms in my chart.&quot;</li>
              <li>&quot;What are alternatives to this surgery?&quot;</li>
              <li>Print + bring to appointment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Symptom research</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t Google diseases (panic).</li>
              <li>AI better — context-aware.</li>
              <li>&quot;What could cause [symptom]?&quot; in moderation.</li>
              <li>Most are mild causes.</li>
              <li>Lists possibilities.</li>
              <li>Take to doctor for actual diagnosis.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medication questions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Side effects of [medication]?&quot;</li>
              <li>&quot;What does [med] do?&quot;</li>
              <li>&quot;Can I take [med] with food?&quot;</li>
              <li>&quot;Drugs.com interaction checker.&quot;</li>
              <li>Verify with pharmacist.</li>
              <li>Pharmacist is REAL expert.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trustworthy AI sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>ChatGPT</strong> — general questions.</li>
              <li><strong>Claude</strong> — careful with health.</li>
              <li><strong>Google Gemini</strong> — links to sources.</li>
              <li><strong>Mayo Clinic / Cleveland Clinic</strong> websites.</li>
              <li><strong>UpToDate</strong> — used by doctors.</li>
              <li>Avoid: random forum AI.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Doctor still essential</h3>
            <p className="text-sm text-muted-foreground">AI great for: understanding, preparing, asking better questions. AI bad for: diagnosing, prescribing, replacing checkups. New AI tool — Open Evidence, Glass — for medical professionals. Patient-facing AI advancing. But always verify with REAL doctor. AI helps you become better patient, not your own doctor.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
