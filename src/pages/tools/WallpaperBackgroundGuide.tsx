import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

export default function WallpaperBackgroundGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wallpaper + Background Guide | TekSure" description="Set photos as wallpaper. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wallpaper Guide</h1>
          <p className="text-lg text-muted-foreground">Make device feel like home.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone wallpaper</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings, then &quot;Wallpaper&quot;.</li>
              <li>&quot;Add New Wallpaper&quot;.</li>
              <li>Choose Photos to use your photo.</li>
              <li>Pinch to zoom + position.</li>
              <li>Set lock screen + home screen.</li>
              <li>Or use built-in art collection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android wallpaper</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Long-press home screen empty area.</li>
              <li>&quot;Wallpapers &amp; style&quot;.</li>
              <li>Choose photo or built-in.</li>
              <li>&quot;Gallery&quot; → your photos.</li>
              <li>Set lock + home screen.</li>
              <li>Pixel — daily AI-generated wallpapers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Windows desktop background</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Right-click desktop, then &quot;Personalize&quot;.</li>
              <li>&quot;Background&quot;.</li>
              <li>Choose Picture / Solid Color / Slideshow.</li>
              <li>Browse to your photos folder.</li>
              <li>Slideshow rotates photos.</li>
              <li>Windows Spotlight — bing.com beautiful daily.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mac desktop</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>System Settings, then &quot;Wallpaper&quot;.</li>
              <li>Built-in dynamic options.</li>
              <li>Or click &quot;+&quot; to add photo.</li>
              <li>Or right-click photo → &quot;Set Desktop Picture&quot;.</li>
              <li>Auto-rotate from album.</li>
              <li>Different per monitor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photo of family ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Grandkids — favorite faces.</li>
              <li>Wedding photo.</li>
              <li>Beach / vacation.</li>
              <li>Garden / flowers.</li>
              <li>Memorial photo of loved one.</li>
              <li>Pet — instant smile.</li>
              <li>Sunset/sunrise — peaceful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free wallpaper sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Unsplash.com</strong> — beautiful free photos.</li>
              <li><strong>Pexels.com</strong> — free pictures.</li>
              <li><strong>NASA</strong> — astronomy photos.</li>
              <li><strong>National Park Service</strong> — landscapes.</li>
              <li><strong>Bing Wallpaper</strong> — daily new.</li>
              <li>Built-in collections.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Avoid distracting wallpaper</h3>
            <p className="text-sm text-muted-foreground">Busy wallpaper makes app icons hard to see. Use simple solid color or low-contrast photo. Lock screen — show favorite face. Home screen — easier to see icons. Rotate seasonal — Christmas in December, beach in summer. Small touches make device feel like yours.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
