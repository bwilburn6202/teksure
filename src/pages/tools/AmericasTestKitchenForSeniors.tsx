import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CookingPot } from 'lucide-react';

export default function AmericasTestKitchenForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="America's Test Kitchen for Seniors | TekSure" description="Tested recipes + equipment reviews. ATK app for senior cooks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CookingPot className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">America&apos;s Test Kitchen</h1>
          <p className="text-lg text-muted-foreground">PBS show — premium recipes.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it offers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$50/year subscription.</li><li>10,000+ tested recipes.</li><li>Equipment reviews.</li><li>Cookbook quality.</li><li>Senior favorite TV show.</li><li>Highly trusted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>PBS show familiar.</li><li>Christopher Kimball legacy.</li><li>Step-by-step very detailed.</li><li>Senior thorough approach.</li><li>Reliable results.</li><li>Multi-app subscription.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Equipment reviews</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tested side-by-side.</li><li>Best Buy + cheap winner.</li><li>Save money.</li><li>Senior smart shopping.</li><li>Worth subscription alone.</li><li>Trustworthy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free options</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>PBS show free.</li><li>YouTube clips free.</li><li>Cookbook from library.</li><li>Senior thrifty.</li><li>Try before $50/year.</li><li>Solid free content.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cook&apos;s Country</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sister site.</li><li>Regional American food.</li><li>Comfort food focus.</li><li>Senior nostalgic.</li><li>Same subscription.</li><li>Both included.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs NYT Cooking</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>ATK — more thorough.</li><li>NYT — broader, newer.</li><li>ATK $50, NYT $60.</li><li>Senior preference.</li><li>Try both free trials.</li><li>Pick one.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$50 = senior reliable cooking</h3><p className="text-sm text-muted-foreground">Many seniors love America&apos;s Test Kitchen TV. $50/year unlocks all 10,000 recipes + tested equipment reviews. Reliable as a friend who really tests. Worth it for active seniors who cook 5x/week. Or use free PBS clips + library cookbook.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
