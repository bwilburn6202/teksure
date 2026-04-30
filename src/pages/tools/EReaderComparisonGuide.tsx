import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function EReaderComparisonGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="E-Reader Comparison for Seniors | TekSure" description="Kindle vs Kobo vs Nook compared. Best e-reader for seniors who love to read." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">E-Readers Compared</h1>
          <p className="text-lg text-muted-foreground">Kindle, Kobo, Nook — which fits you?</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why an e-reader?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjustable text size — best for tired eyes.</li>
              <li>Built-in light — read anywhere, no lamp.</li>
              <li>Holds 1,000+ books in pocket-size device.</li>
              <li>Lightweight — easier than hardcovers.</li>
              <li>Battery lasts weeks, not hours.</li>
              <li>Easy on eyes — not a glowing screen like phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Amazon Kindle Paperwhite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$140 — most popular e-reader in the world.</li>
              <li>Waterproof — read in tub or pool.</li>
              <li>Adjustable warm light for nighttime.</li>
              <li>Connects to Amazon Kindle store.</li>
              <li>Library books via Libby app.</li>
              <li>Best all-around for most seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Kindle Scribe</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$340 — larger 10.2-inch screen.</li>
              <li>Includes stylus pen for note-taking.</li>
              <li>Mark up books with notes.</li>
              <li>Replace paper notebooks too.</li>
              <li>Best for readers who like to annotate.</li>
              <li>Bigger text easier on aging eyes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Kobo Clara/Libra</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$130 (Clara) or $200 (Libra).</li>
              <li>Reads more file formats than Kindle.</li>
              <li>Better integration with library apps.</li>
              <li>Made by Rakuten (Japan-based).</li>
              <li>Good Kindle alternative if you don&apos;t want Amazon.</li>
              <li>Sold at Walmart + Best Buy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Barnes + Noble Nook</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$130 GlowLight 4.</li>
              <li>Connect to Barnes + Noble store.</li>
              <li>In-store help available.</li>
              <li>Smaller selection than Kindle store.</li>
              <li>Good for B+N loyalty members.</li>
              <li>Buy from physical Barnes + Noble locations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior accessibility features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>All allow large text size.</li>
              <li>Built-in dictionaries for unknown words.</li>
              <li>Translation to/from many languages.</li>
              <li>Bookmark + highlight passages.</li>
              <li>Screen brightness adjustable.</li>
              <li>Some have audio readback (text-to-speech).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Kindle Paperwhite for most</h3>
            <p className="text-sm text-muted-foreground">For most senior readers, the Kindle Paperwhite at $140 is the right choice. Largest book selection, integrates with Libby for free library books, easy on eyes with adjustable warm light. If you want bigger text and note-taking, upgrade to Kindle Scribe ($340). Avoid the basic Kindle without backlight — the Paperwhite&apos;s lighting is worth the extra $40.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
