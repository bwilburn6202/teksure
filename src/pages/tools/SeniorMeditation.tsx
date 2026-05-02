import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorMeditation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meditation Apps for Seniors — Senior Guide" description="Calm your mind with meditation apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meditation Apps</h1>
          <p className="text-lg text-muted-foreground">Calm and sleep on demand.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Calm</h2><p>$70/year. Sleep stories from Matthew McConaughey, Stephen Fry. 5-minute calm sessions.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Headspace</h2><p>$70/year. Andy Puddicombe's voice. Beginner-friendly. Many guided programs.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Insight Timer</h2><p>Free version huge. Thousands of free meditations. Pay only if you want premium teachers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. SilverSneakers GO</h2><p>If you have Medicare Advantage with SilverSneakers, free meditation lessons included.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. YouTube</h2><p>Free guided meditations. Search 10-minute meditation seniors. Lots of choices.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Breathe</h2><p>iPhone Breathe app or Android Breathing exercises. 1-minute breathwork. Free, built in.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Studies show daily meditation improves blood pressure, sleep, and mood for older adults.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
