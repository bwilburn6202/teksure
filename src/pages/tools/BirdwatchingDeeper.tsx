import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

export default function BirdwatchingDeeper() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Birdwatching Deep Dive for Seniors | TekSure" description="Birding gear + apps + adventures. Plain-English senior birdwatching guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Birdwatching Deep Dive</h1>
          <p className="text-lg text-muted-foreground">Senior favorite hobby. Outdoors + brain.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best gear</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Binoculars</strong> — 8x42 senior favorite.</li>
              <li><strong>Vortex Diamondback HD</strong> — $250. Excellent value.</li>
              <li><strong>Nikon Monarch M5</strong> — $400. Premium.</li>
              <li><strong>Field guide</strong> — Sibley or Peterson.</li>
              <li><strong>Notebook</strong> — track sightings.</li>
              <li><strong>Hat + sunscreen</strong> outdoors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-essential apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Merlin Bird ID</strong> — FREE. Identify by photo OR sound.</li>
              <li><strong>eBird</strong> — track + report sightings. FREE.</li>
              <li><strong>Audubon Bird Guide</strong> — FREE.</li>
              <li><strong>BirdNET</strong> — listen to bird, identifies.</li>
              <li>All free + transformative.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Birding hot spots</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cape May, NJ</strong> — fall migration mecca.</li>
              <li><strong>Bosque del Apache, NM</strong> — sandhill cranes.</li>
              <li><strong>Magee Marsh, OH</strong> — spring warblers.</li>
              <li><strong>Everglades</strong> — Florida.</li>
              <li><strong>High Island, TX</strong> — spring migration.</li>
              <li>Local Audubon chapter — find nearby spots.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior birding clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local Audubon chapters — most cities.</li>
              <li>Free / cheap memberships.</li>
              <li>Group bird walks.</li>
              <li>Christmas Bird Count yearly.</li>
              <li>Many seniors find lifelong friends here.</li>
              <li>Mature, kind community.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Backyard birding</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bird feeders attract.</li>
              <li>Window cameras feed phone.</li>
              <li>Native plants for habitat.</li>
              <li>Water features (bird bath).</li>
              <li>Hummingbird feeders.</li>
              <li>Some seniors photograph from windows.</li>
              <li>Free education backyard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Bird tours senior</h3>
            <p className="text-sm text-muted-foreground"><strong>Road Scholar</strong> — birding tours senior-paced. <strong>WINGS Birding Tours</strong> — premium. <strong>Naturalist Journeys</strong> — small group. Costa Rica, Galapagos, Borneo for adventurous. Africa for safari + birds.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
