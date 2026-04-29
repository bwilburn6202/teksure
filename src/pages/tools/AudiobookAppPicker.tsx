import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

const APPS = [
  { name: 'Libby (free with library card)', cost: 'FREE', best: 'BEST FREE option. Borrow audiobooks from your library — same as a physical book. New releases included.', good: 'Wait list for popular books. Free is free.' },
  { name: 'Audible', cost: '$15/mo (1 credit per month)', best: 'Biggest audiobook library. Original productions exclusive to Audible. Strong narrators.', good: 'Stop subscription anytime; books bought stay yours.' },
  { name: 'Audible Plus / Plus Catalog', cost: 'Included with Audible $15/mo', best: 'Thousands of free titles included with the subscription — like Spotify for audiobooks.', good: 'Most subscribers don\'t realize this exists.' },
  { name: 'Spotify Premium', cost: '$12/mo, 15 hrs of audiobooks/mo included', best: 'If you already pay for Spotify Premium, you get free audiobook hours every month.', good: 'Best value if you stream music too.' },
  { name: 'Chirp', cost: '$2-15 per book (no subscription)', best: 'Daily deals on bestsellers. Pay-per-book model. No commitment.', good: 'Best for casual listeners.' },
  { name: 'LibriVox', cost: 'FREE', best: 'Public-domain classics read by volunteers. Dickens, Austen, Mark Twain, all free.', good: 'No catch. Quality varies — some readers excellent, some less so.' },
  { name: 'Hoopla (free with library card)', cost: 'FREE', best: 'Library audiobooks WITHOUT wait lists. Monthly borrow limit (5-10).', good: 'Best for "I want it now" listening.' },
];

export default function AudiobookAppPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Audiobook App Picker — Audible, Libby, Spotify | TekSure" description="Listen to books while you walk, drive, or knit. Plain-English picks for the best audiobook apps — free options first." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Audiobook App Picker</h1>
          <p className="text-lg text-muted-foreground">Listen while you walk, drive, garden, or knit.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Listening tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Speed up to 1.25x or 1.5x</strong> if the narrator feels slow. Most apps offer this.</li>
              <li><strong>Sleep timer</strong> — most apps stop after 20-30 min. Great for bedtime.</li>
              <li><strong>Bluetooth headphones / earbuds</strong> — no cord while doing chores.</li>
              <li><strong>Carplay or Android Auto</strong> — listen during long drives. Apps integrate.</li>
              <li><strong>Pair with TekSure&apos;s Library App Helper</strong> — Libby + Hoopla is hundreds of dollars in free books a year.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best place to start</h3>
            <p className="text-sm text-muted-foreground"><strong>Libby (free with library card)</strong>. Set it up once, borrow your first audiobook today. If your library doesn\'t have what you want, then look at Spotify Premium (since you might already have it) or Audible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
