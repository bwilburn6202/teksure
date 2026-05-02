import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';

export default function SeniorTechGiftsForOlderParents() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tech Gifts for Aging Parents — TekSure" description="Best tech gifts for parents 75+ — easy, useful, no learning curve." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gift className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tech Gifts for Aging Parents</h1>
          <p className="text-lg text-muted-foreground">Useful. Simple. Loved.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Echo Show 8</h2><p>$140. Video calls by voice. Family photos auto-rotate. Best gift.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Aura Carver Frame</h2><p>$179. Family texts photos. Frame updates automatically. Tears every Christmas.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple AirTags</h2><p>$25 each. Track keys, wallet, cane. Find with iPhone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Kindle Paperwhite</h2><p>$150. Big text, easier on eyes than print books.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Watch SE</h2><p>$249. Fall detection. Heart monitoring. Calls with cellular option.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Set it up</h2><p>Setting up tech is the gift. Don&apos;t hand a parent a box. Hand them a working device.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Echo Show + Aura frame combo for $300. Total game changer for parents.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
