import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

export default function SeniorIPadBanking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Banking on iPad — Senior Guide" description="Use bank apps safely on your iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Banking on iPad</h1>
          <p className="text-lg text-muted-foreground">Check accounts safely from home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Get the official app</h2><p>Open the App Store. Search your bank name exactly. Confirm it is from your bank, not a copycat.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Set up Face ID</h2><p>Allow Face ID or a passcode. Faster than typing a password and harder for thieves.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Check balance</h2><p>The home screen shows current balance. Tap an account for recent activity.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Deposit a check</h2><p>Tap Deposit. Endorse the check. Photograph front and back when prompted. Tap submit.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Set alerts</h2><p>Turn on alerts for any charge over $50. Catches fraud the same day it happens.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Sign out</h2><p>Tap menu, then Sign Out when done. Especially if others use your iPad.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Never bank on public Wi-Fi at coffee shops or airports. Use only your home network or cellular.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
