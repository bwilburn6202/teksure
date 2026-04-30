import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

export default function TriviaAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Trivia Apps for Seniors | TekSure" description="Best trivia apps for senior players. History, music, geography categories." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HelpCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Trivia Apps</h1>
          <p className="text-lg text-muted-foreground">Brain exercise. Fun. Free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trivia Crack</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most popular trivia app.</li>
              <li>Free with optional premium ($3/month).</li>
              <li>Play against friends or strangers.</li>
              <li>Categories: history, science, art, sports, geography.</li>
              <li>Quick rounds — 2-3 minutes.</li>
              <li>Chat with opponents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">QuizUp</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>500+ topics.</li>
              <li>Niche topics — Beatles, Cold War, etc.</li>
              <li>Free with ads.</li>
              <li>Match against people same skill level.</li>
              <li>Senior-friendly categories.</li>
              <li>Play 1-on-1 trivia matches.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Jeopardy! World Tour</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Official Jeopardy app.</li>
              <li>Real Jeopardy clues.</li>
              <li>Multiplayer + solo modes.</li>
              <li>Free, with in-app purchases.</li>
              <li>For Jeopardy fans.</li>
              <li>Various game modes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SongPop</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Music trivia — name that tune.</li>
              <li>Multiple decades — 50s, 60s, 70s, 80s.</li>
              <li>Hear song clip, identify it.</li>
              <li>Free + premium options.</li>
              <li>Senior-loved decades available.</li>
              <li>Especially fun with grandkids who know newer music.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Heads Up!</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Made famous by Ellen DeGeneres.</li>
              <li>$0.99 — no subscription.</li>
              <li>Hold phone on forehead.</li>
              <li>Friends give clues.</li>
              <li>Guess the word.</li>
              <li>Hilarious party game with grandkids.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Geo trivia</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Worldle — daily country guessing game.</li>
              <li>GeoGuessr — guess location from photos.</li>
              <li>Sporcle — quiz creation site.</li>
              <li>Many free.</li>
              <li>Travel + history themed.</li>
              <li>Brain exercise + learning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Trivia Crack with grandkids</h3>
            <p className="text-sm text-muted-foreground">Great way to bond across generations. Trivia Crack lets you play with grandkids who live far away. Each turn lasts a minute. Over a week you exchange dozens of trivia rounds and chat. They&apos;re impressed at your knowledge of history; you&apos;re impressed at theirs of pop culture. Free relationship-building app.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
