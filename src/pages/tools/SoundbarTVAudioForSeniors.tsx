import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Speaker } from 'lucide-react';

export default function SoundbarTVAudioForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TV Soundbar Picks for Seniors | TekSure" description="Best soundbars for seniors with hearing loss. Hear dialogue clearly again." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Speaker className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TV Soundbars</h1>
          <p className="text-lg text-muted-foreground">Hear TV dialogue clearly again.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why TVs sound bad now</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Modern TVs are slim — speakers are tiny + weak.</li>
              <li>Speakers face down or back, not at viewer.</li>
              <li>Mumbled dialogue common complaint.</li>
              <li>Soundbar fixes this for $100+.</li>
              <li>Big upgrade in clarity.</li>
              <li>Especially helpful with hearing loss.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best soundbars for clear dialogue</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Zvox AccuVoice AV203 — $250, designed for hearing loss.</li>
              <li>Boost AccuVoice levels with one button.</li>
              <li>Sonos Beam — $400, premium quality.</li>
              <li>Vizio V-Series 2.0 — $130, budget pick.</li>
              <li>Bose Solo 5 — $180, simple setup.</li>
              <li>Look for &quot;dialogue mode&quot; in features.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setting up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Connect via HDMI ARC port (best).</li>
              <li>Or optical cable.</li>
              <li>Or Bluetooth (lower quality).</li>
              <li>Place in front of TV, on stand or wall mount.</li>
              <li>TV remote controls volume usually.</li>
              <li>15-minute setup typically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">TV settings to adjust</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Audio output: External Speakers/HDMI.</li>
              <li>Sound mode: Dialogue or Voice.</li>
              <li>Turn off &quot;virtual surround.&quot;</li>
              <li>Turn off bass boost — clutters dialogue.</li>
              <li>Try different sound modes.</li>
              <li>Closed captions also help.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wireless headphones option</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>TV-specific headphones — Sennheiser RS 175 ($300).</li>
              <li>Or basic Bluetooth headphones with TV transmitter.</li>
              <li>Apple AirPods Pro work with Apple TV.</li>
              <li>Hear TV without disturbing spouse.</li>
              <li>Excellent for severe hearing loss.</li>
              <li>Volume independent from speakers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hearing aid pairing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Modern hearing aids stream TV directly.</li>
              <li>TV streamer accessory required ($200–$300).</li>
              <li>Phonak, Oticon, ReSound all offer this.</li>
              <li>Audiologist sets up.</li>
              <li>Hear TV crystal clear into hearing aids.</li>
              <li>Game-changer for moderate-severe loss.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Zvox is built for seniors</h3>
            <p className="text-sm text-muted-foreground">If you struggle to hear TV dialogue, the Zvox AccuVoice AV203 ($250) was specifically designed for seniors with hearing loss. It boosts vocal frequencies independently from background music + effects. Six AccuVoice levels — turn it up just for hard-to-hear shows. Many hearing audiologists recommend it as a $250 upgrade that makes TV enjoyable again.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
