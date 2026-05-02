import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { House } from 'lucide-react';

export default function SeniorRetirementCommunities() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find Retirement Communities — Senior Guide" description="Online tools to find a senior living community." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <House className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Retirement Communities</h1>
          <p className="text-lg text-muted-foreground">Find senior living online.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. APlaceForMom</h2><p>Free. Helpline narrows down options based on care needs.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Caring.com</h2><p>Free. Reviews of independent living, assisted living, memory care.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. SeniorAdvisor</h2><p>Free. Verified reviews from real residents and families.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. 55places</h2><p>Active adult independent communities. Search by state, price, amenities.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Visit before signing</h2><p>Tour 3-5 places. Eat a meal. Talk to residents. Big decision.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Veterans Aid & Attendance</h2><p>If qualified veteran or spouse, $2,000+/month for senior living. Free help via VA.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Beware paid lead sites. Some refer you to whoever pays them, not best fit.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
