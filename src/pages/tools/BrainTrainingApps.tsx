import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

const APPS = [
  { name: 'NYT Games (Connections, Spelling Bee, Crossword)', cost: '$5/mo or free with subscription', best: 'Best brain games on the planet. Real, witty, hand-crafted by humans. Plays in 5-15 minutes.', good: 'Wordle is free.' },
  { name: 'Lumosity', cost: '$12/mo or $60/year, free trial', best: 'Most famous brain app. Big variety of games for memory, attention, problem-solving.', good: 'Studies show it helps short-term scores; transfer to real life is debated.' },
  { name: 'BrainHQ (Posit Science)', cost: '$14/mo or $96/year', best: 'Backed by the most clinical research. Designed by neuroscientists. Used in real Alzheimer-prevention studies.', good: 'Free trial. Worth it if you take cognitive health seriously.' },
  { name: 'Elevate', cost: 'Free with limits, $5-12/mo Pro', best: 'Reading, writing, math, vocabulary. More like a personal tutor than puzzle games.', good: 'Strong free tier.' },
  { name: 'Wordscapes / Wordle / Words With Friends', cost: 'Free', best: 'Word puzzles. Light cognitive workout.', good: 'Free, fun, social options.' },
  { name: 'Apple News+ Puzzles', cost: 'Free with News+ subscription', best: 'Crossword, Sudoku, mini-crossword built into Apple News.', good: 'Bonus if you already pay for News+.' },
];

export default function BrainTrainingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Brain Training Apps — Lumosity, BrainHQ, NYT Games | TekSure" description="Keep your mind sharp. Plain-English picks for brain training apps backed by research — and honest about what they can and can\'t do." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Brain Training Apps</h1>
          <p className="text-lg text-muted-foreground">10-15 minutes a day. Real research backs some of these.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Honest take</h2>
            <p className="text-sm">Brain games make you better at the games. Whether they prevent dementia is debated. What\'s NOT debated:</p>
            <ul className="text-sm list-disc pl-5 mt-2">
              <li><strong>Physical exercise</strong> is the #1 dementia-prevention activity, full stop.</li>
              <li><strong>Social engagement</strong> (talking to people) is #2.</li>
              <li><strong>Sleep</strong> matters more than puzzles.</li>
              <li><strong>Learning something genuinely new</strong> (a language, an instrument) outperforms apps.</li>
            </ul>
            <p className="text-sm mt-2">That said — brain games are fun, low-stakes, and probably help. Pick what you enjoy.</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free options that work great</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Wordle</strong> — free at nytimes.com.</li>
              <li><strong>Connections</strong> — free at nytimes.com.</li>
              <li><strong>Sudoku.com</strong> — free, ad-supported.</li>
              <li><strong>Chess.com</strong> — free games against the computer or real opponents.</li>
              <li><strong>Words With Friends</strong> — free, social.</li>
              <li><strong>Library Hoopla</strong> — borrow brain-training audiobooks free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Things that beat any app</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Daily 30-minute walk.</li>
              <li>Phone call with a friend.</li>
              <li>Cooking from a new recipe.</li>
              <li>Learning a language with Duolingo (free, fun).</li>
              <li>Volunteering or working part-time.</li>
              <li>Joining a book club.</li>
              <li>Picking up an instrument again.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
