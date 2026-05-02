import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorBrainTraining() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Brain Training Apps — Senior Guide" description="Use brain training apps to stay mentally sharp." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Brain Training</h1>
          <p className="text-lg text-muted-foreground">Keep your mind sharp daily.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Lumosity</h2><p>$11/month or $79/year. Designed by neuroscientists. Daily 10-minute workouts.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Elevate</h2><p>$5/month or $40/year. Focuses on reading, writing, math.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Peak</h2><p>$5/month. 45+ games for memory, attention, problem solving. Free version available.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. BrainHQ</h2><p>$14/month. Used in research studies. Strong evidence for benefits.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Be skeptical</h2><p>No app makes you smarter overnight. They are best as one part of staying mentally active.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Free works too</h2><p>Crossword puzzles, sudoku, reading, learning a language all help similarly.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Combine apps with social activity. Friends and laughter help the brain more than any app.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
