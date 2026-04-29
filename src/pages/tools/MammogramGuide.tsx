import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function MammogramGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mammogram Guide for Senior Women | TekSure" description="Schedule + what to expect. Plain-English mammogram guide for senior women." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Stethoscope className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mammogram Guide</h1>
          <p className="text-lg text-muted-foreground">Free with Medicare. Take 30 min. Save your life.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to screen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Age 40 — start (annual).</li>
              <li>Age 55 — every 1-2 years.</li>
              <li>Continue until 75 minimum.</li>
              <li>Discuss with doctor 75+.</li>
              <li>Family history — earlier + more frequent.</li>
              <li>Don&apos;t skip just because no symptoms.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">3D vs 2D</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>3D (tomosynthesis)</strong> — newer, better for dense breasts.</li>
              <li><strong>2D</strong> — standard, still useful.</li>
              <li>3D detects 30% more cancers.</li>
              <li>Fewer false positives.</li>
              <li>Most insurance covers 3D.</li>
              <li>Ask for 3D if available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to expect</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30-min appointment.</li>
              <li>Wear two-piece (top removed).</li>
              <li>NO deodorant / lotion day-of.</li>
              <li>Compression — 10-30 seconds per image.</li>
              <li>Uncomfortable but quick.</li>
              <li>Results 1-2 weeks.</li>
              <li>Most clear (90%+).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Medicare covers fully (no copay).</li>
              <li>Most insurance covers fully.</li>
              <li>Mobile mammography vans (free in some areas).</li>
              <li>Susan G. Komen — free mammograms for low income.</li>
              <li>National Breast Cancer Foundation.</li>
              <li>NBCCEDP — Nat&apos;l program for uninsured.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If callback</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most callbacks = NOT cancer.</li>
              <li>Additional imaging or ultrasound.</li>
              <li>Don&apos;t panic.</li>
              <li>10% of mammograms get callback.</li>
              <li>Less than 1% of those = cancer.</li>
              <li>Bring spouse for support.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Self-exams + family history</h3>
            <p className="text-sm text-muted-foreground">Monthly self-exam still useful. Know your normal. Mention family history (mother, sister, daughter with breast cancer) to doctor — different screening schedule. BRCA testing if strong family history. Catch early = best outcomes. Mammogram = critical senior preventive care.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
