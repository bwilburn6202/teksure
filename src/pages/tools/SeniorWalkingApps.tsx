import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

export default function SeniorWalkingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walking Apps for Seniors — TekSure" description="Best step counters and walking apps for seniors — free and easy to use." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walking Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Track steps. Build a walking habit.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Health / Google Fit</h2><p>Built into your phone. Counts steps automatically when you carry it.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pacer</h2><p>Free. Big numbers. Walking groups for motivation. Works without a watch.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">StepsApp</h2><p>Free. Beautiful charts. Reminds you to move every hour.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">AllTrails</h2><p>Free. Find walking trails near you. Filter by &ldquo;easy&rdquo; and &ldquo;paved.&rdquo;</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Walking goals</h2><p>Doctors recommend 30 minutes daily. Start with 2,000 steps and add 500 weekly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Safety</h2><p>Tell someone your route. Carry your phone. Wear a Medical ID bracelet.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Walking with a friend doubles consistency. Start a daily 20-minute neighbor walk.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
