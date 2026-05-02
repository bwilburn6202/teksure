import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function SeniorAirlineAppGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airline Apps for Seniors — TekSure" description="How seniors use Delta, United, American, and Southwest apps for boarding passes and gate changes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airline Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Boarding passes, gate changes, and rebooking.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why install</h2><p>Real-time gate changes, mobile boarding pass, faster rebooking when flights cancel.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Delta Air Lines</h2><p>Best-rated app. Live bag tracking. Free messaging in flight on most planes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">United Airlines</h2><p>Strong rebooking tool when flights cancel. Lets you change seats and meals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">American Airlines</h2><p>Easy to find your gate. Shows wait times at security.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Southwest</h2><p>Set a check-in reminder for exactly 24 hours before departure to get a better boarding spot.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Save boarding pass</h2><p>Add to Apple Wallet (iPhone) or Google Wallet (Android). Works without internet.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Print a paper backup. Phones die. Paper doesn&apos;t.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
