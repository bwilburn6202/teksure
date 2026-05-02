import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fuel } from 'lucide-react';

export default function SeniorGasApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gas Price Apps — Senior Guide" description="Find the cheapest gas near you." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fuel className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gas Price Apps</h1>
          <p className="text-lg text-muted-foreground">Save 10-30 cents per gallon.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. GasBuddy</h2><p>Free. Shows live prices at every station near you. Sort by cheapest.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Costco Gas</h2><p>Always the cheapest. App shows hours and wait times. Membership required.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Sam's Club</h2><p>Same idea as Costco. Member-only fuel pumps with cheap gas.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Upside</h2><p>Cashback app. Snap photo of receipt. Get 10-30 cents per gallon back.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Grocery rewards</h2><p>Kroger, Safeway, Albertsons gas points knock 10 cents to $1 per gallon off.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip premium</h2><p>Most cars use regular. Premium only if your owner manual says required.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Don't drive 10 miles for cheaper gas — the savings vanish in extra fuel used.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
