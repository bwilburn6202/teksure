import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function SeniorEmergencyButtons() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency Buttons for Seniors — TekSure" description="Stick-on emergency buttons — Wyze button, Reminder Rosie." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency Buttons</h1>
          <p className="text-lg text-muted-foreground">Stick on. Press. Help.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wyze Button</h2><p>$10. Stick to wall. Press = trigger Alexa routine.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Amazon Echo Button</h2><p>$30. Place anywhere. Trigger routines or calls.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lifeline pendants</h2><p>$30/month. Press = 24/7 monitoring center calls.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Set up routine</h2><p>Press button → Alexa calls family + sounds alarm.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Place by bed</h2><p>Most fall happens at night. Easy reach from bed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big buttons</h2><p>Bigger button + clear label. Senior arthritis friendly.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $10 button + Echo = $30/month medical alert savings.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
