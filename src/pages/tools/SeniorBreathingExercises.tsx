import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function SeniorBreathingExercises() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Breathing Exercises for Seniors — TekSure" description="Breathing apps for seniors — Breathe, Calm, vagus nerve activation." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Breathing Exercises</h1>
          <p className="text-lg text-muted-foreground">Free. Effective. Always available.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Box breathing</h2><p>4-4-4-4. Inhale 4, hold 4, exhale 4, hold 4. 5 minutes lowers BP.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">4-7-8 breathing</h2><p>Inhale 4, hold 7, exhale 8. Falls asleep in 1-2 minutes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apps</h2><p>Calm, Headspace, Breathwrk. Guided breathing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Watch breathe</h2><p>FREE. Reminds throughout day. Vibrates to time breaths.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vagus nerve</h2><p>Long exhales activate. Reduces inflammation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pulmonary rehab</h2><p>Medicare covers. Breathing for COPD/asthma. Real benefits.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 5 min daily. Lower BP, less anxiety, better sleep. Free.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
