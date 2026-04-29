import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function AppleMusicForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Music for Seniors | TekSure" description="Apple Music basics. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Music</h1>
          <p className="text-lg text-muted-foreground">100M+ songs. $11/month.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Apple Music?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>100M+ songs.</li>
              <li>Lossless audio quality.</li>
              <li>Lyrics with sing-along.</li>
              <li>Built into iPhone, iPad, Mac.</li>
              <li>Apple Watch compatible.</li>
              <li>1-month free trial.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pricing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Individual — $11/mo.</li>
              <li>Student — $6/mo.</li>
              <li>Family (6 ppl) — $17/mo.</li>
              <li>Apple One bundle — $20/mo.</li>
              <li>Verizon discount sometimes.</li>
              <li>Cancel anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Music app on iPhone.</li>
              <li>Tap &quot;Try It Free&quot;.</li>
              <li>Or Settings &gt; Music &gt; Subscribe.</li>
              <li>Sign in with Apple ID.</li>
              <li>1 month free.</li>
              <li>Cancel before trial ends to skip charge.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Hey Siri, play Frank Sinatra&quot;.</li>
              <li>Auto-create playlists by mood.</li>
              <li>Lyrics on screen.</li>
              <li>Apple Music Classical free.</li>
              <li>Decades stations — &quot;60s Hits&quot;.</li>
              <li>Sleep timer built-in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior playlist ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Big Band classics.</li>
              <li>50s + 60s rock.</li>
              <li>Frank Sinatra essentials.</li>
              <li>Beatles full discography.</li>
              <li>Country classics.</li>
              <li>Gospel + spiritual.</li>
              <li>Christmas anytime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Music alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Spotify</strong> — non-Apple users.</li>
              <li><strong>Amazon Music</strong> — Prime included.</li>
              <li><strong>YouTube Music</strong> — videos too.</li>
              <li><strong>Pandora</strong> — radio-style.</li>
              <li>Free tiers available all.</li>
              <li>Try multiple — pick favorite.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Music + memory</h3>
            <p className="text-sm text-muted-foreground">Music from teens-20s most powerful for memory. Play music from your youth daily — proven brain health benefit. Family sing-alongs. Apple Music Classical sub-section. Karaoke versions of favorites. Play during cooking, walking, gardening. Music = senior wellness foundation.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
