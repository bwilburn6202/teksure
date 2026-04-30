import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PenTool } from 'lucide-react';

export default function ApplePencilIpadCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Pencil & iPad Coach — Drawing, Notes, Markup | TekSure" description="Apple Pencil + iPad turns the iPad into a sketchpad, notebook, and form-signing tool. Plain-English guide to picks and apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PenTool className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Pencil & iPad</h1>
          <p className="text-lg text-muted-foreground">Sketch, take notes, sign forms — all on iPad.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pencil compatibility</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Apple Pencil USB-C</strong> ($79) — newer iPads. Cheapest.</li>
              <li><strong>Apple Pencil 2nd gen</strong> ($129) — magnetic charging on iPad Pro/Air.</li>
              <li><strong>Apple Pencil Pro</strong> ($129) — newest. iPad Pro / iPad Air M2+. Pressure + tilt + barrel roll.</li>
              <li><strong>Logitech Crayon</strong> ($60-70) — much cheaper alternative. Works with most iPads.</li>
              <li><strong>Generic stylus</strong> ($15-30) — fine for note-taking, not as precise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best apps with Pencil</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>GoodNotes 6</strong> ($30 once or $10/yr) — best note-taking. Handwriting search.</li>
              <li><strong>Notability</strong> ($15/yr) — alternative. Strong audio recording with notes.</li>
              <li><strong>Procreate</strong> ($13 once) — best digital art app.</li>
              <li><strong>Apple Notes</strong> (FREE) — built in. Better than people realize for handwriting.</li>
              <li><strong>Adobe Illustrator on iPad</strong> ($10/mo) — for designers.</li>
              <li><strong>PDF Expert / Acrobat</strong> — sign and annotate PDFs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sign documents</strong> — markup PDFs without printing.</li>
              <li><strong>Note-taking in church / class</strong> — handwriting becomes searchable text.</li>
              <li><strong>Recipe cards</strong> — digitize with handwritten notes preserved.</li>
              <li><strong>Family tree drawing</strong> — sketch genealogy with notes.</li>
              <li><strong>Crossword + Sudoku</strong> in a real app feels like paper.</li>
              <li><strong>Drawing with grandkids</strong> — over FaceTime SharePlay.</li>
              <li><strong>Color-by-number / paint-by-number</strong> apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Great gift idea</h3>
            <p className="text-sm text-muted-foreground">iPad (10th gen, $349) + Logitech Crayon ($70) + GoodNotes ($30 once) = $450 art studio + notebook. For serious artists, iPad Pro + Apple Pencil Pro + Procreate.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
