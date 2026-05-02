import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorPhotoSlideshow() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photo Slideshow Apps for Seniors — TekSure" description="Photo slideshows — Apple TV, screensavers, family room display." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Slideshow</h1>
          <p className="text-lg text-muted-foreground">Photos on TV, screensaver.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple TV</h2><p>$130. Set photos as screensaver. Family photos when not watching.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Echo Show</h2><p>$140. Photo frame mode. Auto-rotates iCloud or Amazon photos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aura digital frame</h2><p>$179. Family texts photos. Frame updates.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Phone Cast</h2><p>Cast photos to TV via Roku, Apple TV. Show family.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best for visits</h2><p>Make slideshow for grandkid visits. Show photos of past times.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Memory cafe</h2><p>For dementia: familiar slideshow soothes. Music + photos powerful.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apple TV screensaver = family photos always. Beautiful living room.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
