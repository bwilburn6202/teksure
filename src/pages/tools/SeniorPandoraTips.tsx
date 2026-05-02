import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function SeniorPandoraTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pandora Tips for Seniors — TekSure" description="Pandora radio for seniors — make stations, free vs premium." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pandora for Seniors</h1>
          <p className="text-lg text-muted-foreground">Music discovery — easy.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free with ads</h2><p>FREE. Type a song. Pandora plays similar music. Easier than Spotify for many seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pandora Plus</h2><p>$5/month. No ads. Skip more.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pandora Premium</h2><p>$10/month. Pick exact songs. Like Spotify.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Thumbs up/down</h2><p>Pandora learns your taste. Better recommendations over time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice control</h2><p>&ldquo;Alexa, play Pandora.&rdquo; Resumes your station.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easier than Spotify</h2><p>Type a song name. Music starts. No playlists to build.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pandora is best for seniors who want music without thinking about it.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
