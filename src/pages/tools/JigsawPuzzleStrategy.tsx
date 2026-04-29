import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Puzzle } from 'lucide-react';

export default function JigsawPuzzleStrategy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Jigsaw Puzzle Strategy for Seniors | TekSure" description="Better at jigsaw puzzles. Plain-English brain workout guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Puzzle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Jigsaw Puzzle Strategy</h1>
          <p className="text-lg text-muted-foreground">Calming. Brain-boosting. Senior favorite.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior favorite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Calming + meditative.</li>
              <li>Improves visual memory.</li>
              <li>Pattern recognition.</li>
              <li>No timer — go at your pace.</li>
              <li>Social if doing together.</li>
              <li>Display when finished.</li>
              <li>Cheap hobby.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best brands</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ravensburger</strong> — gold standard. Premium pieces.</li>
              <li><strong>Cobble Hill</strong> — quality + reasonable price.</li>
              <li><strong>White Mountain</strong> — Americana themes.</li>
              <li><strong>Buffalo Games</strong> — wide selection.</li>
              <li><strong>Springbok</strong> — challenging.</li>
              <li>Avoid cheap puzzles — pieces don&apos;t fit well.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly puzzles</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>500 pieces</strong> — manageable.</li>
              <li><strong>1,000 pieces</strong> — classic challenge.</li>
              <li><strong>Large piece puzzles</strong> — for arthritis.</li>
              <li><strong>200-300 pieces</strong> — for limited time / mobility.</li>
              <li>Avoid 2,000+ unless ready for weeks.</li>
              <li>Themes: nature, art, classic Americana.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Strategy tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sort edges first.</li>
              <li>Build edge frame.</li>
              <li>Sort by color groups.</li>
              <li>Distinct features (faces, signs) first.</li>
              <li>Backgrounds last (hardest).</li>
              <li>Good lighting essential.</li>
              <li>Multiple sessions — don&apos;t marathon.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior accessories</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Puzzle table</strong> — folding, $50-200.</li>
              <li><strong>Sorting trays</strong> — $15.</li>
              <li><strong>Puzzle mat / roll-up</strong> — pause + store $20.</li>
              <li><strong>Magnifying lamp</strong> — easier seeing.</li>
              <li><strong>Anti-fatigue mat</strong> if standing.</li>
              <li>Comfortable chair.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save + share</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Glue + frame favorites.</li>
              <li>Modge Podge $8 for puzzle glue.</li>
              <li>Donate to senior centers.</li>
              <li>Trade with friends.</li>
              <li>Estate sales = many cheap puzzles.</li>
              <li>Library puzzle exchanges.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Digital puzzles</h3>
            <p className="text-sm text-muted-foreground"><strong>Jigsaw Puzzles Pro</strong> + <strong>Magic Jigsaw</strong> apps — endless puzzles on iPad. No mess. Save in progress. Adjust difficulty (50-1000 pieces). Convert your photos to puzzles. Senior favorites for travel + small spaces.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
