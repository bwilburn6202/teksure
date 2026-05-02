import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function SeniorPhoneStandSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Stands for Seniors — Senior Guide" description="Pick a phone stand to free up your hands." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Stands</h1>
          <p className="text-lg text-muted-foreground">Hands-free phone use.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Lamicall</h2><p>$15. Adjustable angle. Most popular desk stand.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Folding stand</h2><p>$8. Folds flat. Easy to pack for travel.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Gooseneck holder</h2><p>$20. Clamps to bed or chair. Great for reading in bed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. PopSocket</h2><p>$10. Sticks to back of phone. Pull out for grip.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Magnetic mount</h2><p>For iPhone with MagSafe. Snaps to dashboard for car GPS.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Where to buy</h2><p>Amazon, Walmart, Best Buy. Pick at the price you're comfortable with.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>A stand reduces neck strain. Worth $10 for daily comfort.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
