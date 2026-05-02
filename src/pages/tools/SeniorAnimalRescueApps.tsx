import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorAnimalRescueApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Animal Rescue Apps for Seniors — TekSure" description="Find adoptable senior pets — Petfinder, AdoptAPet, local rescue apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Animal Rescue Apps</h1>
          <p className="text-lg text-muted-foreground">Adopt a senior pet for senior life.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Petfinder</h2><p>FREE. Largest US adoption database. Filter by age, size, breed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AdoptAPet</h2><p>FREE. Sister to Petfinder. Includes shelters and rescues.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior pet for seniors</h2><p>Programs match senior dogs/cats with senior owners. Often free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pets for the Elderly</h2><p>Foundation that pays adoption fees for seniors 60+. Free pet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Foster instead of adopt</h2><p>Try a senior pet first. No long commitment. Rescue covers food and vet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior cats easier</h2><p>Less work than puppies. Trained, calm, grateful.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pets reduce loneliness, lower blood pressure, add years. Real medicine.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
