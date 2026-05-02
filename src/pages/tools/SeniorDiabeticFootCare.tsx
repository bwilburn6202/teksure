import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

export default function SeniorDiabeticFootCare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Diabetic Foot Care for Seniors — TekSure" description="Critical foot care for diabetic seniors — Medicare covers shoes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Diabetic Foot Care</h1>
          <p className="text-lg text-muted-foreground">Save your feet. Save your life.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily check</h2><p>Look at feet daily. Mirror or partner help. Catch early issues.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare covers shoes</h2><p>Therapeutic Shoes for Diabetics. 1 pair + 3 inserts yearly. Often FREE.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Annual podiatrist</h2><p>Medicare covers. Catches problems before they become bad.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch for</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Cuts that don&apos;t heal</li><li>Numbness or tingling</li><li>Color changes</li><li>Cracks in skin</li><li>Ingrown toenails</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Never go barefoot</h2><p>Even at home. One step on tack = potential amputation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cool water test</h2><p>Test bath water with hand first. Numb feet can&apos;t feel scalding heat.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Diabetic foot ulcers cause 80,000 amputations yearly. Daily check prevents.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
