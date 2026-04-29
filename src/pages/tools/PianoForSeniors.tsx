import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function PianoForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Piano for Senior Beginners | TekSure" description="Learn piano in retirement. Plain-English senior piano guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Piano for Seniors</h1>
          <p className="text-lg text-muted-foreground">Never too late to play.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior piano</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Brain exercise (delays dementia).</li>
              <li>Fine motor skills.</li>
              <li>Bilateral coordination.</li>
              <li>Stress relief.</li>
              <li>Achievement satisfaction.</li>
              <li>Play family songs.</li>
              <li>Studies show 6 months = real progress.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best digital pianos</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Yamaha P-45</strong> — $500. Best beginner.</li>
              <li><strong>Casio Privia PX-S1100</strong> — $700. Slim.</li>
              <li><strong>Yamaha Arius YDP-145</strong> — $1,200. Console style.</li>
              <li>88 weighted keys essential.</li>
              <li>Don&apos;t buy used acoustic — needs tuning $.</li>
              <li>Roland LX-9 premium ($5K+).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Learning options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Local teacher</strong> — best, $40-80/hr.</li>
              <li><strong>Pianote</strong> — online, $200/yr.</li>
              <li><strong>Flowkey</strong> — app-based, $150/yr.</li>
              <li><strong>Simply Piano</strong> — gamified, $120/yr.</li>
              <li><strong>YouTube</strong> — free.</li>
              <li>30 min daily = real progress.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjustable bench — back support.</li>
              <li>Good lighting.</li>
              <li>Pick songs YOU love.</li>
              <li>Don&apos;t rush — enjoy process.</li>
              <li>Record yourself + listen back.</li>
              <li>Play with metronome.</li>
              <li>Some days bad — keep going.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First songs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Twinkle Twinkle Little Star.</li>
              <li>Heart and Soul.</li>
              <li>Happy Birthday.</li>
              <li>Amazing Grace.</li>
              <li>Imagine — John Lennon.</li>
              <li>Easy Christmas songs.</li>
              <li>Achievement boosts confidence.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best brain exercise</h3>
            <p className="text-sm text-muted-foreground">Studies show learning new instruments at 60+ slows cognitive decline more than puzzles. Use both hands + read music + interpret = full brain workout. Plus joy. Lifelong hobby.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
