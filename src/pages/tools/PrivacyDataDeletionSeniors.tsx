import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function PrivacyDataDeletionSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Data Broker Deletion | TekSure" description="DeleteMe + privacy services for senior data deletion." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Data Broker Deletion</h1>
          <p className="text-lg text-muted-foreground">Senior privacy.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">DeleteMe</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$130/year.</li><li>Removes from data brokers.</li><li>Senior privacy + safety.</li><li>Quarterly scans.</li><li>Less spam + scam calls.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Optery</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$60-$249/year.</li><li>Similar service.</li><li>Senior alternative.</li><li>Free tier limited.</li><li>Worth comparing.</li><li>Free trial.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">DIY free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>JustGetMyData.com guides.</li><li>Senior 100+ sites manual.</li><li>Tedious but free.</li><li>Spokeo, Whitepages, etc.</li><li>Time vs $$.</li><li>Worth choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior fraud benefit</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Less spam calls.</li><li>Scammers less info.</li><li>Senior harder target.</li><li>Address less public.</li><li>Worth privacy.</li><li>Senior demographics targeted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free CCPA opt-out</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>California residents.</li><li>Free legal right.</li><li>Each site individually.</li><li>Senior tedious but free.</li><li>State laws expand.</li><li>Check your state.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pair with credit freeze</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>DeleteMe + credit freeze.</li><li>Senior privacy + protection combo.</li><li>Most prevention.</li><li>$130 + free.</li><li>Worth combo.</li><li>Best practice.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$130 DeleteMe = senior privacy buyback</h3><p className="text-sm text-muted-foreground">$130/yr DeleteMe = senior data broker deletion (Spokeo, Whitepages). Less spam + scam calls. Privacy buyback. Or DIY free tedious. Pair with credit freeze + Credit Karma alerts. Most senior privacy investment. Worth it.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
