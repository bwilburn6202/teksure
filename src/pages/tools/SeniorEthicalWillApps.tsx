import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorEthicalWillApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Ethical Will Apps | TekSure" description="Pass values + wisdom to family. Senior ethical will guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ethical Will</h1>
          <p className="text-lg text-muted-foreground">Senior wisdom legacy.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Letter of values + wisdom.</li><li>Senior teaches family.</li><li>Not legal — just heart.</li><li>Jewish tradition centuries.</li><li>Worth writing.</li><li>Free + powerful.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What include</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Life lessons learned.</li><li>Family stories.</li><li>Senior values + faith.</li><li>Hopes for grandkids.</li><li>Apologies + thanks.</li><li>Worth reflection.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Format options</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Written letter.</li><li>Voice memo iPhone.</li><li>Senior video.</li><li>StoryWorth book.</li><li>Personal preference.</li><li>Worth multiple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Where save</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iCloud + family member.</li><li>Senior backup multiple.</li><li>Estate file.</li><li>Tell where.</li><li>Free.</li><li>Worth setup.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Update over time</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>New grandkids.</li><li>Senior life lessons.</li><li>Annual update tradition.</li><li>Birthday or New Year.</li><li>Worth ritual.</li><li>Personal growth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Read aloud</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Some seniors share alive.</li><li>Family treasures.</li><li>Senior connection.</li><li>Read at family gathering.</li><li>Powerful experience.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free ethical will = senior wisdom legacy</h3><p className="text-sm text-muted-foreground">Senior ethical will (letter of values, wisdom, hopes for family) = priceless legacy. Free Notes app or video iPhone. Save iCloud + family copies. Update annually. Some share alive — powerful family moments. Most under-considered senior legacy gift.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
