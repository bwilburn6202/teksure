import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Type } from 'lucide-react';

const APPS = [
  { name: 'Words With Friends 2', cost: 'FREE / Pro $2/mo', best: 'Most popular Scrabble alternative. Senior-favorite.', good: 'Best with friends.' },
  { name: 'Scrabble GO', cost: 'FREE', best: 'Official Scrabble app. Has ads.', good: 'Best official.' },
  { name: 'Wordfeud', cost: 'FREE', best: 'Like Scrabble, simpler design.', good: 'Best simple.' },
  { name: 'Wordscapes', cost: 'FREE', best: 'Solo word puzzles. Crossword + anagram.', good: 'Best solo.' },
  { name: 'NYT Spelling Bee', cost: '$5/mo', best: 'Daily word puzzle. Senior addiction.', good: 'Best daily.' },
];

export default function ScrabbleAlternatives() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Scrabble + Word Game Alternatives | TekSure" description="Word games for seniors. Plain-English picks for word lovers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Type className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Word Games</h1>
          <p className="text-lg text-muted-foreground">Brain food. Connect with family.</p>
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
            <h2 className="font-bold text-xl mb-3">Words With Friends = senior favorite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Like Scrabble + easier rules.</li>
              <li>Play with family/friends remote.</li>
              <li>Make moves whenever — turn-based.</li>
              <li>Gentle competitive.</li>
              <li>Family connection across distances.</li>
              <li>Free + many seniors play.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">NYT word games</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Wordle</strong> — daily 5-letter word. FREE.</li>
              <li><strong>Spelling Bee</strong> — daily anagrams.</li>
              <li><strong>Connections</strong> — categorize words.</li>
              <li><strong>Mini Crossword</strong> — daily quick puzzle.</li>
              <li><strong>Crossword</strong> — full daily puzzle ($5/mo).</li>
              <li>Senior daily ritual for many.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Solo word games</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Wordscapes</strong> — anagram crossword combo.</li>
              <li><strong>Word Search Pro</strong> — find words in grid.</li>
              <li><strong>Letterzap</strong> — high-paced anagrams.</li>
              <li><strong>SpellTower</strong> — strategic word + tower.</li>
              <li><strong>Bonza Word Puzzle</strong> — assemble crossword.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Brain games sweet spot</h3>
            <p className="text-sm text-muted-foreground">Word games + bridge + chess + sudoku = best brain games for seniors. Mix variety. Daily 15-30 min total. Brain stays sharp. Cheap or free. Apps make solo play fun. Group play (Words With Friends) connects family.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
