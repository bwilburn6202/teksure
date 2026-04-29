import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function SpotifyForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Spotify for Seniors — Setup + Tips | TekSure" description="100M songs, $11/mo. Plain-English guide to Spotify, Apple Music, Pandora — for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Spotify for Seniors</h1>
          <p className="text-lg text-muted-foreground">All music ever, $11/mo.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick a service</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Spotify</strong> — $11/mo. Biggest. Best playlists.</li>
              <li><strong>Apple Music</strong> — $11/mo. Best on iPhone.</li>
              <li><strong>YouTube Music</strong> — $11/mo. Comes with YouTube Premium.</li>
              <li><strong>Amazon Music Unlimited</strong> — $9/mo for Prime members.</li>
              <li><strong>Pandora</strong> — Free with ads, or $5/mo. Older-friendly UI.</li>
              <li><strong>Spotify Free</strong> — works fine with ads.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Voice control: "Alexa, play the Beatles" / "Hey Siri, play Sinatra".</li>
              <li>Settings → bigger text size in app.</li>
              <li>Pin favorite playlists to home.</li>
              <li>Search by song / artist / album / lyrics — works.</li>
              <li>"Made for You" playlists are smart suggestions.</li>
              <li>Cast to TV / smart speakers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for seniors playlists</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Search "1950s/60s/70s hits" — playlists ready.</li>
              <li>"Big Band Era".</li>
              <li>"Classical Sleep".</li>
              <li>"Classic Rock Radio".</li>
              <li>"Frank Sinatra Radio".</li>
              <li>Make your OWN playlist — favorites.</li>
              <li>Wedding-year playlist — nostalgic.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family Plan</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Spotify Family — $17/mo for 6 people.</li>
              <li>Apple Music Family — $17/mo for 6.</li>
              <li>Each gets own profile.</li>
              <li>Adult kids + parents share = $3/person.</li>
              <li>Genius for multi-generation households.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Music + memory care</h3>
            <p className="text-sm text-muted-foreground">For dementia patients — music from age 16-25 stays in memory longest. Build playlist of those years. Plays calmly during anxiety. Music &amp; Memory non-profit also free curated playlists for nursing homes.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
