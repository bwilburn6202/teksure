import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

export default function SeniorTextToSpeech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Text-to-Speech for Seniors — Senior Guide" description="Have your phone read text out loud." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Text-to-Speech</h1>
          <p className="text-lg text-muted-foreground">Phone reads text aloud.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. iPhone Speak Screen</h2><p>Settings, Accessibility, Spoken Content. Swipe down with two fingers — phone reads page.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Android Select to Speak</h2><p>Settings, Accessibility, Select to Speak. Highlight any text — phone reads it.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Adjust speed</h2><p>Slow voice if hard to follow. Quicker if you want speed-listening.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Pick a voice</h2><p>Most phones offer male, female, accents. Pick the one you like best.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Use with Kindle</h2><p>Activate Speak Screen while a Kindle e-book is open. Free audiobook.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Voice Dream Reader</h2><p>$15. Premium app. High-quality voices. Best for long reading sessions.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Helpful when eyes are tired. Listen to news, articles, even long emails.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
