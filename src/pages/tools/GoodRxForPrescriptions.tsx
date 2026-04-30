import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function GoodRxForPrescriptions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="GoodRx for Senior Prescriptions | TekSure" description="Save 80% on prescriptions with GoodRx. Senior-friendly app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">GoodRx Savings</h1>
          <p className="text-lg text-muted-foreground">Slash prescription costs.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How it works</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app or website.</li><li>Search your prescription.</li><li>See prices at local pharmacies.</li><li>Show coupon at counter.</li><li>Pay discounted price.</li><li>No insurance needed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Real savings</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Often 80% off retail.</li><li>Generic drugs especially.</li><li>$300 to $30 common.</li><li>Compare 5+ pharmacies.</li><li>Walmart, Costco often cheap.</li><li>Always worth checking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sometimes cheaper than insurance copay.</li><li>Don&apos;t use insurance.</li><li>Use GoodRx coupon.</li><li>Ask pharmacist to compare.</li><li>Both prices visible.</li><li>Pick lowest.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SingleCare — similar app.</li><li>RxSaver — comparison.</li><li>Costco pharmacy — no membership.</li><li>Mark Cuban Cost Plus Drugs.</li><li>Amazon Pharmacy.</li><li>All free to compare.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mark Cuban&apos;s pharmacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>CostPlusDrugs.com.</li><li>Mail-order generics.</li><li>Cost + 15% markup.</li><li>$3 shipping.</li><li>Often cheapest option.</li><li>Mailed to door.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">How to use at counter</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Open GoodRx app.</li><li>Show coupon to pharmacist.</li><li>They scan it.</li><li>You pay discounted price.</li><li>Just like printed coupon.</li><li>Most pharmacies accept.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Could save $100s/month</h3><p className="text-sm text-muted-foreground">Many seniors on fixed income skip prescriptions because of cost. GoodRx + Cost Plus Drugs change that — generics often $5-$15/month. Compare both before refilling. Tell friends. This single tip saves seniors $50-$300/month easily.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
