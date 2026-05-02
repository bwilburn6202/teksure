import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function SeniorSpotifyTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Spotify for Seniors — TekSure" description="Spotify tips for seniors — playlists, podcasts, audiobooks, family plan." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Spotify for Seniors</h1>
          <p className="text-lg text-muted-foreground">Music + podcasts + audiobooks.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free</h2><p>FREE with ads. Most songs available. Plenty for casual listening.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Premium $11/month</h2><p>No ads. Higher quality. Audiobook 15 hours/month.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family $17/month</h2><p>Up to 6 people. $3/person. Best deal if family willing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Decade playlists</h2><p>Search &ldquo;60s hits&rdquo; or &ldquo;70s rock.&rdquo; Endless nostalgia.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily Mix</h2><p>Algorithm picks 6 daily playlists based on your taste. Auto-personalized.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Audiobook bonus</h2><p>Premium includes 15 hours/month of audiobooks. Saves Audible cost.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Connect to Echo Dot. &ldquo;Alexa, play 60s rock on Spotify.&rdquo; Hands-free.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
