import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function SeniorWaterReminder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Water Reminder Apps — Senior Guide" description="Track water with reminder apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Reminders</h1>
          <p className="text-lg text-muted-foreground">Stay hydrated all day.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Why hydrate</h2><p>Older adults often dehydrate without feeling thirsty. Daily water = fewer headaches and falls.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. WaterMinder</h2><p>$5. Big buttons. Reminds you every 1-2 hours.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Hydro Coach</h2><p>Free. Animated water glass. Cute reminders.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Goal</h2><p>Doctor will say. Most adults need 6-8 glasses. Less if on certain medications.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Track herbal teas</h2><p>Herbal tea counts. Coffee mostly counts but check with your doctor.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Yeti water bottle</h2><p>Keep one nearby. Visual reminder is sometimes the best app.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If on heart meds or certain blood pressure pills, ask your doctor before increasing water.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
