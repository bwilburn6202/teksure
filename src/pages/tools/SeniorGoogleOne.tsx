import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function SeniorGoogleOne() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google One for Seniors — TekSure" description="Google One subscription explained for seniors — storage, VPN, family sharing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google One for Seniors</h1>
          <p className="text-lg text-muted-foreground">Storage + extras.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free 15 GB</h2><p>Comes with every Gmail. Shared across Drive, Gmail, Photos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">100 GB ($1.99/month)</h2><p>Most seniors. Backs up photos and phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">200 GB ($2.99/month)</h2><p>Family share — 5 members.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">2 TB Premium ($9.99/month)</h2><p>Includes VPN, AI features, Magic Eraser for photos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">VPN included</h2><p>Premium tier includes Google&apos;s VPN. Free privacy on hotel Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Magic Eraser</h2><p>Premium tier. Remove unwanted people/objects from photos. AI magic.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Use across iPhone too. Google Photos works on Apple devices.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
