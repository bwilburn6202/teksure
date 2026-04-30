import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function AlzheimersEarlyStage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Early Stage Alzheimer's Guide | TekSure" description="What to do when diagnosed with early Alzheimer's. Plain-English guide for patients + family." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Early Stage Alzheimer&apos;s</h1>
          <p className="text-lg text-muted-foreground">First steps after diagnosis.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First 30 days</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get second opinion (memory clinic preferred).</li>
              <li>Get blood tests for treatable causes (B12, thyroid, infection).</li>
              <li>Update legal docs while still able — POA, will, advance directive.</li>
              <li>Tell trusted family member.</li>
              <li>Decide who handles finances long-term.</li>
              <li>Allow time to grieve.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Treatment options 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Donanemab (Kisunla)</strong> — IV monthly. Slows progression in early stages.</li>
              <li><strong>Lecanemab (Leqembi)</strong> — IV every 2 weeks.</li>
              <li><strong>Donepezil (Aricept)</strong> — pill. Modest benefit.</li>
              <li><strong>Memantine (Namenda)</strong> — for moderate stages.</li>
              <li>Talk to neurologist about clinical trials.</li>
              <li>Medicare covers approved treatments with diagnosis.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Slow it with lifestyle</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mediterranean / MIND diet (proven 35% slower decline).</li>
              <li>Daily exercise — 30 min walking minimum.</li>
              <li>Social engagement — best brain protection.</li>
              <li>Treat hearing loss — uncorrected = 4x dementia risk.</li>
              <li>Manage BP + diabetes aggressively.</li>
              <li>Quality sleep — 7-8 hrs.</li>
              <li>Stay engaged in hobbies, reading, learning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plan ahead while you can</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Driving — when to stop driving discussion.</li>
              <li>Long-term care preferences.</li>
              <li>Medical wishes — write them down.</li>
              <li>Who makes decisions when you can&apos;t.</li>
              <li>Funeral / memorial preferences.</li>
              <li>Letters to loved ones.</li>
              <li>Document your stories now.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Support resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Alzheimer&apos;s Association</strong> — alz.org. 24/7 hotline 800-272-3900.</li>
              <li><strong>Local Alzheimer&apos;s Association chapter</strong> — support groups, classes.</li>
              <li><strong>Dementia Friends USA</strong> — free training.</li>
              <li><strong>Memory Cafés</strong> — local social events for early-stage.</li>
              <li><strong>SeniorNavigator</strong> — virtual support tools.</li>
              <li><strong>Caregiver support</strong> — see /tools/caregiver-apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Live well now</h3>
            <p className="text-sm text-muted-foreground">Many live 10-20 years with Alzheimer&apos;s. Early stage = years of meaningful life ahead. Write your bucket list. Travel while able. Reconnect with old friends. Diagnosis is hard but life isn&apos;t over. Resources at alz.org/help-support.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
