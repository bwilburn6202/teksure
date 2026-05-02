import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function SeniorWallpapers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Wallpapers for Seniors — TekSure" description="Set family photos as wallpaper — iPhone and Android tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Wallpapers</h1>
          <p className="text-lg text-muted-foreground">Family on your home screen.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone wallpaper</h2><p>Settings → Wallpaper → Add New. Pick photo. Set as Home and/or Lock.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android wallpaper</h2><p>Long-press home → Wallpapers. Pick from photos or built-in.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photo Shuffle (iOS)</h2><p>Auto-rotates 5-10 favorite family photos as wallpaper.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Live photos</h2><p>Long-press home wallpaper. Photos move briefly. Magical with grandkids.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big text contrast</h2><p>Choose wallpapers that don&apos;t hide your icons. Solid colors work best.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">ICE info on lock</h2><p>Make wallpaper say &ldquo;If found, call: [number].&rdquo; Helps if lost.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Family photo on home screen = small daily joy. Worth the 30 seconds to set up.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
