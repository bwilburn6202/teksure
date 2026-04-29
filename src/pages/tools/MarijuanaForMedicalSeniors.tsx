import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

export default function MarijuanaForMedicalSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical Marijuana for Seniors | TekSure" description="CBD + THC for senior pain + sleep. Plain-English medical marijuana guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Leaf className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical Marijuana for Seniors</h1>
          <p className="text-lg text-muted-foreground">Pain, sleep, anxiety. Cautious approach.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CBD vs THC</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>CBD</strong> — non-psychoactive. Calms without high.</li>
              <li><strong>THC</strong> — psychoactive. Causes high.</li>
              <li>Hemp CBD = federal legal. THC varies by state.</li>
              <li>Many seniors prefer CBD only.</li>
              <li>Or low-THC products.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior conditions some help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Arthritis pain.</li>
              <li>Sleep issues.</li>
              <li>Anxiety.</li>
              <li>Cancer treatment side effects.</li>
              <li>Glaucoma (THC).</li>
              <li>Some neurological conditions.</li>
              <li>Talk to doctor — limited evidence still.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior cautions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drug interactions — many.</li>
              <li>Increased fall risk.</li>
              <li>Confusion possible.</li>
              <li>Heart effects.</li>
              <li>Smoke = lung damage (skip smoking).</li>
              <li>Edibles — easy to overdo.</li>
              <li>Start TINY dose.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safer use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>CBD first — non-psychoactive.</li>
              <li>If THC — start 2.5mg or less.</li>
              <li>Wait 2 hours before more (edibles slow).</li>
              <li>Tinctures + topicals over smoking.</li>
              <li>Buy from licensed dispensary.</li>
              <li>Tell ALL doctors.</li>
              <li>Check medication interactions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Legal landscape</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>24+ states have medical marijuana.</li>
              <li>Some require state ID card.</li>
              <li>Recreational legal in some states.</li>
              <li>Federal still illegal.</li>
              <li>Check state laws.</li>
              <li>Travel between states still risky.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free guides</h3>
            <p className="text-sm text-muted-foreground"><strong>Project CBD</strong> — projectcbd.org. Free education. <strong>NIH National Center for Complementary Health</strong>. <strong>Americans for Safe Access</strong> — patient education. Talk to primary doctor first. Some doctors anti-marijuana — find open one if interested.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
