import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Crown } from 'lucide-react';

export default function ChessAppsForSeniorBeginners() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chess Apps for Senior Beginners | TekSure" description="Learn chess at any age. Beginner-friendly apps for senior players." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Crown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chess for Beginners</h1>
          <p className="text-lg text-muted-foreground">Learn at 60, 70, 80.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Chess.com</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free version great.</li><li>Lessons step-by-step.</li><li>Play AI any level.</li><li>Daily puzzles.</li><li>Match by skill.</li><li>Senior-friendly start.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Lichess.org</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>100% free, no ads.</li><li>Open source.</li><li>All features unlocked.</li><li>Strong AI.</li><li>Senior alternative.</li><li>Great quality.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Learning order</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1. How pieces move.</li><li>2. Basic checkmates.</li><li>3. Opening principles.</li><li>4. Tactics — pins, forks.</li><li>5. Endgame.</li><li>Slow + steady.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior advantage</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Patience pays off.</li><li>Pattern recognition strong.</li><li>Time to study.</li><li>No clock pressure.</li><li>Daily matches by mail.</li><li>Many start in 60s.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">YouTube</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>GothamChess — funny.</li><li>Daniel Naroditsky — clear.</li><li>John Bartholomew beginner.</li><li>Free instruction.</li><li>Watch + practice.</li><li>Pause anytime.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Set up account</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free username.</li><li>Real chess strangers.</li><li>Skill matching automatic.</li><li>Anonymous if want.</li><li>Add friends.</li><li>Track improvement.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Never too late for chess</h3><p className="text-sm text-muted-foreground">Many seniors start chess in 60s and reach intermediate level in 2 years. Free Chess.com or Lichess plus YouTube videos = full education. Brain-changing hobby. Daily 30 minutes makes you a real player. Connect with global community of players any age.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
