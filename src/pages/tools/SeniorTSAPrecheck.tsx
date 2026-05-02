import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function SeniorTSAPrecheck() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TSA PreCheck — Senior Guide" description="Skip the long airport security line." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TSA PreCheck</h1>
          <p className="text-lg text-muted-foreground">Through security in 5 minutes.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What you get</h2><p>Keep on shoes, belt, light jacket. Laptops and liquids stay in the bag.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Cost</h2><p>$78 for 5 years. Many credit cards reimburse this fee.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Apply online</h2><p>Visit tsa.gov/precheck. Fill out the form. Pick a 10-minute appointment.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Bring documents</h2><p>Government photo ID and birth certificate or passport. Fingerprints taken there.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Use the number</h2><p>Add your Known Traveler Number to every airline reservation. Look for TSA Pre on the boarding pass.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Renew online</h2><p>Most travelers can renew online — no second appointment.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Global Entry adds international and PreCheck for $120 — worth it if you travel abroad.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
