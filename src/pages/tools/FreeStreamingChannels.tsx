import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

const SVCS = [
  { name: 'Pluto TV', cost: 'FREE', best: 'Free 250+ channels. Owned by Paramount. Like cable, but free + ad-supported.', good: 'Best free cable replacement.' },
  { name: 'Tubi', cost: 'FREE', best: 'Free movies + TV, owned by FOX. 50,000+ titles. Few ads.', good: 'Best free movies.' },
  { name: 'The Roku Channel', cost: 'FREE (any device)', best: 'Free movies + TV + LIVE channels. Works on any TV/phone.', good: 'Best free Roku.' },
  { name: 'Freevee (Amazon)', cost: 'FREE', best: 'Free Prime Video shows. Ad-supported. Quality stuff.', good: 'Best Amazon free.' },
  { name: 'Crackle', cost: 'FREE', best: 'Movies + TV. Ad-supported. Old-school free streaming.', good: 'Best classic.' },
  { name: 'PBS / PBS Kids', cost: 'FREE', best: 'Documentaries + Masterpiece + kids shows. Free, no ads.', good: 'Best educational.' },
  { name: 'Local library — Hoopla, Kanopy', cost: 'FREE with library card', best: 'Free movies + TV + audiobooks via library. No ads.', good: 'Best ad-free free.' },
];

export default function FreeStreamingChannels() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Streaming Channels | TekSure" description="Pluto TV, Tubi, Freevee. Plain-English picks for free streaming services. No subscription, no credit card." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PlayCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Streaming Channels</h1>
          <p className="text-lg text-muted-foreground">No subscription needed.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How they work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free apps — no credit card needed.</li>
              <li>Watch on phone, tablet, smart TV, Roku, FireTV.</li>
              <li>Ads every 10-15 minutes (like old TV).</li>
              <li>Some let you create a free profile to track favorites.</li>
              <li>Quality varies — some great, some old/random.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Specialty free streaming</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>FilmBox</strong> — independent + foreign films free.</li>
              <li><strong>Free PBS Masterpiece</strong> via PBS app (some content).</li>
              <li><strong>Plex</strong> — free music, movies, TV. Build your own library.</li>
              <li><strong>YouTube</strong> — free movies section + tons of free content.</li>
              <li><strong>Local TV station apps</strong> — most have free livestream + replay.</li>
              <li><strong>Cooking, fitness, faith</strong> — free apps for niches.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior watch list</h3>
            <p className="text-sm text-muted-foreground">Tubi has many classic films seniors love. Pluto has classic TV channels (MASH, Carol Burnett, Bonanza). PBS app has Masterpiece (some), Antiques Roadshow, Nature, Nova. Three free apps + library Hoopla = endless free entertainment.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
