import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

const APPS = [
  { name: 'WebMD Symptom Checker', cost: 'FREE', best: 'Familiar UI. Senior-friendly. Asks questions, suggests possibilities.', good: 'Best familiar.' },
  { name: 'Mayo Clinic Symptom Checker', cost: 'FREE', best: 'From respected institution. Accurate but conservative.', good: 'Best trusted.' },
  { name: 'Ada Health', cost: 'FREE app', best: 'AI-powered. More accurate than rivals. UK-based.', good: 'Best AI.' },
  { name: 'Buoy Health', cost: 'FREE', best: 'Conversational. Suggests next steps (urgent care, ER, doctor).', good: 'Best for next steps.' },
  { name: 'Apple Health Sharing + ChatGPT', cost: 'FREE', best: 'Describe symptoms to ChatGPT — research-quality summary. NOT diagnosis.', good: 'Best AI explanation.' },
];

export default function SymptomCheckers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Symptom Checker Apps | TekSure" description="WebMD, Mayo, Ada Health. Plain-English picks for free symptom checkers — when to use, when to call doctor." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Search className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Symptom Checkers</h1>
          <p className="text-lg text-muted-foreground">For 3 AM "is this normal?" worries.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reality check</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Symptom checkers are RIGHT 30-50% of the time.</li>
              <li>They tend to over-warn (cancer pops up for paper cuts).</li>
              <li>Use to TRIAGE — am I OK to wait? Need urgent care? ER?</li>
              <li>Don&apos;t self-treat based on results.</li>
              <li>Can be useful preparation for a doctor visit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to skip checker + go to ER</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Chest pain, especially with arm/jaw pain.</li>
              <li>Sudden severe headache "worst of life".</li>
              <li>One-sided weakness or face drooping (stroke).</li>
              <li>Trouble speaking suddenly.</li>
              <li>Difficulty breathing.</li>
              <li>Severe abdominal pain.</li>
              <li>Heavy bleeding that won&apos;t stop.</li>
              <li>High fever (over 103°F) + confusion.</li>
              <li>Suspected fracture after fall.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better than apps — call</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Doctor&apos;s nurse line</strong> — most practices have one. Free.</li>
              <li><strong>Insurance nurse hotline</strong> — Anthem, BCBS, Aetna offer free nurse calls 24/7.</li>
              <li><strong>988</strong> — mental health crisis.</li>
              <li><strong>Poison Control</strong> — 1-800-222-1222.</li>
              <li><strong>Telehealth</strong> — see /tools/telehealth-basics.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Trust your gut</h3>
            <p className="text-sm text-muted-foreground">Studies show patients who say "something feels wrong" + go to ER are usually right. Symptom checkers are tools — not replacements for instinct + doctor advice. If something feels seriously off, get checked.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
