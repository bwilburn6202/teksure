import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function SeniorTargetCircle() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Target Circle for Seniors — Senior Guide" description="Save money with Target Circle and the Target app." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Target Circle</h1>
          <p className="text-lg text-muted-foreground">Save 1-50% at Target.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free Target Circle</h2><p>Sign up free in the Target app. Earn 1% back on every purchase.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Drive Up</h2><p>Order online. Park in special spots at Target. Crew brings to your trunk free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Same-day delivery</h2><p>Target Circle 360 ($99/year) gives unlimited same-day. Owns Shipt service.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Weekly deals</h2><p>App shows the weekly ad. Tap items to add to your list.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. RedCard</h2><p>Target's debit card saves 5% on every purchase. Free to apply.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Wallet barcode</h2><p>Scan one barcode at checkout. Applies coupons and Circle in one tap.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Target's pharmacy is now CVS. Most prescriptions transfer easily.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
