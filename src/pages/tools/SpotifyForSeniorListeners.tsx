import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function SpotifyForSeniorListeners() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Spotify for Senior Listeners | TekSure" description="Spotify Free + Premium reviewed for senior music + podcast listeners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Spotify</h1>
          <p className="text-lg text-muted-foreground">Music + podcasts in one app.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spotify Free</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free with ads.</li>
              <li>100 million songs.</li>
              <li>Most podcasts free.</li>
              <li>Ads every few songs.</li>
              <li>Shuffle-only on phone.</li>
              <li>Adequate for casual listening.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Spotify Premium</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$11.99/month — no ads, full control.</li>
              <li>Download for offline.</li>
              <li>Pick any song to play.</li>
              <li>Higher audio quality.</li>
              <li>Family Plan: $19.99/mo for 6 users.</li>
              <li>Duo Plan: $16.99/mo for 2 users.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly playlists</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Decade playlists — 50s, 60s, 70s, 80s.</li>
              <li>&quot;All Out 60s&quot; etc.</li>
              <li>Genre playlists — classic rock, jazz, country.</li>
              <li>Discover Weekly — personalized weekly mix.</li>
              <li>Daylist — current mood-based.</li>
              <li>Endless music exploration.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Make playlists</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap &quot;Your Library&quot; → Create Playlist.</li>
              <li>Add songs you find via search.</li>
              <li>Wedding songs, anniversary mix, road trip.</li>
              <li>Share with family.</li>
              <li>Shared playlists with grandkids.</li>
              <li>Curate your own life soundtrack.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple Music vs Spotify</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Music — better integration if you have iPhone.</li>
              <li>Spotify — better playlists + discovery.</li>
              <li>Same price ($11/mo).</li>
              <li>Both have free trials.</li>
              <li>Try both, pick favorite.</li>
              <li>Family plans on both.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cast to TV/speaker</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cast to Bluetooth speaker.</li>
              <li>Sonos integration.</li>
              <li>Apple TV / Roku display.</li>
              <li>Echo / HomePod via voice.</li>
              <li>Better sound than phone speakers.</li>
              <li>Living room becomes concert hall.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Decade playlists are the gateway</h3>
            <p className="text-sm text-muted-foreground">If new to Spotify, search &quot;60s music&quot; (or your favorite decade). Tap &quot;All Out 60s&quot; playlist. 100 hits from your youth play. Many seniors discover music they forgot they loved. Try Free version first — see if you can tolerate ads. Premium worth $12/month if you listen daily.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
