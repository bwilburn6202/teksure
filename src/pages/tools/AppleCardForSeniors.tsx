import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export default function AppleCardForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Card for Seniors | TekSure" description="Apple Card senior cashback + savings account guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CreditCard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Card</h1>
          <p className="text-lg text-muted-foreground">Senior cashback.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cashback</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>3% Apple purchases.</li><li>2% Apple Pay.</li><li>1% physical card.</li><li>Senior daily rewards.</li><li>Daily Cash auto-deposit.</li><li>$0 annual fee.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Savings 4.4% APY</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Card savings account.</li><li>FDIC-insured.</li><li>Senior high-yield.</li><li>Free.</li><li>Daily cash auto-deposits.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">No fees</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No annual.</li><li>No foreign transaction.</li><li>No late fees.</li><li>Senior travel-friendly.</li><li>Goldman Sachs issued.</li><li>Worth comparing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apply via iPhone</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wallet app.</li><li>Apple Card application.</li><li>Senior simple.</li><li>Soft credit pull.</li><li>Approval minutes.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family card</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Share with spouse + kids.</li><li>Senior co-owner.</li><li>Build credit kids.</li><li>Spending limits set.</li><li>Free.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs others</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>2% Apple Pay good.</li><li>Citi Double Cash 2% all.</li><li>Senior compare needs.</li><li>Apple ecosystem perk.</li><li>Both no fee.</li><li>Try Apple if iPhone.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Apple Card + 4.4% APY = senior bonus</h3><p className="text-sm text-muted-foreground">Apple Card 2% Apple Pay + 4.4% APY savings account = senior iPhone bonus. $0 fees, no foreign transaction. Daily Cash auto-deposits to savings. Apply via Wallet 5 minutes. Or Citi Double Cash 2% everything if not iPhone-heavy. Both solid.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
