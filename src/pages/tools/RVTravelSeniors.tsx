import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Caravan } from 'lucide-react';

export default function RVTravelSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="RV Travel for Seniors | TekSure" description="RV picks, parks, apps for senior travelers. Plain-English guide for retired RVers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Caravan className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">RV Travel for Seniors</h1>
          <p className="text-lg text-muted-foreground">Your home goes with you.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RV types</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Class A</strong> — bus-style. Most space. $100K-1M.</li>
              <li><strong>Class B (camper van)</strong> — easy drive. $80K-200K. Senior favorite.</li>
              <li><strong>Class C</strong> — truck cab + cabin. $80K-300K.</li>
              <li><strong>Travel trailer</strong> — towed. Cheapest. $15K-100K.</li>
              <li><strong>Fifth wheel</strong> — luxury towed. Need pickup. $50K-200K.</li>
              <li>Used = much cheaper. Inspection essential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Walk-around bed (no climbing over).</li>
              <li>Larger bathroom + shower.</li>
              <li>Backup camera (essential).</li>
              <li>Auto-leveling system.</li>
              <li>Solar panels — boondocking flexibility.</li>
              <li>Slide-outs for living space.</li>
              <li>Tire pressure monitoring system.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Memberships + apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Good Sam Club</strong> — discounts at parks. $30/yr.</li>
              <li><strong>Passport America</strong> — 50% off 1,500+ parks. $44/yr.</li>
              <li><strong>Harvest Hosts</strong> — free overnight at wineries/farms. $99/yr.</li>
              <li><strong>RV LIFE Pro app</strong> — RV-safe routing. $65/yr. Essential.</li>
              <li><strong>Campendium</strong> — park reviews. Free.</li>
              <li><strong>Allstays</strong> — campground app + Walmart overnight.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Roadside + insurance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Good Sam Roadside</strong> — RV-specific tow. Essential.</li>
              <li><strong>FMCA Roadside</strong> — competitor.</li>
              <li>RV insurance — separate from auto.</li>
              <li>Full-time RV insurance if living in it.</li>
              <li>Inspection before purchase ($300-500).</li>
              <li>Take RV driving course (some clubs offer).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Test before buying</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Rent first — Outdoorsy or RVshare.</li>
              <li>Try 1-2 week trip.</li>
              <li>Test drive several types.</li>
              <li>Drive in suburb + interstate.</li>
              <li>Set up at campground.</li>
              <li>Empty tanks (yes, the whole experience).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">RVing community</h3>
            <p className="text-sm text-muted-foreground"><strong>Escapees RV Club</strong> — senior-heavy, mail forwarding, mentorship. <strong>RV LIFE Forums</strong> — answer-all-questions community. <strong>FMCA</strong> — full-time RVers. Free Facebook groups for every RV brand. The community is the best part.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
