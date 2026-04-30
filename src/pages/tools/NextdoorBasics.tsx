import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function NextdoorBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Nextdoor Basics — Use It Wisely | TekSure" description="Local neighborhood social network. Plain-English guide to what Nextdoor does well, common pitfalls, and how to find a handyman or lost dog." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Nextdoor Basics</h1>
          <p className="text-lg text-muted-foreground">Hyperlocal social network. Useful + sometimes nutty.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it&apos;s good for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Recommendations — handyman, plumber, contractor, dog groomer.</li>
              <li>Lost &amp; Found pets, packages, items.</li>
              <li>Free / cheap items neighbors are giving away.</li>
              <li>Crime alerts (with a HUGE grain of salt — see below).</li>
              <li>Power outage updates.</li>
              <li>Local events, garage sales, school news.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Honest warning</h2>
            <p className="text-sm">Nextdoor has a reputation for: paranoid neighbors, racial profiling reports ("suspicious person walking down the street"), petty drama, and political fights. Use the mute / hide buttons liberally. Don&apos;t take "crime alerts" as gospel — many are misunderstandings.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign up</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to nextdoor.com or download app.</li>
              <li>Enter your address. (Verifies you live there — postcard or phone call.)</li>
              <li>Choose username. Real name policy now.</li>
              <li>Browse "Neighborhood" feed.</li>
              <li>Subscribe to topics or keep it broad.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best uses for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Find a trusted contractor</strong> — search past posts, see who neighbors recommend.</li>
              <li><strong>"Anyone seen my dog?"</strong> — fastest way to recover lost pets.</li>
              <li><strong>Neighborhood watch</strong> — legit alerts about prowler.</li>
              <li><strong>Help an elderly neighbor</strong> posts — sometimes you can offer rides/grocery help.</li>
              <li><strong>Free moving boxes, plant cuttings, leftover paint</strong> — Free section.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to avoid</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t share trip dates publicly — that&apos;s when burglaries happen.</li>
              <li>Don&apos;t share full address.</li>
              <li>Don&apos;t engage political fights — block + mute.</li>
              <li>Don&apos;t buy/sell big items via Nextdoor (use Facebook Marketplace with safer process).</li>
              <li>Don&apos;t answer "anyone home this weekend" type DMs from strangers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Local Facebook groups beat Nextdoor</h3>
            <p className="text-sm text-muted-foreground">Most towns have a "Neighbors of [town name]" Facebook group that&apos;s often friendlier and more active than Nextdoor. Search Facebook for your town. Often less drama, more genuine community.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
