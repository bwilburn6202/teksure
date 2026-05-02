import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorCharityNavigator() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Charity Navigator — Senior Guide" description="Verify charities before donating." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Charity Navigator</h1>
          <p className="text-lg text-muted-foreground">Donate wisely.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. CharityNavigator.org</h2><p>Free. Rates 100,000+ charities by efficiency, accountability, transparency.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. CharityWatch</h2><p>Stricter ratings. Lists top-rated charities with letter grades.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. GuideStar / Candid</h2><p>Free. Look up Form 990 — see exact spending.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Watch sound-alikes</h2><p>Children's Cancer Fund vs official ones. Sound-alike scams target seniors.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Donor advised funds</h2><p>Fidelity Charitable, Schwab. Tax deduction now, give later.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Qualified Charitable Distribution</h2><p>From IRA after 70½. Reduces taxable RMD. Smart way to give.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Skip phone or email donation requests. Give only to charities you researched first.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
