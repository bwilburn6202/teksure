import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse } from 'lucide-react';

export default function SeniorMedicalIDLockScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Medical ID Lock Screen — Senior Guide" description="Set up Medical ID so paramedics can help fast." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HeartPulse className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Medical ID</h1>
          <p className="text-lg text-muted-foreground">Help paramedics if you can't talk.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. iPhone</h2><p>Open Health app. Tap your photo. Medical ID. Edit. Add medications, allergies, conditions.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Show on lock screen</h2><p>Same screen. Turn on Show When Locked. Anyone can see info without your password.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Android</h2><p>Settings, About phone, Emergency information. Add medical info, blood type, allergies.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Emergency contacts</h2><p>List 1-3 family members. They'll be notified if SOS is triggered.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Update yearly</h2><p>Check that meds and allergies are still right. Doctor visit is a good prompt.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Apple Watch too</h2><p>If you wear one, holding the side button shows Medical ID even without iPhone nearby.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>EMTs are trained to look for Medical ID on iPhones. Could save your life.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
