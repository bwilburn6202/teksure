import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Speaker } from 'lucide-react';

export default function SeniorAlexaBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Alexa Basics — Senior Guide" description="Use Amazon Alexa Echo speakers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Speaker className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Alexa Basics</h1>
          <p className="text-lg text-muted-foreground">Voice control for the whole house.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Pick a speaker</h2><p>Echo Dot is $50 — small and good. Echo Show $90 has a screen for video calls.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Set up</h2><p>Plug in. Open free Alexa app. Sign in with Amazon. Walks you through Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Ask questions</h2><p>Alexa, what's the weather. Alexa, set a 10-minute timer. Alexa, play 1950s music.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Make calls</h2><p>Alexa, call Bob. Works through the speaker if Bob has Alexa or app installed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Control lights</h2><p>Pair smart bulbs. Alexa, turn off the bedroom light. Hands free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Care features</h2><p>Alexa Together $20/month — remote check on aging parents. Drop-in feature for emergencies.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Mute the microphone with the button on top if you want privacy. Light turns red when muted.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
