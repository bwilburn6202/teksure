import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function UkuleleForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ukulele for Seniors | TekSure" description="Easiest instrument for seniors. Plain-English ukulele guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ukulele for Seniors</h1>
          <p className="text-lg text-muted-foreground">Easiest instrument. Cheapest. Joy.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior favorite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>4 strings vs guitar 6.</li>
              <li>Easier on fingers (nylon strings).</li>
              <li>Gentle on arthritis.</li>
              <li>$50-150 to start.</li>
              <li>Play first song in 30 minutes.</li>
              <li>Senior groups everywhere.</li>
              <li>Hawaiian + happy vibe.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Picks ($50-150)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cordoba 15CM</strong> — $80. Best beginner.</li>
              <li><strong>Lanikai LU-21</strong> — $80. Reliable.</li>
              <li><strong>Kala MK-S</strong> — $50. Cheapest decent.</li>
              <li><strong>Cordoba 30M</strong> — $150. Better quality.</li>
              <li><strong>Concert size</strong> — easier than soprano for seniors.</li>
              <li>Get from music store — they tune for you.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First chords</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>C, G, F, Am — most songs.</li>
              <li>Hundreds of songs with these 4.</li>
              <li>Know in 1-2 weeks practice.</li>
              <li>Strum patterns simple.</li>
              <li>YouTube tutorials free.</li>
              <li>Don&apos;t worry about reading music.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior ukulele groups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local senior centers — many have.</li>
              <li>Library ukulele clubs.</li>
              <li>Meetup.com search ukulele groups.</li>
              <li>Beach communities especially active.</li>
              <li>Ukulele festivals.</li>
              <li>Mature, friendly crowd.</li>
              <li>Group play = social bonus.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best resources</h3>
            <p className="text-sm text-muted-foreground"><strong>Ukulele Underground</strong> — YouTube + courses. <strong>Ukulele Tricks</strong> — beginner site. <strong>Cynthia Lin</strong> — popular YouTube. Most free. Books + DVDs at library. Ukulele easiest senior musical hobby. Try one.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
