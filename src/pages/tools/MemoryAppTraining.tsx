import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

const APPS = [
  { name: 'BrainHQ', cost: 'FREE / $96/yr', best: 'Most research-backed for cognitive aging. Used in clinical trials.', good: 'Best for science.' },
  { name: 'Lumosity', cost: 'FREE / $80/yr', best: 'Most popular brain training. Tracks performance over time.', good: 'Best for tracking.' },
  { name: 'Elevate', cost: 'FREE / $50/yr', best: 'Focus on language + math. Senior-friendly UI.', good: 'Best for language.' },
  { name: 'CogniFit', cost: 'FREE / $20/mo', best: 'Used by researchers. Detailed reports.', good: 'Best detailed.' },
  { name: 'Peak', cost: 'FREE / $30/yr', best: 'Game-style training. Fun.', good: 'Best gamified.' },
];

export default function MemoryAppTraining() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Memory Training Apps for Seniors | TekSure" description="BrainHQ, Lumosity, CogniFit. Plain-English picks for senior memory + cognitive training apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Memory Training Apps</h1>
          <p className="text-lg text-muted-foreground">15 min/day. Real benefits.</p>
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

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>BrainHQ</strong> — research shows reduces fall risk + improves driving in seniors.</li>
              <li>Lumosity / Elevate — entertaining but limited evidence of real-world transfer.</li>
              <li>Better than apps: NEW skills (instrument, language, dance).</li>
              <li>Even better: physical exercise + social engagement.</li>
              <li>Apps + life = best cognitive protection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bigger brain helpers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30 min cardio 3x/week.</li>
              <li>Sleep 7+ hours.</li>
              <li>Mediterranean diet.</li>
              <li>Social connections (most-protective).</li>
              <li>Continuing education / new languages.</li>
              <li>Address hearing loss promptly (untreated = dementia risk).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When to see neurologist</h3>
            <p className="text-sm text-muted-foreground">Memory training apps don&apos;t replace medical care. If memory issues affect daily life — see neurologist OR ask doctor for MoCA cognitive test. Many treatable causes (B12 deficiency, sleep apnea, depression).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
