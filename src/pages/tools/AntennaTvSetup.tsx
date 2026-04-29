import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Antenna, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AntennaTvSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Antenna TV Setup — Free Local Channels Without Cable | TekSure" description="A $30 antenna gets you free, sharp HD versions of ABC, CBS, NBC, FOX, PBS, and 30+ more channels. No monthly bill. Plain-English setup." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Antenna className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Antenna TV Setup</h1>
          <p className="text-lg text-muted-foreground">Free local channels in HD. One-time $30 cost. No monthly bill.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What you can get</h2>
            <p className="text-sm mb-2">In most US cities, an antenna picks up <strong>20-50 channels for free</strong>:</p>
            <ul className="text-sm list-disc pl-5">
              <li>ABC, CBS, NBC, FOX, PBS — all the major networks in HD (better picture than cable in many cases).</li>
              <li>Local news at 5, 6, and 11.</li>
              <li>Classic-TV channels — MeTV, Antenna TV, Heroes & Icons (Andy Griffith, MASH, Star Trek, Bonanza).</li>
              <li>Court TV, Bounce, ION, Grit, Comet — movies and reruns.</li>
              <li>Spanish channels — Telemundo, Univision.</li>
              <li>Live sports — most NFL games on Sunday afternoons.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1 — Check what you'll get at YOUR address</h2>
            <p className="text-sm mb-3">Different cities get different channels. Look up your address first.</p>
            <Button asChild variant="outline" className="w-full"><a href="https://www.fcc.gov/media/engineering/dtvmaps" target="_blank" rel="noopener noreferrer">FCC channel finder (free) <ExternalLink className="w-3 h-3 ml-2" /></a></Button>
            <p className="text-sm mt-3">Or try AntennaWeb.org or the free "Antenna Point" app — they show a map of which TV towers are nearest you.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2 — Pick the right antenna</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Live within 25 miles of TV towers (most cities)?</strong> A flat indoor antenna is fine. About $25-$40. Brands: Mohu, ClearStream, RCA, 1byone.</li>
              <li><strong>Live 25-50 miles out?</strong> Get an "amplified" indoor antenna or a small attic antenna.</li>
              <li><strong>Live 50+ miles out (rural)?</strong> An outdoor or attic antenna. Higher cost, $80-$150, but pulls in distant signals.</li>
              <li>Don't fall for "1000-mile range" antennas online. The most an antenna can really pull is about 80 miles, and only with line-of-sight.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3 — Plug it in</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Connect the antenna's coaxial cable to the back of your TV — the round threaded connector labeled "Antenna" or "RF In".</li>
              <li>Plug the antenna's power adapter into a wall outlet (if it's amplified).</li>
              <li>Place the antenna near a window or as high up as possible. Higher and farther from metal = better.</li>
              <li>Aim it generally toward the TV towers in your city (the FCC map from Step 1 shows direction).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 4 — Scan for channels</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>On your TV remote, press <strong>Input</strong> or <strong>Source</strong>.</li>
              <li>Pick "Antenna" or "TV" or "Air".</li>
              <li>Press <strong>Menu</strong> → look for "Channel Setup" or "Auto Tune" or "Channel Scan".</li>
              <li>Pick "Antenna" (NOT "Cable").</li>
              <li>Press Start. The TV scans 5-10 minutes — finds every channel it can reach.</li>
              <li>Done. Use the channel up/down buttons to flip through.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If a channel is missing or fuzzy</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Move the antenna to a different window or higher on the wall.</li>
              <li>Run another channel scan after each move.</li>
              <li>Try a different room — sometimes the back of the house works better than the front, depending on which way towers point.</li>
              <li>If only one channel is bad, the tower may be pointed away from you — nothing you can do.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pair it with free streaming</h3>
            <p className="text-sm text-muted-foreground">An antenna gives you live local TV. Free streaming apps (Pluto, Tubi, Roku Channel) give you on-demand. Together — total cable replacement, $0/month.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
