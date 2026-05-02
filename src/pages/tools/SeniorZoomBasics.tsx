import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function SeniorZoomBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Zoom Basics for Seniors — TekSure" description="How seniors join and host Zoom meetings — clear step-by-step guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Zoom Basics for Seniors</h1>
          <p className="text-lg text-muted-foreground">See your family. Attend meetings. Take classes.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free to use</h2><p>Zoom is free for 40-minute meetings. Most senior calls fit in that time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Install</h2><p>Download Zoom from zoom.us, App Store, or Google Play. Works on phone, tablet, or computer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Join a meeting</h2><p>Tap the link your family sent. Or open Zoom → Join → enter Meeting ID.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mute and video</h2><p>Bottom-left buttons. Microphone icon to mute. Camera icon to turn video off.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Closed captions</h2><p>Tap More → Captions → Show. Auto-captions are now free for all users.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Test before</h2><p>Visit zoom.us/test before an important meeting. Make sure camera and mic work.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Practice with a family member 10 minutes before a doctor&apos;s telehealth visit.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
