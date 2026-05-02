import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function SeniorTextToTV() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cast Phone to TV — Senior Guide" description="Show photos and videos on the big TV." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cast to TV</h1>
          <p className="text-lg text-muted-foreground">Phone photos on the big screen.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Apple AirPlay</h2><p>iPhone — swipe down, Screen Mirroring, pick Apple TV. Phone shows on TV.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Google Cast</h2><p>Android — open Photos, tap cast icon. Pick TV. Slideshow plays.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Smart TV</h2><p>Many newer TVs have AirPlay or Cast built in. Check your TV settings.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. HDMI cable</h2><p>$15 cable connects iPhone to TV. Works without Wi-Fi. Backup plan.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Family slideshows</h2><p>Make a Memories album. Cast to TV. Family sits and enjoys.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Same Wi-Fi</h2><p>Phone and TV must be on same home Wi-Fi. Otherwise won't connect.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Show grandkids a vacation slideshow. Bigger than a phone, more memorable for them.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
