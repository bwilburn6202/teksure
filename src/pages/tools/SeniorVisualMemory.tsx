import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorVisualMemory() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Visual Memory Games for Seniors — TekSure" description="Spot the difference, hidden objects, visual brain training." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Visual Memory Games</h1>
          <p className="text-lg text-muted-foreground">Train visual brain.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Spot the Difference</h2><p>FREE apps. Find changes between two images.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hidden Objects</h2><p>FREE. Find items in cluttered scenes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">I Spy books</h2><p>$15. Real books. With grandkids. Multi-generation fun.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Magic Eye</h2><p>3D pictures. Senior nostalgia. Visual brain workout.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Optical illusions</h2><p>Free online. Test brain&apos;s pattern recognition.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why visual</h2><p>Visual memory often stays sharper than verbal. Train it more.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Photo memory game with grandkids = visual memory + bonding.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
