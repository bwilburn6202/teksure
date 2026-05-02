import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Flame } from 'lucide-react';

export default function SmartOvenForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Ovens for Seniors | TekSure" description="Brava, Tovala, smart ovens for senior cooks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Flame className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Ovens</h1>
          <p className="text-lg text-muted-foreground">Senior cooking tech.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tovala</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$300 oven + $13/meal.</li><li>Scan barcode auto-cook.</li><li>Senior simple.</li><li>Delivers prepped meals.</li><li>Worth it busy seniors.</li><li>Subscription.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Brava</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$1,500.</li><li>Lights cook food.</li><li>Senior premium tech.</li><li>App-controlled.</li><li>Multiple foods at once.</li><li>Innovative.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Air fryer cheap</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80-$150.</li><li>Senior easier oven.</li><li>Faster.</li><li>Less heat to kitchen.</li><li>Worth trying first.</li><li>Most under-rated.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior reality</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Air fryer + microwave covers most.</li><li>Skip premium oven.</li><li>$200 total.</li><li>Tovala $300+ if cooking-averse.</li><li>Skip Brava $1,500.</li><li>Save $$.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tovala for who</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior solo doesn&apos;t cook.</li><li>Wants fresh meals.</li><li>Budget $300/mo meals.</li><li>Convenience priority.</li><li>Replace meal kit + grocery.</li><li>Compare costs.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Try air fryer first.</li><li>$100 transforms cooking.</li><li>Easier than oven.</li><li>Senior arthritis ok.</li><li>Healthy too.</li><li>Best ROI.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$100 air fryer = senior cooking transformation</h3><p className="text-sm text-muted-foreground">$100 air fryer transforms senior cooking — easier than oven, faster, healthier. Skip $1,500 Brava + $300 Tovala unless solo no-cook seniors. Most senior kitchen ROI. Try first before fancy smart ovens.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
