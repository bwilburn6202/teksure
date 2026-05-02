import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

export default function SeniorFocusModes() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Focus Modes for Seniors — TekSure" description="Silence phone for sleep, family time — Focus Modes on iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Focus Modes</h1>
          <p className="text-lg text-muted-foreground">Silence phone. Be present.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPhone Focus</h2><p>Settings → Focus. Sleep, Personal, Work. Each silences different apps.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Android Modes</h2><p>Settings → Digital Wellbeing → Modes. Same idea.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sleep Focus</h2><p>10 PM-7 AM auto-silences everything except family emergencies.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Allow only family</h2><p>Pick which contacts can ring through. Spouse + kids only.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Worship Focus</h2><p>Auto-silence at 10 AM Sunday. Church without buzzes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Driving Focus</h2><p>Auto-replies to texts: &ldquo;I&apos;m driving. Will text back when stopped.&rdquo;</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Set Sleep Focus once. Better sleep starts that night.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
