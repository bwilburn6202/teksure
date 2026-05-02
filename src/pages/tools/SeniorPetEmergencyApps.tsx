import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function SeniorPetEmergencyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Emergency Apps for Seniors — TekSure" description="Pet poison hotline, emergency vet finder, ICE for pets." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Emergency</h1>
          <p className="text-lg text-muted-foreground">When seconds matter.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">ASPCA Poison Control</h2><p>1-888-426-4435. $85 fee. 24/7 expert advice.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pet Poison Helpline</h2><p>1-855-764-7661. $85 fee. Same as ASPCA.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pet First Aid by Red Cross</h2><p>FREE app. Step-by-step pet emergency help.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Emergency vet finder</h2><p>VetFinder app. 24/7 emergency vets near you.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pet ICE card</h2><p>In wallet: pet name, vet, emergency contact for pet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pet sitter info</h2><p>Tell neighbor about pet. If you go to hospital, pet has care.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $85 ASPCA fee credited if you go to vet that day. Worth calling first.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
