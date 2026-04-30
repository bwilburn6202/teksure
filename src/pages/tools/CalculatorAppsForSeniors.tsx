import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator } from 'lucide-react';

export default function CalculatorAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Calculator Apps for Seniors | TekSure" description="Best calculator apps for senior daily math." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Calculator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Calculator Apps</h1>
          <p className="text-lg text-muted-foreground">Senior math made easy.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Built-in</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone Calculator app.</li><li>Android Calculator app.</li><li>Free pre-installed.</li><li>Tilt iPhone for scientific.</li><li>Senior simple.</li><li>Always available.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tip Calculator</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apps free for tipping.</li><li>Split bill among friends.</li><li>Senior dining out.</li><li>Calculator built-in does it.</li><li>Free.</li><li>Senior dignity.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Voice math</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>&quot;Hey Siri, what&apos;s 15% of 47?&quot;</li><li>Instant answer.</li><li>Senior no app needed.</li><li>Hands-free.</li><li>Free.</li><li>Magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Currency converter</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built-in iPhone.</li><li>Spotlight search currency.</li><li>Travel converter.</li><li>Senior abroad.</li><li>Free.</li><li>Live rates.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Unit converter</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cooking conversions.</li><li>Cups to liters.</li><li>F to C.</li><li>Built-in iOS.</li><li>Senior recipes.</li><li>Type in calculator.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Math Notes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iOS 18 new feature.</li><li>Write equations.</li><li>iPhone solves.</li><li>Senior magic.</li><li>Apple Pencil too.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Voice math + iPhone calc = senior math</h3><p className="text-sm text-muted-foreground">&quot;Hey Siri, 18% of $52&quot; = instant tip. Plus iPhone Calculator built-in handles everything. iOS 18 Math Notes solves handwritten equations. Senior never need separate math app. All free, built-in. Most under-used iPhone feature.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
