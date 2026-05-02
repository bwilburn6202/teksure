import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorTravelInsurance() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Travel Insurance | TekSure" description="Trip insurance for older adults + Medicare abroad coverage." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Travel Insurance</h1>
          <p className="text-lg text-muted-foreground">Older traveler coverage.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Medicare doesn&apos;t cover abroad.</li><li>Health risks higher.</li><li>Senior cancellation odds.</li><li>Critical international.</li><li>Worth $50-$300.</li><li>Don&apos;t skip.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Compare quotes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>InsureMyTrip.com.</li><li>Squaremouth.com.</li><li>Senior compare 5+.</li><li>Same coverage varies $$.</li><li>Free comparison.</li><li>Worth shopping.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Coverage types</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cancel for any reason.</li><li>Medical emergency.</li><li>Evacuation.</li><li>Senior priorities.</li><li>Lost luggage.</li><li>Read carefully.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pre-existing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Buy within 14-21 days deposit.</li><li>Senior critical timing.</li><li>Pre-existing waiver.</li><li>Or excluded coverage.</li><li>Read carefully.</li><li>Don&apos;t miss window.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Credit card travel</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Chase Sapphire Reserve.</li><li>Some cards include.</li><li>Senior verify exclusions.</li><li>Often supplements.</li><li>Free with card.</li><li>Worth checking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Medicare Advantage</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Some cover abroad.</li><li>Senior check plan.</li><li>Limited.</li><li>Don&apos;t rely.</li><li>Travel insurance still wise.</li><li>Worth call.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$100-$300 travel insurance = senior abroad</h3><p className="text-sm text-muted-foreground">Senior international travel — $100-$300 trip insurance critical (Medicare doesn&apos;t cover abroad). Compare InsureMyTrip + Squaremouth. Buy within 14-21 days for pre-existing waiver. Cancel-for-any-reason recommended. Worth $$ vs $100k+ medical evacuation cost.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
