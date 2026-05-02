import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorCaringApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Caregiver Apps for Seniors — TekSure" description="Apps for adult children caring for senior parents — Lotsa Helping Hands, CaringBridge." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Caregiver Apps</h1>
          <p className="text-lg text-muted-foreground">Coordinate help. Share updates.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lotsa Helping Hands</h2><p>FREE. Schedule meals, rides, and visits. Whole family contributes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CaringBridge</h2><p>FREE. Private health journal. Share updates with family without 50 phone calls.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Carely</h2><p>FREE. Family group chat for senior care. Photos, schedules, alerts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CareZone</h2><p>FREE. Track meds, appointments, and contacts. Photo of pill bottle auto-fills info.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aloe Care Health</h2><p>$25/month. Smart speaker + sensors. Voice-activated emergency response.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Caregiver burnout help</h2><p>AARP Caregiver Resource Center is free. Real support.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: One family group chat replaces 100 confused phone calls.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
