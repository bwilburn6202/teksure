import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SilverSneakersAppDeep() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="SilverSneakers App for Seniors | TekSure" description="Get the most from your free SilverSneakers Medicare benefit. App + gym access guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SilverSneakers App</h1>
          <p className="text-lg text-muted-foreground">Free with most Medicare plans.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Check eligibility</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visit SilverSneakers.com → Check Eligibility.</li>
              <li>Enter Medicare info.</li>
              <li>Most Medicare Advantage plans include free.</li>
              <li>Original Medicare alone — usually NOT included.</li>
              <li>Some Medigap plans include.</li>
              <li>Free if eligible — no extra cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SilverSneakers GO app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free app — workout videos at home.</li>
              <li>Designed for seniors specifically.</li>
              <li>Chair-based, low-impact options.</li>
              <li>Beginner to advanced.</li>
              <li>Track activity in app.</li>
              <li>Live classes via Zoom too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Gym access</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free at 15,000+ gyms nationwide.</li>
              <li>Planet Fitness, Curves, YMCA, LA Fitness.</li>
              <li>Use SilverSneakers ID at gym front desk.</li>
              <li>Access pool, equipment, group classes.</li>
              <li>Find locations in app.</li>
              <li>Saves $30–$80/month gym membership.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific classes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SilverSneakers Classic — basic strength + flexibility.</li>
              <li>SilverSneakers Yoga.</li>
              <li>SilverSneakers Splash (water exercise).</li>
              <li>SilverSneakers Boom (higher intensity).</li>
              <li>EnerChi (senior tai chi).</li>
              <li>Designed by senior fitness experts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Live online classes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SilverSneakers LIVE — Zoom classes daily.</li>
              <li>Multiple classes throughout day.</li>
              <li>Other seniors attend — community feel.</li>
              <li>From your living room.</li>
              <li>Sign up in app.</li>
              <li>Free with eligibility.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Renew Active alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>UnitedHealthcare&apos;s version of SilverSneakers.</li>
              <li>Similar gym access + classes.</li>
              <li>Some plans use this instead.</li>
              <li>Check your plan to know which.</li>
              <li>Same idea, different brand.</li>
              <li>Both excellent free benefits.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Check eligibility today</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re on Medicare and not using SilverSneakers, check eligibility today at SilverSneakers.com. Most Medicare Advantage members are eligible for free. Free gym access alone can save $50/month — $600/year. Plus the senior-specific classes are excellent. Many seniors don&apos;t realize their Medicare plan includes this benefit.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
