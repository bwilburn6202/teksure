import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorMassageTherapy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Massage Therapy Apps | TekSure" description="Find massage therapists. Senior at-home wellness." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Massage</h1>
          <p className="text-lg text-muted-foreground">Wellness at home.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Soothe app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$100-$200/visit.</li><li>Massage at home.</li><li>Senior comfort.</li><li>Background-checked.</li><li>App schedule.</li><li>Worth periodic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior Center programs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cheap massage often.</li><li>$30-$50/hr.</li><li>Senior community.</li><li>Free to discount.</li><li>Worth checking.</li><li>Local resource.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Massage chair home</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$2,000-$8,000.</li><li>Senior daily access.</li><li>Worth heavy users.</li><li>Try in store first.</li><li>Big investment.</li><li>Long-term value.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Theragun + foam roller</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80-$200.</li><li>Self-massage senior.</li><li>Daily use.</li><li>YouTube guides free.</li><li>Worth small investment.</li><li>Effective.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Insurance covers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Some Medicare Advantage.</li><li>Senior ask plan.</li><li>Specific conditions.</li><li>Free if covered.</li><li>Worth checking.</li><li>FSA eligible often.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior precautions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Doctor consult heavy issues.</li><li>Blood thinners careful.</li><li>Senior fragile skin gentle.</li><li>Communicate therapist.</li><li>Worth telling concerns.</li><li>Safe.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Senior centers + Theragun = senior wellness</h3><p className="text-sm text-muted-foreground">Senior centers $30-$50 massage + $80 Theragun home self-massage + YouTube guides free = senior wellness routine. Soothe app $100-$200/visit at home if treat. Some Medicare Advantage covers. Worth wellness investment.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
