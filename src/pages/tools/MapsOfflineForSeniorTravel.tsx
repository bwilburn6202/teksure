import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function MapsOfflineForSeniorTravel() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Offline Maps for Senior Travelers | TekSure" description="Google Maps + Apple Maps offline. Senior travel guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Offline Maps</h1>
          <p className="text-lg text-muted-foreground">Maps without internet.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Google Maps offline</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Search city.</li><li>Tap menu (3 dots).</li><li>Download offline map.</li><li>Senior planning ahead.</li><li>Works without internet.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Maps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iOS 17+.</li><li>Tap profile picture.</li><li>Offline Maps.</li><li>Download area.</li><li>Senior new feature.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>National parks no signal.</li><li>International data costly.</li><li>Senior backup safety.</li><li>Cruise ports.</li><li>Save data charges.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Plan ahead</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Download on home wifi.</li><li>Free up storage if needed.</li><li>Test offline before travel.</li><li>Senior ready.</li><li>Better than paper map.</li><li>Updated.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Maps.me alternative</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app.</li><li>Detailed offline.</li><li>Hiking trails good.</li><li>Senior walking tours.</li><li>Backup option.</li><li>OpenStreetMap.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Download every trip.</li><li>1-2 GB storage typically.</li><li>Save hotel as favorite.</li><li>Senior reference.</li><li>Family hotel address.</li><li>Insurance.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free offline maps = senior travel safety</h3><p className="text-sm text-muted-foreground">Free Google Maps + Apple Maps offline = senior travel insurance. National parks no signal. International expensive data. Download on home wifi before trip. Take 2 min, free, often crucial. Most under-used senior travel feature.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
