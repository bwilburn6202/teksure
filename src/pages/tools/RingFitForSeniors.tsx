import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function RingFitForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Oura Ring + Fitness Rings for Seniors | TekSure" description="Sleep + activity tracking ring. Senior smart ring guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Rings</h1>
          <p className="text-lg text-muted-foreground">Tracker without watch.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Oura Ring</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$300 + $6/mo subscription.</li><li>Sleep tracking best.</li><li>Heart rate.</li><li>Senior comfortable.</li><li>7-day battery.</li><li>Premium feel.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Samsung Ring</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$400.</li><li>No subscription.</li><li>Samsung Health app.</li><li>Senior alternative.</li><li>Newer to market.</li><li>Compare features.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No watch on wrist.</li><li>Sleep through it.</li><li>Discreet jewelry-like.</li><li>Senior preference.</li><li>Wedding ring style.</li><li>Comfortable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Apple Watch</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Watch — screen + apps.</li><li>Ring — passive tracking.</li><li>Watch better fall detection.</li><li>Ring better sleep.</li><li>Senior pick.</li><li>Both have place.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best for sleep</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tracks deep + REM.</li><li>HRV recovery.</li><li>Body temperature.</li><li>Senior sleep optimize.</li><li>Daily insights.</li><li>Worth the cost.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sizing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free sizing kit.</li><li>Wear 24 hrs.</li><li>Fit changes day.</li><li>Senior accurate sizing.</li><li>Don&apos;t guess.</li><li>Order kit first.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Oura $300 + $6/mo = senior sleep optimizer</h3><p className="text-sm text-muted-foreground">Oura Ring $300 + $6/mo subscription = senior sleep tracking premium. Wear like ring, no watch. Best sleep insights available. Compare Samsung Ring $400 no subscription. Better for sleep than Apple Watch. Worth for sleep-focused seniors.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
