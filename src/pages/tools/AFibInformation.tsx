import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function AFibInformation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Atrial Fibrillation (AFib) for Seniors | TekSure" description="Stroke risk + treatment. Plain-English AFib guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AFib for Seniors</h1>
          <p className="text-lg text-muted-foreground">Common. Treatable. Stroke prevention crucial.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What AFib is</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Irregular heart rhythm.</li>
              <li>10% of seniors 65+ have it.</li>
              <li>Many don&apos;t know.</li>
              <li>Increases stroke risk 5x.</li>
              <li>Often no symptoms.</li>
              <li>Smartwatches helping detect.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Symptoms (some have)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heart palpitations / racing.</li>
              <li>Skipped beats sensation.</li>
              <li>Chest fluttering.</li>
              <li>Shortness of breath.</li>
              <li>Fatigue.</li>
              <li>Lightheadedness.</li>
              <li>Many feel nothing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Detection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pulse check — irregular = could be AFib.</li>
              <li>EKG at doctor.</li>
              <li>Apple Watch / Fitbit ECG.</li>
              <li>KardiaMobile ($90 device).</li>
              <li>Holter monitor (24-48 hr).</li>
              <li>Catch + treat early.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Treatment</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Blood thinner</strong> — Eliquis, Xarelto. Prevents stroke.</li>
              <li><strong>Rate control</strong> — beta blockers slow heart.</li>
              <li><strong>Rhythm control</strong> — antiarrhythmics restore normal rhythm.</li>
              <li><strong>Cardioversion</strong> — electric shock to reset.</li>
              <li><strong>Ablation</strong> — burns problem tissue.</li>
              <li>Lifestyle changes too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reduce AFib triggers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lose weight if overweight.</li>
              <li>Limit alcohol.</li>
              <li>Treat sleep apnea.</li>
              <li>Manage stress.</li>
              <li>Reduce caffeine if triggers.</li>
              <li>Control BP + diabetes.</li>
              <li>Don&apos;t smoke.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Stroke risk = top concern</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t skip blood thinner. Many AFib stroke deaths preventable. Eliquis + Xarelto have less bleeding risk than Coumadin. Cost $400-500/mo brand — assistance programs available. Generic apixaban 2026.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
