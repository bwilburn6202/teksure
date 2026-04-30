import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tent } from 'lucide-react';

export default function CampendiumAllStaysApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Campendium + AllStays for Senior RVers | TekSure" description="Find RV camping spots with Campendium and AllStays. Reviews from real RVers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tent className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Campendium + AllStays</h1>
          <p className="text-lg text-muted-foreground">Find camping spots reviewed by other RVers.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Campendium</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most comprehensive camping app.</li>
              <li>Free + Premium ($60/year).</li>
              <li>Reviews from other RVers.</li>
              <li>Cell signal info per location.</li>
              <li>Photos of actual sites.</li>
              <li>Free national parks + boondocking too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AllStays — biggest database</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Camp + RV app — $10 one-time.</li>
              <li>Largest campground database.</li>
              <li>Walmart parking allowed locations.</li>
              <li>Truck stops + rest areas.</li>
              <li>Casinos that allow overnight RV.</li>
              <li>Free dump stations + propane.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Harvest Hosts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$99/year membership.</li>
              <li>Stay free at wineries, farms, breweries.</li>
              <li>5,000+ unique locations.</li>
              <li>Just buy something — wine, produce, etc.</li>
              <li>Authentic experience over campgrounds.</li>
              <li>Senior favorite for RV travel.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Reserve America</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Book state park campsites.</li>
              <li>Federal recreation sites.</li>
              <li>National Forest, BLM lands.</li>
              <li>Free to use, fees go to parks.</li>
              <li>Book months in advance for popular spots.</li>
              <li>Most affordable camping option.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">KOA + Good Sam</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>KOA — chain of campgrounds.</li>
              <li>KOA Rewards — annual fee discount.</li>
              <li>Senior-friendly amenities.</li>
              <li>Good Sam Club — $29/year.</li>
              <li>10% off many private campgrounds.</li>
              <li>Roadside assistance + magazine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Boondocking apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iOverlander — free worldwide camping.</li>
              <li>FreeRoam — boondocking-focused.</li>
              <li>Public Lands app — BLM + Forest Service.</li>
              <li>Find free overnight spots.</li>
              <li>Especially in West.</li>
              <li>Save big over campgrounds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Campendium + Harvest Hosts combo</h3>
            <p className="text-sm text-muted-foreground">For most senior RVers, combine Campendium (find traditional campgrounds + read reviews) with Harvest Hosts (unique stays at wineries + farms). The Harvest Hosts variety prevents burnout from cookie-cutter campgrounds. Both worth the small annual fees. Combined cost: $159/year — a small fraction of typical RV travel expenses.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
