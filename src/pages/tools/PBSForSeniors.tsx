import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function PBSForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="PBS Streaming for Seniors | TekSure" description="Free PBS senior content. PBS app + Passport guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">PBS Streaming</h1>
          <p className="text-lg text-muted-foreground">Senior favorite — free.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PBS app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app.</li><li>Recent shows + live.</li><li>Local PBS station.</li><li>Senior loves PBS.</li><li>Smart TVs + phone.</li><li>No subscription.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PBS Passport</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$60/year donation.</li><li>Full PBS library.</li><li>Old episodes.</li><li>Senior premium tier.</li><li>Tax-deductible.</li><li>Worth member.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior favorites</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Masterpiece — Downton Abbey.</li><li>NOVA.</li><li>Frontline.</li><li>Ken Burns documentaries.</li><li>Antiques Roadshow.</li><li>Senior staples.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Local PBS</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Local programming.</li><li>News.</li><li>Cooking shows.</li><li>Senior community feel.</li><li>Free.</li><li>Antenna picks up live.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">PBS Kids free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>For grandkids visiting.</li><li>Educational + safe.</li><li>Daniel Tiger, Sesame Street.</li><li>Senior approved.</li><li>Free always.</li><li>Ad-free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs paid streaming</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>PBS — quality + free.</li><li>Senior gateway.</li><li>Less new shows than Netflix.</li><li>Public service.</li><li>Trusted content.</li><li>Senior comfort.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">PBS app = free senior quality</h3><p className="text-sm text-muted-foreground">Free PBS app = senior quality programming. Masterpiece, NOVA, Ken Burns. No subscription. PBS Passport $60 donation gets full library. Tax-deductible. Many seniors&apos; favorite streaming. Most under-used free senior streaming. Antenna for live broadcast.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
