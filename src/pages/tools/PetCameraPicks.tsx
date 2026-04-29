import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const CAMS = [
  { name: 'Furbo Mini', cost: '$120', best: 'Treat-tossing camera. Bark alerts. Two-way audio. Senior favorite.', good: 'Best treat-tosser.' },
  { name: 'Wyze Cam Pan v3', cost: '$50', best: 'Cheapest decent pet camera. Pans. Two-way audio. Free 14-day cloud.', good: 'Best budget.' },
  { name: 'Petcube Bites 2', cost: '$200', best: 'Treat-tossing + 4K video. Higher quality than Furbo. Subscription extras.', good: 'Best premium.' },
  { name: 'Eufy Indoor Cam 2K', cost: '$40', best: 'No subscription. AI detects pets, person, baby cry. Local storage.', good: 'Best no-subscription.' },
  { name: 'Apple HomePod (with cameras)', cost: 'Cameras start $40', best: 'If you have HomeKit cameras + HomePod, "Hey Siri, show me Buddy" works.', good: 'Best Apple integration.' },
];

export default function PetCameraPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Camera Picks — Furbo, Wyze, Petcube | TekSure" description="Watch + talk to your dog or cat from anywhere. Plain-English picks for treat-tossing pet cameras." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Camera Picks</h1>
          <p className="text-lg text-muted-foreground">Check on Buddy from the grocery store.</p>
        </div>

        <div className="space-y-3 mb-6">
          {CAMS.map(c => (
            <Card key={c.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <span className="text-sm font-semibold text-primary">{c.cost}</span>
                </div>
                <p className="text-sm">{c.best}</p>
                <p className="text-sm text-muted-foreground">{c.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What features matter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Two-way audio</strong> — talk to pet, hear them. Reassures separation anxiety.</li>
              <li><strong>Treat-tossing</strong> — fun + reinforces good behavior.</li>
              <li><strong>Bark/sound alerts</strong> — get notified if pet is distressed.</li>
              <li><strong>Night vision</strong> — for overnight checks.</li>
              <li><strong>Local storage option</strong> — avoid monthly fees.</li>
              <li><strong>Pan/tilt</strong> — track pet around room.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Place where you can see most of the room — corner, high shelf.</li>
              <li>NEVER aim at neighbor&apos;s home (privacy + legal).</li>
              <li>Connect to wifi BEFORE leaving the house.</li>
              <li>Adjust audio levels — too loud scares pets.</li>
              <li>Test treat-tosser indoor with you watching first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior anxiety relief</h3>
            <p className="text-sm text-muted-foreground">Pet cameras especially help when family worries about a senior parent&apos;s pet (or a pet whose senior owner has memory loss). Can verify pet was fed, can see if pet&apos;s out, can talk to them. $40-200 buys major peace of mind.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
