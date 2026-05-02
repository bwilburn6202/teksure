import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function SeniorIPadZoomCalls() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Zoom on iPad — Senior Guide" description="How to join and host Zoom video calls on your iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Zoom on iPad</h1>
          <p className="text-lg text-muted-foreground">Video calls on a bigger screen.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Get the app</h2><p>Open the App Store. Search Zoom. Tap Get. Sign in or create a free account.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Join a meeting</h2><p>Tap the link in your email or text. Zoom opens. Tap Join with Video and Join with Audio.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Mute and unmute</h2><p>Tap the screen to see buttons. The microphone button mutes you. Tap again to unmute.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Turn camera on or off</h2><p>The camera icon shows or hides your face. Useful if you need a moment off-screen.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Gallery view</h2><p>Tap the layout icon to see everyone at once instead of just the speaker.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Stand it up</h2><p>A simple iPad stand keeps it steady so your hands stay free during the call.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Free Zoom calls last 40 minutes with 3 or more people. One-on-one calls have no time limit.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
