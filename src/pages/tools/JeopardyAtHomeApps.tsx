import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

export default function JeopardyAtHomeApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Jeopardy At Home for Seniors | TekSure" description="Watch + play along with Jeopardy. Streaming, apps, and J! Archive for senior fans." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Trophy className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Jeopardy at Home</h1>
          <p className="text-lg text-muted-foreground">Play along. Test your knowledge daily.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch new episodes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local ABC station weekday evening.</li>
              <li>Hulu — usually next-day.</li>
              <li>Pluto TV — free, has Jeopardy channel.</li>
              <li>Jeopardy.com — recent episodes free.</li>
              <li>YouTube Jeopardy clips channel.</li>
              <li>Tournament of Champions specials.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Jeopardy! World Tour app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Official Jeopardy mobile game.</li>
              <li>Free download with in-app purchases.</li>
              <li>Real Jeopardy clues.</li>
              <li>Solo play or multiplayer.</li>
              <li>Multiple game modes.</li>
              <li>Daily challenges.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">J! Archive</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>J-Archive.com — free fan-maintained site.</li>
              <li>Clue archive going back decades.</li>
              <li>Search by topic.</li>
              <li>Print games for in-person Jeopardy nights.</li>
              <li>Used by trivia clubs.</li>
              <li>Free, no ads.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Play with grandkids</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Print J-Archive game.</li>
              <li>One person reads clues.</li>
              <li>Others answer.</li>
              <li>Track scores on paper.</li>
              <li>Surprisingly fun family activity.</li>
              <li>Multi-generational games great.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior Jeopardy clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior centers often have trivia nights.</li>
              <li>Library trivia events.</li>
              <li>Restaurant trivia (Bingo Bango, etc.).</li>
              <li>Online trivia leagues.</li>
              <li>Senior community Jeopardy nights.</li>
              <li>Social + brain exercise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply to be a contestant</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Anyone 18+ can audition.</li>
              <li>Take online test at Jeopardy.com.</li>
              <li>Specific seasons for senior tournaments.</li>
              <li>Many seniors successfully audition.</li>
              <li>Why not? Bucket list opportunity.</li>
              <li>Adult education program tests too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free Pluto TV channel</h3>
            <p className="text-sm text-muted-foreground">Pluto TV (free, no subscription) has a 24/7 Jeopardy channel. Old episodes play on rotation. Great for background while doing other things or for Jeopardy fans who want unlimited. Combined with current episodes on local ABC, you can watch Jeopardy daily without paying for anything. Many seniors love this free entertainment.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
