import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorTherapyPets() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Therapy Pets for Seniors — TekSure" description="Get a therapy pet — emotional support, dementia therapy, robot pets." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Therapy Pets for Seniors</h1>
          <p className="text-lg text-muted-foreground">Real medicine.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefits</h2><p>Lower BP. Less depression. Improved memory. Reduced loneliness.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior-friendly pets</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Senior dogs (calm, trained)</li><li>Cats (low-maintenance)</li><li>Birds (long companions)</li><li>Fish (calming)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pets for the Elderly</h2><p>Foundation pays adoption fees for seniors 60+. Free pet.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Robot pets</h2><p>Joy For All Companion Pet $130. For dementia. Real benefits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Therapy dog visits</h2><p>FREE. Many groups visit assisted living. Schedule via local senior centers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Travel hospital fund</h2><p>Pet-Vet partnerships help seniors with vet bills. Grants available.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Senior pets bond fast with senior owners. Mutual rescue.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
