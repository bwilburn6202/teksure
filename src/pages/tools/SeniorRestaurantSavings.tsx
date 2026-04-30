import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UtensilsCrossed } from 'lucide-react';

export default function SeniorRestaurantSavings() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Restaurant Savings | TekSure" description="Senior dining discounts + apps. Save eating out." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UtensilsCrossed className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Restaurant Savings</h1>
          <p className="text-lg text-muted-foreground">Dining out cheaper.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior days</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Denny&apos;s 55+ menu.</li><li>IHOP senior menu.</li><li>Cracker Barrel.</li><li>Perkins senior menu.</li><li>Senior 55+ specials.</li><li>Smaller portions cheaper.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Early bird</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>4-6pm specials.</li><li>$10-$15 dinners.</li><li>Senior dinner timing.</li><li>Outback Bloomin&apos; Mondays.</li><li>Texas Roadhouse early dine.</li><li>Worth time.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Restaurant apps for deals.</li><li>Birthday freebies.</li><li>Loyalty rewards.</li><li>Senior collect.</li><li>Free.</li><li>Worth signups.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Restaurant.com</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$25 gift cards $10.</li><li>Local restaurants.</li><li>Save 60%.</li><li>Senior finder.</li><li>Read terms — minimums.</li><li>Worth checking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AARP dining</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bonefish Grill 15%.</li><li>Landry&apos;s.</li><li>Outback.</li><li>Senior membership pays.</li><li>Show AARP card.</li><li>10-15% typical.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Always ask senior discount.</li><li>Some don&apos;t advertise.</li><li>Lunch portions = dinner.</li><li>Senior leftovers next day.</li><li>Half-portion combos.</li><li>Free water + tip on subtotal.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Always ask senior discount</h3><p className="text-sm text-muted-foreground">Senior discount often unadvertised — always ask. Plus AARP 10-15% at chains. Senior days at IHOP, Denny&apos;s, Cracker Barrel. Early bird 4-6pm $10-$15. Lunch portion at dinner — leftovers tomorrow. $30/visit savings typical.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
