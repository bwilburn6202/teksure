import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function TargetCircle360ForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Target Circle 360 for Seniors | TekSure" description="Target rewards + delivery. Senior Target Circle 360 guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Target Circle 360</h1>
          <p className="text-lg text-muted-foreground">Free + paid Target rewards.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free Circle (basic)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free signup.</li><li>1% earned credits.</li><li>Personal weekly deals.</li><li>Birthday gift.</li><li>Senior signup easy.</li><li>No fee.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Circle 360 ($99/yr)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Same-day delivery free.</li><li>Unlimited drive-up.</li><li>Free shipping.</li><li>2-day delivery.</li><li>Senior convenience.</li><li>Worth $99 if shop weekly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Drive-up</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Order in app.</li><li>Drive to Target.</li><li>Tap arriving.</li><li>Worker brings to car.</li><li>Senior no walking.</li><li>Free Circle 360.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Same-day Shipt</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Doors delivery 2 hours.</li><li>Senior aging-in-place.</li><li>Free with 360.</li><li>Tip optional.</li><li>Worth subscription.</li><li>Better than driving.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Target RedCard</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5% off all Target.</li><li>$0 fee.</li><li>Free shipping.</li><li>Stacks with Circle.</li><li>Senior save more.</li><li>Worth applying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>App for offers.</li><li>Scan to save.</li><li>Use Drive-up regularly.</li><li>Bigger Cartwheel deals.</li><li>Senior groceries too.</li><li>Free family.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$99 Circle 360 = senior independence</h3><p className="text-sm text-muted-foreground">$99/year Target Circle 360 = same-day delivery + unlimited drive-up. Senior aging-in-place magic. Stack with Target RedCard 5%. Many seniors order weekly groceries via Target. Cheaper than DoorDash, more reliable. Worth subscription.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
