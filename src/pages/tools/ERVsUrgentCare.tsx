import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function ERVsUrgentCare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="ER vs Urgent Care vs Doctor | TekSure" description="Where to go for senior medical issues. Plain-English decision guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">ER vs Urgent Care</h1>
          <p className="text-lg text-muted-foreground">Right place = better care + lower cost.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CALL 911 / GO ER for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Chest pain or pressure.</li>
              <li>Trouble breathing.</li>
              <li>Stroke signs (FAST: face droop, arm weak, slurred speech, time).</li>
              <li>Sudden severe headache.</li>
              <li>Major bleeding.</li>
              <li>Broken bones with deformity.</li>
              <li>Loss of consciousness.</li>
              <li>Severe abdominal pain.</li>
              <li>Allergic reaction with breathing trouble.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Urgent care for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>UTIs, ear/sinus infections.</li>
              <li>Sprains, simple fractures.</li>
              <li>Cuts that may need stitches.</li>
              <li>Mild allergic reactions.</li>
              <li>Cold/flu symptoms.</li>
              <li>Skin infections.</li>
              <li>Mild asthma flare.</li>
              <li>1-2 hr wait usually.</li>
              <li>1/4 cost of ER.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Primary doctor / telehealth for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Chronic condition flares.</li>
              <li>Med refills.</li>
              <li>Routine concerns.</li>
              <li>Follow-up appointments.</li>
              <li>Mental health.</li>
              <li>Nausea / mild GI issues.</li>
              <li>Many issues handled via patient portal message.</li>
              <li>Most affordable option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Subtle senior symptoms can mean serious.</li>
              <li>Confusion = often UTI or infection.</li>
              <li>Falls — even if seem okay, get checked.</li>
              <li>Med interactions cause many ER visits.</li>
              <li>If unsure — call doctor&apos;s after-hours line first.</li>
              <li>Many take phone advice without visit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost comparison</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Telehealth</strong> — $0-50.</li>
              <li><strong>Doctor office</strong> — $20-100 copay.</li>
              <li><strong>Urgent care</strong> — $50-150 copay.</li>
              <li><strong>ER</strong> — $200-1,000+ copay.</li>
              <li>Medicare ER copay ~$200 + 20% of remaining.</li>
              <li>Bills shock — $5K-30K not unusual.</li>
              <li>Choose carefully when possible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you go to ER</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bring ID, insurance card, med list.</li>
              <li>Bring spouse / advocate.</li>
              <li>Tell EMT you want X hospital (preference).</li>
              <li>Demand in-network if you can.</li>
              <li>Ask about &quot;Observation&quot; status — different billing than admission.</li>
              <li>Get itemized bill — review for errors (50%+ have errors).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Triage line</h3>
            <p className="text-sm text-muted-foreground">Most insurance + doctor offices have 24/7 nurse triage line. Free phone consultation. Often: &quot;You need ER&quot; or &quot;Urgent care&quot; or &quot;Wait until tomorrow.&quot; Call BEFORE going. Saves $$$. Number on your insurance card or doctor portal.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
