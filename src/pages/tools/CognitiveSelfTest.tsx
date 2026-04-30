import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, AlertTriangle } from 'lucide-react';

export default function CognitiveSelfTest() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cognitive Self-Test — SAGE Test for Memory | TekSure" description="Worried about memory? The SAGE test from Ohio State is a free 10-15 minute paper test that flags early cognitive issues. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cognitive Self-Test (SAGE)</h1>
          <p className="text-lg text-muted-foreground">Free 15-minute screening. Done at home with paper and pen.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What SAGE is</h2>
            <p className="text-sm">The Self-Administered Gerocognitive Examination — a free, validated test from Ohio State University. Used by tens of thousands of doctors. Catches early signs of cognitive impairment that lead to dementia. NOT a diagnosis — but flags whether you should see a doctor.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to take it</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Forgetting things more than usual.</li>
              <li>Family is concerned.</li>
              <li>Repeating yourself.</li>
              <li>Trouble with new technology you used to handle fine.</li>
              <li>Getting lost in familiar places.</li>
              <li>As a baseline, even if you\'re fine — having a "normal" score on file makes any future change easier to detect.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to take it</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>sagetest.osu.edu</strong> and download the free PDF (4 different versions).</li>
              <li>Print it. You\'ll need a pen and a quiet 10-15 minutes.</li>
              <li>NO time pressure. Take as long as you need.</li>
              <li>Don\'t look up answers, don\'t use a calculator.</li>
              <li>When done, give the paper to your doctor at your next visit. Or you can score it yourself using the answer key — but the doctor\'s read is what matters.</li>
            </ol>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded">Score 17+ out of 22 = normal. 15-16 = mild concern. Below 15 = should be evaluated. NOT a final answer; just a starting conversation.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other free options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mini-Cog</strong> — your doctor can do it in 3 minutes. Just ask at your next visit.</li>
              <li><strong>BrainTest (paid app, $30)</strong> — at-home tablet test. Mixed reviews.</li>
              <li><strong>Annual wellness visit</strong> — Medicare covers a free yearly cognitive screening as part of your annual wellness check. Most patients don\'t know to ask. Ask: "Can we do a cognitive screening today?"</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-700 dark:text-yellow-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">If results concern you</h3>
                <p className="text-sm">Many things mimic dementia and are FIXABLE: medications, depression, B12 deficiency, thyroid, sleep apnea, even hearing loss. See your primary doctor first. Get bloodwork. Then if needed, ask for a neurology referral.</p>
                <p className="text-sm mt-2">Early intervention matters. New treatments (lecanemab, donanemab) work better the earlier they start. Don\'t put off a doctor visit out of fear.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best dementia prevention isn&apos;t apps</h3>
            <p className="text-sm text-muted-foreground">Daily walks, social engagement, learning a language, treating high BP and diabetes, sleeping well, treating hearing loss. The data on these is much stronger than on brain-training apps.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
