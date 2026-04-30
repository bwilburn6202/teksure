import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Grid3x3 } from 'lucide-react';

export default function QuiltDesignSoftware() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Quilt Design Software for Senior Quilters | TekSure" description="Best apps + software for designing quilts. Senior-friendly options for quilting projects." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Grid3x3 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Quilt Design Apps</h1>
          <p className="text-lg text-muted-foreground">Design quilts before cutting fabric.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quilting apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>EQ8 — Electric Quilt 8 — gold standard, $239.</li>
              <li>BlockBuster — affordable design tool.</li>
              <li>Quilt Builder — iPhone/iPad free + paid.</li>
              <li>Robert Kaufman — free design tool online.</li>
              <li>Pre-Cut Pal — figure out from pre-cut yardage.</li>
              <li>Free options work for many.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why use software?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>See finished quilt before cutting.</li>
              <li>Try color combos virtually.</li>
              <li>Calculate fabric requirements.</li>
              <li>Save designs for future.</li>
              <li>Share with quilting community.</li>
              <li>Avoid expensive fabric mistakes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free Robert Kaufman</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>RobertKaufman.com/quilt — free.</li>
              <li>Drag-and-drop quilt designer.</li>
              <li>Use Robert Kaufman fabric prints.</li>
              <li>Print pattern after design.</li>
              <li>Calculate yardage automatically.</li>
              <li>Best free starting point.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quilting communities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Modern Quilt Guild.</li>
              <li>Local quilt guilds.</li>
              <li>Facebook quilt groups.</li>
              <li>Pinterest for inspiration.</li>
              <li>Etsy for unique patterns.</li>
              <li>Senior quilt-along events.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube quilters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Missouri Star Quilt Co — most popular.</li>
              <li>Eleanor Burns Quilt in a Day.</li>
              <li>Suzy Quilts.</li>
              <li>Free + countless tutorials.</li>
              <li>Watch on TV via Cast.</li>
              <li>Senior-friendly explanations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sell quilt patterns</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sell PDFs on Etsy — passive income.</li>
              <li>$5–$15 per pattern.</li>
              <li>Sell same pattern unlimited times.</li>
              <li>Once designed, ongoing earnings.</li>
              <li>Many seniors retire to pattern selling.</li>
              <li>Some make significant income.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free tools first</h3>
            <p className="text-sm text-muted-foreground">Before paying $239 for EQ8, try Robert Kaufman&apos;s free online designer. For most senior quilters this free tool plus YouTube tutorials covers all design needs. EQ8 is for serious or professional quilters who design for sale. Combined with Pinterest for inspiration + Missouri Star YouTube for techniques, you have a complete free quilt-design toolkit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
