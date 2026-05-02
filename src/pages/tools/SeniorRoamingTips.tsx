import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

export default function SeniorRoamingTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="International Phone Roaming for Seniors — TekSure" description="Avoid $500 phone bills abroad — eSIM, T-Mobile, Verizon TravelPass." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Globe className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">International Roaming</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t come home to $500 bill.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">T-Mobile</h2><p>FREE data and texting in 215+ countries. Best for international.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Verizon TravelPass</h2><p>$10/day. 24-hour international use of your plan.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AT&amp;T International Day Pass</h2><p>$10/day. Same idea as Verizon.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">eSIM travel</h2><p>$10-$30 for week. Airalo, Holafly. Cheap data abroad.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wi-Fi calling</h2><p>Hotel Wi-Fi + Wi-Fi calling = free calls home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip data abroad</h2><p>Use Wi-Fi only. Tell carrier &ldquo;international roaming off.&rdquo;</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: T-Mobile is best senior carrier for international travelers. Free roaming.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
