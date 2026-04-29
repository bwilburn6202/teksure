import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors } from 'lucide-react';

export default function CrochetForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Crochet for Seniors | TekSure" description="Start crochet at any age. Plain-English beginner guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scissors className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Crochet for Seniors</h1>
          <p className="text-lg text-muted-foreground">Easier than knitting. One hook, one yarn.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why crochet?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One hook (knitting = 2 needles).</li>
              <li>Easier to fix mistakes.</li>
              <li>Hand exercise for arthritis.</li>
              <li>Calming + meditative.</li>
              <li>Make gifts for family.</li>
              <li>Portable hobby.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Starter kit ($25)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Size H/8 (5mm) hook</strong> — universal beginner size.</li>
              <li><strong>Worsted weight yarn</strong> — light color (see stitches).</li>
              <li><strong>Scissors + yarn needle</strong>.</li>
              <li><strong>Stitch markers</strong>.</li>
              <li>Joann, Hobby Lobby, Michaels — kits ready.</li>
              <li>Amazon — beginner crochet kit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Learn online (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YouTube</strong> — Bella Coco, Sarah Maker. Best.</li>
              <li><strong>Sheep &amp; Stitch</strong> — written + video.</li>
              <li><strong>Ravelry.com</strong> — patterns + community.</li>
              <li><strong>AllFreeCrochet.com</strong> — free patterns.</li>
              <li><strong>Skillshare</strong> — paid but trial free.</li>
              <li>Library — &quot;Crochet for Dummies&quot; book.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First projects</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dishcloth</strong> — single-stitch practice.</li>
              <li><strong>Scarf</strong> — chain + single crochet.</li>
              <li><strong>Granny square</strong> — joins make blanket.</li>
              <li><strong>Hat</strong> — round work intro.</li>
              <li><strong>Baby blanket</strong> — large gift.</li>
              <li>Don&apos;t start with: lace, complex toys.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior comfort tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ergonomic hooks</strong> — Clover Amour, Furls.</li>
              <li><strong>Larger hook</strong> — easier on hands.</li>
              <li><strong>Good light</strong> — daylight LED lamp.</li>
              <li><strong>Magnifier</strong> — for fine work.</li>
              <li>Stretch hands every 30 min.</li>
              <li>Stop if pain — never push through.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Charity crochet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Project Linus — blankets for kids in need.</li>
              <li>Knitted Knockers — post-mastectomy.</li>
              <li>Hats for newborns at hospitals.</li>
              <li>Warm Up America — squares for blankets.</li>
              <li>Local senior centers — crochet circles.</li>
              <li>Purpose + community.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Crochet groups</h3>
            <p className="text-sm text-muted-foreground">Most libraries have crochet groups — free + welcoming. Yarn shops host weekly &quot;stitch &apos;n bitch&quot; sessions. Senior centers + churches. Online — Ravelry forums. Crochet teaches patience, builds finger strength, makes friends.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
