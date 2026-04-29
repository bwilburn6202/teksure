import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Train } from 'lucide-react';

export default function AmtrakForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amtrak Travel for Seniors | TekSure" description="Train travel for retirees. Plain-English Amtrak guide for senior travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Train className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amtrak for Seniors</h1>
          <p className="text-lg text-muted-foreground">Slower travel. Beautiful views. 10% senior discount.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior 10% off</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>10% off all Amtrak fares for 65+.</li>
              <li>Apply online when booking.</li>
              <li>Show ID at boarding.</li>
              <li>Combine with promo codes.</li>
              <li>VIA Rail (Canada) similar discount.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior love Amtrak</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NO TSA hassle — show up 30 min before.</li>
              <li>Generous luggage allowance.</li>
              <li>Walk around train (vs locked airplane seat).</li>
              <li>Beautiful scenery.</li>
              <li>Bring food/drink/anything.</li>
              <li>Dining car experience.</li>
              <li>Sleeper rooms for overnight.</li>
              <li>Meet fellow travelers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best senior routes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>California Zephyr</strong> — Chicago to SF. Most beautiful US route.</li>
              <li><strong>Empire Builder</strong> — Chicago to Seattle.</li>
              <li><strong>Coast Starlight</strong> — Seattle to LA.</li>
              <li><strong>Adirondack</strong> — NYC to Montreal. Fall foliage.</li>
              <li><strong>Pacific Surfliner</strong> — California coast.</li>
              <li><strong>Southwest Chief</strong> — Chicago to LA via Grand Canyon area.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sleeper rooms</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Roomette</strong> — 1-2 people, $200-500.</li>
              <li><strong>Bedroom</strong> — full bathroom, $400-1,200.</li>
              <li>Includes ALL meals + service.</li>
              <li>Bedrooms have shower.</li>
              <li>Senior favorite for 2-3 day journeys.</li>
              <li>Roomette tight but cozy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reserve 6+ months ahead for popular trains.</li>
              <li>Choose lower berth in sleeper (no climbing).</li>
              <li>Bring power strip for plugs.</li>
              <li>Book Bedroom for accessible bathroom.</li>
              <li>Wheelchair / mobility — Amtrak accommodates.</li>
              <li>Bring snacks too — meals decent but limited menu.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Train alternatives</h3>
            <p className="text-sm text-muted-foreground"><strong>Rocky Mountaineer</strong> (Canada) — luxury train, expensive. <strong>Eurail Pass</strong> — train across Europe. <strong>JR Pass</strong> — Japan. <strong>Indian Pacific</strong> — Australia. Train travel = senior favorite. Slower but soulful.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
