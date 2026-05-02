import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SeniorHolidayCardApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Holiday Card Apps for Seniors — TekSure" description="Send custom holiday cards from your phone — Mixbook, Shutterfly, Felt." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Holiday Card Apps</h1>
          <p className="text-lg text-muted-foreground">Phone photos to mailed cards.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Shutterfly</h2><p>$2-$4 per card. They print and mail. Free shipping codes often.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mixbook</h2><p>Higher quality. $3-$6 per card. Designer templates.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Felt</h2><p>$5/card. Sends real handwritten-style cards. Recipients love them.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Punkpost</h2><p>$5-$10. Real artist hand-letters cards. Premium experience.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch sales</h2><p>40-50% off Black Friday. Order early to lock in low prices.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Address book</h2><p>Apps save addresses year to year. Easier than handwriting.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Order by Dec 5 for guaranteed Christmas delivery.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
