import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube } from 'lucide-react';

export default function SeniorYouTubeTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="YouTube for Seniors — TekSure" description="Use YouTube safely — skip ads, find walkthroughs, and enjoy concerts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Youtube className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">YouTube for Seniors</h1>
          <p className="text-lg text-muted-foreground">The world&apos;s biggest free video library.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free forever</h2><p>The basic version is free. Just sign in with Google.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip ads — YouTube Premium</h2><p>$13.99/month removes all ads. Includes background music play.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Captions</h2><p>Tap CC button. Even auto-captions work on most videos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Slow speed</h2><p>Tap gear icon → Playback speed → 0.75x. Helpful for fast talkers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Subscribe to favorites</h2><p>Hit the red Subscribe button. Notifications when new videos post.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Apple Support official channel</li><li>AARP</li><li>How-To Geek</li><li>Senior Planet</li></ul></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Add &ldquo;for seniors&rdquo; to any search to find clearer, slower walkthroughs.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
