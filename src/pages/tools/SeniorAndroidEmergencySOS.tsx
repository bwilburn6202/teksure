import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function SeniorAndroidEmergencySOS() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Emergency SOS on Android — Senior Guide" description="Set up emergency SOS on your Android phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Emergency SOS</h1>
          <p className="text-lg text-muted-foreground">Help is one button press away.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Turn it on</h2><p>Settings, Safety & emergency, Emergency SOS. Toggle it on.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. How to use</h2><p>Press the side button five times fast. Phone calls 911 or your chosen number.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Add emergency contacts</h2><p>Settings, Safety & emergency, Emergency contacts. Add 1-3 family members.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Share location</h2><p>SOS can text emergency contacts your live location during the call.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Medical info</h2><p>Add allergies, medications, blood type. Visible on lock screen for paramedics.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Test it</h2><p>Tell a family member first, then practice. Knowing what to expect saves time later.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pixel phones with crash detection automatically call 911 if you are in a car accident.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
