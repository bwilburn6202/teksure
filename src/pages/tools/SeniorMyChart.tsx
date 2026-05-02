import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardList } from 'lucide-react';

export default function SeniorMyChart() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MyChart — Senior Guide" description="Use MyChart to manage your health records." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ClipboardList className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MyChart</h1>
          <p className="text-lg text-muted-foreground">Health records, on your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up</h2><p>Get an activation code from your doctor's office. Visit mychart.com or download the app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Test results</h2><p>See blood test results before the doctor calls. Most appear within hours.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Message your doctor</h2><p>Send non-urgent questions. Skip the phone tag. Replies usually within 1-2 days.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Refill prescriptions</h2><p>Tap a medication. Tap Refill. Your pharmacy gets the request automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Schedule appointments</h2><p>Book primary care online. Reschedule if life happens.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Pay bills</h2><p>See and pay medical bills. Set up payment plans if needed.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Different hospitals use different MyChart logins. Sign in with the right one for each.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
