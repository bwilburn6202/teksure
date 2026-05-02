import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorDanceApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dance Apps for Seniors — TekSure" description="Senior dance — Zumba Gold, line dance, ballroom apps and classes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dance Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Cardio + balance + joy.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Zumba Gold</h2><p>Designed for 60+. Lower impact. Many gyms offer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Line dance</h2><p>YouTube has hundreds. No partner needed. Great for widows/widowers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ballroom dance</h2><p>Arthur Murray. Local studios. Senior discounts available.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Studies show</h2><p>Dancing reduces dementia risk 76%. Highest of any activity studied.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Just Dance</h2><p>$60 game. TV + Wii/Switch. Family fun. Real cardio.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Seniors-only nights</h2><p>Many ballrooms have senior nights. Lower fees. Older crowd.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Dance is best dementia prevention exercise. Brain + body together.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
