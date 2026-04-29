import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv, Sparkles } from 'lucide-react';

const SERVICES = [
  { name: 'Pluto TV', who: 'Live channels (news, classic shows, movies). Owned by Paramount.', best: '250+ live channels, no signup needed.', site: 'pluto.tv' },
  { name: 'Tubi', who: 'Movies and shows on demand. Owned by Fox.', best: 'Huge classic-movie library.', site: 'tubitv.com' },
  { name: 'The Roku Channel', who: 'Free with any Roku device. (Also free on the web.)', best: 'Free Live TV plus on-demand movies.', site: 'roku.com' },
  { name: 'Freevee', who: 'Free movies and shows from Amazon (with ads).', best: 'Some recent hit shows like Bosch: Legacy.', site: 'amazon.com/freevee' },
  { name: 'YouTube', who: 'Beyond cat videos — full-length classic movies, news, talk shows.', best: 'Search "free full movies" — thousands legally posted.', site: 'youtube.com' },
  { name: 'Crackle', who: 'Sony Pictures movies and shows. Free with ads.', best: 'Solid action and comedy library.', site: 'crackle.com' },
  { name: 'PBS', who: 'Public Broadcasting — Antiques Roadshow, NOVA, news.', best: 'Free, no ads, kid-friendly. PBS Kids has its own free app.', site: 'pbs.org' },
  { name: 'Hoopla / Libby', who: 'Free movies, audiobooks, e-books with your LIBRARY CARD.', best: 'Borrow new releases that cost $20 elsewhere.', site: 'See our Library App Helper' },
  { name: 'Local TV apps', who: 'NBC News NOW, ABC News Live, CBS News — free 24/7 streaming news.', best: 'No cable needed for news.', site: 'on Roku/Apple TV/Fire TV' },
];

export default function FreeStreamingServices() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Streaming Services — Watch Without Paying | TekSure" description="Cut the cable bill. Pluto, Tubi, Crackle, PBS, Roku Channel — totally free, legal, lots of content. Plain-English overview." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Streaming Services</h1>
          <p className="text-lg text-muted-foreground">9 free, legal apps with thousands of hours of TV and movies.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Sparkles className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h2 className="font-bold mb-1">All of these are FREE</h2>
                <p className="text-sm">No subscription. No credit card. Most don't even need a signup. They make money from ads (a few minutes per hour), not from you.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {SERVICES.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg">{s.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{s.who}</p>
                <p className="text-sm"><strong>Why it's good:</strong> {s.best}</p>
                <p className="text-xs text-muted-foreground mt-2">Find it at: {s.site}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">How to install them</h3>
            <p className="text-sm mb-2">All these work on:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Smart TVs</strong> — search the App Store on your TV remote (Samsung, LG, Vizio).</li>
              <li><strong>Roku, Fire TV, Apple TV, Chromecast</strong> — search and install.</li>
              <li><strong>Phones and tablets</strong> — App Store (iPhone) or Play Store (Android).</li>
              <li><strong>Computer browser</strong> — just type the website (pluto.tv, tubitv.com, etc.).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip — start with The Roku Channel</h3>
            <p className="text-sm text-muted-foreground">If you have a Roku, The Roku Channel is already on your home screen. Click it — there are 500+ free live channels and thousands of free movies. Many people don't realize it's there.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
