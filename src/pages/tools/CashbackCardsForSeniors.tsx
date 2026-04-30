import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export default function CashbackCardsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cashback Credit Cards for Seniors | TekSure" description="Best senior cashback credit cards. Maximize spending rewards." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CreditCard className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cashback Cards</h1>
          <p className="text-lg text-muted-foreground">Earn on every purchase.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Citi Double Cash</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>2% on everything.</li><li>$0 annual fee.</li><li>Senior simple.</li><li>No categories.</li><li>Solid baseline.</li><li>Default card.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Discover It</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5% rotating categories.</li><li>$0 annual fee.</li><li>1st year doubled.</li><li>Senior bonus year.</li><li>Quarterly activate.</li><li>Up to $300 bonus.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Costco Anywhere Visa</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>2% Costco purchases.</li><li>4% gas.</li><li>3% restaurants + travel.</li><li>Senior frequent shopper.</li><li>Costco membership required.</li><li>Free with Costco.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Amazon Prime Visa</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5% Amazon + Whole Foods.</li><li>$0 annual fee.</li><li>Need Prime $139.</li><li>Senior heavy Amazon.</li><li>Worth easy.</li><li>Apply online.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior simplicity</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t over-complicate.</li><li>2-3 cards max.</li><li>Auto-pay full balance.</li><li>Senior easy.</li><li>Skip annual fee cards.</li><li>Track spending app.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t carry balance.</li><li>20%+ interest kills rewards.</li><li>Auto-pay full.</li><li>Senior credit smart.</li><li>Pay each month.</li><li>Else lose game.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Citi Double Cash = senior simplest</h3><p className="text-sm text-muted-foreground">Citi Double Cash 2% on everything, no annual fee, no categories = senior simplest. Add Discover It 5% rotating + Amazon/Costco card if shop heavy. 2-3 cards max. Auto-pay full. $500-$1,000/yr cashback typical. Don&apos;t carry balance.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
