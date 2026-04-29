import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

const APPS = [
  { name: 'Duolingo', cost: 'FREE / $7/mo', best: 'Best free. Game-like.', good: 'Best free.' },
  { name: 'Babbel', cost: '$14/mo or $99/yr', best: 'Best for grammar + practical phrases.', good: 'Best paid.' },
  { name: 'Rosetta Stone', cost: '$12/mo or $179 lifetime', best: 'Immersion approach. Picture-based.', good: 'Best immersion.' },
  { name: 'Pimsleur', cost: '$15-20/mo', best: 'Audio-only. Drive + learn.', good: 'Best audio.' },
  { name: 'iTalki', cost: '$10-25/hr', best: 'Real teacher 1-on-1. Best progress.', good: 'Best with teacher.' },
];

export default function BabbelVsRosetta() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Babbel vs Rosetta Stone vs Duolingo | TekSure" description="Pick the right language app. Plain-English comparison for seniors learning a language." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Globe className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Language App Compare</h1>
          <p className="text-lg text-muted-foreground">5 apps. Different strengths.</p>
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
            <h2 className="font-bold text-xl mb-3">Which to pick</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Casual / fun</strong> — Duolingo (free).</li>
              <li><strong>Serious + grammar</strong> — Babbel.</li>
              <li><strong>No translation, immersion</strong> — Rosetta Stone.</li>
              <li><strong>Audio-only while driving</strong> — Pimsleur.</li>
              <li><strong>Want fastest progress</strong> — iTalki teacher.</li>
              <li><strong>Library card</strong> — Mango/Pimsleur free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t buy lifetime</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Rosetta Stone Lifetime sometimes $99 sale.</li>
              <li>Most quit within 6 months.</li>
              <li>Free trial first.</li>
              <li>Monthly subscription = motivation to use.</li>
              <li>Black Friday + Memorial Day = best deals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Maximize learning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Combine apps + real practice.</li>
              <li>1 app + 1 podcast + 1 show in language.</li>
              <li>Speak OUT LOUD with apps.</li>
              <li>Find conversation partner (Tandem, Meetup).</li>
              <li>Travel to country once a year (or more).</li>
              <li>Watch Netflix in target language with subtitles.</li>
              <li>Listen to music in target language.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Real talk</h3>
            <p className="text-sm text-muted-foreground">Apps alone won&apos;t make you fluent. Combine with real conversation. Even speaking poorly = practice. Travel + immersion = best teacher. Many seniors learn enough Spanish/French in 1-2 years to converse on travel. Worth the effort.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
