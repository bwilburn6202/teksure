import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Palette } from 'lucide-react';

export default function SeniorPaintingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Painting Apps for Seniors — Senior Guide" description="Digital and color reference apps for painters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Palette className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Painting Apps</h1>
          <p className="text-lg text-muted-foreground">For watercolors, oils, and digital.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Procreate</h2><p>$15. iPad only. Best digital painting app. Smooth like real brushes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. ArtRage</h2><p>$5-10. Realistic oils, watercolors, acrylics on iPad or Android.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Color Capture (Benjamin Moore)</h2><p>Free. Snap photo. App finds matching paint color for walls.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Color theory apps</h2><p>Adobe Color free. Pick complementary colors for art projects.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. YouTube tutorials</h2><p>Bob Ross full episodes free. Bob's calming voice still teaches well.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Reference photos</h2><p>Free Pixabay or Pexels. Royalty-free photos for painting practice.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Painting helps fine motor skills. Even 15 minutes a day delivers big mental health benefits.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
