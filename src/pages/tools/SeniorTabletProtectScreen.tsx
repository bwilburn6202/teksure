import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorTabletProtectScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Screen Protectors — Senior Guide" description="Protect phone and tablet screens." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Screen Protectors</h1>
          <p className="text-lg text-muted-foreground">Save your screen for $10-20.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Tempered glass</h2><p>$10-20. Best protection. Feels like real glass.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Privacy screen</h2><p>Limits viewing angle. Side passengers can't see your screen.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Anti-glare</h2><p>Matte finish. Less glare in bright light. Slightly less crisp.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Application</h2><p>Most come with cleaning kit. Apply in dust-free room. Many free YouTube videos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Pro install</h2><p>Best Buy installs for $5-15. No bubbles. Worth it for bigger tablets.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Replace if cracks</h2><p>Better to crack the protector than the screen. Replace $10 protector.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Brands like Spigen, Zagg, Paperlike. Read reviews before buying generic.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
