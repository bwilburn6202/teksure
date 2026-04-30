import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Armchair } from 'lucide-react';

export default function SeatGuruForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="SeatGuru for Senior Travelers | TekSure" description="Pick best airline seat. Senior SeatGuru + ExpertFlyer guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Armchair className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SeatGuru + ExpertFlyer</h1>
          <p className="text-lg text-muted-foreground">Best plane seat.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SeatGuru</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free.</li><li>Type flight number.</li><li>See seat map.</li><li>Color-coded best/worst.</li><li>Senior simple.</li><li>TripAdvisor-owned.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior best seats</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Aisle for bathroom.</li><li>Bulkhead extra legroom.</li><li>Avoid back of plane.</li><li>Avoid seats near galley.</li><li>Senior comfort.</li><li>Quiet middle of plane.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Avoid</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Last row no recline.</li><li>Bathroom row noisy.</li><li>Galley row.</li><li>Exit rows — must able-bodied.</li><li>Senior avoid responsibility.</li><li>Read SeatGuru notes.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Premium economy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Worth $50-$200 long flights.</li><li>Senior comfort huge.</li><li>Extra legroom.</li><li>Better service.</li><li>Recliner seat.</li><li>Knees thank you.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior pre-board</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Ask gate agent.</li><li>Often offered free.</li><li>Settle without rush.</li><li>Stow bag overhead.</li><li>Senior dignity.</li><li>Worth asking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">ExpertFlyer paid</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10/month.</li><li>Better seat alerts.</li><li>Award seat finder.</li><li>Senior power user.</li><li>Worth points seekers.</li><li>Many free options first.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free SeatGuru = senior comfort flight</h3><p className="text-sm text-muted-foreground">Free SeatGuru shows senior best plane seats. Aisle bulkhead = extra legroom + bathroom access. Avoid back, galley, bathroom rows. Pre-board ask gate agent. Premium economy worth $$ long flights. Most senior travel comfort upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
