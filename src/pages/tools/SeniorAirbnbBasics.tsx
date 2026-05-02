import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function SeniorAirbnbBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airbnb Basics — Senior Guide" description="Book a vacation rental safely with Airbnb." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airbnb Basics</h1>
          <p className="text-lg text-muted-foreground">Vacation rentals made simple.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up free</h2><p>Visit airbnb.com or download the app. Enter your name and a real email.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search</h2><p>Type a city, dates, and number of guests. Filter by price and stars.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Read reviews</h2><p>Look for places with 4.7 stars or higher and 50+ reviews.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Look for Superhost</h2><p>The Superhost badge means top-rated for years. Safer choice.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Book through the app</h2><p>Never pay outside Airbnb. Pay through the app for full protection.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Check cancellation</h2><p>Pick Flexible cancel policy if your plans might change. Worth the few dollars more.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pull up Google Street View to see the actual neighborhood before booking.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
