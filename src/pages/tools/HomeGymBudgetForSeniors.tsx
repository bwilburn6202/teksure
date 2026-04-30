import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function HomeGymBudgetForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Home Gym on Budget | TekSure" description="$200 senior home gym. Build smart, exercise daily." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Budget Home Gym</h1>
          <p className="text-lg text-muted-foreground">$200 setup.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Essentials $200</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Yoga mat — $25.</li><li>Resistance bands set — $30.</li><li>5 + 8 lb dumbbells — $60.</li><li>Stability ball — $20.</li><li>Foam roller — $20.</li><li>Total $155 + tax.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free workouts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>YouTube — Eldergym Fitness.</li><li>Yoga With Adriene.</li><li>SilverSneakers if Medicare.</li><li>Senior abundant content.</li><li>No subscription.</li><li>Free always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior weekly</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mon — strength.</li><li>Wed — yoga.</li><li>Fri — strength.</li><li>Tue/Thu — walk.</li><li>Senior balanced.</li><li>Daily 30 min.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Treadmill option</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$300-$1,500.</li><li>Senior bad weather walking.</li><li>Used Craigslist $100.</li><li>Folding for storage.</li><li>Many gather dust — try first.</li><li>YouTube treadmill workouts.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Stationary bike</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200-$500.</li><li>Senior knee-friendly.</li><li>Recumbent best for seniors.</li><li>Watch TV while pedal.</li><li>Used $100 often.</li><li>Reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Start small.</li><li>Build habit first.</li><li>Then upgrade.</li><li>Used equipment fine.</li><li>Senior consistent &gt; fancy.</li><li>$200 enough most.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$155 setup = senior daily exercise</h3><p className="text-sm text-muted-foreground">$155 yoga mat + bands + dumbbells + ball + foam roller = senior complete home gym. Free YouTube/SilverSneakers workouts. Don&apos;t buy $1,000 Mirror or Peloton until consistent for 6 months. Most senior fitness on $200/year.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
