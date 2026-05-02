import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function SeniorWindowsZoom() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Zoom on Windows — Senior Guide" description="Set up Zoom video calls on your PC." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Zoom on Windows</h1>
          <p className="text-lg text-muted-foreground">Video calls from a bigger screen.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Download Zoom</h2><p>Visit zoom.us. Click Resources, Download. Pick Zoom Workplace for Windows.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Sign up free</h2><p>Free account allows unlimited 1-on-1 calls. 40 minutes for groups of 3+.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Join a meeting</h2><p>Click the link in your email. Zoom opens. Click Join Audio. Click Start Video.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Camera and mic</h2><p>Mute mic when not talking. Click camera to turn off if needed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Gallery view</h2><p>Click View, Gallery to see everyone at once. Speaker view shows whoever is talking.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Test before</h2><p>Visit zoom.us/test before an important call. Tries camera, mic, and speakers.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If video looks dark, sit facing a window or lamp. Good lighting helps more than a fancy camera.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
