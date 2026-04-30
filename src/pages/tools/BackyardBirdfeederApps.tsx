import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

export default function BackyardBirdfeederApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Backyard Birding Apps for Seniors | TekSure" description="Smart bird feeders, ID apps, and free resources for senior backyard birders." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Backyard Birding</h1>
          <p className="text-lg text-muted-foreground">Apps and feeders for senior birders.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why birding for seniors?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Peaceful + meditative.</li>
              <li>Connect with nature without leaving home.</li>
              <li>Mental engagement — learning species.</li>
              <li>Photo opportunities — capture beautiful birds.</li>
              <li>Physical activity refilling feeders.</li>
              <li>Counts as exercise + mindfulness.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart bird feeders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bird Buddy — camera feeder, AI bird ID, app alerts.</li>
              <li>Around $200 — sees + identifies visiting birds.</li>
              <li>Photos automatically taken and saved.</li>
              <li>Great for sharing with grandkids.</li>
              <li>Netvue Birdfy — similar, slightly cheaper.</li>
              <li>HD video of every visitor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bird ID apps (free)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Merlin Bird ID — free from Cornell Lab.</li>
              <li>Identify by sound, photo, or color.</li>
              <li>Most accurate ID app — completely free.</li>
              <li>eBird — log bird sightings, see what others see.</li>
              <li>Audubon Bird Guide — beautiful illustrations.</li>
              <li>All free, no subscription.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up feeders</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Place near windows — enjoy from inside.</li>
              <li>5 feet from glass minimizes window strikes.</li>
              <li>Or 30+ feet away — too fast at 5–30 ft.</li>
              <li>Hopper feeders — biggest variety of birds.</li>
              <li>Tube feeders — finches, chickadees.</li>
              <li>Suet cakes — woodpeckers + nuthatches.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best seed types</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Black oil sunflower — attracts most species.</li>
              <li>Nyjer (thistle) — finches and small birds.</li>
              <li>Safflower — squirrels won&apos;t eat it.</li>
              <li>Suet — winter favorite of woodpeckers.</li>
              <li>Hummingbird nectar — 1 part sugar to 4 parts water.</li>
              <li>Avoid cheap mixes — birds throw out filler.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Squirrel solutions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Squirrel baffles — dome above hanging feeder.</li>
              <li>Pole-mounted with cone baffle below.</li>
              <li>Weight-activated feeders close under squirrel weight.</li>
              <li>Safflower seed — squirrels dislike it.</li>
              <li>Pole 10+ feet from any jumping point.</li>
              <li>Or accept squirrels — feed them their own corn.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with Merlin and one feeder</h3>
            <p className="text-sm text-muted-foreground">Download the free Merlin Bird ID app from Cornell Lab. Hang one good hopper feeder filled with black oil sunflower seed near your kitchen window. Within 2 weeks you&apos;ll have regular visitors. Use Merlin&apos;s sound ID to identify the birds you hear but can&apos;t see. Cornell&apos;s All About Birds website has free guides for everything else. Total cost: about $40. Lifetime joy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
