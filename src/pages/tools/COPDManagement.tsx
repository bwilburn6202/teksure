import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function COPDManagement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="COPD Management for Seniors | TekSure" description="Live well with COPD. Plain-English guide for senior COPD patients." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">COPD Management</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t let lung disease define you.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">COPD basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Chronic Obstructive Pulmonary Disease.</li>
              <li>Includes emphysema, chronic bronchitis.</li>
              <li>16M+ Americans diagnosed.</li>
              <li>Most caused by smoking.</li>
              <li>Progressive but manageable.</li>
              <li>Quality of life improves with treatment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best treatments</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Quit smoking</strong> — #1 priority.</li>
              <li><strong>Inhalers</strong> — bronchodilators, steroids.</li>
              <li><strong>Pulmonary rehab</strong> — Medicare covered. Game-changer.</li>
              <li><strong>Oxygen therapy</strong> — if low O2 levels.</li>
              <li><strong>Vaccines</strong> — flu, pneumonia, RSV essential.</li>
              <li><strong>Exercise</strong> — counterintuitive but helps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pulmonary rehab</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>6-12 week program.</li>
              <li>Exercise + breathing techniques + education.</li>
              <li>Medicare covers.</li>
              <li>Reduces hospitalizations 40%.</li>
              <li>Improves quality of life.</li>
              <li>Find local at lungforce.org.</li>
              <li>HUGELY underused.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily management</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use inhalers correctly (technique matters).</li>
              <li>Avoid smoke + pollution.</li>
              <li>Air purifier home.</li>
              <li>Avoid extreme cold/heat.</li>
              <li>Pursed-lip breathing technique.</li>
              <li>Daily walking.</li>
              <li>Stay hydrated.</li>
              <li>Eat smaller meals more often.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch warning signs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Worse shortness of breath.</li>
              <li>More mucus / different color.</li>
              <li>Fever.</li>
              <li>Chest pain.</li>
              <li>Confusion (low O2).</li>
              <li>Get treated — exacerbations dangerous.</li>
              <li>Have rescue inhaler ready.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free help</h3>
            <p className="text-sm text-muted-foreground"><strong>American Lung Association</strong> — lung.org. Free Better Breathers Clubs nationwide. <strong>COPD Foundation</strong> — copdfoundation.org. Free education + community. Don&apos;t do this alone. Many resources.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
