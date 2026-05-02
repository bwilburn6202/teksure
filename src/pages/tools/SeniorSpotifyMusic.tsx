import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function SeniorSpotifyMusic() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Spotify for Seniors — Senior Guide" description="Listen to music and podcasts with Spotify." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Spotify</h1>
          <p className="text-lg text-muted-foreground">Millions of songs in your pocket.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free or paid</h2><p>Free has ads and shuffles. $11/month removes ads. Family plan $17/month for 6 people.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search</h2><p>Type song title, artist, or even a lyric. Spotify usually finds it.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Make a playlist</h2><p>Tap Your Library, Create Playlist. Add favorite songs. Plays in order.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Daily Mixes</h2><p>Spotify learns your taste. Daily Mix 1 is your favorite genre. Mix 2 is a neighbor.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Cast to speakers</h2><p>Tap the speaker icon. Stream to Echo, Google, Sonos, or any Bluetooth speaker.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Lyrics</h2><p>Swipe up while a song plays. Lyrics scroll along. Sing along like karaoke.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Senior-friendly playlists: 70s Classic Rock, Oldies, Frank Sinatra Radio. Always free.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
