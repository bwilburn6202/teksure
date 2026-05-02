import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scale } from 'lucide-react';

export default function SeniorEstatePlan() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Estate Planning — Senior Guide" description="Use online tools to plan your estate." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scale className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Estate Planning</h1>
          <p className="text-lg text-muted-foreground">Wills and trusts on your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Trust & Will</h2><p>$159 for a will. $599 for a trust. Reviewed by attorneys.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. LegalZoom</h2><p>$89 will. $279 trust. Includes attorney consultations.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Quicken WillMaker</h2><p>$100 software. Will, power of attorney, healthcare directive included.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. FreeWill.com</h2><p>Free for a basic will. Sponsored by charities. No catch.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Big estates need a lawyer</h2><p>If estate is over $1M, complex assets, second marriage — hire a real estate attorney.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Update yearly</h2><p>Big life events (marriage, divorce, deaths) require updates. Review every year too.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Tell loved ones where the will is. Worthless if no one can find it.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
