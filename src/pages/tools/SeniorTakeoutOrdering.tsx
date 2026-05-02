import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils } from 'lucide-react';

export default function SeniorTakeoutOrdering() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Takeout Ordering — Senior Guide" description="Order takeout from restaurants directly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Utensils className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Takeout</h1>
          <p className="text-lg text-muted-foreground">Order direct, save fees.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Restaurant's own site</h2><p>Skip DoorDash. Most restaurants have free online ordering. Save 20% in fees.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Restaurant apps</h2><p>Chick-fil-A, Domino's, Starbucks have great apps. Loyalty rewards too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. ChowNow</h2><p>Many local restaurants use it. Same as DoorDash but cheaper.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Pickup vs delivery</h2><p>Pickup avoids delivery fees and keeps food hot. Drive there for tip-free meal.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Schedule ahead</h2><p>Order Sunday's lunch on Saturday. Walk in, food ready.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Save your order</h2><p>Most apps remember last order. Reorder favorites in two taps.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Tip the restaurant directly when picking up. Counter staff appreciate the 10-15%.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
