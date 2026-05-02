import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function SeniorVideoCallEtiquette() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Video Call Etiquette for Seniors — TekSure" description="Look and sound your best on video calls — lighting, audio, framing tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Video Call Etiquette</h1>
          <p className="text-lg text-muted-foreground">Look great. Sound clear.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lighting</h2><p>Face a window or lamp. Don&apos;t sit with light behind you (silhouette).</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Camera at eye level</h2><p>Use a stand. Looking down isn&apos;t flattering. Phone holder $15.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Frame yourself</h2><p>Show shoulders + head. Not just face. Not just chest.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Audio</h2><p>Use AirPods or earbuds. Better than phone speaker for both you and them.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mute when not talking</h2><p>Background noise is annoying on group calls. Mute and unmute.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Test before</h2><p>Open camera/mic 5 minutes early. Adjust before doctor or important calls.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $40 ring light + phone tripod = professional video calls forever.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
