import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorTMobile55() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="T-Mobile 55+ Plans for Seniors — TekSure" description="T-Mobile senior plans — 2-line 55+ Magenta, included perks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">T-Mobile 55+ Plans</h1>
          <p className="text-lg text-muted-foreground">Most senior-friendly carrier.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Essentials 55</h2><p>$40/month for 1 line, $30/each for 2 lines. Cheapest 55+ option.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Go5G Next 55</h2><p>$70/each for 2 lines. Includes Apple TV+ free, MLB+, Netflix.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">International included</h2><p>Free data and texting in 215+ countries. Big senior travel benefit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Scam Shield</h2><p>FREE. Blocks robocalls. Identifies scammers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tuesday rewards</h2><p>FREE coffee, food, gas via T-Mobile Tuesdays app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">2-line discount</h2><p>Senior couples save $20/month vs single lines.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: T-Mobile lets you switch back if not satisfied within 30 days.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
