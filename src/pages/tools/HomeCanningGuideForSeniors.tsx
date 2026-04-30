import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Soup } from 'lucide-react';

export default function HomeCanningGuideForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Canning Guide for Seniors | TekSure" description="Safe home canning + preserving. Apps and resources for senior home cooks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Soup className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Canning</h1>
          <p className="text-lg text-muted-foreground">Safe preserving for seniors.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Ball Canning app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free official app.</li><li>Tested recipes only.</li><li>Step-by-step.</li><li>Safe processing times.</li><li>iOS + Android.</li><li>Trusted source.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">USDA + extension</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Nchfp.uga.edu (free).</li><li>USDA Complete Guide.</li><li>State extension office.</li><li>Free senior classes.</li><li>Tested recipes.</li><li>Avoid Pinterest unsafe recipes.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Water bath canning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Jams + jellies.</li><li>Pickles + tomatoes.</li><li>High-acid foods only.</li><li>Easier for beginners.</li><li>Big stockpot works.</li><li>Senior-friendly start.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pressure canning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Vegetables + meat.</li><li>Low-acid foods.</li><li>Heavier equipment.</li><li>Higher learning curve.</li><li>Botulism risk if wrong.</li><li>Take a class first.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior safety</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Heavy lifting — get help.</li><li>Steam burns common.</li><li>Cool kitchen — A/C.</li><li>Non-slip mat.</li><li>Take breaks.</li><li>Don&apos;t can alone first time.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">YouTube channels</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>RoseRed Homestead.</li><li>SuttonsDaze.</li><li>The Canning Diva.</li><li>Free safe recipes.</li><li>Watch before doing.</li><li>Senior-friendly pacing.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Ball app + USDA = safe canning</h3><p className="text-sm text-muted-foreground">For safe home canning, only use Ball Canning app and USDA-tested recipes. Skip random Pinterest pins. Botulism is real and deadly. Free Ball app teaches you everything safely. Connect with senior canning groups locally — share knowledge, jars, and joy.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
