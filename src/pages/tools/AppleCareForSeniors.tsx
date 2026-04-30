import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function AppleCareForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AppleCare for Seniors | TekSure" description="Apple device protection for seniors. Worth it analysis." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AppleCare</h1>
          <p className="text-lg text-muted-foreground">Senior device protection.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it covers</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hardware repairs.</li><li>Accidental damage 2x.</li><li>Phone battery service.</li><li>24/7 phone support.</li><li>Senior-friendly support.</li><li>Genius Bar priority.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone $200/2yr</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Or $9.99/mo monthly.</li><li>Screen repair $29.</li><li>Other damage $99.</li><li>Senior klutz worth it.</li><li>Phone calls support.</li><li>Tech help anytime.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mac $200/3yr</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Spills covered $99.</li><li>Hardware free.</li><li>Senior worth it.</li><li>Phone support 3 years.</li><li>Vs $200 spill repair.</li><li>Pays for itself easily.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior phone support</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>1-877-204-3930 Accessibility.</li><li>Free without AppleCare.</li><li>Patient + senior-friendly.</li><li>Walk through anything.</li><li>Senior gold.</li><li>Don&apos;t suffer alone.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When senior need</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone $1,000+.</li><li>Mac $1,500+.</li><li>Drop accidents likely.</li><li>Want phone support.</li><li>Senior peace of mind.</li><li>Worth it most cases.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When skip</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cheap iPad.</li><li>Older device.</li><li>Self-insure plan.</li><li>Senior tough cases.</li><li>OtterBox + glass instead.</li><li>$30 alternative.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$200 AppleCare = senior peace</h3><p className="text-sm text-muted-foreground">$200 AppleCare on $1,000+ iPhone or Mac = senior peace of mind. Screen repair $29 vs $329 saved instantly. Plus 24/7 phone support patient + senior-friendly. Worth it most senior cases. Or call free 1-877-204-3930 Accessibility line anytime.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
