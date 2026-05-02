import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorLyftRideshare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Lyft for Seniors — Senior Guide" description="Use Lyft to get rides on your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Lyft Rideshare</h1>
          <p className="text-lg text-muted-foreground">Friendly alternative to Uber.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up</h2><p>Free. Same rules as Uber. Pay through the app, tip optional.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Compare prices</h2><p>Sometimes cheaper than Uber, sometimes pricier. Check both apps for big trips.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Schedule ahead</h2><p>Book a ride days in advance for airport trips. Confirms the night before.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Lyft Healthcare</h2><p>Some doctor offices and Medicare plans book Lyft rides for free to appointments.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Wait time</h2><p>Most cities under 5 minutes. Rural areas may take 15+ minutes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Confirm before getting in</h2><p>License plate, driver name, photo all in the app. Match all three before opening the door.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Both Uber and Lyft track every trip. If anything feels wrong, share trip with family.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
