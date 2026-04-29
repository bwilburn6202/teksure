import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

const APPS = [
  { name: 'Merlin Bird ID (Cornell)', cost: 'FREE', best: 'Free. Identifies birds by photo, song, OR description. Best app — period. From Cornell Lab.', good: 'Best overall.' },
  { name: 'eBird (Cornell)', cost: 'FREE', best: 'Track every bird you see. Hotspot finder. Citizen science.', good: 'Best for tracking.' },
  { name: 'iNaturalist', cost: 'FREE', best: 'Identifies ANY plant, bird, insect, fungus by photo. Community-verified.', good: 'Best all-nature.' },
  { name: 'Audubon Bird Guide', cost: 'FREE', best: 'Field guide app. Range maps, habitats, songs.', good: 'Best field guide.' },
  { name: 'Picture Bird', cost: '$30-40/year', best: 'Easier UI than Merlin for some seniors. Less accurate but smoother.', good: 'Best simple UI.' },
];

export default function BirdIdApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bird ID Apps — Merlin, eBird, iNaturalist | TekSure" description="What&apos;s that bird at my feeder? Plain-English picks for free bird identification apps that work by photo OR song." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bird ID Apps</h1>
          <p className="text-lg text-muted-foreground">Identify any bird in 5 seconds.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Merlin walkthrough</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Download Merlin Bird ID (free).</li>
              <li>Download "Bird Pack" for your region (one time, then offline).</li>
              <li>3 ways to identify:
                <ul className="list-disc pl-5 mt-1">
                  <li><strong>"Sound ID"</strong> — tap, hold phone toward bird. App listens, shows possible species in real time.</li>
                  <li><strong>"Photo ID"</strong> — snap or upload photo. Match in seconds.</li>
                  <li><strong>"Step-by-step"</strong> — color, size, location. Narrows down.</li>
                </ul>
              </li>
              <li>Save sightings to "Life List".</li>
              <li>Share sightings to eBird automatically.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best gear for backyard birding</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bird feeder</strong> — tube or hopper, $20-40.</li>
              <li><strong>Birds&apos; favorite seed</strong> — black oil sunflower (universal). $20 for 20 lbs at Costco.</li>
              <li><strong>Suet cage</strong> — for woodpeckers, $5.</li>
              <li><strong>Hummingbird feeder</strong> — $15. Sugar water (4:1) only — never red dye.</li>
              <li><strong>Birdbath</strong> — drinking + bathing.</li>
              <li><strong>Smart bird feeder camera</strong> (Bird Buddy, NetVue) — $200-300, photographs every visitor automatically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Help science</h3>
            <p className="text-sm text-muted-foreground">eBird users contribute to the largest bird-population database on Earth. Your backyard sightings help scientists track migrations and threatened species. Free citizen science. Cornell uses your data for real research.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
