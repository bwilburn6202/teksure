import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function SeniorPhoneCases() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Cases for Seniors — Senior Guide" description="Pick a case that protects without bulk." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Cases</h1>
          <p className="text-lg text-muted-foreground">Pick a case that fits your needs.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. OtterBox Defender</h2><p>$50-80. Tough drop protection. Bulky but very protective.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Apple Silicone</h2><p>$50. Slim. Good grip. Comes in many colors.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Wallet case</h2><p>$30-60. Stores cards plus phone. Less bag clutter.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. PopSocket</h2><p>$10. Sticks to back of phone. Better grip = fewer drops.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Lanyard cases</h2><p>$20. Wear phone like a necklace. Good for active seniors.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip cheap copies</h2><p>$5 cases on Amazon don't protect well. Spend at least $25.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Tempered glass screen protector ($10) prevents 90% of cracks. Worth the small spend.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
