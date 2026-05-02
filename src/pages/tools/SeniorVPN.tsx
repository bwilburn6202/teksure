import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SeniorVPN() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VPN for Seniors — Senior Guide" description="When and how to use a VPN safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VPN for Seniors</h1>
          <p className="text-lg text-muted-foreground">A private tunnel for your internet.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What it does</h2><p>Hides your activity from the network you're on. Good for hotels and coffee shops.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Trusted VPNs</h2><p>NordVPN, ExpressVPN, Mullvad. Avoid free ones — they often sell your data.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. When to use</h2><p>Hotel Wi-Fi, airports, coffee shops, libraries. Anywhere you don't trust the network.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Setup</h2><p>Download the VPN app. Sign in. Tap Connect. That's it.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Cost</h2><p>About $3-12 per month. Cheaper if you pay yearly. Family plans cover all your devices.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip on home Wi-Fi</h2><p>Your home network is safe. VPN is mainly for travel and public networks.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>VPN is not magic. It still helps to skip banking on coffee-shop Wi-Fi entirely.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
