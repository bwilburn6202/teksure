import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function SeniorTripAdvisor() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TripAdvisor for Seniors — Senior Guide" description="Plan trips with TripAdvisor reviews." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TripAdvisor</h1>
          <p className="text-lg text-muted-foreground">Plan vacations with millions of reviews.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>App or tripadvisor.com. Sign up with email to save favorites.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Things to do</h2><p>Type a destination. See top tours, museums, and activities ranked by reviews.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Hotel reviews</h2><p>Read hotel reviews from real guests. Look for noise, cleanliness, breakfast complaints.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Restaurant reviews</h2><p>Sort by Excellent + photos. Avoid places with no reviews — likely too new or unknown.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Top sights nearby</h2><p>Tap Near Me. App shows attractions within walking distance using GPS.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Book through partners</h2><p>TripAdvisor links to Expedia, Hotels.com. Cancel policy varies — read carefully.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Senior travel tip: filter for accessible attractions if you have mobility limits.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
