import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorMemoryAids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Memory Aid Apps for Seniors — TekSure" description="Apps to help with memory loss — reminders, photo journaling, dementia tools." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Memory Aid Apps</h1>
          <p className="text-lg text-muted-foreground">Help with memory challenges.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Day One Journal</h2><p>$3/month. Voice or text journal. Auto-saves location and weather.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MindMate</h2><p>Free. Designed for dementia. Brain games and memory exercises.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Constant Therapy</h2><p>Brain rehabilitation app. Used after strokes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photo familiar faces</h2><p>Print and post photos of family with names. Helps recognition daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart speaker reminders</h2><p>&ldquo;Alexa, remind me to take pill at 8.&rdquo; Reduces missed doses.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GPS tracker</h2><p>For wandering risk. AirTag, Tile, or dedicated medical alert with GPS.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Keep one notebook + one calendar in the same place. Habit beats memory.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
