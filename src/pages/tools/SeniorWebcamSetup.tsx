import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorWebcamSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Webcam Setup for Seniors — Senior Guide" description="Pick and use a webcam for video calls." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Webcam Setup</h1>
          <p className="text-lg text-muted-foreground">Look great on video calls.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Logitech C920</h2><p>$70. Most popular. Sharp 1080p video.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Logitech Brio</h2><p>$200. 4K. Best for serious video calls or church streaming.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Use iPhone instead</h2><p>Continuity Camera. iPhone becomes Mac webcam. Free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Lighting matters</h2><p>Lamp behind camera lighting your face. Bright window in front.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Eye level</h2><p>Camera at eye level. Stack books under laptop. Or use webcam stand.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Privacy slider</h2><p>Cover the lens when not in use. Most webcams include one.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Test in Photo Booth or Camera app before important calls. Saves embarrassment.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
