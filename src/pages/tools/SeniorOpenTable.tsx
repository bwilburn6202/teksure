import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function SeniorOpenTable() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="OpenTable for Seniors — Senior Guide" description="Reserve a restaurant table on OpenTable." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calendar className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OpenTable</h1>
          <p className="text-lg text-muted-foreground">Reserve a table without phone tag.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free app</h2><p>OpenTable in the app store. Sign up with email — no credit card.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Pick a date</h2><p>Pick the date, time, and party size. Sample only available restaurants.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Book in 2 taps</h2><p>Tap a restaurant, pick the time, tap Reserve. Get email confirmation.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Special requests</h2><p>Note Anniversary or Wheelchair access. Restaurants try to accommodate.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Cancel free</h2><p>Most reservations cancel free 1+ hour before. Some require deposit.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Earn dining points</h2><p>Each dining adds points. 2,000 points = $20 dining cheque.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Resy is a competitor — sign up there too. Some restaurants only use one platform.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
