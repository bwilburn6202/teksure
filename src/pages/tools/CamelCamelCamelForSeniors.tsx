import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown } from 'lucide-react';

export default function CamelCamelCamelForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="CamelCamelCamel Amazon Tracker for Seniors | TekSure" description="Track Amazon prices. Senior price drop guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <TrendingDown className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">CamelCamelCamel</h1>
          <p className="text-lg text-muted-foreground">Amazon price tracker.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tracks Amazon prices.</li><li>Email when drops.</li><li>See history charts.</li><li>Free.</li><li>Senior big purchase.</li><li>Avoid fake sales.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How to use</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>camelcamelcamel.com.</li><li>Paste Amazon URL.</li><li>Set price target.</li><li>Get email alert.</li><li>Senior wait + buy low.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">See history</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Was it ever cheaper?</li><li>Spots fake &quot;sales.&quot;</li><li>Senior savvy.</li><li>Buy at true low.</li><li>Charts visual.</li><li>Free analysis.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200+ purchases.</li><li>Wait for true low.</li><li>Save 20-30%.</li><li>Senior patience pays.</li><li>Big-ticket items.</li><li>Worth waiting.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Honey alternative</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Honey extension shows history.</li><li>Capital One Shopping too.</li><li>Senior multiple tools.</li><li>Free.</li><li>Stack savings.</li><li>Auto-reveals.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Set realistic targets.</li><li>20% below average.</li><li>Email alerts.</li><li>Senior buy at right time.</li><li>Bookmark camel.</li><li>Free saves $$.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Camel = senior smart shopper</h3><p className="text-sm text-muted-foreground">Free CamelCamelCamel tracks Amazon prices. Set target, get email when drops. See real price history — spot fake sales. Senior $500 TV waits for true low. Save 20-30%. Most under-used senior shopping tool. Free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
