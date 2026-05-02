import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorBalanceVibration() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vibration Plates for Seniors — TekSure" description="Whole-body vibration — bone density, balance, circulation." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vibration Plates</h1>
          <p className="text-lg text-muted-foreground">Strange but effective.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">LifePro Waver</h2><p>$200. Top-rated home unit. 10 min daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Studies show</h2><p>10 min daily improves bone density 2-3% in seniors. Real benefit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Better balance</h2><p>Stimulates muscles. Improves senior balance reflexes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Circulation</h2><p>Lymphatic drainage. Reduces swelling. Better for legs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out</h2><p>Pacemakers, recent surgery, pregnancy avoid. Ask doctor first.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easier than gym</h2><p>10 minutes daily. No skill needed. Accessible for all senior fitness levels.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $200 plate may pay for itself in fall prevention. Real medicine.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
