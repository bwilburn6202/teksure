import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function SeniorTravelSecurityApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Travel Security Apps for Seniors — TekSure" description="STEP, embassy locators, safety alerts for senior travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Travel Security Apps</h1>
          <p className="text-lg text-muted-foreground">Stay safe abroad.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart Traveler (STEP)</h2><p>FREE. State Department app. Get alerts. Embassy contacts you in emergency.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sitata</h2><p>FREE. Travel safety alerts. Disease outbreaks. Strikes. Civil unrest.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CDC Travel Health</h2><p>FREE. Vaccinations needed. Disease outbreaks. Medical advice.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Travel.State.Gov</h2><p>FREE. Country-specific safety information.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photograph documents</h2><p>Passport, insurance card, IDs. Email to yourself. Backup if stolen.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hidden money</h2><p>Money belt, hidden pocket. Don&apos;t keep all cash in wallet.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: STEP enrollment essential. Free. State Dept rescues American seniors abroad.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
