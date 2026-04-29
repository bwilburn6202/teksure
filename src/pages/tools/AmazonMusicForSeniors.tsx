import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function AmazonMusicForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Music for Seniors | TekSure" description="Amazon Music tiers. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amazon Music</h1>
          <p className="text-lg text-muted-foreground">If you have Prime — already free.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">3 tiers explained</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Free</strong> — ad-supported, basic.</li>
              <li><strong>Prime Music</strong> — included with Prime ($139/yr).</li>
              <li><strong>Music Unlimited</strong> — $11/mo, 100M songs.</li>
              <li>Most seniors have Prime.</li>
              <li>Try Prime version first.</li>
              <li>Upgrade if want bigger library.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Built-in for Echo</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Echo Dot, Show — Amazon Music default.</li>
              <li>&quot;Alexa, play Beatles&quot;.</li>
              <li>&quot;Alexa, play 60s music&quot;.</li>
              <li>&quot;Alexa, what song is this?&quot;</li>
              <li>Multi-room music sync.</li>
              <li>Voice control easy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pricing tip</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Single Echo + Music Unlimited — $5/mo.</li>
              <li>Cheapest streaming for one device.</li>
              <li>Prime Music included free with Prime.</li>
              <li>Family plan — 6 people $17/mo.</li>
              <li>Annual subscription saves 15%.</li>
              <li>Music Unlimited 30-day free trial.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Already have Amazon account.</li>
              <li>Download Amazon Music app.</li>
              <li>Sign in with Amazon login.</li>
              <li>Choose plan.</li>
              <li>Browse playlists.</li>
              <li>&quot;My Library&quot; — saved music.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Audiobooks too</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Music Unlimited includes podcasts free.</li>
              <li>Audible separate ($15/mo).</li>
              <li>Audible Plus tier with Prime.</li>
              <li>Spoken word + music.</li>
              <li>Combination saves $.</li>
              <li>Library version of all.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">vs others</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Amazon — best if Prime member.</li>
              <li>Apple — best for Apple users.</li>
              <li>Spotify — best for sharing.</li>
              <li>YouTube — best for videos.</li>
              <li>Pandora — best for radio.</li>
              <li>All free tiers available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Already paying for Prime?</h3>
            <p className="text-sm text-muted-foreground">Prime Music free with Prime ($139/yr). Most seniors don&apos;t realize. Includes 2M songs (vs 100M Unlimited). For most listening — Prime version sufficient. No additional cost. Free shipping + Prime Video + Prime Music = great value. Cancel Apple/Spotify if you have Prime — overlap.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
