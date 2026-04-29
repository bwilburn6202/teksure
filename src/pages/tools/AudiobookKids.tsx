import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

const APPS = [
  { name: 'Libby (library card)', cost: 'FREE', best: 'Free kids&apos; audiobooks via library. Big selection. Auto-return.', good: 'Best free.' },
  { name: 'Hoopla (library card)', cost: 'FREE', best: 'Different selection than Libby. Use both.', good: 'Best second free option.' },
  { name: 'Storyline Online', cost: 'FREE', best: 'Famous actors reading kids&apos; books on video. Streamed free.', good: 'Best videos.' },
  { name: 'Audible Premium Plus', cost: '$15/mo (1 credit/mo)', best: 'Lots of kids&apos; books. Most major series available.', good: 'Best paid library.' },
  { name: 'Yoto Player', cost: '$100 device + $7-10/card', best: 'Screen-free audiobook player. Cards. Made for kids.', good: 'Best screen-free.' },
  { name: 'Toniebox', cost: '$100 device + $15/figurine', best: 'Audio device with figurines. Kids place figurine on box, story plays.', good: 'Best for ages 3-7.' },
];

export default function AudiobookKids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Audiobooks for Kids | TekSure" description="Yoto, Toniebox, Libby. Plain-English picks for kids&apos; audiobooks — free library options to screen-free players for road trips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Audiobooks for Kids</h1>
          <p className="text-lg text-muted-foreground">Best gift: stories without screens.</p>
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
            <h2 className="font-bold text-xl mb-3">Yoto vs Toniebox vs phone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Yoto</strong> ($100) — for ages 3-12. Cards loaded with stories. Screen-free. Tactile.</li>
              <li><strong>Toniebox</strong> ($100) — ages 3-7. Cute figurines = each story.</li>
              <li><strong>Phone with Libby</strong> — free if you already have a phone. Less child-proof.</li>
              <li>Both Yoto and Toniebox have grown massively — kids LOVE them. Best Christmas gift for 4-7 year olds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best kids&apos; audiobook series</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Magic Tree House</strong> (ages 6-9) — Mary Pope Osborne adventures.</li>
              <li><strong>Junie B. Jones</strong> (5-8) — funny, narrated by Lana Quintal.</li>
              <li><strong>Diary of a Wimpy Kid</strong> (8-12) — narrated by Ramon de Ocampo.</li>
              <li><strong>Harry Potter</strong> — Jim Dale narration is legendary.</li>
              <li><strong>Percy Jackson</strong> (9-13) — Greek mythology adventures.</li>
              <li><strong>The Bad Guys</strong> (6-10) — funny graphic-novel-turned-audio.</li>
              <li><strong>Berenstain Bears</strong> (3-6) — classic.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best for road trips</h3>
            <p className="text-sm text-muted-foreground">Audiobooks turn 6-hour drives into 2 hours. Library cards make it free. Or grandparent&apos;s gift: Yoto + 5 cards = $150 of joy. Kids end up asking for "another chapter" when you arrive.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
