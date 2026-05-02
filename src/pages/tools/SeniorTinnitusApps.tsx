import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2 } from 'lucide-react';

export default function SeniorTinnitusApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tinnitus Apps for Seniors — TekSure" description="Manage ringing in ears — Resound Tinnitus Relief, masking sounds." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Volume2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tinnitus Apps</h1>
          <p className="text-lg text-muted-foreground">Live with ringing.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">ReSound Tinnitus Relief</h2><p>FREE. Best free tinnitus app. Custom sounds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">myNoise</h2><p>FREE. White noise + nature sounds. Masks tinnitus.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tinnitracks</h2><p>$130/year. Music therapy specifically for your tinnitus frequency.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hearing aids</h2><p>Often help. Brain focuses on real sound, less on tinnitus.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reduce stress</h2><p>Stress worsens tinnitus. Meditation, exercise help.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Avoid caffeine</h2><p>Coffee, energy drinks. Often makes worse.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Tinnitus rarely cured. Apps make life livable. Real benefit.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
