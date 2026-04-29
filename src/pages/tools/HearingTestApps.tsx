import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function HearingTestApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hearing Test Apps — Free Home Testing | TekSure" description="Test your hearing at home with free apps from Mimi, SonicCloud, and Apple. Plain-English picks before paying $400 for an in-person test." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hearing Test Apps</h1>
          <p className="text-lg text-muted-foreground">Free 5-minute test at home.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free apps that work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mimi Hearing Test</strong> — free, iPhone &amp; Android. 6-minute test. Saves results over time.</li>
              <li><strong>SonicCloud</strong> — free hearing profile test. Used by some hearing aids.</li>
              <li><strong>Apple AirPods Pro 2</strong> (iPhone) — built-in hearing test in iOS 18+. FDA-cleared.</li>
              <li><strong>HearingHealthFoundation.org</strong> — free quick online check. No app needed.</li>
              <li><strong>EarMachine</strong> — free. Was used in clinical research.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to take the test</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Use real headphones (not phone speakers). Wired or AirPods/AirPods Pro best.</li>
              <li>Quiet room. No TV, fan, or AC running.</li>
              <li>Turn phone volume to 50%.</li>
              <li>Listen for tones. Tap when you hear them.</li>
              <li>Test takes 5-7 minutes per ear.</li>
              <li>App shows hearing curve — same chart audiologists use.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to see a real audiologist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>App shows moderate or severe hearing loss.</li>
              <li>One ear is much worse than the other.</li>
              <li>You hear ringing (tinnitus).</li>
              <li>Sudden hearing loss — go to urgent care SAME DAY (treatable if caught fast).</li>
              <li>You&apos;re considering hearing aids.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free in-person tests</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Costco Hearing Center</strong> — free for members. Best deal in the country.</li>
              <li><strong>Sam&apos;s Club Hearing Center</strong> — free for members.</li>
              <li><strong>Miracle-Ear, Beltone</strong> — free tests (sales-driven, but tests are real).</li>
              <li><strong>VA</strong> — free for veterans.</li>
              <li><strong>Local audiology schools</strong> — free or low-cost. Search "[city] AuD program".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hearing aids over the counter</h3>
            <p className="text-sm text-muted-foreground">Since 2022, you can buy hearing aids without a prescription. Jabra Enhance, Lexie, Eargo, Sony — $700-2,000/pair. AirPods Pro 2 ($249) also work as basic hearing aids on iPhone. Big change from $4,000 prescription pairs.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
