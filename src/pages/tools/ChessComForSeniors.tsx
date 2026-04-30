import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Crown } from 'lucide-react';

export default function ChessComForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chess.com for Senior Players | TekSure" description="Play chess against any skill level worldwide. Chess.com app for senior chess lovers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Crown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chess.com</h1>
          <p className="text-lg text-muted-foreground">Play chess. Any skill level. Anywhere.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Chess.com?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Largest chess site — 150 million members.</li>
              <li>Free with optional premium.</li>
              <li>Play vs computer or humans.</li>
              <li>Matched to your skill automatically.</li>
              <li>Lessons + puzzles built-in.</li>
              <li>Works on iPhone, Android, computer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Game speeds</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bullet — 1 minute games (intense).</li>
              <li>Blitz — 3–5 minute games.</li>
              <li>Rapid — 10–30 minutes (most popular).</li>
              <li>Daily — multiple days, take turn anytime.</li>
              <li>Daily great for senior pace.</li>
              <li>No pressure of timer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Computer opponents</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>10 difficulty levels — 200 to 3000 ELO.</li>
              <li>Start at lowest, work up.</li>
              <li>No pressure of human opponent.</li>
              <li>Computer doesn&apos;t mind taking time.</li>
              <li>Take back moves to learn.</li>
              <li>Get hints from analysis.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lessons + improvement</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free lessons for beginners.</li>
              <li>Premium ($14/month) — extensive video courses.</li>
              <li>Daily puzzles (free).</li>
              <li>Game review after each play.</li>
              <li>See your mistakes + better moves.</li>
              <li>Free version is plenty.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lichess — free alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>100% free, no premium tier.</li>
              <li>Open source nonprofit.</li>
              <li>Same features as Chess.com Premium.</li>
              <li>No ads.</li>
              <li>Smaller community than Chess.com.</li>
              <li>Try both, pick your preference.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for senior chess</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Play Daily games — no time pressure.</li>
              <li>Tablet larger than phone — easier on eyes.</li>
              <li>Set difficulty just at your level.</li>
              <li>One game daily = brain exercise.</li>
              <li>Excellent dementia-prevention activity.</li>
              <li>Connect with grandkids who play.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Daily games are best for seniors</h3>
            <p className="text-sm text-muted-foreground">Skip blitz games — they cause stress. Play 2-3 Daily games at once. Make a move when you have time, opponent makes theirs when they do. Games last days. No pressure. Excellent brain exercise. Many seniors find this calmer rhythm aligns with their lifestyle while still enjoying competitive chess.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
