import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorPapaCompanions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Papa Companions for Seniors — TekSure" description="Companion care apps — Papa, Mon Ami, college students help seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Papa Companions</h1>
          <p className="text-lg text-muted-foreground">Connection without family burden.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Papa</h2><p>Often FREE through Medicare Advantage. Companion + transportation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mon Ami</h2><p>$30/visit. College students visit. Conversation + activities.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What Papa pals do</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Drive to doctor</li><li>Help with errands</li><li>Tech help</li><li>Just visit</li><li>Light housework</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No medical care</h2><p>Companion = social. Not a nurse. Different from home health.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior Companions</h2><p>FREE through AmeriCorps Seniors. Volunteer-based.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Loneliness epidemic</h2><p>Surgeon General declared loneliness crisis. Companion programs help.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Papa pals often free with Medicare Advantage. Ask your plan.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
