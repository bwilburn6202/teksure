import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function SeniorYelpReviews() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Yelp for Seniors — Senior Guide" description="Find restaurants and services with Yelp reviews." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Yelp Reviews</h1>
          <p className="text-lg text-muted-foreground">Honest reviews of local businesses.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free app</h2><p>Yelp on App Store or Play Store. Sign up optional.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search</h2><p>Type pizza, plumber, or doctor. Set distance to within 5 miles for nearby spots.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Read 4-star reviews</h2><p>Look for businesses with 4 stars and 100+ reviews. Avoid 1-3 star spots.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. See photos</h2><p>Real customers post photos. Helpful for picking the right restaurant.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Hours and call</h2><p>Tap business name. Tap phone number to call. Tap directions to drive there.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip ads</h2><p>Top result is sometimes an ad. Look for the small Ad label.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pair with Google Maps reviews — when both have 4+ stars, the place is likely good.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
