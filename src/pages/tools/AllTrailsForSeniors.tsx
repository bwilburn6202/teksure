import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mountain } from 'lucide-react';

export default function AllTrailsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AllTrails for Senior Hikers | TekSure" description="Find easy trails near you. AllTrails app for senior hikers + walkers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mountain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AllTrails</h1>
          <p className="text-lg text-muted-foreground">450,000+ trails. Find your perfect hike.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is AllTrails?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most popular hiking app — 50 million users.</li>
              <li>Free with optional Pro ($36/year).</li>
              <li>Browse + filter trails by difficulty.</li>
              <li>Read reviews from other hikers.</li>
              <li>See photos before going.</li>
              <li>Available iPhone + Android.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Filter for senior-friendly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Difficulty — Easy.</li>
              <li>Length — under 3 miles.</li>
              <li>Elevation gain — under 200 feet.</li>
              <li>Wheelchair accessible filter.</li>
              <li>Stroller-friendly often = senior-friendly.</li>
              <li>Read reviews for accessibility notes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pro features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download maps for offline use.</li>
              <li>Live updates — wrong turn alerts.</li>
              <li>Share location with family.</li>
              <li>Lifeline — sends location automatically.</li>
              <li>Topo + satellite maps.</li>
              <li>Worth $36 for serious hikers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hiking safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Always tell someone where you go.</li>
              <li>Carry water + snacks.</li>
              <li>Charged phone with offline map.</li>
              <li>Know turnaround time before dark.</li>
              <li>Hiking poles help balance + knees.</li>
              <li>Apple Watch SOS for emergencies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly trails</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>National parks have senior loops.</li>
              <li>State parks often easier.</li>
              <li>Rail trails — flat, gravel paths.</li>
              <li>Local nature centers.</li>
              <li>Greenways through cities.</li>
              <li>Book daily walks gradually building strength.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Group hiking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Senior hiking groups via Meetup.com.</li>
              <li>Local Audubon Society walks.</li>
              <li>Park rangers lead free hikes.</li>
              <li>Sierra Club senior groups.</li>
              <li>Safer + more social.</li>
              <li>Many free, near every city.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Filter Easy + under 3 miles</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t be intimidated by hiking apps. Filter AllTrails for &quot;Easy&quot; difficulty + under 3 miles + under 200 feet elevation gain. You&apos;ll find dozens of beautiful walks near you. Many are paved, accessible. Take your time, bring water, enjoy the views. Many seniors discover wonderful trails 15 minutes from home they never knew existed.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
