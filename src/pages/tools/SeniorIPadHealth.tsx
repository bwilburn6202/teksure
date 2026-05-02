import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorIPadHealth() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Health Apps on iPad — Senior Guide" description="Track health and wellness on your iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Health Apps on iPad</h1>
          <p className="text-lg text-muted-foreground">Track wellness on a bigger screen.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. MyChart</h2><p>See test results, message your doctor, refill prescriptions. Free from your hospital.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Medisafe</h2><p>Pill reminders that beep at the right time. Tracks every dose so you never miss one.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Blood Pressure Companion</h2><p>Log readings each day. The chart makes it easy for the doctor to spot trends.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. WebMD</h2><p>Look up symptoms in plain language. Find a doctor near you. Pill identifier included.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Calm</h2><p>Sleep stories and meditations. The big iPad screen makes the visuals soothing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. WaterMinder</h2><p>Set a daily water goal. Tap each glass you drink. Helpful reminder all day.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Always check with your doctor before starting or stopping medication based on app advice.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
