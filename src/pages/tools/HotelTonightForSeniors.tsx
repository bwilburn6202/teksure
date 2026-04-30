import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bed } from 'lucide-react';

export default function HotelTonightForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="HotelTonight + Booking for Seniors | TekSure" description="Last-minute hotel deals. Senior hotel app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bed className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hotel Apps</h1>
          <p className="text-lg text-muted-foreground">Senior hotel deals.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">HotelTonight</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Same-day deals.</li><li>Up to 60% off.</li><li>Free.</li><li>Senior spontaneous.</li><li>Owned by Airbnb.</li><li>Limited last minute.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Booking.com</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Largest hotel app.</li><li>Free cancellation often.</li><li>Genius rewards.</li><li>Senior preferred.</li><li>Worldwide.</li><li>Trusted brand.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hotels.com</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Stay 10 = 1 free.</li><li>Senior loyalty pays.</li><li>Compare prices.</li><li>Free cancellation.</li><li>Worth signup.</li><li>Senior frequent traveler.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AAA hotel discounts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>5-15% off.</li><li>Many chains.</li><li>Senior member.</li><li>Stack with rewards.</li><li>Show card.</li><li>Free with membership.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AARP hotels</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$15 AARP membership.</li><li>5-15% hotels.</li><li>Wyndham, Marriott.</li><li>Senior worth it.</li><li>Many discounts.</li><li>Pays for itself.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Compare 3 sites.</li><li>Always free cancel option.</li><li>Read recent reviews.</li><li>Confirm direct sometimes cheaper.</li><li>Senior call hotel.</li><li>Off-season discounts.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$15 AARP = senior hotel savings</h3><p className="text-sm text-muted-foreground">$15/year AARP unlocks 5-15% hotel discounts at major chains. Plus AAA $80 same. Pay for themselves in one trip. Always book free-cancel rate. Compare Booking + Hotels.com. Senior frequent travel save hundreds. Worth membership.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
