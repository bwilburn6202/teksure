import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt } from 'lucide-react';

export default function LaundryPickupForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Laundry Pickup Services for Seniors | TekSure" description="Door-to-door laundry. Senior laundry pickup app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shirt className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Laundry Pickup</h1>
          <p className="text-lg text-muted-foreground">Door-to-door laundry.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>App schedules pickup.</li><li>They wash + fold.</li><li>Return clean clothes.</li><li>$1-$2 per pound.</li><li>Senior energy saved.</li><li>App tracks order.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Rinse — major cities.</li><li>WashClub — wide US.</li><li>Local laundromats.</li><li>Hotel partners.</li><li>Search &quot;laundry pickup near me.&quot;</li><li>Senior compare.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No basket lifting.</li><li>No standing folding.</li><li>Done while you nap.</li><li>Back/knee pain saver.</li><li>Senior independence.</li><li>Worth subscription.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cost</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>10 lbs typical = $15-$20.</li><li>Weekly = $60-$80/month.</li><li>Hourly help cheaper sometimes.</li><li>Senior compare.</li><li>Convenience tax.</li><li>Worth it for many.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Dry cleaning too</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Many services include.</li><li>Suit/dress pickup.</li><li>Senior special occasion.</li><li>No extra trip.</li><li>Same app.</li><li>One workflow.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Family arranged</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adult kids set up account.</li><li>Pay for senior parent.</li><li>Recurring weekly.</li><li>Senior never lifts.</li><li>Family love.</li><li>Worth gift.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$60/mo = senior back/knees</h3><p className="text-sm text-muted-foreground">For senior back/knee pain, $60/month laundry pickup = gold. App schedules. Rinse picks up. Returns folded. No basement trips, no carrying baskets. Many adult kids buy this for senior parents. Best aging-in-place service.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
