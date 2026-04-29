import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function YouTubeMusicForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="YouTube Music for Seniors | TekSure" description="Music + videos. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">YouTube Music</h1>
          <p className="text-lg text-muted-foreground">Music videos + audio.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why YouTube Music?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Music videos included.</li>
              <li>Live concert recordings.</li>
              <li>Old TV performances.</li>
              <li>Rare versions of songs.</li>
              <li>Lyrics + sing-alongs.</li>
              <li>Free with ads.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free vs Premium</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Free</strong> — ads + screen-on required.</li>
              <li><strong>Premium</strong> — $11/mo, no ads.</li>
              <li>Premium = background play.</li>
              <li>Premium downloads for offline.</li>
              <li>YouTube Premium $14/mo includes both.</li>
              <li>Family plan available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>See artists actual videos.</li>
              <li>Watch Beatles on Ed Sullivan.</li>
              <li>Frank Sinatra concert recordings.</li>
              <li>Classical performance videos.</li>
              <li>Sing-along lyrics.</li>
              <li>&quot;Hey Google, play YouTube Music&quot;.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download YouTube Music app.</li>
              <li>Sign in with Google account.</li>
              <li>1-month free trial Premium.</li>
              <li>Browse / search.</li>
              <li>Like songs (heart icon).</li>
              <li>Builds your library.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Old + rare</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>YouTube has fan uploads.</li>
              <li>Songs not on Spotify / Apple.</li>
              <li>1950s TV performances.</li>
              <li>Local musicians.</li>
              <li>Forgotten favorites.</li>
              <li>Comedy + variety shows.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cast to TV</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smart TVs have YouTube Music.</li>
              <li>Or use Chromecast / Apple TV.</li>
              <li>Bigger screen for music videos.</li>
              <li>Living room concerts.</li>
              <li>Sound system speakers.</li>
              <li>Senior-friendly setup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior pick: free</h3>
            <p className="text-sm text-muted-foreground">If don&apos;t mind ads — free version great for seniors. Watch music videos endlessly. Some songs only here. If listening on phone screen-off needed — pay $11. Many seniors stick with regular YouTube — same content, free, video by default. No app needed. Just type song.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
