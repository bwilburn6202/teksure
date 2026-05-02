import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

export default function SeniorGarminBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Garmin for Seniors — Senior Guide" description="Use Garmin watches for fitness and outdoors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Garmin Watches</h1>
          <p className="text-lg text-muted-foreground">Best battery life of any smartwatch.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Why Garmin</h2><p>Battery lasts 1-3 weeks. Best for hikers, walkers, swimmers, golfers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Vivosmart 5</h2><p>$130. Slim band. Steps, sleep, heart, stress, body battery score.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Venu Sq 2</h2><p>$200. Touchscreen. Better for Apple Watch fans who want long battery.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Connect IQ app</h2><p>Free Garmin Connect app. View charts, share with family, export to doctor.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Incident detection</h2><p>If you fall hard during a walk, watch alerts your emergency contacts via paired phone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Golf models</h2><p>Approach S12 has yardage on 43,000 courses. Great if you golf.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Garmin is best at outdoor sports. Pick Apple Watch for general phone integration.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
