import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt } from 'lucide-react';

export default function SmartWasherForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Washers for Seniors | TekSure" description="LG, Samsung smart washers for senior laundry." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shirt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Washers</h1>
          <p className="text-lg text-muted-foreground">Senior laundry tech.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">App control</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Phone alerts done.</li><li>Senior forget less.</li><li>Mildew prevention.</li><li>Worth it.</li><li>Add $200-$400 model.</li><li>Useful feature.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Auto-detergent</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>LG, Samsung do this.</li><li>Senior fill once monthly.</li><li>No measuring per load.</li><li>Worth premium.</li><li>Senior arthritis fix.</li><li>Reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Front vs top</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Front-load — better cleaning.</li><li>Top-load — less bending.</li><li>Senior knees vote top.</li><li>Personal preference.</li><li>Pedestal raises front.</li><li>Senior choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Auto-add cleaning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Self-cleaning cycles.</li><li>Senior less maintenance.</li><li>Standard now.</li><li>Run monthly.</li><li>Free feature.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Skip premium</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$2,000 washer = mostly gimmick.</li><li>Senior $700-$1,000 plenty.</li><li>Smart features overrated.</li><li>Reliability matters more.</li><li>Speed Queen long-lasting.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Or hire pickup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$60/mo Rinse pickup.</li><li>Senior arthritis.</li><li>No washer purchase.</li><li>Compare cost.</li><li>Worth often.</li><li>Convenience priority.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$700 + auto-detergent = senior best wash</h3><p className="text-sm text-muted-foreground">$700-$1,000 washer + auto-detergent fill = senior easier laundry. Top-load less knee bending. App alerts mildew prevention worth it. Skip $2,000 fancy. Or $60/mo Rinse pickup if arthritis. Multiple senior options.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
