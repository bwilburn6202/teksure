import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

export default function AppleNewsPlusReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple News+ Review for Seniors | TekSure" description="Apple News Plus subscription reviewed. Hundreds of magazines + newspapers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Globe className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple News+</h1>
          <p className="text-lg text-muted-foreground">Hundreds of magazines + papers in one app.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you get</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$12.99/month subscription.</li>
              <li>300+ magazines (Time, People, Vogue, etc.).</li>
              <li>Major newspapers (LA Times, WSJ partial).</li>
              <li>Free for Apple One subscribers.</li>
              <li>Unlimited reading.</li>
              <li>1 month free trial.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best magazines for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>National Geographic — beautiful photography.</li>
              <li>Smithsonian — history + culture.</li>
              <li>The Atlantic — long-form essays.</li>
              <li>Better Homes + Gardens.</li>
              <li>Reader&apos;s Digest.</li>
              <li>AARP The Magazine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior reading features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Adjustable text size.</li>
              <li>Listen to articles aloud.</li>
              <li>Save for later.</li>
              <li>Download for offline reading.</li>
              <li>No ads on most articles.</li>
              <li>Read across iPhone, iPad, Mac.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple One bundle</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple One Premier — $37.95/month.</li>
              <li>Includes News+, Music, TV+, Arcade, iCloud.</li>
              <li>5-person family plan.</li>
              <li>Save vs subscribing separately.</li>
              <li>Each service worth checking individually first.</li>
              <li>Bundle if using 3+ services.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Library Libby app — magazines free.</li>
              <li>Many magazines free in print at libraries.</li>
              <li>Google News — free aggregator.</li>
              <li>Apple News standard — free with limits.</li>
              <li>Specific newspaper apps with senior discount.</li>
              <li>Try free first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Worth it?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heavy magazine reader: yes.</li>
              <li>Already pay for 2+ magazine subscriptions: yes.</li>
              <li>Casual reader: probably not.</li>
              <li>Try free trial first.</li>
              <li>Cancel before trial ends if not loving it.</li>
              <li>Adult children often gift to parents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try Library Libby first</h3>
            <p className="text-sm text-muted-foreground">Before paying for Apple News+, get a library card and download Libby. Many libraries offer most popular magazines free through Libby. National Geographic, People, Time, Better Homes — all available free with library card. If your library&apos;s collection is limited, then Apple News+ is worth considering. Most senior readers find free options sufficient.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
