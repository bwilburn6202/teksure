import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function SeniorMusicCreationApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Music Creation Apps for Seniors — TekSure" description="Make music — GarageBand, Yousician, Simply Piano for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Music Creation Apps</h1>
          <p className="text-lg text-muted-foreground">Make music. Learn an instrument.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GarageBand</h2><p>FREE on Mac/iPad. Full music studio. Records vocals or instruments.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Simply Piano</h2><p>$15/month. Learn piano with phone. Listens as you play.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Yousician</h2><p>$20/month. Piano, guitar, ukulele lessons. Senior-friendly pace.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Songsterr</h2><p>$10/month. Find tabs for any song. Learn classics on guitar.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Studies show</h2><p>Music learning slows cognitive decline. Real measured benefit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Piano keyboards</h2><p>Yamaha P-45 ($450) is great for seniors learning piano.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Never too late. Many seniors start piano in 70s and play beautifully.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
