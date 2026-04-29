import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Puzzle } from 'lucide-react';

const APPS = [
  { name: 'Magic Jigsaw Puzzles', cost: 'FREE (with ads) / $5/mo Premium', best: '50,000+ puzzles, daily new ones. Most popular jigsaw app on iPad.', good: 'Best overall.' },
  { name: 'Jigsaw Puzzle Daily', cost: 'FREE', best: 'New puzzle every day. Beautiful photo selection. Gentle on the eyes.', good: 'Best free pick.' },
  { name: 'Jigsaw Puzzle Collection HD', cost: 'FREE', best: 'Big piece options for low vision. Adjustable difficulty.', good: 'Best for low vision.' },
  { name: 'Microsoft Jigsaw', cost: 'FREE', best: 'Available on Windows PC. Built-in to many computers.', good: 'Best for desktop.' },
  { name: 'Apple Arcade — Tetris Beat / Puzzle 21', cost: '$7/mo (Apple Arcade)', best: 'No ads, premium quality. Wide variety of puzzles.', good: 'Best ad-free.' },
];

export default function JigsawPuzzleApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Jigsaw Puzzle Apps for Seniors | TekSure" description="Beautiful digital jigsaw puzzles on your iPad. Plain-English picks for free and paid jigsaw apps that don&apos;t hurt your eyes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Puzzle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Jigsaw Puzzle Apps</h1>
          <p className="text-lg text-muted-foreground">No missing pieces. No card-table real estate.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why digital jigsaw</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No card table set up for weeks.</li>
              <li>Cat can&apos;t knock pieces off.</li>
              <li>No missing piece in box.</li>
              <li>Adjust difficulty — 50, 100, 500, 2,000 pieces.</li>
              <li>Pause anytime. Resume tomorrow.</li>
              <li>Free or cheap. New images endlessly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for low vision</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick "large piece" mode (50-150 pieces).</li>
              <li>iPad bigger than phone — easier on eyes.</li>
              <li>Settings → Display → bump iPad text size, brightness up.</li>
              <li>Magic Jigsaw has "rotation off" mode — pieces never need rotating.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Other "calm" puzzle apps to try</h3>
            <p className="text-sm text-muted-foreground"><strong>Two Dots</strong> — connect colored dots. Relaxing. <strong>Wordscapes</strong> — word search/crossword hybrid. <strong>NYT Games</strong> — Wordle, Spelling Bee, Connections, Crossword ($5/mo). <strong>I Love Hue</strong> — sort colors. Beautiful, calming, no time pressure.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
