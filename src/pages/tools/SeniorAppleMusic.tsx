import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function SeniorAppleMusic() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Music for Seniors — TekSure" description="Apple Music for seniors — lyrics, family, classical music, voice control." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Music for Seniors</h1>
          <p className="text-lg text-muted-foreground">Music for Apple users.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$11/month. Family $17/month for 6 people.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">100M songs</h2><p>Largest catalog. Includes oldies, classical, jazz seniors love.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lyrics</h2><p>Tap a song. See lyrics. Sing along. Karaoke at home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple One $20/month</h2><p>Bundle: Apple Music + Apple TV+ + iCloud + Arcade. Best value.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Classical</h2><p>Apple Music Classical (separate app, included). Best for senior classical fans.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice control</h2><p>&ldquo;Hey Siri, play Frank Sinatra Apple Music.&rdquo; Hands-free.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Auto-renews on iPhone. Set calendar reminder to evaluate yearly.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
