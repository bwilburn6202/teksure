import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Pick {
  name: string;
  cost: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  link: string;
}

const PICKS: Pick[] = [
  {
    name: 'Wordle (NYT)',
    cost: 'Free',
    bestFor: 'Five minutes a day. One puzzle, one guess at a time, then you stop.',
    pros: ['Truly free — one puzzle per day in any browser, no account needed.', 'Short and finite. No infinite scroll, no notifications.', 'Great as a daily text chat with family ("got it in 3!").'],
    cons: ['Only one puzzle a day unless you pay for NYT Games.'],
    link: 'https://www.nytimes.com/games/wordle/index.html',
  },
  {
    name: 'NYT Spelling Bee',
    cost: 'Free preview, full game with NYT Games ($5/mo or $40/yr)',
    bestFor: 'Word lovers who want a meatier daily puzzle than Wordle.',
    pros: ['Fresh letters every day — find as many words as you can.', 'Free version lets you play the first few words of the day.', 'NYT Games bundle also unlocks Crossword, Connections, Strands.'],
    cons: ['You hit a paywall partway through if you do not subscribe.'],
    link: 'https://www.nytimes.com/puzzles/spelling-bee',
  },
  {
    name: 'CodyCross',
    cost: 'Free with ads, optional in-app coin packs',
    bestFor: 'Crossword fans who want themed puzzles on a phone or tablet.',
    pros: ['Hundreds of themed crossword packs — Planet Earth, Inventions, more.', 'Plays well on iPad in landscape mode.', 'No subscription required to keep playing.'],
    cons: ['Ads between puzzles unless you buy the ad-free upgrade.'],
    link: 'https://www.fanatee.com/games/codycross/',
  },
  {
    name: 'Lumosity',
    cost: 'Free limited (3 games/day) or $13/mo / $80/yr',
    bestFor: 'People who want a structured "daily workout" of mini-games.',
    pros: ['Daily set of 3-5 short games covering memory, attention, math.', 'Tracks progress over time with charts.', 'Free tier gives you a real taste before paying.'],
    cons: ['Got a $2M FTC fine in 2016 for overstating brain-health claims.', 'Subscription is pricey for what is, honestly, a set of mini-games.'],
    link: 'https://www.lumosity.com',
  },
  {
    name: 'Elevate',
    cost: 'Free limited or $13/mo / $40/yr',
    bestFor: 'Sharpening reading, writing, math, and vocabulary.',
    pros: ['Strong focus on language and communication, not abstract puzzles.', 'Apple App of the Year — polished, calm interface.', 'Daily 10-15 minute session feels achievable.'],
    cons: ['Free tier is very limited (3 games/day).', 'Some games have a learning curve.'],
    link: 'https://elevateapp.com',
  },
  {
    name: 'Peak',
    cost: 'Free with ads or Peak Pro $5/mo / $35/yr',
    bestFor: 'Variety. 45+ mini-games across memory, language, problem-solving.',
    pros: ['Bigger free tier than Lumosity or Elevate.', 'Cheerful, colorful design — fun rather than clinical.', 'Family-tournament feature if multiple people in the house play.'],
    cons: ['Free version shows ads.', 'Some games are timed, which can frustrate.'],
    link: 'https://www.peak.net',
  },
  {
    name: 'Sudoku.com / classic crosswords',
    cost: 'Free (Sudoku.com app, AARP daily crossword, NYT Mini)',
    bestFor: 'Old-school puzzlers who do not want a subscription or "training program".',
    pros: ['Sudoku.com app is free with ads, 4 difficulty levels, daily challenge.', 'AARP runs a free daily crossword at games.aarp.org.', 'NYT Mini Crossword is free every day in a browser — 5 minutes, done.'],
    cons: ['No progress tracking or fancy charts — but that is the point.'],
    link: 'https://sudoku.com',
  },
];

const RELATED = [
  { to: '/tools/library-power-pack', title: 'Library Power Pack', blurb: 'Free books, audiobooks, and learning from your library card.' },
  { to: '/tools/senior-friendly-apps', title: 'Senior-Friendly Apps', blurb: 'Calm, large-text apps worth keeping on your phone.' },
  { to: '/tools/podcast-starter', title: 'Podcast Starter', blurb: 'Free listening that keeps your mind engaged on walks.' },
];

export default function BrainGamesApps() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <SEOHead
        title="Brain Games and Cognitive Apps for Seniors"
        description="Honest comparison of brain games — Wordle, NYT Spelling Bee, CodyCross, Lumosity, Elevate, Peak, Sudoku.com. Free vs paid. What helps, what hypes."
        path="/tools/brain-games-apps"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-violet-50 via-background to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-violet-500/10 rounded-full">
                <Brain className="h-8 w-8 text-violet-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Brain Games and Cognitive Apps for Seniors</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Seven honest picks — from free Wordle to paid Lumosity. Fun first, hype last.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Brain Games & Cognitive Apps' }]} />

          <Card className="border-border bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-2 text-amber-900 dark:text-amber-100">Scam alert: "doctor-recommended brain games" cold callers</p>
                <p className="text-xs text-amber-900/80 dark:text-amber-100/80">
                  If someone calls, emails, or texts claiming to offer "doctor-recommended brain training to prevent Alzheimer's" or "Medicare-covered cognitive screening kits" — hang up. No legitimate brain-game company cold-calls seniors. The FTC fined Lumosity $2 million in 2016 for overpromising dementia prevention. Real doctors recommend the apps below by name; they do not sell them through phone calls.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Honest note: brain games are FUN, not magic</p>
              <p className="text-xs text-muted-foreground">
                Scientific evidence that brain-training apps prevent dementia is mixed at best. The FTC and large research reviews say there is no strong proof these apps slow cognitive decline. What IS proven to help: sleep, walking, socializing, treating high blood pressure, and learning genuinely new skills (a language, an instrument, a craft). Pick a brain game because it is enjoyable — not because it is medicine. A daily Wordle with your grandkid beats a $130/yr subscription you stop opening.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 mb-6">
            {(showAll ? PICKS : PICKS.slice(0, 3)).map(p => (
              <Card key={p.name} className="border-border">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                    <p className="font-semibold text-base">{p.name}</p>
                    <Badge variant="outline">{p.cost}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3"><strong>Best for:</strong> {p.bestFor}</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</p>
                      <ul className="space-y-0.5">{p.pros.map((pr, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{pr}</span></li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">{p.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}</ul>
                    </div>
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Visit / sign up <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
            {!showAll && <Button variant="outline" onClick={() => setShowAll(true)}>Show all 7 picks</Button>}
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {RELATED.map(r => (
                <Link key={r.to} to={r.to} className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                  <p className="font-medium text-sm">{r.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{r.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: pair a daily puzzle with a phone call. Doing Wordle and texting your score to a friend gives you the brain bump AND the social bump — and the social bump is the one with real evidence behind it.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
