import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SeniorPenPalApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pen Pal Apps for Seniors — TekSure" description="Modern pen pals for seniors — Slowly app, traditional letter writing programs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pen Pal Apps</h1>
          <p className="text-lg text-muted-foreground">Make new friends through letters.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Slowly</h2><p>FREE app. Letters take real time to &ldquo;arrive&rdquo; based on actual distance.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pen Pal World</h2><p>Free. Connect with real letter writers worldwide.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Letters Against Isolation</h2><p>Receive handwritten letters from volunteers. lettersagainstisolation.com.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Love For The Elderly</h2><p>Sign up to receive free monthly letters from kind volunteers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Veterans pen pals</h2><p>Operation Gratitude pairs you with active military for letters.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>Use a P.O. Box, not home address. Keep last name private until trust is built.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Receiving real mail brightens any day. Sign up for at least one program.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
