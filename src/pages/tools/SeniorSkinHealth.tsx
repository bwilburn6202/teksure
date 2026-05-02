import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

export default function SeniorSkinHealth() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Skin Health for Seniors — TekSure" description="Skin cancer screening, dry skin, age spots — senior skin care." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Skin Health</h1>
          <p className="text-lg text-muted-foreground">Yearly check critical.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Annual skin check</h2><p>Medicare covers. Catches skin cancer early. 99% cure rate if early.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch ABCDE</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Asymmetry</li><li>Border irregular</li><li>Color varies</li><li>Diameter &gt;6mm</li><li>Evolving</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dry skin</h2><p>CeraVe lotion. Apply right after bath. Prevents winter cracks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Age spots</h2><p>Cosmetic. Talk to dermatologist if bothered. Lasers safe.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sunscreen daily</h2><p>SPF 30+ on face/hands. Even cloudy days. Even in car.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hat outside</h2><p>Wide brim. Best skin cancer prevention.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Use phone to photo any new spot. Track over months. Show doctor if changes.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
