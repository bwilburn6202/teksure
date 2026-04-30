import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function AIDoctorAppointmentPrep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AI for Doctor Appointment Prep | TekSure" description="Use ChatGPT to prepare doctor visits. Plain-English guide for senior medical advocacy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AI for Doctor Visits</h1>
          <p className="text-lg text-muted-foreground">Better questions = better care.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before appointment</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tell AI your symptoms + new diagnosis.</li>
              <li>Ask: &quot;What questions should I ask doctor about [condition]?&quot;</li>
              <li>Ask: &quot;What symptoms should worry me?&quot;</li>
              <li>Ask: &quot;What are typical treatments?&quot;</li>
              <li>Ask: &quot;What lifestyle changes help?&quot;</li>
              <li>Print question list to bring.</li>
              <li>Doctor APPRECIATES informed patients.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After appointment</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Doctor said something confusing? Ask AI to explain.</li>
              <li>&quot;What does [medical term] mean in plain English?&quot;</li>
              <li>&quot;What are side effects of [medication]?&quot;</li>
              <li>&quot;Should I be worried about [test result]?&quot;</li>
              <li>&quot;What does [condition] mean for my future?&quot;</li>
              <li>Helps process complex visits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Decode lab results</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Type results from patient portal.</li>
              <li>Ask: &quot;What does this mean? What&apos;s normal range?&quot;</li>
              <li>Catches things doctor may not call about.</li>
              <li>Helps prepare follow-up questions.</li>
              <li>Don&apos;t panic — confirm with doctor.</li>
              <li>AI helps you UNDERSTAND, doctor decides.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Drug interaction checks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>List ALL meds + supplements + new prescription.</li>
              <li>Ask: &quot;Are there any interactions?&quot;</li>
              <li>Ask: &quot;What time of day should I take each?&quot;</li>
              <li>Ask: &quot;Any food/alcohol restrictions?&quot;</li>
              <li>Confirm with pharmacist.</li>
              <li>AI catches things doctors miss with multiple meds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance + Medicare</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Is [procedure] covered by Medicare?&quot;</li>
              <li>&quot;Help me write appeal letter for denied claim.&quot;</li>
              <li>&quot;Explain this insurance EOB.&quot;</li>
              <li>&quot;What does &apos;prior authorization&apos; mean?&quot;</li>
              <li>Verify with SHIP counselor or Medicare.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Critical caveats</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AI is NOT your doctor.</li>
              <li>Use to PREPARE + UNDERSTAND, not diagnose.</li>
              <li>Never replace doctor advice.</li>
              <li>Don&apos;t share Medicare/SS#/personal ID.</li>
              <li>AI sometimes gets facts wrong — verify.</li>
              <li>Emergency? Call 911, not ChatGPT.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Big game-changer</h3>
            <p className="text-sm text-muted-foreground">Most patients leave appointment confused, forget questions. AI prep = 5x better appointments. Doctor sees fewer follow-up calls when patients prepared. Brain stays sharper learning. Free + easy. Use it for every important visit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
