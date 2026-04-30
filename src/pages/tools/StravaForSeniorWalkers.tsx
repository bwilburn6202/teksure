import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Map } from 'lucide-react';

export default function StravaForSeniorWalkers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Strava for Senior Walkers + Cyclists | TekSure" description="Free Strava app for senior walking + biking community." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Map className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Strava</h1>
          <p className="text-lg text-muted-foreground">Senior community fitness.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free version</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Track walks/rides.</li><li>GPS routes.</li><li>Friend network.</li><li>Senior community.</li><li>Free.</li><li>$80/yr Premium optional.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Discover routes.</li><li>See where neighbors walk.</li><li>Senior community feel.</li><li>Track over years.</li><li>Family share.</li><li>Motivation.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Privacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hide home address.</li><li>Privacy zones.</li><li>Senior important.</li><li>Friends-only setting.</li><li>Free.</li><li>Setup carefully.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Walking groups</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Strava Clubs.</li><li>Senior local groups.</li><li>Find walking buddies.</li><li>Free join.</li><li>Make friends.</li><li>Stay motivated.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch sync</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Auto-sync workouts.</li><li>Track GPS.</li><li>Senior automatic.</li><li>Free.</li><li>One-time setup.</li><li>Apple Watch + Strava great.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Premium $80/yr</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Heart rate analysis.</li><li>Goals + segments.</li><li>Senior power user.</li><li>Free is plenty most.</li><li>Try free first.</li><li>Optional.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Strava = senior community walkers</h3><p className="text-sm text-muted-foreground">Free Strava connects senior walkers/cyclists. Track routes, find groups, see where neighbors walk. Apple Watch auto-syncs. Hide home address privacy. Free version sufficient. Most senior community fitness app. Joins running + cycling popular.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
