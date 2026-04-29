import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

const PICKS = [
  { name: 'ZVOX AccuVoice AV157', price: '$200', best: 'Made specifically to help with hearing loss. Has 6-level dialogue boost. Compact size (17") fits any TV.', cons: 'Plain look. Not for music.' },
  { name: 'Roku Streambar Pro', price: '$180', best: 'Sound bar AND streaming stick in one. Dialogue mode for clearer voices. 4K Roku built in.', cons: 'TV must support HDMI ARC.' },
  { name: 'Bose Solo 5', price: '$200', best: 'Single-bar simple. Strong dialogue mode. Easy to use remote.', cons: 'No surround sound (still better than TV speakers).' },
  { name: 'Sonos Beam (Gen 2)', price: '$450', best: 'Best premium sound bar for both TV and music. Voice clarity. Adds streaming music.', cons: 'Expensive. Best with whole Sonos ecosystem.' },
  { name: 'Vizio M-Series Elevate', price: '$700-1000', best: 'Full surround setup with subwoofer.', cons: 'Overkill for most.' },
  { name: 'Saregama Carvaan / Yamaha YAS-209', price: '$140-300', best: 'Budget options under $300 with subwoofer included.', cons: 'Setup more complex.' },
];

export default function TvSoundBarPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TV Sound Bar Picker — Hear TV Dialogue Clearly | TekSure" description="Can\'t understand TV dialogue? A $200 sound bar fixes it. Plain-English picks for sound bars with voice-clarity modes for hearing loss." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TV Sound Bar Picker</h1>
          <p className="text-lg text-muted-foreground">"Can\'t hear the dialogue?" Single best fix.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why your TV sounds bad</h2>
            <p className="text-sm">Modern TVs are thin — 1/2" thick — leaving no room for proper speakers. The factory speakers point backward, away from you. Music sounds muddy. Dialogue gets lost. A sound bar fixes this in 5 minutes.</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.price}</span>
                </div>
                <p className="text-sm mb-1"><strong>Best:</strong> {p.best}</p>
                <p className="text-sm text-muted-foreground"><strong>Cons:</strong> {p.cons}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy install</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Place sound bar in front of the TV (or wall-mount below). Tabletop placement is fine.</li>
              <li>Connect to the TV with the included HDMI cable. (Or with optical/Toslink if HDMI doesn\'t work.)</li>
              <li>Plug sound bar into a wall outlet.</li>
              <li>Turn TV on. TV may auto-detect; otherwise: TV menu → Sound → Audio Output → "External Speaker" or "HDMI ARC".</li>
              <li>Use sound bar\'s remote (or its phone app) to enable "Dialogue", "Voice", or "Speech" mode.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Helpful features for hearing loss</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Dialogue/Voice mode</strong> — boosts the frequency range where speech lives.</li>
              <li><strong>Night mode</strong> — softens loud sounds (gunfire, music) so dialogue stays clear without the volume jumping.</li>
              <li><strong>Bluetooth headphone pairing</strong> — pair AirPods or hearing aids directly to the sound bar. You hear it; spouse doesn\'t need to.</li>
              <li><strong>Closed captions</strong> — turn them on. Even good hearers find this helps for accents or background noise.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">If hearing dialogue is the main issue, get the <strong>ZVOX AccuVoice AV157</strong>. Made for this exact problem. $200 well spent.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
