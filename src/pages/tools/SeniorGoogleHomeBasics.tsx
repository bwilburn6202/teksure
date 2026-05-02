import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { House } from 'lucide-react';

export default function SeniorGoogleHomeBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Home Basics — Senior Guide" description="Use Google Home and Nest speakers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <House className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Home Basics</h1>
          <p className="text-lg text-muted-foreground">Voice control with Google.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Pick a speaker</h2><p>Nest Mini is $35-50. Nest Hub adds a screen for video calls and recipes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Set up</h2><p>Plug in. Open Google Home app. Sign in with Google. Walks you through Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Wake words</h2><p>Hey Google or Ok Google. Speaker glows when listening.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Ask questions</h2><p>Hey Google, weather today. What's a good knock-knock joke. Set a timer for 5 minutes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Cast TV</h2><p>Hey Google, play news on the living room TV. Works with Chromecast.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Family broadcasts</h2><p>Hey Google, broadcast dinner's ready. Plays through every speaker in the house.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Long-press the mic mute button to disable listening. Useful if guests are over.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
