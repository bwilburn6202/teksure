import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

export default function SeniorWalkingClubs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Walking Clubs | TekSure" description="Find senior walking groups. Apps for senior fitness community." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Walking Clubs</h1>
          <p className="text-lg text-muted-foreground">Community + fitness.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Meetup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app.</li><li>Search senior walking near me.</li><li>Local groups.</li><li>Senior friends.</li><li>Schedule weekly.</li><li>Worth joining.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mall walking</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + climate-controlled.</li><li>Senior popular.</li><li>Open before stores.</li><li>Mall walker programs.</li><li>Free coffee sometimes.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior Center</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free walking groups.</li><li>Daily often.</li><li>Senior community.</li><li>Different abilities welcome.</li><li>Friend-making.</li><li>Worth joining.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SilverSneakers Walking</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Medicare Advantage.</li><li>Senior groups.</li><li>Many gym locations.</li><li>Outdoor + indoor.</li><li>Worth eligibility.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Strava clubs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free senior groups.</li><li>Track + share routes.</li><li>Senior virtual + in-person.</li><li>Compete friendly.</li><li>Worth joining.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Health benefits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>30 min daily walking critical.</li><li>Senior longevity.</li><li>Heart, brain, mood.</li><li>Walking buddies = consistency.</li><li>Free.</li><li>Most important habit.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Meetup + senior center = senior walking community</h3><p className="text-sm text-muted-foreground">Free Meetup app + senior center + mall walking + SilverSneakers + Strava clubs = senior walking community options. Walking buddies = consistency. 30-min daily walking critical for longevity, heart, brain, mood. Friends made too. Free abundant.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
