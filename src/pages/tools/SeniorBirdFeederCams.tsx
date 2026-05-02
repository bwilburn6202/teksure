import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

export default function SeniorBirdFeederCams() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Bird Feeders for Seniors — TekSure" description="Smart bird feeders with cameras — Bird Buddy, NETVUE, Birdkiss." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Bird Feeders</h1>
          <p className="text-lg text-muted-foreground">Camera identifies every visitor.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bird Buddy</h2><p>$269. AI identifies birds. Sends photo notifications to phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NETVUE Birdfy</h2><p>$200. Solar-powered option. Records birds visiting.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Birdkiss</h2><p>$150. Cheaper option. AI species ID.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why seniors love them</h2><p>Watch from inside on cold days. Save photos to share with grandkids.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wi-Fi range</h2><p>Mount within 30 ft of house Wi-Fi. Test before buying long pole.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best seeds</h2><p>Black-oil sunflower attracts widest variety. Nyjer for finches.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Add nearby Merlin Bird ID app — combo is the ultimate backyard birding setup.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
