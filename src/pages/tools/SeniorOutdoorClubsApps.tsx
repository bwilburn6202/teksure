import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function SeniorOutdoorClubsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Outdoor Clubs + Apps | TekSure" description="Find walking groups, hiking clubs, nature meetups for senior outdoor enthusiasts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Users className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Outdoor Clubs</h1>
          <p className="text-lg text-muted-foreground">Find others to explore with.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Meetup.com</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free to join.</li>
              <li>Search hiking, walking, nature groups.</li>
              <li>Filter for 50+ groups.</li>
              <li>Local in-person events.</li>
              <li>Beginners welcome.</li>
              <li>Make new friends.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sierra Club</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$15/year membership.</li>
              <li>1.4 million members.</li>
              <li>Local outings + hikes.</li>
              <li>Senior-friendly group hikes available.</li>
              <li>Conservation focused.</li>
              <li>Social + cause.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Audubon Society</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Local Audubon chapters.</li>
              <li>Free birding walks.</li>
              <li>Educational lectures.</li>
              <li>Senior-heavy demographic.</li>
              <li>Slow pace, gentle hikes.</li>
              <li>Great gateway to outdoors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AMC + Outdoor Clubs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Appalachian Mountain Club — $60/yr.</li>
              <li>Mountaineers (PNW).</li>
              <li>Adirondack Mountain Club.</li>
              <li>Many regional clubs.</li>
              <li>Workshops + group trips.</li>
              <li>Decades of senior member tradition.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Walking groups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>YMCA group walks.</li>
              <li>Mall walking clubs.</li>
              <li>Senior center weekly walks.</li>
              <li>SilverSneakers walks.</li>
              <li>Free or low cost.</li>
              <li>Indoor + outdoor options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Walk With a Doc</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free monthly walks led by doctors.</li>
              <li>Health discussion + walking.</li>
              <li>Worldwide program.</li>
              <li>Find at WalkWithADoc.org.</li>
              <li>Education + exercise.</li>
              <li>Senior-friendly pace.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Local Audubon for gentle start</h3>
            <p className="text-sm text-muted-foreground">If you want to get outdoors but not rugged hiking, look up your local Audubon Society. Their bird walks are slow-paced, beginner-friendly, and focus on observing nature. Lots of seniors. Free or very low cost. Great way to explore parks and meet outdoor-loving people your age. Search &quot;[your city] Audubon&quot; for local chapter.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
