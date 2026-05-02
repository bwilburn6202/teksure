import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mountain } from 'lucide-react';

export default function SeniorNationalParkApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="National Park Apps — Senior Guide" description="Use NPS app for visiting national parks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mountain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">National Park Apps</h1>
          <p className="text-lg text-muted-foreground">Plan your park visits.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. NPS app</h2><p>Free. Official National Park Service. All 423 parks.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Senior Pass</h2><p>$80 lifetime. Free entry to all national parks for life. Apply at any park.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Recreation.gov</h2><p>Reserve campsites, lodges, and timed entry permits. Some parks now require advance reservation.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. AllTrails</h2><p>Find easy trails. Filter for accessible.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Junior Ranger</h2><p>For grandkids. Free badge programs at most parks.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Offline maps</h2><p>Download park maps before going. Cell service spotty in many parks.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Plan visits May or September — fewer crowds, better weather. Reservations easier too.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
