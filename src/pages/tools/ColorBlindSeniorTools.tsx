import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Palette } from 'lucide-react';

export default function ColorBlindSeniorTools() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Color Blind Tools for Seniors | TekSure" description="iPhone color filters + apps for senior color blindness." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Palette className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Color Blind Tools</h1>
          <p className="text-lg text-muted-foreground">Senior accessibility.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone Color Filters</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Settings → Accessibility → Display.</li><li>Color Filters.</li><li>Adjust for vision.</li><li>Senior built-in.</li><li>Free.</li><li>Customize.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Color Blind Pal</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app.</li><li>Identifies colors.</li><li>Senior shopping help.</li><li>Camera-based.</li><li>iPhone + Android.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">EnChroma glasses</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$200-$400.</li><li>For red-green.</li><li>Senior life-changing.</li><li>YouTube reactions emotional.</li><li>Worth investment.</li><li>Try at home.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Worsening with age.</li><li>Pill identification.</li><li>Map colors.</li><li>Stoplight worsening.</li><li>Talk doctor.</li><li>Multiple options.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Daily tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Label clothes color.</li><li>Family labels.</li><li>Senior daily routine.</li><li>App when shopping.</li><li>Pill organizer text labels.</li><li>Workarounds work.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Eye doctor</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Test annually.</li><li>Sudden change = call.</li><li>Senior macular degeneration.</li><li>Cataracts.</li><li>Diabetic retinopathy.</li><li>Critical regular care.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Color Blind Pal = senior color helper</h3><p className="text-sm text-muted-foreground">Free Color Blind Pal app + iPhone Color Filters built-in = senior daily color help. EnChroma glasses $200-$400 if want corrective. Annual eye doctor catches new issues. Multiple workarounds preserve independence. Free options abundant.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
