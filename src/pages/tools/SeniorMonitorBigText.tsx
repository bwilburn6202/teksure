import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor } from 'lucide-react';

export default function SeniorMonitorBigText() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bigger Monitor for Seniors — Senior Guide" description="Add a big monitor for easier viewing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Monitor className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bigger Monitor</h1>
          <p className="text-lg text-muted-foreground">Easier to see, less neck strain.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. 27-inch sweet spot</h2><p>$200-400. Big enough but fits on desk. Plug into laptop.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. 4K resolution</h2><p>Sharper text. Easier on eyes. Worth the small extra cost.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Adjust scaling</h2><p>Settings, Display. Make text larger. 125-150% works for most.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Eye level</h2><p>Top of screen at eye level. Reduces neck strain.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Anti-glare</h2><p>Position perpendicular to windows. Or use anti-glare filter.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Blue light reduction</h2><p>Settings, Night Shift. Warmer colors at night. Better sleep.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>20-20-20 rule: Every 20 minutes, look 20 feet away for 20 seconds. Protects eyes.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
