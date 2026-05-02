import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

export default function SeniorMovingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Moving Apps for Seniors — Senior Guide" description="Apps that make moving easier." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Truck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Moving Apps</h1>
          <p className="text-lg text-muted-foreground">Tools for downsizing or relocating.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sortly</h2><p>Free version. Photograph and inventory items. Number boxes for easy unpacking.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. MoveAdvisor</h2><p>Free. Compare moving companies. Schedule before busy season.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Updater</h2><p>Auto-changes addresses for utilities, banks, subscriptions. Saves hours.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. USPS change of address</h2><p>$1.10 online. Forward mail for 12 months.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Senior moving managers</h2><p>NASMM.org has certified Senior Move Managers. Specialty in downsizing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Estate sale apps</h2><p>EstateSales.net, MaxSold. Sell items you don't take. Bring extra cash for the move.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Start sorting 6 weeks before. Donate, sell, trash, keep — four piles.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
