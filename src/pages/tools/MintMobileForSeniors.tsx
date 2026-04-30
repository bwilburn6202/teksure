import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function MintMobileForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mint Mobile for Seniors | TekSure" description="Cheap cell phone plan. Senior Mint Mobile + alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mint Mobile + MVNOs</h1>
          <p className="text-lg text-muted-foreground">Cheap senior phone plans.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mint Mobile</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15-$30/month.</li><li>Uses T-Mobile network.</li><li>Bring own phone.</li><li>Senior huge savings.</li><li>Owned by T-Mobile now.</li><li>Annual prepaid.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Visible $25</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Verizon-owned.</li><li>$25/month unlimited.</li><li>Senior Verizon coverage.</li><li>No contract.</li><li>One line.</li><li>Senior alternative.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Consumer Cellular</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$20-$60/month.</li><li>Senior-targeted.</li><li>AT&amp;T network.</li><li>AARP discount.</li><li>Senior friendly support.</li><li>Highly rated.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior savings</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Big 3 — $80-$120/line.</li><li>MVNOs — $15-$30.</li><li>$50/month savings.</li><li>$600/year.</li><li>Senior big.</li><li>Same coverage often.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Switch process</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Order SIM card.</li><li>Activate online.</li><li>Port number.</li><li>1 hour total.</li><li>Senior easy.</li><li>Save big.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Coverage in your area.</li><li>Test before fully switch.</li><li>Senior verify works.</li><li>Customer service slower.</li><li>Online support.</li><li>Read reviews.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$15 Mint = senior $600/yr saved</h3><p className="text-sm text-muted-foreground">Senior on Verizon $80/mo + spouse = $1,920/year. Switch to Visible $25 each = $600/year. Same Verizon network. $1,320 saved. Or $15 Mint Mobile prepaid annual. Most senior phone bills wildly overpriced. Switch.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
