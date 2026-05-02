import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Headphones } from 'lucide-react';

export default function SeniorPodcastApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Podcast Apps for Seniors — TekSure" description="Free podcast apps for seniors — Apple Podcasts, Spotify, Pocket Casts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Headphones className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Podcast Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Free shows on every topic.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Podcasts</h2><p>FREE built into iPhone. Easy interface. Senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Spotify</h2><p>FREE with Spotify account. Podcasts and music in one app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pocket Casts</h2><p>FREE. Best customization. Speed up slow talkers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior-friendly podcasts</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>This American Life</li><li>NPR Up First</li><li>StoryCorps</li><li>The Daily (NYT)</li><li>Stuff You Should Know</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Listen during</h2><p>Walks, driving, cooking, gardening, doctor waiting rooms.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart speaker</h2><p>&ldquo;Alexa, play NPR&rdquo; or &ldquo;Hey Siri, play This American Life.&rdquo;</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Subscribe to favorites. New episodes auto-download for offline listening.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
