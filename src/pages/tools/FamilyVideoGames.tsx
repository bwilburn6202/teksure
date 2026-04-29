import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2 } from 'lucide-react';

const GAMES = [
  { name: 'Mario Kart 8 (Switch)', cost: '$50 game', best: 'Family multiplayer king. 4-player local. Easy controls. Senior-friendly.', good: 'Best overall.' },
  { name: 'Animal Crossing (Switch)', cost: '$50', best: 'Visit each other&apos;s islands. Calm, no stress. Great with grandkids.', good: 'Best calm.' },
  { name: 'Minecraft (any platform)', cost: '$30', best: 'Build worlds together. Cross-play across iPhone, Switch, Xbox, PC.', good: 'Best creative.' },
  { name: 'Stardew Valley', cost: '$15', best: 'Farm + village. Co-op. Endless. Multi-generation favorite.', good: 'Best for relaxing.' },
  { name: 'Wii Sports / Switch Sports', cost: '$50', best: 'Bowling, tennis. Wave the controller — no buttons memorized.', good: 'Best active.' },
  { name: 'Lego games (Star Wars, Marvel, etc.)', cost: '$30-60', best: 'Co-op story. Simple. Funny.', good: 'Best with school-age.' },
];

export default function FamilyVideoGames() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Video Games for Grandparents | TekSure" description="Mario Kart, Animal Crossing, Minecraft. Plain-English picks for video games grandparents can play with grandkids." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gamepad2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Video Games</h1>
          <p className="text-lg text-muted-foreground">Best multi-generation gift.</p>
        </div>

        <div className="space-y-3 mb-6">
          {GAMES.map(g => (
            <Card key={g.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{g.name}</h3>
                  <span className="text-sm font-semibold text-primary">{g.cost}</span>
                </div>
                <p className="text-sm">{g.best}</p>
                <p className="text-sm text-muted-foreground">{g.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Switch is the senior pick</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plug-and-play — no big setup.</li>
              <li>Family games (no shooting, no toxic chat).</li>
              <li>Local + online play.</li>
              <li>Battery 4-9 hours portable.</li>
              <li>Bigger buttons than phone gaming.</li>
              <li>Works with TV.</li>
              <li>$300 console, used can be $200.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online play with distant grandkids</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Same console family (both Switch, both Xbox, etc.).</li>
              <li>Same game.</li>
              <li>Add each other as Friend in console settings.</li>
              <li>Use FaceTime / Discord on phone for voice (better than Switch chat).</li>
              <li>Schedule "Game night" weekly.</li>
              <li>30-60 min sessions ideal.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Let them teach you</h3>
            <p className="text-sm text-muted-foreground">Best part — kids LOVE being the expert. Ask "show me how this works" → instant 30-min real conversation. Worth more than the game itself. Listen + ask questions. Be amazed by their world.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
