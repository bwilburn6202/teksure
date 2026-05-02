import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Puzzle } from 'lucide-react';

export default function SeniorJigsawPuzzleApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Jigsaw Puzzle Apps for Seniors — TekSure" description="Digital jigsaw puzzles — Magic Jigsaw Puzzles, JIGS." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Puzzle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Jigsaw Puzzle Apps</h1>
          <p className="text-lg text-muted-foreground">Puzzles without losing pieces.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Magic Jigsaw Puzzles</h2><p>FREE. 30,000+ puzzles. Beautiful art. Senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Jigsaw Puzzle Collection HD</h2><p>FREE. Classic. Calming.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real puzzles</h2><p>Ravensburger 1,000-piece $20. Hold attention for days.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior pieces</h2><p>Larger pieces (300-piece) easier on eyes and hands.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Puzzle table</h2><p>$30 portable mat. Roll up between sessions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cognitive benefit</h2><p>Studies show puzzling slows cognitive decline. Real benefit.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 1 puzzle per month. Brain workout that&apos;s actually fun.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
