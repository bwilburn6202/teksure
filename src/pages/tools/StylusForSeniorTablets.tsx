import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil } from 'lucide-react';

export default function StylusForSeniorTablets() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Stylus Pens for Senior Tablet Users | TekSure" description="Best stylus pens for seniors with shaky hands or tired fingers. iPad and Android options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pencil className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Stylus Pens</h1>
          <p className="text-lg text-muted-foreground">Easier than fingers. Easier on hands.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why a stylus?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Easier than precise finger taps.</li>
              <li>Better for shaky or arthritic hands.</li>
              <li>Hit small buttons accurately.</li>
              <li>Can write or draw on tablet.</li>
              <li>No greasy fingerprints on screen.</li>
              <li>Some have palm rejection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Pencil (iPad)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Pencil 2 — $129, charges magnetically on side.</li>
              <li>Apple Pencil USB-C — $79, basic functionality.</li>
              <li>Pressure-sensitive — varies line thickness.</li>
              <li>Palm rejection works perfectly.</li>
              <li>Best stylus on the market.</li>
              <li>Worth it if you draw or take handwritten notes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheaper options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Logitech Crayon — $70, no pressure sensitivity but works great.</li>
              <li>Adonit Note+ — $70, iPad-compatible.</li>
              <li>Generic capacitive stylus — $10–$20.</li>
              <li>Cheap rubber-tip works for basic tapping.</li>
              <li>Don&apos;t need pressure sensitivity for buttons.</li>
              <li>Save $$ if not drawing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Samsung S Pen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Comes free with Samsung Galaxy Tab S series.</li>
              <li>Comes free with Galaxy Note phones.</li>
              <li>Excellent palm rejection.</li>
              <li>Works on Galaxy phones too.</li>
              <li>No charging needed for basic use.</li>
              <li>Best Android stylus.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for best use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hold like a regular pen.</li>
              <li>Tablet must be capacitive (modern iPads + Androids).</li>
              <li>Doesn&apos;t need to press hard — gentle touch works.</li>
              <li>Wipe screen with soft cloth occasionally.</li>
              <li>Most styluses don&apos;t scratch screens.</li>
              <li>Keep cap on when traveling.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best note-taking apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Notes — free, simple.</li>
              <li>Notability — popular, $14.99/year.</li>
              <li>GoodNotes 6 — premium, $9.99/year.</li>
              <li>Microsoft OneNote — free across platforms.</li>
              <li>Samsung Notes — free with S Pen.</li>
              <li>Replace paper notebooks entirely.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">$15 cheap stylus is enough for most</h3>
            <p className="text-sm text-muted-foreground">If you just want easier tapping for seniors with arthritis, a $15 generic capacitive stylus from Amazon works perfectly. The expensive Apple Pencil is only worth it if you specifically want to draw or take handwritten notes. For senior accessibility, the cheap option fixes 90% of the problem.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
