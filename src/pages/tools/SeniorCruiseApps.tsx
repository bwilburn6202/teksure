import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ship } from 'lucide-react';

export default function SeniorCruiseApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cruise Line Apps — Senior Guide" description="Use cruise apps for boarding and onboard." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ship className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cruise Line Apps</h1>
          <p className="text-lg text-muted-foreground">Sail with your phone as helper.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Download before</h2><p>Get the cruise app at home where Wi-Fi is free. Updates can be huge.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Online check-in</h2><p>Save 1+ hours at the port. Upload passport, sign forms in the app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Daily schedule</h2><p>The app replaces the printed daily program. Search shows, dinners, and excursions.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Book onboard</h2><p>Reserve specialty restaurants, shore excursions, and shows from your stateroom.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Wi-Fi calling</h2><p>Many ships allow text and chat between guests free. Keeps you connected at sea.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip the cellular</h2><p>Don't use cell data at sea. International roaming is $10+/MB. Use ship Wi-Fi only.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Major lines: Carnival HUB, Royal Caribbean, Princess MedallionClass, Norwegian, Holland America Navigator.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
