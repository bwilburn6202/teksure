import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SilverSneakersGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="SilverSneakers Guide for Seniors | TekSure" description="Free Medicare gym membership. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SilverSneakers</h1>
          <p className="text-lg text-muted-foreground">FREE gym + classes via Medicare.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is it?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE gym membership for seniors.</li>
              <li>Included in many Medicare Advantage plans.</li>
              <li>$0 out of pocket.</li>
              <li>15,000+ gym locations.</li>
              <li>Specialized senior classes.</li>
              <li>Online + in-person workouts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Are you eligible?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>65+ usually.</li>
              <li>Must have Medicare Advantage plan that includes it.</li>
              <li>Most major plans do (Humana, UnitedHealthcare, Aetna).</li>
              <li>Original Medicare doesn&apos;t include.</li>
              <li>Some Medigap supplemental plans.</li>
              <li>Check at silversneakers.com.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sign up</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Visit silversneakers.com.</li>
              <li>&quot;Check Eligibility&quot; — enter info.</li>
              <li>Or call 888-423-4632.</li>
              <li>If eligible — get ID number.</li>
              <li>Bring ID to gym — sign waiver.</li>
              <li>Start same day.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>YMCA</strong> — most.</li>
              <li><strong>Anytime Fitness</strong>.</li>
              <li><strong>Planet Fitness</strong> — many.</li>
              <li><strong>LA Fitness</strong>.</li>
              <li><strong>Curves</strong>.</li>
              <li><strong>Local gyms + community centers</strong>.</li>
              <li>Find: silversneakers.com locator.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SilverSneakers classes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cardio</strong> — low-impact.</li>
              <li><strong>Yoga</strong> — chair + floor.</li>
              <li><strong>Strength</strong> — for older bodies.</li>
              <li><strong>Boom</strong> — energy + dance.</li>
              <li><strong>Splash</strong> — pool.</li>
              <li><strong>Stability</strong> — balance + falls prevention.</li>
              <li>Senior-pace + senior-aware.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SilverSneakers GO app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FREE on App Store / Google Play.</li>
              <li>Hundreds of online classes.</li>
              <li>Live + on-demand.</li>
              <li>No travel needed.</li>
              <li>Same plan eligibility.</li>
              <li>Workout from couch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Make it stick</h3>
            <p className="text-sm text-muted-foreground">First visit can be intimidating — bring friend. Talk to instructor. Start with introductory class. Schedule like doctor appointment. Senior gym crowds friendly. Studies — fitness extends senior life 5+ years. Free + transformative. Most under-used senior benefit. Check eligibility today.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
