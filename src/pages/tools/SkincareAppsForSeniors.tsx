import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SkincareAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Skincare Apps for Seniors | TekSure" description="Mature skin app guides. Senior skincare routine apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Skincare Apps</h1>
          <p className="text-lg text-muted-foreground">Senior skin care.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Skincare apps</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>YUKA — scan ingredients.</li><li>Skin Guide.</li><li>Curology — Rx-style.</li><li>Senior personalized.</li><li>Free options.</li><li>Easy use.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior priorities</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sunscreen daily.</li><li>Moisturizer.</li><li>Gentle cleanser.</li><li>Retinol night.</li><li>Senior simple routine.</li><li>3 products enough.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sun damage check</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>SkinVision $40/yr.</li><li>AI checks moles.</li><li>Senior skin cancer screening.</li><li>Don&apos;t replace dermatologist.</li><li>Quick reassurance.</li><li>Annual checkup important.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free dermatologist online</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apostrophe ($35/visit).</li><li>Curology.</li><li>Skin telehealth.</li><li>Senior at-home.</li><li>Insurance + Medicare may cover.</li><li>Worth checking.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Don&apos;t buy expensive products from ads.</li><li>YUKA scan rating.</li><li>Senior cosmetic scams.</li><li>$200 cream often $20 effect.</li><li>Read reviews.</li><li>Skip MLM.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Drugstore + dermatologist combo.</li><li>CeraVe, Cetaphil basics.</li><li>SPF 30+ daily.</li><li>Senior best skin.</li><li>Less is more.</li><li>Consistency beats expensive.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free YUKA app = senior product check</h3><p className="text-sm text-muted-foreground">Free YUKA app scans skincare ingredients — senior shopping smart. Plus simple routine: cleanser + moisturizer + sunscreen. CeraVe drugstore $15 = same as $200 luxury. Apostrophe online dermatologist $35. Don&apos;t over-spend on senior beauty.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
