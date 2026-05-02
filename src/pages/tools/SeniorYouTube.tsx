import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

export default function SeniorYouTube() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="YouTube for Seniors — Senior Guide" description="Watch and search YouTube videos easily." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Play className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">YouTube for Seniors</h1>
          <p className="text-lg text-muted-foreground">A free library of how-to videos.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Search</h2><p>Open the app. Tap the magnifying glass. Type a topic or person.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Subscribe</h2><p>Found a channel you like? Tap Subscribe. New videos show up in your feed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Captions</h2><p>Tap the CC button. Captions help if audio is hard to follow.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Slow it down</h2><p>Tap the gear icon, Playback speed. 0.75x makes complex tutorials easier.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Skip ads</h2><p>YouTube Premium ($14/month) removes ads, lets you download videos for offline.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip clickbait</h2><p>Stick to known channels: AARP, Apple Support, Microsoft, How-To Geek.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Cast YouTube to your TV using a Chromecast or Apple TV — bigger screen, easier to follow.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
