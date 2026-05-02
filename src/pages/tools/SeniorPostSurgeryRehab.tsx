import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorPostSurgeryRehab() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Post-Surgery Recovery for Seniors — TekSure" description="Faster recovery — Recovery Plus, prehab, telehealth PT." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Post-Surgery Recovery</h1>
          <p className="text-lg text-muted-foreground">Get back to normal faster.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pre-hab</h2><p>Strengthen 6 weeks before surgery. Cuts recovery 30-50%.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hinge Health</h2><p>FREE through many Medicare plans. Post-op PT at home.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Recovery Plus</h2><p>Insurance-covered. Mail kit. Video PT sessions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use insurance</h2><p>Medicare covers 36 PT sessions. Take all. Don&apos;t skip.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pain management</h2><p>Ice + elevation + walking. Don&apos;t lay too long.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Track progress</h2><p>Phone notes daily. Range of motion. Pain level.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Walk first day post-op (with help). Prevents blood clots and pneumonia.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
