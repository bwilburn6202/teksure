import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function SeniorMasterClass() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MasterClass for Seniors — TekSure" description="Learn from world-class teachers — cooking, writing, photography — for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <GraduationCap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MasterClass for Seniors</h1>
          <p className="text-lg text-muted-foreground">Learn from celebrity teachers.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$120/year for 200+ classes. Often 2-for-1 in November/December.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Gordon Ramsay cooking</li><li>James Patterson writing</li><li>Annie Leibovitz photography</li><li>Anna Wintour leadership</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch on TV</h2><p>Cast from phone to Roku, Apple TV, or Chromecast. Watch on big screen.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free alternatives</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>YouTube — most topics, free</li><li>Coursera audit — free</li><li>Khan Academy — free</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Library cards</h2><p>Many libraries offer free MasterClass through partnerships. Ask your local library.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior discount</h2><p>AARP members save 25% — through aarp.org member benefits.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Watch one episode at dinner. 5 days a week = 250 hours of learning a year.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
