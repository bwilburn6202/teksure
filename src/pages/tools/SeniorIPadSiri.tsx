import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';

export default function SeniorIPadSiri() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Siri on iPad — Senior Guide" description="Use voice commands with Siri on iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mic className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Siri on iPad</h1>
          <p className="text-lg text-muted-foreground">Talk to your iPad — it answers.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Turn Siri on</h2><p>Settings, Siri & Search. Turn on Listen for Hey Siri. Train your voice when prompted.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Ask a question</h2><p>Say Hey Siri, what is the weather. Or hold the top button and speak.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Set a timer</h2><p>Hey Siri, set a 10-minute timer. Great for cooking when your hands are busy.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Send a message</h2><p>Hey Siri, text my daughter I am running late. Siri reads back before sending.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Make calls</h2><p>Hey Siri, call Bob. Works through FaceTime if Bob has an Apple device.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Reminders</h2><p>Hey Siri, remind me to take my pills at 8 AM. Done in seconds.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Siri works without a keyboard. Helpful when typing is hard or hands are full.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
