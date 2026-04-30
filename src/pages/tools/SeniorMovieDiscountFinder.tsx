import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Film } from 'lucide-react';

export default function SeniorMovieDiscountFinder() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Movie Theater Discounts | TekSure" description="Find senior discount days. Movie theater senior savings guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Film className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Movie Discounts</h1>
          <p className="text-lg text-muted-foreground">Cheap theater days.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tuesday senior days</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>AMC, Regal often.</li><li>$5-$8 tickets.</li><li>Senior 60+ usually.</li><li>Show ID.</li><li>Best deal.</li><li>Free popcorn sometimes.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Subscriptions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>AMC A-List $25/mo.</li><li>3 movies/week.</li><li>Senior weekly viewer.</li><li>Compare ticket cost.</li><li>Worth heavy goers.</li><li>Cancel anytime.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Atom Tickets</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>App for tickets.</li><li>Promo codes.</li><li>$5 off first.</li><li>Senior compare prices.</li><li>Free.</li><li>Save fees.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Matinee always cheap</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Before noon usually.</li><li>$1-$3 less.</li><li>Senior daytime free.</li><li>Less crowded.</li><li>Senior preferred.</li><li>Win-win.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free theaters</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Library showings.</li><li>Senior centers.</li><li>Park district.</li><li>Free + community.</li><li>Senior social.</li><li>Worth checking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Stream new at home</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$20 rental day-of-release.</li><li>Cheaper than 2 tickets.</li><li>Senior couch comfortable.</li><li>VOD on Apple TV.</li><li>No driving.</li><li>Best 2-person value.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Tuesday $5 movies = senior tradition</h3><p className="text-sm text-muted-foreground">Tuesday senior days at AMC/Regal = $5-$8 movies. Plus matinee always cheaper. Senior weekly tradition affordable. Library + senior center free showings worth checking. Or stream new at home $20. Senior options abundant.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
