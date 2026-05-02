import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Puzzle } from 'lucide-react';

export default function SeniorJigsawApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Jigsaw Puzzle Apps — Senior Guide" description="Free jigsaw puzzles on your tablet or phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Puzzle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Jigsaw Puzzles</h1>
          <p className="text-lg text-muted-foreground">Puzzles without lost pieces.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Magic Jigsaw Puzzles</h2><p>Free. Thousands of puzzles. Adjustable piece counts from 9-1000.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Jigsaw Puzzle by Vista</h2><p>Free. New puzzles daily. Save progress and resume.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Use a tablet</h2><p>Bigger screen makes pieces easier to see. iPad Mini or any tablet works well.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Pinch to zoom</h2><p>Zoom in to see piece edges. Same as physical puzzles, but easier on eyes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Daily puzzles</h2><p>Many apps offer a free puzzle of the day. Beautiful photos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip ads</h2><p>$5-15 per year removes ads. Worth it if you puzzle daily.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Working puzzles helps with cognitive health and reduces stress. A good habit at any age.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
