import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function SeniorRokuGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Roku for Seniors — TekSure" description="How seniors set up and use Roku — easiest streaming device for any TV." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Roku for Seniors</h1>
          <p className="text-lg text-muted-foreground">The easiest streaming device for any TV.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Which Roku to buy</h2><p>Roku Express ($30) for basic. Roku Streaming Stick 4K ($50) for newer TVs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Plug into TV HDMI port. Connect power. Switch TV input to HDMI. Follow on-screen prompts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free channels</h2><p>The Roku Channel, Pluto TV, Tubi, PBS — all free, all senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add Netflix or Hulu</h2><p>Press Home → Streaming Channels → search by name → Add Channel.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice remote</h2><p>Hold microphone button. Say &ldquo;Find Yellowstone.&rdquo; Faster than typing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Captions</h2><p>Press * (asterisk) on remote → Closed captioning → On.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Lost the remote? The Roku app on your phone works as a remote.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
