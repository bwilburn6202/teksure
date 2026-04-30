import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function AudibleAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Audible Audiobook App for Seniors | TekSure" description="Audible audiobook app deep dive. Use credits wisely + senior listening tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Audible</h1>
          <p className="text-lg text-muted-foreground">World&apos;s biggest audiobook library.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plus ($7.95/mo) — Plus library only.</li>
              <li>Premium Plus ($14.95/mo) — 1 credit/month + Plus library.</li>
              <li>Annual Premium Plus saves money.</li>
              <li>30-day free trial usually.</li>
              <li>Owned by Amazon.</li>
              <li>Largest selection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How credits work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 credit = 1 audiobook (any price).</li>
              <li>You own purchased books forever.</li>
              <li>Credits roll over up to 6.</li>
              <li>Use credits on $30+ audiobooks for value.</li>
              <li>Buy at retail when on sale.</li>
              <li>Plus library doesn&apos;t use credits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior listening tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Speed up to 1.25x or 1.5x.</li>
              <li>Sleep timer for bedtime.</li>
              <li>Bookmarks for important parts.</li>
              <li>Take notes on key passages.</li>
              <li>Audible Whispersync — switch to Kindle.</li>
              <li>Family share — shareable plan.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-loved narrators</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Jim Dale — Harry Potter narration.</li>
              <li>Scott Brick — thrillers + literary.</li>
              <li>Edoardo Ballerini — literary fiction.</li>
              <li>Bahni Turpin — current bestsellers.</li>
              <li>Some authors narrate own books.</li>
              <li>Sample before buying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Library Libby — free with library card.</li>
              <li>Hoopla — free, sometimes Audible-quality.</li>
              <li>LibriVox — public domain audiobooks free.</li>
              <li>YouTube — full audiobooks sometimes.</li>
              <li>Many seniors don&apos;t need Audible.</li>
              <li>Library first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for these listeners</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1+ audiobook per month.</li>
              <li>Want newest releases.</li>
              <li>Drive frequently.</li>
              <li>Walk + workout listening.</li>
              <li>Don&apos;t want to wait at library.</li>
              <li>Vision issues prefer audio.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free trial first</h3>
            <p className="text-sm text-muted-foreground">Audible offers 30-day free trial = 2 free audiobooks. Try it — see if you actually finish them. Many people overpay for Audible they don&apos;t use enough. If you finish 1+ books monthly, $14.95 Premium Plus is good value. If less, use library Libby for free instead. Audiobooks make commutes + chores feel productive.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
