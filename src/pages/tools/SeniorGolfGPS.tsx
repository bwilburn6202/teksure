import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Target } from 'lucide-react';

export default function SeniorGolfGPS() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Golf GPS Apps — Senior Guide" description="GPS distance apps for golf." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Target className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Golf GPS Apps</h1>
          <p className="text-lg text-muted-foreground">Know exact yardages on every hole.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. GolfShot</h2><p>$50/year. GPS, scoring, stats. Maps 40,000+ courses.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. 18Birdies</h2><p>Free version. Free GPS distances and scoring. $90/year for stats.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Garmin Approach</h2><p>$200-400 watch with golf GPS built in. No phone needed on the course.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Bushnell Phantom</h2><p>$120 GPS clip. Clips to the cart. Big yardage display.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Score with phone</h2><p>Tap each shot. App tracks your handicap automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip rangefinders</h2><p>Tournaments often allow GPS. Rangefinders cost $200+. GPS app does the same.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Battery saver mode prolongs phone battery during 18-hole rounds.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
