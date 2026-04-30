import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volleyball } from 'lucide-react';

const APPS = [
  { name: 'PickleHeads', cost: 'FREE', best: 'Find pickleball courts and players. Most popular pickleball app.', good: 'Best for finding games.' },
  { name: 'TeamReach', cost: 'FREE', best: 'Coordinate group games — used by many pickleball groups.', good: 'For organizing weekly play.' },
  { name: 'Pickleball+ / DUPR', cost: 'FREE', best: 'DUPR ratings (universal pickleball ranking). Track your level.', good: 'For tournament players.' },
  { name: 'PlayYourCourt', cost: 'Free; Pro varies', best: 'Tennis. Find players at your level.', good: 'Best tennis matchmaking.' },
  { name: 'TennisLink (USTA)', cost: 'FREE for USTA members', best: 'Official USTA leagues, tournament finder.', good: 'For tennis league players.' },
  { name: 'SwingVision', cost: '$15/mo', best: 'AI tennis/pickleball video analysis. Place phone courtside, get stats.', good: 'For improvement.' },
  { name: 'Apple Watch with Hole19 Pickleball', cost: 'Watch + app', best: 'Tracks pickleball workout, HR, calories.', good: 'For fitness tracking.' },
];

export default function PickleballTennisApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pickleball & Tennis Apps — Find Players, Track Stats | TekSure" description="Pickleball is the fastest-growing senior sport. Plain-English picks for finding courts, players, and tracking your game." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volleyball className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pickleball & Tennis Apps</h1>
          <p className="text-lg text-muted-foreground">Find courts, players, leagues.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to play</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Local senior centers</strong> — most have FREE pickleball drop-in.</li>
              <li><strong>YMCAs</strong> — affordable; good lessons.</li>
              <li><strong>Park & Rec dept</strong> — free outdoor courts in many cities.</li>
              <li><strong>Country clubs</strong> — pickleball/tennis included with senior membership.</li>
              <li><strong>Pickleball Tournaments App</strong> — find tournaments at any level.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior leagues</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Senior Games</strong> — yearly state and national. (50+ for many; nationals at 50/55+.)</li>
              <li><strong>USTA Senior Tennis</strong> — leagues by age (40s, 50s, 60s, 70s, 80+).</li>
              <li><strong>USAPA Pickleball Senior Open</strong> — annual national.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Health benefit</h3>
            <p className="text-sm text-muted-foreground">Pickleball is the fastest-growing sport in the US, dominated by 55+. Cardio, balance, social, easy on joints. Three doubles games burn 300-500 calories AND give you new friends. Joining a local group changes lives.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
