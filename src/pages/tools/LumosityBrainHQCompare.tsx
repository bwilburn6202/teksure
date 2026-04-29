import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function LumosityBrainHQCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Lumosity vs BrainHQ Brain Training for Seniors | TekSure" description="Brain training apps compared for seniors. Lumosity, BrainHQ, and free alternatives explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Brain Training Apps</h1>
          <p className="text-lg text-muted-foreground">Keep your mind sharp. Compare top options.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Do brain games really work?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Honest answer: research is mixed.</li>
              <li>You get better at the specific games you play.</li>
              <li>Whether that transfers to daily life — debated.</li>
              <li>But: mental engagement is genuinely healthy.</li>
              <li>Staying curious + challenged benefits brain.</li>
              <li>Any mental activity beats none.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lumosity</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most popular brain training app.</li>
              <li>Free trial — limited games.</li>
              <li>Premium: $11.99/month or $59.99/year.</li>
              <li>Games covering memory, attention, speed.</li>
              <li>Tracks performance over time.</li>
              <li>Good for: variety seekers, game-based learning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">BrainHQ</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Made by Posit Science — backed by research.</li>
              <li>More science-based than Lumosity.</li>
              <li>$14/month or $96/year.</li>
              <li>Exercises target specific brain functions.</li>
              <li>Popular with doctors + rehab programs.</li>
              <li>Good for: serious brain health focus.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NYT Crossword — first mini puzzle free daily.</li>
              <li>Wordle — one word puzzle per day (free).</li>
              <li>Sudoku apps — many free versions.</li>
              <li>Chess apps — classic brain challenge.</li>
              <li>Duolingo — learning a language is great brain exercise.</li>
              <li>YouTube puzzles + trivia channels.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Elevate app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Focuses on language and math skills.</li>
              <li>Free version available — 3 games/day.</li>
              <li>Premium: $4.99/month.</li>
              <li>Good for: vocabulary, reading comprehension, math.</li>
              <li>Apple App of the Year winner.</li>
              <li>Feels more like skill-building than gaming.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best overall approach</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mix of activities beats any single app.</li>
              <li>Social activity (talking, games with others) — very powerful.</li>
              <li>Physical exercise + brain health linked strongly.</li>
              <li>Learn something new — instrument, language, craft.</li>
              <li>Sleep well — brain health linked to sleep.</li>
              <li>Apps supplement, not replace, real mental engagement.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try free first</h3>
            <p className="text-sm text-muted-foreground">Before paying for Lumosity or BrainHQ, try Wordle, a crossword, and Duolingo for a week. If you want more structured brain training after that, BrainHQ has the strongest research behind it. If you just want fun games that keep you sharp, Lumosity&apos;s free tier covers the basics. The daily habit matters more than which app you choose.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
