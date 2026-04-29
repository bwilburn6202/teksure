import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const PICKS = [
  { name: 'Bird Buddy', price: '$200-300', best: 'Most popular smart bird feeder. Solar-powered. AI identifies bird species, emails you photos.', good: 'Best overall.' },
  { name: 'Birdfy by Netvue', price: '$180-300', best: 'Cheaper alternative. AI ID. Solar option.', good: 'Best value.' },
  { name: 'Wasserstein bird feeder cam', price: '$130', best: 'Cheaper, mounts to existing feeder. Less polished.', good: 'Best budget.' },
  { name: 'GoPro / dash cam mounted on feeder', price: 'Whatever you have', best: 'DIY hack — mount any small camera with view of feeder.', good: 'For tinkerers.' },
  { name: 'Window feeder + camera nearby', price: '$30 feeder + $30 cam', best: 'Cheapest setup — clear plastic feeder sticks to window, place phone or webcam inside aimed at it.', good: 'For pure DIY.' },
];

export default function BirdFeederCam() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bird Feeder Cameras — Bird Buddy, Birdfy | TekSure" description="Watch and identify birds in your yard. Plain-English picks for AI-powered smart bird feeders that email you photos." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bird Feeder Cam</h1>
          <p className="text-lg text-muted-foreground">Beautiful joy. AI tells you what bird visited.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why so beloved</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Phone notification: "Cardinal at the feeder!".</li>
              <li>Builds your "yard list" — every species you\'ve had visit.</li>
              <li>Share favorite photos with grandkids ("look what we got today!").</li>
              <li>Connects to Cornell Lab citizen science projects.</li>
              <li>Endless calm — checking the feeder is the new "checking the fish".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pair with Cornell Merlin</h2>
            <p className="text-sm">Install <strong>Merlin Bird ID</strong> from Cornell (free). It identifies birds by SOUND in real-time. Combine with Bird Buddy and you have a backyard observatory. (See our Bird ID with Merlin tool.)</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best gift for grandparents</h3>
            <p className="text-sm text-muted-foreground">If you\'re looking for a gift — a Bird Buddy + a year of bird seed delivery from Walmart Subscribe & Save = pure joy. Many seniors call it the best gift they\'ve gotten.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
