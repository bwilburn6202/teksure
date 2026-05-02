import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function SeniorVideoCallEtiquette() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Video Call Tips — Senior Guide" description="Look and sound great on video calls." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Video Call Tips</h1>
          <p className="text-lg text-muted-foreground">Look and sound your best.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Light on your face</h2><p>Sit facing a window or lamp. Light behind you makes you a shadow.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Camera at eye level</h2><p>Stack books under your laptop. No more nose-cam angle.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Mute when not talking</h2><p>Reduces background noise like dog barks or kettle whistles.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Tidy background</h2><p>Plain wall is fine. Or use Zoom virtual backgrounds for fun.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Headphones</h2><p>Reduces echo. Family hears you more clearly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Test before</h2><p>Open Zoom 5 minutes early. Test camera, mic, sound. Less stress.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Wear a solid color shirt. Stripes and patterns can blur on camera.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
