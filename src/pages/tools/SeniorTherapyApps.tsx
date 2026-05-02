import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorTherapyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Therapy Apps for Seniors — TekSure" description="BetterHelp, Talkspace, Medicare-covered therapy options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Therapy Apps</h1>
          <p className="text-lg text-muted-foreground">Mental health support.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">BetterHelp</h2><p>$280/month. Live chat + video therapy. No insurance needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Talkspace</h2><p>$320/month. Some Medicare Advantage covers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare therapy</h2><p>Part B covers 80% of therapist visits. Find Medicare therapists.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SAMHSA helpline</h2><p>FREE 1-800-662-4357. 24/7 free counseling for substance/mental.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">988 lifeline</h2><p>FREE 988. Mental health crisis. 24/7 trained counselors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior peer counseling</h2><p>Many areas have FREE senior peer counselors. Trained volunteers.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Don&apos;t suffer in silence. Therapy works for senior depression.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
