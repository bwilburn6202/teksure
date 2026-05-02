import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors } from 'lucide-react';

export default function CricutForSeniorCrafters() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cricut for Senior Crafters | TekSure" description="Cricut machines + apps for senior craft projects." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scissors className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cricut Crafting</h1>
          <p className="text-lg text-muted-foreground">Senior craft machine.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cricut Joy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$180 — smallest.</li><li>Cards + labels.</li><li>Senior friendly start.</li><li>Compact.</li><li>Wireless.</li><li>Beginner-perfect.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cricut Maker 3</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$400.</li><li>Cuts fabric, leather.</li><li>Senior expanded options.</li><li>Premium machine.</li><li>Sews quilts.</li><li>Worth experienced crafter.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Design Space free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free design app.</li><li>Drag + drop.</li><li>Senior easy to use.</li><li>Library + projects.</li><li>iPhone, iPad, computer.</li><li>Beginner-friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cricut Access</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$10/mo subscription.</li><li>Unlimited fonts + designs.</li><li>Senior creative library.</li><li>Optional.</li><li>Free version sufficient.</li><li>Try free first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior projects</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Greeting cards.</li><li>T-shirt designs.</li><li>Vinyl decals.</li><li>Quilting.</li><li>Senior gift-making.</li><li>Family treasures.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">YouTube tutorials</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free abundant.</li><li>Cricut official channel.</li><li>Senior step-by-step.</li><li>Watch first project.</li><li>Free always.</li><li>Don&apos;t pay courses.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$180 Cricut Joy = senior craft start</h3><p className="text-sm text-muted-foreground">$180 Cricut Joy + free Design Space + free YouTube tutorials = senior craft start. Cards, labels, vinyl. Skip $10/mo Access initially. Make grandkid t-shirts, family Christmas cards. Most under-considered senior creative outlet.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
