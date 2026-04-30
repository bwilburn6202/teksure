import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

export default function WalkingGroupsForSeniorsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walking Groups for Seniors | TekSure" description="Find walking buddies + groups. Apps for senior walkers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walking Groups</h1>
          <p className="text-lg text-muted-foreground">Walk with friends.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Meetup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app + website.</li><li>Search senior walking.</li><li>Local groups.</li><li>Pace + level filters.</li><li>Free to join.</li><li>Most cities have multiple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior centers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Often host walking groups.</li><li>Free participation.</li><li>Mall walking groups.</li><li>Park trail groups.</li><li>Senior-friendly pace.</li><li>Build friendships.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SilverSneakers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Many gyms host walks.</li><li>Indoor track.</li><li>Outdoor groups.</li><li>Free with Medicare Advantage.</li><li>Find at silversneakers.com.</li><li>Senior community.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tracking apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Fitness — built-in.</li><li>MyFitnessPal — free.</li><li>Pacer — free pedometer.</li><li>Track distance + steps.</li><li>Goal — 7,000 steps.</li><li>Compete with friends.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mall walking</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Climate controlled.</li><li>Open before stores.</li><li>Senior groups daily.</li><li>Year-round option.</li><li>Bathrooms close.</li><li>Senior favorite.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Safety tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Phone with you.</li><li>Apple Watch fall detect.</li><li>Tell someone route.</li><li>Walking shoes good.</li><li>Bright clothing.</li><li>Sunscreen + hat.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Walking + friends = senior longevity</h3><p className="text-sm text-muted-foreground">Studies show walking groups extend senior life by 5-7 years. Not just exercise — social connection. Find via Meetup, SilverSneakers, senior centers, malls. Free or low cost. 30 minutes 5x/week. Best senior health investment ever. Buddy makes you go.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
