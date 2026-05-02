import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorChairStandWorkout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chair Workout Apps — Senior Guide" description="Free workout apps for chair-based exercises." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chair Workouts</h1>
          <p className="text-lg text-muted-foreground">Exercise from a chair.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. SilverSneakers GO</h2><p>Free with Medicare Advantage plans. Chair workout videos included.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. YouTube</h2><p>Search Chair yoga seniors. Hundreds of free 10-30 minute classes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. National Institute on Aging</h2><p>Free Go4Life workouts. Designed by aging experts.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Senior Yoga app</h2><p>$5/month. Gentle stretches. Builds flexibility and balance.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Sit-to-stand</h2><p>10 sit-to-stands daily reduces fall risk. Stronger thighs save lives.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Resistance bands</h2><p>$15 set. Use with chair workouts. Adds light strength training.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Talk to your doctor before starting. Most chair exercises safe for nearly everyone.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
