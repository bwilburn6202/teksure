import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Radio } from 'lucide-react';

export default function SeniorTuneIn() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TuneIn Radio for Seniors — Senior Guide" description="Free worldwide radio." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Radio className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TuneIn Radio</h1>
          <p className="text-lg text-muted-foreground">Real radio stations worldwide.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>Most local AM/FM stations free. Some sports require paid plan.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Hometown radio</h2><p>Listen to childhood radio station from anywhere. Surprisingly emotional.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. International</h2><p>BBC, Radio Paris, Australian ABC. Practice languages or hear other cultures.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Premium</h2><p>$10/month. Major League Baseball, NFL, news. Worth it for sports fans.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Built into cars</h2><p>Tesla, BMW, others have TuneIn built in.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Apple CarPlay/Android Auto</h2><p>Stream on long drives. Familiar voices on the road.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>iHeartRadio is a free alternative. Both free for live stations.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
