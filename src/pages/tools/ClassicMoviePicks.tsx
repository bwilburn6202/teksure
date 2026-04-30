import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Film } from 'lucide-react';

export default function ClassicMoviePicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Classic Movie Picks for Seniors | TekSure" description="Streaming the classics. Plain-English senior movie guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Film className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Classic Movies</h1>
          <p className="text-lg text-muted-foreground">Where to find golden-age films.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to stream classics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>TCM (Turner Classic Movies)</strong> — premium classics.</li>
              <li><strong>Criterion Channel</strong> — $11/mo art films.</li>
              <li><strong>Tubi</strong> — FREE, classics aplenty.</li>
              <li><strong>Pluto TV</strong> — FREE classic channels.</li>
              <li><strong>Amazon Prime</strong> — many classic films included.</li>
              <li><strong>YouTube</strong> — free public domain.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Must-see classics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Casablanca (1942).</li>
              <li>Gone with the Wind (1939).</li>
              <li>Singin&apos; in the Rain (1952).</li>
              <li>Rear Window (1954).</li>
              <li>It&apos;s a Wonderful Life (1946).</li>
              <li>The Wizard of Oz (1939).</li>
              <li>Some Like It Hot (1959).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorite stars</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cary Grant — North by Northwest, Charade.</li>
              <li>Audrey Hepburn — Roman Holiday, Sabrina.</li>
              <li>Jimmy Stewart — Mr. Smith Goes to Washington.</li>
              <li>Bogart — Maltese Falcon, African Queen.</li>
              <li>Hepburn (Katharine) — Philadelphia Story.</li>
              <li>John Wayne — The Searchers, True Grit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Genre by mood</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Comfort food</strong> — musicals, romcoms.</li>
              <li><strong>Suspense</strong> — Hitchcock collection.</li>
              <li><strong>Western</strong> — John Ford films.</li>
              <li><strong>Drama</strong> — Treasure of Sierra Madre.</li>
              <li><strong>Foreign</strong> — Bicycle Thieves, 8½.</li>
              <li><strong>Family</strong> — Sound of Music, My Fair Lady.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly viewing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Closed captions — turn on always.</li>
              <li>Subtitles for foreign films.</li>
              <li>TV speakers + soundbar.</li>
              <li>Larger TV (43&quot;+) recommended.</li>
              <li>Pause anytime.</li>
              <li>Re-watch favorites.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for finding</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>JustWatch.com — finds where to stream.</li>
              <li>JustWatch app — Android/iPhone.</li>
              <li>Library DVDs — free + endless.</li>
              <li>Senior centers — DVD libraries.</li>
              <li>Movie clubs at retirement communities.</li>
              <li>Watch with grandkids — share favorites.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Movie + memory</h3>
            <p className="text-sm text-muted-foreground">Classic films watched with parents return memories. Great for dementia patients — familiar from youth. Family movie night = bonding. Talk with friends about films you&apos;ve seen. Library + Tubi + Pluto = thousands free. Re-discover Hollywood&apos;s golden age.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
