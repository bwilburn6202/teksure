import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorRVCommunity() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior RV Community + Forums | TekSure" description="Connect with other senior RVers. Online forums, rallies, clubs for retired RV travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior RV Community</h1>
          <p className="text-lg text-muted-foreground">Connect with other RVers your age.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Escapees RV Club</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$50/year membership.</li>
              <li>Largest club for full-time RVers.</li>
              <li>Mail forwarding service.</li>
              <li>Domicile services for full-timers.</li>
              <li>Member parks discounted nightly.</li>
              <li>Strong senior membership.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online forums</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iRV2 Forums — largest RV discussion.</li>
              <li>RV.net — Good Sam community.</li>
              <li>Reddit r/GoRVing — active community.</li>
              <li>Facebook groups for RV brand-specific.</li>
              <li>Free advice from experienced RVers.</li>
              <li>Especially helpful for repair questions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RV rallies + meetups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>RV brand owner rallies (Tiffin, Newmar, Airstream).</li>
              <li>Quartzsite, Arizona winter gatherings.</li>
              <li>Escapade — Escapees annual rally.</li>
              <li>Good Sam regional rallies.</li>
              <li>Meet other RVers in person.</li>
              <li>Workshops + entertainment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Solo senior RVers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>RVing Women — women&apos;s RV club.</li>
              <li>Wandering Individuals Network — solo group.</li>
              <li>Loners on Wheels — singles RV club.</li>
              <li>Don&apos;t RV alone — find your tribe.</li>
              <li>Travel solo but camp with others.</li>
              <li>Friendships on the road.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RV blogs + YouTube</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>RVgeeks — couple sharing tips.</li>
              <li>Long Long Honeymoon — popular YT.</li>
              <li>Less Junk More Journey — family RV.</li>
              <li>Liz Amazing — solo woman RV travel.</li>
              <li>Many senior RVer YouTubers.</li>
              <li>Learn from their experiences.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Camp host opportunities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>State + national parks need camp hosts.</li>
              <li>Free site in exchange for hosting.</li>
              <li>Greet campers, light maintenance.</li>
              <li>Workamper.com lists opportunities.</li>
              <li>Many seniors love the structure + community.</li>
              <li>Save thousands on camping fees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Join Escapees if full-timing</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re a full-time or part-time RVer, the $50/year Escapees membership pays for itself many times over. Discounted parks, mail forwarding, community of other senior RVers, and resources for life on the road. Combined with iRV2 forums (free) for technical questions, you&apos;re connected to thousands of other senior RVers.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
