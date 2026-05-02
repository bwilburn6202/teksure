import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Languages } from 'lucide-react';

export default function SeniorDuolingo() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Duolingo for Seniors — Senior Guide" description="Learn a language with Duolingo." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Languages className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Duolingo</h1>
          <p className="text-lg text-muted-foreground">15 minutes a day, learn any language.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>App or duolingo.com. Free with ads. Spanish, French, Italian, ASL, more.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Set a goal</h2><p>5-minute goal works for beginners. Streaks reward consistency.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Speak out loud</h2><p>Microphone exercises. Mute if you'd rather not — they're optional.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Stories</h2><p>Read short stories with audio. Best way to learn beyond drills.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Skip ads</h2><p>$10/month removes ads. Good if you use daily. Skip otherwise.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Family plan</h2><p>$15/month for 6 people. Cheaper if grandkids learn too.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Studies show language learning helps maintain memory and brain health as we age.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
