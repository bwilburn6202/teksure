import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Target } from 'lucide-react';

export default function BocceLawnGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bocce + Lawn Games for Seniors | TekSure" description="Backyard games + senior leagues. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Target className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bocce + Lawn Games</h1>
          <p className="text-lg text-muted-foreground">Backyard fun. Senior leagues.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bocce ball</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Italian outdoor classic.</li>
              <li>Throw 4 balls per team.</li>
              <li>Closest to small &quot;pallino&quot; ball wins.</li>
              <li>$50-100 set on Amazon.</li>
              <li>Play on grass, sand, dirt.</li>
              <li>Senior leagues common.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cornhole</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Toss bean bag at hole.</li>
              <li>Bag in hole = 3 points.</li>
              <li>On board = 1 point.</li>
              <li>$80-150 set.</li>
              <li>Most popular yard game.</li>
              <li>Tournaments + leagues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Horseshoes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Toss horseshoe at stake.</li>
              <li>Around stake = 3 points.</li>
              <li>Closer to stake = 1 point.</li>
              <li>$30-60 set.</li>
              <li>Old-time classic.</li>
              <li>Senior centers love.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Shuffleboard</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Push disc to scoring zone.</li>
              <li>Indoor (table) or outdoor (court).</li>
              <li>Most retirement communities have.</li>
              <li>Hand + eye coordination.</li>
              <li>Easy on body.</li>
              <li>Tournaments common.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Croquet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mallet through wickets.</li>
              <li>Lawn game.</li>
              <li>$100-200 set.</li>
              <li>Civilized + strategic.</li>
              <li>Family backyard tradition.</li>
              <li>Birthday parties.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find leagues</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior centers — frequent leagues.</li>
              <li>Italian-American clubs — bocce.</li>
              <li>VFW + American Legion — leagues.</li>
              <li>City parks + rec departments.</li>
              <li>Nextdoor — neighborhood matches.</li>
              <li>Meetup app — local groups.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior Olympics</h3>
            <p className="text-sm text-muted-foreground">National Senior Games biennial — over 25 sports including bocce, horseshoes, cornhole. State qualifiers. Compete with peers. Lifetime memories. nsga.com. Most cities have monthly senior tournaments. Light competitive + social. Builds friendships. Free or low-cost.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
