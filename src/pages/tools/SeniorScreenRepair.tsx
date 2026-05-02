import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function SeniorScreenRepair() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Screen Repair for Seniors — TekSure" description="Phone screen broken? Apple, uBreakiFix, Best Buy options for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Screen Repair</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t toss a cracked phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple repair</h2><p>$130-$330 depending on model. Same-day at Genius Bar.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">uBreakiFix</h2><p>$150-$280. Authorized for Samsung. 30-day warranty.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best Buy</h2><p>$170-$300. Often same-day. Worth checking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AppleCare+ saves</h2><p>If you have AppleCare+: $29 screen repair instead of $300.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">DIY kits</h2><p>$30-$80 from iFixit. Difficult. Only if comfortable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mail-in repair</h2><p>iCracked, CPR Cell Phone Repair. Mail in. 5-7 day return.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Add AppleCare+ when buying iPhone. $300 break = $29 instead.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
