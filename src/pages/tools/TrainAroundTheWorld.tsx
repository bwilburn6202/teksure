import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Train } from 'lucide-react';

export default function TrainAroundTheWorld() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Train Travel Around the World for Seniors | TekSure" description="Iconic train trips. Plain-English guide for senior train enthusiasts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Train className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">World Train Trips</h1>
          <p className="text-lg text-muted-foreground">Bucket list train journeys.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Iconic luxury trains</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Venice Simplon-Orient-Express</strong> — Paris-Venice. $5K+/night.</li>
              <li><strong>Rocky Mountaineer</strong> — Vancouver-Banff. $1,500-5,000.</li>
              <li><strong>Glacier Express</strong> (Switzerland) — affordable, beautiful.</li>
              <li><strong>Royal Scotsman</strong> — Scottish highlands. $5K+.</li>
              <li><strong>Maharajas&apos; Express</strong> (India) — palace on wheels. $3K-10K.</li>
              <li><strong>Trans-Siberian</strong> — Russia 6 days. Adventure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Eurail Pass</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One pass — train across 33 European countries.</li>
              <li>From $300 (3 days, 1 country) to $1,500 (3 months unlimited).</li>
              <li>Senior discount — 60+, save 12%.</li>
              <li>Free reserved seats some routes.</li>
              <li>Best for Europe road trip without driving.</li>
              <li>Buy at eurail.com.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Asia + global</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>JR Pass (Japan)</strong> — bullet train all you want. ~$300/wk.</li>
              <li><strong>Eastern + Oriental Express</strong> — Singapore-Bangkok.</li>
              <li><strong>Indian Pacific (Australia)</strong> — Perth-Sydney 4 days.</li>
              <li><strong>Ghan</strong> — Adelaide-Darwin.</li>
              <li><strong>Blue Train (South Africa)</strong> — luxury.</li>
              <li><strong>Reunification Express (Vietnam)</strong> — affordable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Book sleeper cabin for overnight.</li>
              <li>Bedroom (vs roomette) = full bathroom.</li>
              <li>Bring snacks + water.</li>
              <li>Earplugs + eye mask.</li>
              <li>Power strips for plugs.</li>
              <li>Charge electronics fully before.</li>
              <li>Walk through cars for exercise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tour packages</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Vacations By Rail</strong> — vacationsbyrail.com.</li>
              <li><strong>Rail Europe</strong> — book tickets + tours.</li>
              <li><strong>Tauck</strong> — luxury train tours.</li>
              <li><strong>Road Scholar</strong> — educational rail trips.</li>
              <li>Done-for-you = fewer logistics.</li>
              <li>Combine cities seamlessly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Why train wins for seniors</h3>
            <p className="text-sm text-muted-foreground">No security lines. Walk around. See countryside. Better sleep than airplane. Meet people. Photo opportunities. Ground-level views. Many Bucket-list senior favorites. Take the slow road.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
