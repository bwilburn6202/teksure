import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorPetGoneApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Loss Support for Seniors — TekSure" description="Grieving a pet — counseling, memorial apps, support groups." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Loss Support</h1>
          <p className="text-lg text-muted-foreground">Real grief. Real support.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lap of Love hotline</h2><p>FREE. 1-855-352-5683. Pet loss grief counseling.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">ASPCA Pet Loss</h2><p>FREE. 1-877-474-3310. Grief counseling.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Memorial apps</h2><p>Timeless Paws app. Create digital memorial. Share with family.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pet cremation</h2><p>$100-$300. Most vets coordinate.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Custom keepsakes</h2><p>Etsy has portrait artists. $30-$200. Fur-clay paw prints.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Don&apos;t rush new pet</h2><p>Grief is real. Wait until ready. Sometimes weeks, sometimes year.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pet loss is real grief. Take time. Hotlines free. You&apos;re not alone.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
