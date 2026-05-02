import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorWoundCareApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wound Care for Seniors — TekSure" description="Senior skin tears, cuts, diabetic wound healing tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Wound Care</h1>
          <p className="text-lg text-muted-foreground">Skin heals slower in seniors.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skin tears common</h2><p>Thinner senior skin tears easily. Bandaids + Vaseline help.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Diabetic wounds</h2><p>Take seriously. Heal slowly. Infection risk. Doctor immediately.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pressure sores</h2><p>From sitting/lying long. Move every 2 hours. Big deal.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wound photo tracking</h2><p>Take daily photos. Same angle. See if healing or worsening.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wound clinics</h2><p>Medicare covers. For chronic wounds. Specialists.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Nutrition matters</h2><p>Protein, zinc, vitamin C help wounds heal. Diet affects.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Wound not healing in 2 weeks = see doctor. Especially for diabetics.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
