import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dice5, ChevronRight, ExternalLink } from 'lucide-react';

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
    name: 'Chess.com',
    cost: 'Free (paid tiers from 5 USD/mo)',
    bestFor: 'Chess with grandkids or distant friends. Largest chess community in the world.',
    pros: [
      'Free account covers unlimited play and daily puzzles.',
      'Built-in lessons and a coach mode that explains every move.',
      'Big text, clear pieces, and a play-vs-computer mode for practice.',
    ],
    cons: ['Free tier shows ads.', 'Paid tier needed for unlimited tactics training.'],
    link: 'https://www.chess.com',
  },
  {
    name: 'Lichess.org',
    cost: 'Free, no ads, ever',
    bestFor: 'Chess without a single ad or pop-up. Volunteer-funded, open source.',
    pros: [
      'Every feature is free for everyone — no paid tier.',
      'Zero ads, zero tracking. A nonprofit project.',
      'Plays well on older phones, slow internet, and has a great puzzle trainer.',
    ],
    cons: ['Smaller community than Chess.com.', 'Less polished tutorial flow for beginners.'],
    link: 'https://lichess.org',
  },
  {
    name: 'Tabletopia',
    cost: 'Free for guests, 5 USD/mo for premium',
    bestFor: 'Turn-based digital board games. Over 1,800 titles including classics.',
    pros: [
      'You and family can take turns over days, not all at once.',
      'Huge library (Carcassonne, Scythe, classic card games), plays in any browser.',
    ],
    cons: ['Premium needed for many newer titles.', 'Learning curve on the 3D table view.'],
    link: 'https://tabletopia.com',
  },
  {
    name: 'Words With Friends 2',
    cost: 'Free with ads (Pro about 10 USD/mo)',
    bestFor: 'A friendly Scrabble-style word game. Play one move when you have a minute.',
    pros: [
      'Designed for asynchronous play — make a move, come back tomorrow.',
      'Built-in dictionary, runs on iPhone, Android, tablet, or Facebook.',
    ],
    cons: ['Free version is heavy on ads.', 'Not the official Scrabble brand.'],
    link: 'https://www.zynga.com/games/words-with-friends-2',
  },
  {
    name: 'Bridge Base Online (BBO)',
    cost: 'Free',
    bestFor: 'Bridge players. The largest online bridge club in the world.',
    pros: [
      'Free for almost everything — casual tables, tournaments, lessons.',
      'Big senior community, friendly to new players.',
      'Robot partners available when you cannot find a fourth, and owned by the ACBL.',
    ],
    cons: ['Older interface that takes a session to learn.', 'Some special tournaments have a small entry fee.'],
    link: 'https://www.bridgebase.com',
  },
  {
    name: 'Pogo Games',
    cost: 'Free with ads (Club Pogo about 7 USD/mo)',
    bestFor: 'Hearts, Spades, Solitaire, Canasta, and other card classics. Senior-friendly.',
    pros: [
      'Free version covers all the classic card games, with friendly chat lobbies.',
      'Big buttons, clear cards. Run by EA, around since 1999 — long track record.',
    ],
    cons: ['Ads on the free tier can feel busy.', 'Browser-based, no mobile app for most games.'],
    link: 'https://www.pogo.com',
  },
  {
    name: 'TableTop Simulator',
    cost: '20 USD one-time on Steam (paid)',
    bestFor: 'Board game enthusiasts who want a virtual game table that fits any rules.',
    pros: [
      'One-time purchase — no subscription.',
      'Thousands of free user-made boards: Catan, Risk, Monopoly.',
      'Voice chat built in for game nights with family.',
    ],
    cons: ['Needs a Windows, Mac, or Linux computer (no mobile).', 'Bigger learning curve than the others.'],
    link: 'https://www.tabletopsimulator.com',
  },
];

export default function BoardGamesOnline() {
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <SEOHead
        title="Board Games Online with Family"
        description="Seven ways to play board and card games online with family — Chess.com, Lichess, Tabletopia, Words With Friends, Bridge Base, Pogo, and TableTop Simulator."
        path="/tools/board-games-online"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-amber-50 via-background to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-amber-500/10 rounded-full"><Dice5 className="h-8 w-8 text-amber-600" /></div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Board Games Online with Family</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Seven picks for playing chess, cards, and board games online with grandkids and far-away friends. Most are free.
            </p>
          </div>
        </section>
        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Board Games Online' }]} />
          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Start with the free options</p>
              <p className="text-xs text-muted-foreground">
                Lichess and Bridge Base Online are 100% free and ad-free. Chess.com and Pogo are free with ads. Try those first — you may find everything you need at no cost.
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
                      <ul className="space-y-0.5">
                        {p.pros.map((pr, i) => <li key={i} className="text-xs flex gap-1"><span className="text-green-600">+</span><span>{pr}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</p>
                      <ul className="space-y-0.5">
                        {p.cons.map((c, i) => <li key={i} className="text-xs flex gap-1"><span className="text-red-600">−</span><span>{c}</span></li>)}
                      </ul>
                    </div>
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">Visit / sign up <ExternalLink className="h-3 w-3" /></a>
                </CardContent>
              </Card>
            ))}
            {!showAll && <Button variant="outline" onClick={() => setShowAll(true)}>Show all 7 picks</Button>}
          </div>
          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Pair it with a video call</p>
              <p className="text-xs text-muted-foreground">
                The fun is the conversation, not the game. Open FaceTime, Zoom, or Google Meet on your phone, then play the game on a separate device or browser tab. It feels like sitting across the kitchen table.
              </p>
            </CardContent>
          </Card>
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/grandparent-device-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Grandparent Device Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">Get the tablet ready for game night.</p>
              </Link>
              <Link to="/tools/video-call-etiquette" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Video Call Etiquette</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair a call with the game.</p>
              </Link>
              <Link to="/tools/podcast-starter" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Podcast Starter</p>
                <p className="text-xs text-muted-foreground mt-0.5">Listen to something between games.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: pick one game and play it weekly with the same person. The routine matters more than variety.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
