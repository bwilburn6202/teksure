import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PawPrint } from 'lucide-react';

export default function PetTechCoach() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Tech Coach — Apps and Trackers for Dogs & Cats | TekSure" description="GPS trackers, lost-pet alerts, vet portals, and walkers. The best pet apps for older adults — plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PawPrint className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Tech Coach</h1>
          <p className="text-lg text-muted-foreground">Trackers, lost-pet alerts, dog walkers, vet apps — what's worth it.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📍 GPS pet trackers (in case they get out)</h2>
            <ul className="space-y-3 text-sm">
              <li><strong>Apple AirTag (~$25)</strong> — works ONLY if your pet is near other Apple devices. Fine in cities, useless in rural areas. Best paired with a separate small collar tag.</li>
              <li><strong>Tile Mate (~$25)</strong> — same idea, works with both iPhone and Android networks.</li>
              <li><strong>Tractive ($60 + $5/month)</strong> — REAL GPS, works anywhere there's cell signal. Best for dogs who escape yards or cats who roam. Live tracking on a map.</li>
              <li><strong>Fi Smart Collar ($150 + $9/month)</strong> — designed for dogs. GPS plus activity tracking.</li>
              <li><strong>Whistle GO Explore ($130 + $10/month)</strong> — similar to Fi. Has health tracking too.</li>
            </ul>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Quick Tip:</strong> Add an old-fashioned tag with your phone number too. AirTags fail. Phone numbers don't.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🚨 If your pet is lost</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Call your vet — confirm the microchip is registered in YOUR name with current phone numbers. (Many seniors discover the chip is still in the breeder's name from years ago.)</li>
              <li>Post on <strong>Nextdoor</strong>, <strong>Facebook neighborhood groups</strong>, and <strong>PawBoost</strong> (free lost-pet alert site).</li>
              <li>Call the local animal shelter and county animal control — they need a description in case someone brings the pet in.</li>
              <li>Walk the route with treats. Most lost pets stay within a half-mile of home.</li>
              <li>Ask postal carriers and delivery drivers — they cover the same streets every day.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🐕 Dog walking & sitting apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Rover</strong> — biggest dog walker / sitter network. Verified profiles, reviews, in-app messaging. Insurance built in.</li>
              <li><strong>Wag</strong> — similar idea. Often a bit cheaper, slightly less consistent walker quality.</li>
              <li><strong>Local Facebook groups</strong> — "[Your town] dog walkers" — sometimes finds neighbors with reasonable rates.</li>
            </ul>
            <p className="text-sm mt-3"><strong>First time:</strong> Set up a 15-minute "meet and greet" before letting a stranger walk your dog. All real services support this.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🏥 Vet apps and health tracking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pawprint / iVet</strong> — keep vaccine and shot records on your phone. Useful for boarding kennels.</li>
              <li><strong>Banfield (PetSmart vet) app</strong> — schedule, see records, refill meds.</li>
              <li><strong>VetLIVE / Pawp / Airvet</strong> — telehealth vet calls when something's wrong at 9 PM. $20-30 per video call. Often answers "is this an emergency?" quickly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🛒 Free deals worth knowing</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Chewy Autoship</strong> — pet food on a schedule with 5-10% off. Free 1-2 day shipping.</li>
              <li><strong>Costco</strong> — Kirkland-brand pet food is rated as well as premium brands at half the price.</li>
              <li><strong>Hill's to Home</strong> — vet-prescribed food delivered, often at vet's price minus 5%.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">What's NOT worth it</h3>
            <p className="text-sm text-muted-foreground">"Pet DNA tests" beyond Embark or Wisdom Panel are gimmicks. "Pet wellness subscriptions" through retail brands are usually overpriced. Stick to your real vet plus a couple of trusted apps above.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
