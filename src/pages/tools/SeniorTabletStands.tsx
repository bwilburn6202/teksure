import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function SeniorTabletStands() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tablet Stands for Seniors — Senior Guide" description="Pick a stand to use iPad hands-free." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tablet Stands</h1>
          <p className="text-lg text-muted-foreground">Hands-free iPad use.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Lamicall stand</h2><p>$15-20. Adjustable angle. Counter or desk.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Bed stand</h2><p>$35. Gooseneck holds tablet over the bed. Read or watch in bed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Floor stand</h2><p>$60. Tall. Adjustable. Use while exercising or cooking.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Car mount</h2><p>$25. Headrest mount. Grandkids watch on long trips.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Folding portable</h2><p>$10. Folds flat for travel. Cheap solution.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Magnetic mount</h2><p>For iPad with MagSafe. Snap on/off easily.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>A stand reduces neck strain. Look down less, more at eye level.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
