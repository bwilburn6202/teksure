import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function SeniorPillReminders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pill Reminders — Senior Guide" description="Use apps to remember every dose." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pill Reminders</h1>
          <p className="text-lg text-muted-foreground">Never miss a dose again.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Medisafe</h2><p>Free. Tracks every pill. Reminds caregivers if you miss a dose.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. CareZone</h2><p>Take photos of pill bottles. The app recognizes the medication.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Set times</h2><p>Tap Add Medication. Pick how many pills, what times. Phone alarm rings each one.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Refill tracking</h2><p>App reminds when you're running low. Order refills before you run out.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Print medication list</h2><p>Apps generate a list to bring to every doctor visit. Saves you writing it again.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip the gimmicks</h2><p>Free versions are enough. Skip paid premium tiers. They mostly add ads removal.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If you take 5+ medications, ask the pharmacist about a pill organizer too. Belt and suspenders.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
