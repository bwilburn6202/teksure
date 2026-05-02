import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PawPrint } from 'lucide-react';

export default function SeniorPetCareApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Care Apps for Seniors — Senior Guide" description="Useful apps for pet owners." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PawPrint className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Care Apps</h1>
          <p className="text-lg text-muted-foreground">Help for happy pets.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Pet First Aid (Red Cross)</h2><p>Free. Step-by-step first aid for pet emergencies.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Rover</h2><p>Find dog walkers and sitters. $20-30 per visit. Insured.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Chewy app</h2><p>Auto-ship pet food. 5-10% discount. No more lugging heavy bags.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. ASPCA Poison Control</h2><p>Free hotline 1-888-426-4435. Free app. Lifesaver if pet eats something bad.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Vet visits</h2><p>Many vets use Petly or PetDesk. Schedule, refill meds, view records.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Pet insurance</h2><p>Lemonade, Trupanion, Healthy Paws. $30-60/month. Saves big with senior pets.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pets keep seniors active and connected. Studies link pet ownership to lower blood pressure.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
