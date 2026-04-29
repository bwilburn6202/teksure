import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function KindleVsPaperbookSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Kindle vs Paper Book for Seniors | TekSure" description="Pick what works for your eyes. Plain-English ereader guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Kindle vs Paper Book</h1>
          <p className="text-lg text-muted-foreground">Each has place. Your eyes decide.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Kindle wins for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjustable font size.</li>
              <li>Backlit — read in dark.</li>
              <li>Lightweight.</li>
              <li>1,000s of books in one device.</li>
              <li>Library books FREE via Libby.</li>
              <li>Built-in dictionary (tap word).</li>
              <li>Easier to hold than heavy hardcover.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Paper book wins</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>No screen for tired eyes some say.</li>
              <li>Don&apos;t need charging.</li>
              <li>Easier to share/lend.</li>
              <li>Beautiful on shelf.</li>
              <li>Some prefer feel + smell.</li>
              <li>Better for note-taking with pencil.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best Kindles 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Kindle Scribe</strong> — $400. Larger 10.2&quot; screen. Take notes.</li>
              <li><strong>Kindle Paperwhite</strong> — $160. Best value.</li>
              <li><strong>Kindle Oasis</strong> (older) — page turn buttons.</li>
              <li><strong>Kindle (basic)</strong> — $100. Cheapest.</li>
              <li>Larger ones = senior-favorite.</li>
              <li>Paperwhite = sweet spot.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Kindle settings</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Font size — make as large as needed.</li>
              <li>Bold text option.</li>
              <li>OpenDyslexic font available.</li>
              <li>Light/dark mode.</li>
              <li>Page turn taps comfortable.</li>
              <li>Built-in vocabulary builder.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free books FREE</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Libby — library Kindle books FREE.</li>
              <li>Project Gutenberg — public domain.</li>
              <li>Amazon Prime Reading — included.</li>
              <li>Kindle Unlimited $12/mo — endless reading.</li>
              <li>Free Kindle deals daily.</li>
              <li>Don&apos;t pay full price often.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Hybrid approach</h3>
            <p className="text-sm text-muted-foreground">Many seniors use BOTH. Kindle for travel + reading in bed. Paper for treasured books + book club. Library has free Kindle and paper books. Pick what brings joy. Reading itself = win.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
