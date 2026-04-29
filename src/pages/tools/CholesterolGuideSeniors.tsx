import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function CholesterolGuideSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cholesterol Guide for Seniors | TekSure" description="Manage cholesterol after 65. Plain-English guide to numbers, statins, diet, alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cholesterol for Seniors</h1>
          <p className="text-lg text-muted-foreground">Numbers + meds + food = manageable.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Understand your numbers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Total</strong> — under 200.</li>
              <li><strong>LDL (bad)</strong> — under 100. Under 70 if heart disease.</li>
              <li><strong>HDL (good)</strong> — over 60.</li>
              <li><strong>Triglycerides</strong> — under 150.</li>
              <li><strong>Lp(a)</strong> — important, often skipped. Ask doctor.</li>
              <li>Get free copy of your bloodwork.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Statins explained</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most prescribed med after 65 (Lipitor, Crestor, simvastatin).</li>
              <li>Lower LDL 30-50%.</li>
              <li>Reduce heart attack + stroke risk.</li>
              <li>Generic = $4-15/mo.</li>
              <li>Side effects: muscle aches (10-20%), liver enzyme rise (rare).</li>
              <li>Try different statin if side effects.</li>
              <li>Take at night (cholesterol made overnight).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Newer alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ezetimibe (Zetia)</strong> — pill, often added to statin.</li>
              <li><strong>PCSK9 inhibitors</strong> — Repatha, Praluent. Injection. Expensive.</li>
              <li><strong>Bempedoic acid (Nexletol)</strong> — pill alternative for statin-intolerant.</li>
              <li><strong>Inclisiran (Leqvio)</strong> — twice-yearly injection.</li>
              <li>Statins still first-line for most.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Food approach</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Soluble fiber</strong> — oats, beans, apples. Lowers LDL.</li>
              <li><strong>Omega-3</strong> — salmon, sardines 2x/week.</li>
              <li><strong>Nuts</strong> — walnuts, almonds. Daily handful.</li>
              <li><strong>Olive oil</strong> — replace butter.</li>
              <li><strong>Limit</strong> — red meat, fried, butter, full-fat dairy.</li>
              <li><strong>Plant sterols</strong> — Benecol, Promise margarine.</li>
              <li>See /tools/anti-inflammatory-eating.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>After 75 — debate over statins for primary prevention.</li>
              <li>If history of heart attack/stroke — keep taking statin.</li>
              <li>Cognitive decline + statins NOT linked (despite myths).</li>
              <li>Talk to doctor about CAC (calcium) score — guides decisions.</li>
              <li>Lp(a) genetic — runs in families.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Heart age calculator</h3>
            <p className="text-sm text-muted-foreground">CDC has free &quot;Heart Age&quot; calculator — cdc.gov. American College of Cardiology has ASCVD Risk Calculator — predicts 10-year heart attack/stroke risk. Both free + senior-friendly. Discuss with doctor at next visit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
