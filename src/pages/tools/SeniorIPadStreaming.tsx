import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function SeniorIPadStreaming() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Streaming on iPad — Senior Guide" description="Watch movies and shows on your iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Streaming on iPad</h1>
          <p className="text-lg text-muted-foreground">Movies and shows anywhere in the house.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Pick a service</h2><p>Netflix, Hulu, Prime Video, Apple TV+, Max. Most cost $8–$15 a month.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Free options</h2><p>YouTube, Tubi, Pluto TV, Freevee. Some have ads but cost nothing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Get a stand</h2><p>A folding stand props the iPad on the kitchen counter. Hands-free while you cook or eat.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Headphones</h2><p>AirPods or any Bluetooth headphones connect in seconds. Won't bother others.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Captions</h2><p>Tap the speech-bubble icon while playing. Turn on subtitles for clearer dialogue.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Cancel anytime</h2><p>Open Settings, your name, Subscriptions. Tap any service to cancel — no phone call needed.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Many libraries offer free streaming through Hoopla or Kanopy with your library card.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
