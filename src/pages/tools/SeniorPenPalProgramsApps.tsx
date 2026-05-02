import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function SeniorPenPalProgramsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Free Pen Pal Programs for Seniors — TekSure" description="Free letter programs — Letters Against Isolation, Love For The Elderly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Pen Pal Programs</h1>
          <p className="text-lg text-muted-foreground">Receive real mail.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Letters Against Isolation</h2><p>FREE. Sign up at lettersagainstisolation.com. Receive monthly letters.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Love for the Elderly</h2><p>FREE. loveforelderly.org. Volunteers send cheerful letters.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Snail Mail Project</h2><p>FREE. Match with a pen pal. Real letters.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">From schoolchildren</h2><p>Many programs match elementary students with seniors. Both benefit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Local senior centers</h2><p>Often have card-writing groups. Pair with senior pen pals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Veterans pen pals</h2><p>Operation Gratitude. Get letters from active military.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Real mail brightens entire week. Sign up for at least one program.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
