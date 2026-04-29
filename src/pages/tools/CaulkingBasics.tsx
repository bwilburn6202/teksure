import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PaintBucket } from 'lucide-react';

export default function CaulkingBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Caulking Basics for Seniors | TekSure" description="Easy DIY caulk + waterproofing. Plain-English caulking guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PaintBucket className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Caulking Basics</h1>
          <p className="text-lg text-muted-foreground">Easy DIY. Saves $300-500 in handyman.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to caulk</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Old caulk cracking / pulling away.</li>
              <li>Mold/mildew on caulk.</li>
              <li>Water seeping behind tub.</li>
              <li>Drafts around windows.</li>
              <li>Yearly inspect.</li>
              <li>Replace every 5 years typical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Right caulk for job</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bathroom/kitchen</strong> — silicone (waterproof).</li>
              <li><strong>Windows/doors</strong> — paintable acrylic latex.</li>
              <li><strong>Outdoor</strong> — exterior silicone.</li>
              <li><strong>Mold-resistant</strong> — for showers.</li>
              <li>$5-10 per tube.</li>
              <li>Get quality — cheap fails fast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tools needed</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Caulk gun ($10).</li>
              <li>Utility knife (cut tube tip).</li>
              <li>Painter&apos;s tape.</li>
              <li>Caulk smoothing tool ($5).</li>
              <li>Damp rag for cleanup.</li>
              <li>Old caulk remover tool.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Steps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Remove old caulk completely.</li>
              <li>Clean + dry surface.</li>
              <li>Apply painter&apos;s tape both sides.</li>
              <li>Cut tube tip at 45° angle.</li>
              <li>Squeeze gun, move steady.</li>
              <li>Smooth with finger or tool.</li>
              <li>Remove tape immediately.</li>
              <li>Dry 24 hours before water exposure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common mistakes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Skipping old caulk removal.</li>
              <li>Wrong type (acrylic in shower fails).</li>
              <li>Surface not dry.</li>
              <li>Bead too thick.</li>
              <li>Skipping painter&apos;s tape.</li>
              <li>Not cleaning excess immediately.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save serious money</h3>
            <p className="text-sm text-muted-foreground">Handyman caulking visit = $200-400 minimum. DIY = $20 supplies + 2 hours. Senior YouTube tutorials excellent. One of easiest DIY senior tasks. Watch + practice somewhere unimportant first.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
