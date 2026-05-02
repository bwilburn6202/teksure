import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorYogaSeniorPrograms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Yoga Programs | TekSure" description="Yoga programs designed for older adults." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Yoga Programs</h1>
          <p className="text-lg text-muted-foreground">Designed for 60+.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Yoga With Adriene</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free YouTube.</li><li>Many gentle classes.</li><li>Senior-appropriate.</li><li>Beginner-friendly.</li><li>Most popular yoga teacher.</li><li>Worth subscribing.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SilverSneakers Yoga</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Medicare Advantage.</li><li>Senior-specific.</li><li>Local classes + online.</li><li>Adapted poses.</li><li>Worth eligibility check.</li><li>Free if eligible.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Chair yoga</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>YouTube abundant.</li><li>Senior limited mobility.</li><li>Seated routines.</li><li>Free.</li><li>Effective for stiffness.</li><li>Worth daily.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Down Dog app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$60/year.</li><li>Customize length + level.</li><li>Senior personalized.</li><li>Restorative + gentle options.</li><li>Worth subscription.</li><li>Free trial.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Local studios</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior-specific classes.</li><li>$10-$20/class.</li><li>Senior community.</li><li>Teacher hands-on guidance.</li><li>Worth in-person sometimes.</li><li>Free first class often.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Health benefits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Balance + flexibility.</li><li>Stress reduction.</li><li>Senior fall prevention.</li><li>Sleep better.</li><li>Mind-body connection.</li><li>Worth daily 15-30 min.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Yoga With Adriene = senior daily yoga</h3><p className="text-sm text-muted-foreground">Free Yoga With Adriene YouTube + free SilverSneakers Yoga (if Medicare Advantage) + chair yoga = senior comprehensive practice. Daily 15-30 min improves balance, flexibility, sleep. Down Dog $60/yr personalize. Local studios for community. Worth daily.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
