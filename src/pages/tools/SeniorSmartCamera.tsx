import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorSmartCamera() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Cameras for Seniors — Senior Guide" description="Pick a security camera for home." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Cameras</h1>
          <p className="text-lg text-muted-foreground">See your home from anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Ring</h2><p>$60-200. Most common. Easy app. Good for a Ring doorbell pairing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Nest Cam</h2><p>$100-180. Best video. Owned by Google.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Wyze</h2><p>$30-50. Cheap and good. Some privacy concerns — research before buying.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Eufy</h2><p>$80-150. Stores video locally — better privacy.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Indoor only</h2><p>Watch pets while gone. Some seniors check on aging parents this way.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Subscriptions</h2><p>$3-10/month for cloud video storage. Skip if you don't need history.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Don't put cameras in private rooms (bedrooms, bathrooms). Even if just for you.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
