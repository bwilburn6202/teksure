import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

const ANT = [
  { name: 'GE Pro Indoor Amplified', cost: '$30', best: 'Best indoor antenna under $50. 60-mile range. Slim profile.', good: 'Best indoor.' },
  { name: 'Mohu Leaf 50', cost: '$60', best: 'Paper-thin. Sticks to wall. 60-mile range. Reliable.', good: 'Best paper-thin.' },
  { name: 'ClearStream 4MAX', cost: '$140', best: 'Outdoor antenna. 70+ miles. Great for rural / weak signal areas.', good: 'Best outdoor.' },
  { name: 'Antop AT-800SBS', cost: '$130', best: 'Indoor + outdoor. Boosts FM radio too. Senior favorite.', good: 'Best multi-purpose.' },
  { name: 'Channel Master CM4228HD', cost: '$110', best: 'Pure outdoor, attic-mountable. 80-mile professional range.', good: 'Best for serious distance.' },
];

export default function AntennaPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TV Antenna Picks — Free Local Channels | TekSure" description="Get NBC, CBS, ABC, PBS for free with $30 antenna. Plain-English picks for indoor + outdoor antennas and signal range." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TV Antenna Picks</h1>
          <p className="text-lg text-muted-foreground">Get 30-50 channels FREE.</p>
        </div>

        <div className="space-y-3 mb-6">
          {ANT.map(a => (
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
            <h2 className="font-bold text-xl mb-3">What you get free</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NBC, CBS, ABC, FOX, PBS — all major networks.</li>
              <li>Local news + weather.</li>
              <li>Major sports — NFL games, college, MLB local broadcasts.</li>
              <li>Most awards shows, presidential debates.</li>
              <li>20-50 sub-channels (METV, GRIT, Bounce, Antenna TV) — classic shows.</li>
              <li>Better picture than cable in most cases (uncompressed).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Check signal in your area</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>antennaweb.org</strong> — free FCC tool.</li>
              <li>Enter your zip code + house orientation.</li>
              <li>Shows which channels you can get + which antenna type needed.</li>
              <li>Color-coded (green = easy, yellow = medium, red = need outdoor).</li>
              <li>Order matching antenna.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Higher = better. Top floor or attic best.</li>
              <li>Near a window facing broadcast towers (towers usually city center).</li>
              <li>Away from metal (radiators, blinds, refrigerator).</li>
              <li>Run "channel scan" on TV after plugging in.</li>
              <li>Free apps: <strong>NextPVR / TabloTV</strong> let you DVR free TV.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Combine with streaming</h3>
            <p className="text-sm text-muted-foreground">Antenna for live news + sports + local + free reruns. Add ONE streaming service ($10-15/mo) for new shows. Combined cost ~$10-15/mo vs $150 cable. Saves $1,500+/year.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
