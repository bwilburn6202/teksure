import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorPetHealthApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Health Apps for Seniors — TekSure" description="Track pet health — PetDesk, Whistle, Furbo, vet records apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Health Apps</h1>
          <p className="text-lg text-muted-foreground">Track pet wellness like your own.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PetDesk</h2><p>FREE. Connects to most US vet clinics. Vaccine reminders, refills.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Whistle Health</h2><p>$80 device + $9/month. Tracks pet activity, sleep, scratching.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FitBark</h2><p>$70 device. Activity tracker for dogs. Compare to breed averages.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">11pets</h2><p>FREE. Track meds, vet visits, weight. Multi-pet support.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior pet tip</h2><p>Senior pets need more frequent vet visits. App reminders help.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pet insurance</h2><p>Trupanion and Healthy Paws apps make claims easy. Saves $1000s on emergencies.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Take photo of vet records. Easy to share with pet sitter or new vet.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
