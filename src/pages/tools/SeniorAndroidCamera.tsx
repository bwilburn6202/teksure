import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorAndroidCamera() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Camera on Android — Senior Guide" description="Take great photos on your Android phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Camera on Android</h1>
          <p className="text-lg text-muted-foreground">Capture moments quickly.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Camera fast</h2><p>Double-tap the side button. Camera opens even from the lock screen.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Tap to focus</h2><p>Tap the subject on screen. The camera focuses there. Slide to brighten.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Selfie mode</h2><p>Tap the camera-flip icon. The front camera turns on. Smile.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Portrait mode</h2><p>Tap Portrait at the bottom. Background blurs nicely. Best for people up close.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Zoom</h2><p>Pinch out to zoom in. Try not to use digital zoom — quality drops fast.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Find your photo</h2><p>Tap the small thumbnail in the corner to see your last shot. Or open Google Photos.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Hold steady and take 2-3 shots in a row. Pick the best one. Even pros do this.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
