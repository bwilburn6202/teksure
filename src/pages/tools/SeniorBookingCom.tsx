import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BedDouble } from 'lucide-react';

export default function SeniorBookingCom() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Booking.com for Seniors — Senior Guide" description="Book hotels online with Booking.com." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BedDouble className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Booking.com</h1>
          <p className="text-lg text-muted-foreground">Easy hotel booking.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Search</h2><p>Type city, check-in date, check-out date, and number of guests.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Filter by stars</h2><p>3.5 stars or higher is usually clean and safe. Avoid 1-2 stars.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Free cancellation</h2><p>Look for Free Cancellation badge. Lets you change plans without losing money.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Genius level</h2><p>The free Genius program gives 10-15% discount after a few stays.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Pay at hotel</h2><p>Some bookings let you pay at check-in. Easier if you want to use a different card.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Watch for scam emails</h2><p>If you get an email asking for credit card details, ignore. Real Booking won't ask twice.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Booking guests can leave reviews after stays — read them carefully.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
