import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MonitorPlay } from 'lucide-react';

const PICKS = [
  { name: 'Roku Streaming Stick 4K', cost: '$50', best: 'Best overall. Senior-friendly remote. Easy.', good: 'Best overall.' },
  { name: 'Apple TV 4K', cost: '$130', best: 'Premium. Best for Apple ecosystem.', good: 'Best premium.' },
  { name: 'Amazon Fire TV Stick 4K', cost: '$50', best: 'Cheap. Voice with Alexa.', good: 'Best Amazon.' },
  { name: 'Chromecast with Google TV 4K', cost: '$50', best: 'Cast from phone easy. Google integrated.', good: 'Best Android.' },
  { name: 'Smart TV (built-in)', cost: 'FREE if have', best: 'No extra device. Built-in apps.', good: 'Best convenience.' },
];

export default function StreamingDeviceCompare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Streaming Device Compare for Seniors | TekSure" description="Roku vs Apple TV vs Fire vs Chromecast. Plain-English picks for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MonitorPlay className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Streaming Device Compare</h1>
          <p className="text-lg text-muted-foreground">Pick the right device for your TV.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Roku = senior favorite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Big simple buttons on remote.</li>
              <li>Each app on home screen as tile.</li>
              <li>No fancy menus.</li>
              <li>Just plug in HDMI + WiFi.</li>
              <li>$50 setup forever.</li>
              <li>Voice search if needed.</li>
              <li>Senior-friendly support phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (10 min)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plug device into TV HDMI port.</li>
              <li>Plug power into wall outlet (or USB on TV).</li>
              <li>Switch TV to that HDMI input.</li>
              <li>Connect to home WiFi (need WiFi password).</li>
              <li>Sign into streaming services (need passwords).</li>
              <li>Done.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart TV avoids extra device</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most TVs 2018+ have built-in apps.</li>
              <li>Samsung, LG, Sony, TCL, Vizio.</li>
              <li>Same Netflix + others built-in.</li>
              <li>Sometimes slower / older hardware.</li>
              <li>Free if you already have it.</li>
              <li>Add Roku later if too slow.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free streaming services (no fees)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tubi</strong> — free movies + TV with ads.</li>
              <li><strong>Pluto TV</strong> — live + on-demand free.</li>
              <li><strong>Roku Channel</strong> — free movies.</li>
              <li><strong>Freevee (Amazon)</strong> — free with ads.</li>
              <li><strong>YouTube</strong> — endless free.</li>
              <li>Add to your Roku — surprised how good free is.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Help available</h3>
            <p className="text-sm text-muted-foreground">Free Roku/Apple TV setup at: Best Buy, Apple Store, family member, Comcast/Spectrum tech (often free if subscriber). Don&apos;t struggle alone. 30 min setup = years of streaming. Worth it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
