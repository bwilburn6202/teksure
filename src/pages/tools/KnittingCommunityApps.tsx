import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors } from 'lucide-react';

const APPS = [
  { name: 'Ravelry', cost: 'FREE', best: 'Biggest knitting + crochet community. Free pattern library. Yarn database. Pattern tracker.', good: 'Best overall.' },
  { name: 'Knit Companion', cost: '$10 one-time', best: 'PDF pattern reader with row counter, zoom, highlight. Senior-friendly.', good: 'Best for paid patterns.' },
  { name: 'Stitch Fiddle', cost: 'FREE / $4/mo Premium', best: 'Free chart maker for cross-stitch, color knitting, weaving.', good: 'Best chart maker.' },
  { name: 'Yarna Knitting Counter', cost: 'FREE', best: 'Simple row counter. Multiple counters at once. No subscriptions.', good: 'Best simple counter.' },
  { name: 'YouTube — VeryPink Knits, Sheep &amp; Stitch', cost: 'FREE', best: 'Best free video tutorials. New stitches, fixing mistakes, finishing.', good: 'Best learning.' },
];

export default function KnittingCommunityApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Knitting &amp; Crochet Apps for Seniors | TekSure" description="Ravelry, Knit Companion, row counters. Plain-English picks for the best knitting and crochet apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scissors className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Knitting &amp; Crochet Apps</h1>
          <p className="text-lg text-muted-foreground">Patterns, communities, counters.</p>
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
            <h2 className="font-bold text-xl mb-3">Why Ravelry alone is worth it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>900,000+ free patterns. Searchable by skill, yarn type, project size.</li>
              <li>"Stash tracker" — log every yarn skein you own.</li>
              <li>"My Notebook" — track every project, pattern, finished item.</li>
              <li>Forums for every group: lace, socks, sweaters, regional clubs.</li>
              <li>Buy/sell or trade yarn with members.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy-on-eyes tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPad bigger than phone — patterns much easier to read.</li>
              <li>Knit Companion lets you zoom and highlight current row.</li>
              <li>Print PDF patterns at 125-150% on a copier — bigger text.</li>
              <li>Daylight LED lamp — doubles knitting comfort. $40-80 on Amazon.</li>
              <li>Count stitches with audible row counter (Yarna app dings each click).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Local + free</h3>
            <p className="text-sm text-muted-foreground">Many local libraries host weekly "Stitch &amp; Bitch" or knitting-cafe groups — free. Local yarn shops also host. Search "[your town] knitting group" on Facebook or library calendar. Connection often beats apps.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
